import { socials } from "@/data/socials";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-white dark:bg-base-200 dark:text-white text-gray-900 shadow-sm p-10">
      <aside>
        <Image
          src="/images/logo.png"
          alt="Logo Joël Emmanuel Daho"
          width={1080}
          height={1080}
          className="h-40 w-auto"
          priority
        />
        <p className="font-bold">D. Joël Emmanuel DAHO</p>
        <p> Développeur Web - Formateur</p>{" "}
      </aside>
      <nav>
        <div className="flex gap-4">
          {socials.map(({ key, icon: Icon, href }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand transition"
            >
              <Icon size={32} />
            </a>
          ))}
        </div>
      </nav>
      <p>
        Copyright © {new Date().getFullYear()} J/D Inc. - All right reserved
      </p>
    </footer>
  );
};

export default Footer;
