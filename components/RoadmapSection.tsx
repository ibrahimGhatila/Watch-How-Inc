"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";

const phases = [
  {
    num: "01",
    time: "Week 1–3",
    title: "Research & Setup",
    desc: "ICP alignment, account mapping, messaging, tool stack.",
    accentColor: "#159870",
    detail: "Tools: Clay · Apollo · Slack · Notion",
  },
  {
    num: "02",
    time: "Week 3–6",
    title: "Launch",
    desc: "Content live, ads running, outbound sequences fired.",
    accentColor: "#F07832",
    detail: "Channels: LinkedIn · Email · Meta Ads",
  },
  {
    num: "03",
    time: "Month 2",
    title: "Amplify",
    desc: "Scale the best content, expand target lists.",
    accentColor: "#0097A7",
    detail: "Action: Double budget on top performer",
  },
  {
    num: "04",
    time: "Month 3",
    title: "Scale",
    desc: "Document wins. Roadmap the next quarter for growth.",
    accentColor: "#6B46E0",
    detail: "Output: Q2 growth roadmap delivered",
  },
  {
    num: "05",
    time: "Day 90",
    title: "Review",
    desc: "If results are strong, we move into a partnership.",
    accentColor: "#F5C518",
    detail: "Next: Strategic partnership discussion",
  },
];

export default function RoadmapSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isInView && lineRef.current) {
      lineRef.current.style.transform = "scaleX(1)";
      lineRef.current.style.transition =
        "transform 1.2s cubic-bezier(0.4,0,0.2,1)";
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} className="py-[120px] px-6 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto">
        <div className="font-mono text-[11px] text-electric-teal tracking-[0.14em] mb-6 uppercase flex items-center gap-2">
          <span className="w-4 h-[1px] bg-electric-teal"></span>
          The Roadmap
        </div>
        <h2 className="font-heading font-extrabold text-[40px] md:text-[52px] leading-[1.05] tracking-tight text-[#0F1A12] mb-16">
          From zero to revenue in 90 days.
        </h2>

        <div className="flex flex-col md:flex-row gap-6 relative">
          {/* Connecting line desktop */}
          <div className="hidden md:block absolute top-[28px] left-0 w-full h-[1px] bg-[#E2E2DC] z-0">
            <div
              className="absolute top-0 left-0 h-full bg-[#159870] origin-left scale-x-0 w-full"
              ref={lineRef}
            />
          </div>

          {phases.map((phase, i) => {
            const isHovered = hoveredIndex === i;
            const isAnyHovered = hoveredIndex !== null;
            const isDimmed = isAnyHovered && !isHovered;
            
            // Dot animation delay matches when the line physically reaches each dot
            const dotDelays = [0.1, 0.34, 0.58, 0.82, 1.06];
            // Card stagger delays
            const cardDelays = [0.2, 0.38, 0.56, 0.74, 0.92];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: cardDelays[i] }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="flex-1 relative z-10"
                style={{
                  opacity: isDimmed ? 0.65 : 1,
                  transform: isDimmed ? "scale(0.99)" : isHovered ? "translateY(-5px)" : "scale(1) translateY(0)",
                  transition: "all 0.25s ease",
                }}
              >
                {/* Dot */}
                <div
                  className={`hidden md:block absolute -top-[29px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-white`}
                  style={{
                    backgroundColor: phase.accentColor,
                    animation: isInView
                      ? `dot-activate 0.6s cubic-bezier(0.4,0,0.2,1) ${dotDelays[i]}s forwards`
                      : "none",
                    opacity: isInView ? 0 : 0.3,
                    transform: "scale(0.4)",
                  }}
                />

                {/* Card */}
                <div
                  className="bg-white rounded-2xl p-6 h-full flex flex-col"
                  style={{
                    borderTop: `${isHovered ? "5px" : "3px"} solid ${phase.accentColor}`,
                    boxShadow: isHovered
                      ? "0 16px 40px -8px rgba(0,0,0,0.10)"
                      : "0 2px 12px -4px rgba(0,0,0,0.06)",
                    transition: "all 0.25s ease",
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="font-mono text-[11px] uppercase tracking-[0.12em]"
                      style={{ color: phase.accentColor }}
                    >
                      Phase {phase.num}
                    </span>
                    <span
                      className="font-mono text-[11px] px-2 py-0.5 rounded-full"
                      style={{
                        background: `${phase.accentColor}1A`, // 10% opacity hex
                        color: phase.accentColor,
                      }}
                    >
                      {phase.time}
                    </span>
                  </div>

                  <h3 className="font-black text-[#0F1A12] text-[20px] leading-tight mb-2">
                    {phase.title}
                  </h3>

                  <p className="text-[#6B7280] text-[14px] leading-relaxed flex-grow">
                    {phase.desc}
                  </p>

                  {/* Hover Expansion */}
                  <div
                    className="overflow-hidden"
                    style={{
                      maxHeight: isHovered ? "80px" : "0px",
                      opacity: isHovered ? 1 : 0,
                      transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease 0.1s",
                    }}
                  >
                    <div
                      className="h-[1px] w-full mt-4 mb-3"
                      style={{ backgroundColor: `${phase.accentColor}33` }} // 20% opacity hex
                    />
                    <p
                      className="font-mono text-[11px] tracking-[0.08em]"
                      style={{ color: phase.accentColor }}
                    >
                      {phase.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
