"use client";

import { Menu } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const baseLink =
    "relative px-3 py-2 transition-colors duration-200 text-gray-900 dark:text-white";
  const desktopUnderline =
    "lg:after:absolute lg:after:left-0 lg:after:-bottom-1 lg:after:h-[2px] lg:after:w-full lg:after:scale-x-0 lg:after:bg-brand lg:after:transition-transform lg:after:duration-200 lg:hover:after:scale-x-100";
  const hoverText = "hover:text-brand";

  const activeLink =
    "text-brand bg-gray-500/20 lg:bg-transparent lg:dark:bg-transparent lg:after:scale-x-100";

  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sections = useMemo(
    () => [
      { id: "accueil", title: "Accueil" },
      { id: "competences", title: "Compétences" },
      { id: "projets", title: "Projets" },
      { id: "a-propos", title: "À propos" },
      { id: "contact", title: "Contact" },
    ],
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);

            history.replaceState(null, "", `#${id}`);
          }
        });
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div
      className={`
        navbar fixed top-0 z-50 w-full transition-all duration-300 px-12
        ${scrolled ? "shadow-md bg-white/90 dark:bg-base-100/90 backdrop-blur border-b border-b-gray-900 dark:border-b-gray-200" : "bg-transparent"}
      `}
    >
      <div className="navbar-start">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo Joël Emmanuel Daho"
            width={80}
            height={80}
            className="h-20 w-auto"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex min-w-0">
        <ul className="menu menu-horizontal px-1 ">
          {sections.map((section, index) => (
            <li key={index}>
              <a
                href={`#${section.id}`}
                className={`${baseLink} ${desktopUnderline} ${hoverText} ${activeSection === section.id ? activeLink : ""}`}
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
          <button
            aria-label="Ouvrir le menu"
            aria-haspopup="true"
            aria-expanded={false}
            className="btn btn-ghost lg:hidden text-gray-900 dark:text-white"
          >
            <Menu />
          </button>
          <ul className="menu menu-sm dropdown-content bg-white dark:bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow mx-auto">
            {sections.map((section, index) => (
              <li key={index}>
                <a
                  href={`#${section.id}`}
                  className={`${baseLink} ${desktopUnderline} ${hoverText} ${activeSection === section.id ? activeLink : ""}`}
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
