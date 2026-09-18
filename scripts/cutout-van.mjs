/**
 * Turns the flat white studio background of the generated van render into real
 * transparency, then writes the responsive webp set used by the About section.
 *
 *   node scripts/cutout-van.mjs <render.png|jpg> [outPrefix]
 */
import { mkdir } from 'node:fs/promises';
import sharp from 'sharp';

const SRC = process.argv[2];
const PREFIX = process.argv[3] || 'van-clean';
const OUT_DIR = 'public/img';
const SIZES = [520, 780, 1040];

const BG_LUM = 246; // flat white studio background
const NEUTRAL = 20; // max channel spread tolerated as "grey", covers jpeg noise

const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
const px = width * height;

const lum = new Float32Array(px);
const neutral = new Uint8Array(px);
for (let i = 0; i < px; i += 1) {
  const o = i * channels;
  const r = data[o];
  const g = data[o + 1];
  const b = data[o + 2];
  lum[i] = 0.299 * r + 0.587 * g + 0.114 * b;
  neutral[i] = Math.max(r, g, b) - Math.min(r, g, b) <= NEUTRAL ? 1 : 0;
}

// Flood fill the background inwards from the frame edges. Starting only at the
// border means white bodywork enclosed by darker panel lines is never touched.
const isBg = new Uint8Array(px);
const stack = [];
const seed = (x, y) => {
  const i = y * width + x;
  if (!isBg[i] && neutral[i] && lum[i] >= BG_LUM) {
    isBg[i] = 1;
    stack.push(i);
  }
};
for (let x = 0; x < width; x += 1) {
  seed(x, 0);
  seed(x, height - 1);
}
for (let y = 0; y < height; y += 1) {
  seed(0, y);
  seed(width - 1, y);
}

while (stack.length) {
  const i = stack.pop();
  const x = i % width;
  const y = (i - x) / width;
  for (let dy = -1; dy <= 1; dy += 1) {
    for (let dx = -1; dx <= 1; dx += 1) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
      const n = ny * width + nx;
      if (isBg[n] || !neutral[n] || lum[n] < BG_LUM) continue;
      isBg[n] = 1;
      stack.push(n);
    }
  }
}

let cleared = 0;
for (let i = 0; i < px; i += 1) {
  if (!isBg[i]) continue;
  const o = i * channels;
  data[o] = 255;
  data[o + 1] = 255;
  data[o + 2] = 255;
  data[o + 3] = 0;
  cleared += 1;
}

// Rebuild as RGB + a lightly blurred alpha so the cut edge is not hard-stamped.
const rgb = Buffer.alloc(px * 3);
for (let i = 0; i < px; i += 1) {
  const o = i * channels;
  rgb[i * 3] = data[o];
  rgb[i * 3 + 1] = data[o + 1];
  rgb[i * 3 + 2] = data[o + 2];
}
const alpha = await sharp(data, { raw: { width, height, channels } })
  .extractChannel(3)
  .blur(0.6)
  .raw()
  .toBuffer();

const cut = await sharp(rgb, { raw: { width, height, channels: 3 } })
  .joinChannel(alpha, { raw: { width, height, channels: 1 } })
  .png()
  .toBuffer();

const trimmed = await sharp(cut).trim({ threshold: 1 }).png().toBuffer({ resolveWithObject: true });
console.log('trimmed to', trimmed.info.width, 'x', trimmed.info.height);

await mkdir(OUT_DIR, { recursive: true });
for (const w of SIZES) {
  const out = `${OUT_DIR}/${PREFIX}-${w}.webp`;
  const meta = await sharp(trimmed.data)
    .resize({ width: w, withoutEnlargement: true })
    .webp({ quality: 90, alphaQuality: 95 })
    .toFile(out);
  console.log(out, meta.width, 'x', meta.height, Math.round(meta.size / 1024), 'kB');
}

console.log({ clearedPixels: cleared, totalPixels: px });
