"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "motion/react";
import { Award, Users, Clock, Code } from "lucide-react";

const Marquee = dynamic(() => import("react-fast-marquee"), {
  ssr: false,
  loading: () => <div className="h-16" />,
});

const trustStats = [
  {
    icon: Code,
    value: "+15",
    label: "Projets Réalisés",
  },
  {
    icon: Users,
    value: "+30",
    label: "Etudians formés",
  },
  {
    icon: Award,
    value: "Full-Stack",
    label: "Du code au deploy",
  },
  {
    icon: Clock,
    value: "< 24h",
    label: "Réactivité & Suivi proactif",
  },
];

const logos = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/partners/logo-${i + 1}.png`,
  alt: `Partenaire ou client ${i + 1}`,
}));

export default function SocialProof() {
  return (
    <section
      aria-label="Preuves de confiance et métriques clés"
      className="relative my-12 overflow-hidden rounded-3xl border border-zinc-200/80 bg-white/70 py-10 shadow-xs backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ================= 1. MÉTRIQUES DE CONFIANCE ================= */}
        <div className="grid grid-cols-2 gap-6 pb-10 sm:grid-cols-4 md:gap-8 border-b border-zinc-100 dark:border-zinc-800/80">
          {trustStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand dark:bg-brand/20">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-3 text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
                  {stat.value}
                </div>
                <p className="mt-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ================= 2. BANDEAU LOGOS MARQUEE ================= */}
        <div className="pt-8">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Écosystèmes & Entreprises accompagnées
          </p>

          {/* Défilement continu avec fondu latéral progressif */}
          <div className="relative overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <Marquee gradient={false} speed={35} pauseOnHover className="py-2">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="mx-6 flex h-14 w-28 sm:mx-8 sm:w-36 items-center justify-center rounded-xl border border-zinc-200/50 bg-white/60 p-2 shadow-2xs backdrop-blur-xs transition-all duration-300 hover:border-brand/30 hover:bg-white hover:shadow-xs dark:border-zinc-800/50 dark:bg-zinc-800/40 dark:hover:bg-zinc-800"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={140}
                    height={50}
                    loading="lazy"
                    unoptimized
                    className="max-h-9 w-auto object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-105"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
