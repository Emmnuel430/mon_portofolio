"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { projects } from "@/data/projects";
import Image from "next/image";
import { StackAvatars } from "./Avatars";
import { motion } from "motion/react";
import {
  ArrowRight,
  ExternalLink,
  Cpu,
  Layers,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { Project } from "@/lib/types";

const ProjectModal = dynamic(() => import("./ProjectModal"), { ssr: false });

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section
      className="relative py-20"
      id="projets"
      aria-labelledby="projets-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* En-tête de section orienté Preuve & Valeur */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs font-semibold text-brand backdrop-blur-md dark:border-brand/30 dark:bg-brand/10">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Études de cas concrètes</span>
          </div>
          <h2
            className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl dark:text-white"
            id="projets-title"
          >
            Solutions Full-Stack à fort impact
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
            Au-delà du code : découvrez comment j&apos;articule rigueur
            d&apos;ingénierie, architectures scalables (React, Next.js &
            Laravel) et résolution de contraintes métier critiques.
          </p>
        </div>

        {/* Grille des projets / Case studies */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-brand/40"
            >
              <div>
                {/* Conteneur Image avec overlay et badge de type */}
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src={project.cover}
                    alt={`Aperçu du projet ${project.name}`}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5 rounded-md border border-white/20 bg-zinc-900/75 px-2.5 py-1 text-[11px] font-medium text-white shadow-xs backdrop-blur-md">
                    {project.type}
                  </div>
                </div>

                {/* Titre & Résumé business */}
                <div className="mt-4">
                  <h3 className="flex items-center gap-2 text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    {project.name}
                    <span
                      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold ring-1 ring-inset capitalize ${
                        project.status === "completed"
                          ? "bg-emerald-50 text-emerald-700 ring-emerald-600/10 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/20"
                          : "bg-amber-50 text-amber-700 ring-amber-600/10 dark:bg-amber-500/10 dark:text-amber-400 dark:ring-amber-500/20"
                      }`}
                    >
                      {project.status === "completed"
                        ? "Terminé"
                        : project.status}
                    </span>
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {project.summary}
                  </p>
                </div>

                {/* 3 Blocs d'ingénierie obligatoires : Défi, Architecture, Métrique */}
                <div className="mt-5 space-y-2.5 text-xs">
                  {/* 1. Défi technique */}
                  {project.technicalChallenge && (
                    <div className="rounded-lg border border-amber-500/20 bg-amber-50/50 p-2.5 dark:border-amber-500/20 dark:bg-amber-950/20">
                      <div className="flex items-center gap-1.5 font-semibold text-amber-800 dark:text-amber-300">
                        <Cpu className="h-3.5 w-3.5 shrink-0" />
                        <span>Défi Technique</span>
                      </div>
                      <p className="mt-1 leading-snug text-zinc-700 dark:text-zinc-300 line-clamp-2">
                        {project.technicalChallenge}
                      </p>
                    </div>
                  )}

                  {/* 2. Architecture & Choix de stack */}
                  {project.architectureRationale && (
                    <div className="rounded-lg border border-blue-500/20 bg-blue-50/50 p-2.5 dark:border-blue-500/20 dark:bg-blue-950/20">
                      <div className="flex items-center gap-1.5 font-semibold text-blue-800 dark:text-blue-300">
                        <Layers className="h-3.5 w-3.5 shrink-0" />
                        <span>Architecture & Stack</span>
                      </div>
                      <p className="mt-1 leading-snug text-zinc-700 dark:text-zinc-300 line-clamp-2">
                        {project.architectureRationale}
                      </p>
                    </div>
                  )}

                  {/* 3. Résultat chiffré & impact concret */}
                  {project.metrics && (
                    <div className="rounded-lg border border-emerald-500/20 bg-emerald-50/50 p-2.5 dark:border-emerald-500/20 dark:bg-emerald-950/20">
                      <div className="flex items-center gap-1.5 font-semibold text-emerald-800 dark:text-emerald-300">
                        <TrendingUp className="h-3.5 w-3.5 shrink-0" />
                        <span>Impact Mesurable</span>
                      </div>
                      <p className="mt-1 leading-snug text-zinc-700 dark:text-zinc-300 line-clamp-2">
                        {project.metrics}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Pied de carte : Stack & CTA */}
              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    Stack principale
                  </span>
                  <StackAvatars stack={project.stack} max={4} />
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="group/btn flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-4 py-2.5 text-xs font-semibold text-white shadow-xs transition-all duration-200 hover:bg-brand active:scale-[0.98] dark:bg-zinc-800 dark:hover:bg-brand"
                  >
                    <span>Étude de cas détaillée</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                  </button>

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-700 transition-all duration-200 hover:border-brand/40 hover:bg-brand/10 hover:text-brand dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:text-white"
                      title="Visiter le site en direct"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modale d'approfondissement technique */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
