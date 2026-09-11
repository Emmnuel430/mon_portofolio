export interface SkillPillar {
  title: string;
  badge: string;
  tagline: string;
  description: string;
  highlight: string;
  items: string[];
  principal?: boolean;
}

export const skills: SkillPillar[] = [
  {
    title: "Architecture Back-End & Data",
    badge: "Scalabilité & Sécurité",
    tagline: "APIs robustes, logique métier stricte & intégrité des données",
    description:
      "Conception de back-ends fiables capables d'encaisser la charge. Modélisation relationnelle rigoureuse, sécurisation des accès (RBAC) et orchestration asynchrone des flux.",
    highlight: "Transactions sécurisées, zéro faille logique & APIs REST documentées",
    principal: true,
    items: [
      "Laravel",
      "PHP",
      "API REST",
      "MySQL",
      "PostgreSQL",
      "Supabase",
      "Prisma",
      "Node.js",
    ],
  },
  {
    title: "Expérience & Performance Front-End",
    badge: "Vitesse & Haute Fidélité",
    tagline: "Interfaces réactives & UI soignée",
    description:
      "Développement d'applications interactives rapides et fluides. Rendu hybride Next.js (SSR/SSG), intégration Pixel-Perfect avec Tailwind CSS et respect strict de l'accessibilité.",
    highlight: "Temps de chargement minimisé & responsive natif",
    principal: true,
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "daisyUI",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Pédagogie & Code Craftsmanship",
    badge: "Double Casquette Formateur",
    tagline: "Code structuré, documentation claire & culture transmission",
    description:
      "En tant que formateur, j'applique une exigence supérieure sur la lisibilité du code, la clarté architecturale et la documentation, facilitant la collaboration et la maintenance future.",
    highlight: "Communication sans jargon & onboarding accéléré",
    principal: false,
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "Vercel",
      "Cloudflare",
      "Amazon AWS S3",
      "Clerk",
      "Figma",
    ],
  },
];

