import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_fhXJnTM4.mjs';
export { renderers } from '../../renderers.mjs';

const redirectMappings = {
  example: "https://example.com",
  infantguard: "/projects/infantguard",
  contact: "https://psavvas.notion.site/15770b9af471809da736d4e77a090ce0",
  linkedin: "https://www.linkedin.com/in/pauldsavvas",
  gravatar: "https://www.gravatar.com/avatar/paulsavvas",
  github: "https://github.com/psavvas",
  thingiverse: "https://www.thingiverse.com/psavvas",
  savvas3dprinting: "https://psavvas.notion.site/savvas-3d-printing"
};

const $$Astro = createAstro("https://paulsavvas.me");
function getStaticPaths() {
  return Object.keys(redirectMappings).map((slug) => ({
    params: { slug },
    props: { targetUrl: redirectMappings[slug] }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const { targetUrl } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "RedirectHandler", null, { "slug": slug, "targetUrl": targetUrl, "client:only": "react", "client:component-hydration": "only", "client:component-path": "/home/runner/work/Personal-Portfolio-Website/Personal-Portfolio-Website/src/components/interactive/RedirectHandler", "client:component-export": "default" })}`;
}, "/home/runner/work/Personal-Portfolio-Website/Personal-Portfolio-Website/src/pages/redirect/[slug].astro", void 0);

const $$file = "/home/runner/work/Personal-Portfolio-Website/Personal-Portfolio-Website/src/pages/redirect/[slug].astro";
const $$url = "/redirect/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
