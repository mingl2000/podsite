# Tasks for Podcast website (feature 1)

**Feature**: Podcast website
**Spec**: `./.specify/specs/1-podcast-site/spec.md`

Phase 1 — Setup

- [x] T001 Create Next.js project skeleton and `package.json` with basic scripts at repository root (`package.json`, `next.config.js`) — `./package.json`, `./next.config.js`
- [x] T002 Create mocked episodes data file with 20 items at `data/episodes.json` — `./data/episodes.json`
- [x] T003 Add a sample audio placeholder at `assets/audio/sample.mp3` (small silent or short sample file) — `./assets/audio/sample.mp3`
- [x] T004 Add Tailwind CSS configuration and initial global styles (`tailwind.config.js`, `postcss.config.js`, `styles/globals.css`) — `./tailwind.config.js`, `./postcss.config.js`, `./styles/globals.css`
- [x] T005 Add `README.md` quickstart and minimal CSP guidance (copy from `specs/main/quickstart.md`) — `./README.md`
- [x] T006 Add `.gitignore` entries for `node_modules/`, `.next/`, `dist/` and local dev files — `./.gitignore`

Phase 2 — Foundational (blocking prerequisites)

- [x] T007 Add `next.config.js` configured for static export and ensure export output to `dist/` — `./next.config.js`
- [x] T008 Add `npm run dev`, `npm run build`, and `npm run export` scripts to `package.json` (document ports) — `./package.json`
- [x] T009 Add CI workflow to build, export and run link-check (`.github/workflows/ci.yml`) — `./.github/workflows/ci.yml`
- [x] T010 Add a link-check script and package entry that can be called locally and in CI (e.g., `scripts/check-links.js`, `package.json` script `check-links`) — `./scripts/check-links.js`, `./package.json`
- [x] T011 Add a data validation script that validates `data/episodes.json` against the schema `specs/main/contracts/episodes.schema.json` and fail CI if invalid (`scripts/validate-data.js`) — `./scripts/validate-data.js`

Phase 3 — User Story 1 (US1) Landing page (P1)

- [x] T012 [US1] Create homepage page with featured episode block and proper meta tags (`pages/index.js`) — `./pages/index.js`
- [x] T013 [US1] Implement `components/FeaturedEpisode.js` used by the homepage (`components/FeaturedEpisode.js`) — `./components/FeaturedEpisode.js`
- [x] T014 [US1] Add homepage styling (Tailwind classes / `styles/globals.css`) and ensure image `alt` text present — `./styles/globals.css`, `./pages/index.js`
- [ ] T015 [US1] Add an end-to-end test for the homepage validating featured block presence (`tests/playwright/homepage.spec.ts`) — `./tests/playwright/homepage.spec.ts`

Phase 4 — User Story 2 (US2) Episodes listing (P1)

- [x] T016 [US2] Create episodes listing page that reads `data/episodes.json` and renders 20 episodes (`pages/episodes/index.js`) — `./pages/episodes/index.js`
- [x] T017 [US2] Implement `components/EpisodeListItem.js` used by the episodes list (`components/EpisodeListItem.js`) — `./components/EpisodeListItem.js`
- [ ] T018 [US2] Add an automated test asserting `/episodes` lists exactly 20 items (`tests/playwright/episodes.spec.ts`) — `./tests/playwright/episodes.spec.ts`

Phase 5 — User Story 3 (US3) Episode detail pages (P2)

- [x] T019 [US3] Implement dynamic route `pages/episodes/[slug].js` with `getStaticPaths`/`getStaticProps` to generate per-episode pages (`pages/episodes/[slug].js`) — `./pages/episodes/[slug].js`
- [x] T020 [US3] Implement `components/EpisodeDetail.js` to render show notes and audio player (`components/EpisodeDetail.js`) — `./components/EpisodeDetail.js`
- [ ] T021 [US3] Ensure at least the featured episode and one other episode have working static pages after build (verify in `dist/`) — `./dist/` (output verification)

Phase 6 — User Story 4 (US4) About & FAQ (P3)

- [x] T022 [US4] Create About page `pages/about.js` with semantic headings and content (`pages/about.js`) — `./pages/about.js`
- [x] T023 [US4] Create FAQ page `pages/faq.js` with semantic headings and content (`pages/faq.js`) — `./pages/faq.js`
- [ ] T024 [US4] Add content accessibility verification step (axe or Playwright accessibility check) as a script and CI job (`scripts/check-accessibility.js`, CI workflow) — `./scripts/check-accessibility.js`, `./.github/workflows/ci.yml`

Phase 7 — User Story 5 (US5) Link integrity & SEO (cross-cutting)

- [x] T025 [US5] Add meta tags for homepage and episode pages using Next.js `Head` component (ensure `title` and `meta description`) — `./pages/index.js`, `./pages/episodes/[slug].js`
- [x] T026 [US5] Ensure link-check runs in CI and fails the build on broken internal links (tie to `T009`) — `./.github/workflows/ci.yml`
- [P] T027 [US5] Add a local script to run link-check (`scripts/check-links.ps1` or `scripts/check-links.js`) — `./scripts/check-links.ps1`

Final Phase — Polish & Cross-cutting concerns

- [x] T028 Add responsive image guidelines and optimize images for mobile (use `public/assets/images/` and `srcset` or `next/image`) — `./pages/*`, `./components/*`, `./public/assets/images/`
- [x] T029 Add README badges (CI) and `Maintainer` contact to `README.md` — `./README.md`
- [x] T030 Add a short deploy guide for Vercel and Netlify to `README.md` (copy from `specs/main/quickstart.md`) — `./README.md`

Dependencies (high-level)

- `T001` → `T007,T008` (Next.js skeleton must exist before configuring export and scripts)
- `T002,T003,T004` → content tasks `T012..T023` (data, audio and styles should exist before pages are implemented)
- `T007,T008,T009,T010,T011` → CI and build tasks (`T009` depends on `T008`)
- Page implementation tasks (`T012..T023`) are independent per story after foundational tasks complete and can be worked in parallel where marked `[P]`.

Parallel execution examples

- While `T001` is being completed, parallel tasks `T002`, `T003`, and `T004` can be implemented concurrently.
- After foundational tasks finish (`T007..T011`), teams can split work: one engineer implements `US1` (T012..T015), another implements `US2` (T016..T018), and a third implements `US3` (T019..T021).

Implementation strategy (MVP first)

- MVP scope: Complete Phase 1, Phase 2, and Phase 3 (Landing and Episodes list) so the site is deployable with a featured episode and the episodes list (this satisfies SC-1 and SC-2).
- Iteration 2: Add episode detail pages (Phase 5) and About/FAQ (Phase 6).
- Iteration 3: Add tests, CI refinements, accessibility checks, and polish.

Task counts

- Total tasks: 30
- Tasks per story: US1=4, US2=3, US3=3, US4=3, US5=3, Setup/Foundation/Polish=14
