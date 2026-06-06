"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/pages/products" },
    { name: "About", href: "/pages/about" },
    { name: "Infrastructure", href: "/pages/infrastructure" },
    { name: "Contact", href: "/pages/contact" },
  ];

  return (
    <>
      {/* Import Cormorant Garamond + DM Sans from Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

        .header-root {
          font-family: 'DM Sans', sans-serif;
        }

        .nav-logo-text {
          font-family: 'Cormorant Garamond', serif;
        }

        /* Animated border bottom */
        .nav-link-line::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 1px;
          background: #c9a84c;
          transition: width 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .nav-link-line:hover::after,
        .nav-link-line.active::after {
          width: 100%;
        }

        /* Grain texture overlay */
        .grain-overlay {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
        }

        /* Mobile nav item stagger */
        .mobile-nav-item {
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        .mobile-open .mobile-nav-item {
          opacity: 1;
          transform: translateY(0);
        }
        .mobile-open .mobile-nav-item:nth-child(1) { transition-delay: 0.05s; }
        .mobile-open .mobile-nav-item:nth-child(2) { transition-delay: 0.10s; }
        .mobile-open .mobile-nav-item:nth-child(3) { transition-delay: 0.15s; }
        .mobile-open .mobile-nav-item:nth-child(4) { transition-delay: 0.20s; }
        .mobile-open .mobile-nav-item:nth-child(5) { transition-delay: 0.25s; }
        .mobile-open .mobile-nav-item:nth-child(6) { transition-delay: 0.30s; }

        .cta-btn {
          position: relative;
          overflow: hidden;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-size: 0.72rem;
          font-weight: 500;
        }
        .cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.15);
          transform: translateX(-110%) skewX(-20deg);
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .cta-btn:hover::before {
          transform: translateX(110%) skewX(-20deg);
        }

        .hamburger-line {
          display: block;
          width: 22px;
          height: 1.5px;
          background: currentColor;
          transition: transform 0.35s ease, opacity 0.25s ease;
          transform-origin: center;
        }
      `}</style>

      <header
        className={`header-root fixed top-0 left-0 z-50 w-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
          ${scrolled
            ? "bg-[#faf8f3]/96 backdrop-blur-2xl shadow-[0_1px_0_0_rgba(18,53,36,0.08),0_8px_40px_-8px_rgba(18,53,36,0.12)]"
            : "bg-transparent"
          }`}
      >
        {/* Grain texture */}
        <div className="grain-overlay absolute inset-0 z-0" />

        {/* Top accent line — only when not scrolled */}
        <div
          className={`absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent transition-opacity duration-700 ${
            scrolled ? "opacity-0" : "opacity-60"
          }`}
        />

        <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">

          {/* ── Logo ── */}
          <Link href="/" className="flex-shrink-0">
            <div className={`transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
              <Image
                src="/logo2.png"
                alt="BharatXAgro Logo"
                width={220}
                height={70}
                className={`w-auto transition-all duration-500 ${scrolled ? "h-10" : "h-[52px]"}`}
                priority
              />
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden items-center gap-9 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setActiveHover(item.href)}
                  onMouseLeave={() => setActiveHover(null)}
                  className={`nav-link-line relative text-[0.8rem] font-[400] tracking-[0.1em] uppercase transition-colors duration-300 ${
                    active ? "active" : ""
                  } ${
                    active
                      ? "text-[#c9a84c]"
                      : scrolled
                      ? "text-[#123524]/80 hover:text-[#123524]"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* ── CTA Button ── */}
          <div className="hidden md:block">
            <Link href="/pages/inquiry"
                className={`rounded-full px-7 py-[10px] transition-all duration-400 hover:-translate-y-[2px] hover:shadow-[0_8px_30px_-4px_rgba(201,168,76,0.5)]
                  ${scrolled
                    ? "bg-[#123524] text-[#c9a84c] border border-[#123524]"
                    : "bg-[#c9a84c] text-[#0d2518] border border-[#c9a84c]"
                  }`}
              >
                Inquiry
            </Link>
          </div>

          {/* ── Mobile Toggle ── */}
          <button
            className={`flex flex-col gap-[5px] p-2 md:hidden transition-colors duration-300 ${
              scrolled ? "text-[#123524]" : "text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="hamburger-line"
              style={mobileOpen ? { transform: "translateY(6.5px) rotate(45deg)" } : {}}
            />
            <span
              className="hamburger-line"
              style={mobileOpen ? { opacity: 0 } : {}}
            />
            <span
              className="hamburger-line"
              style={mobileOpen ? { transform: "translateY(-6.5px) rotate(-45deg)" } : {}}
            />
          </button>
        </div>

        {/* ── Thin Divider ── */}
        <div
          className={`absolute bottom-0 left-6 right-6 h-[1px] transition-all duration-700 ${
            scrolled
              ? "bg-[#123524]/8 opacity-100"
              : "opacity-0"
          }`}
        />

        {/* ── Mobile Menu ── */}
        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] md:hidden ${
            mobileOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className={`relative bg-[#faf8f3]/98 backdrop-blur-2xl border-t border-[#123524]/8 ${mobileOpen ? "mobile-open" : ""}`}>
            {/* Decorative left gold strip */}
            <div className="absolute left-0 top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-[#c9a84c]/40 to-transparent" />

            <nav className="flex flex-col px-8 py-6 gap-1">
              {navItems.map((item, i) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`mobile-nav-item flex items-center justify-between rounded-lg px-4 py-[14px] text-[0.8rem] tracking-[0.12em] uppercase font-[400] transition-all duration-300 ${
                      active
                        ? "text-[#c9a84c] bg-[#123524]/6"
                        : "text-[#123524]/70 hover:text-[#123524] hover:bg-[#123524]/4"
                    }`}
                  >
                    {item.name}
                    {active && (
                      <span className="w-1 h-1 rounded-full bg-[#c9a84c]" />
                    )}
                  </Link>
                );
              })}

              <div className="mobile-nav-item mt-3 pt-4 border-t border-[#123524]/8">
                <Link href="/pages/inquiry" onClick={() => setMobileOpen(false)}
                   className="w-full rounded-full bg-[#123524] py-3 text-[#c9a84c] border border-[#123524] hover:shadow-[0_6px_24px_-4px_rgba(18,53,36,0.35)] transition-all duration-300 hover:-translate-y-[1px]">
                    Inquiry
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}