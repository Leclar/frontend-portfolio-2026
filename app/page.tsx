"use client"
import { Nav } from "@/components/portfolio/nav"
import { Hero } from "@/components/portfolio/hero"
import { Skills } from "@/components/portfolio/skills"
// import { Projects } from "@/components/portfolio/projects"
import { Contact } from "@/components/portfolio/contact"

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <Skills />
      {/* <Projects /> */}
      <Contact />
    </main>
  )
}
