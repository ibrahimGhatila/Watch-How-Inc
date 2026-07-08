"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Ticker from "@/components/Ticker";
import Flywheel from "@/components/Flywheel";
import StatCard from "@/components/StatCard";
import CtaBanner from "@/components/CtaBanner";
import HeroLetters from "@/components/HeroLetters";
import ProblemSection from "@/components/ProblemSection";
import ServiceRow from "@/components/ServiceRow";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import RoadmapSection from "@/components/RoadmapSection";

const servicesData = [
  {
    id: "content",
    num: "01",
    name: "Content",
    title: "Authority Based Content.",
    desc: "Build foundational trust before the first sales call.",
    hex: "#1D6B44",
    bgTint: "#F0FFF7",
    nodeFill: "#F0FFF7",
    steps: "Ideation → Content Writing → Design → Posts",
    tools: ["Beehiiv", "Meta", "LinkedIn", "Gemini"],
    workflow: {
      nodes: [
        { id: "ideation", text: "IDEATION", cx: 100, cy: 130, col: 0 },
        { id: "writing", text: "CONTENT WRITING", cx: 300, cy: 130, col: 1 },
        { id: "design", text: "DESIGN", cx: 500, cy: 130, col: 2 },
        { id: "tof", text: "TOP OF FUNNEL", cx: 700, cy: 50, col: 3 },
        { id: "mof", text: "MIDDLE OF FUNNEL", cx: 700, cy: 130, col: 3 },
        { id: "bof", text: "BOTTOM OF FUNNEL", cx: 700, cy: 210, col: 3 },
        { id: "posts", text: "POSTS", cx: 900, cy: 130, col: 4 },
      ],
      edges: [
        { from: "ideation", to: "writing" },
        { from: "writing", to: "design" },
        { from: "design", to: "tof" },
        { from: "design", to: "mof" },
        { from: "design", to: "bof" },
        { from: "tof", to: "posts" },
        { from: "mof", to: "posts" },
        { from: "bof", to: "posts" },
      ]
    }
  },
  {
    id: "paidads",
    num: "02",
    name: "Paid Ads",
    title: "Revenue-Optimized Ads.",
    desc: "Ad spend as a calculated investment, not a gamble.",
    hex: "#F07832",
    bgTint: "#FFF7F0",
    nodeFill: "#FFF7F0",
    steps: "ICP Definition → Ad Design → Targeting → Conversion",
    tools: ["Canva", "Meta", "LinkedIn", "Photoshop"],
    workflow: {
      nodes: [
        { id: "icp", text: "IDEAL CUSTOMER DEF.", cx: 100, cy: 50, col: 0 },
        { id: "accounts", text: "ACCOUNT LIST", cx: 100, cy: 130, col: 0 },
        { id: "assets", text: "CREATIVE ASSETS", cx: 100, cy: 210, col: 0 },
        { id: "design", text: "AD DESIGN", cx: 300, cy: 130, col: 1 },
        { id: "targeting", text: "TARGETING", cx: 500, cy: 130, col: 2 },
        { id: "awareness", text: "AWARENESS", cx: 700, cy: 50, col: 3 },
        { id: "consideration", text: "CONSIDERATION", cx: 700, cy: 130, col: 3 },
        { id: "conversion", text: "CONVERSION", cx: 700, cy: 210, col: 3 },
        { id: "ads", text: "ADS", cx: 900, cy: 130, col: 4 },
      ],
      edges: [
        { from: "icp", to: "design" },
        { from: "accounts", to: "design" },
        { from: "assets", to: "design" },
        { from: "design", to: "targeting" },
        { from: "targeting", to: "awareness" },
        { from: "targeting", to: "consideration" },
        { from: "targeting", to: "conversion" },
        { from: "awareness", to: "ads" },
        { from: "consideration", to: "ads" },
        { from: "conversion", to: "ads" },
      ]
    }
  },
  {
    id: "outbound",
    num: "03",
    name: "Outbound",
    title: "Intent-Driven Outbound.",
    desc: "Find buyers at the exact moment of intent.",
    hex: "#0097A7",
    bgTint: "#F0FFFE",
    nodeFill: "#F0FFFE",
    steps: "Signal Selection → Lead Scoring → Sourcing → Sequences",
    tools: ["Instantly", "LinkedIn", "Perplexity", "OpenAI"],
    workflow: {
      nodes: [
        { id: "infra", text: "EMAIL INFRASTRUCTURE", cx: 100, cy: 50, col: 0 },
        { id: "matrix", text: "IDEAL CUSTOMER MATRIX", cx: 100, cy: 130, col: 0 },
        { id: "scoping", text: "MARKET SCOPING", cx: 100, cy: 210, col: 0 },
        { id: "signal", text: "SIGNAL SELECTION", cx: 300, cy: 130, col: 1 },
        { id: "scoring", text: "LEAD SCORING & TIERING", cx: 500, cy: 130, col: 2 },
        { id: "sourcing", text: "COMPANY & LEAD SOURCING", cx: 700, cy: 130, col: 3 },
        { id: "high", text: "HIGH INTENT", cx: 900, cy: 50, col: 4 },
        { id: "medium", text: "MEDIUM INTENT", cx: 900, cy: 130, col: 4 },
        { id: "low", text: "LOW INTENT", cx: 900, cy: 210, col: 4 },
      ],
      edges: [
        { from: "infra", to: "signal" },
        { from: "matrix", to: "signal" },
        { from: "scoping", to: "signal" },
        { from: "signal", to: "scoring" },
        { from: "scoring", to: "sourcing" },
        { from: "sourcing", to: "high" },
        { from: "sourcing", to: "medium" },
        { from: "sourcing", to: "low" },
      ]
    }
  },
  {
    id: "web",
    num: "04",
    name: "Web",
    title: "Web Management.",
    desc: "SEO, AEO, and content management that compounds.",
    hex: "#6B46E0",
    bgTint: "#F5F0FF",
    nodeFill: "#F5F0FF",
    steps: "SEO → Ask Engine Optimization → Paid → Analytics",
    tools: ["Ahrefs", "Google Analytics", "Figma", "Webflow"],
    workflow: {
      nodes: [
        { id: "seo", text: "SEO", cx: 100, cy: 50, col: 0 },
        { id: "ads", text: "PAID ADS", cx: 100, cy: 130, col: 0 },
        { id: "aeo", text: "ASK ENGINE OPTIMIZATION", cx: 100, cy: 210, col: 0 },
        { id: "visitors", text: "WEBSITE VISITORS", cx: 366, cy: 130, col: 1 },
        { id: "analytics", text: "WEBSITE ANALYTICS", cx: 633, cy: 130, col: 2 },
        { id: "content", text: "CONTENT MANAGEMENT", cx: 900, cy: 130, col: 3 },
      ],
      edges: [
        { from: "seo", to: "visitors" },
        { from: "ads", to: "visitors" },
        { from: "aeo", to: "visitors" },
        { from: "visitors", to: "analytics" },
        { from: "analytics", to: "content" },
      ]
    }
  }
];

