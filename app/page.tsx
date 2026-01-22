// PAS de "use client"
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";

import BackToTop from "@/components/BackToTop";
import Navbar from "@/components/Navbar";
import SocialProof from "@/components/SocialProof";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        aria-labelledby="main-title"
        className="pt-20 bg-zinc-50 font-sans dark:bg-base-100 text-black dark:text-gray-200 px-4 sm:px-6 overflow-hidden"
      >
        <div className="max-w-5xl mx-auto">
          <h2 id="main-title" className="sr-only">
            Contenu principal
          </h2>
          <Hero />
          <SocialProof />
          <Skills />
          <Projects />
          <About />
          <ContactMe />
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
