"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

const Marquee = dynamic(() => import("react-fast-marquee"), {
  ssr: false,
  loading: () => <div className="h-12" />,
});

const logos = Array.from({ length: 11 }, (_, i) => ({
  src: `/images/partners/logo-${i + 1}.png`,
  alt: `Partner ${i + 1}`,
}));

export default function SocialProof() {
  return (
    <section className="bg-white dark:bg-gray-800 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-6 text-center text-sm font-medium text-brand-muted">
          Ils m’ont fait confiance
        </p>

        <div className="overflow-hidden">
          <Marquee
            gradient={false}
            speed={30}
            pauseOnHover
            className="overflow-hidden"
          >
            {logos.map((logo, index) => (
              <div
                key={index}
                className="
            mx-6 sm:mx-10 md:mx-12
            flex items-center justify-center
          "
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={64}
                  loading="lazy"
                  className="
              h-12 sm:h-16 md:h-20
              w-auto
              grayscale opacity-70
              transition hover:grayscale-0 hover:opacity-100
            "
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
