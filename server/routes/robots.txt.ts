function isIndexableConfig(config: ReturnType<typeof useRuntimeConfig>) {
  const siteUrl = String(config.public.siteUrl || "").replace(/\/$/, "");
  const flag = String(config.public.indexable ?? "").toLowerCase();
  const enabled = flag === "true" || flag === "1";
  const host = siteUrl.replace(/^https?:\/\//, "");
  return Boolean(enabled && siteUrl && !/^\d+\.\d+\.\d+\.\d+/.test(host));
}

export default defineEventHandler((event) => {
  const config = useRuntimeConfig();
  const siteUrl = String(config.public.siteUrl || "").replace(/\/$/, "");
  const indexable = isIndexableConfig(config);

  setHeader(event, "Content-Type", "text/plain; charset=utf-8");
  setHeader(event, "Cache-Control", "public, max-age=3600");

  if (!indexable) {
    return ["User-agent: *", "Disallow: /", ""].join("\n");
  }

  return [
    "User-agent: *",
    "Disallow: /bot.php",
    "Allow: /",
    "",
    `Sitemap: ${siteUrl}/sitemap.xml`,
    "",
  ].join("\n");
});
