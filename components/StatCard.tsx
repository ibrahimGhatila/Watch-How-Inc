"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

export default function StatCard({
  value,
  suffix = "",
  label,
  colorClass,
}: {
  value: number;
  suffix?: string;
  label: string;
  colorClass: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 1500;
      const incrementTime = 30;
      const steps = duration / incrementTime;
      const increment = end / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(0) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num.toString();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-base rounded-2xl border border-[#2A2A2A] p-10 flex flex-col justify-center"
    >
      <div
        className={`font-heading font-extrabold text-[64px] md:text-[80px] leading-none mb-4 ${colorClass}`}
      >
        {formatNumber(displayValue)}
        {suffix}
      </div>
      <div className="text-text-secondary text-base">{label}</div>
    </motion.div>
  );
}
