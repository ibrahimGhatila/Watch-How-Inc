"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Flywheel({
  size = 480,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Helper to generate dots along an arc
  const generateDots = (
    startAngle: number,
    endAngle: number,
    color: string,
    duration: number,
    reverseDelay: boolean = false
  ) => {
    const dots = [];
    const numDots = 12;
    const radius = 200;
    const centerX = 240;
    const centerY = 240;
    
    // Convert angles to radians
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    const angleStep = (endRad - startRad) / (numDots - 1);

    for (let i = 0; i < numDots; i++) {
      const angle = startRad + i * angleStep;
      const cx = Number((centerX + radius * Math.cos(angle)).toFixed(3));
      const cy = Number((centerY + radius * Math.sin(angle)).toFixed(3));
      
      // Calculate delay based on direction
      const delayIndex = reverseDelay ? numDots - 1 - i : i;
      const delay = Number(((delayIndex / numDots) * duration).toFixed(3));

      dots.push(
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={isMobile ? "4.5" : "3"}
          fill={color}
          opacity="0.35"
          className="animate-dot-pulse transition-all duration-300 ease-out"
          style={{
            // @ts-ignore
            "--pulse-dur": `${duration}s`,
            "--pulse-delay": `${delay}s`,
          }}
        />
      );
    }
    return dots;
  };

  const segments = [
    {
      id: "content",
      name: "CONTENT",
      color: "#1D6B44",
      startAngle: -90,
      endAngle: 30,
      duration: 2.4,
      reverseDelay: false,
      tooltip: "Authority content that builds trust before the first sales call.",
      tooltipPos: { top: "15%", right: "5%" },
      pathD: "M 240 40 A 200 200 0 0 1 413.2 340", // Extended path for hover area
    },
    {
      id: "outbound",
      name: "OUTBOUND",
      color: "#0097A7",
      startAngle: 30,
      endAngle: 150,
      duration: 2.8,
      reverseDelay: false,
      tooltip: "Hyper-personalized outreach across Email, LinkedIn & WhatsApp.",
      tooltipPos: { bottom: "5%", left: "50%", transform: "translateX(-50%)" },
      pathD: "M 413.2 140 A 200 200 0 0 1 66.8 340",
    },
    {
      id: "paidads",
      name: "PAID ADS",
      color: "#F07832",
      startAngle: 150,
      endAngle: 270,
      duration: 2.2,
      reverseDelay: false,
      tooltip: "Ads targeting only the accounts you actually want to close.",
      tooltipPos: { top: "15%", left: "5%" },
      pathD: "M 66.8 340 A 200 200 0 0 1 240 40",
    },
  ];

  return (
    <div
      className={`relative flex items-center justify-center origin-center ${className}`}
      style={{
        width: 480,
        height: 480,
        transform: `scale(${size / 480})`,
      }}
    >
      {/* Outer dashed track */}
      <div className="absolute inset-0 rounded-full border border-dashed border-[#E2E2DC]"></div>

      {/* Rotating SVG */}
      <svg
        width="480"
        height="480"
        viewBox="0 0 480 480"
        className="absolute inset-0 animate-flywheel"
      >
        {segments.map((seg) => {
          const isHovered = hoveredSegment === seg.id;
          const isOtherHovered = hoveredSegment !== null && hoveredSegment !== seg.id;
          
          return (
            <g 
              key={seg.id}
              className="transition-all duration-300 ease-out"
              style={{
                opacity: isOtherHovered ? 0.12 : 1,
              }}
            >
              {/* The Dots */}
              <g
                style={{
                  // @ts-ignore
                  "--pulse-dur": isHovered ? `${seg.duration / 2}s` : isOtherHovered ? `${seg.duration * 1.5}s` : `${seg.duration}s`,
                }}
              >
                {generateDots(seg.startAngle, seg.endAngle, seg.color, seg.duration, seg.reverseDelay).map((dot, i) => {
                  // If hovered, we override the animation to make them bigger and fully opaque
                  if (isHovered) {
                    const peakRadius = isMobile ? 9 : 7;
                    const baseRadius = isMobile ? 4.5 : 3;
                    const scale = peakRadius / baseRadius;

                    return (
                      <circle
                        key={i}
                        cx={dot.props.cx}
                        cy={dot.props.cy}
                        r={isMobile ? "4.5" : "3"}
                        fill={seg.color}
                        className="animate-dot-pulse"
                        style={{
                          // @ts-ignore
                          "--pulse-dur": `${seg.duration / 2}s`,
                          "--pulse-delay": dot.props.style["--pulse-delay"],
                          transformOrigin: `${dot.props.cx}px ${dot.props.cy}px`,
                          transform: `scale(${scale * 0.9})`, // Adjusted to match the peak pulse r:9 on mobile
                        }}
                      />
                    );
                  }
                  return dot;
                })}
              </g>

              {/* Invisible Hover Area */}
              <path
                d={seg.pathD}
                fill="none"
                stroke="transparent"
                strokeWidth="60"
                className="cursor-pointer"
                onMouseEnter={() => setHoveredSegment(seg.id)}
                onMouseLeave={() => setHoveredSegment(null)}
              />
            </g>
          );
        })}
      </svg>

      {/* Tooltips */}
      <AnimatePresence>
        {hoveredSegment && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-4 min-w-[180px] max-w-[220px] z-20 pointer-events-none"
            style={segments.find(s => s.id === hoveredSegment)?.tooltipPos as any}
          >
            <p className="text-[13px] text-[#0F1A12] leading-snug">
              {segments.find(s => s.id === hoveredSegment)?.tooltip}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Static Labels */}
      <div className={`absolute top-[10%] right-[15%] font-mono text-[11px] text-gtm-green uppercase font-bold bg-white px-2 py-1 rounded transition-opacity duration-300 hidden md:block ${hoveredSegment ? 'opacity-0' : 'opacity-100'}`}>
        Content
      </div>
      <div className={`absolute bottom-[10%] left-1/2 -translate-x-1/2 font-mono text-[11px] text-electric-teal uppercase font-bold bg-white px-2 py-1 rounded transition-opacity duration-300 hidden md:block ${hoveredSegment ? 'opacity-0' : 'opacity-100'}`}>
        Outbound
      </div>
      <div className={`absolute top-[10%] left-[15%] font-mono text-[11px] text-signal-orange uppercase font-bold bg-white px-2 py-1 rounded transition-opacity duration-300 hidden md:block ${hoveredSegment ? 'opacity-0' : 'opacity-100'}`}>
        Paid Ads
      </div>

      {/* Center Circle */}
      <div className={`absolute ${isMobile ? 'w-[104px] h-[104px]' : 'w-[160px] h-[160px]'} bg-white rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex items-center justify-center border border-[#E2E2DC] z-10`}>
        <div className="text-center">
          <div className={`${isMobile ? 'text-[18px]' : 'text-[32px]'} font-heading font-bold tracking-tighter leading-none flex justify-center`}>
            <span className="text-gtm-green">W</span>
            <span className="text-signal-orange">H</span>
          </div>
          
          <div className="h-[30px] mt-2 relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              {hoveredSegment ? (
                <motion.div
                  key={hoveredSegment}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="font-mono text-[10px] uppercase tracking-[0.14em]"
                  style={{ color: segments.find(s => s.id === hoveredSegment)?.color }}
                >
                  {segments.find(s => s.id === hoveredSegment)?.name}
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`${isMobile ? 'text-[8px] tracking-[0.1em]' : 'text-[10px] tracking-[0.14em]'} font-mono text-[#6B7280] uppercase`}
                >
                  Revenue
                  <br />
                  Engine
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile Tooltip Strip */}
      <div className="flex md:hidden justify-around w-full mt-6 px-4 absolute -bottom-24 left-0">
        {[
          { label: 'Content',  color: '#1D6B44', desc: 'Authority content that builds trust.' },
          { label: 'Outbound', color: '#0097A7', desc: 'Hyper-personalized outreach.' },
          { label: 'Paid Ads', color: '#F07832', desc: 'Ads targeting your exact ICP.' },
        ].map(item => (
          <div key={item.label} className="flex flex-col items-center gap-1 flex-1">
            <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
            <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: item.color }}>
              {item.label}
            </span>
            <span className="text-[11px] text-[#6B7280] text-center leading-tight">
              {item.desc}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
