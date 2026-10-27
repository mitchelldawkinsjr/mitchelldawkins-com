# Blog optimization changelog

Date: 2026-10-27. Nothing was deployed.

## Files modified

### Indexing and metadata

- Deleted empty `src/app/robots.txt` and `src/app/sitemap.xml`. Those files were being served in production with an empty body.
- Added `src/app/robots.ts` and `src/app/sitemap.ts`.
- `src/lib/site.ts`: canonical origin is now `https://www.mitchelldawkins.com`, matching the live apex-to-www redirect.
- `src/app/layout.tsx`: `metadataBase` is that origin. Preview deployments (`VERCEL_ENV=preview`) are `noindex`.
Article, blog index, series, and consulting canonicals are absolute `https://www.mitchelldawkins.com/...` URLs. Other pages set a relative canonical that resolves through `metadataBase`.
- Article titles no longer include the site name themselves, so the layout template does not double it. CV title had the same bug and was shortened to `Video CV`.
- Article Open Graph includes the canonical path, publication time, and modification time only when `updated` is set.
- Blog index Open Graph no longer points at the missing `/images/og-image.jpg`. It uses `/images/logo/logo-full.png`.
- `src/lib/utils.ts`: date-only frontmatter renders as that calendar day.
- `src/lib/mdx.ts`: reads optional `updated`. Stops compiling MDX twice. Does not invent a cover image.

### Article chrome

- `src/app/blog/[slug]/page.tsx`: one H1, author link, breadcrumbs, BlogPosting and BreadcrumbList JSON-LD, table of contents on long posts, related block, one CTA.
- `src/app/blog/page.tsx`: chronological list once. Series names link to real series pages instead of a second copy of the cards.
- `src/app/blog/series/[series]/page.tsx`: `/blog/series/building-ai-with-ai` and `/blog/series/low-to-no-cost-solutions`.
- `src/styles/globals.css`: heading scroll margin, horizontal code scroll, highlight.js token colors.
- Project pages show related article titles and a single consulting line. External project links emit an outbound click event.

### Consulting and contact

- `src/app/consulting/page.tsx` and `src/lib/consulting.ts`.
- Header, footer, and homepage hero link to consulting.
- Contact page links to consulting. `?topic=` prefills the subject. Submit events record `dispatched` or `error` only.

### Articles whose prose changed

`updated: 2026-10-27` was set on these files because the body changed:

- `team-of-engineers-cursor-agent-pipeline.mdx`
- `seos-software-engineering-agent-os.mdx`
- `gh-film-hub-v2-year-two.mdx`
- `self-hosted-wordpress-fleet-360-web-solutions-cloud.mdx`
- `gh-film-review-pipeline-deep-dive.mdx`
- `free-contact-form.mdx`
- `introducing-video-processing-platform.mdx`
- `hosting-gh-film-review-free-github-pages.mdx`
- `building-around-coach-spreadsheets-live-csv.mdx`

`src/content/projects/video-playform.mdx`: removed the passed “Q3 2025” beta sentence. No new date was added.

Unchanged bodies: Thinker, Fasted, Tab Recorder, Little Sprouts, Kent ballot, Dawkins Family Foundation.

## Articles improved

| Article | What changed |
| --- | --- |
| Team of engineers | Link to the SEOS follow-up. Short business-application section. |
| SEOS | Business-application section. Human Reflections untouched, including the existing grammar slips. |
| GH Film Hub v2 | Business-application section tying the hub to the spreadsheet post. |
| 360 Web Solutions Cloud | Business-application section and a descriptive project link outside the reflection. |
| Film pipeline v1 | Forward links to v2 and the hosting post. Live button points at the GitHub Pages mirror the old `/oag` URL already redirected to. |
| Contact form | Business-application section, link to `/contact`, removed the “comments below” line. |
| Video platform | Removed the duplicate H1. Stated that the infrastructure follow-up was not published and that no new beta date is set. |
| GitHub Pages hosting | Links to year two of the film hub and the WordPress fleet post. |
| Coach spreadsheets | Links to the film articles that use the same sheet-first idea. |

## SEO enhancements

- Unique titles without a doubled site name.
- Meta descriptions remain the article excerpts.
- Canonical URLs on the www host.
- Open Graph and Twitter card fields on articles.
- XML sitemap with 41 URLs: static pages, 15 posts, 2 series, 16 projects.
- `robots.txt` allows crawling and points at the sitemap. Preview deployments disallow `/`.
- BlogPosting JSON-LD with headline, description, dates, author, image, and url. `dateModified` only when `updated` exists.
- BreadcrumbList JSON-LD plus a visible breadcrumb.
- Author link to `/about`.
- Publication dates match the frontmatter calendar day.
- One H1 per article.
- In-article image alt text was already descriptive and was left alone. Cover alt remains the title.
- Syntax coloring for fenced code.
- Table of contents on posts with at least four H2s. Anchor ids match.

## Internal links added

Template links on every post except the foundation essay:

- Related articles from `src/lib/article-relations.ts`
- Related project, when one exists
- One CTA to `/contact?topic=...` and `/consulting#...`

In-body links added where a reader would otherwise miss the next piece: agent pipeline to SEOS, film v1 to v2 and hosting, hosting to v2 and the WordPress post, spreadsheets to the film posts, contact-form tutorial to `/contact`, video post to its project page, WordPress post to the project page and the static-hosting post.

Project “related writing” uses the article title.

## Conversion improvements

- `/consulting` lists four services: custom software, AI automation, application modernization, technical discovery. Each section links to projects and posts that already exist and ends with “Discuss a project.”
- Navigation and the homepage say consulting is available.
- Articles get one end CTA. The foundation essay does not.
- Project pages get one line to consulting and contact.
- Contact subject can be prefilled from those links.

No testimonials, prices, or client results were added.

## Behavior changes

- Blog index no longer repeats each post under a series grid. Series pages replace the old `/blog/series/...` links, which 404ed.
- Article dates for `YYYY-MM-DD` values display that day in US timezones. Previously they displayed the previous day.
- Canonical host in generated metadata is www, not the apex host and not the Vercel deployment host.
- Preview deployments send `noindex` and a disallow-all robots file.
- Contact success copy is unchanged. The form still cannot read the Apps Script response (`no-cors`). Analytics records the attempt as `dispatched`, not as a confirmed lead.
- `getPostBySlug` no longer runs a discarded MDX compile.

## Editorial scores

Scores are editorial judgments of the article itself. Technical SEO (titles, canonicals, schema, sitemap) improved for every URL even where the score is unchanged.

| Article | Before | After |
| --- | ---: | ---: |
| Building a Team of Engineers | 8 | 9 |
| SEOS | 9 | 9 |
| GH Film Hub v2 | 8 | 9 |
| 360 Web Solutions Cloud | 8 | 9 |
| Film review pipeline | 7 | 8 |
| Google Sheets contact form | 7 | 8 |
| Video processing platform | 6 | 7 |
| Thinker | 8 | 8 |
| GitHub Pages hosting | 8 | 9 |
| Coach spreadsheets | 9 | 9 |
| Tab Recorder | 8 | 8 |
| Fasted | 8 | 8 |
| Little Sprouts | 8 | 8 |
| Kent ballot | 8 | 8 |
| Dawkins Family Foundation | 7 | 7 |
