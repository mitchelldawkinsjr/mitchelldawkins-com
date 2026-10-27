# Blog optimization audit

Audit date: 2026-10-27. Scope is the repository at the time of this review, plus production checks against `https://www.mitchelldawkins.com`. No article bodies were edited before this document.

## How the site is built

- Next.js 14 App Router, React 18, Tailwind CSS, `next-mdx-remote`.
- Blog posts are MDX files in `src/content/blog/`. Projects are MDX in `src/content/projects/`.
- `src/lib/mdx.ts` reads frontmatter with `gray-matter`. The article route renders the raw MDX with `MDXRemote`. `getPostBySlug` also runs `compileMDX` and throws the result away.
- Routes that exist: `/`, `/about`, `/projects`, `/projects/[slug]`, `/blog`, `/blog/[slug]`, `/contact`, `/streams`, `/cv`.
- There is no consulting page. “Work with me” on the homepage preview and the contact page are the conversion paths. The contact form posts JSON to a Google Apps Script endpoint with `mode: 'no-cors'`, so the browser cannot confirm that a row was stored.
- Scripts: `dev`, `build` (SVG sanitize, then `next build`), `lint`, `resume:pdf`. There is no unit or integration test script.
- Deployment is Vercel. Apex `https://mitchelldawkins.com` returns 307 to `https://www.mitchelldawkins.com`. Canonical host in production is **www**. `src/lib/site.ts` still says `https://mitchelldawkins.com`.

`src/content/example-blog-template.mdx` is not in the blog directory and is not a published URL.

## Article inventory

Fifteen published posts. The page component renders the frontmatter title as the only H1. Dates below are the frontmatter values. None of the files define a modified date.

| Slug | Date | Series | Words | Human Reflections | In-body internal links |
| --- | --- | --- | --- | --- | --- |
| `a-ballot-you-can-actually-read` | 2026-10-27 | Low to No Cost Solutions | ~850 | Yes | Project |
| `little-sprouts-play-and-learn` | 2026-10-24 | Low to No Cost Solutions | ~740 | Yes | Project |
| `gh-film-hub-v2-year-two` | 2026-08-29 | Building AI with AI | ~2,050 | Yes | Prior posts + project |
| `tab-recorder-chrome-extension-demo-mp4` | 2026-08-01 | Low to No Cost Solutions | ~720 | Yes | Project |
| `fasted-biblical-fasting-companion` | 2026-07-22 | Low to No Cost Solutions | ~920 | Yes | Project, SEOS, agent post |
| `thinker-microlearning-pwa` | 2026-07-22 | Low to No Cost Solutions | ~930 | Yes | Project, 360 Cloud project |
| `seos-software-engineering-agent-os` | 2026-07-01 | Building AI with AI | ~2,290 | Yes | Agent post + SEOS project |
| `team-of-engineers-cursor-agent-pipeline` | 2026-06-27 | Building AI with AI | ~1,780 | Yes | None (GitHub only) |
| `building-around-coach-spreadsheets-live-csv` | 2026-06-19 | Low to No Cost Solutions | ~1,460 | Yes | GHFB, GH Lift, film project |
| `self-hosted-wordpress-fleet-360-web-solutions-cloud` | 2026-05-29 | Building AI with AI | ~1,190 | Yes | Project, inside the reflection |
| `hosting-gh-film-review-free-github-pages` | 2026-04-25 | Low to No Cost Solutions | ~1,110 | Yes | Film project |
| `gh-film-review-pipeline-deep-dive` | 2025-10-29 | Building AI with AI | ~1,040 | Yes | Project |
| `dawkins-family-foundation-legacy` | 2025-05-17 | None | ~570 | No | None |
| `introducing-video-processing-platform` | 2025-05-14 | Building AI with AI | ~990 | Yes | None |
| `free-contact-form` | 2025-05-01 | Low to No Cost Solutions | ~700 | Yes | None |

Project pages already store `relatedPosts` slugs for SEOS, 360 Cloud, film, Fasted, Thinker, video, GHFB, Kent ballot, Little Sprouts, and Tab Recorder. The project template prints the raw slug (`/blog/seos-software-engineering-agent-os`) instead of the article title.

### Scores and classification

Scores weigh technical usefulness, voice, structure, search usefulness, and whether a consulting reader can tell what the work is good for. They are editorial judgments, not traffic data.

