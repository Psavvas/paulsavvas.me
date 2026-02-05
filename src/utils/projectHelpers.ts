// Helper functions for projects page
export function formatYearRange(year: string | string[] | undefined): string | undefined {
  if (!year) return undefined;
  
  const yearArray = Array.isArray(year) ? year : [year];
  const yearNumbers = yearArray
    .map(y => parseInt(String(y).trim(), 10))
    .filter(n => !isNaN(n));
    
  if (yearNumbers.length === 0) return undefined;
  if (yearNumbers.length === 1) return String(yearNumbers[0]);
  
  const minYear = Math.min(...yearNumbers);
  const maxYear = Math.max(...yearNumbers);
  return `${minYear}–${maxYear}`;
}

export function determineProjectLink(project: {
  projectPage?: string;
  link?: { label: string; href: string };
  repo?: string;
}): { url: string; isExternal: boolean } | null {
  if (project.projectPage) {
    return { url: `/projects/${project.projectPage}`, isExternal: false };
  }
  
  if (project.link) {
    return { url: project.link.href, isExternal: true };
  }
  
  if (project.repo) {
    const repoUrl = buildGitHubUrl(project.repo);
    if (repoUrl) {
      return { url: repoUrl, isExternal: true };
    }
  }
  
  return null;
}

function buildGitHubUrl(repo: string): string | null {
  const trimmed = repo.trim();
  if (!trimmed) return null;
  
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed;
  }
  
  return `https://github.com/${trimmed.replace(/^\//, '')}`;
}
