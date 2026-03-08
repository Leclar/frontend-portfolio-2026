function GitHubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function TelegramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
}

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Leclar",
    icon: GitHubIcon,
    handle: "@Leclar",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/Leclar",
    icon: LinkedInIcon,
    handle: "in/Leclar",
  },
  {
    name: "Telegram",
    href: "https://t.me/ibBraglm",
    icon: TelegramIcon,
    handle: "@ibBraglm",
  },
]

export function Contact() {
  return (
    <footer id="contact" className="border-t border-border" aria-labelledby="contact-heading">
      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="font-mono text-xs text-primary tracking-[0.3em] uppercase mb-3">
            04. Get In Touch
          </p>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4"
          >
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
            I&apos;m currently open to junior frontend opportunities and freelance
            projects. Feel free to reach out — I&apos;d love to connect!
          </p>
        </div>

        {/* Social links */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          {socials.map(({ name, href, icon: Icon, handle }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 rounded-sm border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
              aria-label={`${name} — ${handle}`}
            >
              <span className="text-muted-foreground group-hover:text-primary transition-colors">
                <Icon size={20} />
              </span>
              <div>
                <p className="font-mono text-xs font-semibold text-foreground">{name}</p>
                <p className="font-mono text-[10px] text-muted-foreground">{handle}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-foreground">{"<"}</span>
            Leclar
            <span className="text-foreground">{" />"}</span>
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Designed &amp; Built with{" "}
            <span className="text-primary" aria-label="love">
              ♥
            </span>{" "}
            using Next.js &amp; TypeScript
          </p>
        </div>
      </div>
    </footer>
  )
}
