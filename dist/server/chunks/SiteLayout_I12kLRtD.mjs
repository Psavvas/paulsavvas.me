import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, d as addAttribute, l as renderHead, n as renderSlot } from './astro/server_fhXJnTM4.mjs';
/* empty css                         */
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useRef, useEffect, memo } from 'react';
import { useTheme } from 'next-themes';

function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const dropdownRef = useRef(null);
  useEffect(() => {
    const timeoutId = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timeoutId);
  }, []);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      }
    }
  };
  if (!isMounted) {
    return /* @__PURE__ */ jsx(
      "button",
      {
        className: "rounded-lg p-2 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800",
        "aria-label": "Toggle theme",
        children: /* @__PURE__ */ jsx("div", { className: "h-5 w-5" })
      }
    );
  }
  const getIcon = () => {
    if (theme === "system") {
      return /* @__PURE__ */ jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: 1.5,
          stroke: "currentColor",
          className: "h-5 w-5 text-neutral-900 dark:text-neutral-100 transition-transform duration-300",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
            }
          )
        }
      );
    } else if (theme === "dark") {
      return /* @__PURE__ */ jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: 1.5,
          stroke: "currentColor",
          className: "h-5 w-5 text-neutral-900 dark:text-neutral-100 transition-transform duration-300",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            }
          )
        }
      );
    } else {
      return /* @__PURE__ */ jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: 1.5,
          stroke: "currentColor",
          className: "h-5 w-5 text-neutral-900 dark:text-neutral-100 transition-transform duration-300",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            }
          )
        }
      );
    }
  };
  const themes = [
    {
      name: "Light",
      value: "light",
      icon: /* @__PURE__ */ jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: 1.5,
          stroke: "currentColor",
          className: "h-4 w-4",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            }
          )
        }
      )
    },
    {
      name: "Dark",
      value: "dark",
      icon: /* @__PURE__ */ jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: 1.5,
          stroke: "currentColor",
          className: "h-4 w-4",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            }
          )
        }
      )
    },
    {
      name: "System",
      value: "system",
      icon: /* @__PURE__ */ jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: 1.5,
          stroke: "currentColor",
          className: "h-4 w-4",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
            }
          )
        }
      )
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "relative", ref: dropdownRef, children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        onKeyDown: handleKeyDown,
        className: "group rounded-lg p-2 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-110",
        "aria-label": `Current theme: ${theme}. Click to open theme selector.`,
        "aria-expanded": isOpen,
        "aria-haspopup": "menu",
        children: getIcon()
      }
    ),
    isOpen && /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute right-0 mt-2 w-36 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-lg overflow-hidden animate-fade-in z-50",
        role: "menu",
        "aria-label": "Theme selection menu",
        children: themes.map((themeOption) => /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              setTheme(themeOption.value);
              setIsOpen(false);
            },
            onKeyDown: (e) => {
              if (e.key === "Escape") {
                setIsOpen(false);
              }
            },
            className: `w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${theme === themeOption.value ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium" : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:text-neutral-900 dark:hover:text-neutral-100"}`,
            role: "menuitem",
            "aria-label": `Switch to ${themeOption.name} theme`,
            "aria-current": theme === themeOption.value ? "true" : void 0,
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-neutral-900 dark:text-neutral-100", children: themeOption.icon }),
              /* @__PURE__ */ jsx("span", { children: themeOption.name }),
              theme === themeOption.value && /* @__PURE__ */ jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  className: "h-4 w-4 ml-auto text-neutral-900 dark:text-neutral-100",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      fillRule: "evenodd",
                      d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
                      clipRule: "evenodd"
                    }
                  )
                }
              )
            ]
          },
          themeOption.value
        ))
      }
    )
  ] });
}

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" }
];
function Navbar() {
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur transition-colors animate-fade-in", children: /* @__PURE__ */ jsxs("nav", { className: "mx-auto grid h-16 md:h-14 max-w-6xl grid-cols-3 items-center px-4 sm:px-6", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx(
      "a",
      {
        href: "/",
        className: "inline-flex h-10 md:h-8 items-center text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 transition-colors shrink-0 leading-none animate-slide-in-left",
        children: "PS"
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center animate-fade-in-up animation-delay-100", children: /* @__PURE__ */ jsx("ul", { className: "flex items-center gap-3 sm:gap-6", children: NAV_ITEMS.map((item) => /* @__PURE__ */ jsx("li", { className: "flex", children: /* @__PURE__ */ jsx(
      "a",
      {
        href: item.href,
        className: "inline-flex h-10 md:h-8 items-center text-sm font-medium text-neutral-600 dark:text-neutral-400 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100 leading-none",
        children: item.name
      }
    ) }, item.href)) }) }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ jsx("div", { className: "inline-flex h-10 md:h-8 items-center animate-slide-in-right animation-delay-100", children: /* @__PURE__ */ jsx(ThemeToggle, {}) }) })
  ] }) });
}
const ClientNavbar = memo(Navbar);

