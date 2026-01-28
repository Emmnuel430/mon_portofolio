import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "gest-dev",
    name: "Gest Dev",
    status: "in-progress",
    type: "SaaS – Éditeur de sites",
    stack: ["Next.js", "Tailwind", "Supabase"],
    summary:
      "Plateforme SaaS d’édition de contenu web avec gestion e-commerce et réservations.",
    context:
      "Créer un outil centralisé permettant de gérer des sites web dynamiques sans multiplier les déploiements. Permettre d'avoir un backoffice de gestion des produits de la boutique & permettre si voulu de gerer des prises de rdv ou reservations",
    problem:
      "Manque de flexibilité pour modifier le contenu et gérer les abonnements depuis une interface unique.",
    solution:
      "Un SaaS modulaire permettant la création et la gestion de pages, sections et contenus dynamiques avec gestion d'une boutique e-commerce et du scheduling",
    role: [
      "Architecture globale",
      "Frontend Next.js",
      "Connexion base Supabase",
      "Gestion des rôles et abonnements",
      "Création d’un éditeur de contenu dynamique",
    ],
    result:
      "Un outil évolutif appelé à devenir un générateur de sites web clé en main.",
    url: null,
    cover: "/images/projects/gest-dev/cover.png",
    logo: "/images/projects/gest-dev/logo.png",
    gallery: [],
  },
  {
    slug: "gest-vote",
    name: "Gest Vote",
    status: "completed",
    type: "Application métier",
    stack: ["React", "Bootstrap", "Laravel", "MySql"],
    summary:
      "Application de gestion et de dénombrement des voix post-élection.",
    context:
      "Besoin d’un système fiable pour centraliser et analyser les résultats de vote.",
    problem: "Traitement manuel long et risque d’erreurs lors du décompte.",
    solution:
      "Application web permettant l’import de votants depuis un fichier JSON et le calcul automatique des voix.",
    role: [
      "Conception API Laravel",
      "Frontend React",
      "Gestion des données électorales avec des restrictions des vues en fonction du role pour les utilisateurs",
    ],
    result: "Gain de temps significatif et réduction des erreurs humaines.",
    url: null,
    cover: "/images/projects/gest-vote/cover.png",
    logo: "/images/projects/gest-vote/logo.png",
    gallery: [
      "/images/projects/gest-vote/c1.png",
      "/images/projects/gest-vote/c2.png",
      "/images/projects/gest-vote/c3.png",
      "/images/projects/gest-vote/c4.png",
      "/images/projects/gest-vote/c5.png",
    ],
  },
  {
    slug: "moaye-hair",
    name: "Moaye Hair",
    status: "completed",
    type: "Site vitrine & e-commerce",
    stack: ["Next.js", "Tailwind", "Bootstrap", "Laravel", "MySql"],
    summary:
      "Site vitrine avec boutique en ligne pour la vente de perruques avec backoffice.",
    context: "Permettre à une entrepreneuse de vendre en ligne simplement.",
    problem: "Absence de présence digitale et de système de commande.",
    solution:
      "Site e-commerce avec commande et confirmation de commande par SMS plus backoffice pour édition du contenu de la vitrine.",
    role: [
      "Frontend Next.js",
      "Backend Laravel",
      "Gestion commandes & notifications",
    ],
    result: "Mise en ligne rapide et premiers retours clients positifs.",
    url: "https://www.moayehair.shop/accueil",
    cover: "/images/projects/moaye-hair/cover.png",
    logo: "/images/projects/moaye-hair/logo.png",
    gallery: [
      "/images/projects/moaye-hair/c1.png",
      "/images/projects/moaye-hair/c2.png",
      "/images/projects/moaye-hair/c3.png",
      "/images/projects/moaye-hair/c4.png",
      "/images/projects/moaye-hair/c5.png",
    ],
  },
];
