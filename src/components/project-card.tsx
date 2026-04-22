import Link from "next/link";

import { urlFor } from "@/sanity/lib/image";
import type { Project } from "@/sanity/lib/queries";

export function ProjectCard({ project }: { project: Project }) {
  const imageUrl = project.mainImage ? urlFor(project.mainImage).width(900).height(600).url() : null;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-card/70 shadow-card ring-1 ring-white/[0.04] transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-glow hover:ring-gold/15">
      <div className="relative aspect-[16/10] bg-black/40">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={project.title}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted">
            Sin imagen
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">{project.title}</h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-muted">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {(project.technologies ?? []).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/[0.1] bg-white/[0.04] px-2.5 py-1 text-xs text-gold/95"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center gap-3 pt-2 text-sm font-medium">
          {project.githubUrl ? (
            <Link
              href={project.githubUrl}
              target="_blank"
              className="rounded-lg border border-gold/45 bg-black/20 px-3 py-2 text-gold backdrop-blur-sm hover:border-gold hover:bg-gold/10"
            >
              GitHub
            </Link>
          ) : null}
          {project.liveUrl ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              className="rounded-lg bg-gold px-3 py-2 text-black shadow-sm shadow-gold/20 hover:bg-[#e8c84a]"
            >
              Ver online
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