const $$NavigationBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ClientNavbar", ClientNavbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/work/Personal-Portfolio-Website/Personal-Portfolio-Website/src/components/interactive/Navbar", "client:component-export": "default" })}`;
}, "/home/runner/work/Personal-Portfolio-Website/Personal-Portfolio-Website/src/ui/NavigationBar.astro", void 0);

function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "w-full border-t border-gray-200 dark:border-neutral-800 transition-colors animate-fade-in-up animation-delay-100", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 dark:text-neutral-400", children: [
    /* @__PURE__ */ jsxs("span", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Paul Savvas. All rights reserved."
    ] }),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://astro.build",
        className: "mt-2 sm:mt-0 hover:underline",
        target: "_blank",
        rel: "noopener noreferrer",
        children: "Built with Astro"
      }
    )
  ] }) });
}
const ClientFooter = memo(Footer);

const $$PageFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ClientFooter", ClientFooter, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/work/Personal-Portfolio-Website/Personal-Portfolio-Website/src/components/interactive/Footer", "client:component-export": "default" })}`;
}, "/home/runner/work/Personal-Portfolio-Website/Personal-Portfolio-Website/src/ui/PageFooter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ThemeManager = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<script>\n  // Theme initialization script - runs before page render\n  (function() {\n    const storageKey = 'site-theme-preference';\n    const themeAttr = 'class';\n    \n    function applyThemeClass(themeValue) {\n      const htmlEl = document.documentElement;\n      if (themeValue === 'dark') {\n        htmlEl.classList.add('dark');\n      } else if (themeValue === 'light') {\n        htmlEl.classList.remove('dark');\n      } else {\n        // system preference\n        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;\n        if (prefersDark) {\n          htmlEl.classList.add('dark');\n        } else {\n          htmlEl.classList.remove('dark');\n        }\n      }\n    }\n    \n    const storedTheme = localStorage.getItem(storageKey);\n    applyThemeClass(storedTheme || 'system');\n    \n    // Listen for system preference changes\n    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function() {\n      const currentTheme = localStorage.getItem(storageKey);\n      if (!currentTheme || currentTheme === 'system') {\n        applyThemeClass('system');\n      }\n    });\n  })();\n<\/script>"])));
}, "/home/runner/work/Personal-Portfolio-Website/Personal-Portfolio-Website/src/ui/ThemeManager.astro", void 0);

const $$Astro = createAstro("https://paulsavvas.me");
const $$SiteLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SiteLayout;
  const { pageTitle, pageDescription } = Astro2.props;
  const fullTitle = pageTitle === "Paul Savvas" ? pageTitle : `${pageTitle} | Paul Savvas`;
  const description = pageDescription || "Personal website of Paul Savvas - Student, Engineer, Developer and Leader";
  return renderTemplate`<html lang="en" class="antialiased"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5"><meta http-equiv="x-ua-compatible" content="IE=edge"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${fullTitle}</title><meta name="description"${addAttribute(description, "content")}><meta property="og:title"${addAttribute(pageTitle, "content")}><meta property="og:description" content="Student, Engineer, Developer and Leader"><meta property="og:type" content="website"><meta property="og:locale" content="en_US"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(pageTitle, "content")}><meta name="twitter:description" content="Student, Engineer, Developer and Leader"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap" rel="stylesheet"><style>
      :root {
        --font-geist-sans: 'Geist', system-ui, sans-serif;
        --font-geist-mono: 'Geist Mono', monospace;
      }
      body {
        font-family: var(--font-geist-sans);
      }
    </style>${renderComponent($$result, "ThemeManager", $$ThemeManager, {})}${renderHead()}</head> <body class="antialiased"> ${renderComponent($$result, "NavigationBar", $$NavigationBar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "PageFooter", $$PageFooter, {})} </body></html>`;
}, "/home/runner/work/Personal-Portfolio-Website/Personal-Portfolio-Website/src/layouts/SiteLayout.astro", void 0);

export { $$SiteLayout as $ };
