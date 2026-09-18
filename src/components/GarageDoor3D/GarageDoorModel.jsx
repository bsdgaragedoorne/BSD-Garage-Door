import { useLayoutEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';

/**
 * A white sectional garage door built as real geometry: door slab, jambs and
 * header, galvanised vertical + horizontal tracks with the curve between them,
 * overhead hangers, a centre-mounted opener and the usual hardware.
 *
 * Units are roughly feet. The door sits on y = 0 and faces +z; everything
 * mechanical (torsion shaft, tracks, opener) lives behind it in -z, which is
 * also where a real installation puts it.
 */

/* --- dimensions ---------------------------------------------------------- */

const W = 4.2; // door width
const H = 2.45; // door height
const T = 0.1; // door thickness
const SECTIONS = 7;
const SH = H / SECTIONS; // section height

const DOOR_X = W / 2; // door edge
const JAMB_X = W / 2 + 0.14; // white jamb board beside the opening
const TRACK_X = W / 2 + 0.35; // track runs outboard of the jamb, as it does on
const TRACK_Z = -0.14; // a real install - rollers reach it on 4in stems
const CASING_X = TRACK_X + 0.12;

const HEADER_Y = H + 0.02; // underside of the header
const HEADER_H = 0.24;
const CURVE_R = 0.38;
const RAIL_Y = H - 0.3 + CURVE_R; // horizontal track height
const RAIL_BACK = -3.15;
const SHAFT_Y = HEADER_Y + HEADER_H / 2;
const SHAFT_Z = -0.34; // behind the header, hidden from the front

const OPENER_Y = RAIL_Y + 0.37;
const OPENER_FRONT = -0.45;
const OPENER_BACK = -2.8;

/* --- shared materials ---------------------------------------------------- */

const std = (o) => new THREE.MeshStandardMaterial(o);

const MAT = {
  door: std({ color: '#f4f4f2', metalness: 0.18, roughness: 0.44, envMapIntensity: 0.6 }),
  doorGroove: std({ color: '#bcbcb8', metalness: 0.08, roughness: 0.8, envMapIntensity: 0.3 }),
  frame: std({ color: '#fafaf8', metalness: 0.04, roughness: 0.58, envMapIntensity: 0.45 }),
  track: std({ color: '#c6cace', metalness: 0.92, roughness: 0.34, envMapIntensity: 1.1 }),
  bracket: std({ color: '#b4b9bf', metalness: 0.88, roughness: 0.42, envMapIntensity: 1 }),
  bolt: std({ color: '#8f959b', metalness: 0.9, roughness: 0.45 }),
  dark: std({ color: '#2a2c2f', metalness: 0.55, roughness: 0.45 }),
  rubber: std({ color: '#1c1d1f', metalness: 0.1, roughness: 0.85 }),
};

/* --- shared geometry ----------------------------------------------------- */

const UNIT_BOX = new THREE.BoxGeometry(1, 1, 1);
const UNIT_CYL = new THREE.CylinderGeometry(1, 1, 1, 18);

/** Box driven by a unit cube so every box in the model shares one buffer. */
function B({ size, material = MAT.bracket, ...rest }) {
  return <mesh geometry={UNIT_BOX} material={material} scale={size} {...rest} />;
}

/** Cylinder from the shared unit cylinder. `axis` rotates it off +y. */
function C({ r, h, material = MAT.bracket, axis = 'y', rotation, ...rest }) {
  const rot = rotation ?? (axis === 'x' ? [0, 0, Math.PI / 2] : axis === 'z' ? [Math.PI / 2, 0, 0] : undefined);
  return <mesh geometry={UNIT_CYL} material={material} scale={[r, h, r]} rotation={rot} {...rest} />;
}

/** Many identical bolt heads in a single draw call. */
function Bolts({ points, r = 0.017, h = 0.016, axis = 'z', material = MAT.bolt }) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const e = new THREE.Euler(
      axis === 'z' ? Math.PI / 2 : 0,
      0,
      axis === 'x' ? Math.PI / 2 : 0
    );
    q.setFromEuler(e);
    const s = new THREE.Vector3(r, h, r);
    points.forEach((p, i) => {
      m.compose(new THREE.Vector3(p[0], p[1], p[2]), q, s);
      ref.current.setMatrixAt(i, m);
    });
    ref.current.instanceMatrix.needsUpdate = true;
  }, [points, r, h, axis]);

  return <instancedMesh ref={ref} args={[UNIT_CYL, material, points.length]} />;
}

