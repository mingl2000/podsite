# Data model — Podcast site

Entity: Episode

- id: string (UUID or short id)
- slug: string (url-friendly)
- title: string
- description: string (short summary, <= 300 chars)
- publish_date: string (ISO 8601)
- duration: integer (seconds)
- image: string (relative path to `assets/images/`)
- audio: string (relative path to `assets/audio/` or sample URL)
- notes: string (markdown or HTML)

Example JSON (single episode)

```json
{
  "id": "1",
  "slug": "welcome-to-podcast",
  "title": "Welcome to the Podcast",
  "description": "An introduction to the show.",
  "publish_date": "2025-01-01",
  "duration": 360,
  "image": "assets/images/episode-1.jpg",
  "audio": "assets/audio/sample.mp3",
  "notes": "# Show notes\nThis is a mocked episode."
}
```

Entity: SiteMetadata

- title: string
- description: string
- author: string

Storage

- Data lives in `data/episodes.json` — array of Episode objects (exactly 20 entries required for the episodes list requirement).
