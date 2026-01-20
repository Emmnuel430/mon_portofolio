"use client";

import { Menu } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const baseLink =
    "relative px-3 py-2 transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-primary after:transition-transform after:duration-200 hover:after:scale-x-100 hover:text-primary";

  const activeLink = "text-primary after:scale-x-100 after:bg-secondary";

  const [activeSection, setActiveSection] = useState("");

  const sections = useMemo(
    () => [
      { id: "accueil", title: "Accueil" },
      { id: "compentences", title: "Compétences" },
      { id: "projets", title: "Projets" },
      { id: "a-propos", title: "À propos" },
      { id: "contact", title: "Contact" },
    ],
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSection = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSection = entry.target.id;
          }
        });

        if (visibleSection) {
          setActiveSection(visibleSection);
        } else {
          setActiveSection(""); // retire l'état actif si aucune section n'est dans la vue
        }
      },
      {
        threshold: 0.6, // un peu plus strict (60%)
        // rootMargin: "-50px 0px -50px 0px", // offset haut/bas
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="navbar bg-white dark:bg-base-100 dark:text-white text-gray-900 shadow-sm px-12">
      <div className="navbar-start">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo Joël Emmanuel Daho"
            width={160}
            height={40}
            className="h-20 w-auto"
            priority
          />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex min-w-0">
        <ul className="menu menu-horizontal px-1 ">
          {sections.map((section, index) => (
            <li key={index}>
              <a
                href={`#${section.id}`}
                className={`${baseLink} ${
                  activeSection === section.id ? activeLink : ""
                }`}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ThemeSwitcher />
        </div>
        <div className="dropdown dropdown-end block lg:hidden ml-2">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Menu />
          </div>
          <ul className="menu menu-sm dropdown-content bg-white dark:bg-base-100 dark:text-white text-gray-900 rounded-box z-1 mt-3 w-52 p-2 shadow mx-auto">
            {sections.map((section, index) => (
              <li key={index}>
                <a
                  href={`#${section.id}`}
                  className={`${baseLink} ${
                    activeSection === section.id ? activeLink : ""
                  }`}
                >
                  {section.title}
                </a>
              </li>
            ))}
            <li className="mt-2 mx-auto">
              <ThemeSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
