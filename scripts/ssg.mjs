import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const root = process.cwd();
const distDir = path.join(root, "dist");

function escapeHtmlAttr(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

async function loadManifest() {
  const manifestPath = path.join(distDir, ".vite", "manifest.json");
  const text = await fs.readFile(manifestPath, "utf8");
  return JSON.parse(text);
}

function tagsFromManifest(manifest) {
  const entry =
    manifest["index.html"] ??
    Object.values(manifest).find((v) => v && v.isEntry);

  if (!entry) {
    throw new Error("Vite manifest has no entry (isEntry: true).");
  }

  const cssTags = (entry.css ?? [])
    .map((href) => `<link rel="stylesheet" href="/${href}">`)
    .join("\n");

  const jsTag = `<script type="module" src="/${entry.file}"></script>`;

  return { cssTags, jsTag };
}

async function renderAboutPage({ cssTags, jsTag }) {
  const layoutPath = path.join(root, "templates", "layout.html");
  const layout = await fs.readFile(layoutPath, "utf8");

  const aboutPath = path.join(root, "content", "about.md");
  const md = await fs.readFile(aboutPath, "utf8");

  const { data, content } = matter(md);
  const title = data.title ?? "About";
  const description = data.description ?? "";

  const contentHtml = marked.parse(content);

  const html = layout
    .replaceAll("{{TITLE}}", escapeHtmlAttr(title))
    .replaceAll("{{DESCRIPTION}}", escapeHtmlAttr(description))
    .replaceAll("{{CSS}}", cssTags)
    .replaceAll("{{JS}}", jsTag)
    .replaceAll("{{CONTENT}}", contentHtml);

  const outDir = path.join(distDir, "about");
  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(path.join(outDir, "index.html"), html, "utf8");
}

const manifest = await loadManifest();
const { cssTags, jsTag } = tagsFromManifest(manifest);
await renderAboutPage({ cssTags, jsTag });
console.log("Wrote dist/about/index.html");
