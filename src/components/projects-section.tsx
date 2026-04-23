"use client";

import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/sanity/lib/queries";

const INITIAL_VISIBLE_ITEMS = 6;

export function ProjectsSection({ projects }: { projects: Project[] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleProjects = useMemo(
    () => (isExpanded ? projects : projects.slice(0, INITIAL_VISIBLE_ITEMS)),
    [isExpanded, projects],
  );

  return (
    <>
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <li key={project._id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
      {!isExpanded && projects.length > INITIAL_VISIBLE_ITEMS ? (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            className="rounded-lg border border-gold/45 bg-black/20 px-4 py-2 text-sm font-medium text-gold backdrop-blur-sm hover:border-gold hover:bg-gold/10"
          >
            Ver mas
          </button>
        </div>
      ) : null}
    </>
  );
}
