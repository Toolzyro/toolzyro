# Toolzyro

A directory of free, freemium, and premium AI tools — updated regularly.

## Adding a new tool

Open `data/tools.js` and paste a new entry into the `TOOLS` array:

```js
{
  name: "Tool Name",
  url: "https://example.com",
  description: "One short sentence on what it does.",
  tier: "free",              // "free" | "freemium" | "premium"
  dateAdded: "2026-08-19"    // today's date, YYYY-MM-DD
}
```

Save (or commit, if editing on GitHub). That's it — no other file needs to change.

- Tools added in the last 7 days automatically get a **New** badge.
- If you don't include an `image` field, the site automatically pulls the tool's favicon from its URL.

## Local preview

Just open `index.html` in a browser — no server or build step required.

## Files

- `index.html` — page structure
- `style.css` — all styling
- `script.js` — search, filtering, and rendering logic
- `data/tools.js` — **the file you edit** to add/remove tools
