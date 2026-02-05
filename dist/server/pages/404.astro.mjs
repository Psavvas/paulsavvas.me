import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_fhXJnTM4.mjs';
import { $ as $$SiteLayout } from '../chunks/SiteLayout_I12kLRtD.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, { "pageTitle": "404 - Page not found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-zinc-50 font-sans dark:bg-neutral-950 transition-colors"> <main class="mx-auto flex w-full max-w-4xl flex-col gap-6 bg-white px-6 py-16 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 sm:px-16 sm:py-24"> <p class="text-sm font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
404
</p> <h1 class="text-3xl font-semibold tracking-tight sm:text-4xl">
Page not found.
</h1> <p class="text-base leading-7 text-neutral-700 dark:text-neutral-300">
The page you are looking for does not exist. It may have been moved or
        removed.
</p> <div class="flex flex-wrap gap-3"> <a class="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900 hover-lift" href="/">
Return home
</a> <a class="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900 hover-lift" href="/blog">
Visit the blog
</a> </div> </main> </div> ` })}`;
}, "/home/runner/work/Personal-Portfolio-Website/Personal-Portfolio-Website/src/pages/404.astro", void 0);

const $$file = "/home/runner/work/Personal-Portfolio-Website/Personal-Portfolio-Website/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
