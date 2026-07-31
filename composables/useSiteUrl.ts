export function useSiteUrl() {
  const config = useRuntimeConfig();
  const raw = String(config.public.siteUrl || "").replace(/\/$/, "");
  return raw;
}

export function useIsIndexable() {
  const config = useRuntimeConfig();
  const siteUrl = useSiteUrl();
  const flag = String(config.public.indexable ?? "").toLowerCase();
  const enabled = flag === "true" || flag === "1";
  const host = siteUrl.replace(/^https?:\/\//, "");
  return Boolean(enabled && siteUrl && !/^\d+\.\d+\.\d+\.\d+/.test(host));
}

export function absoluteUrl(path = "/") {
  const base = useSiteUrl();
  const p = path.startsWith("/") ? path : `/${path}`;
  if (!base) return p;
  return `${base}${p === "/" ? "/" : p}`;
}
