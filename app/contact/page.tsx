import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import HeroLetters from "@/components/HeroLetters";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free 30-minute GTM audit. We'll show you exactly where your go-to-market is leaking — and map your 90-day path to fixing it.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* PAGE HERO */}
      <section className="relative min-h-[100dvh] flex items-center pt-[140px] pb-[10%] px-6 md:px-[10%] overflow-hidden bg-white">
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="font-mono text-[11px] text-[#159870] tracking-[0.14em] mb-6 uppercase">
            Contact
          </div>
          <h1 className="font-heading font-extrabold text-[56px] md:text-[88px] leading-[0.95] tracking-tight text-[#0F1A12] mb-8">
            Let&apos;s talk <span className="text-gtm-green">r</span><span className="text-signal-orange">e</span><span className="text-electric-teal">v</span><span className="text-radiant-yellow">e</span><span className="text-deep-violet">n</span><span className="text-hot-magenta">u</span><span className="text-gtm-green">e</span><span className="text-signal-orange">.</span>
          </h1>
          <p className="text-xl text-[#6B7280] max-w-3xl">
            30 minutes. We&apos;ll show you exactly where your GTM is leaking —
            and map your 90-day path to fixing it.
          </p>
        </div>
        <HeroLetters />
      </section>

      {/* CONTACT SPLIT */}
      <section className="py-[80px] px-6 bg-base">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          {/* Left — Booking Form */}
          <div className="w-full md:w-3/5">
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-secondary">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="bg-surface border border-[#2A2A2A] rounded-xl h-[52px] px-4 text-white focus:border-gtm-green focus:bg-[#1E1E1E] outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-secondary">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="bg-surface border border-[#2A2A2A] rounded-xl h-[52px] px-4 text-white focus:border-gtm-green focus:bg-[#1E1E1E] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-secondary">
                    Work Email
                  </label>
                  <input
                    type="email"
                    className="bg-surface border border-[#2A2A2A] rounded-xl h-[52px] px-4 text-white focus:border-gtm-green focus:bg-[#1E1E1E] outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-secondary">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="bg-surface border border-[#2A2A2A] rounded-xl h-[52px] px-4 text-white focus:border-gtm-green focus:bg-[#1E1E1E] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-secondary">
                    Company Size
                  </label>
                  <select className="bg-surface border border-[#2A2A2A] rounded-xl h-[52px] px-4 text-white focus:border-gtm-green focus:bg-[#1E1E1E] outline-none transition-colors appearance-none">
                    <option>1–10</option>
                    <option>11–50</option>
                    <option>51–200</option>
                    <option>200+</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-secondary">
                    Monthly Revenue Range
                  </label>
                  <select className="bg-surface border border-[#2A2A2A] rounded-xl h-[52px] px-4 text-white focus:border-gtm-green focus:bg-[#1E1E1E] outline-none transition-colors appearance-none">
                    <option>&lt;$50K</option>
                    <option>$50K–$500K</option>
                    <option>$500K–$2M</option>
                    <option>$2M+</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-secondary">
                  Message
                </label>
                <textarea className="bg-surface border border-[#2A2A2A] rounded-xl min-h-[140px] p-4 text-white focus:border-gtm-green focus:bg-[#1E1E1E] outline-none transition-colors resize-y"></textarea>
              </div>

              <button
                type="button"
                className="w-full bg-gtm-green text-base font-heading font-bold text-lg h-[56px] rounded-full flex items-center justify-center transition-colors hover:bg-radiant-yellow mt-4"
              >
                Book My Call &rarr;
              </button>
            </form>
          </div>

          {/* Right — Contact Info */}
          <div className="w-full md:w-2/5 flex flex-col gap-8">
            <div>
              <h3 className="font-heading font-bold text-2xl text-white mb-6">
                Prefer a quick message?
              </h3>
              <ul className="flex flex-col gap-4 text-lg text-text-primary">
                <li>
                  <a
                    href="mailto:info@watchhow.co"
                    className="hover:text-gtm-green transition-colors"
                  >
                    info@watchhow.co
                  </a>
                </li>
                <li>+60 17 707 2594</li>
                <li>watchhow.co</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-[#2A2A2A] flex items-center justify-center text-white hover:bg-gtm-green hover:border-gtm-green hover:text-base transition-colors"
              >
                in
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-[#2A2A2A] flex items-center justify-center text-white hover:bg-hot-magenta hover:border-hot-magenta hover:text-base transition-colors"
              >
                ig
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-[#2A2A2A] flex items-center justify-center text-white hover:bg-signal-orange hover:border-signal-orange hover:text-base transition-colors"
              >
                x
              </a>
            </div>

            <div className="text-sm text-text-secondary p-6 bg-surface rounded-xl border border-[#2A2A2A]">
              Response within 24 hours. Offices: Malaysia, USA, Canada,
              Singapore, Pakistan.
            </div>

            <button className="w-full bg-[#25D366] text-white font-heading font-bold text-lg h-[56px] rounded-full flex items-center justify-center transition-colors hover:bg-[#128C7E]">
              Chat on WhatsApp &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
