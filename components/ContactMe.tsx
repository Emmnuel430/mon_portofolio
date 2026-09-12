"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Copy, Check, Sparkles, Clock, ShieldCheck, Globe, ArrowRight } from "lucide-react";

export default function ContactMe() {
  const [copied, setCopied] = useState(false);
  const email = "emmanueldaho859@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      className="relative py-20 lg:py-28"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* En-tête de section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs font-semibold text-brand backdrop-blur-md dark:border-brand/30 dark:bg-brand/10">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Passons à l&apos;action</span>
          </div>

          <h2
            id="contact-title"
            className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl dark:text-white"
          >
            Donnons vie à votre prochain projet
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
            Vous avez une idée de produit, besoin d&apos;un renfort Full-Stack (Next.js / Laravel) ou d&apos;une intervention pédagogique ? Échangeons directement sans intermédiaire.
          </p>
        </div>

        {/* Cartes de contact à fort taux de conversion */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Option 1 : WhatsApp Direct */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="group relative flex flex-col justify-between rounded-2xl border border-emerald-500/20 bg-emerald-50/40 p-6 shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl dark:border-emerald-500/20 dark:bg-emerald-950/20"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-500/25">
                  <FaWhatsapp className="h-6 w-6" />
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Réponse rapide
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold text-zinc-900 dark:text-white">
                Échange direct sur WhatsApp
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Idéal pour un premier contact informel, discuter des contours de votre besoin ou envoyer une note vocale.
              </p>
              <p className="mt-4 font-mono text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                +225 07 59 95 79 56
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-500/10">
              <a
                href="https://wa.me/2250759957956"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition-all duration-200 hover:bg-emerald-700 hover:shadow-lg active:scale-[0.98]"
              >
                <span>Démarrer la discussion</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Option 2 : Email & Cadrage Formel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="group relative flex flex-col justify-between rounded-2xl border border-brand/20 bg-brand/5 p-6 shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl dark:border-brand/20 dark:bg-brand/10"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-md shadow-brand/25">
                  <FaEnvelope className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-brand/10 px-2.5 py-1 text-xs font-semibold text-brand dark:text-blue-300">
                  Cadrage & Devis
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold text-zinc-900 dark:text-white">
                Par e-mail professionnel
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Idéal pour partager un cahier des charges, une proposition de mission ou planifier une démo technique.
              </p>
              <div className="mt-4 flex items-center justify-between rounded-lg border border-zinc-200/80 bg-white/80 p-2.5 dark:border-zinc-800 dark:bg-zinc-900/80">
                <span className="truncate font-mono text-xs font-medium text-zinc-800 dark:text-zinc-200">
                  {email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 rounded-md bg-zinc-100 px-2 py-1 text-[11px] font-semibold text-zinc-700 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                  title="Copier l'adresse email"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copié !</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>Copier</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-brand/10">
              <a
                href={`mailto:${email}?subject=Demande%20de%20contact%20-%20Projet%20Web&body=Bonjour%20Joël%20Emmanuel,%0D%0A%0D%0AJe%20souhaite%20échanger%20avec%20vous%20au%20sujet%20d'un%20projet%20:`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-md shadow-brand/20 transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98]"
              >
                <span>M&apos;écrire directement</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Garanties & Réassurance basse */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-brand" />
            <span>Réponse garantie sous 24h ouvrées</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <span>Cadrage technique sans engagement</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-indigo-500" />
            <span>Disponible en Remote & sur site</span>
          </div>
        </div>
      </div>
    </section>
  );
}

