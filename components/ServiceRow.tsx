"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

const NODE_WIDTH = 170;
const NODE_HEIGHT = 40;

function generatePath(fromCx: number, fromCy: number, toCx: number, toCy: number) {
  const x1 = fromCx + NODE_WIDTH / 2;
  const y1 = fromCy;
  const x2 = toCx - NODE_WIDTH / 2 - 2;
  const y2 = toCy;
  if (y1 === y2) {
    return `M ${x1} ${y1} L ${x2} ${y2}`;
  }
  return `M ${x1} ${y1} C ${x1 + 40} ${y1}, ${x2 - 40} ${y2}, ${x2} ${y2}`;
}

export default function ServiceRow({ service }: { service: any }) {
  const [isHovered, setIsHovered] = useState(false);

  // Calculate delays
  const nodesWithDelay = service.workflow.nodes.map((n: any, i: number) => ({
    ...n,
    delay: i * 0.07,
  }));

  const edgesWithDelay = service.workflow.edges.map((e: any) => {
    const fromNode = nodesWithDelay.find((n: any) => n.id === e.from);
    const toNode = nodesWithDelay.find((n: any) => n.id === e.to);
    return {
      ...e,
      path: generatePath(fromNode.cx, fromNode.cy, toNode.cx, toNode.cy),
      delay: Math.max(fromNode.delay, toNode.delay) + 0.1,
    };
  });

  const maxNodeDelay = Math.max(...nodesWithDelay.map((n: any) => n.delay));

  return (
    <div
      className="group border-b border-[#E2E2DC] transition-colors relative overflow-hidden"
      style={{
        backgroundColor: isHovered ? service.bgTint : "#FFFFFF",
        borderLeft: isHovered ? `5px solid ${service.hex}` : `3px solid ${service.hex}`,
        transition: "all 0.3s ease",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ghost Number */}
      <div
        className="absolute right-8 top-12 font-heading font-extrabold text-[80px] pointer-events-none transition-all duration-300 ease-out"
        style={{
          color: service.hex,
          opacity: isHovered ? 0.12 : 0.06,
          transform: isHovered ? "scale(1.05) translateY(-20%)" : "scale(1) translateY(-20%)",
          transformOrigin: "right center",
        }}
      >
        {service.num}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 md:py-12 flex flex-col relative z-10">
        {/* Summary Line */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="w-full md:w-1/2">
            <h3
              className="font-heading font-bold text-3xl mb-2 transition-colors duration-300"
              style={{ color: isHovered ? service.hex : "#0F1A12" }}
            >
              {service.title}
            </h3>
            <p className="text-[#6B7280] text-lg">{service.desc}</p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col md:items-end gap-4">
            <div className="relative h-[20px] w-full flex md:justify-end">
              <AnimatePresence>
                {!isHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute font-mono text-[11px] text-[#6B7280] uppercase tracking-widest"
                  >
                    {service.steps}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link
              href="/services"
              className="font-bold transition-colors hover:text-[#0F1A12] group/link"
              style={{ color: service.hex }}
            >
              Explore Service{" "}
              <span
                className="inline-block transition-transform duration-300"
                style={{ transform: isHovered ? "translateX(8px)" : "translateX(0)" }}
              >
                &rarr;
              </span>
            </Link>
          </div>
        </div>

        {/* Expanded Panel */}
        <div
          className="overflow-hidden transition-all duration-500"
          style={{
            maxHeight: isHovered ? "320px" : "0px",
            opacity: isHovered ? 1 : 0,
            transitionTimingFunction: isHovered ? "cubic-bezier(0.4, 0, 0.2, 1)" : "ease",
            transitionDelay: isHovered ? "0s, 0.1s" : "0s, 0s",
            transitionProperty: "max-height, opacity",
          }}
        >
          <div className="pt-8 w-full overflow-x-auto">
            <div className="min-w-[800px]">
              <svg width="100%" height="260" viewBox="0 0 1000 260">
                <defs>
                  <marker
                    id={`arrow-${service.id}`}
                    viewBox="0 0 10 10"
                    refX="8"
                    refY="5"
                    markerWidth="5"
                    markerHeight="5"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 0 L 10 5 L 0 10 z" fill={service.hex} />
                  </marker>
                </defs>

                {/* Edges */}
                {edgesWithDelay.map((edge: any, i: number) => (
                  <motion.path
                    key={`edge-${i}`}
                    d={edge.path}
                    fill="none"
                    stroke={service.hex}
                    strokeWidth="1.5"
                    strokeOpacity="0.3"
                    markerEnd={`url(#arrow-${service.id})`}
                    initial={{ pathLength: 0 }}
                    animate={isHovered ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                      delay: isHovered ? edge.delay : 0,
                    }}
                  />
                ))}

                {/* Nodes */}
                {nodesWithDelay.map((node: any, i: number) => (
                  <motion.g
                    key={`node-${i}`}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                      delay: isHovered ? node.delay : 0,
                    }}
                    style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
                  >
                    <rect
                      x={node.cx - NODE_WIDTH / 2}
                      y={node.cy - NODE_HEIGHT / 2}
                      width={NODE_WIDTH}
                      height={NODE_HEIGHT}
                      rx="6"
                      fill={service.nodeFill}
                      stroke={service.hex}
                      strokeWidth="1"
                    />
                    <text
                      x={node.cx}
                      y={node.cy}
                      fill={service.hex}
                      fontFamily="var(--font-mono)"
                      fontSize="10"
                      fontWeight="bold"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      dy="1"
                    >
                      {node.text}
                    </text>
                  </motion.g>
                ))}
              </svg>

              {/* Tools Row */}
              <motion.div
                className="flex items-center gap-6 mt-2 pb-4"
                initial={{ opacity: 0 }}
                animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  duration: 0.3,
                  delay: isHovered ? maxNodeDelay + 0.15 : 0,
                }}
              >
                <span
                  className="font-mono text-[10px] uppercase font-bold"
                  style={{ color: service.hex }}
                >
                  POWERED BY
                </span>
                {service.tools.map((tool: string, i: number) => (
                  <div
                    key={i}
                    className="text-[12px] font-bold text-[#6B7280] opacity-50 hover:opacity-100 transition-opacity cursor-default uppercase tracking-wider"
                  >
                    {tool}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
