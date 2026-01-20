import Image from "next/image";

export default function About() {
  return (
    <section className="py-20" id="a-propos">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Texte */}
          <div>
            <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
              À propos
            </h2>

            <p className="mt-6 text-brand-muted">
              Développeur{" "}
              <strong className="font-semibold text-brand-dark">
                orienté solution
              </strong>
              , j’accorde une grande importance à la
              <strong className="font-semibold text-brand-dark">
                {" "}
                lisibilité du code
              </strong>
              , à la{" "}
              <strong className="font-semibold text-brand-dark">
                communication
              </strong>{" "}
              et à la{" "}
              <strong className="font-semibold text-brand-dark">
                pérennité des projets
              </strong>
              .
            </p>

            <p className="mt-4 text-brand-muted">
              J’accompagne mes clients de
              <strong className="font-semibold text-brand-dark">
                {" "}
                l’idée au produit fini
              </strong>
              , en concevant des applications
              <strong className="font-semibold text-brand-dark">
                {" "}
                claires
              </strong>
              ,
              <strong className="font-semibold text-brand-dark">
                {" "}
                maintenables
              </strong>{" "}
              et adaptées à leurs{" "}
              <strong className="font-semibold text-brand-dark">
                besoins réels
              </strong>
              .
            </p>

            <p className="mt-4 text-brand-muted">
              Développeur web et{" "}
              <strong className="font-semibold text-brand-dark">
                formateur
              </strong>
              , j’ai déjà conçu{" "}
              <strong className="font-semibold text-brand-dark">
                plus d’une dizaine de projets
              </strong>{" "}
              allant du site vitrine aux{" "}
              <strong className="font-semibold text-brand-dark">
                applications métier
              </strong>{" "}
              et <strong className="font-semibold text-brand-dark">SaaS</strong>
              . Mon approche repose sur une{" "}
              <strong className="font-semibold text-brand-dark">
                architecture propre
              </strong>
              ,{" "}
              <strong className="font-semibold text-brand-dark">
                l’automatisation
              </strong>{" "}
              et une{" "}
              <strong className="font-semibold text-brand-dark">
                pédagogie simple et visuelle
              </strong>
              .
            </p>
          </div>

          {/* Visuel */}
          <div className="flex justify-center md:justify-end">
            {/* Option 1 : Photo */}
            <div className="overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/images/2222.png" // optionnel
                alt="Photo de Joël Emmanuel Daho"
                width={1024}
                height={1080}
                className="h-90 w-auto"
                priority
              />
            </div>

            {/* Option 2 : Illustration (remplacer Image par SVG si besoin) */}
          </div>
        </div>
      </div>
    </section>
  );
}