/* --- door ---------------------------------------------------------------- */

function DoorLeaf() {
  const sections = useMemo(() => Array.from({ length: SECTIONS }, (_, i) => i), []);

  return (
    <group>
      {/* slab - the recessed body the section faces sit proud of */}
      <B size={[W, H, T]} position={[0, H / 2, 0]} material={MAT.doorGroove} />

      {sections.map((i) => (
        <group key={i} position={[0, (i + 0.5) * SH, 0]}>
          {/* raised face, leaving a shadow gap that reads as the panel seam */}
          <B size={[W, SH - 0.032, 0.026]} position={[0, 0, T / 2 + 0.013]} material={MAT.door} />
          {/* shallow rib across the middle of each section, as on the reference */}
          <B size={[W - 0.002, 0.014, 0.007]} position={[0, SH * 0.18, T / 2 + 0.029]} material={MAT.door} />
          {/* back skin */}
          <B size={[W, SH - 0.03, 0.018]} position={[0, 0, -T / 2 - 0.009]} material={MAT.door} />
        </group>
      ))}

      {/* end stiles */}
      <B size={[0.02, H, T + 0.03]} position={[DOOR_X - 0.01, H / 2, 0]} material={MAT.door} />
      <B size={[0.02, H, T + 0.03]} position={[-DOOR_X + 0.01, H / 2, 0]} material={MAT.door} />

      {/* bottom weather seal */}
      <B size={[W, 0.035, T + 0.04]} position={[0, 0.018, 0]} material={MAT.rubber} />
      {/* top cap */}
      <B size={[W, 0.02, T]} position={[0, H - 0.01, 0]} material={MAT.door} />
    </group>
  );
}

/** Lift handle: plate plus a dark grip bar. */
function Handle({ x }) {
  return (
    <group position={[x, SH * 0.52, T / 2]}>
      <B size={[0.26, 0.15, 0.014]} position={[0, 0, 0.012]} material={MAT.bracket} />
      <B size={[0.022, 0.022, 0.055]} position={[-0.085, -0.012, 0.045]} material={MAT.dark} />
      <B size={[0.022, 0.022, 0.055]} position={[0.085, -0.012, 0.045]} material={MAT.dark} />
      <C r={0.016} h={0.19} axis="x" position={[0, -0.012, 0.073]} material={MAT.dark} />
    </group>
  );
}

/* --- track --------------------------------------------------------------- */

/**
 * C-channel swept along the vertical > curve > horizontal path. The extrude
 * frame puts the shape's +y on -x, so the channel opens toward the door centre
 * on the right-hand side and mirrors correctly on the left.
 */
function useTrackGeometry() {
  return useMemo(() => {
    const d = 0.085; // half depth of the channel
    const w = 0.072; // half width
    const t = 0.016; // wall

    const shape = new THREE.Shape();
    shape.moveTo(-d, w);
    shape.lineTo(-d, -w);
    shape.lineTo(d, -w);
    shape.lineTo(d, w);
    shape.lineTo(d - t, w);
    shape.lineTo(d - t, -w + t);
    shape.lineTo(-d + t, -w + t);
    shape.lineTo(-d + t, w);
    shape.closePath();

    const bendStart = new THREE.Vector3(0, RAIL_Y - CURVE_R, TRACK_Z);
    const corner = new THREE.Vector3(0, RAIL_Y, TRACK_Z);
    const bendEnd = new THREE.Vector3(0, RAIL_Y, TRACK_Z - CURVE_R);

    const path = new THREE.CurvePath();
    path.add(new THREE.LineCurve3(new THREE.Vector3(0, 0.04, TRACK_Z), bendStart));
    path.add(new THREE.QuadraticBezierCurve3(bendStart, corner, bendEnd));
    path.add(new THREE.LineCurve3(bendEnd, new THREE.Vector3(0, RAIL_Y, RAIL_BACK)));

    const geo = new THREE.ExtrudeGeometry(shape, {
      steps: 72,
      bevelEnabled: false,
      extrudePath: path,
    });
    geo.computeVertexNormals();
    return geo;
  }, []);
}

