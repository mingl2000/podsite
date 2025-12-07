# Quickstart — Podcast site (Next.js static)

1) Prerequisites

- Node.js 18+ and npm

2) Install

```powershell
npm ci
```

3) Local dev

- Run the dev server on port 3000:

```powershell
npm run dev
# Visit http://localhost:3000
```

4) Build & export (static)

```powershell
npm run build
npm run export
# Output will be in `dist/` (configure `next.config.js` or package.json scripts to ensure this)
```

5) Data

- Place mocked episodes at `data/episodes.json` (20 items). See `specs/main/data-model.md` for the expected schema.
- Place sample audio at `assets/audio/sample.mp3` and images under `assets/images/`.

6) Deploy

- Vercel: recommended — deploy by connecting the repository and using the default Next.js build step.
- Netlify / GitHub Pages / S3: use the exported `dist/` folder.

7) CI (recommended)

- Build the site and run a link-check step. Failing link-check should fail the pipeline.
