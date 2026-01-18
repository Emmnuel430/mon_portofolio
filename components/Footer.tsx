import { Facebook, Github, Hash, Linkedin } from "lucide-react";
import React from "react";
import { RiTiktokLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-gray-100 dark:bg-base-100 dark:text-white text-gray-900 shadow-sm p-10">
      <aside>
        <Hash size={60} />
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
