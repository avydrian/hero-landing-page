/* Typography and spacing measured from supabase.com (desktop):
   - Headings: Manrope, weight 500, line-height 1.0, no letter-spacing
   - Body: Inter, weight 450, 16px/24px
   - Buttons: Inter 14px/20px, weight 500, padding 8px 16px, radius 9.3px, height 38px, no shadow
   - Nav links: 14px/500; "Sign in": 12px/500
   - Brand green: oklch(0.525 0.12 157.5) — solid, not a gradient */

const btnPrimary =
  "inline-flex h-[38px] shrink-0 items-center justify-center whitespace-nowrap rounded-[9.3px] bg-brand px-4 text-sm font-medium leading-5 text-brand-text transition hover:opacity-90";
const btnSecondary =
  "inline-flex h-[38px] shrink-0 items-center justify-center whitespace-nowrap rounded-[9.3px] border border-black/[0.08] bg-white px-4 text-sm font-medium leading-5 text-ink shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition hover:bg-zinc-50";

export default function Home() {
  const features = [
    {
      title: "Postgres Database",
      desc: "Every project is a full Postgres database, the world's most trusted relational database.",
      icon: "🗄️",
    },
    {
      title: "Authentication",
      desc: "Add user sign ups and logins, securing your data with Row Level Security.",
      icon: "🔐",
    },
    {
      title: "Edge Functions",
      desc: "Easily write custom code without deploying or scaling servers.",
      icon: "⚡",
    },
    {
      title: "Storage",
      desc: "Store, organize, and serve large files, from videos to images.",
      icon: "📦",
    },
    {
      title: "Realtime",
      desc: "Build multiplayer experiences with real-time data synchronization.",
      icon: "🔄",
    },
    {
      title: "Vector",
      desc: "Integrate your favorite ML models to store, index and search vector embeddings.",
      icon: "🧠",
    },
  ];

  const companies = [
    "Lovable",
    "Mozilla",
    "Figma",
    "GitHub",
    "Vercel",
    "Resend",
    "LangChain",
    "1Password",
  ];

  return (
    <div className="min-h-screen bg-white text-ink">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-zinc-200/60 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M9 1 2 9.5h5L7 15l7-8.5H9L9 1Z" fill="currentColor" />
              </svg>
            </span>
            <span className="font-display text-lg font-medium tracking-normal">
              SupaHero
            </span>
          </div>
          <div className="hidden items-center gap-1 md:flex">
            {["Product", "Customers", "Docs", "Pricing"].map((item) => (
              <a
                key={item}
                href="#"
                className="rounded-lg px-2.5 py-2 text-sm font-medium leading-5 transition hover:bg-zinc-100"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#"
              className="whitespace-nowrap rounded-lg bg-white px-2.5 py-1 text-xs font-medium leading-4"
            >
              Sign in
            </a>
            <a href="#" className={btnPrimary}>
              Start your project
            </a>
          </div>
          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Open menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/[0.08] text-ink md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 pt-10 pb-16 text-left sm:pt-24 md:text-center">
          <h1 className="font-display text-[34px] font-medium leading-none tracking-normal md:text-[46px]">
            Build in a weekend
            <br />
            <span className="text-brand">Scale to millions</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-6 text-muted md:mx-auto">
            Start your project with a Postgres database. Add Authentication, Data
            APIs, Edge Functions, Realtime Data, Storage, and Vector embeddings.
          </p>
          <div className="mt-8 flex flex-row flex-wrap items-center justify-start gap-3 md:justify-center">
            <a href="#" className={btnPrimary}>
              Start your project
            </a>
            <a href="#" className={btnSecondary}>
              Request a demo
            </a>
          </div>
        </div>

        {/* Product preview mock */}
        <div className="mx-auto max-w-6xl px-5 pb-16 md:pb-20">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
            <div className="flex items-center gap-2 border-b border-zinc-200 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-4 text-xs leading-4 text-muted">
                dashboard.supahero.app
              </span>
            </div>
            <div className="grid grid-cols-12 gap-4 p-6">
              <div className="col-span-12 md:col-span-3">
                <div className="space-y-2">
                  {["Table Editor", "SQL Editor", "Auth", "Storage", "Edge Functions"].map(
                    (item, i) => (
                      <div
                        key={item}
                        className={`rounded-lg px-3 py-2 text-sm leading-5 ${
                          i === 0
                            ? "bg-brand text-brand-text"
                            : "text-muted transition hover:bg-zinc-100"
                        }`}
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="col-span-12 md:col-span-9">
                <div className="rounded-lg border border-zinc-200 bg-white p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-medium leading-5">users</span>
                    <span className="text-xs leading-4 text-muted">1,204 rows</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { id: "1", email: "ada@example.com", role: "admin" },
                      { id: "2", email: "linus@example.com", role: "user" },
                      { id: "3", email: "grace@example.com", role: "user" },
                      { id: "4", email: "alan@example.com", role: "editor" },
                    ].map((row) => (
                      <div
                        key={row.id}
                        className="grid grid-cols-3 gap-4 rounded-md bg-zinc-50 px-3 py-2 text-sm leading-5"
                      >
                        <span className="text-muted">#{row.id}</span>
                        <span className="truncate">{row.email}</span>
                        <span className="text-brand">{row.role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h2 className="font-display text-3xl font-medium leading-none tracking-normal md:text-4xl">
            Everything you need to ship fast
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-6 text-muted">
            Use one or all. Best of breed products, integrated as a platform.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-zinc-200 p-6 transition hover:border-brand hover:opacity-90"
            >
              <div className="text-3xl">{f.icon}</div>
              <h3 className="font-display mt-4 text-lg font-medium leading-7 tracking-normal">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted by */}
      <section
        id="trusted"
        className="border-y border-zinc-200 bg-zinc-50 py-16"
      >
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm font-medium uppercase leading-5 tracking-wider text-muted">
            Trusted by fast-growing companies worldwide
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {companies.map((c) => (
              <span
                key={c}
                className="font-display text-xl font-medium leading-7 text-muted"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h2 className="font-display text-3xl font-medium leading-none tracking-normal md:text-[46px]">
          Start building today.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-6 text-muted">
          Join millions of developers shipping with SupaHero. Free to start, scales
          with you.
        </p>
        <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-3">
          <a href="#" className={btnPrimary}>
            Start your project
          </a>
          <a href="#" className={btnSecondary}>
            Request a demo
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand text-white">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M9 1 2 9.5h5L7 15l7-8.5H9L9 1Z" fill="currentColor" />
              </svg>
            </span>
            <span className="text-sm leading-5 text-muted">
              © 2026 SupaHero. All rights reserved.
            </span>
          </div>
          <div className="flex gap-6 text-sm leading-5 text-muted">
            <a href="#" className="hover:text-ink">
              Privacy
            </a>
            <a href="#" className="hover:text-ink">
              Terms
            </a>
            <a href="#" className="hover:text-ink">
              Status
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
