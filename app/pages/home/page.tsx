"use client";

import Image from "next/image";
import { BiCheckShield } from "react-icons/bi";
import { RiMicroscopeFill } from "react-icons/ri";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { IoMdCube } from "react-icons/io";
import { HiMiniBanknotes } from "react-icons/hi2";
import { IoIosPeople } from "react-icons/io";
import {
  GiWheat,
  GiFactory,
  GiCardboardBoxClosed,
} from "react-icons/gi";
import { FaShip } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ─── Intersection Observer hook ─────────────────────────── */
function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

/* ─── Animated counter hook ──────────────────────────────── */
function useCounter(target: number, inView: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
}

/* ─── Reusable fade-in wrapper ───────────────────────────── */
function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}) {
  const { ref, inView } = useInView();

  const translate =
    direction === "up"
      ? "translateY(36px)"
      : direction === "left"
      ? "translateX(-36px)"
      : direction === "right"
      ? "translateX(36px)"
      : "none";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translate(0)" : translate,
        transition: `opacity 0.75s ease ${delay}ms, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

/* ─── Stat card with counter ─────────────────────────────── */
function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  const { ref, inView } = useInView();
  const isNumber = !isNaN(parseInt(value));
  const numericPart = parseInt(value) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  const count = useCounter(numericPart, inView);

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      <h3 className="font-serif text-5xl text-[#1f3d2b]">
        {isNumber ? `${count}${suffix}` : value}
      </h3>
      <p className="mt-3 text-sm uppercase tracking-[4px] text-gray-500">{label}</p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero1.png"
            alt="Agriculture Landscape"
            className="h-full w-full object-cover"
            style={{ animation: "heroZoom 12s ease-out forwards" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#f4f1ea]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1
              className="font-serif text-5xl leading-tight text-white md:text-7xl"
              style={{ animation: "heroSlideUp 1s cubic-bezier(0.22,1,0.36,1) 0.2s both" }}
            >
              Premium Agricultural
              <br />
              Ingredients From
              <span className="italic text-[#e0b85c]"> India </span>To
              <br />
              Global Markets
            </h1>

            <p
              className="mt-8 max-w-xl text-lg leading-relaxed text-white/80"
              style={{ animation: "heroSlideUp 1s cubic-bezier(0.22,1,0.36,1) 0.45s both" }}
            >
              {`Delivering India's finest agricultural products worldwide.
              Sustainable sourcing, premium quality and trusted export excellence.`}
            </p>

            <div
              className="mt-10 flex flex-wrap gap-4"
              style={{ animation: "heroSlideUp 1s cubic-bezier(0.22,1,0.36,1) 0.65s both" }}
            >
              <Link
                href="/pages/products"
                className="rounded-full bg-[#d8b15a] px-8 py-4 font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(216,177,90,0.4)]"
              >
                Explore Products
              </Link>
              <Link
                href="/pages/infrastructure"
                className="rounded-full border border-white px-8 py-4 text-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
              >
                Our Infrastructure
              </Link>
            </div>
          </div>

          {/* Floating Product Card */}
          <div
            className="absolute right-20 top-1/2 hidden -translate-y-1/2 xl:block"
            style={{ animation: "heroSlideUp 1.1s cubic-bezier(0.22,1,0.36,1) 0.8s both" }}
          >
            <div className="hero-float group relative rounded-full border border-white/20 bg-white/15 p-8 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.15)] transition-transform duration-700 hover:scale-105">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-60" />
              <img
                src="/makhana.png"
                alt="Premium Makhana"
                className="relative z-10 h-44 w-44 rounded-full object-contain transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute -bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-[#d8b15a] px-4 py-2 text-xs font-medium tracking-[2px] text-white shadow-lg">
                Premium Export
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes heroZoom {
            from { transform: scale(1.06); }
            to   { transform: scale(1); }
          }
          @keyframes heroSlideUp {
            from { opacity: 0; transform: translateY(40px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>

      {/* STATS SECTION */}
      <section className="bg-[#f4f1ea] py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 text-center md:grid-cols-4">
          <StatCard value="15+" label="Countries Reached" delay={0} />
          <StatCard value="500+" label="Tons Annual Export" delay={100} />
          <StatCard value="100%" label="Organic Certified" delay={200} />
          <StatCard value="24/7" label="Global Logistics" delay={300} />
        </div>
      </section>

      {/* ECOSYSTEM SECTION */}
      <section className="relative overflow-hidden bg-gray-100 py-12">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[radial-gradient(circle,#123524_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <FadeIn className="text-center">
            <p className="text-sm uppercase tracking-[4px] text-[#8a8a8a]">Our Product Ecosystem</p>
            <h2 className="mt-4 font-serif text-5xl text-[#173321] md:text-6xl">Nature Connected</h2>
          </FadeIn>

          <div className="relative mx-auto mt-8 h-[800px] max-w-5xl">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 900">
              <line x1="600" y1="450" x2="600" y2="60" stroke="#d8b15a" strokeWidth="2" strokeDasharray="8 8" />
              <line x1="600" y1="450" x2="980" y2="320" stroke="#d8b15a" strokeWidth="2" strokeDasharray="8 8" />
              <line x1="600" y1="450" x2="900" y2="720" stroke="#d8b15a" strokeWidth="2" strokeDasharray="8 8" />
              <line x1="600" y1="450" x2="300" y2="720" stroke="#d8b15a" strokeWidth="2" strokeDasharray="8 8" />
              <line x1="600" y1="450" x2="220" y2="320" stroke="#d8b15a" strokeWidth="2" strokeDasharray="8 8" />
            </svg>

            {/* CENTER LOGO */}
            <FadeIn className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute inset-0 animate-ping rounded-full bg-[#d8b15a]/20" />
                <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-[#d8b15a]/30 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)] transition-transform duration-700 hover:scale-105">
                  <Image src="/logo.png" alt="BharatXAgro" width={180} height={180} priority />
                </div>
              </div>
            </FadeIn>

            {/* MAKHANA */}
            <FadeIn delay={100} className="group absolute left-1/2 top-0 -translate-x-1/2 ecosystem-float">
              <div className="ecosystem-card transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_20px_50px_rgba(18,53,36,0.15)]">
                <img src="/makhana.png" alt="" className="h-full w-full rounded-full object-cover" />
              </div>
              <p className="mt-4 text-center font-medium text-[#173321]">Makhana</p>
            </FadeIn>

            {/* MORINGA */}
            <FadeIn delay={200} direction="right" className="group absolute right-0 top-[220px] ecosystem-float-delay">
              <div className="ecosystem-card transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_20px_50px_rgba(18,53,36,0.15)]">
                <img src="/moringa.png" alt="" className="h-full w-full rounded-full object-cover" />
              </div>
              <p className="mt-4 text-center font-medium text-[#173321]">Moringa Powder</p>
            </FadeIn>

            {/* ONION */}
            <FadeIn delay={150} direction="right" className="group absolute bottom-0 right-24 ecosystem-float">
              <div className="ecosystem-card transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_20px_50px_rgba(18,53,36,0.15)]">
                <img src="/onion.png" alt="" className="h-full w-full rounded-full object-cover" />
              </div>
              <p className="mt-4 text-center font-medium text-[#173321]">Onion Powder</p>
            </FadeIn>

            {/* MUSHROOM */}
            <FadeIn delay={250} direction="left" className="group absolute bottom-0 left-24 ecosystem-float-delay">
              <div className="ecosystem-card transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_20px_50px_rgba(18,53,36,0.15)]">
                <img src="/mushroom.png" alt="" className="h-full w-full rounded-full object-cover" />
              </div>
              <p className="mt-4 text-center font-medium text-[#173321]">Mushroom</p>
            </FadeIn>

            {/* DRY MUSHROOM */}
            <FadeIn delay={300} direction="left" className="group absolute left-0 top-[220px] ecosystem-float">
              <div className="ecosystem-card transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_20px_50px_rgba(18,53,36,0.15)]">
                <img src="/dry mushroom.png" alt="" className="h-full w-full rounded-full object-cover" />
              </div>
              <p className="mt-4 text-center font-medium text-[#173321]">Dry Mushroom</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* EXPORT SIGNATURE SECTION */}
      <section className="bg-[#f7f4ee] py-12 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <FadeIn direction="left" className="max-w-2xl">
              <h2 className="font-serif text-5xl text-[#123524] md:text-6xl">Our Export Signature</h2>
              <p className="mt-4 text-lg text-gray-500">
                Carefully curated, sustainably sourced, and meticulously processed for global luxury markets.
              </p>
            </FadeIn>

            <FadeIn direction="right">
              <Link href="/pages/products">
                <button className="group hidden md:flex items-center gap-2 text-sm font-semibold tracking-[2px] text-[#123524] uppercase transition-all duration-300 hover:gap-4">
                  View All Products
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </Link>
            </FadeIn>
          </div>

          {/* Product Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* MORINGA */}
            <FadeIn delay={0}>
              <div className="group relative h-[420px] overflow-hidden rounded-[30px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(18,53,36,0.15)]">
                <img
                  src="/moringa.png"
                  alt="Moringa Powder"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123524] via-[#123524]/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute bottom-0 p-8">
                  <span className="inline-block rounded-full bg-[#d8b15a] px-4 py-1 text-xs font-bold uppercase tracking-[2px] text-white">
                    Bestseller
                  </span>
                  <h3 className="mt-5 font-serif text-4xl text-white">Moringa Powder</h3>
                  <p className="mt-4 max-w-sm text-white/70 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Certified organic, nutrient-dense powder sourced from sustainable farms in South India.
                  </p>
                  <Link href="/pages/productlist/moringa">
                    <button className="group/btn mt-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[2px] text-[#d8b15a] transition-all duration-300 hover:gap-4">
                      Learn More
                      <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                    </button>
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* MAKHANA */}
            <FadeIn delay={120}>
              <div className="group relative h-[420px] overflow-hidden rounded-[30px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(18,53,36,0.15)]">
                <img
                  src="/makhana.png"
                  alt="Premium Makhana"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123524] via-[#123524]/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute bottom-0 p-8">
                  <span className="inline-block rounded-full bg-[#123524] px-4 py-1 text-xs font-bold uppercase tracking-[2px] text-white">
                    Export Grade
                  </span>
                  <h3 className="mt-5 font-serif text-4xl text-white">Premium Makhana</h3>
                  <p className="mt-4 max-w-sm text-white/70 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Handpicked fox nuts, roasted to perfection and packed with plant-based protein.
                  </p>
                  <Link href="/pages/productlist/makhana">
                    <button className="group/btn mt-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[2px] text-[#d8b15a] transition-all duration-300 hover:gap-4">
                      Learn More
                      <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                    </button>
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* ONION POWDER */}
            <FadeIn delay={240}>
              <div className="group relative h-[420px] overflow-hidden rounded-[30px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(18,53,36,0.15)] md:col-span-2 lg:col-span-1">
                <img
                  src="/onion.png"
                  alt="Onion Powder"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123524] via-[#123524]/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute bottom-0 p-8">
                  <span className="inline-block rounded-full bg-[#d8b15a] px-4 py-1 text-xs font-bold uppercase tracking-[2px] text-[#123524]">
                    Culinary Grade
                  </span>
                  <h3 className="mt-5 font-serif text-4xl text-white">Onion Powder</h3>
                  <p className="mt-4 max-w-sm text-white/70 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Triple-sifted, moisture-controlled aromatic onion powder for international food standards.
                  </p>
                  <Link href="/pages/productlist/onion">
                    <button className="group/btn mt-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[2px] text-[#d8b15a] transition-all duration-300 hover:gap-4">
                      Learn More
                      <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                    </button>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SHOWCASE SECTIONS */}
      <section className="bg-[#f4f1ea] py-12 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">

          {/* MAKHANA SHOWCASE */}
          <div className="grid items-center gap-24 lg:grid-cols-2">
            <FadeIn direction="left" className="group relative">
              <div className="overflow-hidden rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
                <img
                  src="/makhana.png"
                  alt="Premium Makhana"
                  className="aspect-[4/5] h-[600px] w-full object-cover transition duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-10 right-0 hidden w-[320px] rounded-[28px] border border-white/60 bg-white/70 p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:-translate-y-3 md:block hero-float">
                <span className="text-xs uppercase tracking-[4px] text-[#7d8f6d]">Superfood Tier 1</span>
                <h3 className="mt-3 font-serif text-3xl text-[#173321]">White Gold Of Bihar</h3>
                <p className="mt-4 leading-relaxed text-gray-600">
                  Highest density puffed kernels, hand-picked and carefully processed for export-grade quality.
                </p>
              </div>
            </FadeIn>

            <div className="lg:pl-10">
              <FadeIn direction="right" delay={0}>
                <span className="uppercase tracking-[4px] text-[#d8b15a]">Global Top Seller</span>
                <h2 className="mt-2 font-serif text-5xl leading-tight text-[#173321] md:text-6xl">
                  Premium Phool<br />Makhana
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Our makhana is sourced directly from certified heritage ponds across Bihar. Every kernel is carefully
                  graded, roasted and packed to meet international export standards while preserving freshness and nutrition.
                </p>
              </FadeIn>

              <FadeIn direction="right" delay={150}>
                <div className="mt-6 space-y-5">
                  {["0% Moisture Packaging", "Traceability To The Pond", "Lab Tested Purity"].map((item, i) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 transition-all duration-300 hover:translate-x-1"
                      style={{ transitionDelay: `${i * 60}ms` }}
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#123524]/10 text-[#123524] transition-all duration-300 hover:bg-[#123524]/20">
                        ✓
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={280}>
                <Link href="/pages/inquiry">
                  <button className="mt-6 rounded-full bg-[#123524] px-10 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0d281c] hover:shadow-xl active:scale-95">
                    Inquire Now
                  </button>
                </Link>
              </FadeIn>
            </div>
          </div>

          {/* MORINGA SHOWCASE */}
          <div className="mt-20 grid items-center gap-24 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <FadeIn direction="left" delay={0}>
                <span className="uppercase tracking-[4px] text-[#6f9f55]">Vitality Extract</span>
                <h2 className="mt-2 font-serif text-5xl leading-tight text-[#173321] md:text-6xl">
                  Moringa<br />Oleifera Powder
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Known as the Miracle Tree, our moringa leaves are harvested at peak maturity and processed under
                  controlled conditions to preserve antioxidants, vitamins and essential nutrients.
                </p>
              </FadeIn>

              <FadeIn direction="left" delay={150}>
                <div className="mt-6 space-y-5">
                  {["Shadow-Dried Preservation", "80–100 Mesh Consistency", "No Fillers Or Additives"].map((item, i) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 transition-all duration-300 hover:translate-x-1"
                      style={{ transitionDelay: `${i * 60}ms` }}
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#123524]/10 text-[#123524] transition-all duration-300 hover:bg-[#123524]/20">
                        ✓
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={280}>
                <Link href="/pages/inquiry">
                  <button className="mt-6 rounded-full border-2 border-[#123524] px-10 py-4 text-[#123524] transition-all duration-300 hover:-translate-y-1 hover:bg-[#123524] hover:text-white active:scale-95">
                    Bulk inquiry
                  </button>
                </Link>
              </FadeIn>
            </div>

            <FadeIn direction="right" className="group order-1 lg:order-2 relative">
              <div className="overflow-hidden rounded-[42px] shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
                <img
                  src="/moringa.png"
                  alt="Moringa"
                  className="aspect-[4/5] h-[600px] w-full object-cover transition duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-10 left-0 hidden w-[320px] rounded-[28px] border border-white/60 bg-white/70 p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:-translate-y-3 md:block hero-float">
                <span className="text-xs uppercase tracking-[4px] text-[#6f9f55]">Nutrient Rich</span>
                <h3 className="mt-3 font-serif text-3xl text-[#173321]">Miracle Tree</h3>
                <p className="mt-4 leading-relaxed text-gray-600">
                  Rich in antioxidants, vitamins and minerals, carefully processed to preserve natural potency and purity.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* EDGE SHOWCASE */}
      <section className="bg-[#123524] py-32 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="mb-16">
            <p className="text-sm uppercase tracking-[4px] text-[#d8b15a]">Our Edge</p>
            <h2 className="mt-4 font-serif text-5xl md:text-6xl">The Standards of Excellence</h2>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Farm Direct Integrity", desc: "Direct farmer sourcing ensures traceability and superior quality.", icon: <BiCheckShield /> },
              { title: "Cold Chain Tech", desc: "Advanced storage preserves freshness and nutritional value.", icon: <RiMicroscopeFill /> },
              { title: "Global Compliance", desc: "Meeting USDA, EU and APEDA export requirements.", icon: <BsGlobeCentralSouthAsia /> },
              { title: "Custom Packaging", desc: "Private labeling and bulk packaging solutions available.", icon: <IoMdCube /> },
              { title: "Transparent Pricing", desc: "Stable contracts and competitive export pricing.", icon: <HiMiniBanknotes /> },
              { title: "Ethical Sourcing", desc: "Empowering thousands of farmers through sustainable farming.", icon: <IoIosPeople /> },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 80}>
                <div className="group rounded-[30px] border border-white/10 p-8 transition-all duration-400 hover:bg-white hover:text-[#d8b15a] hover:border-[#d8b15a] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-3xl text-white transition-all duration-300 group-hover:border-[#d8b15a] group-hover:bg-[#d8b15a]/10 group-hover:text-[#d8b15a] group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold">{item.title}</h3>
                  <p className="leading-relaxed opacity-80">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY JOURNEY SHOWCASE */}
      <section className="relative overflow-hidden bg-[#f7f4ee] py-12">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[radial-gradient(circle,#123524_1px,transparent_1px)] bg-[size:30px_30px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <FadeIn className="mb-12 text-center">
            <span className="text-sm uppercase tracking-[5px] text-[#d8b15a]">Excellence Process</span>
            <h2 className="mt-4 font-serif text-5xl text-[#123524] md:text-6xl">The Journey of Quality</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">
              Every product follows a carefully monitored journey from farm to global destination, ensuring purity,
              freshness and export excellence at every stage.
            </p>
          </FadeIn>

          <div className="relative">
            <div className="absolute top-[34px] left-[12.5%] w-[75%] hidden lg:block z-0">
              <div className="journey-line h-[2px]" />
              <span className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#d8b15a]" />
              <span className="absolute left-1/3 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#d8b15a]" />
              <span className="absolute left-2/3 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#d8b15a]" />
              <span className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#d8b15a]" />
            </div>

            <div className="grid gap-10 lg:grid-cols-4">
              {[
                { icon: <GiWheat />, title: "Ethical Harvest", desc: "Hand-picked at peak ripeness from certified farms." },
                { icon: <GiFactory />, title: "Cold Processing", desc: "Nutrient-preserving drying and grinding techniques." },
                { icon: <GiCardboardBoxClosed />, title: "Aseptic Packaging", desc: "Vacuum-sealed for extended freshness and transit." },
                { icon: <FaShip />, title: "Swift Export", desc: "Optimized logistics to over 50 countries worldwide." },
              ].map((step, index) => (
                <FadeIn key={index} delay={index * 120}>
                  <div className="group relative">
                    <div className="relative z-20 mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#d8b15a]/30 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-700 group-hover:-translate-y-2 group-hover:scale-110 group-hover:shadow-[0_30px_60px_rgba(18,53,36,0.12)]">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#d8b15a]/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                      <span className="text-3xl text-[#123524]">{step.icon}</span>
                    </div>
                    <div className="mt-10 rounded-[30px] border border-white/60 bg-white/70 p-8 text-center backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-700 group-hover:-translate-y-3 group-hover:shadow-[0_30px_80px_rgba(18,53,36,0.12)] group-hover:bg-white">
                      <h3 className="font-serif text-2xl text-[#123524]">{step.title}</h3>
                      <p className="mt-4 leading-relaxed text-gray-500">{step.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOGISTICS SHOWCASE */}
      <section className="bg-[#f4f1ea] py-16 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <FadeIn direction="left">
              <span className="uppercase tracking-[4px] text-[#d8b15a]">Global Logistics</span>
              <h2 className="mt-4 font-serif text-5xl md:text-6xl text-[#123524]">Bridging Continents</h2>
            </FadeIn>
            <FadeIn direction="right">
              <p className="max-w-lg text-lg text-gray-600">
                {`From India's agricultural heartland to distributors, retailers and manufacturers worldwide through a trusted export network.`}
              </p>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="relative overflow-hidden rounded-[50px] border border-black/5 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.06)] transition-all duration-700 hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)]">
              <div className="absolute inset-0 opacity-[0.04]">
                <div className="h-full w-full bg-[radial-gradient(circle,#123524_1px,transparent_1px)] bg-[size:30px_30px]" />
              </div>

              <div className="relative h-[500px]">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                  alt="World Map"
                  className="absolute inset-0 h-full w-full object-contain opacity-20"
                />

                {/* India */}
                <div className="absolute left-[62%] top-[41%]">
                  <div className="absolute h-5 w-5 animate-ping rounded-full bg-[#d8b15a]/30" />
                  <div className="relative h-5 w-5 rounded-full bg-[#d8b15a] shadow-[0_0_30px_rgba(216,177,90,0.8)]" />
                </div>

                {/* USA */}
                <div className="absolute left-[31%] top-[34%]">
                  <div className="h-4 w-4 rounded-full bg-[#123524] transition-transform duration-300 hover:scale-150" />
                </div>

                {/* Europe */}
                <div className="absolute left-[49%] top-[27%]">
                  <div className="h-4 w-4 rounded-full bg-[#123524] transition-transform duration-300 hover:scale-150" />
                </div>

                {/* UAE */}
                <div className="absolute left-[58%] top-[41%]">
                  <div className="h-4 w-4 rounded-full bg-[#123524] transition-transform duration-300 hover:scale-150" />
                </div>

                {/* Australia */}
                <div className="absolute left-[72%] top-[68%]">
                  <div className="h-4 w-4 rounded-full bg-[#123524] transition-transform duration-300 hover:scale-150" />
                </div>

                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 1170 650"
                >
                  {/* India → USA */}
                  <path
                    d="M800 280 C650 150 450 150 300 220"
                    stroke="#d8b15a"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="10 10"
                    className="animate-route"
                  />

                  {/* India → Europe */}
                  <path
                    d="M800 280 C700 180 620 130 590 170"
                    stroke="#d8b15a"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="10 10"
                    className="animate-route"
                  />

                  {/* India → UAE */}
                  <path
                    d="M800 280 C730 260 600 250 700 270"
                    stroke="#d8b15a"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="10 10"
                    className="animate-route"
                  />

                  {/* India → Australia */}
                  <path
                    d="M800 280 C900 330 980 380 950 440"
                    stroke="#d8b15a"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="10 10"
                    className="animate-route"
                  />
                </svg>

                <div className="absolute bottom-8 left-8 rounded-[30px] bg-white/80 p-8 backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <h4 className="text-xl font-semibold text-[#123524]">Real-Time Tracking</h4>
                  <p className="mt-2 text-gray-500">Visibility across all shipments worldwide.</p>
                  <div className="mt-5 flex gap-8">
                    <div>
                      <div className="text-3xl font-bold text-[#123524]">15+</div>
                      <div className="text-sm text-gray-500">Countries</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#123524]">500+</div>
                      <div className="text-sm text-gray-500">Shipments</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* MARKETS SECTION */}
      <section className="bg-[#f4f1ea] py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="mb-16 text-center">
            <p className="text-sm uppercase tracking-[4px] text-[#b18a2c]">Markets</p>
            <h2 className="mt-4 font-serif text-5xl text-[#183927]">Where Our Ingredients Shine</h2>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Gourmet HORECA", image: "/gourmet.png" },
              { title: "Nutraceuticals", image: "/nutri.png" },
              { title: "Retail Brands", image: "/retail.png" },
              { title: "Cosmeceuticals", image: "/cosmetic.png" },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 100}>
                <div className="group relative overflow-hidden rounded-[25px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)]">
                  <img
                    src={item.image}
                    alt=""
                    className="h-[450px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/70" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="font-serif text-3xl transition-transform duration-300 group-hover:-translate-y-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-[#f4f1ea] py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="overflow-hidden rounded-[50px] bg-[#e8e1d5] p-12 lg:p-20">
              <div className="grid items-center gap-16 lg:grid-cols-2">
                <FadeIn direction="left">
                  <h2 className="font-serif text-5xl text-[#183927]">Begin Your Heritage Journey</h2>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
                    Whether you are a distributor, retailer, manufacturer or food brand, BharatXAgro is ready to serve
                    your global sourcing needs.
                  </p>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <div className="rounded-full bg-white px-6 py-3 shadow transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                      export@bharatxagro.com
                    </div>
                    <div className="rounded-full bg-white px-6 py-3 shadow transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                      +91 9876543210
                    </div>
                  </div>
                </FadeIn>

                <FadeIn direction="right">
                  <div className="rounded-[35px] bg-white p-8 shadow-xl transition-all duration-500 hover:shadow-2xl">
                    <form className="space-y-6">
                      <input
                        placeholder="Your Name"
                        className="w-full border-b border-gray-300 pb-3 outline-none transition-all duration-300 focus:border-[#123524]"
                      />
                      <select className="w-full border-b border-gray-300 pb-3 outline-none transition-all duration-300 focus:border-[#123524]">
                        <option>Distribution</option>
                        <option>Retail</option>
                        <option>Manufacturing</option>
                      </select>
                      <textarea
                        rows={4}
                        placeholder="Message"
                        className="w-full border-b border-gray-300 pb-3 outline-none transition-all duration-300 focus:border-[#123524]"
                      />
                      <button className="w-full rounded-full bg-[#123524] py-4 text-white transition-all duration-300 hover:bg-[#0d281c] hover:-translate-y-0.5 hover:shadow-xl active:scale-95">
                        Send Inquiry
                      </button>
                    </form>
                  </div>
                </FadeIn>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}