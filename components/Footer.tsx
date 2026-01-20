import { Facebook, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";
import { RiTiktokLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-gray-100 dark:bg-base-100 dark:text-white text-gray-900 shadow-sm p-10">
      <aside>
        <Image
          src="/images/logo.png"
          alt="Logo Joël Emmanuel Daho"
          width={160}
          height={40}
          className="h-40 w-auto"
          priority
        />
        <p className="font-bold">
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <Facebook size={40} />
          </a>
          <a>
            <RiTiktokLine size={40} />
          </a>
          <a>
            <Github size={40} />
          </a>
          <a>
            <Linkedin size={40} />
          </a>
        </div>
      </nav>
      <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
    </footer>
  );
};

export default Footer;
