"use client";

import { skills } from "@/data/skills";
import { motion } from "motion/react";
import { StackIcon } from "./Avatars";
import {
  Server,
  Layout,
  GraduationCap,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function Skills() {
  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Server className="h-5 w-5 text-red-500" />;
      case 1:
        return <Layout className="h-5 w-5 text-brand" />;
      case 2:
      default:
        return <GraduationCap className="h-5 w-5 text-indigo-500" />;
    }
  };

  return (
    <section
      className="relative py-20 lg:py-28"
      id="competences"
      aria-labelledby="competences-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Titre & Proposition de valeur */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs font-semibold text-brand backdrop-blur-md dark:border-brand/30 dark:bg-brand/10">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Piliers d&apos;expertise technique</span>
          </div>
          <h2
            className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl dark:text-white"
            id="competences-title"
          >
            Orienté Solutions & Qualité de Code
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
            Une structure technique articulée autour de 3 piliers
            complémentaires pour délivrer des applications pérennes,
            performantes et facilement maintenables.
          </p>
        </div>

        {/* Grille des 3 Piliers */}
        <div className="grid gap-8 lg:grid-cols-3">
          {skills.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/80 p-6 shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-brand/40"
            >
              <div>
                {/* Header du pilier */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200/80 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-800/80">
                    {getPillarIcon(index)}
                  </div>
                  <span className="rounded-full border border-zinc-200/80 bg-zinc-100/80 px-2.5 py-1 text-[11px] font-semibold text-zinc-700 backdrop-blur-xs dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-300">
                    {pillar.badge}
                  </span>
                </div>

                {/* Titre & Tagline */}
                <h3 className="mt-5 text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-brand dark:text-blue-400">
                  {pillar.tagline}
                </p>

                {/* Description de valeur */}
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {pillar.description}
                </p>

                {/* Liste des technologies avec micro-interactions */}
                <div className="mt-6 border-t border-zinc-100 pt-5 dark:border-zinc-800/80">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3">
                    Technologies & Écosystème
                  </p>
                  <ul className="grid grid-cols-2 gap-2.5">
                    {pillar.items.map((item) => (
                      <li
                        key={item}
                        className="group/item flex items-center gap-2 rounded-lg border border-zinc-100 bg-zinc-50/60 px-2.5 py-1.5 text-xs text-zinc-700 transition-all duration-200 hover:border-brand/30 hover:bg-white hover:text-zinc-900 hover:shadow-xs dark:border-zinc-800/60 dark:bg-zinc-800/40 dark:text-zinc-300 dark:hover:border-brand/40 dark:hover:bg-zinc-800 dark:hover:text-white"
                      >
                        <span className="shrink-0 transition-transform duration-200 group-hover/item:scale-110">
                          <StackIcon tech={item} />
                        </span>
                        <span className="truncate font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Atout / Garantie en bas de carte */}
              <div className="mt-6 rounded-xl border border-zinc-200/60 bg-zinc-50/70 p-3 text-xs dark:border-zinc-800/60 dark:bg-zinc-800/30">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                  <span className="leading-snug text-zinc-700 dark:text-zinc-300 font-medium">
                    {pillar.highlight}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
