interface Project {
  title: string;
  time: string;
  summary: string;
  link: string;
  tags: string[];
}

interface Signal {
  label: string;
  value: string;
}

interface Capability {
  title: string;
  body: string;
  items: string[];
}

interface TimelineItem {
  time: string;
  title: string;
  detail: string;
}

interface Contact {
  title: string;
  body: string;
  link: string;
  cta: string;
}

const projects: Project[] = [
  {
    title: 'Mole Mini',
    time: 'Spring 2025',
    summary:
      'An all-in-one chemistry handheld that turns dense formulas into fast, reliable answers.',
    link: 'project/mole-mini.html',
    tags: ['Chemistry', 'Product design', 'Embedded thinking'],
  },
  {
    title: 'Notion template suite',
    time: 'Winter 2025',
    summary:
      'A set of calm, automation-ready workspaces that keep projects and accountability lightweight.',
    link: 'project/notion-templates.html',
    tags: ['Information design', 'Automation', 'Productivity'],
  },
  {
    title: '3D Infill Optimization',
    time: 'Fall 2025',
    summary:
      'Science fair research on infill strategies for 3D prints—earned 1st place for measurable impact.',
    link: 'project/3d-infill-optimization.html',
    tags: ['Research', '3D printing', 'Experiment design'],
  },
  {
    title: 'Aircraft cabin redesign',
    time: 'Winter 2024',
    summary:
      'A seating and interior rethink for comfort and flow, modeled end-to-end in 3D.',
    link: 'project/aircraft-cabins.html',
    tags: ['CAD', 'Human factors', 'Visualization'],
  },
];

const signals: Signal[] = [
  {
    label: 'Current focus',
    value:
      'Building practical tools and systems that help the world work better.',
  },
  {
    label: 'Leadership',
    value:
      'Leading STEM peers with product thinking, fast feedback, and clear execution.',
  },
  {
    label: 'Toolbox',
    value:
      'JavaScript, CAD, Python, SolidWorks, Notion automation, prototyping.',
  },
  {
    label: 'Mindset',
    value:
      'Systems first, always learning. I ship small, learn fast from real feedback, and continuously refine my work with intention and discipline.',
  },
];

