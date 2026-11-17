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
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-zinc-200/60 bg-white/80 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/80">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-white font-bold">
              S
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              SupaHero
            </span>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex dark:text-zinc-300">
            <a href="#features" className="hover:text-zinc-900 dark:hover:text-white">
              Product
            </a>
            <a href="#trusted" className="hover:text-zinc-900 dark:hover:text-white">
              Customers
            </a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white">
              Docs
            </a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white">
              Pricing
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden text-sm font-medium text-zinc-600 hover:text-zinc-900 md:inline dark:text-zinc-300"
            >
              Sign in
            </a>
            <a
              href="#"
              className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Start for free
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-100/60 via-white to-white dark:from-emerald-900/20 dark:via-zinc-950 dark:to-zinc-950" />
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 text-center sm:pt-28 sm:pb-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            New: AI agents built into your workspace
          </span>
          <h1 className="font-display mx-auto mt-6 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Build in a weekend
            <br />
            <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
              Scale to millions
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 sm:text-xl dark:text-zinc-300">
            Start your project with a Postgres database. Add Authentication, Data
            APIs, Edge Functions, Realtime Data, Storage, and Vector embeddings.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-500 px-8 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-600"
            >
              Get started for free
            </a>
            <a
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 px-8 text-base font-semibold text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800"
            >
              Request a demo
            </a>
          </div>
          <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
            No credit card required · Free tier available forever
          </p>
        </div>

        {/* Product preview mock */}
        <div className="mx-auto max-w-6xl px-6 pb-20">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-center gap-2 border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-4 text-xs text-zinc-500">dashboard.supahero.app</span>
            </div>
            <div className="grid grid-cols-12 gap-4 p-6">
              <div className="col-span-12 md:col-span-3">
                <div className="space-y-2">
                  {["Table Editor", "SQL Editor", "Auth", "Storage", "Edge Functions"].map(
                    (item, i) => (
                      <div
                        key={item}
                        className={`rounded-lg px-3 py-2 text-sm font-medium ${
                          i === 0
                            ? "bg-emerald-500 text-white"
                            : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                        }`}
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="col-span-12 md:col-span-9">
                <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-semibold">users</span>
                    <span className="text-xs text-zinc-500">1,204 rows</span>
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
                        className="grid grid-cols-3 gap-4 rounded-md bg-zinc-50 px-3 py-2 text-sm dark:bg-zinc-900"
                      >
                        <span className="font-mono text-zinc-500">#{row.id}</span>
                        <span>{row.email}</span>
                        <span className="text-emerald-600 dark:text-emerald-400">
                          {row.role}
                        </span>
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
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to ship fast
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-300">
            Use one or all. Best of breed products, integrated as a platform.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-zinc-200 p-6 transition hover:border-emerald-300 hover:shadow-lg dark:border-zinc-800 dark:hover:border-emerald-700"
            >
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted by */}
      <section id="trusted" className="border-y border-zinc-200 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-zinc-900/40">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
            Trusted by fast-growing companies worldwide
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {companies.map((c) => (
              <span
                key={c}
                className="font-display text-xl font-semibold text-zinc-400 dark:text-zinc-500"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Start building today.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-600 dark:text-zinc-300">
          Join millions of developers shipping with SupaHero. Free to start, scales
          with you.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-500 px-8 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-600"
          >
            Get started for free
          </a>
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 px-8 text-base font-semibold text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800"
          >
            Talk to sales
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-10 dark:border-zinc-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500 text-sm font-bold text-white">
              S
            </span>
            <span className="text-sm text-zinc-500">
              © 2026 SupaHero. All rights reserved.
            </span>
          </div>
          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white">
              Status
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
