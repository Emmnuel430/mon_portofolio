import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section className="py-20">
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
          {skills.map((block) => (
            <div
              key={block.title}
              className="rounded-xl border border-slate-200 bg-surface dark:bg-base-200 p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="mb-4 text-lg font-semibold text-brand-dark">
                {block.title}
              </h3>

              <ul className="space-y-2">
                {block.items.map((item) => (
                  <li key={item} className="text-sm text-brand-muted">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
