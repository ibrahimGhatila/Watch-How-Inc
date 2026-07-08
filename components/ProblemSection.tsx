"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";

export default function ProblemSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const cards = [
    {
      num: "01",
      title: "Burnt Leads",
      desc: "Hitting the same accounts with conflicting messages.",
      diagnosis: "Leads contacted 3–5x by competing channels.",
      color: "text-signal-orange",
      borderColor: "bg-signal-orange",
      hex: "#F07832",
      xStart: -32,
      yStart: 0,
    },
    {
      num: "02",
      title: "Wasted Budget",
      desc: "Paying for traffic that never converts to pipeline.",
      diagnosis: "Avg. 40% of ad spend lost to unqualified traffic.",
      color: "text-hot-magenta",
      borderColor: "bg-hot-magenta",
      hex: "#D4006A",
      xStart: 0,
      yStart: 32,
    },
    {
      num: "03",
      title: "No Attribution",
      desc: "Guessing which channel actually drove the revenue.",
      diagnosis: "78% of B2B revenue has no channel attribution.",
      color: "text-deep-violet",
      borderColor: "bg-deep-violet",
      hex: "#6B46E0",
      xStart: 32,
      yStart: 0,
    },
  ];

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="py-[120px] px-6 relative overflow-hidden"
      style={{
        background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(240, 120, 50, 0.04), transparent 70%), #F7F7F5`,
        transition: "background 0.15s ease",
      }}
    >
      <div className="max-w-[900px] mx-auto text-center relative z-10">
        <div className="font-mono text-[11px] text-hot-magenta tracking-[0.14em] mb-6 uppercase flex items-center justify-center gap-2">
          <span className="w-4 h-[1px] bg-hot-magenta"></span>
          The Problem
        </div>
        <h2 className="font-heading font-extrabold text-[40px] md:text-[64px] leading-[1.05] tracking-tight text-[#0F1A12] mb-6">
          Most GTM strategies fail
          <br />
          because of{" "}
          <span className="relative inline-block">
            silos.
            <span
              className={`absolute left-0 top-1/2 h-[3px] bg-[#E63B2E] rounded-full ${
                inView ? "strikethrough-line" : "w-0"
              }`}
            />
          </span>
        </h2>
        <p className="text-xl text-[#6B7280] max-w-[640px] mx-auto mb-16">
          Disconnected content, outbound, and paid ads don&apos;t just waste
          budget — they burn your best leads and confuse your buyers at every
          stage.
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
          onMouseLeave={() => setHoveredCard(null)}
        >
          {cards.map((card, i) => {
            const isHovered = hoveredCard === i;
            const isOtherHovered = hoveredCard !== null && hoveredCard !== i;

            return (
              <motion.div
                key={i}
                onMouseEnter={() => setHoveredCard(i)}
                initial={{ opacity: 0, x: card.xStart, y: card.yStart }}
                animate={
                  inView
                    ? { opacity: 1, x: 0, y: 0 }
                    : { opacity: 0, x: card.xStart, y: card.yStart }
                }
                transition={{
                  duration: 0.55,
                  ease: "easeOut",
                  delay: inView ? i * 0.12 : 0,
                }}
                className="relative rounded-2xl p-8"
                style={{
                  transform: isHovered
                    ? "scale(1.03) translateY(-4px)"
                    : isOtherHovered
                    ? "scale(0.98)"
                    : "scale(1) translateY(0)",
                  backgroundColor: isHovered ? "#FFFFFF" : "#F7F7F5",
                  boxShadow: isHovered
                    ? "0 16px 48px -8px rgba(0,0,0,0.10)"
                    : "none",
                  opacity: isOtherHovered ? 0.45 : 1,
                  zIndex: isHovered ? 10 : 1,
                  transition: "all 0.25s ease",
                }}
              >
                {/* Left Border Animation */}
                <motion.div
                  className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl ${card.borderColor}`}
                  initial={{ scaleY: 0 }}
                  animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: inView ? i * 0.12 + 0.1 : 0,
                  }}
                  style={{ transformOrigin: "top" }}
                />

                <div
                  className="font-heading font-extrabold mb-4"
                  style={{
                    fontSize: isHovered ? "80px" : "64px",
                    opacity: isHovered ? 1.0 : 0.08,
                    color: isHovered ? card.hex : "#0F1A12",
                    lineHeight: 1,
                    transition: "all 0.3s ease",
                  }}
                >
                  {card.num}
                </div>
                <h3 className="font-heading font-bold text-2xl mb-3 text-[#0F1A12]">
                  {card.title}
                </h3>
                <p className="text-[#6B7280]">{card.desc}</p>

                <div
                  className="overflow-hidden"
                  style={{
                    maxHeight: isHovered ? "48px" : "0px",
                    opacity: isHovered ? 1 : 0,
                    marginTop: isHovered ? "12px" : "0px",
                    transition: "all 0.25s ease",
                  }}
                >
                  <p className="font-body text-[13px] italic text-[#6B7280]">
                    {card.diagnosis}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
