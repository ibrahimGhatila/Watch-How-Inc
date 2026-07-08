"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const universities = [
  "Georgia Tech",
  "Carnegie Mellon",
  "NYU",
  "Texas A&M",
  "Columbia",
  "MIT",
  "UBC",
];

export default function CtaBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % universities.length);
    }, 2000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="bg-[#159870] rounded-t-[2.5rem] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-16 items-center">
        {/* LEFT — Content */}
        <div className="flex flex-col gap-8">
          {/* Mono label */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-[2px] bg-white opacity-40" />
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white opacity-60">
              Book a Call
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-black text-white text-[clamp(36px,4.5vw,64px)] leading-[0.95] tracking-tight">
            Watch how we
            <br />
            <span className="text-[#F5C518]">1</span>
            <span className="text-[#F07832]">0</span>
            <span className="text-[#FFFFFF]">x</span> your
            <br />
            revenue.
          </h2>

          {/* Body */}
          <p className="text-white/70 text-[18px] leading-relaxed max-w-[420px]">
            30 minutes. We&apos;ll map exactly where your GTM is leaking and show
            you the 90-day fix. No pitch. No pressure.
          </p>

          {/* 3 bullet trust points */}
          <div className="flex flex-col gap-4">
            {[
              "Dedicated GTM expert on the call — not a sales rep",
              "Custom flywheel audit for your specific business",
              "Walk away with a clear action plan either way",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <span className="text-white/80 text-[15px] leading-snug">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Social proof strip */}
          <div className="flex items-center gap-2 flex-wrap pt-2">
            <span className="text-white/70 text-[14px]">Founders from</span>

            <span className="inline-flex items-center overflow-hidden h-[22px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={universities[index]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="inline-block text-white font-bold text-[14px] whitespace-nowrap"
                >
                  {universities[index]}
                </motion.span>
              </AnimatePresence>
            </span>

            <span className="text-white/70 text-[14px]">trust us</span>
          </div>
        </div>

        {/* CENTER — Divider */}
        <div className="hidden lg:block w-[1px] bg-white/15 self-stretch" />

        {/* RIGHT — Calendar */}
        <div className="relative">
          {/* Hollow border frame */}
          <div className="absolute -inset-[1px] rounded-2xl border border-white/25 pointer-events-none z-10" />

          {/* Subtle inner glow — makes it feel premium */}
          <div className="absolute -inset-4 rounded-3xl bg-white/5 blur-xl pointer-events-none" />

          {/* Calendly widget */}
          <div
            className="calendly-inline-widget relative z-0 rounded-2xl overflow-hidden"
            data-url="https://calendly.com/ibrahim-m-ebs/30min?hide_gdpr_banner=1&hide_event_type_details=1&hide_landing_page_details=1&background_color=159870&text_color=ffffff&primary_color=ffffff"
            style={{ minWidth: "320px", height: "630px" }}
          />
        </div>
      </div>
    </section>
  );
}
