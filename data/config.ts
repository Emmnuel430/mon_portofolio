import { StackKey } from "@/lib/types";
import {
  FaReact,
  FaLaravel,
  FaBootstrap,
  FaNodeJs,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMysql,
  SiSupabase,
} from "react-icons/si";

export const STACKS: Record<
  StackKey | string,
  {
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
  }
> = {
  React: {
    label: "React",
    icon: FaReact,
    color: "text-cyan-400",
  },
  Laravel: {
    label: "Laravel",
    icon: FaLaravel,
    color: "text-red-500",
  },
  Bootstrap: {
    label: "Bootstrap",
    icon: FaBootstrap,
    color: "text-purple-500",
  },
  Tailwind: {
    label: "Tailwind",
    icon: SiTailwindcss,
    color: "text-sky-400",
  },
  "Next.js": {
    label: "Next.js",
    icon: SiNextdotjs,
    color: "text-black dark:text-white",
  },
  TypeScript: {
    label: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-500",
  },
  "Node.js": {
    label: "Node.js",
    icon: FaNodeJs,
    color: "text-green-500",
  },
  PHP: {
    label: "PHP",
    icon: FaPhp,
    color: "text-indigo-400",
  },
  HTML: {
    label: "HTML",
    icon: FaHtml5,
    color: "text-orange-500",
  },
  CSS: {
    label: "CSS",
    icon: FaCss3Alt,
    color: "text-blue-400",
  },
  Git: {
    label: "Git",
    icon: FaGitAlt,
    color: "text-orange-600",
  },
  MySql: {
    label: "MySql",
    icon: SiMysql,
    color: "text-blue-600",
  },
  Supabase: {
    label: "Supabase",
    icon: SiSupabase,
    color: "text-green-600",
  },
};
