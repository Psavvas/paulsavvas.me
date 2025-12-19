import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Paul Savvas',
  description:
    'About Paul Savvas — student engineer building practical tools across software, hardware, and 3D design.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-neutral-950 transition-colors">
      <main className="mx-auto w-full max-w-6xl bg-white px-6 py-16 dark:bg-neutral-950 sm:px-16 sm:py-24 animate-fade-in">
        <header className="max-w-3xl animate-fade-in-up">
          <p className="text-sm font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
            About
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
            Building practical tools, thoughtfully.
          </h1>
          <p className="mt-6 text-base leading-7 text-neutral-700 dark:text-neutral-300">
            I’m Paul Savvas — a student at the SMCPS STEM Academy (Grade 10)
            who enjoys turning ideas into real, working things. I like projects
            where engineering and design meet: clear constraints, measurable
            results, and details that hold up outside a demo.
          </p>
        </header>

        <section className="mt-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950 hover-lift animate-fade-in-up">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              What I care about
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
              <li>
                <span className="font-medium text-neutral-900 dark:text-neutral-100">
                  Simplicity:
                </span>{' '}
                reduce complexity until the system is easy to understand.
              </li>
              <li>
                <span className="font-medium text-neutral-900 dark:text-neutral-100">
                  Durability:
                </span>{' '}
                build things that keep working when conditions change.
              </li>
              <li>
                <span className="font-medium text-neutral-900 dark:text-neutral-100">
                  Useful output:
                </span>{' '}
                ship tools that solve real problems and improve over time.
              </li>
              <li>
                <span className="font-medium text-neutral-900 dark:text-neutral-100">
                  Good communication:
                </span>{' '}
                document decisions and make the work easy to collaborate on.
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950 hover-lift animate-fade-in-up">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              What I work on
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
              <li>
                Software: small products, utilities, and experiments that are
                fast to iterate and easy to maintain.
              </li>
              <li>
                Hardware: practical builds where constraints (power, sensors,
                materials) shape the solution.
              </li>
              <li>
                3D design: parts and prototypes that are tested, adjusted, and
                refined in real conditions.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-14 max-w-3xl animate-fade-in-up animation-delay-300">
          <h2 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Now
          </h2>
          <div className="mt-4 space-y-4 text-base leading-7 text-neutral-700 dark:text-neutral-300">
            <p>
              Right now, I’m focused on building a portfolio of projects that
              are simple to explain and strong under scrutiny — the kind of work
              that can be read, run, and reused.
            </p>
            <p>
              If you want to see what I’m working on, the best place to start is
              my GitHub.
            </p>
          </div>

          <div className="mt-8">
            <a
              className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900 hover-lift"
              href="https://github.com/psavvas"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
