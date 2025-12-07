# Research — Podcast site technical decisions

Decision: Use Next.js in static export mode (SSG) with data embedded as local JSON files.

Rationale:
- The user requested Next.js with static site configuration and embedded data. Next.js supports SSG via `getStaticProps` and `next export` to produce a plain static site suitable for CDNs.
- Static export keeps deployment simple (Vercel, Netlify, GitHub Pages, S3+CDN) and aligns with the project's static-app constitution.

Implementation choices (chosen / alternatives):

- Styling: Choose Tailwind CSS (chosen) — quick to produce a sleek responsive UI without heavy custom CSS. Alternatives: plain CSS, SASS, CSS modules, or component libraries (Chakra, Material).
- Routing: Use Next.js pages or app-router with static rendering. Chosen: pages router with `getStaticProps`/`getStaticPaths` for predictable static artifacts and compatibility with `next export`.
- Data location: `data/episodes.json` at repo root (chosen) — simple, easy to read and version. Alternative: content/MD files per episode (useful for richer markdown show notes), but JSON is easier for mocking 20 items.
- Audio: Include a single sample audio `assets/audio/sample.mp3` and reference it from episodes. This keeps repository size small and playback mocked.

CI/deploy:
- CI will run `npm ci`, `npm run build`, and a link-check step (HTML/link validator). Deploy targets: Vercel (recommended for Next.js), Netlify, or static host.

Security and hosting notes:
- Ensure CSP guidance in `README.md` is included; do not commit secrets.
- For SPA-like client navigation, configure host to fallback to `index.html` where necessary; `next export` produces per-page files so host fallback may not be required if pages are pre-rendered.

Alternatives considered (brief):
- Use plain static site generator (11ty, Hugo) — simpler, but user asked for Next.js.
- Use app-router and streaming features — more complex, and may not export cleanly with `next export`.

Conclusion: Proceed with Next.js (pages router) + Tailwind CSS, data in `data/episodes.json`, sample audio in `assets/audio/sample.mp3`, build to `dist/` using `npm run build` then `npm run export` or configure `next.config.js` to output to `dist/`.