/** Everything on one side of the door. Rendered twice, mirrored in x. */
function TrackAssembly({ geometry }) {
  const rollerY = useMemo(() => [0.1, SH, SH * 2, SH * 3, SH * 4, SH * 5, SH * 6], []);
  const hingeY = useMemo(() => [SH, SH * 2, SH * 3, SH * 4, SH * 5, SH * 6], []);

  const stileBolts = useMemo(
    () => hingeY.flatMap((y) => [[DOOR_X - 0.07, y + 0.05, T / 2 + 0.012], [DOOR_X - 0.07, y - 0.05, T / 2 + 0.012]]),
    [hingeY]
  );

  const trackBolts = useMemo(
    () => [0.55, 1.15, 1.75, 2.12].map((y) => [TRACK_X + 0.062, y, TRACK_Z]),
    []
  );

  return (
    <group>
      <mesh geometry={geometry} material={MAT.track} position={[TRACK_X, 0, 0]} />

      {/* track-to-jamb mounting brackets */}
      {[0.55, 1.15, 1.75, 2.12].map((y) => (
        <group key={y}>
          <B size={[0.28, 0.09, 0.035]} position={[TRACK_X - 0.06, y, TRACK_Z + 0.09]} />
          <B size={[0.035, 0.12, 0.13]} position={[TRACK_X + 0.07, y, TRACK_Z]} />
        </group>
      ))}
      <Bolts points={trackBolts} axis="x" />

      {/* rollers riding inside the channel, stems into the door edge */}
      {rollerY.map((y) => (
        <group key={y} position={[0, y, TRACK_Z]}>
          <C r={0.016} h={0.34} axis="x" position={[DOOR_X + 0.14, 0, 0]} material={MAT.bolt} />
          <C r={0.05} h={0.036} axis="x" position={[TRACK_X - 0.035, 0, 0]} material={MAT.bracket} />
        </group>
      ))}

      {/* hinges on the back of the door at every section joint */}
      {hingeY.map((y) => (
        <group key={y} position={[DOOR_X - 0.15, y, -T / 2 - 0.014]}>
          <B size={[0.24, 0.1, 0.022]} />
          <B size={[0.08, 0.16, 0.02]} position={[0.09, 0, -0.012]} />
          <C r={0.013} h={0.14} axis="x" position={[0.07, 0, -0.024]} material={MAT.bolt} />
        </group>
      ))}
      <Bolts points={stileBolts} />

      {/* bottom bracket */}
      <group position={[DOOR_X - 0.11, 0.1, -T / 2 - 0.016]}>
        <B size={[0.2, 0.24, 0.024]} />
        <B size={[0.1, 0.07, 0.07]} position={[0.07, -0.07, -0.03]} />
      </group>

      {/* lift cable from the drum down to the bottom bracket */}
      <C r={0.007} h={SHAFT_Y - 0.16} position={[DOOR_X + 0.03, (SHAFT_Y + 0.12) / 2, -0.21]} material={MAT.bolt} />

      {/* flag bracket - the plate that carries the top of the vertical track
          and the front of the horizontal one */}
      <group position={[TRACK_X + 0.08, 0, 0]}>
        <B size={[0.022, 0.62, 0.17]} position={[0, RAIL_Y - 0.25, TRACK_Z]} />
        <B size={[0.022, 0.16, 0.5]} position={[0, RAIL_Y - 0.04, -0.42]} />
      </group>
      {/* brace from the header back to the horizontal track */}
      <B
        size={[0.035, 0.46, 0.05]}
        position={[TRACK_X, RAIL_Y + 0.14, -0.52]}
        rotation={[-0.72, 0, 0]}
      />

      {/* ceiling hangers */}
      {[-1.55, -2.7].map((z) => (
        <group key={z} position={[TRACK_X, 0, z]}>
          <B size={[0.05, 0.62, 0.1]} position={[0.07, RAIL_Y + 0.35, 0]} />
          <B size={[0.05, 0.055, 0.34]} position={[0.07, RAIL_Y + 0.63, 0.12]} />
          <B size={[0.12, 0.06, 0.07]} position={[0.03, RAIL_Y + 0.06, 0]} />
          <B
            size={[0.04, 0.46, 0.05]}
            position={[0.07, RAIL_Y + 0.2, 0.17]}
            rotation={[0.62, 0, 0]}
          />
        </group>
      ))}

      {/* rear end stop */}
      <B size={[0.07, 0.17, 0.035]} position={[TRACK_X, RAIL_Y, RAIL_BACK + 0.02]} />
    </group>
  );
}

