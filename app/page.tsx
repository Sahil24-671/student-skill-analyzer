export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-12">
        <div className="text-xl font-bold tracking-tight">
          Skill<span className="text-blue-500">Forge</span>
        </div>

        <div className="hidden gap-8 text-sm text-gray-400 md:flex">
          <a href="#how-it-works" className="transition hover:text-white">
            How it works
          </a>
          <a href="#features" className="transition hover:text-white">
            Features
          </a>
        </div>

        <button className="rounded-lg border border-white/15 px-4 py-2 text-sm transition hover:bg-white hover:text-black">
          Sign in
        </button>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto flex min-h-[calc(100vh-81px)] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center">
        <div className="mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
          AI-powered student skill analysis
        </div>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Know what you can do.
          <br />
          <span className="text-blue-500">Know what to build next.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          Analyze your projects, GitHub activity, resume, courses and
          assessments to build an evidence-based skill profile.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-xl bg-blue-600 px-7 py-3.5 font-medium transition hover:bg-blue-500">
            Analyze My Skills →
          </button>

          <button className="rounded-xl border border-white/15 px-7 py-3.5 font-medium text-gray-300 transition hover:border-white/30 hover:text-white">
            Explore Demo
          </button>
        </div>

        {/* Mini Skill Preview */}
        <div className="mt-20 grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left backdrop-blur">
            <div className="mb-4 text-2xl">◈</div>
            <h3 className="font-semibold">Your Skills</h3>
            <p className="mt-2 text-sm text-gray-500">
              See skills supported by actual evidence.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left backdrop-blur">
            <div className="mb-4 text-2xl">⌁</div>
            <h3 className="font-semibold">Skill Gaps</h3>
            <p className="mt-2 text-sm text-gray-500">
              Compare your skills with your target role.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left backdrop-blur">
            <div className="mb-4 text-2xl">→</div>
            <h3 className="font-semibold">Your Roadmap</h3>
            <p className="mt-2 text-sm text-gray-500">
              Know what to learn and what to build next.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}