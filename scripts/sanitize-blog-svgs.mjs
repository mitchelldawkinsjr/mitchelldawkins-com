#!/usr/bin/env node
/**
 * Sanitize SVG files under public/ to valid UTF-8 XML (ASCII text only).
 * Run: node scripts/sanitize-blog-svgs.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const targets = [
  path.join(root, 'public/images/blog'),
  path.join(root, 'public/images/projects'),
];

const replacements = [
  ['\u2014', '-'],
  ['\u2013', '-'],
  ['\u2192', '->'],
  ['\u2190', '<-'],
  ['\u00b7', '|'],
  ['\u2019', "'"],
  ['\u2018', "'"],
  ['\u201c', '"'],
  ['\u201d', '"'],
  ['\ufffd', '-'],
];

function sanitizeSvg(filePath) {
  let text = fs.readFileSync(filePath, 'utf8');
  for (const [from, to] of replacements) {
    text = text.split(from).join(to);
  }
  // Remove control characters except tab/newline/carriage return
  text = [...text].filter((ch) => ch.charCodeAt(0) >= 32 || ch === '\n' || ch === '\r' || ch === '\t').join('');
  if (!text.startsWith('<?xml')) {
    text = '<?xml version="1.0" encoding="UTF-8"?>\n' + text.trimStart();
  }
  fs.writeFileSync(filePath, text, 'utf8');
}

let count = 0;
for (const dir of targets) {
  if (!fs.existsSync(dir)) continue;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      for (const nested of fs.readdirSync(path.join(dir, entry.name))) {
        if (nested.endsWith('.svg')) {
          sanitizeSvg(path.join(dir, entry.name, nested));
          count += 1;
        }
      }
    } else if (entry.name.endsWith('.svg')) {
      sanitizeSvg(path.join(dir, entry.name));
      count += 1;
    }
  }
}

console.log(`Sanitized ${count} SVG file(s).`);
