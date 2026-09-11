export type Project = {
  slug: string;
  name: string;
  status: "completed" | "working-on" | "planned";
  stack: StackKey[];
  type: string;
  summary: string;
  context: string;
  problem: string;
  solution: string;
  role: string[];
  result: string;
  url: string | null;
  cover: string;
  logo: string;
  gallery: string[];
  technicalChallenge?: string;
  architectureRationale?: string;
  metrics?: string;
};

export type StackKey =
  | "React"
  | "Laravel"
  | "Bootstrap"
  | "Tailwind"
  | "Tailwind CSS"
  | "Next.js"
  | "TypeScript"
  | "Node.js"
  | "PHP"
  | "HTML"
  | "CSS"
  | "Git"
  | "MySql"
  | "MySQL"
  | "Supabase"
  | "JavaScript"
  | "Django"
  | "Prisma"
  | "API REST"
  | "GitHub"
  | "GitLab";

export type StackAvatarsProps = {
  stack: StackKey[] | string[];
  max?: number;
};

export type StackBadgeProps = {
  tech: StackKey;
  size?: "sm" | "md";
};
