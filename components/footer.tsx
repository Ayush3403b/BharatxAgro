"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

/* ─── Floating particle data ─────────────────────────────── */
const PARTICLES = [
  // Makhana (lotus seed) — circular with texture lines
  { id: "m1", type: "makhana", x: 8,  y: 15, size: 38, dur: 18, delay: 0,    opacity: 0.18 },
  { id: "m2", type: "makhana", x: 22, y: 60, size: 28, dur: 22, delay: 3,    opacity: 0.13 },
  { id: "m3", type: "makhana", x: 55, y: 25, size: 44, dur: 20, delay: 7,    opacity: 0.15 },
  { id: "m4", type: "makhana", x: 78, y: 70, size: 32, dur: 25, delay: 1.5,  opacity: 0.12 },
  { id: "m5", type: "makhana", x: 90, y: 20, size: 24, dur: 19, delay: 5,    opacity: 0.10 },
  { id: "m6", type: "makhana", x: 42, y: 80, size: 36, dur: 23, delay: 9,    opacity: 0.14 },
  // Mushroom — classic cap shape
  { id: "s1", type: "mushroom", x: 15, y: 45, size: 40, dur: 21, delay: 2,   opacity: 0.14 },
  { id: "s2", type: "mushroom", x: 35, y: 10, size: 34, dur: 24, delay: 6,   opacity: 0.12 },
  { id: "s3", type: "mushroom", x: 65, y: 55, size: 48, dur: 17, delay: 4,   opacity: 0.16 },
  { id: "s4", type: "mushroom", x: 85, y: 35, size: 30, dur: 26, delay: 8,   opacity: 0.11 },
  { id: "s5", type: "mushroom", x: 50, y: 90, size: 26, dur: 20, delay: 11,  opacity: 0.10 },
  // Moringa leaf
  { id: "l1", type: "moringa",  x: 5,  y: 75, size: 36, dur: 22, delay: 1,   opacity: 0.13 },
  { id: "l2", type: "moringa",  x: 72, y: 12, size: 28, dur: 19, delay: 10,  opacity: 0.11 },
  { id: "l3", type: "moringa",  x: 30, y: 40, size: 42, dur: 28, delay: 4.5, opacity: 0.09 },
];

function MakhanaIcon({ size }: { size: number }) {
  const r = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <circle cx={r} cy={r} r={r - 1} fill="#f2c572" fillOpacity="0.9" />
      <circle cx={r} cy={r} r={r * 0.72} fill="#e8b84b" fillOpacity="0.5" />
      <circle cx={r} cy={r} r={r * 0.42} fill="#f2c572" fillOpacity="0.6" />
      {/* radial texture lines */}
      {[0,45,90,135,180,225,270,315].map((deg) => (
        <line
          key={deg}
          x1={r} y1={r}
          x2={r + (r - 3) * Math.cos((deg * Math.PI) / 180)}
          y2={r + (r - 3) * Math.sin((deg * Math.PI) / 180)}
          stroke="#c9903a"
          strokeWidth="0.8"
          strokeOpacity="0.5"
        />
      ))}
    </svg>
  );
}

function MushroomIcon({ size }: { size: number }) {
  const w = size;
  const h = size;
  return (
    <svg width={w} height={h} viewBox="0 0 40 44" fill="none">
      {/* stem */}
      <path d="M15 28 Q14 38 16 42 Q20 44 24 42 Q26 38 25 28Z" fill="#d4a96a" fillOpacity="0.7" />
      {/* cap */}
      <path d="M3 26 Q3 10 20 8 Q37 10 37 26 Q30 30 20 30 Q10 30 3 26Z" fill="#c9a84c" fillOpacity="0.85" />
      {/* cap highlight */}
      <ellipse cx="20" cy="16" rx="10" ry="5" fill="#f2c572" fillOpacity="0.35" />
      {/* spots */}
      <circle cx="13" cy="20" r="2.5" fill="#fff" fillOpacity="0.25" />
      <circle cx="20" cy="17" r="2"   fill="#fff" fillOpacity="0.2" />
      <circle cx="27" cy="21" r="2"   fill="#fff" fillOpacity="0.2" />
    </svg>
  );
}

