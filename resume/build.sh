#!/usr/bin/env bash
# Build the published one-page resume.
# Source: resume/forward-deployed.html
# Output: public/documents/Mitchell-Dawkins-II-Resume.pdf
# resume/resume.html is the longer record and is not published.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

if [ ! -f "$CHROME" ]; then
  echo "error: Google Chrome not found at $CHROME" >&2
  exit 1
fi

mkdir -p "$REPO_ROOT/public/documents"

build_one() {
  local src="$1"
  local out="$2"
  echo "Building $out..."
  "$CHROME" \
    --headless=new \
    --disable-gpu \
    --no-pdf-header-footer \
    --print-to-pdf="$out" \
    "file://$src" 2>/dev/null
  echo "Wrote $out"
}

SITE_PDF="$REPO_ROOT/public/documents/Mitchell-Dawkins-II-Resume.pdf"

build_one \
  "$REPO_ROOT/resume/forward-deployed.html" \
  "$SITE_PDF"

python3 - "$SITE_PDF" << 'PY'
import sys
import pymupdf

path = sys.argv[1]
doc = pymupdf.open(path)
doc.set_metadata({
    "title": "Mitchell L. Dawkins II — Resume",
    "author": "Mitchell L. Dawkins II",
    "subject": "Resume",
    "keywords": "",
    "creator": "Mitchell L. Dawkins II",
    "producer": "Mitchell L. Dawkins II",
})
tmp = path + ".tmp"
doc.save(tmp, garbage=4, deflate=True)
doc.close()
import os
os.replace(tmp, path)
print(f"Set document title on {path}")
PY
