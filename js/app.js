const projects = [
  {
    title: 'Mole Mini',
    time: 'Spring 2025',
    summary:
      'An all-in-one chemistry handheld that turns dense formulas into fast, reliable answers.',
    link: 'project/project3.html',
    tags: ['Chemistry', 'Product design', 'Embedded thinking'],
  },
  {
    title: 'Notion template suite',
    time: 'Winter 2025',
    summary:
      'A set of calm, automation-ready workspaces that keep projects and accountability lightweight.',
    link: 'project/project2.html',
    tags: ['Information design', 'Automation', 'Productivity'],
  },
  {
    title: 'Shock absorption research',
    time: 'Fall 2025',
    summary:
      'Science fair research on infill strategies for 3D prints—earned 1st place for measurable impact.',
    link: 'project/project1.html',
    tags: ['Research', '3D printing', 'Experiment design'],
  },
  {
    title: 'Aircraft cabin redesign',
    time: 'Winter 2024',
    summary:
      'A seating and interior rethink for comfort and flow, modeled end-to-end in 3D.',
    link: 'project/project4.html',
    tags: ['CAD', 'Human factors', 'Visualization'],
  },
];

const signals = [
  {
    label: 'Current focus',
    value: 'Turning research into approachable tools with motion and clarity.',
  },
  {
    label: 'Leadership',
    value:
      'Guiding STEM peers; leading teams through product thinking and fast feedback.',
  },
  {
    label: 'Toolbox',
    value:
      'JavaScript, CAD, Python, SolidWorks, Notion automation, prototyping.',
  },
  {
    label: 'Mindset',
    value:
      'Systems-first, deliberate animation, ship small loops, then polish.',
  },
];

const capabilities = [
  {
    title: 'Systems and clarity',
    body: 'Translate fuzzy notes into structured maps, then simplify until the signal is obvious.',
    items: ['Information design', 'Narrative framing', 'Scope shaping'],
  },
  {
    title: 'Product + code',
    body: 'Build interactive prototypes that feel real—fast load, clean states, animated affordances.',
    items: ['Vanilla JS/TS', 'Component thinking', 'Progressive enhancement'],
  },
  {
    title: 'Research and storytelling',
    body: 'Design experiments, measure outcomes, and present results that decision makers can trust.',
    items: ['Experiment design', 'Data reads', 'Executive summaries'],
  },
  {
    title: 'CAD and fabrication',
    body: 'Model with intent—optimize for strength, ergonomics, and manufacturability.',
    items: ['Fusion 360', 'SolidWorks', '3D print iteration'],
  },
];

const timeline = [
  {
    time: '2025',
    title: 'Mole Mini shipped',
    detail:
      'Collaborated to design a chemistry assistant that shortens complex calculations.',
  },
  {
    time: '2025',
    title: 'Notion systems released',
    detail:
      'Built automation-friendly templates to reduce project overhead for peers and clubs.',
  },
  {
    time: '2025',
    title: 'Science fair — 1st place',
    detail:
      'Researched 3D printed infill performance for shock absorption; paired testing with storytelling.',
  },
  {
    time: '2024',
    title: 'Cabin redesign study',
    detail:
      'Modeled ergonomic seating layouts and cabin flows to balance comfort and density.',
  },
];

const contacts = [
  {
    title: 'Email',
    body: 'Straight to my inbox. I reply within a few days.',
    link: 'mailto:resume@paulsavvas.me',
    cta: 'Write me',
  },
  {
    title: 'LinkedIn',
    body: 'For roles, collaborations, and thoughtful intros.',
    link: 'https://linkedin.com/in/pauldsavvas',
    cta: 'Connect',
  },
  {
    title: 'GitHub',
    body: 'Build logs, experiments, and small utilities.',
    link: 'https://github.com/psavvas',
    cta: 'Browse repos',
  },
  {
    title: 'Contact form',
    body: 'Prefer a quick form? Leave a note and I will respond.',
    link: '/redirect.html?to=contact',
    cta: 'Open form',
  },
];

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

const qs = (sel, parent = document) => parent.querySelector(sel);
const qsa = (sel, parent = document) =>
  Array.from(parent.querySelectorAll(sel));

const create = (tag, className, content) => {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (content) el.textContent = content;
  return el;
};

