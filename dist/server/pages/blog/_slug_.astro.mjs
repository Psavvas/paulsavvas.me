import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_fhXJnTM4.mjs';
import { g as getCollection } from '../../chunks/_astro_content_BX2PLhe-.mjs';
import { $ as $$SiteLayout } from '../../chunks/SiteLayout_I12kLRtD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://paulsavvas.me");
async function getStaticPaths() {
  const writingEntries = await getCollection("writings");
  return writingEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, { "pageTitle": entry.data.title, "pageDescription": entry.data.summary }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-white font-sans dark:bg-neutral-950 transition-colors"> <main class="mx-auto w-full max-w-6xl bg-white px-6 py-16 dark:bg-neutral-950 sm:px-16 sm:py-24 animate-fade-in"> <div class="max-w-3xl"> <a href="/blog" class="inline-flex items-center text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 animate-slide-in-left">
← Back to Blog
</a> <header class="mt-8 animate-fade-in-up"> <p class="text-sm text-neutral-600 dark:text-neutral-400"> ${entry.data.date} </p> <h1 class="mt-3 text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl"> ${entry.data.title} </h1> <p class="mt-6 text-base leading-7 text-neutral-700 dark:text-neutral-300"> ${entry.data.summary} </p> ${entry.data.tags && entry.data.tags.length > 0 && renderTemplate`<div class="mt-6 flex flex-wrap gap-2"> ${entry.data.tags.map((tag) => renderTemplate`<span class="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"> ${tag} </span>`)} </div>`} </header> <article class="mt-10 space-y-5 animate-fade-in-up prose prose-neutral dark:prose-invert max-w-none"> ${renderComponent($$result2, "Content", Content, {})} </article> </div> </main> </div> ` })}`;
}, "/home/runner/work/Personal-Portfolio-Website/Personal-Portfolio-Website/src/pages/blog/[slug].astro", void 0);

const $$file = "/home/runner/work/Personal-Portfolio-Website/Personal-Portfolio-Website/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
