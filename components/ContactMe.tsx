import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ContactMe = () => {
  return (
    <section className="py-20 text-center" id="contact">
      <h2 className="text-3xl font-bold text-brand-dark dark:text-white">
        Un projet en tête ?
      </h2>

      <p className="mt-4 text-lg text-brand-muted max-w-xl mx-auto">
        Discutons-en ensemble et voyons comment transformer votre idée en une
        solution concrète et efficace.
      </p>

      <a
        href="https://wa.me/2250759957956"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center mt-8 px-8 py-4 rounded-xl bg-green-700 text-white font-semibold hover:bg-green-500 transition duration-300 shadow-lg"
      >
        <FaWhatsapp size={20} className="me-2" />
        Parlons-en sur WhatsApp
      </a>
    </section>
  );
};

export default ContactMe;
