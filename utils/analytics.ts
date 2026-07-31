declare global {
  interface Window {
    ym?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (!import.meta.client) return;
  const id = useRuntimeConfig().public.yandexMetrikaId;
  if (!id || typeof window.ym !== "function") return;
  try {
    window.ym(Number(id), "reachGoal", name, params || {});
  } catch {
    /* ignore */
  }
}

export function trackHit(url?: string) {
  if (!import.meta.client) return;
  const id = useRuntimeConfig().public.yandexMetrikaId;
  if (!id || typeof window.ym !== "function") return;
  try {
    window.ym(Number(id), "hit", url || window.location.href);
  } catch {
    /* ignore */
  }
}