/* --- torsion assembly (behind the header) -------------------------------- */

function TorsionShaft() {
  return (
    <group position={[0, SHAFT_Y, SHAFT_Z]}>
      <C r={0.026} h={W + 0.5} axis="x" material={MAT.bolt} />

      {/* cable drums */}
      {[-1, 1].map((s) => (
        <group key={s} position={[s * (DOOR_X + 0.04), 0, 0]}>
          <C r={0.1} h={0.09} axis="x" material={MAT.dark} />
          <C r={0.11} h={0.016} axis="x" position={[s * 0.045, 0, 0]} material={MAT.bracket} />
        </group>
      ))}

      {/* end bearing plates */}
      {[-1, 1].map((s) => (
        <B key={s} size={[0.05, 0.22, 0.2]} position={[s * (DOOR_X + 0.19), 0, 0]} />
      ))}

      {/* centre bearing plate and the spring - both tucked behind the header */}
      <B size={[0.14, 0.26, 0.07]} position={[0, 0, 0]} />
      <C r={0.072} h={0.8} axis="x" position={[0.48, 0, 0]} material={MAT.dark} />
      <C r={0.072} h={0.8} axis="x" position={[-0.48, 0, 0]} material={MAT.dark} />
      <C r={0.055} h={0.1} axis="x" position={[0.92, 0, 0]} material={MAT.bracket} />
      <C r={0.055} h={0.1} axis="x" position={[-0.92, 0, 0]} material={MAT.bracket} />
    </group>
  );
}

/* --- opener -------------------------------------------------------------- */

