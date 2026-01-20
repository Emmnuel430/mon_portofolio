// import Image from "next/image";
"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SocialProof from "@/components/SocialProof";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-zinc-50 font-sans dark:bg-base-100 text-black dark:text-gray-200 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <Hero />
          <SocialProof />
          <Skills />
          <Projects />
        </div>
      </div>
      <Footer />
    </>
  );
}
