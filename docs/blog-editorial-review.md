# Blog editorial review

Items left for Mitchell. None of these were guessed into the articles.

## Articles requiring author review

### Video Processing Platform

The May 2025 post promised an infrastructure follow-up. That post does not exist. The article now says so, and it does not set a new beta date.

The project page said “Expected beta release in Q3 2025.” That date has passed and the status is still under development, so the sentence now says the target has passed and a new public date has not been set. Replace that sentence if you want a real milestone on the page.

### Dawkins Family Foundation

No Human Reflections block was added. The personal writing is the body of the essay. No consulting CTA was added. Say if you want a reflection block or a light link to the foundation site beyond what is already there.

### Google Sheets contact form

The closing line asked readers to comment. This site has no comments, so it now points at the contact page. The post still says an upcoming entry will cover Gmail aliases. That entry has not been published.

The Gmail alias in the post was already public. It was not repeated anywhere new.

### Human Reflections left verbatim

These are inside reflection blocks and were not copyedited:

- Film pipeline: “reciever”, “flim”, “coudl developer”, “performace”, “permanantly”.
- SEOS: “into a engineering org”, and the missing pause in “That's not agent magic that's boring software engineering.”

## Unverified technical claims

Existing claims were not upgraded into metrics.

- Film pipeline v1 still says manual analysis went from hours to minutes. No percentage was added.
- SEOS and the agent pipeline do not state a throughput or cost change. The new sections point at the production shape already in the posts (issue #16, PR #33, PR #93).
- 360 Web Solutions Cloud does not state a dollar savings figure. The reflection already says hosting bills were the motive.
- Video platform accuracy, cost, and a ship date are not stated.
- Contact-form volume is not stated. The reflection’s “working flawlessly for months” and “5-second delay” were left as written in May 2025.

## Missing metrics

Do not backfill these without notes from the author:

- SEOS fix-pass success rate (the post already lists this as an open question).
- Agent pipeline cycle time beyond the single ~26 second dispatch and the 183-line PR.
- WordPress fleet site count, monthly cost, or restore-test results.
- GHFB adoption counts.
- Film hub grade deltas beyond the qualitative “ahead of last year's opening pace” line already in the v2 post.
- Contact-form submission counts.

## Suggested future articles

Not written.

1. SEOS after auto-ready has a real sample: when the architecture gate fires, and whether one fix pass is enough.
2. Video platform status, once there is a beta date or a working tenant path worth showing.
3. A short “sheet to report” piece only if it says something the GHFB post and the film posts do not already say.
4. The Gmail-alias follow-up the contact-form post still promises.

## Recommended case studies

The material is already on the site. A case-study page would mostly restate it. Worth doing only if you want a single URL per engagement.

| Candidate | Usable now | Still missing |
| --- | --- | --- |
| SEOS | Roles, manifest, human merge, Fasted PR #93 | Throughput, cost, who else has run it |
| 360 Web Solutions Cloud | Isolation, Git deploy, WP-CLI, Backblaze, MainWP | Cost comparison, site count, an incident |
| GH Film Hub | Rubric, sheet ingest, two-season hub, Pages and VPS | A measured time study |
| Coach spreadsheets | Sheet-first check-in, attendance, timers | How many coaches use it |
| Contact form | The pattern this site’s form still uses | Volume, spam rate |

## Outstanding editorial decisions

- Consulting is a new nav item and a new page. The four categories match work already on the site (about-page skills plus shipped projects). Cut or rename a category if it overclaims.
- WNBA Stat Spot is linked from Application Modernization because that project is Laravel/PHP. It is not described as a client modernization.
- Little Sprouts, Fasted, the ballot, and Thinker get the same quiet end CTA as the technical posts. Remove `service` for any of them in `src/lib/article-relations.ts` if that close feels wrong.
- The foundation essay is the one post with no CTA.
- No new article was published. No slug changed. No redirect was added. `/oag` is not a route in this repo; the film button now uses the GitHub Pages URL that `/oag` already 301s to.
