#!/usr/bin/env bash
# Build the published one-page resume.
# Source: resume/forward-deployed.html
# Output: public/documents/Mitchell-Dawkins-II-Resume-2026.pdf
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

SITE_PDF="$REPO_ROOT/public/documents/Mitchell-Dawkins-II-Resume-2026.pdf"
OPEN_PDF="$REPO_ROOT/public/documents/Mitchell-Dawkins-II-Resume-Forward-Deployed-2026.pdf"

build_one \
  "$REPO_ROOT/resume/forward-deployed.html" \
  "$SITE_PDF"

cp "$SITE_PDF" "$OPEN_PDF"
echo "Wrote $OPEN_PDF"