| Article | Score | Class | Why |
| --- | --- | --- | --- |
| Building a Team of Engineers | 8 | REFRESH | Specific production run (issue #16, PR #33, what the agent missed). No link to the SEOS follow-up, the SEOS project, or a business reading of the pattern. |
| SEOS | 9 | KEEP | Best technical post. Links backward and to the project. Tradeoffs (manual UI, a11y, security agents) are honest. Missing an explicit “what a team would reuse” close. Two grammar slips inside Human Reflections; leave them for the author. |
| GH Film Hub v2 | 8 | REFRESH | Concrete year-two behavior, links to year one, hosting, and the spreadsheet post. Business use is present but easy to miss under the rubric detail. |
| 360 Web Solutions Cloud | 8 | REFRESH | Real architecture (isolated Compose stacks, WP-CLI, MainWP, B2). No invented cost math, which is correct. The project link is buried in Human Reflections as “here.” |
| Football film pipeline (v1) | 7 | REWRITE SECTIONS | Useful pipeline write-up, then superseded by the v2 post, which this article does not mention. Live button points at `/oag`, which 301s to the GitHub Pages mirror. Opening voice is more brochure than the later posts. Human Reflections typos are authentic and should stay. |
| Google Sheets contact form | 7 | REFRESH | Working tutorial and the pattern this site’s contact form still uses. No link to `/contact`. Closing line asks for comments. This site has no comments. |
| Multi-tenant video platform | 6 | FLAG FOR REVIEW | Clearest “building AI with AI” origin post. Duplicate H1 in the MDX. Promises an infrastructure follow-up that was never published. Project page still says “Expected beta release in Q3 2025” while status remains in development. Do not invent a new date. |
| Thinker | 8 | KEEP | Clear product, real constraints, links to the project and 360 Cloud. |
| GitHub Pages hosting | 8 | KEEP | Practical and bounded (“when this works”). Does not point at year two of the site it hosts, or at the VPS post that covers the non-static case. |
| Coach spreadsheets | 9 | KEEP | Strongest business-plus-engineering post. Sheet stays the system of record. Links projects, not the film articles that use the same idea. |
| Tab Recorder | 8 | KEEP | Small, accurate tool post. |
| Fasted | 8 | KEEP | Already links SEOS, the agent post, and the project. |
| Little Sprouts | 8 | KEEP | Personal and specific. Weak consulting fit. Do not force a sales close into the story. |
| Kent ballot | 8 | KEEP | Recent, concrete, links the project. Civic tool, not a services pitch. |
| Dawkins Family Foundation | 7 | FLAG FOR REVIEW | Mission essay. No Human Reflections block. The personal writing is the body, so do not invent a reflection block or a consulting pitch. |

Nothing should be deleted.

## SEO findings

Checked on production on 2026-10-27:

- `https://www.mitchelldawkins.com/robots.txt` is HTTP 200, `content-length: 0`, `x-matched-path: /robots.txt`. The file is `src/app/robots.txt`, and it is empty. Next.js is serving that static file.
- `https://www.mitchelldawkins.com/sitemap.xml` is HTTP 200 with an empty body. `src/app/sitemap.xml` is empty. There is no URL list.
- Rendered title for the SEOS post: `From One Agent to an OS: Building SEOS on Fasted | Mitchell Dawkins II | Mitchell Dawkins II`. `generateMetadata` already appends the name, and the root layout template appends it again. The blog index metadata has the same double suffix.
- No `alternates.canonical` on articles. `metadataBase` can fall through to `VERCEL_URL` or the apex host. Canonicals should be `https://www.mitchelldawkins.com/...` so they match the host Google already redirects to.
- No BlogPosting or BreadcrumbList JSON-LD.
- No visible breadcrumb.
- No `dateModified` field. Do not invent one for articles whose prose does not change.
- Date-only frontmatter (`2026-06-27`) is parsed with `new Date(string)`, which is UTC midnight. In US Eastern that displays as the previous calendar day. ISO timestamps on the ballot and Little Sprouts posts are not affected the same way.
- Blog index links “View all” to `/blog/series/...` when a series has more than three posts. That route does not exist.
- The blog index lists every post, then lists the same posts again under series.
- `AuthorSection.tsx` is an empty file and is unused. Articles do not show an author link. The author is identifiable from the layout and the byline in the title only.
- Open Graph on the blog index points at `/images/og-image.jpg`. That file is not in `public/`.
- Article Open Graph and Twitter cards exist and use the cover image and excerpt. They omit the canonical URL. There is no X/Twitter handle in `site.ts`, so `twitter:site` should not be invented.
- `rehype-highlight` adds highlight.js classes. No highlight.js stylesheet is imported, so fenced code is largely uncolored.
- Cover `alt` text is the post title. In-article images that were checked have descriptive alt text.
- Heading hierarchy is sound except the video post, which repeats the title as a Markdown H1 under the page H1. `#` lines inside fenced code in the film and WordPress posts are comments, not headings.
- Project pages have a title and description and no canonical, Open Graph image, or article-style schema. Out of the critical path, but the related-writing labels are weak internal links.

## Content weaknesses

- The agent-pipeline post never hands the reader to SEOS, which is the actual continuation.
- The October 2025 film post never hands the reader to the August 2026 hub post.
- The video post’s “next post” was not published.
- Several strong posts explain the system and stop before saying who else the pattern is for. That can be one short section. It should not become a sales page, and it should not add metrics the author did not publish.
- Human Reflections are present on 14 of 15 posts and are rendered in a distinct block. The foundation essay has no block. Do not fabricate one.
- The foundation piece, Little Sprouts, Fasted, and the ballot post are personal or civic. A hard consulting close would fight the piece.
- Known voice issues to leave alone unless the author asks: film-pipeline reflection typos (“reciever”, “flim”, “coudl”, “performace”, “permanantly”); SEOS reflection (“into a engineering org”, missing period before “that’s boring software engineering”).

## Conversion weaknesses

- Services are not listed anywhere. Contact says collaboration, product builds, AI-assisted engineering, and teaching. The about page’s role ladder includes “Service Provider” in one sentence.
- Navigation is Home, About, Projects, Streams, Blog, Contact. No services destination.
- Articles end at series prev/next. There is no related-article block and no single end-of-article consultation link.
- Homepage hero does not say consulting is available. About preview does, and it goes straight to the contact form.
- No CTA click events. Google Analytics loads only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set, as a page-view config, with no consent banner. There is no second analytics script. Do not add one. Do not send names, emails, or message bodies.
- The contact form’s success state is optimistic because of `no-cors`. Tracking must describe “submit attempted,” not “lead stored,” until that limitation changes.

## Priority recommendations

1. Replace the empty `robots.txt` and `sitemap.xml` with generated routes. Canonical host is `https://www.mitchelldawkins.com`. Keep every current article path.
2. Stop doubling titles. Add canonical URLs, BlogPosting JSON-LD, breadcrumbs, and a correct calendar-date formatter. Add `dateModified` only on posts whose prose actually changes.
3. Fix the series index 404 and stop listing the same posts twice.
4. Add one consulting page in the existing layout, with four service sections grounded in work already on the site: custom software, AI automation, application modernization, technical discovery. No testimonials, prices, or client results.
5. One end-of-article CTA, plus related links, rendered by the template. Skip the pitch on the foundation essay.
6. Targeted prose only on the priority posts: a short business-application section, the missing internal links, the video H1, the video follow-up that does not exist, the contact-form comment line, and the film live URL. Preserve Human Reflections verbatim.
7. Point project “related writing” at titles. Show syntax colors. Add CTA events that fire only if `gtag` already exists.
8. Flag the video beta date, foundation treatment, and reflection typos for the author. Do not publish new articles. Do not deploy.

## Case-study candidates

Enough verified material for a problem-constraints-solution telling already exists on the project pages and in the posts. Missing numbers should stay missing.

| Candidate | Usable now | Do not invent |
| --- | --- | --- |
| SEOS | Roles, manifest, human merge gate, Fasted PR #93 / issue #94 | Speedup, cost saved, team size |
| 360 Web Solutions Cloud | Isolation model, deploy path, backup path, “in development” | Dollar comparison, uptime, site count |
| GH Film Hub | Rubric, sheet ingest, two-season hub, Pages + VPS | A formal before/after study beyond what v1 already claims |
| Film pipeline v1 | CSV to PDF/HTML, GitHub Pages | New percentages on top of “hours to minutes” |
| Coach spreadsheets | Sheet-first check-in, attendance, timers | Adoption counts |
| Contact form / Sheets | Free intake pattern used by this site | Submission volume |

Suggested future articles, not written here: SEOS after the first months of auto-ready (needs the author’s fix-pass results), a video-platform status post once a beta date is real, and a short “sheet to report” piece that ties GHFB and film together without repeating both posts.
