export type RedirectSlug = string;

/**
 * Add entries here to create short links under /redirect/<slug>.
 *
 * Examples:
 * - "resume": "https://example.com/my-resume"
 * - "projects": "/projects" (relative paths are allowed)
 */
export const REDIRECTS: Record<RedirectSlug, string> = {
  example: 'https://example.com',
  infantguard: 'https://drive.proton.me/urls/GTHB40AV9M#bUy6nRmkFvVw',
  contact: 'https://psavvas.notion.site/15770b9af471809da736d4e77a090ce0',
};

export function resolveRedirectDestination(options: {
  destination: string;
  requestUrl: URL;
}): URL {
  const { destination, requestUrl } = options;

  const destinationUrl = destination.startsWith('/')
    ? new URL(destination, requestUrl.origin)
    : new URL(destination);

  // Preserve incoming query params (incoming values win).
  for (const [key, value] of requestUrl.searchParams.entries()) {
    destinationUrl.searchParams.set(key, value);
  }

  return destinationUrl;
}
