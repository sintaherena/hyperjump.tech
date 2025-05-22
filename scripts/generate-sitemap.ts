import fs from "fs";
import path from "path";

const BASE_URL = "https://hyperjump.tech";

function findAllPages(
  dir: string,
  baseDir: string = dir,
  result: Set<string> = new Set()
): Set<string> {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      findAllPages(fullPath, baseDir, result);
    } else if (file.endsWith(".html")) {
      const relativePath = path.relative(baseDir, dir);
      let pagePath = relativePath
        ? path.posix.join(
            "/" + relativePath.split(path.sep).join("/"),
            file === "index.html" ? "" : file.replace(".html", "")
          )
        : file === "index.html"
          ? "/"
          : "/" + file.replace(".html", "");

      pagePath = normalizePath(pagePath);

      result.add(pagePath);
    }
  }

  return result;
}

function normalizePath(pagePath: string): string {
  return pagePath.replace(/\/(en|id)$/, ""); // Removes /en or /id from the end of the path
}

async function generateSitemap(): Promise<void> {
  const outDir = path.join(process.cwd(), "out");
  const paths: Set<string> = findAllPages(outDir);
  const lastModified = new Date().toISOString();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${Array.from(paths)
  .map((p) => {
    const basePath = p.replace(/\/en$/, "").replace(/\/id$/, "");
    return `
  <url>
    <loc>${BASE_URL}${basePath}</loc>
    <xhtml:link
      rel="alternate"
      hreflang="en"
      href="${BASE_URL}${basePath}"/>
    <xhtml:link
      rel="alternate"
      hreflang="id"
      href="${BASE_URL}${basePath}/id"/>
    <lastmod>${lastModified}</lastmod>
  </url>`;
  })
  .join("\n")}
</urlset>`;

  fs.writeFileSync(
    path.join(process.cwd(), "public", "sitemap.xml"),
    sitemap.trim()
  );
  console.log("✅ Sitemap generated");
}

generateSitemap();
