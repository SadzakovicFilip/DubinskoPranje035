export function trackEvent(action: string, label?: string) {
  if (typeof window === "undefined") return;
  const payload = { event: "interaction", action, ...(label ? { label } : {}) };
  // Push to dataLayer if GA/GTM postoji
  (window as typeof window & { dataLayer?: unknown[] }).dataLayer =
    (window as any).dataLayer || [];
  (window as any).dataLayer.push(payload);
  // Fallback: optional console for debug
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.debug("[trackEvent]", payload);
  }
}
