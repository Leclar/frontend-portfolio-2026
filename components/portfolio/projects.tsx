// import Image from "next/image"

// const projects = [
//   {
//     title: "Task Flow App",
//     description:
//       "A full-featured task management application built with React and TypeScript. Supports drag-and-drop, real-time updates, and team collaboration features.",
//     image: "/images/project-1.jpg",
//     tags: ["React", "TypeScript", "Tailwind CSS"],
//     github: "https://github.com/yourname/task-flow",
//     live: "https://task-flow.vercel.app",
//   },
//   {
//     title: "E-Shop Storefront",
//     description:
//       "A modern e-commerce storefront with a custom cart system, product filtering, and responsive product detail pages. Integrated with a REST API backend.",
//     image: "/images/project-2.jpg",
//     tags: ["Next.js", "TypeScript", "Context API"],
//     github: "https://github.com/yourname/eshop",
//     live: "https://eshop.vercel.app",
//   },
//   {
//     title: "Weather Dashboard",
//     description:
//       "A sleek weather dashboard that fetches real-time data from the OpenWeather API. Features city search, 7-day forecasts, and dynamic weather animations.",
//     image: "/images/project-3.jpg",
//     tags: ["React", "API Integration", "CSS Modules"],
//     github: "https://github.com/yourname/weather-dash",
//     live: "https://weather-dash.vercel.app",
//   },
// ]

// function GitHubIcon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="16"
//       height="16"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden="true"
//     >
//       <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
//     </svg>
//   )
// }

// function ExternalLinkIcon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="16"
//       height="16"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden="true"
//     >
//       <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//       <polyline points="15 3 21 3 21 9" />
//       <line x1="10" y1="14" x2="21" y2="3" />
//     </svg>
//   )
// }

// export function Projects() {
//   return (
//     <section id="projects" className="py-24 px-6" aria-labelledby="projects-heading">
//       <div className="max-w-5xl mx-auto">
//         {/* Section header */}
//         <div className="mb-14">
//           <p className="font-mono text-xs text-primary tracking-[0.3em] uppercase mb-3">
//             03. Portfolio
//           </p>
//           <h2
//             id="projects-heading"
//             className="text-3xl sm:text-4xl font-bold text-foreground text-balance"
//           >
//             Featured Projects
//           </h2>
//           <div className="mt-4 w-12 h-0.5 bg-primary" aria-hidden="true" />
//         </div>

//         {/* Projects grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project) => (
//             <article
//               key={project.title}
//               className="group flex flex-col rounded-sm border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
//             >
//               {/* Image */}
//               <div className="relative h-44 overflow-hidden bg-secondary">
//                 <Image
//                   src={project.image}
//                   alt={`Screenshot of ${project.title}`}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-105"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                 />
//                 {/* Overlay on hover */}
//                 <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </div>

//               {/* Content */}
//               <div className="flex flex-col flex-1 p-5">
//                 <h3 className="font-sans font-semibold text-foreground mb-2">
//                   {project.title}
//                 </h3>
//                 <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
//                   {project.description}
//                 </p>

//                 {/* Tags */}
//                 <div className="flex flex-wrap gap-2 mb-5">
//                   {project.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="font-mono text-[10px] px-2 py-0.5 rounded-sm border border-primary/30 text-primary bg-primary/5"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Links */}
//                 <div className="flex gap-4 mt-auto">
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
//                     aria-label={`${project.title} GitHub repository`}
//                   >
//                     <GitHubIcon />
//                     GitHub
//                   </a>
//                   <a
//                     href={project.live}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
//                     aria-label={`${project.title} live demo`}
//                   >
//                     <ExternalLinkIcon />
//                     Live Demo
//                   </a>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
