const skills = [
  {
    name: "JavaScript",
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
        <rect width="32" height="32" rx="3" fill="#F7DF1E" />
        <path
          d="M9.5 24.5l2.1-1.28c.4.72.77 1.33 1.65 1.33.84 0 1.37-.33 1.37-1.62V15.5h2.59v7.47c0 2.67-1.56 3.88-3.84 3.88-2.06 0-3.25-1.07-3.87-2.35zM18.5 24.2l2.1-1.22c.55.9 1.27 1.56 2.54 1.56 1.07 0 1.75-.53 1.75-1.27 0-.88-.7-1.19-1.88-1.71l-.65-.28c-1.86-.79-3.1-1.79-3.1-3.89 0-1.94 1.48-3.41 3.79-3.41 1.64 0 2.82.57 3.67 2.07l-2.01 1.29c-.44-.79-.92-1.1-1.66-1.1-.76 0-1.24.48-1.24 1.1 0 .77.48 1.08 1.59 1.56l.65.28c2.19.94 3.44 1.9 3.44 4.05 0 2.32-1.82 3.6-4.27 3.6-2.39 0-3.94-1.14-4.69-2.63z"
          fill="#323330"
        />
      </svg>
    ),
    badge: "Advanced Learning",
    color: "#F7DF1E",
    desc: "ES2024+, async/await, DOM APIs",
  },
  {
    name: "TypeScript",
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
        <rect width="32" height="32" rx="3" fill="#3178C6" />
        <path
          d="M17.5 14.6h3.7v1.8h-2.3v8.9H16.7V16.4h-2.3v-1.8h3.1zm-6.3 0h2.2v10.7H11.2V14.6z"
          fill="white"
        />
        <path
          d="M5 5h22v22H5z"
          fill="none"
        />
        <text x="4" y="24" fontSize="13" fontWeight="bold" fill="white" fontFamily="sans-serif">TS</text>
      </svg>
    ),
    badge: "Junior Level",
    color: "#3178C6",
    desc: "Types, Generics, Interfaces, Utility Types",
  },
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
        <rect width="32" height="32" rx="3" fill="#20232A" />
        <ellipse cx="16" cy="16" rx="4" ry="4" fill="#61DAFB" />
        <ellipse cx="16" cy="16" rx="12" ry="4.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" />
        <ellipse cx="16" cy="16" rx="12" ry="4.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="12" ry="4.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 16 16)" />
      </svg>
    ),
    badge: "Junior Level",
    color: "#61DAFB",
    desc: "Hooks, Context, React Query, Next.js",
  },
  {
    name: "HTML & CSS",
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
        <rect width="32" height="32" rx="3" fill="#E44D26" />
        <path d="M7 4l1.8 20.2L16 26l7.2-1.8L25 4H7z" fill="#F16529" />
        <path d="M16 24.4V7.2H9.2l1.5 16.6L16 24.4z" fill="#EBEBEB" />
        <path d="M16 7.2v17.2l6.3-1.8 1.5-15.4H16z" fill="white" />
        <path d="M10.5 10.5h5.5v2.8h-2.6l.2 2.2h2.4v2.8h-5l-.5-7.8z" fill="#EBEBEB" />
        <path d="M16 10.5h5.5l-.4 4.5-2.5.6v-2.3l1.1-.3.1-1h-3.8V10.5z" fill="white" />
      </svg>
    ),
    badge: "Core Foundation",
    color: "#E44D26",
    desc: "Semantic HTML, Flexbox, Grid, Tailwind",
  },
  {
    name: "Git",
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
        <rect width="32" height="32" rx="3" fill="#F05032" />
        <path
          d="M28.9 14.5l-11.4-11.4c-.8-.8-2-.8-2.8 0l-2.5 2.5 3.2 3.2c.7-.3 1.6-.1 2.1.5.6.6.7 1.4.4 2.1l3 3c.7-.3 1.5-.1 2.1.4.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.6-.6-.8-1.5-.4-2.2l-2.8-2.8v7.4c.2.1.4.2.6.4.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8.2-.2.5-.4.8-.5V12.7c-.3-.1-.6-.3-.8-.5-.6-.6-.8-1.5-.4-2.2l-3.1-3.1-8.3 8.3c-.8.8-.8 2 0 2.8l11.4 11.4c.8.8 2 .8 2.8 0l11.3-11.3c.7-.7.7-2 0-2.6z"
          fill="white"
        />
      </svg>
    ),
    badge: null,
    color: "#F05032",
    desc: "Branching, PRs, GitHub workflows",
  },
  {
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
        <rect width="32" height="32" rx="3" fill="#000000" />
        <circle cx="16" cy="16" r="10" fill="white" />
        <path d="M13 12h1.5l7 9H20l-7-9z" fill="black" />
        <path d="M12 12h2v8h-2z" fill="black" />
      </svg>
    ),
    badge: null,
    color: "#FFFFFF",
    desc: "App Router, SSR, SSG, API routes",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6" aria-labelledby="skills-heading">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-14">
          <p className="font-mono text-xs text-primary tracking-[0.3em] uppercase mb-3">
            02. Tech Stack
          </p>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance"
          >
            Skills &amp; Technologies
          </h2>
          <div className="mt-4 w-12 h-0.5 bg-primary" aria-hidden="true" />
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <article
              key={skill.name}
              className="group relative p-5 rounded-sm border border-border bg-card hover:border-primary/50 transition-all duration-300"
              style={{
                boxShadow: "inset 0 0 0 0 var(--neon)",
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0">{skill.icon}</div>
                <div>
                  <h3 className="font-mono font-semibold text-foreground text-sm">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </div>

              {/* Badge */}
              {skill.badge && (
                <span
                  className="inline-block mt-2 rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold text-foreground border border-border"
                  style={{
                    borderColor: skill.color,
                    color: skill.color !== "#FFFFFF" ? skill.color : "#222",
                  }}
                  aria-label={`${skill.name} badge: ${skill.badge}`}
                >
                  {skill.badge}
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
