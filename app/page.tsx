export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-neutral-950 transition-colors">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 bg-white px-6 py-24 dark:bg-neutral-950 sm:px-16 sm:py-32 animate-fade-in">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy" data-reveal>
              <p className="eyebrow">Student, Engineer, Developer and Leader</p>
              <h1>Paul Savvas</h1>
              <h2>NOTE: THIS SITE IS A TEMPLATE. NOT ALL CONTENT HAS BEEN UPDATED AND IS ACCURATE.</h2>
              <p className="lede">
                Hello, I am STEM Academy student who builds practical tools to
                help the world work better. I combine engineering, design, and
                systems thinking to create solutions that are clear, durable,
                and genuinely useful. My work spans software, hardware, and 3D
                design, where I test ideas in real conditions and refine them
                until they hold up beyond the classroom. I value simplicity,
                structure, and impact—and aim to ship tools that solve real
                problems and improve over time.
              </p>
              <div className="hero-actions">
                <a
                  className="button ghost"
                  href="https://github.com/psavvas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div className="hero-chips">
                <span className="chip">STEM Academy · Grade 10</span>
                <span className="chip">Product + Engineering</span>
              </div>
            </div>
            <div className="hero-panel card" data-reveal>
              <div className="panel-head">
                <p className="eyebrow">Live signals</p>
                <div className="pulse"></div>
              </div>
              <div className="signal-rail" id="signal-rail"></div>
              <div className="meta-row">
                <div className="meta-block">
                  <p className="label">Location</p>
                  <p className="value">Maryland, USA</p>
                </div>
                <div className="meta-block">
                  <p className="label">School</p>
                  <p className="value">SMCPS - STEM Academy</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
