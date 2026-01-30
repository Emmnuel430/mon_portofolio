import { StackKey } from "@/lib/types";
import { Cable } from "lucide-react";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaReact,
  FaLaravel,
  FaBootstrap,
  FaNodeJs,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { FaGithub, FaGitlab } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiSupabase,
  SiJavascript,
  SiDjango,
  SiPrisma,
  SiDaisyui,
  SiClerk,
} from "react-icons/si";
import { SiVercel, SiCloudflare, SiAmazons3 } from "react-icons/si";

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
  "Tailwind CSS": {
    label: "Tailwind CSS",
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
    icon: GrMysql,
    color: "text-blue-600",
  },
  MySQL: {
    label: "MySQL",
    icon: GrMysql,
    color: "text-blue-600",
  },
  Supabase: {
    label: "Supabase",
    icon: SiSupabase,
    color: "text-green-600",
  },
  JavaScript: {
    label: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-400",
  },
  Django: {
    label: "Django",
    icon: SiDjango,
    color: "text-green-800",
  },
  Prisma: {
    label: "Prisma",
    icon: SiPrisma,
    color: "text-blue-500",
  },
  "API REST": {
    label: "API REST",
    icon: Cable,
    color: "text-green-500",
  },
  GitHub: {
    label: "GitHub",
    icon: FaGithub,
    color: "text-black dark:text-white",
  },
  GitLab: {
    label: "GitLab",
    icon: FaGitlab,
    color: "text-orange-600",
  },
  daisyUI: {
    label: "DaisyUI",
    icon: SiDaisyui,
    color: "text-sky-400",
  },
  Vercel: {
    label: "Vercel",
    icon: SiVercel,
    color: "text-black dark:text-white",
  },
  Cloudflare: {
    label: "Cloudflare",
    icon: SiCloudflare,
    color: "text-orange-500",
  },
  "Amazon AWS S3": {
    label: "AWS S3",
    icon: SiAmazons3,
    color: "text-orange-400",
  },
  Clerk: {
    label: "Clerk (Auth)",
    icon: SiClerk,
    color: "text-indigo-500",
  },
  Figma: {
    label: "Figma",
    icon: FaFigma,
    color: "text-pink-500",
  },
  PostgreSQL: {
    label: "PostgreSQL",
    icon: BiLogoPostgresql,
    color: "text-blue-600",
  },
};