const renderSignals = () => {
  const rail = qs('#signal-rail');
  if (!rail) return;
  signals.forEach(item => {
    const card = create('div', 'signal-card');
    card.append(create('p', 'label', item.label));
    card.append(create('p', 'value', item.value));
    rail.append(card);
  });
};

const renderProjects = () => {
  const grid = qs('#projects');
  if (!grid) return;
  projects.forEach(project => {
    const card = create('article', 'card project-card');
    card.setAttribute('data-reveal', '');

    card.append(create('p', 'time', project.time));
    card.append(create('h3', null, project.title));
    card.append(create('p', null, project.summary));

    const tagRow = create('div', 'tag-row');
    project.tags.forEach(tag => tagRow.append(create('span', 'tag', tag)));
    card.append(tagRow);

    const link = create('div', 'link-row');
    link.innerHTML = '<span>Open</span><strong>↗</strong>';
    link.addEventListener('click', () => window.open(project.link, '_blank'));
    card.append(link);

    grid.append(card);
  });
};

const renderCapabilities = () => {
  const grid = qs('#capability-grid');
  if (!grid) return;
  capabilities.forEach(cap => {
    const card = create('article', 'card capability-card');
    card.setAttribute('data-reveal', '');
    card.append(create('h3', null, cap.title));
    card.append(create('p', null, cap.body));

    const list = create('ul');
    cap.items.forEach(item => list.append(create('li', null, item)));
    card.append(list);
    grid.append(card);
  });
};

const renderTimeline = () => {
  const list = qs('#timeline-list');
  if (!list) return;
  timeline.forEach(item => {
    const node = create('article', 'timeline-item');
    node.setAttribute('data-reveal', '');
    node.append(create('p', 'time', item.time));
    node.append(create('h3', null, item.title));
    node.append(create('p', null, item.detail));
    list.append(node);
  });
};

const renderContacts = () => {
  const grid = qs('#contact-grid');
  if (!grid) return;
  contacts.forEach(contact => {
    const card = create('article', 'card contact-card');
    card.setAttribute('data-reveal', '');
    card.append(create('h3', null, contact.title));
    card.append(create('p', null, contact.body));
    const ctaRow = create('div', 'cta-row');
    const link = create('a', null, contact.cta);
    link.href = contact.link;
    link.target = contact.link.startsWith('http') ? '_blank' : '_self';
    link.rel = 'noreferrer';
    ctaRow.append(link);
    card.append(ctaRow);
    grid.append(card);
  });
};

const setupNav = () => {
  const nav = qs('[data-nav]');
  const toggle = qs('[data-nav-toggle]');
  if (!nav || !toggle) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.dataset.open === 'true';
    nav.dataset.open = (!isOpen).toString();
    toggle.setAttribute('aria-expanded', (!isOpen).toString());
  });

  qsa('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.dataset.open = 'false';
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
};

const setupReveal = () => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  qsa('[data-reveal]').forEach((el, idx) => {
    el.style.transitionDelay = `${idx * 40}ms`;
    observer.observe(el);
  });
};

const setupTheme = () => {
  const toggle = qs('[data-theme-toggle]');
  const root = document.body;
  if (!toggle) return;

  const getPreferred = () =>
    localStorage.getItem('ps-theme') ||
    (window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark');

  const apply = mode => {
    root.dataset.theme = mode;
    localStorage.setItem('ps-theme', mode);
  };

  apply(getPreferred());

  toggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    apply(next);
  });
};

const setupProgress = () => {
  const bar = qs('#scroll-progress');
  if (!bar) return;
  const update = () => {
    const scroll = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = height > 0 ? (scroll / height) * 100 : 0;
    bar.style.width = `${progress}%`;
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
};

const setupMagneticButtons = () => {
  if (prefersReducedMotion) return;
  const strength = 10;
  qsa('.button').forEach(btn => {
    btn.addEventListener('pointermove', e => {
      const rect = btn.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * strength;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * strength;
      btn.style.transform = `translate(${x}px, ${y}px)`;
    });

    btn.addEventListener('pointerleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });
};

const init = () => {
  renderSignals();
  renderProjects();
  renderCapabilities();
  renderTimeline();
  renderContacts();
  setupNav();
  setupTheme();
  setupProgress();
  setupReveal();
  setupMagneticButtons();
};

document.addEventListener('DOMContentLoaded', init);
