# Blog SEO validation

Checked on 2026-10-27 against a local production build (`npm run build`, then `next start` on port 3456). Not checked against the live GA property, and not deployed.

## Tests performed

| Check | Result |
| --- | --- |
| `npx tsc --noEmit` | Passed after the heading extractor stopped using `for...of` on a regex iterator (`tsconfig` target is ES5). |
| `npm run build` | Passed. Next reported “Linting and checking validity of types” and generated 46 static pages. |
| `npx next lint` | Did not complete. It opened an interactive ESLint setup prompt. `eslint.config.mjs` extends `next/typescript`, which ESLint 8.57 does not resolve when flat config is forced. This is pre-existing. The build’s lint step is the check that passed. |
| Unit or integration tests | None exist in `package.json`. None were added. |
| All 15 article routes | HTTP 200. |
| Series routes | HTTP 200 for `building-ai-with-ai` and `low-to-no-cost-solutions`. |
| `/consulting`, `/contact`, `/contact?topic=AI%20automation`, `/projects/seos`, `/` | HTTP 200. |
| Internal paths linked from articles, the blog index, consulting, and contact | 36 paths checked. None returned an error. |
| Human Reflections | Diffed against HEAD for every edited post. All 9 reflection blocks are byte-for-byte unchanged. The foundation essay still has no reflection block. |
| Contact form | Rendered with required name, email, subject, and message. Subject prefills from `?topic=`. The form was not submitted. |
| Browser | Consulting page lists four services and working links. “Discuss a project” under Custom Software landed on `/contact?topic=Custom%20software` with the subject filled. SEOS article has one H1, breadcrumb, table of contents, Human Reflections, one CTA, and related links. |
| Layout | At 390px-class width the SEOS document did not scroll horizontally. A code block scrolls inside itself (`scrollWidth` 604, `clientWidth` 356). At 1280px the header nav fits (574px). Screenshots timed out in the browser tool. |

## Build results

`npm run build` completed successfully.

Routes include `/sitemap.xml`, `/robots.txt`, `/consulting`, 15 `/blog/[slug]` pages, 2 series pages, and the existing project pages. Contact is dynamic because it reads `topic`.

## Metadata validation

SEOS, as rendered:

- Title: `From One Agent to an OS: Building SEOS on Fasted | Mitchell Dawkins II` (one site-name suffix).
- Canonical: `https://www.mitchelldawkins.com/blog/seos-software-engineering-agent-os`.
- Visible date: July 1, 2026. Updated: October 27, 2026.
- JSON-LD `datePublished`: `2026-07-01`. `dateModified`: `2026-10-27`.
- Author: Mitchell Dawkins II.
- Home title unchanged: `Mitchell Dawkins II | Building AI Software in Public`.

Checked on all 15 articles:

- Exactly one H1.
- Exactly one “Mitchell Dawkins II” in the title.
- Canonical on `https://www.mitchelldawkins.com/blog/{slug}`.
- BlogPosting JSON-LD and a breadcrumb.
- `dateModified` present only when frontmatter `updated` is set. The ballot and Thinker posts, which were not edited, do not emit `dateModified`.
- Film pipeline date renders as October 29, 2025.

`robots.txt`:

```
User-Agent: *
Allow: /

Host: https://www.mitchelldawkins.com
Sitemap: https://www.mitchelldawkins.com/sitemap.xml
```

Sitemap: 41 URLs. 15 articles, 2 series, consulting, and project URLs. Host is www.

Consulting JSON-LD is `ProfessionalService` with four services. The payload has no price and no rating.

## Structured data checks

Parsed the SEOS JSON-LD. `@graph` contains `BlogPosting` and `BreadcrumbList` (Home, Blog, article). Image, headline, and description are present. No invented `aggregateRating`, `review`, or `offers` on articles.

Table-of-contents `href="#..."` targets on the SEOS page all match element ids.

## Broken link checks

No broken internal path in the set crawled from the blog, consulting, and contact HTML. External GitHub and live-site URLs were not all fetched. The film live button target was confirmed earlier: `https://mitchelldawkins.com/oag` returns 301 to `https://mitchelldawkinsjr.github.io/GH-Flim-Review/`, and the button now uses that destination directly.

## Analytics

The production server, using the local env file, rendered one Google tag snippet. `gtag` is not duplicated.

Event helpers send `cta_click`, `outbound_click`, `view_consulting`, and `contact_form_submit` only when `window.gtag` already exists. Parameters are a destination or a status (`dispatched` / `error`). Names, emails, and message text are not included.

A measurement ID is present in `.env.local`. A hit was not confirmed inside the GA property. The contact form’s success state still means “the browser dispatched the request.” `no-cors` hides the Apps Script response.

## Remaining issues

- Live sitemap and robots stay empty until this build is deployed. Production still 307s apex to www.
- `npm run lint` is interactive and does not use `eslint.config.mjs` cleanly. Fix that separately if you want a non-interactive lint script. The build lint passed.
- No automated test suite.
- Blog cover alt text is the post title, not a longer description.
- Preview deployments are `noindex`. Production is indexable. This was not verified on a Vercel preview URL.
- GA events are implemented and the snippet loads. They are not verified in the GA interface.
- The contact form was not submitted, on purpose.
- Screenshot capture in the browser tool timed out. Structure and overflow were checked from the accessibility tree and layout measurements.
- Author confirmation items are in `docs/blog-editorial-review.md`.
