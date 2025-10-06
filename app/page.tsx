"use client";

import HeroSection from "@/components/hero-section";
import SocialProofSection from "@/components/social-proof-section";
import FeaturesSection from "@/components/features-section";
import HowItWorksSection from "@/components/how-it-works-section";
import { Skiper31 } from "@/components/skiper31";
import PricingSection from "@/components/pricing-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";
import ReactLenis from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.2, smoothWheel: true }}>
      <div className="bg-slate-950 overflow-x-hidden">
        <HeroSection />
        <SocialProofSection />
        <FeaturesSection />
        <HowItWorksSection />
        <Skiper31 />
        <PricingSection />
        <CTASection />
        <Footer />
      </div>
    </ReactLenis>
  );
}
