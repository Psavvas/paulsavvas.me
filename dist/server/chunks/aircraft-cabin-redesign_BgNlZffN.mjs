import { t as createVNode, aD as Fragment, aE as __astro_tag_component__ } from './astro/server_fhXJnTM4.mjs';

const frontmatter = {
  "title": "Aircraft Cabin Redesign",
  "summary": "A recreational project, aiming to redesign aircraft cabin and airline seating for improved comfort and functionality, through 3D modeling.",
  "tags": ["3D Printing", "CAD", "Aviation"],
  "year": "2024",
  "links": [{
    "label": "View on Thingiverse",
    "href": "https://www.thingiverse.com/psavvas/collections/43694788/things"
  }]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "project-overview",
    "text": "Project Overview"
  }, {
    "depth": 2,
    "slug": "project-impact",
    "text": "Project Impact"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "project-overview",
      children: "Project Overview"
    }), "\n", createVNode(_components.p, {
      children: "This recreational design project focuses on reimagining aircraft cabins and seating through detailed 3D modeling, with the goal of enhancing passenger comfort, functionality, and spatial efficiency across multiple cabin classes. The project includes five distinct concepts: a refined Premium Economy layout, a modernized Business Class, a luxurious First Class, an exclusive Three-Room First Class Suite, and a Sleeper Economy Cabin designed to make long-haul travel more restful and accessible for economy passengers."
    }), "\n", createVNode(_components.p, {
      children: "Each cabin concept is tailored to the needs of its intended passenger segment, balancing innovation with practical considerations like space constraints, aircraft architecture, and operational efficiency. From modular privacy-focused suites to space-saving lie-flat designs and convertible sleeping arrangements, the project challenges the traditional boundaries of airline seating. Though conceptual, these designs aim to inspire future developments in aviation interior design by prioritizing user experience, comfort, and creative use of space."
    }), "\n", createVNode("div", {
      className: "grid grid-cols-1 gap-6 md:grid-cols-2 my-8",
      children: [createVNode("figure", {
        children: [createVNode("img", {
          src: "/images/aircraft-cabin/premium-economy.png",
          alt: "Premium Economy Cabin Design",
          className: "w-full rounded-lg border border-neutral-200 dark:border-neutral-800"
        }), createVNode("figcaption", {
          className: "mt-3 text-center text-sm text-neutral-600 dark:text-neutral-400",
          children: "Premium Economy Cabin Design"
        })]
      }), createVNode("figure", {
        children: [createVNode("img", {
          src: "/images/aircraft-cabin/business-class.png",
          alt: "Business Class Configuration",
          className: "w-full rounded-lg border border-neutral-200 dark:border-neutral-800"
        }), createVNode("figcaption", {
          className: "mt-3 text-center text-sm text-neutral-600 dark:text-neutral-400",
          children: "Business Class Configuration"
        })]
      }), createVNode("figure", {
        children: [createVNode("img", {
          src: "/images/aircraft-cabin/first-class-suite.png",
          alt: "First Class Suite",
          className: "w-full rounded-lg border border-neutral-200 dark:border-neutral-800"
        }), createVNode("figcaption", {
          className: "mt-3 text-center text-sm text-neutral-600 dark:text-neutral-400",
          children: "First Class Suite"
        })]
      }), createVNode("figure", {
        children: [createVNode("img", {
          src: "/images/aircraft-cabin/sleeper-economy.png",
          alt: "Sleeper Economy Cabin Concept",
          className: "w-full rounded-lg border border-neutral-200 dark:border-neutral-800"
        }), createVNode("figcaption", {
          className: "mt-3 text-center text-sm text-neutral-600 dark:text-neutral-400",
          children: "Sleeper Economy Cabin Concept"
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "project-impact",
      children: "Project Impact"
    }), "\n", createVNode(_components.p, {
      children: "This recreational project demonstrates the potential for design thinking to address real-world challenges in aviation."
    }), "\n", createVNode(_components.p, {
      children: "The 3D models serve as conversation starters about the future of air travel and passenger experience."
    }), "\n", createVNode(_components.p, {
      children: "The project showcases advanced CAD skills and an understanding of human factors in design."
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

const url = "src/content/work/aircraft-cabin-redesign.mdx";
const file = "/home/runner/work/Personal-Portfolio-Website/Personal-Portfolio-Website/src/content/work/aircraft-cabin-redesign.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/Personal-Portfolio-Website/Personal-Portfolio-Website/src/content/work/aircraft-cabin-redesign.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
