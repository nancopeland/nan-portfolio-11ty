# nancopeland.com — build setup

Write posts in Markdown, run one command, get HTML. No framework, no config.

## Folder structure

```
├── build.js          ← the build script
├── watch.js          ← optional: auto-rebuild on file save
├── package.json
├── style.css         ← all your styles live here
├── posts/
│   ├── index.md      ← your homepage
│   └── slate-ios-app.md   ← one file per post/page
└── output/           ← generated HTML (don't edit by hand)
    ├── index.html
    └── slate-ios-app/
        └── index.html
```

## Setup

```bash
npm install
```

## Writing a post

Create a new `.md` file in `posts/`. Start with frontmatter:

```markdown
---
title: My New Post
date: January 10, 2025
description: A short description for search engines.
---

# My New Post

Write your content here in regular Markdown.

![an image](/img/my-image.png)
*Caption goes here as italic text on the next line*
```

The filename becomes the URL slug: `posts/my-new-post.md` → `/my-new-post/`

## Build

```bash
npm run build
```

Outputs everything to `output/`. Open `output/index.html` in your browser to preview.

## Live preview while writing

```bash
npm run watch
```

Auto-rebuilds whenever you save a `.md` or `.css` file. Pair with a browser that auto-refreshes (e.g. the Live Server extension in VS Code).

## Images

Put images in `output/img/` (same as before — the `img/` folder lives inside `output/`). Reference them in Markdown as `/img/my-image.png`.

## Publishing to GitHub Pages

1. Create a repo on GitHub (e.g. `nancopeland.github.io`)
2. Run `npm run build`
3. Push the contents of `output/` to the `main` branch (or use a `gh-pages` branch)
4. In repo Settings → Pages, set source to your branch / root

Every time you write a new post:
```bash
npm run build
cd output
git add .
git commit -m "new post: my post title"
git push
```

## Publishing to Netlify (auto-deploy)

1. Push your whole project (not just `output/`) to GitHub
2. Connect the repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `output`

Now every `git push` triggers a deploy automatically — no manual step needed.

## Customizing the template

The HTML wrapper lives in `build.js` inside the `htmlTemplate()` function. Edit it there to change the nav, footer, or `<head>` (e.g. swap in your Adobe Fonts kit URL).
