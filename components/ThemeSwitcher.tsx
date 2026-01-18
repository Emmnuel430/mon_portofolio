/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  //   const current = theme === "system" ? systemTheme : theme;

  const baseBtn =
    "tooltip flex items-center justify-center w-full h-10 rounded-lg transition-all duration-200";
  const active =
    "bg-gray-200 dark:bg-gray-700 text-black dark:text-white shadow";
  const inactive = "text-gray-500 hover:text-black dark:hover:text-white";

  return (
    <div className="flex items-center gap-1 p-1 rounded-xl bg-gray-100 dark:bg-gray-800 w-40">
      {/* Light */}
      <button
        onClick={() => setTheme("light")}
        className={`${baseBtn} tooltip-bottom ${
          theme === "light" ? active : inactive
        }`}
        aria-label="Light mode"
        data-tip="Light mode"
      >
        <Sun size={14} />
      </button>

      {/* Dark */}
      <button
        onClick={() => setTheme("dark")}
        className={`${baseBtn} tooltip-bottom ${
          theme === "dark" ? active : inactive
        }`}
        aria-label="Dark mode"
        data-tip="Dark mode"
      >
        <Moon size={14} />
      </button>

      {/* System */}
      <button
        onClick={() => setTheme("system")}
        className={`${baseBtn} tooltip-left ${
          theme === "system" ? active : inactive
        }`}
        aria-label="System theme"
        data-tip="System theme"
      >
        <Monitor size={14} />
      </button>
    </div>
  );
}
