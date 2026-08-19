/* ==========================================================
   TOOLZYRO — TOOL LIST
   ==========================================================
   This is the ONLY file you need to edit to add a new tool.

   To add one, paste a new object into the TOOLS array below,
   in this shape:

   {
     name: "Tool Name",
     url: "https://example.com",
     description: "One short sentence on what it does.",
     tier: "free",              // "free" | "freemium" | "premium"
     dateAdded: "2026-08-19"    // today's date, YYYY-MM-DD
   }

   Notes:
   - Don't forget the comma after the closing } of each entry
     (except optionally the very last one).
   - You don't need to provide an "image" — the site automatically
     pulls the tool's favicon from its URL. Only add an "image"
     field (a direct image URL) if you want to override that.
   - Tools added within the last 7 days automatically get a
     "New" ribbon — no extra work needed.
   ========================================================== */

const TOOLS = [
  {
    name: "ChatGPT",
    url: "https://chatgpt.com",
    description: "OpenAI's conversational assistant for writing, coding, research, and everyday questions.",
    tier: "freemium",
    dateAdded: "2025-11-02"
  },
  {
    name: "Claude",
    url: "https://claude.ai",
    description: "Anthropic's AI assistant, built for thoughtful writing, coding help, and long-context conversations.",
    tier: "freemium",
    dateAdded: "2025-11-02"
  },
  {
    name: "Perplexity",
    url: "https://www.perplexity.ai",
    description: "An AI-powered search engine that answers questions with cited, up-to-date sources.",
    tier: "freemium",
    dateAdded: "2025-12-10"
  },
  {
    name: "Notion AI",
    url: "https://www.notion.com/product/ai",
    description: "A writing and research assistant built directly into Notion's docs and databases.",
    tier: "freemium",
    dateAdded: "2026-01-15"
  },
  {
    name: "ElevenLabs",
    url: "https://elevenlabs.io",
    description: "Realistic AI voice generation and cloning for narration, dubbing, and audio content.",
    tier: "freemium",
    dateAdded: "2026-02-20"
  },
  {
    name: "Canva Magic Studio",
    url: "https://www.canva.com/magic-studio",
    description: "A suite of AI design tools inside Canva for generating images, text, and layouts.",
    tier: "freemium",
    dateAdded: "2026-03-05"
  },
  {
    name: "Craiyon",
    url: "https://www.craiyon.com",
    description: "A simple, browser-based AI image generator that needs no sign-up.",
    tier: "free",
    dateAdded: "2026-04-01"
  },
  {
    name: "Hugging Face Spaces",
    url: "https://huggingface.co/spaces",
    description: "A hub of thousands of community-built AI demos and models you can try instantly.",
    tier: "free",
    dateAdded: "2026-04-18"
  },
  {
    name: "Google Colab",
    url: "https://colab.research.google.com",
    description: "Free cloud notebooks for running Python and machine learning code with GPU access.",
    tier: "free",
    dateAdded: "2026-05-22"
  },
  {
    name: "Bing Image Creator",
    url: "https://www.bing.com/images/create",
    description: "Microsoft's free AI image generator, built into Bing and Designer.",
    tier: "free",
    dateAdded: "2026-06-10"
  },
  {
    name: "Midjourney",
    url: "https://www.midjourney.com",
    description: "A leading AI image generator known for painterly, highly stylized output.",
    tier: "premium",
    dateAdded: "2026-06-30"
  },
  {
    name: "Runway",
    url: "https://runwayml.com",
    description: "AI-powered video generation and editing tools used in film and content production.",
    tier: "premium",
    dateAdded: "2026-07-20"
  },
  {
    name: "Jasper",
    url: "https://www.jasper.ai",
    description: "An AI writing platform built for marketing teams and brand-consistent content.",
    tier: "premium",
    dateAdded: "2026-08-07"
  },
  {
    name: "Suno",
    url: "https://suno.com",
    description: "Generates full songs, including vocals and instrumentation, from a text prompt.",
    tier: "freemium",
    dateAdded: "2026-08-10"
  },
  {
    name: "Pika",
    url: "https://pika.art",
    description: "An AI video generation tool for turning text or images into short video clips.",
    tier: "premium",
    dateAdded: "2026-08-13"
  }
];
