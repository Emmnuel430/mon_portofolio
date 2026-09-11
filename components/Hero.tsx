"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowRight,
  FileText,
  Sparkles,
  Code2,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="accueil"
      aria-label="Présentation et proposition de valeur"
      className="relative overflow-hidden py-12 md:py-16"
    >
      {/* Halo de lumière d'arrière-plan (Glow moderne & subtil) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-linear-to-tr from-brand/25 to-sky-400/20 blur-3xl dark:from-brand/15 dark:to-cyan-500/10"
      />

      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* =========================================================================
            COLONNE GAUCHE : ACCROCHE & CONVERSION BUSINESS
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start text-left lg:col-span-7"
        >
          {/* Badge statut disponibilité & double expertise */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50/80 px-3.5 py-1.5 text-xs font-medium text-emerald-700 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-emerald-500/40 dark:bg-emerald-950/40 dark:text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>Disponible pour missions freelance & projets ambitieux</span>
          </div>

          {/* Nom & Titre avec mise en valeur */}
          <div className="mt-5">
            <p className="text-sm font-semibold tracking-widest text-brand uppercase">
              D. Joël Emmanuel DAHO
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-white">
              Développeur Full-Stack{" "}
              <span className="bg-linear-to-r from-brand via-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-300">
                React & Laravel
              </span>
            </h1>
          </div>

          {/* Proposition de valeur business & pédagogie */}
          <p className="mt-5 text-lg leading-relaxed text-zinc-600 sm:text-xl dark:text-zinc-300">
            Je conçois des applications web robustes, scalables et centrées sur
            l&apos;impact business. Grâce à ma double casquette de{" "}
            <strong className="font-semibold text-zinc-900 dark:text-white">
              Développeur & Formateur
            </strong>
            , j&apos;apporte une clarté d&apos;ingénierie, un code
            rigoureusement structuré et une communication transparente de
            l&apos;idée à la mise en production.
          </p>

          {/* Micro-pills de réassurance technique */}
          <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200/80 bg-white/70 px-3 py-1.5 text-xs font-semibold text-zinc-700 shadow-xs backdrop-blur-sm transition-all duration-200 hover:border-brand/40 hover:text-brand dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:border-brand/50">
              <Code2 className="h-3.5 w-3.5 text-brand" />
              Clean Architecture & Tests
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200/80 bg-white/70 px-3 py-1.5 text-xs font-semibold text-zinc-700 shadow-xs backdrop-blur-sm transition-all duration-200 hover:border-brand/40 hover:text-brand dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:border-brand/50">
              <GraduationCap className="h-3.5 w-3.5 text-indigo-500" />
              Culture Produit & Transmission
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200/80 bg-white/70 px-3 py-1.5 text-xs font-semibold text-zinc-700 shadow-xs backdrop-blur-sm transition-all duration-200 hover:border-brand/40 hover:text-brand dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:border-brand/50">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              UI/UX Haute Performance
            </span>
          </div>

          {/* CTA & Actions stratégiques */}
          <div className="mt-8 flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:items-center">
            {/* CTA Principal : Conversion contact */}
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-brand/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand active:translate-y-0"
            >
              <span>Parlons de votre projet</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </a>

            {/* CTA Secondaire : Téléchargement CV */}
            <a
              href="https://drive.google.com/uc?export=download&id=1A5ZyzVfKgTFG9ZmL2ZECfYFDymCOZXfz"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300/80 bg-white/80 px-6 py-3.5 text-sm font-semibold text-zinc-800 shadow-xs backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-zinc-50 hover:text-zinc-900 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-800/90 dark:hover:text-white"
            >
              <FileText className="h-4 w-4 text-zinc-500 transition-colors duration-200 group-hover:text-brand dark:text-zinc-400 dark:group-hover:text-brand" />
              <span>Consulter mon CV</span>
            </a>
          </div>
        </motion.div>

        {/* =========================================================================
            COLONNE DROITE : VISUEL AVEC GLASSOBJECT & PREUVE SOCIALE
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative flex items-center justify-center lg:col-span-5"
        >
          {/* Cadre photo avec gradient subtil et bordure moderne */}
          <div className="relative mx-auto w-full max-w-sm sm:max-w-md">
            {/* Halo lumineux d'accentuation sous la photo */}
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-3xl bg-linear-to-tr from-brand/30 via-indigo-500/20 to-emerald-400/20 opacity-70 blur-xl transition-all duration-500 group-hover:opacity-100"
            />

            <div className="relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/60 p-2 shadow-2xl backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/60">
              <Image
                src="/images/2222.png"
                alt="Joël Emmanuel Daho – Développeur Full-Stack & Formateur"
                width={480}
                height={640}
                priority
                unoptimized
                className="h-auto w-full rounded-xl object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
              />
            </div>

            {/* Badge flottant "Preuve / Confiance" en Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-5 -left-3 sm:-left-6 rounded-xl border border-zinc-200/80 bg-white/90 p-3.5 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900/90"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand dark:bg-brand/20">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-900 dark:text-white">
                    Code maintenable & documenté
                  </p>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    Transmission & Best practices
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
