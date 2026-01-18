import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-color-surface dark:bg-base-100">
      <div className="py-10 md:grid md:grid-cols-2 md:items-center md:gap-12 lg:min-h-screen lg:px-8">
        
        {/* LEFT — Texte */}
        <div className="max-w-xl text-left">
          {/* Nom */}
          <p className="text-lg font-medium text-brand">
            Joël Emmanuel Daho
          </p>

          {/* Métier */}
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Développeur Full-Stack{" "}
            <span className="text-brand">React & Laravel</span>
          </h1>

          {/* Valeur */}
          <p className="mt-4 text-base text-gray-700 dark:text-gray-300 sm:text-lg">
            Je conçois des applications web claires, performantes et maintenables.
          </p>

          {/* Positionnement freelance */}
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            De l’idée au produit fini : back-end, front-end et architecture propre.
          </p>

          {/* CTA */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="btn btn-brand"
            >
              Voir mes projets
            </a>

            <a
              href="#contact"
              className="btn btn-outline"
            >
              Parlons de votre projet
            </a>
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
            width={800}
            height={1200}
            unoptimized
          />

        </div>
      </div>
    </section>
  );
}
