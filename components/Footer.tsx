import { socials } from "@/data/socials";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "#accueil", label: "Accueil" },
    { href: "#competences", label: "Compétences" },
    { href: "#projets", label: "Projets" },
    { href: "#a-propos", label: "À propos" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="border-t border-zinc-200/80 bg-white dark:border-zinc-800/80 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* COLONNE 1 : MARQUE & POSITIONNEMENT */}
          <div className="lg:col-span-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <Image
                src="/images/logo.png"
                alt="Logo Joël Emmanuel Daho"
                width={80}
                height={40}
                className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                unoptimized
              />
              <span className="text-lg font-bold text-zinc-900 dark:text-white">
                D. Joël Emmanuel DAHO
              </span>
            </Link>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Développeur Full-Stack spécialisé en Next.js & Laravel, et
              formateur passionné. Je transforme vos défis techniques en
              applications web fiables, performantes et scalables.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50/60 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Ouvert aux nouvelles opportunités & missions</span>
            </div>
          </div>

          {/* COLONNE 2 : NAVIGATION RAPIDE */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Navigation
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1 text-zinc-600 transition-colors hover:text-brand dark:text-zinc-400 dark:hover:text-white"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLONNE 3 : RÉSEAUX & CONNECTIVITÉ */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Réseaux & Échanges
            </p>
            {/* <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
              Retrouvez mes partages techniques et tutoriels.
            </p> */}
            <div className="mt-4 flex flex-wrap gap-2.5">
              {socials.map(({ key, icon: Icon, href }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Profil ${key}`}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/80 bg-zinc-50/80 text-zinc-700 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:bg-brand/10 hover:text-brand dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-300 dark:hover:border-brand/40 dark:hover:bg-zinc-800 dark:hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand transition hover:underline"
              >
                <span>Démarrer une collaboration</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* LIGNE BAS DE FOOTER */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-100 pt-8 text-xs text-zinc-500 sm:flex-row dark:border-zinc-800/80 dark:text-zinc-400">
          <p>© {currentYear} D. Joël Emmanuel DAHO. Tous droits réservés.</p>
          <p className="flex items-center gap-1">
            Conçu avec rigueur &amp; ❤ en Next.js 16
          </p>
        </div>
      </div>
    </footer>
  );
}
