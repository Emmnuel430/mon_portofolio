// src/data/projects.ts
export const projects = [
  {
    slug: "gest-dev",
    name: "Gest Dev",
    type: "SaaS – Éditeur de sites",
    stack: ["Next.js", "Tailwind", "Supabase"],
    summary:
      "Plateforme SaaS d’édition de contenu web avec gestion e-commerce et réservations.",
    context:
      "Créer un outil centralisé permettant de gérer des sites web dynamiques sans multiplier les déploiements.",
    problem:
      "Manque de flexibilité pour modifier le contenu et gérer les abonnements depuis une interface unique.",
    solution:
      "Un SaaS modulaire permettant la création et la gestion de pages, sections et contenus dynamiques.",
    role: [
      "Architecture globale",
      "Frontend Next.js",
      "Connexion base Supabase",
      "Gestion des rôles et abonnements",
    ],
    result:
      "Un outil évolutif appelé à devenir un générateur de sites web clé en main.",
    url: null,
  },
  {
    slug: "gest-vote",
    name: "Gest Vote",
    type: "Application métier",
    stack: ["React", "Tailwind", "Bootstrap", "Laravel"],
    summary:
      "Application de gestion et de dénombrement des voix post-élection.",
    context:
      "Besoin d’un système fiable pour centraliser et analyser les résultats de vote.",
    problem: "Traitement manuel long et risque d’erreurs lors du décompte.",
    solution:
      "Application web permettant l’import de votants depuis un fichier JSON et le calcul automatique.",
    role: [
      "Conception API",
      "Frontend React",
      "Gestion des données électorales",
    ],
    result: "Gain de temps significatif et réduction des erreurs humaines.",
    url: null,
  },
  {
    slug: "moaye-hair",
    name: "Moaye Hair",
    type: "Site vitrine & e-commerce",
    stack: ["Next.js", "Laravel"],
    summary: "Site vitrine avec boutique en ligne pour la vente de perruques.",
    context: "Permettre à une entrepreneuse de vendre en ligne simplement.",
    problem: "Absence de présence digitale et de système de commande.",
    solution: "Site e-commerce avec commande et confirmation par SMS.",
    role: [
      "Frontend Next.js",
      "Backend Laravel",
      "Gestion commandes & notifications",
    ],
    result: "Mise en ligne rapide et premiers retours clients positifs.",
    url: "https://www.moayehair.shop/accueil",
  },
];
