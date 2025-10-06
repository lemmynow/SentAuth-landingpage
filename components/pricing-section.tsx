"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Kick the tires. Test the waters. No strings.",
    features: [
      "1,000 auth requests/month",
      "Basic behavioral fingerprinting",
      "Email support (we actually respond)",
      "Core security features",
      "Access to community Slack",
    ],
    cta: "Start Free",
    popular: false,
    gradient: "from-slate-700 to-slate-800",
  },
  {
    name: "Professional",
    price: "$99",
    description: "For teams who take security seriously",
    features: [
      "50,000 auth requests/month",
      "Full behavioral biometric suite",
      "ML-powered risk scoring",
      "Priority support (< 2hr response)",
      "Custom threat thresholds",
      "Real-time analytics dashboard",
      "Full API + webhook access",
    ],
    cta: "Start 14-Day Trial",
    popular: true,
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    name: "Enterprise",
    price: "Let's talk",
    description: "White-glove security at scale",
    features: [
      "Unlimited everything",
      "Dedicated fraud ML models",
      "Advanced anomaly detection",
      "24/7 security team on call",
      "Custom integrations & SDKs",
      "99.99% uptime SLA",
      "On-premise deployment options",
      "Executive security briefings",
    ],
    cta: "Book a Call",
    popular: false,
    gradient: "from-purple-600 to-pink-600",
  },
];

export default function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        const cards = cardsRef.current.children;

        // Stagger animation for cards
        gsap.from(cards, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
          y: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        });

        // Scale on scroll
        Array.from(cards).forEach((card, index) => {
          const element = card as HTMLElement;

          // Hover animation
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
      id="pricing"
      className="relative py-32 bg-slate-900 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Pick your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              protection level
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Honest pricing. No surprise fees. Cancel whenever (but you won't want to).
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-slate-800/50 backdrop-blur-sm border ${
                plan.popular
                  ? "border-blue-500/50 shadow-xl shadow-blue-500/20"
                  : "border-slate-700/50"
              } rounded-2xl p-8 hover:border-slate-600 transition-all duration-300 cursor-pointer`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                  {plan.price !== "Free" && plan.price !== "Custom" && (
                    <span className="text-slate-400">/month</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-6 text-base font-semibold rounded-xl ${
                  plan.popular
                    ? `bg-gradient-to-r ${plan.gradient} hover:opacity-90 shadow-lg shadow-blue-500/30`
                    : "bg-slate-700 hover:bg-slate-600"
                } transform hover:scale-105 transition-all duration-300`}
              >
                {plan.cta}
              </Button>

              {/* Gradient overlay */}
              {plan.popular && (
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${plan.gradient} opacity-10 blur-xl`} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-16">
          <p className="text-slate-400 mb-4">
            Every plan includes end-to-end encryption, SOC 2 compliance, and our promise: your data stays yours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No setup fees
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Cancel anytime
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Money-back guarantee
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
