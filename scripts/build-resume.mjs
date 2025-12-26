// Generates public/assets/resume.pdf from resume.md + resume.css.
// Run with: npm run resume   (or: bun run resume)

import { mdToPdf } from "md-to-pdf";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const assets = path.join(root, "public", "assets");

const dest = path.join(assets, "resume.pdf");

await mdToPdf(
  { path: path.join(assets, "resume.md") },
  {
    dest,
    stylesheet: [path.join(assets, "resume.css")],
    pdf_options: {
      format: "A4",
      margin: { top: "14mm", bottom: "14mm", left: "16mm", right: "16mm" },
      printBackground: true,
    },
    launch_options: { args: ["--no-sandbox"] },
  },
);

console.log(`✓ Generated ${dest}`);
