// Redirect mappings
export const redirectMappings: Record<string, string> = {
  example: 'https://example.com',
  infantguard: '/projects/infantguard',
  contact: 'https://psavvas.notion.site/15770b9af471809da736d4e77a090ce0',
  linkedin: 'https://www.linkedin.com/in/pauldsavvas',
  gravatar: 'https://www.gravatar.com/avatar/paulsavvas',
  github: 'https://github.com/psavvas',
  thingiverse: 'https://www.thingiverse.com/psavvas',
  savvas3dprinting: 'https://psavvas.notion.site/savvas-3d-printing',
};

export function buildRedirectUrl(targetUrl: string, sourceUrl: URL): URL {
  const finalUrl = targetUrl.startsWith('/')
    ? new URL(targetUrl, sourceUrl.origin)
    : new URL(targetUrl);
    
  // Transfer query parameters from source to destination
  for (const [paramKey, paramValue] of sourceUrl.searchParams.entries()) {
    finalUrl.searchParams.set(paramKey, paramValue);
  }
  
  return finalUrl;
}