function Opener() {
  const armLen = 0.78;
  const armAngle = Math.atan2(-0.64, 0.44); // trolley -> door arm bracket

  return (
    <group>
      {/* T-rail */}
      <B
        size={[0.1, 0.055, OPENER_BACK - OPENER_FRONT]}
        position={[0, OPENER_Y, (OPENER_FRONT + OPENER_BACK) / 2]}
        material={MAT.track}
      />
      <B
        size={[0.145, 0.02, OPENER_BACK - OPENER_FRONT]}
        position={[0, OPENER_Y + 0.038, (OPENER_FRONT + OPENER_BACK) / 2]}
        material={MAT.track}
      />

      {/* header bracket holding the front of the rail */}
      <B size={[0.09, 0.3, 0.05]} position={[0, OPENER_Y - 0.15, OPENER_FRONT + 0.02]} />
      <B size={[0.34, 0.11, 0.06]} position={[0, OPENER_Y - 0.29, OPENER_FRONT + 0.04]} />

      {/* trolley and door arm */}
      <B size={[0.13, 0.075, 0.24]} position={[0, OPENER_Y - 0.06, -0.82]} material={MAT.dark} />
      <B
        size={[0.045, armLen, 0.028]}
        position={[0, OPENER_Y - 0.06 - 0.32, -0.82 + 0.22]}
        rotation={[armAngle, 0, 0]}
      />
      <B size={[0.16, 0.2, 0.026]} position={[0, H - 0.1, -T / 2 - 0.016]} />

      {/* motor head */}
      <group position={[0, OPENER_Y - 0.06, OPENER_BACK - 0.2]}>
        <B size={[0.64, 0.28, 0.5]} material={MAT.dark} />
        <B size={[0.56, 0.06, 0.42]} position={[0, 0.16, 0]} material={MAT.dark} />
        <B size={[0.2, 0.04, 0.16]} position={[0, -0.15, 0.1]} material={MAT.bracket} />
        {/* hanging straps */}
        {[-0.24, 0.24].map((z) => (
          <B key={z} size={[0.035, 0.42, 0.04]} position={[0.2, 0.32, z]} rotation={[0, 0, 0.1]} />
        ))}
        <B size={[0.5, 0.04, 0.04]} position={[0.03, 0.52, 0]} />
      </group>
    </group>
  );
}

/* --- frame --------------------------------------------------------------- */

function Frame() {
  const jambH = HEADER_Y;
  const casingH = HEADER_Y + HEADER_H;

  return (
    <group>
      {[-1, 1].map((s) => (
        <group key={s}>
          {/* jamb board - flat, like the reference, so the track beside it
              stays in view instead of being swallowed by a deep box */}
          <B size={[0.22, jambH, 0.16]} position={[s * JAMB_X, jambH / 2, 0.11]} material={MAT.frame} />
          {/* front return edge, giving the board a visible thickness */}
          <B
            size={[0.06, jambH, 0.06]}
            position={[s * (JAMB_X + 0.08), jambH / 2, 0.21]}
            material={MAT.frame}
          />
        </group>
      ))}

      {/* header */}
      <B
        size={[CASING_X * 2 + 0.2, HEADER_H, 0.4]}
        position={[0, HEADER_Y + HEADER_H / 2, -0.01]}
        material={MAT.frame}
      />
      {/* casing across the head */}
      <B
        size={[CASING_X * 2 + 0.36, 0.22, 0.06]}
        position={[0, HEADER_Y + HEADER_H / 2, 0.21]}
        material={MAT.frame}
      />
      {/* cap */}
      <B
        size={[CASING_X * 2 + 0.46, 0.05, 0.52]}
        position={[0, casingH + 0.085, -0.01]}
        material={MAT.frame}
      />
    </group>
  );
}

/* --- model --------------------------------------------------------------- */

export default function GarageDoorModel(props) {
  const root = useRef(null);
  const trackGeometry = useTrackGeometry();

  useLayoutEffect(() => {
    // Bake local matrices once. Do not receive real-time shadows - the
    // overhead rails would stamp a hard rectangle onto the white door face.
    root.current.traverse((o) => {
      if (o.isMesh || o.isInstancedMesh) {
        o.castShadow = false;
        o.receiveShadow = false;
        o.matrixAutoUpdate = false;
        o.updateMatrix();
      }
    });
  }, []);

  return (
    <group ref={root} {...props}>
      <Frame />
      <DoorLeaf />
      <Handle x={-1.15} />
      <Handle x={1.15} />

      <TrackAssembly geometry={trackGeometry} />
      <group scale={[-1, 1, 1]}>
        <TrackAssembly geometry={trackGeometry} />
      </group>

      {/* rear cross brace tying the two hangers together */}
      <B size={[TRACK_X * 2 + 0.2, 0.05, 0.055]} position={[0, RAIL_Y + 0.63, -2.7]} />

      <TorsionShaft />
      <Opener />
    </group>
  );
}
