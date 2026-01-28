import React from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

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

      <div className="flex w-fit mx-auto flex-col lg:flex-row lg:mt-4 lg:w-full">
        <div className="grid grow place-items-center">
          <a
            href="https://wa.me/2250759957956"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center mt-8 px-8 py-4 rounded-xl bg-green-700 text-white font-semibold hover:bg-green-500 transition duration-300 shadow-lg"
          >
            <FaWhatsapp size={20} className="me-2" />
            Parlons-en sur WhatsApp
          </a>
        </div>
        <div className="divider lg:divider-horizontal">OU</div>
        <div className="grid grow place-items-center">
          <a
            href="mailto:emmanueldaho859@gmail.com?subject=Demande%20de%20contact&body=Bonjour%20Emmanuel,%0D%0A%0D%0AJe%20souhaite%20discuter%20d’un%20projet%20avec%20vous."
            className="inline-flex items-center justify-center lg:mt-8 px-8 py-4 rounded-xl bg-brand text-white font-semibold hover:opacity-70 transition duration-300 shadow-lg"
          >
            <FaEnvelope size={20} className="me-2" />
            emmanueldaho859@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
