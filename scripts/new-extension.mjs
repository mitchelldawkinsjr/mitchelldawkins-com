#!/usr/bin/env node
// Writes the two public pages for a Chrome extension:
//   /extension/<slug>          homepage URL
//   /extension/<slug>/privacy  privacy policy URL
//
// Usage:
//   npm run extension:new -- --slug film-room-downloader --name "Film Room Downloader" \
//     --summary "One sentence." --home ./home.md --privacy ./privacy.html \
//     --support https://github.com/you/repo/issues --source https://github.com/you/repo \
//     --category Sports --updated 2026-10-28
//
// --privacy accepts a markdown file or an HTML privacy policy (the <body> is converted).
// --home accepts a markdown file. Without it, a short stub is written from --summary.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const contentRoot = path.join(root, 'src', 'content', 'extensions');

function usage() {
  console.log(`Usage:
  npm run extension:new -- --slug <slug> --name "Extension Name" [options]

Options:
  --summary "Short description"
  --home <file.md>       Homepage body. Defaults to a stub from --summary.
  --privacy <file>       Privacy policy (.md, or .html whose body is converted).
  --support <url>        Support link shown on the homepage.
  --source <url>         Source repository link.
  --category "Sports"    Store category, shown on the homepage.
  --updated YYYY-MM-DD   Defaults to today.
  --force                Replace an existing extension folder.

Writes src/content/extensions/<slug>/{extension.json,home.md,privacy.md}
and the site serves them at /extension/<slug> and /extension/<slug>/privacy.`);
}

function args(argv) {
  const out = { force: false };
  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (token === '--force') {
      out.force = true;
      continue;
    }
    if (!token.startsWith('--')) {
      console.error(`Unexpected argument: ${token}`);
      usage();
      process.exit(1);
    }
    const key = token.slice(2);
    const value = argv[i + 1];
    if (!value || value.startsWith('--')) {
      console.error(`Missing value for --${key}`);
      process.exit(1);
    }
    out[key] = value;
    i++;
  }
  return out;
}

function decode(text) {
  return text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'");
}

function inline(html) {
  return decode(
    html
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<strong>([\s\S]*?)<\/strong>/gi, '**$1**')
      .replace(/<code>([\s\S]*?)<\/code>/gi, '`$1`')
      .replace(/<a\s+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)')
      .replace(/<[^>]+>/g, '')
  )
    .replace(/[ \t]+\n/g, '\n')
    .replace(/[ \t]{2,}/g, ' ')
    .trim();
}

function htmlToMarkdown(html) {
  const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1] ?? html;
  const updated = body.match(/Last updated:\s*([^<]+)/i)?.[1]?.trim() ?? '';
  const withoutTitle = body
    .replace(/<h1[^>]*>[\s\S]*?<\/h1>/gi, '')
    .replace(/<p[^>]*class="updated"[^>]*>[\s\S]*?<\/p>/gi, '');

  const markdown = withoutTitle
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, title) => `\n## ${inline(title)}\n\n`)
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, item) => `- ${inline(item)}\n`)
    .replace(/<\/?(ul|ol)[^>]*>/gi, '\n')
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, paragraph) => `${inline(paragraph)}\n\n`)
    .replace(/<[^>]+>/g, '');

  return {
    updated,
    markdown: decode(markdown).replace(/\n{3,}/g, '\n\n').trim() + '\n',
  };
}

function toIsoDate(value) {
  const parsed = value ? new Date(value) : new Date();
  if (value && /^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  if (Number.isNaN(parsed.getTime())) {
    console.error(`Could not read --updated "${value}". Use YYYY-MM-DD.`);
    process.exit(1);
  }
  const month = String(parsed.getMonth() + 1).padStart(2, '0');
  const day = String(parsed.getDate()).padStart(2, '0');
  return `${parsed.getFullYear()}-${month}-${day}`;
}

function readPrivacy(file) {
  const abs = path.resolve(file);
  const raw = fs.readFileSync(abs, 'utf8');
  if (abs.endsWith('.md')) return { updated: '', markdown: raw.endsWith('\n') ? raw : `${raw}\n` };
  return htmlToMarkdown(raw);
}

const flags = args(process.argv.slice(2));
if (!flags.slug || !flags.name) {
  usage();
  process.exit(flags.slug || flags.name ? 1 : 0);
}

if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(flags.slug)) {
  console.error('Slug must be lowercase letters, numbers, and single hyphens.');
  process.exit(1);
}

const dir = path.join(contentRoot, flags.slug);
if (fs.existsSync(dir) && !flags.force) {
  console.error(`Already exists: ${path.relative(root, dir)} (pass --force to replace)`);
  process.exit(1);
}

let privacy = `## Data we collect\n\nDescribe what this extension reads, what stays on the device, and what is sent to anyone else.\n`;
let updated = flags.updated || '';
if (flags.privacy) {
  const parsed = readPrivacy(flags.privacy);
  privacy = parsed.markdown;
  updated = updated || parsed.updated;
}
updated = toIsoDate(updated);

const summary = flags.summary || '';
const home = flags.home
  ? fs.readFileSync(path.resolve(flags.home), 'utf8').trim() + '\n'
  : `${summary || 'Describe what the extension does and who it is for.'}\n`;

fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(
  path.join(dir, 'extension.json'),
  JSON.stringify(
    {
      name: flags.name,
      summary,
      updated,
      ...(flags.category ? { category: flags.category } : {}),
      ...(flags.source ? { sourceUrl: flags.source } : {}),
      ...(flags.support ? { supportUrl: flags.support } : {}),
    },
    null,
    2
  ) + '\n'
);
fs.writeFileSync(path.join(dir, 'home.md'), home);
fs.writeFileSync(path.join(dir, 'privacy.md'), privacy);

const siteSrc = fs.readFileSync(path.join(root, 'src', 'lib', 'site.ts'), 'utf8');
const siteUrl = siteSrc.match(/url:\s*'([^']+)'/)?.[1] ?? 'https://www.mitchelldawkins.com';
const base = `${siteUrl}/extension/${flags.slug}`;

console.log(`Wrote ${path.relative(root, dir)}`);
console.log(`Homepage: ${base}`);
console.log(`Privacy:  ${base}/privacy`);
