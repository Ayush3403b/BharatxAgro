"use client";

import IndustrialFormulations from "@/components/industrydata";
import { Pill, ChefHat, UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import { Leaf, ShieldCheck, BadgeCheck, ClipboardCheck, FileCheck, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const certificates = [
  { icon: BadgeCheck, title: "APEDA" },
  { icon: ShieldCheck, title: "FSSAI" },
  { icon: ClipboardCheck, title: "ISO 22000" },
  { icon: FileCheck, title: "HACCP Compliant" },
  { icon: Award, title: "GMP Standards" },
  { icon: Leaf, title: "USDA Organic" },
];

/* ─── useInView hook ─────────────────────────────────────── */
function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.1, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}

/* ─── useCounter hook ────────────────────────────────────── */
function useCounter(target: number, inView: boolean, duration = 1600) {
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

/* ─── FadeIn wrapper ─────────────────────────────────────── */
function FadeIn({
  children, delay = 0, direction = "up", className = "",
}: {
  children: React.ReactNode; delay?: number;
  direction?: "up" | "left" | "right" | "none"; className?: string;
}) {
  const { ref, inView } = useInView();
  const translate =
    direction === "up" ? "translateY(40px)"
    : direction === "left" ? "translateX(-40px)"
    : direction === "right" ? "translateX(40px)"
    : "none";
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translate(0)" : translate,
      transition: `opacity 0.8s ease ${delay}ms, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      willChange: "opacity, transform",
    }}>
      {children}
    </div>
  );
}

/* ─── Animated stat number ───────────────────────────────── */
function AnimatedStat({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
  const { ref, inView } = useInView();
  const numeric = parseInt(value) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  const count = useCounter(numeric, inView);
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    }}>
      <h3 className="text-4xl font-bold text-[#d8b15a]">{count}{suffix}</h3>
      <p className="mt-2 text-white/60">{label}</p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════ */
export default function ProductsPage() {
  return (
    <main className="bg-[#f7f4ee] overflow-x-hidden">

      {/* ── keyframes ── */}
      <style>{`
        @keyframes heroZoom { from { transform: scale(1.08); } to { transform: scale(1); } }
        @keyframes heroSlideUp { from { opacity:0; transform:translateY(44px); } to { opacity:1; transform:translateY(0); } }
        @keyframes blobDrift { from { transform: translateY(0) scale(1); } to { transform: translateY(40px) scale(1.15); } }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden bg-[#f7f4ee]">
        <div className="absolute inset-0">
          <img
            src="/producthero.png"
            alt="Products Hero"
            className="h-full w-full object-cover scale-105"
            style={{ animation: "heroZoom 14s ease-out forwards" }}
          />
          <div className="absolute inset-0 bg-[#123524]/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#f7f4ee]" />
        </div>

        <div
          className="absolute left-[-120px] top-40 h-72 w-72 rounded-full bg-[#d8b15a]/10 blur-3xl"
          style={{ animation: "blobDrift 8s ease-in-out infinite alternate" }}
        />

        <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-6">
          <div className="max-w-4xl">
            <span
              className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm tracking-[3px] text-[#d8b15a] backdrop-blur-xl"
              style={{ animation: "heroSlideUp 1s cubic-bezier(0.22,1,0.36,1) 0.1s both" }}
            >
              DIRECT FROM SOURCE
            </span>

            <h1
              className="mt-8 font-serif text-5xl leading-tight text-white md:text-7xl"
              style={{ animation: "heroSlideUp 1s cubic-bezier(0.22,1,0.36,1) 0.3s both" }}
            >
              Premium
              <span className="mx-3 italic text-[#d8b15a]">Ingredient</span>
              Portfolio
            </h1>

            <p
              className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80"
              style={{ animation: "heroSlideUp 1s cubic-bezier(0.22,1,0.36,1) 0.5s both" }}
            >
              {`Connecting global buyers with India's finest agricultural exports. Every ingredient is sourced, processed and packed according to international quality standards.`}
            </p>

            <div
              className="mt-10 flex flex-wrap gap-4"
              style={{ animation: "heroSlideUp 1s cubic-bezier(0.22,1,0.36,1) 0.7s both" }}
            >
              <button className="rounded-full bg-[#d8b15a] px-8 py-4 font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(216,177,90,0.45)] active:scale-95">
                Explore Products
              </button>
              <button className="rounded-full border border-white/30 px-8 py-4 text-white transition-all duration-300 hover:bg-white hover:text-[#123524] hover:scale-105 active:scale-95">
                Request Catalog
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-[#f7f4ee] py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">

          <FadeIn className="mb-16 text-center">
            <span className="text-sm uppercase tracking-[4px] text-[#d8b15a]">Export Portfolio</span>
            <h2 className="mt-4 font-serif text-5xl text-[#123524] md:text-6xl">Featured Products</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">
              {`Premium agricultural ingredients sourced directly from India's most trusted farming communities.`}
            </p>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-12">

            {/* MORINGA */}
            <FadeIn delay={0} direction="left" className="md:col-span-8">
              <div className="group relative overflow-hidden rounded-[40px] h-[650px] transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_40px_100px_rgba(18,53,36,0.18)]">
                <img src="/moringa.png" alt="Moringa Powder" className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123524] via-[#123524]/40 to-transparent transition-opacity duration-500 group-hover:opacity-95" />
                <div className="absolute bottom-0 p-10 text-white">
                  <span className="rounded-full bg-[#d8b15a] px-4 py-2 text-xs font-semibold tracking-[3px] text-black">BEST SELLER</span>
                  <h3 className="mt-6 font-serif text-5xl transition-transform duration-500 group-hover:-translate-y-1">Organic Moringa</h3>
                  <p className="mt-4 max-w-xl text-white/80">Nutrient rich moringa powder processed using low-temperature drying technology for maximum retention of vitamins and antioxidants.</p>
                  <div className="mt-8 flex gap-10">
                    <div><p className="text-xs uppercase tracking-[2px] text-white/50">Origin</p><p>Tamil Nadu</p></div>
                    <div><p className="text-xs uppercase tracking-[2px] text-white/50">Grade</p><p>AAA Export</p></div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* MAKHANA */}
            <FadeIn delay={120} direction="right" className="md:col-span-4">
              <div className="group relative overflow-hidden rounded-[40px] h-[650px] transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_40px_100px_rgba(18,53,36,0.18)]">
                <img src="/makhana.png" alt="Makhana" className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123524] via-[#123524]/30 to-transparent" />
                <div className="absolute bottom-0 p-8 text-white">
                  <h3 className="font-serif text-4xl transition-transform duration-500 group-hover:-translate-y-1">Premium Makhana</h3>
                  <p className="mt-4 text-white/70">Export-grade fox nuts sourced from Bihar.</p>
                </div>
              </div>
            </FadeIn>

            {/* ONION */}
            <FadeIn delay={0} className="md:col-span-4">
              <div className="group relative overflow-hidden rounded-[35px] h-[400px] transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(18,53,36,0.15)]">
                <img src="/onion.png" alt="Onion Powder" className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123524] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="font-serif text-3xl transition-transform duration-500 group-hover:-translate-y-1">Onion Powder</h3>
                  <p className="text-white/60">Fine Mesh Processing</p>
                </div>
              </div>
            </FadeIn>

            {/* FRESH MUSHROOM */}
            <FadeIn delay={120} className="md:col-span-4">
              <div className="group relative overflow-hidden rounded-[35px] h-[400px] transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(18,53,36,0.15)]">
                <img src="/mushroom.png" alt="Fresh Mushroom" className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123524] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="font-serif text-3xl transition-transform duration-500 group-hover:-translate-y-1">Fresh Mushrooms</h3>
                  <p className="text-white/60">Oyster &amp; Button Varieties</p>
                </div>
              </div>
            </FadeIn>

            {/* DRY MUSHROOM */}
            <FadeIn delay={240} className="md:col-span-4">
              <div className="group relative overflow-hidden rounded-[35px] h-[400px] transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(18,53,36,0.15)]">
                <img src="/dry mushroom.png" alt="Dry Mushroom" className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123524] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="font-serif text-3xl transition-transform duration-500 group-hover:-translate-y-1">Dry Mushrooms</h3>
                  <p className="text-white/60">Premium Dehydrated Slices</p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* QUALITY & CERTIFICATIONS */}
      <section className="relative overflow-hidden bg-[#123524] py-32 text-white">
        <div className="absolute left-[-200px] top-0 h-[500px] w-[500px] rounded-full bg-[#d8b15a]/10 blur-[120px]" />
        <div className="absolute right-[-150px] bottom-0 h-[450px] w-[450px] rounded-full bg-white/5 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">

            {/* LEFT */}
            <div>
              <FadeIn direction="left">
                <span className="uppercase tracking-[5px] text-[#d8b15a]">Global Standards</span>
                <h2 className="mt-4 font-serif text-5xl leading-tight md:text-6xl">Export Excellence<br />Defined</h2>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
                  Every shipment leaving BharatXAgro follows stringent international quality controls, ensuring consistency, traceability and compliance with global import standards.
                </p>
              </FadeIn>

              <div className="mt-12 space-y-8">
                {[
                  { title: "SGS Tested", desc: "Independent laboratory testing for every export batch." },
                  { title: "Traceable Supply Chain", desc: "Complete farm-to-container transparency." },
                  { title: "Global Logistics", desc: "Exporting efficiently to Asia, Europe, GCC and North America." },
                ].map((item, i) => (
                  <FadeIn key={item.title} direction="left" delay={i * 120}>
                    <div className="flex gap-5 group">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#d8b15a] text-xl font-bold text-black transition-transform duration-300 group-hover:scale-110">✓</div>
                      <div>
                        <h4 className="text-2xl font-semibold">{item.title}</h4>
                        <p className="mt-2 text-white/60">{item.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="grid gap-6 sm:grid-cols-2">
              {certificates.map((item, i) => {
                const Icon = item.icon;
                return (
                  <FadeIn key={item.title} delay={i * 80} direction="right">
                    <div className="group rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#d8b15a]/40 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                      <div className="mb-4 flex items-center gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#d8b15a]/10 text-[#d8b15a] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#d8b15a] group-hover:text-[#123524]">
                          <Icon size={26} strokeWidth={2.2} />
                        </div>
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-white/60">Certified compliance for international trade and food safety.</p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* MAKHANA */}
      <section className="bg-[#f7f4ee] py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-24 lg:grid-cols-2">

            <FadeIn direction="left" className="group relative">
              <div className="overflow-hidden rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
                <img src="/makhana.png" alt="Premium Makhana" className="h-[700px] w-full object-cover transition duration-1000 group-hover:scale-110" />
              </div>
              <div className="absolute -bottom-10 right-0 hidden w-[320px] rounded-[30px] border border-white/50 bg-white/70 p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_30px_80px_rgba(18,53,36,0.12)] md:block">
                <span className="text-xs uppercase tracking-[4px] text-[#d8b15a]">Export Grade</span>
                <h3 className="mt-3 font-serif text-3xl text-[#123524]">White Gold Of Bihar</h3>
                <p className="mt-4 text-gray-600">Hand-selected premium fox nuts processed to international export standards.</p>
              </div>
            </FadeIn>

            <div>
              <FadeIn direction="right" delay={0}>
                <span className="uppercase tracking-[4px] text-[#d8b15a]">Bestseller Product</span>
                <h2 className="mt-4 font-serif text-6xl leading-tight text-[#123524]">Premium<br />Phool Makhana</h2>
                <p className="mt-8 text-lg leading-relaxed text-gray-600">
                  {`Sourced directly from Bihar's heritage ponds, our premium makhana delivers unmatched purity, texture and nutritional value. Carefully graded and packed for global markets.`}
                </p>
              </FadeIn>
              <FadeIn direction="right" delay={140}>
                <div className="mt-10 space-y-5">
                  {["Premium Hand Graded Quality", "Lab Tested Purity", "Export Ready Packaging"].map((item, i) => (
                    <div key={item} className="flex items-center gap-4 transition-all duration-300 hover:translate-x-1" style={{ transitionDelay: `${i * 60}ms` }}>
                      <div className="h-8 w-8 rounded-full bg-[#123524]/10 flex items-center justify-center transition-colors duration-300 hover:bg-[#123524]/20">✓</div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={280}>
                <Link href="/pages/productlist/makhana">
                  <button className="mt-10 rounded-full bg-[#123524] px-10 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0f2b1f] hover:shadow-xl active:scale-95">
                    Explore Product
                  </button>
                </Link>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* MORINGA */}
      <section className="bg-[#f7f4ee] py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-24 lg:grid-cols-2">

            <div className="order-2 lg:order-1">
              <FadeIn direction="left" delay={0}>
                <span className="uppercase tracking-[4px] text-[#6f9f55]">Superfood Collection</span>
                <h2 className="mt-4 font-serif text-6xl leading-tight text-[#123524]">Organic<br />Moringa Powder</h2>
                <p className="mt-8 text-lg leading-relaxed text-gray-600">Harvested from carefully selected farms and processed under controlled conditions, our moringa powder retains its natural nutrients, antioxidants and vibrant green color.</p>
              </FadeIn>
              <FadeIn direction="left" delay={140}>
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {[
                    { title: "Rich Nutrition", desc: "Packed with vitamins, minerals and amino acids." },
                    { title: "Fine Mesh", desc: "Uniform particle size for global applications." },
                    { title: "No Additives", desc: "100% pure moringa leaf powder." },
                    { title: "Export Ready", desc: "Packed according to international standards." },
                  ].map((box, i) => (
                    <div key={box.title} className="rounded-[24px] bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ transitionDelay: `${i * 50}ms` }}>
                      <h4 className="font-semibold text-[#123524]">{box.title}</h4>
                      <p className="mt-2 text-sm text-gray-500">{box.desc}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
              <FadeIn direction="left" delay={280}>
                <Link href="/pages/productlist/moringa">
                  <button className="mt-10 rounded-full border-2 border-[#123524] px-10 py-4 text-[#123524] transition-all duration-300 hover:bg-[#123524] hover:text-white hover:-translate-y-1 active:scale-95">
                    View Specifications
                  </button>
                </Link>
              </FadeIn>
            </div>

            <FadeIn direction="right" className="group order-1 lg:order-2 relative">
              <div className="overflow-hidden rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
                <img src="/moringa.png" alt="Moringa Powder" className="h-[700px] w-full object-cover transition duration-1000 group-hover:scale-110" />
              </div>
              <div className="absolute -bottom-10 left-0 hidden w-[340px] rounded-[30px] border border-white/50 bg-white/80 p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_30px_80px_rgba(18,53,36,0.12)] md:block">
                <span className="text-xs uppercase tracking-[4px] text-[#6f9f55]">Premium Grade</span>
                <h3 className="mt-3 font-serif text-3xl text-[#123524]">Miracle Tree</h3>
                <p className="mt-4 text-gray-600">Sustainably sourced and processed to preserve maximum nutritional potency.</p>
                <div className="mt-6 flex gap-8">
                  <div><div className="text-3xl font-bold text-[#123524]">100%</div><div className="text-sm text-gray-500">Natural</div></div>
                  <div><div className="text-3xl font-bold text-[#123524]">AAA</div><div className="text-sm text-gray-500">Export Grade</div></div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ONION POWDER */}
      <section className="bg-[#faf7f1] py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-24 lg:grid-cols-2">

            <FadeIn direction="left" className="group relative">
              <div className="overflow-hidden rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
                <img src="/onion.png" alt="Onion Powder" className="h-[700px] w-full object-cover transition duration-1000 group-hover:scale-110" />
              </div>
              <div className="absolute top-8 left-8 rounded-full bg-[#d8b15a] px-6 py-3 shadow-xl transition-transform duration-300 hover:scale-105">
                <span className="text-xs font-bold tracking-[3px] text-[#123524]">EXPORT GRADE</span>
              </div>
              <div className="absolute -bottom-10 right-0 hidden w-[330px] rounded-[30px] border border-white/60 bg-white/80 p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_30px_80px_rgba(18,53,36,0.12)] md:block">
                <h3 className="font-serif text-3xl text-[#123524]">Consistent Quality</h3>
                <p className="mt-4 text-gray-600">Produced using advanced dehydration technology for superior flavor retention and long shelf life.</p>
              </div>
            </FadeIn>

            <div>
              <FadeIn direction="right" delay={0}>
                <span className="uppercase tracking-[4px] text-[#d8b15a]">Culinary Ingredients</span>
                <h2 className="mt-4 font-serif text-6xl leading-tight text-[#123524]">Premium<br />Onion Powder</h2>
                <p className="mt-8 text-lg leading-relaxed text-gray-600">Carefully dehydrated and finely milled onion powder that delivers intense flavor, excellent shelf stability and consistent quality for food manufacturers worldwide.</p>
              </FadeIn>
              <FadeIn direction="right" delay={140}>
                <div className="mt-10 grid gap-5 sm:grid-cols-2">
                  {[
                    { title: "Fine Mesh", desc: "Uniform granulation and texture." },
                    { title: "Long Shelf Life", desc: "Moisture controlled packaging." },
                    { title: "Strong Aroma", desc: "Preserved natural onion flavor." },
                    { title: "Bulk Supply", desc: "Available for large export orders." },
                  ].map((box, i) => (
                    <div key={box.title} className="rounded-[24px] bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ transitionDelay: `${i * 50}ms` }}>
                      <h4 className="font-semibold text-[#123524]">{box.title}</h4>
                      <p className="mt-2 text-sm text-gray-500">{box.desc}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={280}>
                <Link href="/pages/productlist/onion" className="mt-10 inline-block rounded-full bg-[#123524] px-10 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95">
                  Product Specs
                </Link>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* MUSHROOMS */}
      <section className="bg-[#f7f4ee] py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">

          <FadeIn className="mb-20 text-center">
            <span className="uppercase tracking-[4px] text-[#d8b15a]">Gourmet Collection</span>
            <h2 className="mt-4 font-serif text-5xl text-[#123524] md:text-6xl">Premium Mushroom Range</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">Carefully cultivated and processed mushrooms tailored for international food service, retail and industrial applications.</p>
          </FadeIn>

          <div className="grid gap-8 lg:grid-cols-2">

            <FadeIn direction="left">
              <div className="group relative overflow-hidden rounded-[40px] h-[750px] transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_40px_100px_rgba(18,53,36,0.2)]">
                <img src="/mushroom.png" alt="Fresh Mushroom" className="absolute inset-0 h-full w-full object-cover transition duration-[1200ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123524] via-[#123524]/30 to-transparent" />
                <div className="absolute top-8 left-8 rounded-full bg-white/20 px-5 py-2 backdrop-blur-xl transition-all duration-300 group-hover:bg-white/30">
                  <span className="text-xs tracking-[3px] text-white">FRESH PRODUCE</span>
                </div>
                <div className="absolute bottom-0 p-10 text-white">
                  <h3 className="font-serif text-5xl transition-transform duration-500 group-hover:-translate-y-1">Fresh Mushrooms</h3>
                  <p className="mt-5 max-w-md text-white/80">Premium oyster and button mushrooms harvested daily, ensuring freshness, texture and export-grade quality.</p>
                  <div className="mt-8 flex gap-8">
                    <div className="mt-8 flex flex-wrap items-center gap-8">
                      <div><p className="text-xs uppercase tracking-[2px] text-white/50">Shelf Life</p><p>7–14 Days</p></div>
                      <div><p className="text-xs uppercase tracking-[2px] text-white/50">Availability</p><p>Year Round</p></div>
                      <Link href="/pages/productlist/mushroom">
                        <button className="rounded-full bg-[#123524] px-10 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0f2b1f] hover:shadow-xl active:scale-95">Explore Product</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="group relative overflow-hidden rounded-[40px] h-[750px] transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_40px_100px_rgba(18,53,36,0.2)]">
                <img src="/dry mushroom.png" alt="Dry Mushroom" className="absolute inset-0 h-full w-full object-cover transition duration-[1200ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123524] via-[#123524]/40 to-transparent" />
                <div className="absolute top-8 left-8 rounded-full bg-[#d8b15a] px-5 py-2 shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <span className="text-xs tracking-[3px] text-[#123524]">DEHYDRATED</span>
                </div>
                <div className="absolute bottom-0 p-10 text-white">
                  <h3 className="font-serif text-5xl transition-transform duration-500 group-hover:-translate-y-1">Dry Mushrooms</h3>
                  <p className="mt-5 max-w-md text-white/80">Expertly dehydrated mushrooms with exceptional shelf stability while preserving aroma, flavor and texture.</p>
                  <div className="mt-8 flex gap-8">
                    <div><p className="text-xs uppercase tracking-[2px] text-white/50">Shelf Life</p><p>12–24 Months</p></div>
                    <div><p className="text-xs uppercase tracking-[2px] text-white/50">Packaging</p><p>Bulk Export</p></div>
                    <Link href="/pages/productlist/mushroom">
                      <button className="rounded-full bg-[#123524] px-10 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0f2b1f] hover:shadow-xl active:scale-95">Explore Product</button>
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* APPLICATIONS & INDUSTRIES */}
      <section className="bg-[#f7f4ee] py-8">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="mb-20 text-center">
            <span className="mb-4 block text-xs uppercase tracking-[4px] text-[#6f9f55]">Global Applications</span>
            <h2 className="font-serif text-5xl text-[#123524] md:text-6xl">Fueling Diverse Industries</h2>
          </FadeIn>

          <div className="grid gap-12 md:grid-cols-3">
            {[
              { icon: Pill, title: "Nutraceuticals", desc: "Premium moringa powder and botanical ingredients formulated for wellness supplements, functional foods, protein blends and health-focused product lines." },
              { icon: ChefHat, title: "Food Processing", desc: "Onion powder, dehydrated vegetables and specialty ingredients designed for seasoning blends, ready meals, snacks and industrial food manufacturing." },
              { icon: UtensilsCrossed, title: "Healthy Snacks", desc: "Export-grade makhana and mushroom products for gourmet snacks, premium retail brands, restaurants and healthy food innovations." },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <FadeIn key={card.title} delay={i * 130}>
                  <div className="group text-center">
                    <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#efe8db] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#6f9f55] group-hover:shadow-[0_16px_40px_rgba(111,159,85,0.3)]">
                      <Icon size={38} className="text-[#123524] transition-all duration-500 group-hover:text-white" />
                    </div>
                    <h3 className="mb-4 text-3xl font-medium text-[#123524] transition-transform duration-300 group-hover:-translate-y-0.5">{card.title}</h3>
                    <p className="px-6 leading-relaxed text-gray-600">{card.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <IndustrialFormulations />

      {/* CONTACT / LEAD GEN */}
      <section className="relative overflow-hidden bg-[#f7f4ee] py-8">
        <div className="absolute left-[-200px] top-0 h-[400px] w-[500px] rounded-full bg-[#d8b15a]/10 blur-[120px]" />
        <div className="absolute right-[-200px] bottom-0 h-[400px] w-[500px] rounded-full bg-[#123524]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="overflow-hidden rounded-[50px] bg-gradient-to-br from-[#123524] to-[#0d281c] p-8 md:p-12">
              <div className="grid items-center gap-10 lg:grid-cols-2">

                <div>
                  <FadeIn direction="left" delay={0}>
                    <span className="uppercase tracking-[4px] text-[#d8b15a]">Start Importing</span>
                    <h2 className="mt-5 font-serif text-5xl leading-tight text-white md:text-7xl">
                      {`Let's Build`}<br />Global Success<br />Together
                    </h2>
                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                      {`Whether you're a distributor, retailer, manufacturer or importer, BharatXAgro provides premium agricultural ingredients backed by reliable sourcing and export excellence.`}
                    </p>
                  </FadeIn>

                  <FadeIn direction="left" delay={160}>
                    <div className="mt-6 flex flex-wrap gap-4">
                      <div className="rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5">export@bharatxagro.com</div>
                      <div className="rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5">+91 XXXXX XXXXX</div>
                    </div>
                  </FadeIn>

                  <FadeIn direction="left" delay={260}>
                    <div className="mt-6 flex gap-10">
                      <AnimatedStat value="50+" label="Countries" delay={300} />
                      <AnimatedStat value="500+" label="Clients Served" delay={420} />
                      <AnimatedStat value="15+" label="Years Experience" delay={540} />
                    </div>
                  </FadeIn>
                </div>

                <FadeIn direction="right" delay={100}>
                  <div className="rounded-[40px] border border-white/10 bg-white/10 p-10 backdrop-blur-2xl transition-all duration-500 hover:bg-white/15 hover:shadow-[0_30px_80px_rgba(0,0,0,0.3)]">
                    <h3 className="font-serif text-4xl text-white">Request Export Quote</h3>
                    <p className="mt-3 text-white/60">Tell us your sourcing requirements.</p>
                    <form className="mt-6 space-y-4">
                      {[
                        { type: "text", placeholder: "Your Name" },
                        { type: "email", placeholder: "Business Email" },
                        { type: "text", placeholder: "Company Name" },
                      ].map((f) => (
                        <input key={f.placeholder} type={f.type} placeholder={f.placeholder}
                          className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-white/40 outline-none transition-all duration-300 focus:border-[#d8b15a]/60 focus:bg-white/15" />
                      ))}
                      <select defaultValue=""
                        className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-[#d8b15a]/60 focus:bg-white/15">
                        <option value="" disabled className="text-black">Select Product</option>
                        <option value="moringa" className="text-black">Moringa Powder</option>
                        <option value="makhana" className="text-black">Premium Makhana</option>
                        <option value="onion" className="text-black">Onion Powder</option>
                        <option value="mushroom" className="text-black">Mushrooms</option>
                      </select>
                      <textarea rows={4} placeholder="Tell us your requirements..."
                        className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-white/40 outline-none transition-all duration-300 focus:border-[#d8b15a]/60 focus:bg-white/15" />
                      <button type="submit"
                        className="w-full rounded-full bg-[#d8b15a] py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(216,177,90,0.45)] active:scale-95">
                        Request Catalog
                      </button>
                    </form>
                  </div>
                </FadeIn>

              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}