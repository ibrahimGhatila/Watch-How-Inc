import type { Metadata } from "next";
import Flywheel from "@/components/Flywheel";
import CtaBanner from "@/components/CtaBanner";
import HeroLetters from "@/components/HeroLetters";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Content, Outbound, Paid Ads, and Web Management — four services synchronized into a single revenue-generating flywheel. Every channel feeds the others.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* PAGE HERO */}
      <section className="relative min-h-[100dvh] flex items-center pt-[140px] pb-[10%] px-6 md:px-[10%] overflow-hidden bg-white">
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3">
            <div className="font-mono text-[11px] text-[#159870] tracking-[0.14em] mb-6 uppercase">
              What We Do
            </div>
            <h1 className="font-heading font-extrabold text-[56px] md:text-[88px] leading-[0.95] tracking-tight text-[#0F1A12] mb-8">
              Four services.
              <br />
              One <span className="text-gtm-green">f</span><span className="text-signal-orange">l</span><span className="text-electric-teal">y</span><span className="text-radiant-yellow">w</span><span className="text-deep-violet">h</span><span className="text-hot-magenta">e</span><span className="text-gtm-green">e</span><span className="text-signal-orange">l</span><span className="text-electric-teal">.</span>
            </h1>
            <p className="text-xl text-[#6B7280] max-w-[600px]">
              Content, Outbound, Paid Ads, and Web Management — synchronized
              into a single revenue-generating engine. Every channel feeds the
              others.
            </p>
          </div>
        </div>
        <HeroLetters />
      </section>

      {/* SERVICE 1 — CONTENT */}
      <section className="py-[120px] px-6 bg-base border-t border-[#1E1E1E]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="font-mono text-[11px] text-gtm-green tracking-[0.14em] mb-6 uppercase">
              01 — Content
            </div>
            <h2 className="font-heading font-extrabold text-[40px] md:text-[52px] leading-[1.05] tracking-tight text-[#0F1A12] mb-6">
              Authority Based Content.
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              We engineer your digital presence to build foundational trust,
              positioning your company and founders as the go-to experts in your
              niche — before the first sales call even happens.
            </p>
            <div className="flex gap-4 mb-8 grayscale opacity-50">
              <span className="font-bold">Beehiiv</span>
              <span className="font-bold">Meta</span>
              <span className="font-bold">LinkedIn</span>
            </div>
            <a
              href="/contact"
              className="text-gtm-green font-bold hover:text-radiant-yellow transition-colors"
            >
              Learn More About Content &rarr;
            </a>
          </div>
          <div className="w-full md:w-1/2 bg-surface p-12 rounded-3xl border border-[#2A2A2A]">
            <div className="flex flex-col gap-6 font-mono text-sm text-gtm-green">
              <div className="p-4 border border-gtm-green/30 rounded bg-gtm-green/5">
                Ideation
              </div>
              <div className="text-center">↓</div>
              <div className="p-4 border border-gtm-green/30 rounded bg-gtm-green/5">
                Content Writing
              </div>
              <div className="text-center">↓</div>
              <div className="p-4 border border-gtm-green/30 rounded bg-gtm-green/5">
                Design
              </div>
              <div className="text-center">↓</div>
              <div className="p-4 border border-gtm-green/30 rounded bg-gtm-green/5">
                Posts
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 2 — PAID ADS */}
      <section className="py-[120px] px-6 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="font-mono text-[11px] text-signal-orange tracking-[0.14em] mb-6 uppercase">
              02 — Paid Ads
            </div>
            <h2 className="font-heading font-extrabold text-[40px] md:text-[52px] leading-[1.05] tracking-tight text-[#0F1A12] mb-6">
              Ad Spend as an Investment.
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              We show your ads only to the specific companies you want to close,
              focusing on decision-makers to give you high-value leads without
              wasting budget.
            </p>
            <div className="flex gap-4 mb-8 grayscale opacity-50">
              <span className="font-bold">Canva</span>
              <span className="font-bold">Meta</span>
              <span className="font-bold">LinkedIn</span>
            </div>
            <a
              href="/contact"
              className="text-signal-orange font-bold hover:text-radiant-yellow transition-colors"
            >
              Learn More About Paid Ads &rarr;
            </a>
          </div>
          <div className="w-full md:w-1/2 bg-base p-12 rounded-3xl border border-[#2A2A2A]">
            <div className="flex flex-col gap-6 font-mono text-sm text-signal-orange">
              <div className="p-4 border border-signal-orange/30 rounded bg-signal-orange/5">
                ICP Definition
              </div>
              <div className="text-center">↓</div>
              <div className="p-4 border border-signal-orange/30 rounded bg-signal-orange/5">
                Ad Design
              </div>
              <div className="text-center">↓</div>
              <div className="p-4 border border-signal-orange/30 rounded bg-signal-orange/5">
                Targeting
              </div>
              <div className="text-center">↓</div>
              <div className="p-4 border border-signal-orange/30 rounded bg-signal-orange/5">
                Conversion
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 3 — OUTBOUND */}
      <section className="py-[120px] px-6 bg-base">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="font-mono text-[11px] text-electric-teal tracking-[0.14em] mb-6 uppercase">
              03 — Outbound
            </div>
            <h2 className="font-heading font-extrabold text-[40px] md:text-[52px] leading-[1.05] tracking-tight text-[#0F1A12] mb-6">
              Find Buyers at the Moment of Intent.
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              We enrich every lead and send hyper-personalized messages across
              Email, LinkedIn, and WhatsApp to meet them exactly where they are.
            </p>
            <div className="flex gap-4 mb-8 grayscale opacity-50">
              <span className="font-bold">Instantly</span>
              <span className="font-bold">PhantomBuster</span>
              <span className="font-bold">OpenAI</span>
            </div>
            <a
              href="/contact"
              className="text-electric-teal font-bold hover:text-radiant-yellow transition-colors"
            >
              Learn More About Outbound &rarr;
            </a>
          </div>
          <div className="w-full md:w-1/2 bg-surface p-12 rounded-3xl border border-[#2A2A2A]">
            <div className="flex flex-col gap-6 font-mono text-sm text-electric-teal">
              <div className="p-4 border border-electric-teal/30 rounded bg-electric-teal/5">
                Signal Selection
              </div>
              <div className="text-center">↓</div>
              <div className="p-4 border border-electric-teal/30 rounded bg-electric-teal/5">
                Lead Scoring
              </div>
              <div className="text-center">↓</div>
              <div className="p-4 border border-electric-teal/30 rounded bg-electric-teal/5">
                Company Sourcing
              </div>
              <div className="text-center">↓</div>
              <div className="p-4 border border-electric-teal/30 rounded bg-electric-teal/5">
                Sequences
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 4 — WEB MANAGEMENT */}
      <section className="py-[120px] px-6 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="font-mono text-[11px] text-deep-violet tracking-[0.14em] mb-6 uppercase">
              04 — Web Management
            </div>
            <h2 className="font-heading font-extrabold text-[40px] md:text-[52px] leading-[1.05] tracking-tight text-[#0F1A12] mb-6">
              Your Digital Presence, Managed.
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              SEO, Ask Engine Optimization, Paid Ads, and content management —
              driving qualified website visitors and converting them through
              intelligent analytics.
            </p>
            <div className="flex gap-4 mb-8 grayscale opacity-50">
              <span className="font-bold">Ahrefs</span>
              <span className="font-bold">Analytics</span>
              <span className="font-bold">Webflow</span>
            </div>
            <a
              href="/contact"
              className="text-deep-violet font-bold hover:text-radiant-yellow transition-colors"
            >
              Learn More About Web &rarr;
            </a>
          </div>
          <div className="w-full md:w-1/2 bg-base p-12 rounded-3xl border border-[#2A2A2A]">
            <div className="flex flex-col gap-6 font-mono text-sm text-deep-violet">
              <div className="p-4 border border-deep-violet/30 rounded bg-deep-violet/5">
                SEO + AEO
              </div>
              <div className="text-center">↓</div>
              <div className="p-4 border border-deep-violet/30 rounded bg-deep-violet/5">
                Website Visitors
              </div>
              <div className="text-center">↓</div>
              <div className="p-4 border border-deep-violet/30 rounded bg-deep-violet/5">
                Analytics
              </div>
              <div className="text-center">↓</div>
              <div className="p-4 border border-deep-violet/30 rounded bg-deep-violet/5">
                Content Management
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
