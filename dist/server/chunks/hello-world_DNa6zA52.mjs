import { t as createVNode, aD as Fragment, aE as __astro_tag_component__ } from './astro/server_fhXJnTM4.mjs';

const frontmatter = {
  "title": "Hello, world",
  "date": "2025-12-13",
  "summary": "A starting point for the blog — what I plan to write about, and how I think about building.",
  "tags": ["Update"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "This is the first post on my site. Over time, I’ll publish short write-ups about projects, what I learned, and what I’d improve next."
    }), "\n", createVNode(_components.p, {
      children: "I care about clarity and repeatability: defining constraints, testing ideas in real conditions, and documenting results so someone else can understand (and build on) the work."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/writings/hello-world.mdx";
const file = "/home/runner/work/Personal-Portfolio-Website/Personal-Portfolio-Website/src/content/writings/hello-world.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/Personal-Portfolio-Website/Personal-Portfolio-Website/src/content/writings/hello-world.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
