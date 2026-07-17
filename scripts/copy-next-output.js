/**
 * After building in web/, copy Next.js output to repo root so Vercel
 * (without Root Directory=web) can find routes-manifest.json.
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const src = path.join(root, "web", ".next");
const dest = path.join(root, ".next");

if (!fs.existsSync(src)) {
  console.error("Missing web/.next — build failed?");
  process.exit(1);
}

fs.rmSync(dest, { recursive: true, force: true });
fs.cpSync(src, dest, { recursive: true });
console.log("Copied web/.next -> .next");