export default function Home() {
  const [flywheelSize, setFlywheelSize] = useState(480);

  useEffect(() => {
    const handleResize = () => {
      setFlywheelSize(window.innerWidth < 768 ? window.innerWidth - 48 : 480);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const tickerItems = [
    <span
      key="1"
      className="font-mono text-[12px] text-text-secondary mx-8 flex items-center gap-8"
    >
      10 Active Clients{" "}
      <span className="w-1.5 h-1.5 rounded-full bg-gtm-green"></span>
    </span>,
    <span
      key="2"
      className="font-mono text-[12px] text-text-secondary mx-8 flex items-center gap-8"
    >
      <span className="text-radiant-yellow">60,000,000+</span> Ad Views{" "}
      <span className="w-1.5 h-1.5 rounded-full bg-signal-orange"></span>
    </span>,
    <span
      key="3"
      className="font-mono text-[12px] text-text-secondary mx-8 flex items-center gap-8"
    >
      <span className="text-radiant-yellow">$1,000,000+</span> Revenue Generated{" "}
      <span className="w-1.5 h-1.5 rounded-full bg-electric-teal"></span>
    </span>,
    <span
      key="4"
      className="font-mono text-[12px] text-text-secondary mx-8 flex items-center gap-8"
    >
      <span className="text-radiant-yellow">27%</span> LinkedIn Response Rate{" "}
      <span className="w-1.5 h-1.5 rounded-full bg-deep-violet"></span>
    </span>,
    <span
      key="5"
      className="font-mono text-[12px] text-text-secondary mx-8 flex items-center gap-8"
    >
      <span className="text-radiant-yellow">500,000+</span> Website Views{" "}
      <span className="w-1.5 h-1.5 rounded-full bg-gtm-green"></span>
    </span>,
  ];

  const logoTickerItems = [
    "ROCO",
    "Engineering For Kids",
    "Wiser Machines",
    "Stella Logistics",
    "Brentwood Signature 27",
    "Facing North Travel",
    "Singularity Polymers",
  ].map((logo, i) => (
    <div
      key={i}
      className="text-2xl font-heading font-bold text-text-secondary hover:text-white transition-colors mx-10 grayscale hover:grayscale-0 cursor-pointer"
    >
      {logo}
    </div>
  ));

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[100dvh] flex items-center pt-[140px] pb-[10%] px-6 md:px-[10%] overflow-hidden bg-white">
        <div className="relative z-10 max-w-[600px]">
          <div className="font-mono text-[11px] text-[#6B7280] tracking-[0.14em] mb-6 uppercase">
            Watch How Inc. — GTM Agency
          </div>
          <h1 className="font-heading font-extrabold text-[clamp(52px,6vw,88px)] leading-[0.92] tracking-tight text-[#0F1A12] mb-8">
            Watch how we
            <br />
            <span className="text-gtm-green">1</span>
            <span className="text-signal-orange">0</span>
            <span className="text-electric-teal">x</span> your
            <br />
            revenue<span className="text-radiant-yellow">.</span>
          </h1>
          <p className="text-xl text-[#6B7280] max-w-[540px] mb-12">
            Content. Outbound. Paid Ads. Web.
            <br />
            All synchronized. All for revenue.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-gtm-green text-white font-heading font-bold text-lg h-[56px] px-[32px] rounded-full flex items-center justify-center transition-colors hover:bg-signal-orange btn-press"
            >
              Book a Call
            </Link>
            <Link
              href="#how-it-works"
              className="border border-[#E2E2DC] text-[#0F1A12] font-heading font-bold text-lg h-[56px] px-[32px] rounded-full flex items-center justify-center transition-colors hover:border-gtm-green hover:text-gtm-green group"
            >
              Watch How It Works <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">&darr;</span>
            </Link>
          </div>
        </div>

        <HeroLetters />
      </section>

      {/* SOCIAL PROOF TICKER */}
      <Ticker items={tickerItems} />

      {/* THE PROBLEM */}
      <ProblemSection />

      {/* THE FLYWHEEL (THE SOLUTION) */}
      <section id="how-it-works" className="py-14 md:py-[140px] px-6 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-[45%] md:sticky md:top-32">
            <div className="font-mono text-[11px] text-gtm-green tracking-[0.14em] mb-6 uppercase flex items-center gap-2">
              <span className="w-4 h-[1px] bg-gtm-green"></span>
              The Solution
            </div>
            <h2 className="font-heading font-extrabold text-[40px] md:text-[52px] leading-[1.05] tracking-tight text-[#0F1A12] mb-6">
              One Unified GTM Engine.
            </h2>
            <p className="text-lg text-[#6B7280] max-w-[440px] mb-10">
              We synchronize Content, Paid Ads, and Outbound into a single
              automated revenue flywheel. Everything feeds everything. No silos.
              No wasted spend.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-gtm-green font-bold hover:text-signal-orange transition-colors group"
            >
              Book a Call <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
          <div className="w-full md:w-[55%] flex flex-col items-center justify-center mt-6 md:mt-0">
            <Flywheel size={flywheelSize} />
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="bg-white w-full">
        {servicesData.map((service, i) => (
          <ServiceRow key={service.id} service={service} />
        ))}
      </section>

      {/* RESULTS / SOCIAL PROOF */}
      <section className="py-[120px] px-6 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-[11px] text-signal-orange tracking-[0.14em] mb-6 uppercase flex items-center gap-2">
            <span className="w-4 h-[1px] bg-signal-orange"></span>
            Results
          </div>
          <h2 className="font-heading font-extrabold text-[40px] md:text-[52px] leading-[1.05] tracking-tight text-[#0F1A12] mb-16">
            Numbers that don&apos;t lie.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <StatCard
              value={60}
              suffix="M+"
              label="Total Ad Views"
              colorClass="text-signal-orange"
            />
            <StatCard
              value={1}
              suffix="M+"
              label="Revenue Generated"
              colorClass="text-gtm-green"
            />
            <StatCard
              value={27}
              suffix="%"
              label="LinkedIn Response Rate"
              colorClass="text-electric-teal"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StatCard
              value={500}
              suffix="K+"
              label="Total Website Views"
              colorClass="text-deep-violet"
            />
            <StatCard
              value={10}
              suffix=""
              label="Active Clients"
              colorClass="text-radiant-yellow"
            />
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section className="py-[80px] bg-white border-b border-[#E2E2DC]">
        <div className="text-center font-mono text-[11px] text-[#6B7280] tracking-[0.14em] mb-12 uppercase">
          Trusted By
        </div>
        <Ticker items={logoTickerItems} speed="fast" />
      </section>

      {/* THE ROADMAP */}
      <RoadmapSection />

      {/* WHAT CLIENTS SAY */}
      <section className="bg-[#FFFFFF] py-24 px-8 overflow-hidden">
        {/* Section label */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-[#159870]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#159870]">
            What Clients Say
          </span>
          <div className="w-8 h-[2px] bg-[#159870]" />
        </div>

        {/* Heading */}
        <h2 className="font-black text-[#0F1A12] text-center text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-tight mb-16">
          Results speak
          <br />
          <span className="text-[#159870]">louder than claims.</span>
        </h2>

        {/* Carousel */}
        <TestimonialsCarousel />

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 mt-16">
          <Link
            href="/contact"
            className="bg-[#159870] text-white font-bold text-[16px] h-14 px-10 rounded-full hover:bg-[#F07832] transition-all duration-200 hover:-translate-y-1 flex items-center justify-center"
          >
            Book Your Free GTM Audit &rarr;
          </Link>
          <p className="text-[#6B7280] text-[13px] font-mono uppercase tracking-widest">
            30 minutes · No commitment · Real insights
          </p>
        </div>
      </section>

      {/* CTA BANNER */}
      <CtaBanner />
    </div>
  );
}
