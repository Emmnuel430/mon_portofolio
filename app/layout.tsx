import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joel E. DAHO - Développeur Full-Stack React & Laravel | Portfolio",
  description:
    "Développeur full-stack spécialisé en React, Next.js et Laravel. Création d’applications web performantes, SaaS, e-commerce et backoffices.",
  keywords: [
    "développeur full stack",
    "react",
    "next.js",
    "laravel",
    "freelance",
    "portfolio développeur",
  ],
  authors: [{ name: "D. Joel Emmanuel Daho" }],
  openGraph: {
    title: "Portfolio – Développeur Full-Stack React & Laravel",
    description:
      "Découvrez mes projets, compétences et expériences en développement web moderne.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
