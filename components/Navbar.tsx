"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("accueil");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sections = useMemo(
    () => [
      { id: "accueil", title: "Accueil" },
      { id: "competences", title: "Compétences" },
      { id: "projets", title: "Projets" },
      { id: "a-propos", title: "À propos" },
      { id: "contact", title: "Contact" },
    ],
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-200/80 bg-white/85 py-3 shadow-xs backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-950/85"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* LOGO */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-opacity hover:opacity-90"
          aria-label="Accueil Joël Emmanuel Daho"
        >
          <Image
            src="/images/logo.png"
            alt="Logo Joël Emmanuel Daho"
            width={80}
            height={40}
            className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
            unoptimized
          />
          <span className="font-bold tracking-tight text-zinc-900 sm:inline-block dark:text-white">
            Joël Daho<span className="text-brand">.</span>
          </span>
        </Link>

        {/* NAVIGATION DESKTOP */}
        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-1 rounded-full border border-zinc-200/80 bg-white/80 px-4 py-1.5 shadow-2xs backdrop-blur-md lg:flex dark:border-zinc-800/80 dark:bg-zinc-900/70"
        >
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`relative rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-brand text-white shadow-xs"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                }`}
              >
                {section.title}
              </a>
            );
          })}
        </nav>

        {/* ACTIONS DROITE (Theme Switcher + CTA + Mobile Toggle) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeSwitcher />

          {/* Bouton CTA Desktop */}
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-xl bg-zinc-900 px-4 py-2 text-xs font-semibold text-white shadow-xs transition-all duration-200 hover:bg-brand hover:shadow-md active:scale-95 sm:inline-flex dark:bg-zinc-800 dark:hover:bg-brand"
          >
            <span>Me contacter</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          {/* Bouton Menu Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/80 bg-white text-zinc-700 shadow-2xs transition-colors hover:bg-zinc-50 lg:hidden dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* TIROIR DE NAVIGATION MOBILE */}
      {mobileMenuOpen && (
        <div className="border-b border-zinc-200/80 bg-white/95 px-4 pt-3 pb-6 shadow-xl backdrop-blur-2xl lg:hidden dark:border-zinc-800 dark:bg-zinc-950/95 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1.5">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-brand/10 text-brand dark:bg-brand/20 dark:text-blue-300"
                      : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
                  }`}
                >
                  {section.title}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-brand py-3 text-sm font-semibold text-white shadow-md shadow-brand/20"
            >
              <span>Me contacter</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

