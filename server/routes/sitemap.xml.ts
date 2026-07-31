function isIndexableConfig(config: ReturnType<typeof useRuntimeConfig>) {
  const siteUrl = String(config.public.siteUrl || "").replace(/\/$/, "");
  const flag = String(config.public.indexable ?? "").toLowerCase();
  const enabled = flag === "true" || flag === "1";
  const host = siteUrl.replace(/^https?:\/\//, "");
  return Boolean(enabled && siteUrl && !/^\d+\.\d+\.\d+\.\d+/.test(host));
}

const INDEXABLE_PATHS = [
  "/",
  "/uslugi",
  "/raboty",
  "/company",
  "/faq",
  "/contacts",
  "/privacy",
  "/cookies",
] as const;

export default defineEventHandler((event) => {
  const config = useRuntimeConfig();
  const siteUrl = String(config.public.siteUrl || "").replace(/\/$/, "");
  const indexable = isIndexableConfig(config);

  setHeader(event, "Content-Type", "application/xml; charset=utf-8");
  setHeader(event, "Cache-Control", "public, max-age=3600");

  if (!indexable || !siteUrl) {
    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>\n`;
  }

  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = INDEXABLE_PATHS.map((path) => {
    const loc = path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`;
    const priority = path === "/" ? "1.0" : "0.8";
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
});
