import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Environment, Lightformer, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import GarageDoorModel from './GarageDoorModel.jsx';

/**
 * Studio-lit, orbitable garage door. The canvas is fully transparent - there is
 * no room, floor or environment background, only the model and its contact
 * shadow - so it can sit straight on top of the page.
 */

const CAMERA = { position: [5.3, 2.75, 7.2], fov: 27 };
const IDLE_BEFORE_AUTOROTATE = 4000;

/**
 * Soft ground shadow. The door only touches the floor along one narrow strip,
 * so a pair of painted falloffs grounds it far more predictably than a depth
 * pass would - and costs two textured quads.
 */
function GroundShadow({ y }) {
  const texture = useMemo(() => {
    const size = 128;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    gradient.addColorStop(0, 'rgba(0,0,0,0.62)');
    gradient.addColorStop(0.4, 'rgba(0,0,0,0.34)');
    gradient.addColorStop(0.75, 'rgba(0,0,0,0.08)');
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, []);

  return (
    <group position={[0, y - 0.004, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      {/* tight line under the door itself */}
      <mesh scale={[5.6, 1.1, 1]} position={[0, -0.02, 0]}>
        <planeGeometry />
        <meshBasicMaterial map={texture} transparent depthWrite={false} opacity={0.85} />
      </mesh>
      {/* wider ambient falloff carrying the overhead gear */}
      <mesh scale={[7.4, 4.6, 1]} position={[0, 1.1, -0.001]}>
        <planeGeometry />
        <meshBasicMaterial map={texture} transparent depthWrite={false} opacity={0.3} />
      </mesh>
    </group>
  );
}

/**
 * Centres the model on the origin and scales it so it fills a fixed share of
 * the canvas at any aspect ratio. Scaling the model rather than moving the
 * camera means a resize never throws away the angle the visitor rotated to.
 *
 * The fit projects the model's bounding box at every step of the turntable and
 * scales until the worst of those silhouettes sits inside the frame, so the
 * door is never clipped at any angle. Projecting, rather than comparing world
 * sizes, matters because the assembly is deep: its near corner is a third
 * closer to the lens than its centre and would otherwise run off the edge.
 */
function Fitted({ fill, children }) {
  const outer = useRef(null);
  const inner = useRef(null);
  const size = useThree((s) => s.size);
  const camera = useThree((s) => s.camera);
  const probe = useRef({ points: [], camera: null });
  const [ground, setGround] = useState(null);

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(inner.current);
    const center = box.getCenter(new THREE.Vector3());
    const span = box.getSize(new THREE.Vector3());

    inner.current.position.set(-center.x, -center.y, -center.z);

    const points = [];
    const hx = span.x / 2;
    const hy = span.y / 2;
    const hz = span.z / 2;
    for (let i = 0; i < 24; i += 1) {
      const a = (i / 24) * Math.PI * 2;
      const cos = Math.cos(a);
      const sin = Math.sin(a);
      for (const sx of [-1, 1]) {
        for (const sz of [-1, 1]) {
          const x = sx * hx * cos + sz * hz * sin;
          const z = -sx * hx * sin + sz * hz * cos;
          points.push(new THREE.Vector3(x, hy, z), new THREE.Vector3(x, -hy, z));
        }
      }
    }

    // OrbitControls has not aimed the real camera yet, so give the probe the
    // opening pose explicitly rather than cloning an unoriented camera.
    const pose = camera.clone();
    pose.position.set(...CAMERA.position);
    pose.lookAt(0, 0, 0);

    probe.current = { points, camera: pose };
    setGround(box.min.y - center.y);
  }, [camera]);

  useLayoutEffect(() => {
    const { points, camera: pose } = probe.current;
    if (!pose || !outer.current) return;

    // Integer pixels only - sub-pixel canvas size flicker was rescaling the
    // whole model every frame and made the turntable look shaky.
    const w = Math.max(1, Math.round(size.width));
    const h = Math.max(1, Math.round(size.height));
    pose.aspect = w / h;
    pose.updateProjectionMatrix();
    pose.updateMatrixWorld();

    const v = new THREE.Vector3();
    let scale = 1;
    // a couple of passes is plenty - perspective makes this non-linear but the
    // correction converges fast
    for (let pass = 0; pass < 3; pass += 1) {
      let overshoot = 0;
      for (const p of points) {
        v.copy(p).multiplyScalar(scale).project(pose);
        overshoot = Math.max(overshoot, Math.abs(v.x), Math.abs(v.y));
      }
      if (!overshoot) break;
      scale *= fill / overshoot;
    }
    const next = Math.round(scale * 1000) / 1000;
    if (Math.abs(outer.current.scale.x - next) > 0.002) {
      outer.current.scale.setScalar(next);
    }
  }, [size.width, size.height, fill]);

  return (
    <group ref={outer}>
      <group ref={inner}>{children}</group>
      {ground !== null && <GroundShadow y={ground} />}
    </group>
  );
}

/**
 * Vertical studio gradient, bright overhead and falling off toward the floor.
 * Lining the environment with it is what makes the galvanised parts read as
 * polished steel instead of black - metal has almost no diffuse response, so
 * it can only show what is around it.
 */
function useStudioGradient() {
  return useMemo(() => {
    const steps = 64;
    const data = new Uint8Array(steps * 4);
    for (let i = 0; i < steps; i += 1) {
      const t = i / (steps - 1);
      const level = Math.round(255 * (0.18 + 0.72 * t ** 0.85));
      data.set([level, level, Math.min(255, level + 5), 255], i * 4);
    }
    const tex = new THREE.DataTexture(data, 1, steps);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.needsUpdate = true;
    return tex;
  }, []);
}

function Studio() {
  const gradient = useStudioGradient();

  return (
    <>
      <ambientLight intensity={0.14} />
      {/* Key: a wide, heavily feathered spot rather than a directional light.
          Its falloff is what gives the flat door face a gradient instead of one
          uniform tone. */}
      <spotLight
        position={[-4.2, 6.4, 7.6]}
        angle={1.05}
        penumbra={1}
        decay={2}
        intensity={190}
      />
      {/* fill on the camera side, plus a low bounce to open up the shadows */}
      <directionalLight position={[8, 3, 5]} intensity={0.75} />
      <directionalLight position={[0, -3, 4]} intensity={0.15} />
      {/* rim, so the tracks read against the page behind them */}
      <directionalLight position={[1.5, 4.5, -7]} intensity={0.65} />

      {/* studio surround, built in-scene so nothing is fetched over the network */}
      <Environment resolution={128} frames={1}>
        <mesh scale={60}>
          <sphereGeometry args={[1, 24, 16]} />
          <meshBasicMaterial map={gradient} side={THREE.BackSide} toneMapped={false} />
        </mesh>
        {/* key softbox and a couple of edge strips for specular interest */}
        <Lightformer form="rect" intensity={2.4} position={[-4, 7, 5]} scale={[12, 7, 1]} rotation={[-0.5, -0.5, 0]} />
        <Lightformer form="rect" intensity={1.1} position={[7, 2.5, 3]} scale={[5, 8, 1]} rotation={[0, 1.1, 0]} />
        <Lightformer form="rect" intensity={0.9} position={[0, 3, -8]} scale={[12, 5, 1]} rotation={[0.25, Math.PI, 0]} />
      </Environment>
    </>
  );
}

export default function GarageDoor3D({
  frameloop = 'always',
  fill = 1,
  compact = false,
  spin = true,
}) {
  const [autoRotate, setAutoRotate] = useState(spin);
  const idle = useRef(null);
  const reduced = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    reduced.current = mq.matches || !spin;
    if (reduced.current) setAutoRotate(false);
    return () => clearTimeout(idle.current);
  }, [spin]);

  const onStart = useCallback(() => {
    clearTimeout(idle.current);
    setAutoRotate(false);
  }, []);

  const onEnd = useCallback(() => {
    if (reduced.current) return;
    clearTimeout(idle.current);
    idle.current = setTimeout(() => setAutoRotate(true), IDLE_BEFORE_AUTOROTATE);
  }, []);

  return (
    <Canvas
      frameloop={frameloop}
      dpr={[1, 1.5]}
      camera={CAMERA}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      onCreated={({ gl }) => {
        gl.setClearAlpha(0);
        gl.toneMappingExposure = 0.85;
      }}
      style={{ background: 'transparent', touchAction: 'pan-y' }}
    >
      <Studio />

      <Fitted fill={compact ? fill * 0.95 : fill}>
        <GarageDoorModel />
      </Fitted>

      <OrbitControls
        makeDefault
        target={[0, 0, 0]}
        enablePan={false}
        enableDamping
        dampingFactor={0.12}
        rotateSpeed={0.55}
        zoomSpeed={0.45}
        minDistance={5.5}
        maxDistance={12}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.8}
        autoRotate={autoRotate}
        autoRotateSpeed={0.22}
        onStart={onStart}
        onEnd={onEnd}
      />
    </Canvas>
  );
}
