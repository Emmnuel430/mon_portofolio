// import Image from "next/image";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-base-100 text-black dark:text-gray-200 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">

        <Hero />
        </div>
      </div>
      <Footer />
    </>
  );
}
