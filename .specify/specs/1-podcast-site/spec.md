---
title: Podcast website
short-name: podcast-site
number: 1
status: draft
---

# Podcast website

Summary

Build a modern, sleek static podcast website based on the project template. The site has a landing page with one featured episode, an Episodes page listing 20 mocked episodes, an About page, and a FAQ page. All episode data is mocked and stored in the repository (no external feeds).

Actors

- Visitor: a website visitor who browses pages and plays episode audio (mocked).
- Content Editor: person responsible for updating mocked data and site content.
- Maintainer: person who runs builds, configures deployment and CI.

User Scenarios & Testing

- Scenario 1 — Landing (happy path): Visitor opens `/` and sees the site title, hero, and a featured episode block with title, short description, image, and a visible play control (audio may be a mocked sample). Test: load `/`, assert featured block exists and contains title, image `alt`, and play button.
- Scenario 2 — Episodes list: Visitor opens `/episodes` and sees a list of exactly 20 episodes sourced from a local mocked file (e.g., `data/episodes.json`). Test: load `/episodes`, count episode entries == 20, each entry has title, date, duration and image `alt`.
- Scenario 3 — Episode detail (optional static page): Visitor opens an episode detail page (`/episodes/:slug`) and sees full show notes and audio player. Test: for at least one sample episode, open detail page and verify notes, image `alt`, and audio control present.
- Scenario 4 — About & FAQ: Visitor opens `/about` and `/faq` and reads static content. Test: both pages return 200 and have semantic headings.
- Scenario 5 — Link integrity and SEO: Run link-check and verify no broken internal links; verify `index.html` includes `title` and `meta description`.

Functional Requirements (testable)

FR-1 Landing page: The site MUST expose a homepage at `/` containing a featured episode block with title, summary (<= 300 chars), image with `alt`, and a play control (can point to a mocked audio file).

FR-2 Episodes listing: The site MUST provide `/episodes` that lists exactly 20 mocked episodes pulled from a local data file bundled in the repo.

FR-3 Episode details: The site SHOULD provide per-episode static pages (`/episodes/:slug`) for at least the featured episode and one other sample episode.

FR-4 Static pages: The site MUST include `/about` and `/faq` with provided content.

FR-5 Metadata: `index.html` MUST include a `title` and `meta description`. Each episode page MUST include appropriate meta tags for title and description.

FR-6 Build output: The project MUST provide a single `build` command that outputs a static directory `dist/` or `build/` suitable for deployment.

FR-7 Dev server: The project MUST provide a `start` or `dev` command for local testing and document the local port in `README.md`.

FR-8 Accessibility: All images MUST have `alt` text, pages MUST use semantic headings, and interactive elements (links/buttons) MUST be keyboard accessible.

FR-9 Link-check: The CI or pre-release process MUST run a link-check and fail the build on broken internal links.

FR-10 No secrets: No secrets, API keys, or credentials are stored in the repo.

FR-11 CSP guidance: The repo MUST include a recommended minimal Content Security Policy snippet in `README.md` or hosting config.

Success Criteria

- SC-1: Homepage loads and displays the featured episode block with title, image (with `alt`) and a visible play control.
- SC-2: `/episodes` lists 20 episodes; automated test validates count == 20.
- SC-3: `/about` and `/faq` pages exist and return HTTP 200 when served from the `dist/` directory.
- SC-4: Link-check passes with zero broken internal links.
- SC-5: Basic accessibility checks pass: images have `alt` text, pages include semantic headings, and primary controls are keyboard-accessible.
- SC-6: CI pipeline builds the `dist/` output and the deploy step can publish it to a static host.

Key Entities

- Episode
  - id (string)
  - slug (string)
  - title (string)
  - description (string)
  - publish_date (ISO date)
  - duration (string or seconds)
  - image (relative path)
  - audio (relative or sample URL)
  - notes (markdown/html)

- SiteMetadata
  - title
  - description
  - author/maintainer

Assumptions

- All episode data is mocked and provided in the repository (e.g., `data/episodes.json`).
- Audio files may be sample files or external public sample URLs; playback is optional for specification tests (presence of player control is required).
- The project template supports a static build step; if it does not, the implementer will add a minimal build (copy files to `dist/`).

Acceptance Criteria

- AC-1: All FR items above have automated or manual acceptance tests described in `User Scenarios & Testing`.
- AC-2: The `README.md` includes local dev instructions (`start`/`dev`), the `build` command, and a short deploy guide for one provider.

Files & Paths (expected minimal structure)

- `index.html` — homepage with featured episode
- `episodes/index.html` or route `/episodes` — episodes list
- `episodes/<slug>.html` — optional per-episode pages
- `about/index.html` — about page
- `faq/index.html` — FAQ page
- `data/episodes.json` — mocked episode data (20 items)
- `assets/` — images/fonts
- `styles/` — CSS
- `scripts/` — optional JS (player)
- `README.md` — dev & deploy instructions

Dependencies & Notes

- No external feeds; all data is mocked.
- Hosting must support static site deployment and SPA fallback if single-page routing is used.

Ready for planning: yes
