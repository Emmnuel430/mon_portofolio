"use client";

import { skills } from "@/data/skills";
import { motion } from "motion/react";
import { StackIcon } from "./Avatars";

export default function Skills() {
  return (
    <section className="py-20" id="competences">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Titre */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
            Compétences
          </h2>
          <p className="mt-3 text-brand-muted">
            Des technologies éprouvées pour construire des produits fiables
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((block, index) => (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              key={block.title}
              className={`rounded-xl border p-6 transition
                ${
                  block.principal
                    ? "border-brand/40 bg-brand/2 shadow-sm"
                    : "border-slate-200"
                }
                  bg-surface dark:bg-base-200 hover:-translate-y-1 hover:shadow-md`}
            >
              <h3
                className={`mb-1 text-lg font-semibold text-brand-dark ${
                  block.principal
                    ? "inline-block w-fit rounded-full bg-brand/10 px-3 py-1 text-md font-medium text-brand"
                    : ""
                }`}
              >
                {block.title}
              </h3>
              {block.principal && (
                <p className="text-xs text-brand-muted">
                  {/* Technologies utilisées en production */}
                  {/* ou */}
                  Stacks les plus utilisées sur des projets concrets
                </p>
              )}

              <ul className="space-y-2 mt-4">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="group grid grid-cols-[20px_1fr] items-center gap-2 text-brand-muted"
                  >
                    <span className="transition group-hover:scale-110">
                      <StackIcon tech={item} />
                    </span>
                    <span className="group-hover:text-brand-dark transition">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
