"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="accueil">
      <div className="py-10 md:grid md:grid-cols-2 md:items-center md:gap-12 lg:min-h-[80vh] lg:px-8">
        {/* LEFT — Texte */}
        <div className="max-w-xl text-left">
          {/* Nom */}
          <p className="text-lg font-medium text-brand">
            D. Joël Emmanuel DAHO
          </p>

          {/* Métier */}
          <h1 className="mt-2 font-bold tracking-tight text-gray-900 dark:text-white text-4xl sm:text-5xl">
            Développeur Full-Stack{" "}
            <span className="text-brand">React & Laravel</span>
          </h1>

          {/* Valeur */}
          <p className="mt-4 text-base text-gray-700 dark:text-gray-300 sm:text-lg">
            Je conçois des applications web claires, performantes et
            maintenables.
          </p>

          {/* Positionnement freelance */}
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            De l’idée au produit fini : back-end, front-end et architecture
            propre.
          </p>

          {/* CTA */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="btn bg-brand text-white shadow-lg hover:opacity-80 transition duration-300 ease-in-out rounded-md"
            >
              Parlons de votre projet
            </a>

            <button
              className="btn btn-soft shadow-lg transition duration-300 ease-in-out rounded-md"
              onClick={() =>
                window.open(
                  "https://drive.google.com/uc?export=download&id=1A5ZyzVfKgTFG9ZmL2ZECfYFDymCOZXfz",
                  "_blank",
                )
              }
            >
              Voir mon CV
            </button>
          </div>
        </div>

        {/* RIGHT — Visuel */}
        <div className="mt-10 hidden md:flex items-center justify-center">
          {/* Placeholder visuel */}
          {/* <div className="relative w-full max-w-md rounded-xl bg-base-200 p-6 shadow-inner">
            <pre className="text-xs text-gray-300">
{`// Clean architecture
export function buildProduct() {
  return scalable &&
         maintainable &&
         performant
}`}
            </pre>
          </div> */}
          <Image
            src="/images/2222.png"
            alt="Joël Emmanuel Daho – Développeur Full-Stack"
            className="w-full max-w-sm rounded-xl shadow-lg"
            width={384}
            height={576}
            priority
          />
        </div>
      </div>
    </section>
  );
}
