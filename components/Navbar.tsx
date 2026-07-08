"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Now", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] h-[60px] md:h-[72px]"
            : "bg-white border-b border-[#E2E2DC] h-[60px] md:h-[72px]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-50">
            <div className="text-[28px] md:text-2xl font-heading font-bold tracking-tighter flex items-center">
              <span className="text-gtm-green">W</span>
              <span className="text-text-primary">atch </span>
              <span className="text-signal-orange ml-1">H</span>
              <span className="text-text-primary">ow</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-gtm-green ${
                  pathname === link.href
                    ? "text-gtm-green"
                    : "text-text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-gtm-green text-white font-bold text-sm h-[40px] px-[20px] rounded-full flex items-center justify-center transition-colors hover:bg-signal-orange nav-cta-pulse btn-press"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-50 text-text-primary w-10 h-10 flex items-center justify-center relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className={`absolute w-6 h-[1.5px] ${mobileMenuOpen ? 'bg-white' : 'bg-[#0F1A12]'}`}
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={`absolute w-6 h-[1.5px] ${mobileMenuOpen ? 'bg-white' : 'bg-[#0F1A12]'}`}
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                transition={{ duration: 0.3 }}
                className={`absolute w-6 h-[1.5px] ${mobileMenuOpen ? 'bg-white' : 'bg-[#0F1A12]'}`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-[60] bg-[#159870] flex flex-col md:hidden"
          >
            {/* Left accent border */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-white/20" />

            {/* Close button (Top Left as requested) */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 left-8 text-white w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity z-[70]"
            >
              <X size={28} strokeWidth={2} />
            </button>

            {/* Nav links — vertically centred */}
            <nav className="flex-1 flex flex-col justify-center px-10 gap-0 mt-12">
              {[
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Pricing", href: "/pricing" },
                { name: "Contact", href: "/contact" },
              ].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                    delay: 0.15 + i * 0.08,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center justify-between py-7 border-b border-white/20 first:border-t first:border-white/20"
                  >
                    <span className="font-heading font-bold text-white text-[clamp(48px,10vw,72px)] leading-none tracking-tight group-hover:opacity-70 transition-opacity duration-200">
                      {link.name}
                    </span>
                    <ArrowUpRight
                      size={32}
                      className="text-white/60 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200"
                      strokeWidth={1.5}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom bar */}
            <div className="flex items-end justify-between px-10 pb-10">
              {/* Logo mark bottom left */}
              <div className="text-2xl font-heading font-bold tracking-tighter text-white opacity-90">
                <span className="text-white">W</span>
                <span className="text-white">H</span>
              </div>

              {/* Social links bottom right */}
              <div className="flex items-center gap-2">
                {[
                  { label: "Email", href: "mailto:info@watchhow.co" },
                  { label: "Linkedin", href: "#" },
                  { label: "Instagram", href: "#" },
                ].map((s, i) => (
                  <span key={s.label} className="flex items-center gap-2">
                    <a
                      href={s.href}
                      className="font-heading font-bold text-white text-[15px] hover:opacity-60 transition-opacity"
                    >
                      {s.label}
                    </a>
                    {i < 2 && <span className="text-white/40 text-[15px]">·</span>}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
