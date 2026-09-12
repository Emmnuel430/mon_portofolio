"use client";

import { motion } from "motion/react";
import {
  Sparkles,
  Code2,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  Terminal,
} from "lucide-react";

export default function About() {
  return (
    <section
      className="relative py-20 lg:py-28"
      id="a-propos"
      aria-labelledby="a-propos-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* =========================================================================
              COLONNE GAUCHE : TEXTE STRATÉGIQUE & VALEUR AJOUTÉE
             ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-1.5 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs font-semibold text-brand backdrop-blur-md dark:border-brand/30 dark:bg-brand/10">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Philosophie & Vision</span>
            </div>

            <h2
              className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl dark:text-white"
              id="a-propos-title"
            >
              L&apos;alliance de la rigueur et de la clarté pédagogique
            </h2>

            <p className="mt-6 text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-300">
              Développeur Full-Stack passionné et formateur autodidacte,
              j&apos;aide les entreprises et fondateurs à concrétiser leurs
              ambitions numériques. Ma double casquette me confère un atout
              décisif :{" "}
              <strong className="font-semibold text-zinc-900 dark:text-white">
                concevoir des architectures solides tout en assurant une
                communication limpide, sans jargon technique inutile
              </strong>
              .
            </p>

            <div className="mt-8 space-y-4">
              {/* Carte Valeur 1 : Autonomie & Rigueur */}
              <div className="group flex items-start gap-4 rounded-xl border border-zinc-200/70 bg-white/60 p-4 shadow-2xs backdrop-blur-xs transition-all duration-200 hover:border-brand/30 hover:bg-white hover:shadow-xs dark:border-zinc-800/70 dark:bg-zinc-900/50 dark:hover:bg-zinc-800/60">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand dark:bg-brand/20">
                  <Code2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                    Autonomie complète & Clean Architecture
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                    De la modélisation de base de données à l&apos;intégration
                    front-end soignée (Next.js & Laravel), je livre des
                    solutions clé en main respectant les standards de production
                    les plus exigeants.
                  </p>
                </div>
              </div>

              {/* Carte Valeur 2 : Clarté & Pédagogie */}
              <div className="group flex items-start gap-4 rounded-xl border border-zinc-200/70 bg-white/60 p-4 shadow-2xs backdrop-blur-xs transition-all duration-200 hover:border-brand/30 hover:bg-white hover:shadow-xs dark:border-zinc-800/70 dark:bg-zinc-900/50 dark:hover:bg-zinc-800/60">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500 dark:bg-indigo-500/20">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                    Transmission & Code documenté
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                    En tant que formateur, je refuse la dette technique opaque :
                    le code est structuré, testable et documenté pour
                    qu&apos;une nouvelle recrue ou votre équipe puisse le faire
                    évoluer immédiatement.
                  </p>
                </div>
              </div>

              {/* Carte Valeur 3 : Orientation ROI & Pérennité */}
              <div className="group flex items-start gap-4 rounded-xl border border-zinc-200/70 bg-white/60 p-4 shadow-2xs backdrop-blur-xs transition-all duration-200 hover:border-brand/30 hover:bg-white hover:shadow-xs dark:border-zinc-800/70 dark:bg-zinc-900/50 dark:hover:bg-zinc-800/60">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                    Pragmatisme & Orientation Résultats
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Pas de sur-ingénierie : je choisis toujours les outils
                    éprouvés les plus rapides à mettre sur le marché tout en
                    garantissant des performances et une sécurité sans
                    compromis.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =========================================================================
              COLONNE DROITE : TERMINAL DE DEV INTERACTIF & ENGAGEMENT
             ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-5 shadow-2xl">
              {/* Header du terminal macOS */}
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                  <Terminal className="h-3.5 w-3.5 text-brand" />
                  <span>daho-profile.config.ts</span>
                </div>
                <div className="w-10" />
              </div>

              {/* Contenu de code stylisé */}
              <div className="pt-4 font-mono text-xs leading-relaxed text-zinc-300">
                <p className="text-zinc-500">
                  {"// Profil & Engagement qualité"}
                </p>
                <p className="mt-2">
                  <span className="text-indigo-400">export const</span>{" "}
                  <span className="text-yellow-400">engineer</span> = {"{"}
                </p>
                <div className="pl-4 space-y-1 mt-1">
                  <p>
                    <span className="text-zinc-400">name:</span>{" "}
                    <span className="text-emerald-400">
                      &quot;D. Joël Emmanuel DAHO&quot;
                    </span>
                    ,
                  </p>
                  <p>
                    <span className="text-zinc-400">expertise:</span> [
                    <span className="text-emerald-400">
                      &quot;Full-Stack Dev&quot;
                    </span>
                    ,{" "}
                    <span className="text-emerald-400">
                      &quot;Tech Trainer&quot;
                    </span>
                    ],
                  </p>
                  <p>
                    <span className="text-zinc-400">coreStack:</span> [
                    <span className="text-cyan-400">&quot;Next.js&quot;</span>,{" "}
                    <span className="text-cyan-400">&quot;React&quot;</span>,{" "}
                    <span className="text-red-400">&quot;Laravel&quot;</span>,{" "}
                    <span className="text-blue-400">&quot;MySQL&quot;</span>],
                  </p>
                  <p>
                    <span className="text-zinc-400">deliverables:</span> {"{"}
                  </p>
                  <div className="pl-4 space-y-1">
                    <p>
                      <span className="text-zinc-400">cleanCode:</span>{" "}
                      <span className="text-purple-400">true</span>,
                    </p>
                    <p>
                      <span className="text-zinc-400">documented:</span>{" "}
                      <span className="text-purple-400">true</span>,
                    </p>
                    <p>
                      <span className="text-zinc-400">responsiveDesign:</span>{" "}
                      <span className="text-purple-400">true</span>,
                    </p>
                  </div>
                  <p className="text-zinc-400">{"}"},</p>
                  <p>
                    <span className="text-zinc-400">availability:</span>{" "}
                    <span className="text-emerald-400">
                      &quot;Freelance / Missions&quot;
                    </span>
                    ,
                  </p>
                </div>
                <p className="mt-1">{"};"}</p>
              </div>

              {/* Badge d'engagement bas de terminal */}
              <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/80 p-3">
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>
                    Prêt à rejoindre votre sprint ou à porter votre projet de A
                    à Z.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
