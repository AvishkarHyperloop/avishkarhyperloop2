import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const sources = [
  path.join(root, "node_modules", "three", "examples", "jsm", "libs", "draco", ""),
  path.join(root, "node_modules", "three", "examples", "jsm", "libs", "draco", "gltf", ""),
];

const destDir = path.join(root, "public", "draco");

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function copyIfExists(srcFile, destFile) {
  if (!fs.existsSync(srcFile)) return false;
  fs.copyFileSync(srcFile, destFile);
  return true;
}

ensureDir(destDir);

const filenames = [
  "draco_decoder.js",
  "draco_decoder.wasm",
  "draco_wasm_wrapper.js",
];

let copied = 0;
for (const filename of filenames) {
  for (const srcDir of sources) {
    const srcFile = path.join(srcDir, filename);
    const destFile = path.join(destDir, filename);
    if (copyIfExists(srcFile, destFile)) {
      copied += 1;
      break;
    }
  }
}

if (copied === 0) {
  console.error("[copy-draco] No Draco decoder files copied. Ensure 'three' is installed.");
  process.exitCode = 1;
} else {
  console.log(`[copy-draco] Copied ${copied} Draco decoder file(s) to public/draco/`);
}
