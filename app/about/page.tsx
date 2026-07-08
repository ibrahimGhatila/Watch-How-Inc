import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import StatCard from "@/components/StatCard";
import HeroLetters from "@/components/HeroLetters";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Watch How Inc. is a dedicated GTM expert team — the layer between slow traditional agencies and soulless automation. We engineer your competitive advantage.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* PAGE HERO */}
      <section className="relative min-h-[100dvh] flex items-center pt-[140px] pb-[10%] px-6 md:px-[10%] overflow-hidden bg-white">
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="font-mono text-[11px] text-[#159870] tracking-[0.14em] mb-6 uppercase">
            About Us
          </div>
          <h1 className="font-heading font-extrabold text-[56px] md:text-[88px] leading-[0.95] tracking-tight text-[#0F1A12] mb-8">
            We don&apos;t offer marketing.
            <br />
            We <span className="text-gtm-green">e</span><span className="text-signal-orange">n</span><span className="text-electric-teal">g</span><span className="text-radiant-yellow">i</span><span className="text-deep-violet">n</span><span className="text-hot-magenta">e</span><span className="text-gtm-green">e</span><span className="text-signal-orange">r</span> your
            <br />
            competitive advantage.
          </h1>
          <p className="text-xl text-[#6B7280] max-w-3xl">
            Watch How Inc. is a dedicated GTM expert team — the layer between
            slow traditional agencies and soulless automation.
          </p>
        </div>
        <HeroLetters />
      </section>

      {/* WHO WE ARE */}
      <section className="py-[120px] px-6 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="font-heading font-extrabold text-[48px] md:text-[56px] leading-[1.05] tracking-tight text-[#0F1A12] mb-8">
              GTM experts.
              <br />
              Not account
              <br />
              managers.
            </h2>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-6 text-lg text-[#374151]">
            <p>
              Our mission is to build the unified GTM <span className="text-[#159870]">flywheel</span>. We believe that
              disconnected channels are the single biggest point of failure for
              growing B2B companies.
            </p>
            <p>
              Our vision is to make revenue generation predictable for any B2B
              company. The best of traditional strategy + the speed of
              automation. <span className="text-[#0F1A12] font-semibold">That&apos;s Watch How.</span>
            </p>
          </div>
        </div>
      </section>

      {/* RESULTS STATS */}
      <section className="py-[120px] px-6 bg-base">
        <div className="max-w-7xl mx-auto">
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

      {/* THE TEAM */}
      <section className="py-[120px] px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-[11px] text-deep-violet tracking-[0.14em] mb-6 uppercase">
            The Team
          </div>
          <h2 className="font-heading font-extrabold text-[40px] md:text-[52px] leading-[1.05] tracking-tight text-[#0F1A12] mb-16">
            Dedicated GTM experts. Not account managers.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Ibrahim Ghatila",
                role: "CEO",
                department: "Business Development",
                color: "#159870",
                photo: "/team/ibrahim.jpg",
                logos: ["/logos/pipefy.png", "/logos/s8.png", "/logos/tu-delhi.png"]
              },
              {
                name: "Alia Shamimi",
                role: "COO",
                department: "Admin & Operations",
                color: "#0097A7",
                photo: "/team/alia.jpg",
                logos: ["/logos/shopee.png", "/logos/bolt.png", "/logos/bunga.png"]
              },
              {
                name: "Fahd Rizwan",
                role: "CGO",
                department: "Business Development",
                color: "#F07832",
                photo: "/team/fahd.jpg",
                logos: ["/logos/500global.png", "/logos/ubc.png"]
              },
              {
                name: "Abdullah Alvi",
                role: "Sales Dev",
                department: "Business Development",
                color: "#6B46E0",
                photo: "/team/abdullah.jpg",
                logos: ["/logos/drexel.png", "/logos/gravel.png"]
              },
            ].map((member, i) => (
              <div key={member.name} className="flex flex-col items-start gap-4 group cursor-default">
                {/* Circular photo / Initials placeholder */}
                <div 
                  className="w-20 h-20 rounded-full flex-shrink-0 flex items-center justify-center text-white font-heading font-bold text-[22px] ring-2 ring-transparent group-hover:ring-[#159870] transition-all duration-300 overflow-hidden"
                  style={{ background: member.color }}
                >
                  {/* If we had real photos, we'd use <img src={member.photo} ... /> here */}
                  {member.name.charAt(0)}
                </div>

                {/* Name + Details */}
                <div>
                  <p className="font-heading font-bold text-[#0F1A12] text-[17px] leading-tight mb-1">
                    {member.name}
                  </p>

                  {/* Credential logos row */}
                  <div className="flex items-center gap-2 mb-3">
                    {member.logos.map((logo, idx) => (
                      <img 
                        key={idx} 
                        src={logo} 
                        alt="" 
                        className="h-4 w-auto object-contain opacity-40 grayscale" 
                      />
                    ))}
                  </div>

                  {/* Role — colored per person */}
                  <p 
                    className="font-mono text-[11px] uppercase tracking-[0.12em] mb-1"
                    style={{ color: member.color }}
                  >
                    {member.role}
                  </p>

                  {/* Department */}
                  <p className="text-[#6B7280] text-[13px]">
                    {member.department}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR CLIENTS */}
      <section className="py-[120px] px-6 bg-base">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
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
                className="flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer"
              >
                <div className="text-2xl font-heading font-bold text-[#0F1A12] mb-2">
                  {logo}
                </div>
                <div className="text-xs text-text-secondary">B2B Partner</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
