import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_fhXJnTM4.mjs';
import { g as getCollection } from '../chunks/_astro_content_BX2PLhe-.mjs';
import { $ as $$SiteLayout } from '../chunks/SiteLayout_I12kLRtD.mjs';
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const writingEntries = await getCollection("writings");
  const sortedWritings = writingEntries.sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });
  return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, { "pageTitle": "Blog", "pageDescription": "Blog posts by Paul Savvas \u2014 project notes, lessons learned, and build write-ups." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-white font-sans dark:bg-neutral-950 transition-colors"> <main class="mx-auto w-full max-w-6xl bg-white px-6 py-16 dark:bg-neutral-950 sm:px-16 sm:py-24 animate-fade-in"> <header class="max-w-3xl animate-fade-in-up"> <p class="text-sm font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
Blog
</p> <h1 class="mt-3 text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
Notes and write-ups
</h1> <p class="mt-6 text-base leading-7 text-neutral-700 dark:text-neutral-300">
Short posts about projects, engineering decisions, and what I learn
          while building.
</p> </header> <section class="mt-14"> ${sortedWritings.length === 0 ? renderTemplate`<div class="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950 hover-lift"> <h2 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
Coming soon
</h2> <p class="mt-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
I'm working on the first set of posts now.
</p> </div>` : renderTemplate`<div class="grid gap-6"> ${sortedWritings.map((entry) => renderTemplate`<article class="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950 hover-lift animate-fade-in-up"> <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"> <h2 class="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100"> <a${addAttribute(`/blog/${entry.slug}`, "href")} class="hover:underline"> ${entry.data.title} </a> </h2> <p class="text-sm text-neutral-600 dark:text-neutral-400"> ${entry.data.date} </p> </div> <p class="mt-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300"> ${entry.data.summary} </p> ${entry.data.tags && entry.data.tags.length > 0 && renderTemplate`<div class="mt-4 flex flex-wrap gap-2"> ${entry.data.tags.map((tag) => renderTemplate`<span class="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"> ${tag} </span>`)} </div>`} <div class="mt-6"> <a class="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900 hover-lift"${addAttribute(`/blog/${entry.slug}`, "href")}>
Read post
</a> </div> </article>`)} </div>`} </section> </main> </div> ` })}`;
}, "/home/runner/work/Personal-Portfolio-Website/Personal-Portfolio-Website/src/pages/blog.astro", void 0);

const $$file = "/home/runner/work/Personal-Portfolio-Website/Personal-Portfolio-Website/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