function MoringaLeaf({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* stem */}
      <line x1="20" y1="38" x2="20" y2="8" stroke="#6aaa5a" strokeWidth="1.5" strokeOpacity="0.7" />
      {/* leaflets */}
      {[
        [20,30, -18], [20,30, 18],
        [20,22, -20], [20,22, 20],
        [20,14, -18], [20,14, 18],
        [20, 9,   0],
      ].map(([cx,cy,angle], i) => (
        <ellipse
          key={i}
          cx={cx + Math.sin((angle * Math.PI)/180) * 7}
          cy={cy - Math.abs(angle) * 0.04}
          rx="7" ry="4"
          fill="#7dc96b"
          fillOpacity="0.7"
          transform={`rotate(${angle} ${cx} ${cy})`}
        />
      ))}
    </svg>
  );
}

function FloatingParticle({ p }: { p: typeof PARTICLES[0] }) {
  const animId = `float-${p.id}`;
  return (
    <>
      <style>{`
        @keyframes ${animId} {
          0%   { transform: translateY(0px)   rotate(0deg)   scale(1); }
          25%  { transform: translateY(-18px) rotate(${p.id[0] === 'm' ? 6 : -5}deg) scale(1.04); }
          50%  { transform: translateY(-8px)  rotate(${p.id[0] === 'm' ? -4 : 8}deg) scale(0.97); }
          75%  { transform: translateY(-22px) rotate(${p.id[0] === 'm' ? 3 : -3}deg) scale(1.02); }
          100% { transform: translateY(0px)   rotate(0deg)   scale(1); }
        }
      `}</style>
      <div
        style={{
          position: "absolute",
          left: `${p.x}%`,
          top: `${p.y}%`,
          opacity: p.opacity,
          animation: `${animId} ${p.dur}s ease-in-out ${p.delay}s infinite`,
          filter: "blur(0.4px)",
          willChange: "transform",
        }}
      >
        {p.type === "makhana" && <MakhanaIcon size={p.size} />}
        {p.type === "mushroom" && <MushroomIcon size={p.size} />}
        {p.type === "moringa"  && <MoringaLeaf  size={p.size} />}
      </div>
    </>
  );
}

