# Static Web App Constitution

Purpose

This document lists the minimal, non-negotiable requirements for a static web application created from the project template. It is intentionally short — implementers should follow these items to produce a deployable, maintainable static site.

Scope

- Single-page apps or multi-page static sites produced by the template.
- Static assets served over HTTPS from a CDN or static-hosting provider.

Minimum Requirements

- **Required files**: `index.html`, `README.md`, `assets/` (images, fonts), `styles/` (CSS), `scripts/` (optional JS), `favicon.ico`.
- **Metadata**: `index.html` must include a `title` and `meta description`.
- **Build**: If the template includes a build step, provide a single `build` command in `package.json` (or equivalent) that outputs to a `dist/` or `build/` directory.
- **Dev server**: Provide a `start` or `dev` command for local testing (port and simple instructions in `README.md`).
- **Routing**: If the site is an SPA, configure the host to fallback to `index.html` for unknown routes (single-page routing support).
- **HTTPS**: All deployments must use HTTPS by default.

Security & Privacy (minimum)

- Serve with an appropriate Content Security Policy (CSP) header; include a recommended minimal policy snippet in `README.md` or hosting config.
- Ensure no secrets or credentials are committed to the repo. Any runtime secrets must be injected by the host (not stored in source).
- Provide a `robots.txt` (allow or disallow as appropriate) and a minimal `privacy` note in `README.md` if the site collects data.

Accessibility & Quality

- Follow basic accessibility: pages must have semantic headings, meaningful link text, and images must include `alt` text where appropriate.
- Run a link-check and report broken links before release.

Deployment Targets

- Support at least one of: GitHub Pages, Netlify, Vercel, or an S3+CDN setup.
- Include a short deploy section in `README.md` describing the chosen provider and steps to publish the `dist/` or `build/` directory.

CI & Tests (minimal)

- Provide a lightweight CI step that at minimum:
	- builds the site (if applicable),
	- runs a link-check or HTML validation step,
	- optionally lints CSS/JS.

Maintenance & Governance

- Keep the `README.md` up to date with local dev and deploy commands.
- Document the site `Version` and a `Maintainer` contact (email or team) in `README.md` or repository metadata.

Amendments

This constitution is intentionally minimal. Changes must be recorded by updating the `Version` and the `Last Amended` date below.

**Version**: 1.0 | **Ratified**: [RATIFICATION_DATE] | **Last Amended**: [LAST_AMENDED_DATE]

