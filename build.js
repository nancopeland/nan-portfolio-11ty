#!/usr/bin/env node

// build.js — converts markdown files to HTML
// Usage: node build.js

const fs = require("fs");
const path = require("path");
const { marked } = require("marked");

const POSTS_DIR = "./posts";
const OUTPUT_DIR = "./output";
const CSS_FILE = "./style.css";

// ---------- helpers ----------

function parseFrontmatter(raw) {
  // Supports optional YAML-ish frontmatter block:
  //   ---
  //   title: My Post
  //   date: 2024-01-15
  //   description: Short blurb
  //   ---
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };

  const meta = {};
  match[1].split("\n").forEach((line) => {
    const [key, ...rest] = line.split(":");
    if (key) meta[key.trim()] = rest.join(":").trim();
  });
  return { meta, body: match[2] };
}

function readCss() {
  if (fs.existsSync(CSS_FILE)) return fs.readFileSync(CSS_FILE, "utf-8");
  return "";
}

function htmlTemplate({ title, date, description, bodyHtml, isHome }) {
  const metaDesc = description
    ? `<meta name="description" content="${description}">`
    : "";

  const header = `<a href="/" class="home-link">Nan Copeland</a>`;
  const cssPath = isHome ? "style.css" : "../style.css";
  const dateHtml = date && !isHome ? `<p class="post-date">${date}</p>` : "";
  const titleHtml = title && !isHome ? `<h1>${title}</h1>` : "";
  const descHtml = description && !isHome ? `<p class="post-description">${description}</p>` : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  ${metaDesc}
  <link href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${cssPath}">
</head>
<body>
  <div class="container">
    <nav>${header}</nav>
    <main>
      ${titleHtml}
      ${descHtml}
      ${dateHtml}
      ${bodyHtml}
    </main>
    <footer>
      <a href="/">Home</a> • <a href="/resume_nan_copeland.pdf">Download Résumé</a> • <a href="https://github.com/nancopeland">Github</a>
    </footer>
  </div>
</body>
</html>`;
}

// ---------- build ----------

function build() {
  // Make sure output dir exists
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));

  for (const file of files) {
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
    const { meta, body } = parseFrontmatter(raw);

    const title = meta.title || path.basename(file, ".md");
    const date = meta.date || "";
    const description = meta.description || "";
    const isHome = file === "index.md";

    const bodyHtml = marked.parse(body);

    const html = htmlTemplate({ title, date, description, bodyHtml, isHome });

    // index.md → output/index.html
    // my-post.md → output/my-post/index.html  (clean URLs)
    let outPath;
    if (isHome) {
      outPath = path.join(OUTPUT_DIR, "index.html");
    } else {
      const slug = path.basename(file, ".md");
      const dir = path.join(OUTPUT_DIR, slug);
      fs.mkdirSync(dir, { recursive: true });
      outPath = path.join(dir, "index.html");
    }

    fs.writeFileSync(outPath, html);
    console.log(`  ✓ ${file} → ${outPath}`);
  }

  // Copy style.css to output
  if (fs.existsSync(CSS_FILE)) {
    fs.copyFileSync(CSS_FILE, path.join(OUTPUT_DIR, "style.css"));
    console.log("  ✓ style.css copied");
  }

  console.log(`\nDone! ${files.length} page(s) built into ./${OUTPUT_DIR}/`);
}

build();
