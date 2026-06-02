#!/usr/bin/env node

// watch.js — rebuilds whenever a .md or .css file changes
// Usage: node watch.js

const fs = require("fs");
const { execSync } = require("child_process");

const WATCH_DIRS = ["./posts", "."];
const IGNORE = new Set(["node_modules", "docs", ".git"]);

console.log("Watching for changes... (Ctrl+C to stop)\n");

// Run an initial build
runBuild();

// Watch directories recursively, skipping ignored folders
for (const dir of WATCH_DIRS) {
  fs.watch(dir, { recursive: false }, (event, filename) => {
    if (!filename) return;
    const base = filename.split("/")[0];
    if (IGNORE.has(base)) return;
    console.log(`Changed: ${filename}`);
    runBuild();
  });
}

function runBuild() {
  try {
    execSync("node build.js", { stdio: "inherit" });
  } catch (e) {
    console.error("Build failed:", e.message);
  }
}
