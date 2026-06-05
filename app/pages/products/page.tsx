"use client";

import IndustrialFormulations from "@/components/industrydata";
import { Pill, ChefHat, UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import { Leaf, Handshake, ShieldCheck, BadgeCheck, ClipboardCheck, FileCheck, Award } from "lucide-react";
import { motion } from "framer-motion";

const certificates = [
  { icon: BadgeCheck, title: "APEDA" },
  { icon: ShieldCheck, title: "FSSAI" },
  { icon: ClipboardCheck, title: "ISO 22000" },
  { icon: FileCheck, title: "HACCP Compliant" },
  { icon: Award, title: "GMP Standards" },
  { icon: Leaf, title: "USDA Organic" }
];

export default function ProductsPage() {
  return (
    <main className="bg-[#f7f4ee] overflow-x-hidden">

            {/* HERO SECTION */}
            <section className="relative min-h-screen overflow-hidden bg-[#f7f4ee]">

            {/* Parallax Background */}
            <div className="absolute inset-0">

                <img
                src="/producthero.png"
                alt="Products Hero"
                className="h-full w-full object-cover scale-105"
                />

                <div className="absolute inset-0 bg-[#123524]/60" />

                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#f7f4ee]" />

            </div>

            {/* Floating Shapes */}
            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-[-120px] top-40 h-72 w-72 rounded-full bg-[#d8b15a]/10 blur-3xl"
            />

            {/* Content */}
            <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-6">

                <div className="max-w-4xl">

                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm tracking-[3px] text-[#d8b15a] backdrop-blur-xl">
                    DIRECT FROM SOURCE
                </span>

                <h1 className="mt-8 font-serif text-5xl leading-tight text-white md:text-7xl">

                    Premium

                    <span className="mx-3 italic text-[#d8b15a]">
                    Ingredient
                    </span>

                    Portfolio

                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80">

                    {`Connecting global buyers with India's finest agricultural
                    exports. Every ingredient is sourced, processed and packed
                    according to international quality standards.`}

                </p>

                <div className="mt-10 flex flex-wrap gap-4">

                    <button className="rounded-full bg-[#d8b15a] px-8 py-4 font-medium text-black transition-all duration-300 hover:scale-105">

                    Explore Products

                    </button>

                    <button className="rounded-full border border-white/30 px-8 py-4 text-white transition-all duration-300 hover:bg-white hover:text-[#123524]">

                    Request Catalog

                    </button>

                </div>

                </div>

            </div>

            </section>

            
            {/* <section className="bg-[#f7f4ee] py-12">
            <div className="mx-auto max-w-7xl px-6">

                <div className="flex flex-wrap justify-center gap-4">

                {[
                    "All Products",
                    "Powders",
                    "Superfoods",
                    "Makhana",
                    "Mushrooms",
                ].map((item, index) => (
                    <button
                    key={item}
                    className={`rounded-full px-8 py-4 transition-all duration-500 ${
                        index === 0
                        ? "bg-[#123524] text-white"
                        : "border border-[#123524]/10 bg-white text-[#123524] hover:bg-[#123524] hover:text-white"
                    }`}
                    >
                    {item}
                    </button>
                ))}

                </div>

            </div>

            </section> */}

            {/* FEATURED PRODUCTS */}
            <section className="bg-[#f7f4ee] py-20 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-16 text-center">

                <span className="text-sm uppercase tracking-[4px] text-[#d8b15a]">
                    Export Portfolio
                </span>

                <h2 className="mt-4 font-serif text-5xl text-[#123524] md:text-6xl">
                    Featured Products
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">
                    {`Premium agricultural ingredients sourced directly from India's
                    most trusted farming communities.`}
                </p>

                </div>

                <div className="grid gap-8 md:grid-cols-12">

                {/* MORINGA */}
                <div className="group relative overflow-hidden rounded-[40px] md:col-span-8 h-[650px]">

                    <img
                    src="/moringa.png"
                    alt="Moringa Powder"
                    className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#123524] via-[#123524]/40 to-transparent" />

                    <div className="absolute bottom-0 p-10 text-white">

                    <span className="rounded-full bg-[#d8b15a] px-4 py-2 text-xs font-semibold tracking-[3px] text-black">
                        BEST SELLER
                    </span>

                    <h3 className="mt-6 font-serif text-5xl">
                        Organic Moringa
                    </h3>

                    <p className="mt-4 max-w-xl text-white/80">
                        Nutrient rich moringa powder processed using
                        low-temperature drying technology for maximum
                        retention of vitamins and antioxidants.
                    </p>

                    <div className="mt-8 flex gap-10">

                        <div>
                        <p className="text-xs uppercase tracking-[2px] text-white/50">
                            Origin
                        </p>
                        <p>Tamil Nadu</p>
                        </div>

                        <div>
                        <p className="text-xs uppercase tracking-[2px] text-white/50">
                            Grade
                        </p>
                        <p>AAA Export</p>
                        </div>

                    </div>

                    </div>
                </div>

                {/* MAKHANA */}
                <div className="group relative overflow-hidden rounded-[40px] md:col-span-4 h-[650px]">

                    <img
                    src="/makhana.png"
                    alt="Makhana"
                    className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#123524] via-[#123524]/30 to-transparent" />

                    <div className="absolute bottom-0 p-8 text-white">

                    <h3 className="font-serif text-4xl">
                        Premium Makhana
                    </h3>

                    <p className="mt-4 text-white/70">
                        Export-grade fox nuts sourced from Bihar.
                    </p>

                    </div>

                </div>

                {/* ONION */}
                <div className="group relative overflow-hidden rounded-[35px] md:col-span-4 h-[400px]">

                    <img
                    src="/onion.png"
                    alt="Onion Powder"
                    className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#123524] via-transparent to-transparent" />

                    <div className="absolute bottom-6 left-6 text-white">

                    <h3 className="font-serif text-3xl">
                        Onion Powder
                    </h3>

                    <p className="text-white/60">
                        Fine Mesh Processing
                    </p>

                    </div>

                </div>

                {/* FRESH MUSHROOM */}
                <div className="group relative overflow-hidden rounded-[35px] md:col-span-4 h-[400px]">

                    <img
                    src="/mushroom.png"
                    alt="Fresh Mushroom"
                    className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#123524] via-transparent to-transparent" />

                    <div className="absolute bottom-6 left-6 text-white">

                    <h3 className="font-serif text-3xl">
                        Fresh Mushrooms
                    </h3>

                    <p className="text-white/60">
                        Oyster & Button Varieties
                    </p>

                    </div>

                </div>

                {/* DRY MUSHROOM */}
                <div className="group relative overflow-hidden rounded-[35px] md:col-span-4 h-[400px]">

                    <img
                    src="/dry mushroom.png"
                    alt="Dry Mushroom"
                    className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#123524] via-transparent to-transparent" />

                    <div className="absolute bottom-6 left-6 text-white">

                    <h3 className="font-serif text-3xl">
                        Dry Mushrooms
                    </h3>

                    <p className="text-white/60">
                        Premium Dehydrated Slices
                    </p>

                    </div>

                </div>

                </div>

            </div>
            </section>

            {/* QUALITY & CERTIFICATIONS */}
            <section className="relative overflow-hidden bg-[#123524] py-32 text-white">

            {/* Glow Effects */}
            <div className="absolute left-[-200px] top-0 h-[500px] w-[500px] rounded-full bg-[#d8b15a]/10 blur-[120px]" />

            <div className="absolute right-[-150px] bottom-0 h-[450px] w-[450px] rounded-full bg-white/5 blur-[100px]" />

            <div className="relative mx-auto max-w-7xl px-6">

                <div className="grid gap-16 lg:grid-cols-2">

                {/* LEFT */}
                <div>

                    <span className="uppercase tracking-[5px] text-[#d8b15a]">
                    Global Standards
                    </span>

                    <h2 className="mt-4 font-serif text-5xl leading-tight md:text-6xl">
                    Export Excellence
                    <br />
                    Defined
                    </h2>

                    <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
                    Every shipment leaving BharatXAgro follows stringent
                    international quality controls, ensuring consistency,
                    traceability and compliance with global import standards.
                    </p>

                    <div className="mt-12 space-y-8">

                    <div className="flex gap-5">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d8b15a] text-xl font-bold text-black">
                        ✓
                        </div>

                        <div>
                        <h4 className="text-2xl font-semibold">
                            SGS Tested
                        </h4>

                        <p className="mt-2 text-white/60">
                            Independent laboratory testing for every export batch.
                        </p>
                        </div>
                    </div>

                    <div className="flex gap-5">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d8b15a] text-xl font-bold text-black">
                        ✓
                        </div>

                        <div>
                        <h4 className="text-2xl font-semibold">
                            Traceable Supply Chain
                        </h4>

                        <p className="mt-2 text-white/60">
                            Complete farm-to-container transparency.
                        </p>
                        </div>
                    </div>

                    <div className="flex gap-5">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d8b15a] text-xl font-bold text-black">
                        ✓
                        </div>

                        <div>
                        <h4 className="text-2xl font-semibold">
                            Global Logistics
                        </h4>

                        <p className="mt-2 text-white/60">
                            Exporting efficiently to Asia, Europe, GCC and North America.
                        </p>
                        </div>
                    </div>

                    </div>

                </div>

                {/* RIGHT */}
                <div className="grid gap-6 sm:grid-cols-2">

                    {certificates.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                            key={item.title}
                            className="group rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#d8b15a]/40 hover:bg-white/10"
                            >
                            <div className="mb-4 flex items-center gap-4">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#d8b15a]/10 text-[#d8b15a] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#d8b15a] group-hover:text-[#123524]">
                                <Icon size={26} strokeWidth={2.2} />
                            </div>
                            <h3 className="text-xl font-semibold text-white">
                                {item.title}
                            </h3>
                            </div>
                            <p className="mt-3 text-sm leading-relaxed text-white/60">
                                Certified compliance for international trade and food safety.
                            </p>
                            </div>
                        );
                    })}

                </div>

                </div>

            </div>

            </section>

            {/* Makhana */}
            <section className="bg-[#f7f4ee] py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">

                <div className="grid items-center gap-24 lg:grid-cols-2">

                {/* IMAGE */}
                <div className="group relative">

                    <div className="overflow-hidden rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.08)]">

                    <img
                        src="/makhana.png"
                        alt="Premium Makhana"
                        className="h-[700px] w-full object-cover transition duration-1000 group-hover:scale-110"
                    />

                    </div>

                    {/* Floating Glass Card */}
                    <div className="absolute -bottom-10 right-0 hidden w-[320px] rounded-[30px] border border-white/50 bg-white/70 p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:block">

                    <span className="text-xs uppercase tracking-[4px] text-[#d8b15a]">
                        Export Grade
                    </span>

                    <h3 className="mt-3 font-serif text-3xl text-[#123524]">
                        White Gold Of Bihar
                    </h3>

                    <p className="mt-4 text-gray-600">
                        Hand-selected premium fox nuts processed to international
                        export standards.
                    </p>

                    </div>

                </div>

                {/* CONTENT */}
                <div>

                    <span className="uppercase tracking-[4px] text-[#d8b15a]">
                    Bestseller Product
                    </span>

                    <h2 className="mt-4 font-serif text-6xl leading-tight text-[#123524]">
                    Premium
                    <br />
                    Phool Makhana
                    </h2>

                    <p className="mt-8 text-lg leading-relaxed text-gray-600">
                    {`Sourced directly from Bihar's heritage ponds, our premium
                    makhana delivers unmatched purity, texture and nutritional
                    value. Carefully graded and packed for global markets.
                    `}
                    </p>

                    <div className="mt-10 space-y-5">

                    <div className="flex items-center gap-4">
                        <div className="h-8 w-8 rounded-full bg-[#123524]/10 flex items-center justify-center">
                        ✓
                        </div>
                        <span>Premium Hand Graded Quality</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="h-8 w-8 rounded-full bg-[#123524]/10 flex items-center justify-center">
                        ✓
                        </div>
                        <span>Lab Tested Purity</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="h-8 w-8 rounded-full bg-[#123524]/10 flex items-center justify-center">
                        ✓
                        </div>
                        <span>Export Ready Packaging</span>
                    </div>

                    </div>

                    <Link href="/pages/productlist/makhana">
                        <button className="mt-10 rounded-full bg-[#123524] px-10 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0f2b1f]">
                          Explore Product
                        </button>
                    </Link>

                </div>

                </div>

            </div>
            </section>

            {/* Moringa Powder */}
            <section className="bg-[#f7f4ee] py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">

                <div className="grid items-center gap-24 lg:grid-cols-2">

                {/* CONTENT */}
                <div className="order-2 lg:order-1">

                    <span className="uppercase tracking-[4px] text-[#6f9f55]">
                    Superfood Collection
                    </span>

                    <h2 className="mt-4 font-serif text-6xl leading-tight text-[#123524]">
                    Organic
                    <br />
                    Moringa Powder
                    </h2>

                    <p className="mt-8 text-lg leading-relaxed text-gray-600">
                    Harvested from carefully selected farms and processed under
                    controlled conditions, our moringa powder retains its natural
                    nutrients, antioxidants and vibrant green color.
                    </p>

                    {/* Feature Boxes */}
                    <div className="mt-10 grid gap-4 sm:grid-cols-2">

                    <div className="rounded-[24px] bg-white p-6 shadow-lg">
                        <h4 className="font-semibold text-[#123524]">
                        Rich Nutrition
                        </h4>

                        <p className="mt-2 text-sm text-gray-500">
                        Packed with vitamins, minerals and amino acids.
                        </p>
                    </div>

                    <div className="rounded-[24px] bg-white p-6 shadow-lg">
                        <h4 className="font-semibold text-[#123524]">
                        Fine Mesh
                        </h4>

                        <p className="mt-2 text-sm text-gray-500">
                        Uniform particle size for global applications.
                        </p>
                    </div>

                    <div className="rounded-[24px] bg-white p-6 shadow-lg">
                        <h4 className="font-semibold text-[#123524]">
                        No Additives
                        </h4>

                        <p className="mt-2 text-sm text-gray-500">
                        100% pure moringa leaf powder.
                        </p>
                    </div>

                    <div className="rounded-[24px] bg-white p-6 shadow-lg">
                        <h4 className="font-semibold text-[#123524]">
                        Export Ready
                        </h4>

                        <p className="mt-2 text-sm text-gray-500">
                        Packed according to international standards.
                        </p>
                    </div>

                    </div>

                    <Link href="/pages/productlist/moringa">
                        <button className="mt-10 rounded-full border-2 border-[#123524] px-10 py-4 text-[#123524] transition-all duration-300 hover:bg-[#123524] hover:text-white">
                            View Specifications
                        </button>
                    </Link>

                </div>

                {/* IMAGE */}
                <div className="group order-1 lg:order-2 relative">

                    <div className="overflow-hidden rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.08)]">

                    <img
                        src="/moringa.png"
                        alt="Moringa Powder"
                        className="h-[700px] w-full object-cover transition duration-1000 group-hover:scale-110"
                    />

                    </div>

                    {/* Floating Stats Card */}
                    <div className="absolute -bottom-10 left-0 hidden w-[340px] rounded-[30px] border border-white/50 bg-white/80 p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:block">

                    <span className="text-xs uppercase tracking-[4px] text-[#6f9f55]">
                        Premium Grade
                    </span>

                    <h3 className="mt-3 font-serif text-3xl text-[#123524]">
                        Miracle Tree
                    </h3>

                    <p className="mt-4 text-gray-600">
                        Sustainably sourced and processed to preserve maximum
                        nutritional potency.
                    </p>

                    <div className="mt-6 flex gap-8">

                        <div>
                        <div className="text-3xl font-bold text-[#123524]">
                            100%
                        </div>
                        <div className="text-sm text-gray-500">
                            Natural
                        </div>
                        </div>

                        <div>
                        <div className="text-3xl font-bold text-[#123524]">
                            AAA
                        </div>
                        <div className="text-sm text-gray-500">
                            Export Grade
                        </div>
                        </div>

                    </div>

                    </div>

                </div>

                </div>

            </div>
            </section>

            {/* Onion Powder */}
            <section className="bg-[#faf7f1] py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">

                <div className="grid items-center gap-24 lg:grid-cols-2">

                {/* IMAGE */}
                <div className="group relative">

                    <div className="overflow-hidden rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.08)]">

                    <img
                        src="/onion.png"
                        alt="Onion Powder"
                        className="h-[700px] w-full object-cover transition duration-1000 group-hover:scale-110"
                    />

                    </div>

                    {/* Floating Badge */}
                    <div className="absolute top-8 left-8 rounded-full bg-[#d8b15a] px-6 py-3 shadow-xl">
                    <span className="text-xs font-bold tracking-[3px] text-[#123524]">
                        EXPORT GRADE
                    </span>
                    </div>

                    {/* Floating Card */}
                    <div className="absolute -bottom-10 right-0 hidden w-[330px] rounded-[30px] border border-white/60 bg-white/80 p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:block">

                    <h3 className="font-serif text-3xl text-[#123524]">
                        Consistent Quality
                    </h3>

                    <p className="mt-4 text-gray-600">
                        Produced using advanced dehydration technology for
                        superior flavor retention and long shelf life.
                    </p>

                    </div>

                </div>

                {/* CONTENT */}
                <div>

                    <span className="uppercase tracking-[4px] text-[#d8b15a]">
                    Culinary Ingredients
                    </span>

                    <h2 className="mt-4 font-serif text-6xl leading-tight text-[#123524]">
                    Premium
                    <br />
                    Onion Powder
                    </h2>

                    <p className="mt-8 text-lg leading-relaxed text-gray-600">
                    Carefully dehydrated and finely milled onion powder that
                    delivers intense flavor, excellent shelf stability and
                    consistent quality for food manufacturers worldwide.
                    </p>

                    {/* Specifications */}
                    <div className="mt-10 grid gap-5 sm:grid-cols-2">

                    <div className="rounded-[24px] bg-white p-6 shadow-lg">
                        <h4 className="font-semibold text-[#123524]">
                        Fine Mesh
                        </h4>

                        <p className="mt-2 text-sm text-gray-500">
                        Uniform granulation and texture.
                        </p>
                    </div>

                    <div className="rounded-[24px] bg-white p-6 shadow-lg">
                        <h4 className="font-semibold text-[#123524]">
                        Long Shelf Life
                        </h4>

                        <p className="mt-2 text-sm text-gray-500">
                        Moisture controlled packaging.
                        </p>
                    </div>

                    <div className="rounded-[24px] bg-white p-6 shadow-lg">
                        <h4 className="font-semibold text-[#123524]">
                        Strong Aroma
                        </h4>

                        <p className="mt-2 text-sm text-gray-500">
                        Preserved natural onion flavor.
                        </p>
                    </div>

                    <div className="rounded-[24px] bg-white p-6 shadow-lg">
                        <h4 className="font-semibold text-[#123524]">
                        Bulk Supply
                        </h4>

                        <p className="mt-2 text-sm text-gray-500">
                        Available for large export orders.
                        </p>
                    </div>

                    </div>

                    <Link
                        href="/pages/productlist/onion"
                        className="mt-10 inline-block rounded-full bg-[#123524] px-10 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                         Product Specs
                    </Link>

                </div>

                </div>

            </div>
            </section>

            {/* MUSHROOMS */}
            <section className="bg-[#f7f4ee] py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}
                <div className="mb-20 text-center">

                <span className="uppercase tracking-[4px] text-[#d8b15a]">
                    Gourmet Collection
                </span>

                <h2 className="mt-4 font-serif text-5xl text-[#123524] md:text-6xl">
                    Premium Mushroom Range
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">
                    Carefully cultivated and processed mushrooms tailored
                    for international food service, retail and industrial applications.
                </p>

                </div>

                {/* Cards */}
                <div className="grid gap-8 lg:grid-cols-2">

                {/* Fresh Mushroom */}
                <div className="group relative overflow-hidden rounded-[40px] h-[750px]">

                    <img
                    src="/mushroom.png"
                    alt="Fresh Mushroom"
                    className="absolute inset-0 h-full w-full object-cover transition duration-[1200ms] group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#123524] via-[#123524]/30 to-transparent" />

                    <div className="absolute top-8 left-8 rounded-full bg-white/20 px-5 py-2 backdrop-blur-xl">
                    <span className="text-xs tracking-[3px] text-white">
                        FRESH PRODUCE
                    </span>
                    </div>

                    <div className="absolute bottom-0 p-10 text-white">

                    <h3 className="font-serif text-5xl">
                        Fresh Mushrooms
                    </h3>

                    <p className="mt-5 max-w-md text-white/80">
                        Premium oyster and button mushrooms harvested daily,
                        ensuring freshness, texture and export-grade quality.
                    </p>

                    <div className="mt-8 flex gap-8">

                        <div>
                        <p className="text-xs uppercase tracking-[2px] text-white/50">
                            Shelf Life
                        </p>
                        <p>7–14 Days</p>
                        </div>

                        <div>
                        <p className="text-xs uppercase tracking-[2px] text-white/50">
                            Availability
                        </p>
                        <p>Year Round</p>
                        </div>

                    </div>

                    </div>

                </div>

                {/* Dry Mushroom */}
                <div className="group relative overflow-hidden rounded-[40px] h-[750px]">

                    <img
                    src="/dry mushroom.png"
                    alt="Dry Mushroom"
                    className="absolute inset-0 h-full w-full object-cover transition duration-[1200ms] group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#123524] via-[#123524]/40 to-transparent" />

                    <div className="absolute top-8 left-8 rounded-full bg-[#d8b15a] px-5 py-2 shadow-lg">
                    <span className="text-xs tracking-[3px] text-[#123524]">
                        DEHYDRATED
                    </span>
                    </div>

                    <div className="absolute bottom-0 p-10 text-white">

                    <h3 className="font-serif text-5xl">
                        Dry Mushrooms
                    </h3>

                    <p className="mt-5 max-w-md text-white/80">
                        Expertly dehydrated mushrooms with exceptional
                        shelf stability while preserving aroma, flavor and texture.
                    </p>

                    <div className="mt-8 flex gap-8">

                        <div>
                        <p className="text-xs uppercase tracking-[2px] text-white/50">
                            Shelf Life
                        </p>
                        <p>12–24 Months</p>
                        </div>

                        <div>
                        <p className="text-xs uppercase tracking-[2px] text-white/50">
                            Packaging
                        </p>
                        <p>Bulk Export</p>
                        </div>

                    </div>

                    </div>

                </div>

                </div>

            </div>
            </section>

            {/* APPLICATIONS & INDUSTRIES */}
            <section className="bg-[#f7f4ee] py-8">
                <div className="mx-auto max-w-7xl px-6">
                    {/* Heading */}
                    <div className="mb-20 text-center">
                    <span className="mb-4 block text-xs uppercase tracking-[4px] text-[#6f9f55]">
                        Global Applications
                    </span>

                    <h2 className="font-serif text-5xl text-[#123524] md:text-6xl">
                        Fueling Diverse Industries
                    </h2>

                    </div>

                    {/* Cards */}
                    <div className="grid gap-12 md:grid-cols-3">

                    {/* CARD 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="group text-center"
                    >

                        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#efe8db] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#6f9f55]">

                        <Pill
                            size={38}
                            className="text-[#123524] transition-all duration-500 group-hover:text-white"
                        />

                        </div>

                        <h3 className="mb-4 text-3xl font-medium text-[#123524]">
                        Nutraceuticals
                        </h3>

                        <p className="px-6 leading-relaxed text-gray-600">
                        Premium moringa powder and botanical ingredients
                        formulated for wellness supplements, functional foods,
                        protein blends and health-focused product lines.
                        </p>

                    </motion.div>

                    {/* CARD 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                        }}
                        className="group text-center"
                    >

                        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#efe8db] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#6f9f55]">

                        <ChefHat
                            size={38}
                            className="text-[#123524] transition-all duration-500 group-hover:text-white"
                        />

                        </div>

                        <h3 className="mb-4 text-3xl font-medium text-[#123524]">
                        Food Processing
                        </h3>

                        <p className="px-6 leading-relaxed text-gray-600">
                        Onion powder, dehydrated vegetables and specialty
                        ingredients designed for seasoning blends, ready meals,
                        snacks and industrial food manufacturing.
                        </p>

                    </motion.div>

                    {/* CARD 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                        }}
                        className="group text-center"
                    >

                        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#efe8db] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#6f9f55]">

                        <UtensilsCrossed
                            size={38}
                            className="text-[#123524] transition-all duration-500 group-hover:text-white"
                        />

                        </div>

                        <h3 className="mb-4 text-3xl font-medium text-[#123524]">
                        Healthy Snacks
                        </h3>

                        <p className="px-6 leading-relaxed text-gray-600">
                        Export-grade makhana and mushroom products for
                        gourmet snacks, premium retail brands, restaurants
                        and healthy food innovations.
                        </p>
                    </motion.div>
                    </div>
                </div>
            </section>

            <IndustrialFormulations />

            {/* CONTACT / LEAD GEN SECTION */}
            <section className="relative overflow-hidden bg-[#f7f4ee] py-8">
            {/* Background Glow */}
            <div className="absolute left-[-200px] top-0 h-[400px] w-[500px] rounded-full bg-[#d8b15a]/10 blur-[120px]" />
            <div className="absolute right-[-200px] bottom-0 h-[400px] w-[500px] rounded-full bg-[#123524]/10 blur-[120px]" />
            <div className="relative mx-auto max-w-7xl px-6">
                <div className="overflow-hidden rounded-[50px] bg-gradient-to-br from-[#123524] to-[#0d281c] p-8 md:p-12">
                <div className="grid items-center gap-10 lg:grid-cols-2">
                    {/* LEFT */}
                    <div>
                    <span className="uppercase tracking-[4px] text-[#d8b15a]">
                        Start Importing
                    </span>
                    <h2 className="mt-5 font-serif text-5xl leading-tight text-white md:text-7xl">
                        {`Let's Build`}
                        <br />
                        Global Success
                        <br />
                        Together
                    </h2>
                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                        {`Whether you're a distributor, retailer,
                        manufacturer or importer, BharatXAgro
                        provides premium agricultural ingredients
                        backed by reliable sourcing and export excellence.`}
                    </p>
                    {/* Quick Contact */}
                    <div className="mt-6 flex flex-wrap gap-4">

                        <div className="rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur-xl">
                        export@bharatxagro.com
                        </div>

                        <div className="rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur-xl">
                        +91 XXXXX XXXXX
                        </div>

                    </div>

                    {/* Stats */}
                    <div className="mt-6 flex gap-10">

                        <div>
                        <h3 className="text-4xl font-bold text-[#d8b15a]">
                            50+
                        </h3>

                        <p className="mt-2 text-white/60">
                            Countries
                        </p>
                        </div>

                        <div>
                        <h3 className="text-4xl font-bold text-[#d8b15a]">
                            500+
                        </h3>

                        <p className="mt-2 text-white/60">
                            Clients Served
                        </p>
                        </div>

                        <div>
                        <h3 className="text-4xl font-bold text-[#d8b15a]">
                            15+
                        </h3>
                        <p className="mt-2 text-white/60">
                            Years Experience
                        </p>
                        </div>
                    </div>
                    </div>
                    {/* RIGHT FORM */}
                    <div>
                    <div className="rounded-[40px] border border-white/10 bg-white/10 p-10 backdrop-blur-2xl">
                        <h3 className="font-serif text-4xl text-white">
                        Request Export Quote
                        </h3>
                        <p className="mt-3 text-white/60">
                        Tell us your sourcing requirements.
                        </p>
                        <form className="mt-6 space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-white/40 outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Business Email"
                            className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-white/40 outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Company Name"
                            className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-white/40 outline-none"
                        />
                        <select
                            defaultValue=""
                            className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none"
                            >
                            <option value="" disabled className="text-black">
                                Select Product
                            </option>
                            <option value="moringa" className="text-black">
                                Moringa Powder
                            </option>
                            <option value="makhana" className="text-black">
                                Premium Makhana
                            </option>
                            <option value="onion" className="text-black">
                                Onion Powder
                            </option>
                            <option value="mushroom" className="text-black">
                                Mushrooms
                            </option>
                        </select>
                        <textarea
                            rows={4}
                            placeholder="Tell us your requirements..."
                            className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-white/40 outline-none"
                        />
                        <button
                            type="submit"
                            className="w-full rounded-full bg-[#d8b15a] py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(216,177,90,0.4)]"
                        >
                            Request Catalog
                        </button>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </main>
    );
}     