const capabilities: Capability[] = [
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

const timeline: TimelineItem[] = [
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

const contacts: Contact[] = [
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

const prefersReducedMotion: boolean = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

const qs = <T extends Element = Element>(
  sel: string,
  parent: Document | Element = document
): T | null => parent.querySelector<T>(sel);

const qsa = <T extends Element = Element>(
  sel: string,
  parent: Document | Element = document
): T[] => Array.from(parent.querySelectorAll<T>(sel));

const create = <K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className?: string,
  content?: string
): HTMLElementTagNameMap[K] => {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (content) el.textContent = content;
  return el;
};

const renderSignals = (): void => {
  const rail = qs<HTMLElement>('#signal-rail');
  if (!rail) return;
  signals.forEach(item => {
    const card = create('div', 'signal-card');
    card.append(create('p', 'label', item.label));
    card.append(create('p', 'value', item.value));
    rail.append(card);
  });
};

const renderProjects = (): void => {
  const grid = qs<HTMLElement>('#projects');
  if (!grid) return;
  projects.forEach(project => {
    const card = create('article', 'card project-card');
    card.setAttribute('data-reveal', '');

    card.append(create('p', 'time', project.time));
    card.append(create('h3', undefined, project.title));
    card.append(create('p', undefined, project.summary));

    const tagRow = create('div', 'tag-row');
    project.tags.forEach(tag => tagRow.append(create('span', 'tag', tag)));
    card.append(tagRow);

    const link = create('div', 'link-row');
    link.innerHTML = '<span>Open</span><strong>↗</strong>';
    link.addEventListener('click', () => (window.location.href = project.link));
    card.append(link);

    grid.append(card);
  });
};

const renderCapabilities = (): void => {
  const grid = qs<HTMLElement>('#capability-grid');
  if (!grid) return;
  capabilities.forEach(cap => {
    const card = create('article', 'card capability-card');
    card.setAttribute('data-reveal', '');
    card.append(create('h3', undefined, cap.title));
    card.append(create('p', undefined, cap.body));

    const list = create('ul');
    cap.items.forEach(item => list.append(create('li', undefined, item)));
    card.append(list);
    grid.append(card);
  });
};

const renderTimeline = (): void => {
  const list = qs<HTMLElement>('#timeline-list');
  if (!list) return;
  timeline.forEach(item => {
    const node = create('article', 'timeline-item');
    node.setAttribute('data-reveal', '');
    node.append(create('p', 'time', item.time));
    node.append(create('h3', undefined, item.title));
    node.append(create('p', undefined, item.detail));
    list.append(node);
  });
};

const renderContacts = (): void => {
  const grid = qs<HTMLElement>('#contact-grid');
  if (!grid) return;
  contacts.forEach(contact => {
    const card = create('article', 'card contact-card');
    card.setAttribute('data-reveal', '');
    card.style.cursor = 'pointer';
    card.append(create('h3', undefined, contact.title));
    card.append(create('p', undefined, contact.body));
    const ctaRow = create('div', 'cta-row');
    const link = create('a', undefined, contact.cta);
    link.innerHTML = `${contact.cta} <strong>→</strong>`;
    link.href = contact.link;
    link.target = contact.link.startsWith('http') ? '_blank' : '_self';
    link.rel = 'noreferrer';
    ctaRow.append(link);
    card.append(ctaRow);

    card.addEventListener('click', (e: MouseEvent) => {
      if (e.target !== link && !(e.target as Element).closest('a')) {
        link.click();
      }
    });

    grid.append(card);
  });
};

const setupNav = (): void => {
  const nav = qs<HTMLElement>('[data-nav]');
  const toggle = qs<HTMLButtonElement>('[data-nav-toggle]');
  if (!nav || !toggle) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.dataset.open === 'true';
    nav.dataset.open = (!isOpen).toString();
    toggle.setAttribute('aria-expanded', (!isOpen).toString());
  });

  qsa<HTMLAnchorElement>('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.dataset.open = 'false';
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
};

const setupReveal = (): void => {
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

  qsa<HTMLElement>('[data-reveal]').forEach((el, idx) => {
    el.style.transitionDelay = `${idx * 40}ms`;
    observer.observe(el);
  });
};

const setupTheme = (): void => {
  const toggle = qs<HTMLButtonElement>('[data-theme-toggle]');
  const root = document.body;
  if (!toggle) return;

  const getPreferred = (): string =>
    localStorage.getItem('ps-theme') ||
    (window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark');

  const apply = (mode: string): void => {
    root.dataset.theme = mode;
    localStorage.setItem('ps-theme', mode);
  };

  apply(getPreferred());

  toggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    apply(next);
  });
};

const setupContactModal = (): void => {
  const triggers = qsa<HTMLElement>('[data-contact-modal]');
  const backdrop = qs<HTMLElement>('[data-contact-modal-backdrop]');
  const closeBtn = qs<HTMLButtonElement>('[data-contact-modal-close]');
  if (!backdrop || triggers.length === 0) return;

  const open = (): void => backdrop.removeAttribute('hidden');
  const close = (): void => backdrop.setAttribute('hidden', '');

  triggers.forEach(t =>
    t.addEventListener('click', (e: Event) => {
      e.preventDefault();
      open();
    })
  );

  backdrop.addEventListener('click', (e: MouseEvent) => {
    if (e.target === backdrop) close();
  });

  if (closeBtn) closeBtn.addEventListener('click', close);

  window.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape' && !backdrop.hasAttribute('hidden')) close();
  });
};

const setupProgress = (): void => {
  const bar = qs<HTMLElement>('#scroll-progress');
  if (!bar) return;
  const update = (): void => {
    const scroll = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = height > 0 ? (scroll / height) * 100 : 0;
    bar.style.width = `${progress}%`;
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
};

const setupMagneticButtons = (): void => {
  if (prefersReducedMotion) return;
  const strength = 10;
  qsa<HTMLElement>('.button').forEach(btn => {
    btn.addEventListener('pointermove', (e: PointerEvent) => {
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

const init = (): void => {
  renderSignals();
  renderProjects();
  renderCapabilities();
  renderTimeline();
  renderContacts();
  setupNav();
  setupTheme();
  setupContactModal();
  setupProgress();
  setupReveal();
  setupMagneticButtons();
};

document.addEventListener('DOMContentLoaded', init);
