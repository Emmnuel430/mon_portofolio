/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { projects } from "@/data/projects";

const ProjectModal = dynamic(() => import("./ProjectModal"), { ssr: false });

export default function Projects() {
  const [activeProject, setActiveProject] = useState<any>(null);

  return (
    <section className="py-20" id="projets" aria-labelledby="projets-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2
            className="text-3xl font-bold text-brand-dark sm:text-4xl"
            id="projets-title"
          >
            Projets
          </h2>
          <p className="mt-3 text-brand-muted">
            Quelques projets dont je suis particulièrement fier
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="rounded-xl border border-slate-200 p-6 transition hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-brand-dark">
                  {project.name}
                </h3>

                <p className="mt-1 text-sm text-brand-muted">{project.type}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="badge badge-soft text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-sm text-brand-muted">
                  {project.summary}
                </p>
              </div>

              <button
                onClick={() => setActiveProject(project)}
                className="mt-6 inline-flex items-center text-sm font-medium text-brand hover:underline"
              >
                Voir plus →
              </button>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
