"use client";

import { motion } from "motion/react";

export default function HeroLetters() {
  const letters = [
    { char: "W", color: "text-gtm-green", y: [-12, 12, -12], dur: 5, delay: 0 },
    { char: "A", color: "text-signal-orange", y: [-8, 8, -8], dur: 6.5, delay: 0.8 },
    { char: "T", color: "text-electric-teal", y: [-14, 10, -14], dur: 7, delay: 1.4 },
    { char: "C", color: "text-deep-violet", y: [-10, 14, -10], dur: 5.5, delay: 0.4 },
    { char: "H", color: "text-radiant-yellow", y: [-8, 12, -8], dur: 8, delay: 1.8 },
  ];

  return (
    <div className="absolute right-[6%] top-1/2 -translate-y-1/2 opacity-40 pointer-events-none hidden md:block">
      <div className="text-[280px] font-heading font-extrabold tracking-tighter leading-none flex flex-col items-center">
        <div className="flex">
          {letters.slice(0, 3).map((l, i) => (
            <motion.span
              key={i}
              className={`${l.color} inline-block origin-center`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.8 + i * 0.12,
              }}
            >
              <motion.span
                className="inline-block origin-center"
                animate={{ y: l.y, rotate: [-3, 3, -3] }}
                transition={{
                  duration: l.dur,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: l.delay,
                }}
              >
                {l.char}
              </motion.span>
            </motion.span>
          ))}
        </div>
        <div className="flex -mt-12">
          {letters.slice(3, 5).map((l, i) => (
            <motion.span
              key={i + 3}
              className={`${l.color} inline-block origin-center`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.8 + (i + 3) * 0.12,
              }}
            >
              <motion.span
                className="inline-block origin-center"
                animate={{ y: l.y, rotate: [-3, 3, -3] }}
                transition={{
                  duration: l.dur,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: l.delay,
                }}
              >
                {l.char}
              </motion.span>
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}
