export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-on-background">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <div className="max-w-2xl space-y-8">
          <span className="inline-flex items-center rounded-full border border-outline/60 bg-surface-container px-3 py-1 text-sm font-medium text-on-surface-variant">
            Early deployment ready
          </span>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            GG is live and ready for Netlify.
          </h1>

          <p className="max-w-xl text-lg text-on-surface-variant">
            This app was rebuilt to be a clean, production-safe Next.js baseline so it can be deployed
            quickly without missing app files or broken Supabase middleware imports.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-on-primary shadow-sm transition hover:opacity-90"
            >
              Next.js docs
            </a>
            <a
              href="https://www.netlify.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-outline bg-surface px-5 py-3 text-sm font-semibold text-on-surface transition hover:bg-surface-container"
            >
              Netlify
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
