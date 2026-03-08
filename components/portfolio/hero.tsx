export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-5xl mx-auto"
      aria-label="Hero section"
    >
      {/* Grid background decoration */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--neon) 1px, transparent 1px), linear-gradient(90deg, var(--neon) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Glow orb */}
      <div
        className="absolute top-1/3 left-1/4 -z-10 w-72 h-72 rounded-full opacity-10 blur-3xl"
        style={{ background: "var(--neon)" }}
        aria-hidden="true"
      />

      <div className="max-w-3xl">
        <p className="font-mono text-xs text-primary tracking-[0.3em] uppercase mb-4">
          Hello, World!
        </p>

        <h1 className="font-sans text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance text-foreground mb-4">
          I&apos;m{" "}
          <span
            className="text-primary"
            style={{ textShadow: "0 0 24px var(--neon)" }}
          >
            Ibragim
          </span>
        </h1>

        <h2 className="font-mono text-lg sm:text-xl text-muted-foreground mb-6">
          Junior Frontend Developer
        </h2>

        <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-xl mb-10">
          I craft clean, performant, and accessible web experiences with a focus
          on{" "}
          <span className="text-foreground font-medium">React</span> and{" "}
          <span className="text-foreground font-medium">TypeScript</span>.
          Passionate about turning ideas into pixel-perfect interfaces.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm font-mono text-sm font-semibold text-primary-foreground bg-primary hover:opacity-90 transition-opacity"
            style={{ boxShadow: "0 0 20px color-mix(in oklch, var(--neon) 40%, transparent)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>

          <button
            onClick={() => {
              const el = document.querySelector("#projects")
              if (el) el.scrollIntoView({ behavior: "smooth" })
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm font-mono text-sm font-semibold text-primary border border-primary hover:bg-primary/10 transition-colors"
          >
            View Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40" aria-hidden="true">
        <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">scroll</span>
        <div className="w-px h-8 bg-border animate-pulse" />
      </div>
    </section>
  )
}
