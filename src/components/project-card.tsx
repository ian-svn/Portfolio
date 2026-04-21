import Link from "next/link";

import { urlFor } from "@/sanity/lib/image";
import type { Project } from "@/sanity/lib/queries";

export function ProjectCard({ project }: { project: Project }) {
  const imageUrl = project.mainImage ? urlFor(project.mainImage).width(900).height(600).url() : null;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gold/30 bg-card/70 shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:border-gold hover:shadow-gold/20">
      <div className="relative aspect-[16/10] bg-black/30">
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
        <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
        <p className="line-clamp-3 text-sm text-muted">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {(project.technologies ?? []).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-gold/40 bg-black/40 px-2.5 py-1 text-xs text-gold"
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
              className="rounded-lg border border-gold/50 px-3 py-2 text-gold hover:bg-gold hover:text-black"
            >
              GitHub
            </Link>
          ) : null}
          {project.liveUrl ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              className="rounded-lg bg-gold px-3 py-2 text-black hover:bg-[#ffd700]"
            >
              Ver online
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
