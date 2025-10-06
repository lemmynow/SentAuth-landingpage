"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: "🔒",
    title: "Behavioral Biometrics",
    description:
      "Every keystroke tells a story. We read between the lines of how users type, click, and swipe to build unbreakable identity profiles.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🧠",
    title: "AI Risk Engine",
    description:
      "Not all logins are equal. Our ML models assign risk scores in real-time, adapting security on the fly without breaking user flow.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: "⚡",
    title: "Invisible Security",
    description:
      "Sub-50ms decisions. Zero friction. Your users won't notice our protection—but attackers will hit a wall.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: "🛡️",
    title: "Zero-Knowledge Architecture",
    description:
      "We never see your data. End-to-end encryption, SOC 2 Type II certified, with privacy built into every API call.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: "🔌",
    title: "Drop-in Integration",
    description:
      "Three lines of code. Five minutes to deploy. Our SDKs speak every language and play nice with your existing stack.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: "📊",
    title: "Real-time Intelligence",
    description:
      "Live threat maps, behavioral insights, and attack pattern visualization. Know what's happening before it becomes a problem.",
    color: "from-yellow-500 to-orange-500",
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Cards animation
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.from(cards, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
          y: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
        });

        // Hover effect setup
        Array.from(cards).forEach((card) => {
          const element = card as HTMLElement;
          
          element.addEventListener("mouseenter", () => {
            gsap.to(element, {
              y: -10,
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          element.addEventListener("mouseleave", () => {
            gsap.to(element, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative py-16 bg-slate-950 overflow-x-hidden overflow-y-visible"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/0 to-slate-900/0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Security that{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              thinks
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Not your grandfather's 2FA. This is authentication that learns, adapts, and protects.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 cursor-pointer"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300" />

              <div className="relative z-10">
                <div
                  className={`text-5xl mb-4 inline-block bg-gradient-to-br ${feature.color} p-3 rounded-xl`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-20 blur-xl`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
