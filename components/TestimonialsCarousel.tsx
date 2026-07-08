"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const testimonials = [
  {
    quote: "Watch How didn't just run our marketing — they rebuilt how we think about GTM entirely. Pipeline went from unpredictable to a machine we could actually rely on.",
    name: "Client Name",
    title: "CEO",
    company: "Company Name",
    logo: null,
    highlight: "pipeline went from unpredictable to a machine"
  },
  {
    quote: "Within 60 days of working with Watch How, our LinkedIn response rate tripled and we were booking meetings with accounts we'd been chasing for years.",
    name: "Client Name",
    title: "Founder",
    company: "Company Name",
    logo: null,
    highlight: "booking meetings with accounts we'd been chasing"
  },
  {
    quote: "Every agency promised results. Watch How is the first team that showed us the exact engine behind them. Transparent, fast, and genuinely invested in our growth.",
    name: "Client Name",
    title: "Marketing Director",
    company: "Company Name",
    logo: null,
    highlight: "showed us the exact engine behind them"
  },
  {
    quote: "The flywheel concept isn't a pitch — it's real. Content, ads, and outbound all feeding each other meant our cost per lead dropped 40% in the first quarter.",
    name: "Client Name",
    title: "Head of Growth",
    company: "Company Name",
    logo: null,
    highlight: "cost per lead dropped 40% in the first quarter"
  },
];

const renderWithHighlight = (quote: string, highlight: string) => {
  if (!highlight) return quote;
  const parts = quote.split(highlight);
  if (parts.length < 2) return quote;
  return (
    <>
      {parts[0]}
      <span className="text-[#159870]">{highlight}</span>
      {parts[1]}
    </>
  );
};

const slideVariants = {
  enter: (direction: string) => ({
    opacity: 0,
    x: direction === "next" ? 40 : -40,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: string) => ({
    opacity: 0,
    x: direction === "next" ? -40 : 40,
  }),
};

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState("next");

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection("next");
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > active ? "next" : "prev");
    setActive(index);
  };

  const testimonial = testimonials[active];

  return (
    <div className="w-full">
      <div className="relative max-w-3xl mx-auto h-[380px] sm:h-[320px] md:h-[280px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={active}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            {/* Large decorative quote mark */}
            <div className="absolute -top-8 -left-4 text-[120px] leading-none text-[#159870] opacity-10 font-black pointer-events-none select-none">
              &quot;
            </div>

            {/* Card */}
            <div className="bg-[#F7F7F5] rounded-3xl p-10 md:p-12 border border-[#E2E2DC] relative h-full flex flex-col justify-between">
              {/* Quote text */}
              <p className="text-[#0F1A12] text-[clamp(18px,2vw,22px)] leading-[1.65] font-medium mb-8">
                {renderWithHighlight(testimonial.quote, testimonial.highlight)}
              </p>

              <div>
                {/* Divider */}
                <div className="w-10 h-[1.5px] bg-[#E2E2DC] mb-8" />

                {/* Author row — clean flex alignment */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-11 h-11 rounded-full flex-shrink-0 bg-[#159870]/15 border border-[#159870]/30 flex items-center justify-center">
                    <span className="text-[#159870] font-bold text-[15px]">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>

                  {/* Name + title stacked */}
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[#0F1A12] font-semibold text-[15px] leading-tight">
                      {testimonial.name}
                    </span>
                    <span className="text-[#6B7280] text-[13px] leading-tight">
                      {testimonial.title} · {testimonial.company}
                    </span>
                  </div>

                  {/* Logo pushed to far right if available */}
                  {testimonial.logo && (
                    <img
                      src={testimonial.logo}
                      alt={testimonial.company}
                      className="h-6 ml-auto opacity-40 hover:opacity-70 transition-opacity"
                    />
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots + Arrows */}
      <div className="flex items-center justify-center gap-6 mt-10">
        {/* Prev arrow */}
        <button
          onClick={() => goTo((active - 1 + testimonials.length) % testimonials.length)}
          className="w-10 h-10 rounded-full border border-[#E2E2DC] flex items-center justify-center text-[#6B7280] hover:border-[#159870] hover:text-[#159870] transition-all"
        >
          &larr;
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 h-2 bg-[#159870]"
                  : "w-2 h-2 bg-[#D1D5DB]"
              }`}
            />
          ))}
        </div>

        {/* Next arrow */}
        <button
          onClick={() => goTo((active + 1) % testimonials.length)}
          className="w-10 h-10 rounded-full border border-[#E2E2DC] flex items-center justify-center text-[#6B7280] hover:border-[#159870] hover:text-[#159870] transition-all"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}
