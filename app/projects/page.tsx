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
  status?: 'In progress' | 'Shipped' | 'Experiment';
  url?: string;
  repo?: string;
  link?: {
    label: string;
    href: string;
  };
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
    title: 'Project write-ups (curating)',
    summary:
      'I’m actively cleaning up repos and turning the best builds into clear, repeatable write-ups — goals, constraints, results, and what I’d improve next.',
    tags: ['Documentation', 'Iteration', 'Quality'],
    status: 'In progress',
    repo: 'psavvas/project-write-ups',
  },
  {
    title: 'Software utilities',
    summary:
      'Small tools and prototypes focused on maintainability, clarity, and shipping. Often built to solve a real workflow problem, then refined with tests and docs.',
    tags: ['TypeScript', 'Next.js', 'Tooling'],
    status: 'Experiment',
    repo: 'psavvas/utils',
  },
  {
    title: 'Hardware + 3D design builds',
    summary:
      'Projects where physical constraints matter: sensors, power, materials, and repeatability. I like designs that can be measured, adjusted, and improved over time.',
    tags: ['Hardware', '3D Design', 'Prototyping'],
    status: 'Experiment',
    repo: 'psavvas/hardware-3d-design',
  },
  {
    title: 'Personal website',
    summary:
      'This site! Built to showcase my work, share updates, and experiment with design and front-end techniques.',
    tags: ['Next.js', 'Tailwind CSS', 'Design'],
    status: 'Shipped',
    repo: 'psavvas/psavvas.github.io',
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
            Selected work
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
              Highlights
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              These sections are intentionally high-level for now. As I publish
              individual write-ups, each card will link to a dedicated page or
              repository.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.map((project) => {
              const repoUrl = getGitHubRepoUrl(project.repo);

              return (
                <article
                  key={project.title}
                  className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950 hover-lift animate-fade-in-up"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                      {project.title}
                    </h3>
                    {project.status ? (
                      <span className="inline-flex items-center rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
                        {project.status}
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
                      {repoUrl ? (
                        <a
                          className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900 hover-lift"
                          href={repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub Repo
                        </a>
                      ) : null}

                      {project.link ? (
                        <a
                          className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900 hover-lift"
                          href={project.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.link.label}
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
      </main>
    </div>
  );
}
