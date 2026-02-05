import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, k as spreadAttributes } from '../chunks/astro/server_fhXJnTM4.mjs';
import { $ as $$SiteLayout } from '../chunks/SiteLayout_I12kLRtD.mjs';
export { renderers } from '../renderers.mjs';

function formatYearRange(year) {
  if (!year) return void 0;
  const yearArray = Array.isArray(year) ? year : [year];
  const yearNumbers = yearArray.map((y) => parseInt(String(y).trim(), 10)).filter((n) => !isNaN(n));
  if (yearNumbers.length === 0) return void 0;
  if (yearNumbers.length === 1) return String(yearNumbers[0]);
  const minYear = Math.min(...yearNumbers);
  const maxYear = Math.max(...yearNumbers);
  return `${minYear}–${maxYear}`;
}
function determineProjectLink(project) {
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
function buildGitHubUrl(repo) {
  const trimmed = repo.trim();
  if (!trimmed) return null;
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }
  return `https://github.com/${trimmed.replace(/^\//, "")}`;
}

const $$Astro = createAstro("https://paulsavvas.me");
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const projectItems = [
    {
      title: "InfantGuard",
      summary: "Infant Guard is a fully integrated, Arduino-driven safety platform engineered to detect forgotten infants in vehicles and escalate alerts before temperatures reach life-threatening levels.",
      tags: ["Arduino", "IoT", "Safety", "Hardware"],
      year: ["2025"],
      featured: true,
      projectPage: "infantguard"
    },
    {
      title: "Personal Portfolio Website",
      summary: "This website! Built with Astro and Tailwind CSS, it showcases my projects, skills, and contact information in a clean and modern design.",
      tags: ["Astro", "Tailwind CSS", "Portfolio"],
      year: ["2025"],
      featured: false,
      repo: "psavvas/personal-portfolio-website"
    },
    {
      title: "Daily Digest",
      summary: "DailyDigest is a Python application that automatically generates and sends a daily summary email containing your upcoming calendar events, reminders, local weather, and a motivational quote.",
      tags: ["Productivity", "Coding", "Python Scripts"],
      year: ["2025"],
      featured: true,
      repo: "psavvas/daily-digest"
    },
    {
      title: "MoleMini",
      summary: "Mole Mini is an all-in-one chemistry computer helping with complex calculations and conversions, created by myself and Connor Denihan in 2025.",
      tags: ["Microcomputer", "Chemistry", "Education"],
      year: ["2025"],
      featured: false,
      repo: "cdenihan/mole-day-project"
    },
    {
      title: "Notion Templates",
      summary: "A series of high-quality Notion templates designed to enhance productivity and organization, free for personal and professional use. Ranging from team hubs to personal planners.",
      tags: ["Productivity", "Lifestyle", "Notion"],
      year: ["2025"],
      featured: true,
      projectPage: "notion-templates"
    },
    {
      title: "3D Printing for Shock Absorption",
      summary: "A 1st place Science Fair project investigating how different infills could affect the shock absorption properties of different objects, through research and custom infills.",
      tags: ["3D Printing", "Science Fair", "Research"],
      year: ["2024"],
      featured: true,
      projectPage: "3d-printing-shock-absorption"
    },
    {
      title: "Aircraft Cabin Redesign",
      summary: "A recreational project, aiming to redesign aircraft cabin and airline seating for improved comfort and functionality, through 3D modeling.",
      tags: ["3D Printing", "CAD", "Aviation"],
      year: ["2024"],
      featured: false,
      projectPage: "aircraft-cabin-redesign"
    }
  ];
  const githubProfileUrl = "https://github.com/psavvas";
  const thingiverseProfileUrl = "https://www.thingiverse.com/psavvas";
  return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, { "pageTitle": "Projects", "pageDescription": "Projects by Paul Savvas \u2014 a selection of work across software, hardware, and 3D design." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-white font-sans dark:bg-neutral-950 transition-colors"> <main class="mx-auto w-full max-w-6xl bg-white px-6 py-16 dark:bg-neutral-950 sm:px-16 sm:py-24 animate-fade-in"> <header class="max-w-3xl animate-fade-in-up"> <p class="text-sm font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
Projects
</p> <h1 class="mt-3 text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
Simple. Practical. Impactful.
</h1> <p class="mt-6 text-base leading-7 text-neutral-700 dark:text-neutral-300">
A growing collection of software, hardware, and 3D design work. I'm drawn to projects that can have a positive impact on the world—whether in small, everyday ways or larger initiatives—while staying grounded in real constraints and performing well in practice.
</p> <div class="mt-8"> <a class="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900 hover-lift"${addAttribute(githubProfileUrl, "href")} target="_blank" rel="noopener noreferrer">
Browse all code projects on GitHub
</a> <a class="ml-4 inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900 hover-lift"${addAttribute(thingiverseProfileUrl, "href")} target="_blank" rel="noopener noreferrer">
Browse all 3D design projects on Thingiverse
</a> </div> </header> <section class="mt-14"> <div class="animate-fade-in-up"> <h2 class="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
Featured Projects
</h2> <p class="mt-3 max-w-3xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">
A few of my most impactful, noteworthy or favorite projects.
</p> </div> <div class="mt-8 grid gap-6 md:grid-cols-2"> ${projectItems.filter((p) => p.featured !== false).map((project) => {
    const linkInfo = determineProjectLink(project);
    const yearLabel = formatYearRange(project.year);
    return renderTemplate`<article class="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950 hover-lift animate-fade-in-up"> <div class="flex flex-wrap items-center justify-between gap-3"> <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100"> ${project.title} </h3> ${yearLabel && renderTemplate`<span class="inline-flex items-center rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-800 dark:text-neutral-300"> ${yearLabel} </span>`} </div> <p class="mt-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300"> ${project.summary} </p> <div class="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"> <div class="flex flex-wrap gap-2"> ${project.tags.map((tag) => renderTemplate`<span class="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"> ${tag} </span>`)} </div> <div class="flex flex-wrap gap-3 sm:justify-end"> ${linkInfo && renderTemplate`<a class="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900 hover-lift"${addAttribute(linkInfo.url, "href")}${spreadAttributes(linkInfo.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
Learn More
</a>`} </div> </div> </article>`;
  })} </div> </section> <section class="mt-14 max-w-3xl animate-fade-in-up animation-delay-300"> <h2 class="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
How I evaluate a project
</h2> <ul class="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-neutral-700 dark:text-neutral-300"> <li>
Clarity: can someone understand the goal and approach quickly?
</li> <li>
Constraints: does it work within real limits (time, materials,
            performance)?
</li> <li>Results: are outcomes measurable, testable, and repeatable?</li> <li>Iteration: what changed after the first version shipped?</li> </ul> </section> <section class="mt-14"> <div class="animate-fade-in-up"> <h2 class="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
All projects
</h2> <p class="mt-3 max-w-3xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">
A complete list of projects with links and quick context.
</p> </div> <ul class="mt-6 rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 divide-y divide-neutral-200 dark:divide-neutral-800"> ${projectItems.map((project) => {
    const linkInfo = determineProjectLink(project);
    const yearLabel = formatYearRange(project.year);
    return renderTemplate`<li class="p-4 sm:p-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between animate-fade-in-up"> <div> <div class="flex items-center gap-3"> <span class="text-sm font-medium text-neutral-900 dark:text-neutral-100"> ${project.title} </span> ${yearLabel && renderTemplate`<span class="inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-0.5 text-[11px] font-medium text-neutral-700 dark:border-neutral-800 dark:text-neutral-300"> ${yearLabel} </span>`} </div> <p class="mt-1 text-sm leading-6 text-neutral-700 dark:text-neutral-300 line-clamp-2"> ${project.summary} </p> <div class="mt-2 flex flex-wrap gap-2"> ${project.tags.map((tag) => renderTemplate`<span class="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-[11px] font-medium text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"> ${tag} </span>`)} </div> </div> <div class="flex gap-3 sm:ml-6"> ${linkInfo && renderTemplate`<a class="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900 hover-lift"${addAttribute(linkInfo.url, "href")}${spreadAttributes(linkInfo.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
View
</a>`} </div> </li>`;
  })} </ul> </section> </main> </div> ` })}`;
}, "/home/runner/work/Personal-Portfolio-Website/Personal-Portfolio-Website/src/pages/projects.astro", void 0);

const $$file = "/home/runner/work/Personal-Portfolio-Website/Personal-Portfolio-Website/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
