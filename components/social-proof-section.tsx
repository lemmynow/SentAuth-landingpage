"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SocialProofSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate stats on scroll
      if (statsRef.current) {
        const stats = statsRef.current.children;
        gsap.from(stats, {
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
        });

        // Animate numbers counting up
        Array.from(stats).forEach((stat) => {
          const numberElement = stat.querySelector(".stat-number");
          if (numberElement) {
            const targetValue = numberElement.getAttribute("data-value");
            if (targetValue) {
              gsap.from(numberElement, {
                scrollTrigger: {
                  trigger: stat,
                  start: "top 80%",
                  toggleActions: "play none none reverse",
                },
                textContent: 0,
                duration: 2,
                ease: "power1.out",
                snap: { textContent: 1 },
                onUpdate: function() {
                  const current = Math.ceil(Number(this.targets()[0].textContent));
                  if (targetValue.includes("M")) {
                    this.targets()[0].textContent = current + "M+";
                  } else if (targetValue.includes("%")) {
                    this.targets()[0].textContent = current + "%";
                  } else {
                    this.targets()[0].textContent = current;
                  }
                },
              });
            }
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative py-20 bg-slate-950 border-y border-slate-800/50 overflow-x-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-transparent to-purple-950/20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Trust Badge */}
        <div className="text-center mb-12">
          <p className="text-sm text-slate-500 uppercase tracking-widest mb-4">
            Trusted by industry leaders
          </p>
        </div>

        {/* Stats Grid */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center group cursor-default">
            <div
              className="stat-number text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors"
              data-value="10M+"
            >
              10M+
            </div>
            <div className="text-sm text-slate-400">
              Daily Auth Requests
            </div>
          </div>

          <div className="text-center group cursor-default">
            <div
              className="stat-number text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors"
              data-value="99.9%"
            >
              99.9%
            </div>
            <div className="text-sm text-slate-400">
              Fraud Detection Rate
            </div>
          </div>

          <div className="text-center group cursor-default">
            <div
              className="stat-number text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors"
              data-value="47"
            >
              47
            </div>
            <div className="text-sm text-slate-400">
              Countries Served
            </div>
          </div>

          <div className="text-center group cursor-default">
            <div
              className="stat-number text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors"
              data-value="<50"
            >
              &lt;50
            </div>
            <div className="text-sm text-slate-400">
              ms Response Time
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <blockquote className="text-xl md:text-2xl text-slate-300 italic mb-6">
            "We reduced account takeover attempts by <span className="text-cyan-400 font-semibold not-italic">94%</span> in the first month. 
            SentAuth doesn't just detect threats—it predicts them."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              JD
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">John Doe</div>
              <div className="text-sm text-slate-400">CTO, TechCorp Inc.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
