type EventParams = Record<string, string | undefined>;

type Gtag = (command: 'event', name: string, params?: EventParams) => void;

/**
 * Sends a GA4 event only when the existing gtag snippet is already on the page.
 * Never include names, emails, or message text.
 */
export function trackEvent(name: string, params: EventParams = {}) {
  if (typeof window === 'undefined') return;
  const gtag = (window as Window & { gtag?: Gtag }).gtag;
  if (typeof gtag !== 'function') return;

  const cleaned: EventParams = {};
  for (const [key, value] of Object.entries(params)) {
    if (value) cleaned[key] = value;
  }
  gtag('event', name, cleaned);
}
