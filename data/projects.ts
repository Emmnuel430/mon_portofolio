import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "gest-garage",
    name: "Gest Garage",
    status: "completed",
    type: "Application métier",
    stack: ["React", "Bootstrap", "Laravel", "MySQL"],
    summary:
      "Solution ERP sur mesure pour digitaliser l'ensemble des flux opérationnels et financiers d'un garage automobile indépendant.",
    context:
      "Moderniser la gestion globale d'un atelier mécanique en centralisant le suivi des véhicules, des équipes et de la facturation.",
    problem:
      "Processus 100% papier provoquant des pertes de données, des erreurs de saisie et un manque de visibilité sur la rentabilité de l'atelier.",
    solution:
      "Une plateforme web intuitive qui automatise le cycle de vie du véhicule en atelier, de la prise en charge à la facturation finale.",
    role: [
      "Architecture globale & Modélisation BD",
      "Développement API REST (Laravel)",
      "Interface Utilisateur Dynamique (React)",
      "Système RBAC (Gestion fine des rôles & permissions)",
      "Module de suivi d'atelier & assignation des mécaniciens",
      "Moteur de facturation automatisée",
    ],
    result:
      "Un MVP solide et évolutif, structuré pour une transition future vers un modèle SaaS multi-locataire.",
    technicalChallenge:
      "Synchroniser en temps réel le planning de l'atelier, la disponibilité des mécaniciens et la génération des pièces comptables sans friction.",
    architectureRationale:
      "Découplage total avec une API robuste sous Laravel (sécurité et gestion des droits) et un frontend réactif sous React pour maximiser la productivité des opérateurs.",
    metrics:
      "Zéro papier, réduction drastique des erreurs de facturation et suivi précis des performances par mécanicien.",
    url: null,
    cover: "/images/projects/gest-garage/c1.png",
    logo: "/images/projects/gest-garage/logo.png",
    gallery: [
      "/images/projects/gest-garage/c1.png",
      "/images/projects/gest-garage/c2.png",
      "/images/projects/gest-garage/c3.png",
      "/images/projects/gest-garage/c4.png",
      "/images/projects/gest-garage/c5.png",
    ],
  },
  {
    slug: "gest-vote",
    name: "Gest Vote",
    status: "completed",
    type: "Application métier & Dépouillement",
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
    technicalChallenge:
      "Traitement intègre de volumétries électorales sensibles : parsing de formats JSON complexes et calcul algorithmique instantané des voix sans risque de régression.",
    architectureRationale:
      "API Laravel avec transactions SQL strictes et policies RBAC fines pour garantir l'intégrité et la traçabilité des scrutins, interfacé avec React pour une expérience réactive.",
    metrics:
      "100% de conformité sur les calculs électoraux, zéro divergence constatée et division par 6 du délai de consolidation des résultats.",
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
    status: "working-on",
    type: "Plateforme E-Commerce & Backoffice",
    stack: ["Next.js", "React", "Tailwind", "Bootstrap", "Laravel", "MySql"],
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
    technicalChallenge:
      "Mettre en place un tunnel de commande sans friction avec déclenchement asynchrone de notifications SMS transactionnelles et synchronisation du back-office en temps réel.",
    architectureRationale:
      "Next.js optimisé pour le SEO et le taux de conversion mobile, orchestré avec une API Laravel pour la gestion asynchrone des queues d'envoi SMS et la persistance des commandes.",
    metrics:
      "Score Lighthouse 90+, déploiement complet en 1 mois et 100% des commandes notifiées par SMS.",
    url: "https://www.moayehair.shop",
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
  {
    slug: "tdi",
    name: "Torah Diffusion Internationale",
    status: "completed",
    type: "Plateforme Web E-Commerce & LMS",
    stack: ["Next.js", "React", "Tailwind", "Bootstrap", "Laravel", "MySQL"],
    summary:
      "Écosystème numérique complet combinant une vitrine institutionnelle, une boutique e-commerce spécialisée et un espace de formation en ligne.",
    context:
      "Accompagner la transformation digitale d'une organisation religieuse internationale afin de centraliser ses ventes de produits littéraires et le suivi de sa communauté d'apprenants.",
    problem:
      "Inexistence d'un canal de vente en ligne, absence d'outils de gestion pour les parcours éducatifs et traitement manuel des requêtes communautaires.",
    solution:
      "Développement d'un CMS sur mesure intégrant un tunnel d'achat e-commerce automatisé (avec notifications mails), un portail de cours et un backoffice d'administration global.",
    role: [
      "Architecture Headless & Modélisation",
      "Développement Frontend ISR/SSR (Next.js & Tailwind)",
      "Création de l'API REST E-Commerce & Authentification (Laravel)",
      "Conception de l'Espace Étudiant & module LMS",
      "Système de traitement automatisé des demandes de prières",
      "Gestionnaire de catalogue (Livres, Formations, Événements)",
    ],
    result:
      "Déploiement réussi avec une forte adhésion de la communauté internationale dès le lancement et automatisation complète des flux métiers.",
    technicalChallenge:
      "Faire cohabiter un catalogue e-commerce performant, un espace d'apprentissage sécurisé et un module de messagerie spirituelle tout en garantissant des temps de chargement optimaux.",
    architectureRationale:
      "Choix d'une architecture découplée (Headless) : Next.js pour un SEO irréprochable et une vitrine ultra-rapide côté utilisateur, adossé à un backend Laravel pour la robustesse des processus métiers et la sécurité des données.",
    metrics:
      "Centralisation de 100% des inscriptions aux formations, automatisation des confirmations de commande et gestion fluide de flux complexes (commandes, prières, étudiants).",
    url: "https://www.torahdiffusion.ci",
    cover: "/images/projects/tdi/c1.png",
    logo: "/images/projects/tdi/logo.png",
    gallery: [
      "/images/projects/tdi/c1.png",
      "/images/projects/tdi/c2.png",
      "/images/projects/tdi/c3.png",
      "/images/projects/tdi/c4.png",
      "/images/projects/tdi/c5.png",
    ],
  },
];
