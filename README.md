
constitution.md/GPT-5 mini: Fill the constitution with the bare minimum requirements for a static web app based on the template.

constitution.md/GPT-5 mini: # Podcast Site

A modern, sleek static podcast website built with Next.js, Tailwind CSS, and mocked episode data.

## Features

- **Landing page** with featured episode
- **Episodes listing** of 20 mocked episodes
- **Episode details** pages for each episode with audio player
- **About & FAQ pages** with semantic HTML
- **Responsive design** optimized for mobile and desktop
- **Static export** ready for deployment to Vercel, Netlify, or any static host
- **Accessibility** with semantic headings, alt text on images, and keyboard navigation
- **SEO** with meta tags and Open Graph support

## Local Development

### Prerequisites

- Node.js 18+ and npm

### Setup

```bash
npm ci
```

### Run dev server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`.

## Build & Export

### Production build

```bash
npm run build
npm run export
```

Static files will be output to the `dist/` directory.

## Project Structure

```
.
├── pages/              # Next.js pages
│   ├── index.js        # Homepage
│   ├── episodes/
│   │   ├── index.js    # Episodes listing
│   │   └── [slug].js   # Episode detail (dynamic)
│   ├── about.js        # About page
│   └── faq.js          # FAQ page
├── components/         # React components
├── styles/             # Global CSS and Tailwind
├── data/               # Mocked episode data
│   └── episodes.json   # 20 episodes
├── assets/             # Images, audio, favicon
│   ├── images/
│   └── audio/
├── public/             # Static files
├── package.json        # Dependencies and scripts
└── next.config.js      # Next.js configuration
```

## Data

All episode data is mocked and stored in `data/episodes.json`. Each episode has:

- **id**: unique identifier
- **slug**: URL-friendly identifier
- **title**: episode title
- **description**: short summary (≤300 characters)
- **publish_date**: ISO 8601 date
- **duration**: duration in seconds
- **image**: relative path to episode image
- **audio**: relative path to audio file (all use mocked sample)
- **notes**: show notes in markdown

## Deployment

### Vercel (Recommended)

1. Connect this repository to Vercel
2. Vercel will auto-detect Next.js and configure the build
3. Deploy with a single click

### Netlify

1. Connect this repository to Netlify
2. Set build command: `npm run build && npm run export`
3. Set publish directory: `dist/`
4. Deploy

### GitHub Pages or Static Host

```bash
npm run build
npm run export
# Upload `dist/` directory to your static host
```

## Security & CSP

For production deployments, configure a Content Security Policy (CSP) header:

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; media-src 'self' data:;
```

**Note**: For development and static exports, adjust CSP to allow inline scripts and styles as needed.

## Accessibility

- All images include descriptive `alt` text
- Pages use semantic HTML with proper heading hierarchy
- Interactive elements are keyboard accessible
- Links have meaningful, descriptive text

## Testing

### Link Check

```bash
npm run check-links
```

Validates all internal links are working.

### Data Validation

```bash
npm run validate-data
```

Validates `data/episodes.json` conforms to the expected schema.

## CI/CD

A GitHub Actions workflow runs on every push:

1. Install dependencies
2. Build the site
3. Export to static files
4. Run link-check
5. Run data validation

## Maintenance

For questions or issues, contact the maintainer.

---

**Version**: 1.0.0 | **Last Updated**: 2025-12-06

