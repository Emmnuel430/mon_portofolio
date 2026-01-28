/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { StackKey } from "@/lib/types";
import { useEffect } from "react";
import { StackBadge } from "./Avatars";
import Image from "next/image";

export default function ProjectModal({ project, onClose }: any) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative h-[80vh] w-full max-w-3xl overflow-hidden rounded-xl bg-surface flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        {/* Header */}
        <div className="sticky top-0 border-b bg-surface p-6 flex flex-row-reverse md:flex-row items-center gap-4">
          {project.logo && (
            <Image
              src={project.logo}
              alt={`${project.name} logo`}
              width={60}
              height={60}
              className="rounded"
            />
          )}
          <div>
            <h3
              id="project-modal-title"
              className="text-xl font-semibold text-brand-dark"
            >
              {project.name}
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.stack.map((tech: StackKey) => (
                <StackBadge key={tech} tech={tech} />
              ))}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="space-y-6 overflow-y-auto p-6 text-sm text-brand-muted max-h-100">
          <section>
            <h4 className="font-semibold text-brand-dark">Contexte</h4>
            <p>{project.context}</p>
          </section>

          <section>
            <h4 className="font-semibold text-brand-dark">Problème</h4>
            <p>{project.problem}</p>
          </section>

          <section>
            <h4 className="font-semibold text-brand-dark">Solution</h4>
            <p>{project.solution}</p>
          </section>

          {project.gallery && (
            <section>
              <h4 className="font-semibold text-brand-dark mb-3">
                Aperçu du produit
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.length > 0 ? (
                  project.gallery
                    .slice(0, 4)
                    .map((img: string) => (
                      <Image
                        key={img}
                        src={img}
                        alt={`Capture ${project.name}`}
                        width={800}
                        height={500}
                        className="rounded-lg border"
                      />
                    ))
                ) : (
                  <p className="text-brand-muted text-center">
                    Aucune image disponible pour le moment.
                  </p>
                )}
              </div>
            </section>
          )}

          <section>
            <h4 className="font-semibold text-brand-dark">Ce que j’ai fait</h4>
            <ul className="list-disc pl-5">
              {project.role.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h4 className="font-semibold text-brand-dark">Résultat</h4>
            <p>{project.result}</p>
          </section>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-4 border-t p-4">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              className="btn bg-brand text-white hover:opacity-80 transition duration-300 border-0 shadow-lg"
            >
              Voir le site
            </a>
          )}
          <button onClick={onClose} className="btn btn-soft shadow-lg">
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
