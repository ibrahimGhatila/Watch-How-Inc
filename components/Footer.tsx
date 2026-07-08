import Link from "next/link";
import { Linkedin, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#159870] pt-20 pb-12 relative z-10 border-t border-white/15">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 mb-20">
          <div className="md:col-span-6">
            <Link href="/" className="inline-block mb-4">
              <div
                className="text-[48px] font-black tracking-tight leading-none text-white"
              >
                WATCH HOW
              </div>
            </Link>
            <p className="text-white/70 italic text-lg max-w-sm">
              Watch how we 10x your revenue.
            </p>
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/35 flex items-center justify-center text-white hover:bg-white hover:text-[#159870] transition duration-200"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/35 flex items-center justify-center text-white hover:bg-white hover:text-[#159870] transition duration-200"
              >
                <Instagram size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/35 flex items-center justify-center text-white hover:bg-white hover:text-[#159870] transition duration-200"
              >
                <Twitter size={15} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-mono text-[11px] text-white/50 uppercase tracking-[0.14em] mb-6">
              Navigation
            </h4>
            <ul className="flex flex-col gap-4">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-[15px] text-white/85 hover:opacity-100 hover:translate-x-[3px] transition-all duration-200 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-mono text-[11px] text-white/50 uppercase tracking-[0.14em] mb-6">
              Get In Touch
            </h4>
            <ul className="flex flex-col gap-4 text-[15px] text-white/85">
              <li>info@watchhow.co</li>
              <li>+60 17 707 2594</li>
              <li>watchhow.co</li>
              <li>
                <Link
                  href="/contact"
                  className="text-white font-semibold hover:opacity-70 transition-opacity mt-2 inline-block group"
                >
                  Book a Call <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-white/50">
            © 2026 Watch How Inc. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_8px_#FFFFFF]"></div>
            <span className="font-mono text-[11px] text-white/50 uppercase tracking-wider">
              GTM Systems Operational
            </span>
          </div>
          <div className="flex gap-6 text-[13px] text-white/50">
            <Link
              href="#"
              className="hover:opacity-100 transition-opacity"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:opacity-100 transition-opacity"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
