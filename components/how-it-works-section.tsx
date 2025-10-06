"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (stepsRef.current) {
        const steps = stepsRef.current.children;

        // Animate each step with scroll
        Array.from(steps).forEach((step, index) => {
          gsap.from(step, {
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
              end: "bottom 60%",
              toggleActions: "play none none reverse",
            },
            x: index % 2 === 0 ? -100 : 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          });

          // Scale up on scroll
          gsap.to(step, {
            scrollTrigger: {
              trigger: step,
              start: "top 70%",
              end: "center center",
              scrub: 1,
            },
            scale: 1.02,
          });
        });

        // Animate connecting lines
        const lines = sectionRef.current?.querySelectorAll(".connecting-line");
        if (lines) {
          lines.forEach((line) => {
            gsap.from(line, {
              scrollTrigger: {
                trigger: line,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
              scaleY: 0,
              duration: 0.8,
              ease: "power2.out",
            });
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      number: "01",
      title: "Silent Collection",
      description:
        "The moment they touch their keyboard, we're watching. Not what they type—how they type. Rhythm, pressure, timing. Building a behavioral fingerprint invisible to the user.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: "Pattern Recognition",
      description:
        "Our ML models eat data for breakfast. Mouse trajectories, scroll velocity, device angle—hundreds of micro-signals analyzed in milliseconds to build a trust score.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      number: "03",
      title: "Risk Calculation",
      description:
        "Is this really John from accounting? Or someone who stole his password? Our risk engine weighs the evidence, assigns a score, and makes the call.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      number: "04",
      title: "Adaptive Response",
      description:
        "Low risk? Slide right through. Suspicious? Challenge with MFA. Definitely fraud? Shut it down. All automatically, all instantly, all invisible to legitimate users.",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative py-32 bg-slate-950 overflow-x-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            The{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              invisible shield
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Four steps between "Hello" and "You're in." All happening faster than a blink.
          </p>
        </div>

        <div ref={stepsRef} className="max-w-4xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Number badge */}
                <div className="flex-shrink-0">
                  <div
                    className={`w-32 h-32 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-2xl`}
                  >
                    <span className="text-4xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="connecting-line absolute left-16 top-32 w-0.5 h-12 bg-gradient-to-b from-slate-700 to-transparent hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