/* ─── Main Footer ────────────────────────────────────────── */
export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .footer-root {
          font-family: 'DM Sans', sans-serif;
        }
        .footer-display {
          font-family: 'Cormorant Garamond', serif;
        }
        .footer-link {
          position: relative;
          display: inline-block;
          color: rgba(255,255,255,0.6);
          font-size: 0.82rem;
          letter-spacing: 0.06em;
          transition: color 0.3s ease;
        }
        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #c9a84c;
          transition: width 0.35s cubic-bezier(0.25,1,0.5,1);
        }
        .footer-link:hover {
          color: #c9a84c;
        }
        .footer-link:hover::after {
          width: 100%;
        }

        .social-icon {
          width: 38px;
          height: 38px;
          border: 1px solid rgba(201,168,76,0.25);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          cursor: pointer;
          color: rgba(201,168,76,0.7);
        }
        .social-icon:hover {
          border-color: #c9a84c;
          background: rgba(201,168,76,0.08);
          color: #c9a84c;
          transform: translateY(-2px);
        }

        .col-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.05rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 1.6rem;
        }

        @keyframes shimmer-line {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .shimmer-divider {
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(201,168,76,0.0) 20%,
            rgba(201,168,76,0.5) 50%,
            rgba(201,168,76,0.0) 80%,
            transparent 100%
          );
          background-size: 200% auto;
          animation: shimmer-line 4s linear infinite;
        }

        .brand-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 5vw, 4.2rem);
          font-weight: 300;
          letter-spacing: 0.04em;
          line-height: 1;
          color: #f2c572;
        }
        .brand-title span {
          font-style: italic;
          font-weight: 400;
        }
      `}</style>

      <footer
        className="footer-root relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #071a12 0%, #0a2318 40%, #0d2b1e 100%)" }}
      >
        {/* ── Background grain ── */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
          }}
        />

        {/* ── Radial glow centre ── */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 110%, rgba(201,168,76,0.06) 0%, transparent 70%)",
          }}
        />

        {/* ── Floating particles ── */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          {PARTICLES.map((p) => (
            <FloatingParticle key={p.id} p={p} />
          ))}
        </div>

        {/* ── Top gold accent line ── */}
        <div className="shimmer-divider relative z-10" />

        {/* ── Main content ── */}
        <div className="relative z-10 mx-auto max-w-7xl px-8 md:px-14 pt-10 pb-6">

          {/* Brand Statement Row */}
          <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p
                className="footer-display mb-2 text-xs tracking-[0.35em] uppercase"
                style={{ color: "rgba(201,168,76,0.5)" }}
              >
                Since 2020 · India
              </p>
              <h2 className="brand-title">
                Bharat<span>X</span>Agro
              </h2>
              <p
                className="footer-display mt-3 text-lg font-light italic"
                style={{ color: "rgba(255,255,255,0.45)", letterSpacing: "0.02em" }}
              >
                {`From India's soil to the world's tables.`}
              </p>
            </div>

            {/* CTA pill */}
            <Link href="/pages/inquiry">
              <div
                className="inline-flex items-center gap-3 rounded-full px-7 py-3 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                style={{
                  border: "1px solid rgba(201,168,76,0.35)",
                  background: "rgba(201,168,76,0.06)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span
                  className="text-xs tracking-[0.2em] uppercase"
                  style={{ color: "#c9a84c" }}
                >
                  Begin Your Inquiry
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          </div>

          {/* ── Four Column Grid ── */}
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 mb-8">

            {/* Products */}
            <div>
              <p className="col-heading">Premium Products</p>
              <ul className="space-y-4">
                {[
                  { label: "Moringa",      href: "/pages/productlist/moringa" },
                  { label: "Makhana",      href: "/pages/productlist/makhana" },
                  { label: "Onion Powder", href: "/pages/productlist/onion" },
                  { label: "Mushrooms",    href: "/pages/productlist/mushrooms" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="footer-link">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="col-heading">Company</p>
              <ul className="space-y-4">
                {[
                  { label: "Infrastructure", href: "/pages/infrastructure" },
                  { label: "Products",        href: "/pages/products" },
                  { label: "Our Journey",     href: "/pages/about" },
                  { label: "Contact Us",      href: "/pages/contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="footer-link">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="col-heading">Reach Us</p>
              <div className="space-y-4">
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Export Tower,<br />New Delhi, India
                </p>
                <a
                  href="mailto:exports@bharatxagro.com"
                  className="footer-link block"
                >
                  exports@bharatxagro.com
                </a>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="col-heading">Connect</p>
              <div className="flex gap-3">
                {/* Globe */}
                <div className="social-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </div>
                {/* Instagram */}
                <div className="social-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                  </svg>
                </div>
                {/* LinkedIn */}
                <div className="social-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
                {/* Twitter / X */}
                <div className="social-icon">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L2.25 2.25H8.08l4.253 5.623 5.912-5.623Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
              </div>

              {/* Certifications */}
              <div className="mt-8 space-y-2">
                {["APEDA Certified", "FSSAI Licensed", "ISO 22000"].map((cert) => (
                  <div key={cert} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full" style={{ background: "#c9a84c" }} />
                    <span className="text-xs tracking-wide" style={{ color: "rgba(255,255,255,0.35)" }}>
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Shimmer divider ── */}
          <div className="shimmer-divider mb-8" />

          {/* ── Bottom bar ── */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs tracking-[0.12em]" style={{ color: "rgba(255,255,255,0.28)" }}>
              © 2025 BharatXAgro. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Use", "Export Policy"].map((item) => (
                <Link key={item} href="#" className="footer-link" style={{ fontSize: "0.72rem" }}>
                  {item}
                </Link>
              ))}
            </div>
            <p
              className="footer-display text-xs italic"
              style={{ color: "rgba(201,168,76,0.35)", letterSpacing: "0.08em" }}
            >
              Crafted with pride in India
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}