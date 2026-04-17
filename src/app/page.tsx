"use client";

/**
 * Landing page — single-page portfolio for Carlos M Janon.
 * Composes all sections into a vertical flow.
 */

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import IntroSection from "@/components/sections/IntroSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <IntroSection />
        <ExpertiseSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
