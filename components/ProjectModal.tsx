"use client";

import { useEffect } from "react";
import Image from "next/image";
import { StackBadge } from "./Avatars";
import { Project, StackKey } from "@/lib/types";
import { X, ExternalLink, Cpu, Layers, TrendingUp, CheckCircle, Sparkles } from "lucide-react";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/70 p-4 backdrop-blur-md transition-all duration-300 animate-in fade-in"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/95 shadow-2xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/95"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        {/* ================= HEADER ================= */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-zinc-200/80 bg-white/90 px-6 py-4 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/90">
          <div className="flex items-center gap-4">
            {project.logo && (
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-zinc-200 bg-white p-1 dark:border-zinc-800 dark:bg-zinc-800">
                <Image
                  src={project.logo}
                  alt={`${project.name} logo`}
                  width={48}
                  height={48}
                  className="h-full w-full object-contain rounded-lg"
                />
              </div>
            )}
            <div>
              <div className="flex items-center gap-2">
                <h3
                  id="project-modal-title"
                  className="text-xl font-bold text-zinc-900 dark:text-white"
                >
                  {project.name}
                </h3>
                <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-semibold text-brand">
                  {project.type}
                </span>
              </div>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {project.stack.map((tech: StackKey) => (
                  <StackBadge key={tech} tech={tech} size="sm" />
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
            aria-label="Fermer la modale"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* ================= BODY ================= */}
        <div className="space-y-6 overflow-y-auto p-6 text-sm text-zinc-600 dark:text-zinc-300">
          {/* Résumé & Contexte */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-brand">
              Contexte & Objectif
            </h4>
            <p className="mt-1.5 text-base leading-relaxed text-zinc-800 dark:text-zinc-200">
              {project.context}
            </p>
          </div>

          {/* Grille des 3 Piliers d'ingénierie */}
          <div className="grid gap-4 sm:grid-cols-3">
            {/* Défi Technique */}
            <div className="rounded-xl border border-amber-500/20 bg-amber-50/60 p-4 dark:border-amber-500/20 dark:bg-amber-950/30">
              <div className="flex items-center gap-2 font-semibold text-amber-800 dark:text-amber-300">
                <Cpu className="h-4 w-4 shrink-0" />
                <span>Défi Technique</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-zinc-700 dark:text-zinc-300">
                {project.technicalChallenge || project.problem}
              </p>
            </div>

            {/* Architecture choisie */}
            <div className="rounded-xl border border-blue-500/20 bg-blue-50/60 p-4 dark:border-blue-500/20 dark:bg-blue-950/30">
              <div className="flex items-center gap-2 font-semibold text-blue-800 dark:text-blue-300">
                <Layers className="h-4 w-4 shrink-0" />
                <span>Architecture Choisie</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-zinc-700 dark:text-zinc-300">
                {project.architectureRationale || project.solution}
              </p>
            </div>

            {/* Résultat concret / Métriques */}
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-50/60 p-4 dark:border-emerald-500/20 dark:bg-emerald-950/30">
              <div className="flex items-center gap-2 font-semibold text-emerald-800 dark:text-emerald-300">
                <TrendingUp className="h-4 w-4 shrink-0" />
                <span>Impact Chiffré</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-zinc-700 dark:text-zinc-300">
                {project.metrics || project.result}
              </p>
            </div>
          </div>

          {/* Rôle & Responsabilités */}
          <div>
            <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              <Sparkles className="h-3.5 w-3.5 text-brand" />
              Réalisations & Périmètre technique
            </h4>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {project.role.map((item: string) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 rounded-lg border border-zinc-100 bg-zinc-50/80 p-2.5 text-xs text-zinc-700 dark:border-zinc-800/80 dark:bg-zinc-800/40 dark:text-zinc-300"
                >
                  <CheckCircle className="h-4 w-4 shrink-0 text-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Galerie de captures */}
          {project.gallery && project.gallery.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
                Aperçu visuel de l&apos;application
              </h4>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {project.gallery.slice(0, 4).map((img: string, idx: number) => (
                  <div
                    key={img}
                    className="relative aspect-video overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-800"
                  >
                    <Image
                      src={img}
                      alt={`Capture ${project.name} ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ================= FOOTER ================= */}
        <div className="sticky bottom-0 flex items-center justify-end gap-3 border-t border-zinc-200/80 bg-white/90 p-4 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/90">
          <button
            onClick={onClose}
            className="rounded-xl border border-zinc-200 bg-white px-5 py-2.5 text-xs font-semibold text-zinc-700 shadow-xs transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
          >
            Fermer
          </button>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-brand/20 transition-all hover:bg-blue-700"
            >
              <span>Visiter le site en direct</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

