import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* PAGE HERO */}
      <section className="pt-[160px] pb-[80px] px-6 bg-base text-center">
        <div className="max-w-3xl mx-auto">
          <div className="font-mono text-[11px] text-radiant-yellow tracking-[0.14em] mb-6 uppercase">
            Pricing
          </div>
          <h1 className="font-heading font-extrabold text-[56px] md:text-[88px] leading-[0.95] tracking-tight text-white mb-8">
            Transparent pricing.
            <br />
            Zero surprises.
          </h1>
          <p className="text-xl text-text-secondary">
            Pick the package that matches your GTM ambition. Every tier includes
            the full Watch How flywheel — we just scale the volume.
          </p>
        </div>
      </section>

      {/* PRICING TABLE */}
      <section className="py-[80px] px-6 bg-base">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* BASIC */}
          <div className="bg-surface rounded-3xl p-10 border border-[#2A2A2A] flex flex-col h-full">
            <div className="font-mono text-[11px] text-text-secondary uppercase tracking-widest mb-4">
              Basic
            </div>
            <div className="flex items-baseline gap-2 mb-8">
              <div className="font-heading font-extrabold text-[56px] text-white">
                $1,800
              </div>
              <div className="text-text-secondary">/ month</div>
            </div>
            <div className="w-full h-[1px] bg-[#2A2A2A] mb-8"></div>
            <ul className="flex flex-col gap-6 mb-12 flex-grow">
              {[
                "1,000 Leads / Month",
                "8 Posts / Month",
                "<$4k Ad Spend / Month",
                "2 Creative Assets / Month",
                "Monthly Report",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <span className="text-gtm-green">✓</span> {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="w-full border border-[#2A2A2A] text-white font-bold h-[48px] rounded-full flex items-center justify-center transition-colors hover:border-gtm-green hover:text-gtm-green"
            >
              Get Started &rarr;
            </Link>
          </div>

          {/* ADVANCED */}
          <div className="bg-surface rounded-3xl p-10 border-2 border-gtm-green flex flex-col h-full relative scale-100 md:scale-105 z-10 shadow-2xl shadow-gtm-green/10">
            <div className="absolute top-6 right-6 bg-gtm-green text-base font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full font-bold">
              Most Popular
            </div>
            <div className="font-mono text-[11px] text-text-secondary uppercase tracking-widest mb-4">
              Advanced
            </div>
            <div className="flex items-baseline gap-2 mb-8">
              <div className="font-heading font-extrabold text-[56px] text-white">
                $3,000
              </div>
              <div className="text-text-secondary">/ month</div>
            </div>
            <div className="w-full h-[1px] bg-[#2A2A2A] mb-8"></div>
            <ul className="flex flex-col gap-6 mb-12 flex-grow">
              {[
                "5,000 Leads / Month",
                "16 Posts / Month",
                "<$20k Ad Spend / Month",
                "8 Creative Assets / Month",
                "Bi-Weekly Reports",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <span className="text-gtm-green">✓</span> {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="w-full bg-gtm-green text-base font-heading font-bold text-lg h-[56px] rounded-full flex items-center justify-center transition-colors hover:bg-radiant-yellow"
            >
              Book a Call &rarr;
            </Link>
          </div>

          {/* PROFESSIONAL */}
          <div className="bg-surface rounded-3xl p-10 border border-[#2A2A2A] flex flex-col h-full">
            <div className="font-mono text-[11px] text-text-secondary uppercase tracking-widest mb-4">
              Professional
            </div>
            <div className="flex items-baseline gap-2 mb-8">
              <div className="font-heading font-extrabold text-[56px] text-white">
                $7,000
              </div>
              <div className="text-text-secondary">/ month</div>
            </div>
            <div className="w-full h-[1px] bg-[#2A2A2A] mb-8"></div>
            <ul className="flex flex-col gap-6 mb-12 flex-grow">
              {[
                "Unlimited Leads",
                "Up to 60 Posts / Month",
                ">$20k Ad Spend / Month",
                "Unlimited Creative Assets",
                "Real-Time Dashboard",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <span className="text-gtm-green">✓</span> {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="w-full border border-[#2A2A2A] text-white font-bold h-[48px] rounded-full flex items-center justify-center transition-colors hover:border-gtm-green hover:text-gtm-green"
            >
              Book a Call &rarr;
            </Link>
          </div>
        </div>
        <p className="text-center text-sm text-text-secondary mt-12 mb-24">
          All plans include the full GTM flywheel: Content + Outbound + Paid Ads
          + Web Management. Prices in USD.
        </p>
      </section>

      <CtaBanner />
    </div>
  );
}
