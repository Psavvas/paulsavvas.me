import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Paul Savvas',
  description:
    'Projects by Paul Savvas — a selection of work across software, hardware, and 3D design.',
};

type Project = {
  title: string;
  summary: string;
  tags: string[];
  year?: string | string[];
  featured?: boolean;
  url?: string;
  repo?: string;
  link?: {
    label: string;
    href: string;
  };
  projectPage?: string; // Slug for internal project page
};

export function getGitHubRepoUrl(repo?: string) {
  if (!repo) return undefined;
  const trimmed = repo.trim();
  if (!trimmed) return undefined;
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed;
  }
  return `https://github.com/${trimmed.replace(/^\//, '')}`;
}

const projects: Project[] = [
  {
    title: 'Personal Portfolio Website',
    summary:
      'This website! Built with Next.js and Tailwind CSS, it showcases my projects, skills, and contact information in a clean and modern design.',
    tags: ['Next.js', 'Tailwind CSS', 'Portfolio'],
    year: ['2025'],
    featured: false,
    repo: 'psavvas/paulosavvas.me',
  },
  {
    title: 'Daily Digest',
    summary:
      'I’m actively cleaning up repos and turning the best builds into clear, repeatable write-ups — goals, constraints, results, and what I’d improve next.',
    tags: ['Productivity', 'Coding', 'Python Scripts'],
    year: ['2025'],
    featured: true,
    repo: 'psavvas/daily-digest',
  },
  {
    title: 'MoleMini',
    summary:
      'Mole Mini is an all-in-one chemistry computer helping with complex calculations and conversions, created by myself and Connor Denihan in 2025.',
    tags: ['Microcomputer', 'Chemistry', 'Education'],
    year: ['2025'],
    featured: true,
    repo: 'cdenihan/mole-day-project',
  },
  {
    title: 'Notion Templates',
    summary:
      'A series of high-quality Notion templates designed to enhance productivity and organization, free for personal and professional use. Ranging from team hubs to personal planners.',
    tags: ['Productivity', 'Lifestyle', 'Notion'],
    year: ['2025'],
    featured: true,
    repo: 'psavvas/hardware-3d-design',
  },
  {
    title: '3D Printing for Shock Absorption',
    summary:
      'A 1st place Science Fair project investigating how different infills could affect the shock absorption properties of different objects, through research and custom infills.',
    tags: ['3D Printing', 'Science Fair', 'Research'],
    year: ['2024'],
    featured: true,
    projectPage: '3d-printing-shock-absorption',
  },
  {
    title: 'Aircraft Cabin Redesign',
    summary:
      'A recreational project, aiming to redesign aircraft cabin and airline seating for improved comfort and functionality, through 3D modeling.',
    tags: ['3D Printing', 'CAD', 'Aviation'],
    year: ['2024'],
    featured: false,
    projectPage: 'aircraft-cabin-redesign',
  },
];

