import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Paul Savvas',
  description:
    'Contact Paul Savvas — reach out about projects, collaboration, or questions.',
};

const emailAddressPlaceholder = 'hello@paulsavvas.me';
const githubProfileUrl = 'https://github.com/psavvas';
const linkedinProfileUrl = 'https://linkedin.com/in/pauldsavvas';
const gravatarProfileUrl = 'https://gravatar.com/paulsavvas';
const thingiverseProfileUrl = 'https://thingiverse.com/psavvas';
const contactFormUrl = 'https://psavvas.notion.site/15770b9af471809da736d4e77a090ce0';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-neutral-950 transition-colors">
      <main className="mx-auto w-full max-w-6xl bg-white px-6 py-16 dark:bg-neutral-950 sm:px-16 sm:py-24 animate-fade-in">
        <header className="max-w-3xl animate-fade-in-up">
          <p className="text-sm font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
            Let’s connect.
          </h1>
          <p className="mt-6 text-base leading-7 text-neutral-700 dark:text-neutral-300">
            If you have a question, want to collaborate, or want to talk through
            a project idea, the links below are the best way to reach me.
          </p>
        </header>

        <section className="mt-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950 hover-lift animate-fade-in-up">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              Contact Form
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
              Message me using the form below. I try to respond as soon as possible.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <a
                className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900 hover-lift"
                href={contactFormUrl}
              >
                Open form
              </a>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {'paulsavvas.me/redirect/contact'}
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950 hover-lift animate-fade-in-up">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              Email
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
              Contact me via email, and I'll make sure to try to respond within 3 business days.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <a
                className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900 hover-lift"
                href={`mailto:${emailAddressPlaceholder}`}
              >
                Send email
              </a>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {emailAddressPlaceholder}
              </p>
            </div>
          </div>
        </section>

        {/* New section for smaller cards */}
        <section className="mt-14 grid gap-10 md:grid-cols-4">
          <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950 hover-lift animate-fade-in-up">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              LinkedIn
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
              Connect with me on LinkedIn.
            </p>
            <div className="mt-6">
              <a
                className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900 hover-lift"
                href={linkedinProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View LinkedIn
              </a>
            </div>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950 hover-lift animate-fade-in-up">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              Gravatar
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
              View my Gravatar profile, and other social profiles.
            </p>
            <div className="mt-6">
              <a
                className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900 hover-lift"
                href={gravatarProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Gravatar
              </a>
            </div>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950 hover-lift animate-fade-in-up">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              GitHub
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
              Get access to my open source coding projects.
            </p>
            <div className="mt-6">
              <a
                className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900 hover-lift"
                href={githubProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub
              </a>
            </div>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950 hover-lift animate-fade-in-up">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              Thingiverse
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
              Explore my 3D designs and projects.
            </p>
            <div className="mt-6">
              <a
                className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900 hover-lift"
                href={thingiverseProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Thingiverse
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