const githubProfileUrl = 'https://github.com/psavvas';
const thingiverseProfileUrl = 'https://www.thingiverse.com/psavvas';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-neutral-950 transition-colors">
      <main className="mx-auto w-full max-w-6xl bg-white px-6 py-16 dark:bg-neutral-950 sm:px-16 sm:py-24 animate-fade-in">
        <header className="max-w-3xl animate-fade-in-up">
          <p className="text-sm font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
            Projects
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
            Simple. Practical. Impactful.
          </h1>
            <p className="mt-6 text-base leading-7 text-neutral-700 dark:text-neutral-300">
            A growing collection of software, hardware, and 3D design work. I'm drawn to projects that can have a positive impact on the world—whether in small, everyday ways or larger initiatives—while staying grounded in real constraints and performing well in practice.
            </p>

          <div className="mt-8">
            <a
              className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900 hover-lift"
              href={githubProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Browse all code projects on GitHub
            </a>
            <a
              className="ml-4 inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900 hover-lift"
              href={thingiverseProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Browse all 3D design projects on Thingiverse
            </a>
          </div>
        </header>

        <section className="mt-14">
          <div className="animate-fade-in-up">
            <h2 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Featured Projects
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              A few of my most impactful, noteworthy or favorite projects.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects
              // Treat projects with `featured` === true or undefined as featured; only exclude ones explicitly marked `featured: false`.
              .filter((p) => p.featured !== false)
              .map((project) => {
              const repoUrl = getGitHubRepoUrl(project.repo);
              
              // Determine the Learn More button URL and if it should be external
              let learnMoreUrl = '';
              let isExternal = false;
              
              if (project.projectPage) {
                // Internal project page
                learnMoreUrl = `/projects/${project.projectPage}`;
                isExternal = false;
              } else if (project.link) {
                // Custom external link
                learnMoreUrl = project.link.href;
                isExternal = true;
              } else if (repoUrl) {
                // GitHub repo as fallback
                learnMoreUrl = repoUrl;
                isExternal = true;
              }
              
              const yearList = Array.isArray(project.year)
                ? project.year
                : project.year
                ? [project.year]
                : [];
              const yearNums = yearList
                .map((y) => Number(String(y).trim()))
                .filter((n) => !Number.isNaN(n));
              let yearLabel: string | undefined;
              if (yearNums.length === 1) {
                yearLabel = String(yearNums[0]);
              } else if (yearNums.length > 1) {
                const min = Math.min(...yearNums);
                const max = Math.max(...yearNums);
                yearLabel = `${min}–${max}`;
              }

              return (
                <article
                  key={project.title}
                  className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950 hover-lift animate-fade-in-up"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                      {project.title}
                    </h3>
                    {yearLabel ? (
                      <span className="inline-flex items-center rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
                        {yearLabel}
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                    {project.summary}
                  </p>

                  <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 sm:justify-end">
                      {learnMoreUrl ? (
                        <a
                          className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900 hover-lift"
                          href={learnMoreUrl}
                          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        >
                          Learn More
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
              })}
          </div>
        </section>

        <section className="mt-14 max-w-3xl animate-fade-in-up animation-delay-300">
          <h2 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            How I evaluate a project
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-neutral-700 dark:text-neutral-300">
            <li>
              Clarity: can someone understand the goal and approach quickly?
            </li>
            <li>
              Constraints: does it work within real limits (time, materials,
              performance)?
            </li>
            <li>Results: are outcomes measurable, testable, and repeatable?</li>
            <li>Iteration: what changed after the first version shipped?</li>
          </ul>
        </section>

        <section className="mt-14">
          <div className="animate-fade-in-up">
            <h2 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              All projects
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              A complete list of projects with links and quick context.
            </p>
          </div>

          <ul className="mt-6 rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 divide-y divide-neutral-200 dark:divide-neutral-800">
            {projects.map((project) => {
              const repoUrl = getGitHubRepoUrl(project.repo);
              
              // Determine the Learn More button URL and if it should be external
              let learnMoreUrl = '';
              let isExternal = false;
              
              if (project.projectPage) {
                // Internal project page
                learnMoreUrl = `/projects/${project.projectPage}`;
                isExternal = false;
              } else if (project.link) {
                // Custom external link
                learnMoreUrl = project.link.href;
                isExternal = true;
              } else if (repoUrl) {
                // GitHub repo as fallback
                learnMoreUrl = repoUrl;
                isExternal = true;
              }
              
              const yearList = Array.isArray(project.year)
                ? project.year
                : project.year
                ? [project.year]
                : [];
              const yearNums = yearList
                .map((y) => Number(String(y).trim()))
                .filter((n) => !Number.isNaN(n));
              let yearLabel: string | undefined;
              if (yearNums.length === 1) {
                yearLabel = String(yearNums[0]);
              } else if (yearNums.length > 1) {
                const min = Math.min(...yearNums);
                const max = Math.max(...yearNums);
                yearLabel = `${min}–${max}`;
              }

              return (
                <li
                  key={project.title}
                  className="p-4 sm:p-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between animate-fade-in-up"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                        {project.title}
                      </span>
                      {yearLabel ? (
                        <span className="inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-0.5 text-[11px] font-medium text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
                          {yearLabel}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 text-sm leading-6 text-neutral-700 dark:text-neutral-300 line-clamp-2">
                      {project.summary}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-[11px] font-medium text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 sm:ml-6">
                    {learnMoreUrl ? (
                      <a
                        className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900 hover-lift"
                        href={learnMoreUrl}
                        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        Learn More
                      </a>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </div>
  );
}
