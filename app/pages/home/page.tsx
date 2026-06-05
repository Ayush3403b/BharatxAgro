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

export default function Home() {
  return (
    <>

        {/* HERO SECTION */}
        <section className="relative min-h-screen overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
              <img
              src="/hero1.png"
              alt="Agriculture Landscape"
              className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#f4f1ea]" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-12">
              <div className="max-w-3xl">
              <h1 className="font-serif text-5xl leading-tight text-white md:text-7xl">
                  Premium Agricultural
                  <br />
                  Ingredients From
                  <span className="italic text-[#e0b85c]"> India </span>
                  To
                  <br />
                  Global Markets
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80">
                  {`Delivering India's finest agricultural products worldwide.
                  Sustainable sourcing, premium quality and trusted export
                  excellence.`}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                  <button className="rounded-full bg-[#d8b15a] px-8 py-4 font-medium text-black transition hover:scale-105">
                  Explore Products
                  </button>

                  <button className="rounded-full border border-white px-8 py-4 text-white transition hover:bg-white hover:text-black">
                  Our Process
                  </button>
              </div>
              </div>

              {/* Floating Product Card */}
              <div className="absolute right-20 top-1/2 hidden -translate-y-1/2 xl:block">
              <div className="hero-float group relative rounded-full border border-white/20 bg-white/15 p-8 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.15)]">
                
                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-60" />

                {/* Product */}
                <img
                  src="/makhana.png"
                  alt="Premium Makhana"
                  className="relative z-10 h-44 w-44 rounded-full object-contain transition-transform duration-700 group-hover:scale-110"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-[#d8b15a] px-4 py-2 text-xs font-medium tracking-[2px] text-white shadow-lg">
                  Premium Export
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="bg-[#f4f1ea] py-14">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 text-center md:grid-cols-4">
              <div>
                <h3 className="font-serif text-5xl text-[#1f3d2b]">15+</h3>
                <p className="mt-3 text-sm uppercase tracking-[4px] text-gray-500">
                    Countries Reached
                </p>
              </div>

              <div>
                <h3 className="font-serif text-5xl text-[#1f3d2b]">500+</h3>
                <p className="mt-3 text-sm uppercase tracking-[4px] text-gray-500">
                    Tons Annual Export
                </p>
              </div>

              <div>
                <h3 className="font-serif text-5xl text-[#1f3d2b]">100%</h3>
                <p className="mt-3 text-sm uppercase tracking-[4px] text-gray-500">
                    Organic Certified
                </p>
              </div>

              <div>
                <h3 className="font-serif text-5xl text-[#1f3d2b]">24/7</h3>
                <p className="mt-3 text-sm uppercase tracking-[4px] text-gray-500">
                    Global Logistics
                </p>
              </div>
          </div>
        </section>

        {/* ECOSYSTEM SECTION */}
        <section className="relative overflow-hidden bg-gray-100 py-12">

          <div className="absolute inset-0 opacity-[0.03]">
            <div className="h-full w-full bg-[radial-gradient(circle,#123524_1px,transparent_1px)] bg-[size:32px_32px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6">

            <div className="text-center">
              <p className="text-sm uppercase tracking-[4px] text-[#8a8a8a]">
                Our Product Ecosystem
              </p>

              <h2 className="mt-4 font-serif text-5xl text-[#173321] md:text-6xl">
                Nature Connected
              </h2>
            </div>

            <div className="relative mx-auto mt-8 h-[800px] max-w-5xl">

              {/* SVG Connection Lines */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 1200 900"
              >
                <line x1="600" y1="450" x2="600" y2="60" stroke="#d8b15a" strokeWidth="2" strokeDasharray="8 8" />
                <line x1="600" y1="450" x2="980" y2="320" stroke="#d8b15a" strokeWidth="2" strokeDasharray="8 8" />
                <line x1="600" y1="450" x2="900" y2="720" stroke="#d8b15a" strokeWidth="2" strokeDasharray="8 8" />
                <line x1="600" y1="450" x2="300" y2="720" stroke="#d8b15a" strokeWidth="2" strokeDasharray="8 8" />
                <line x1="600" y1="450" x2="220" y2="320" stroke="#d8b15a" strokeWidth="2" strokeDasharray="8 8" />
              </svg>

              {/* CENTER LOGO */}
              <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">

                <div className="relative">

                  <div className="absolute inset-0 animate-ping rounded-full bg-[#d8b15a]/20" />

                  <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-[#d8b15a]/30 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)]">

                    <Image
                      src="/logo.png"
                      alt="BharatXAgro"
                      width={180}
                      height={180}
                      priority
                    />

                  </div>
                </div>
              </div>

              {/* MAKHANA */}
              <div className="group absolute left-1/2 top-0 -translate-x-1/2 ecosystem-float">

                <div className="ecosystem-card">
                  <img
                    src="/makhana.png"
                    alt=""
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>

                <p className="mt-4 text-center font-medium text-[#173321]">
                  Makhana
                </p>

              </div>

              {/* MORINGA */}
              <div className="group absolute right-0 top-[220px] ecosystem-float-delay">

                <div className="ecosystem-card">
                  <img
                    src="/moringa.png"
                    alt=""
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>

                <p className="mt-4 text-center font-medium text-[#173321]">
                  Moringa Powder
                </p>

              </div>

              {/* ONION */}
              <div className="group absolute bottom-0 right-24 ecosystem-float">

                <div className="ecosystem-card">
                  <img
                    src="/onion.png"
                    alt=""
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>

                <p className="mt-4 text-center font-medium text-[#173321]">
                  Onion Powder
                </p>

              </div>

              {/* MUSHROOM */}
              <div className="group absolute bottom-0 left-24 ecosystem-float-delay">

                <div className="ecosystem-card">
                  <img
                    src="/mushroom.png"
                    alt=""
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>

                <p className="mt-4 text-center font-medium text-[#173321]">
                  Mushroom
                </p>

              </div>

              {/* DRY MUSHROOM */}
              <div className="group absolute left-0 top-[220px] ecosystem-float">

                <div className="ecosystem-card">
                  <img
                    src="/dry mushroom.png"
                    alt=""
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>

                <p className="mt-4 text-center font-medium text-[#173321]">
                  Dry Mushroom
                </p>

              </div>

            </div>
          </div>
        </section>

        {/* EXPORT SIGNATURE SECTION */}
        <section className="bg-[#f7f4ee] py-12 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6">

            {/* Header */}
            <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

              <div className="max-w-2xl">
                <h2 className="font-serif text-5xl text-[#123524] md:text-6xl">
                  Our Export Signature
                </h2>

                <p className="mt-4 text-lg text-gray-500">
                  Carefully curated, sustainably sourced, and meticulously
                  processed for global luxury markets.
                </p>
              </div>

              <button className="group hidden md:flex items-center gap-2 text-sm font-semibold tracking-[2px] text-[#123524] uppercase">
                View All Products

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

            </div>

            {/* Product Cards */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {/* MORINGA */}
              <div className="group relative h-[420px] overflow-hidden rounded-[30px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-3">

                <img
                  src="/moringa.png"
                  alt="Moringa Powder"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#123524] via-[#123524]/20 to-transparent" />

                <div className="absolute bottom-0 p-8">

                  <span className="inline-block rounded-full bg-[#d8b15a] px-4 py-1 text-xs font-bold uppercase tracking-[2px] text-white">
                    Bestseller
                  </span>

                  <h3 className="mt-5 font-serif text-4xl text-white">
                    Moringa Powder
                  </h3>

                  <p className="mt-4 max-w-sm text-white/70 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Certified organic, nutrient-dense powder sourced from
                    sustainable farms in South India.
                  </p>

                  <button className="group/btn mt-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[2px] text-[#d8b15a]">
                    Learn More

                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                      →
                    </span>
                  </button>

                </div>
              </div>

              {/* MAKHANA */}
              <div className="group relative h-[420px] overflow-hidden rounded-[30px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-3">

                <img
                  src="/makhana.png"
                  alt="Premium Makhana"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#123524] via-[#123524]/20 to-transparent" />

                <div className="absolute bottom-0 p-8">

                  <span className="inline-block rounded-full bg-[#123524] px-4 py-1 text-xs font-bold uppercase tracking-[2px] text-white">
                    Export Grade
                  </span>

                  <h3 className="mt-5 font-serif text-4xl text-white">
                    Premium Makhana
                  </h3>

                  <p className="mt-4 max-w-sm text-white/70 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Handpicked fox nuts, roasted to perfection and packed with
                    plant-based protein.
                  </p>

                  <button className="group/btn mt-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[2px] text-[#d8b15a]">
                    Learn More

                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                      →
                    </span>
                  </button>

                </div>
              </div>

              {/* ONION POWDER */}
              <div className="group relative h-[420px] overflow-hidden rounded-[30px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-3 md:col-span-2 lg:col-span-1">

                <img
                  src="/onion.png"
                  alt="Onion Powder"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#123524] via-[#123524]/20 to-transparent" />

                <div className="absolute bottom-0 p-8">

                  <span className="inline-block rounded-full bg-[#d8b15a] px-4 py-1 text-xs font-bold uppercase tracking-[2px] text-[#123524]">
                    Culinary Grade
                  </span>

                  <h3 className="mt-5 font-serif text-4xl text-white">
                    Onion Powder
                  </h3>

                  <p className="mt-4 max-w-sm text-white/70 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Triple-sifted, moisture-controlled aromatic onion powder
                    for international food standards.
                  </p>

                  <button className="group/btn mt-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[2px] text-[#d8b15a]">
                    Learn More

                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                      →
                    </span>
                  </button>

                </div>
              </div>

            </div>

          </div>
        </section>

        {/* SHOWCASE SECTIONS */}
        <section className="bg-[#f4f1ea] py-12 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6">

            {/* MAKHANA SHOWCASE */}
            <div className="grid items-center gap-24 lg:grid-cols-2">

              {/* IMAGE SIDE */}
              <div className="group relative">
                <div className="overflow-hidden rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
                  <img
                    src="/makhana.png"
                    alt="Premium Makhana"
                    className="aspect-[4/5] h-[600px] w-full object-cover transition duration-1000 group-hover:scale-110"
                  />
                </div>

                {/* Floating Card */}
                <div className="absolute -bottom-10 right-0 hidden w-[320px] rounded-[28px] border border-white/60 bg-white/70 p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:-translate-y-3 md:block hero-float">

                  <span className="text-xs uppercase tracking-[4px] text-[#7d8f6d]">
                    Superfood Tier 1
                  </span>

                  <h3 className="mt-3 font-serif text-3xl text-[#173321]">
                    White Gold Of Bihar
                  </h3>

                  <p className="mt-4 leading-relaxed text-gray-600">
                    Highest density puffed kernels, hand-picked and
                    carefully processed for export-grade quality.
                  </p>
                </div>
              </div>

              {/* CONTENT SIDE */}
              <div className="lg:pl-10">

                <span className="uppercase tracking-[4px] text-[#d8b15a]">
                  Global Top Seller
                </span>

                <h2 className="mt-2 font-serif text-5xl leading-tight text-[#173321] md:text-6xl">
                  Premium Phool
                  <br />
                  Makhana
                </h2>

                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Our makhana is sourced directly from certified heritage
                  ponds across Bihar. Every kernel is carefully graded,
                  roasted and packed to meet international export standards
                  while preserving freshness and nutrition.
                </p>

                <div className="mt-6 space-y-5">

                  <div className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#123524]/10 text-[#123524]">
                      ✓
                    </div>
                    <span>0% Moisture Packaging</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#123524]/10 text-[#123524]">
                      ✓
                    </div>
                    <span>Traceability To The Pond</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#123524]/10 text-[#123524]">
                      ✓
                    </div>
                    <span>Lab Tested Purity</span>
                  </div>

                </div>

                <button className="mt-6 rounded-full bg-[#123524] px-10 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0d281c] hover:shadow-xl">
                  Inquire Now
                </button>

              </div>
            </div>

            {/* MORINGA SHOWCASE */}
            <div className="mt-20 grid items-center gap-24 lg:grid-cols-2">

              {/* CONTENT */}
              <div className="order-2 lg:order-1">

                <span className="uppercase tracking-[4px] text-[#6f9f55]">
                  Vitality Extract
                </span>

                <h2 className="mt-2 font-serif text-5xl leading-tight text-[#173321] md:text-6xl">
                  Moringa
                  <br />
                  Oleifera Powder
                </h2>

                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Known as the Miracle Tree, our moringa leaves are
                  harvested at peak maturity and processed under controlled
                  conditions to preserve antioxidants, vitamins and
                  essential nutrients.
                </p>

                <div className="mt-6 space-y-5">

                  <div className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#123524]/10 text-[#123524]">
                      ✓
                    </div>
                    <span>Shadow-Dried Preservation</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#123524]/10 text-[#123524]">
                      ✓
                    </div>
                    <span>80–100 Mesh Consistency</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#123524]/10 text-[#123524]">
                      ✓
                    </div>
                    <span>No Fillers Or Additives</span>
                  </div>

                </div>

                <button className="mt-6 rounded-full border-2 border-[#123524] px-10 py-4 text-[#123524] transition-all duration-300 hover:-translate-y-1 hover:bg-[#123524] hover:text-white">
                  Bulk Specifications
                </button>

              </div>

              {/* IMAGE */}
              <div className="group order-1 lg:order-2 relative">

                <div className="overflow-hidden rounded-[42px] shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
                  <img
                    src="/moringa.png"
                    alt="Moringa"
                    className="aspect-[4/5] h-[600px] w-full object-cover transition duration-1000 group-hover:scale-110"
                  />
                </div>

                {/* Floating Card */}
                <div className="absolute -bottom-10 left-0 hidden w-[320px] rounded-[28px] border border-white/60 bg-white/70 p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:-translate-y-3 md:block hero-float">

                  <span className="text-xs uppercase tracking-[4px] text-[#6f9f55]">
                    Nutrient Rich
                  </span>

                  <h3 className="mt-3 font-serif text-3xl text-[#173321]">
                    Miracle Tree
                  </h3>

                  <p className="mt-4 leading-relaxed text-gray-600">
                    Rich in antioxidants, vitamins and minerals, carefully
                    processed to preserve natural potency and purity.
                  </p>

                </div>

              </div>
            </div>
          </div>
        </section>

        {/* EDGE SHOWCASE */}
        <section className="bg-[#123524] py-32 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16">
              <p className="text-sm uppercase tracking-[4px] text-[#d8b15a]">
                Our Edge
              </p>

              <h2 className="mt-4 font-serif text-5xl md:text-6xl">
                The Standards of Excellence
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Farm Direct Integrity",
                  desc: "Direct farmer sourcing ensures traceability and superior quality.",
                  icon: <BiCheckShield />
                },
                {
                  title: "Cold Chain Tech",
                  desc: "Advanced storage preserves freshness and nutritional value.",
                  icon: <RiMicroscopeFill />
                },
                {
                  title: "Global Compliance",
                  desc: "Meeting USDA, EU and APEDA export requirements.",
                  icon: <BsGlobeCentralSouthAsia />
                },
                {
                  title: "Custom Packaging",
                  desc: "Private labeling and bulk packaging solutions available.",
                  icon: <IoMdCube />
                },
                {
                  title: "Transparent Pricing",
                  desc: "Stable contracts and competitive export pricing.",
                  icon: <HiMiniBanknotes />
                },
                {
                  title: "Ethical Sourcing",
                  desc: "Empowering thousands of farmers through sustainable farming.",
                  icon: <IoIosPeople />
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="group rounded-[30px] border border-white/10 p-8 transition-all duration-300 hover:bg-white hover:text-[#d8b15a] hover:border-[#d8b15a]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-3xl text-white transition-all duration-300 group-hover:border-[#d8b15a] group-hover:bg-[#d8b15a]/10 group-hover:text-[#d8b15a]">
                    {item.icon}
                  </div>

                  <h3 className="mb-4 text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="leading-relaxed opacity-80">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUALITY JOURNEY SHOWCASE */}
        <section className="relative overflow-hidden bg-[#f7f4ee] py-12">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="h-full w-full bg-[radial-gradient(circle,#123524_1px,transparent_1px)] bg-[size:30px_30px]" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6">
            {/* Heading */}
            <div className="mb-12 text-center">
              <span className="text-sm uppercase tracking-[5px] text-[#d8b15a]">
                Excellence Process
              </span>
              <h2 className="mt-4 font-serif text-5xl text-[#123524] md:text-6xl">
                The Journey of Quality
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">
                Every product follows a carefully monitored journey from farm
                to global destination, ensuring purity, freshness and export
                excellence at every stage.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Line */}
              <div className="absolute top-[34px] left-[12.5%] w-[75%] hidden lg:block z-0">
                <div className="journey-line h-[2px]" />

                <span className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#d8b15a]" />
                <span className="absolute left-1/3 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#d8b15a]" />
                <span className="absolute left-2/3 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#d8b15a]" />
                <span className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#d8b15a]" />
              </div>
              <div className="grid gap-10 lg:grid-cols-4">
                {[
                  {
                    icon: <GiWheat />,
                    title: "Ethical Harvest",
                    desc: "Hand-picked at peak ripeness from certified farms.",
                  },
                  {
                    icon: <GiFactory />,
                    title: "Cold Processing",
                    desc: "Nutrient-preserving drying and grinding techniques.",
                  },
                  {
                    icon: <GiCardboardBoxClosed />,
                    title: "Aseptic Packaging",
                    desc: "Vacuum-sealed for extended freshness and transit.",
                  },
                  {
                    icon: <FaShip />,
                    title: "Swift Export",
                    desc: "Optimized logistics to over 50 countries worldwide.",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="group relative"
                  >
                    {/* Icon Circle */}
                    <div className="relative z-20 mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#d8b15a]/30 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-700 group-hover:-translate-y-2 group-hover:scale-110">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#d8b15a]/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                      <span className="text-3xl text-[#123524]">
                        {step.icon}
                      </span>
                    </div>
                    {/* Number Badge 
                    <div className="absolute left-1/2 top-4 z-30 -translate-x-1/2 -translate-y-3 rounded-full bg-[#d8b15a] px-3 py-1 text-xs font-bold text-white shadow-lg">
                      0{index + 1}
                    </div>*/}
                    {/* Card */}
                    <div className="mt-10 rounded-[30px] border border-white/60 bg-white/70 p-8 text-center backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-700 group-hover:-translate-y-3 group-hover:shadow-[0_30px_80px_rgba(18,53,36,0.12)]">
                      <h3 className="font-serif text-2xl text-[#123524]">
                        {step.title}
                      </h3>
                      <p className="mt-4 leading-relaxed text-gray-500">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* LOGISTICS SHOWCASE */}
        <section className="bg-[#f4f1ea] py-36 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6">

            {/* Header */}
            <div className="mb-20 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

              <div>
                <span className="uppercase tracking-[4px] text-[#d8b15a]">
                  Global Logistics
                </span>

                <h2 className="mt-4 font-serif text-5xl md:text-6xl text-[#123524]">
                  Bridging Continents
                </h2>
              </div>

              <p className="max-w-lg text-lg text-gray-600">
                {`From India's agricultural heartland to distributors,
                retailers and manufacturers worldwide through a
                trusted export network.`}
              </p>

            </div>

            {/* Map Card */}
            <div className="relative overflow-hidden rounded-[50px] border border-black/5 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.06)]">

              {/* Background Grid */}
              <div className="absolute inset-0 opacity-[0.04]">
                <div className="h-full w-full bg-[radial-gradient(circle,#123524_1px,transparent_1px)] bg-[size:30px_30px]" />
              </div>

              <div className="relative h-[650px]">

                {/* World Map */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                  alt="World Map"
                  className="absolute inset-0 h-full w-full object-contain opacity-20"
                />

                {/* India */}
                <div className="absolute left-[66%] top-[42%]">

                  <div className="absolute h-5 w-5 animate-ping rounded-full bg-[#d8b15a]/30" />

                  <div className="relative h-5 w-5 rounded-full bg-[#d8b15a] shadow-[0_0_30px_rgba(216,177,90,0.8)]" />

                </div>

                {/* USA */}
                <div className="absolute left-[26%] top-[35%]">
                  <div className="h-4 w-4 rounded-full bg-[#123524]" />
                </div>

                {/* Europe */}
                <div className="absolute left-[50%] top-[28%]">
                  <div className="h-4 w-4 rounded-full bg-[#123524]" />
                </div>

                {/* UAE */}
                <div className="absolute left-[57%] top-[47%]">
                  <div className="h-4 w-4 rounded-full bg-[#123524]" />
                </div>

                {/* Australia */}
                <div className="absolute left-[78%] top-[68%]">
                  <div className="h-4 w-4 rounded-full bg-[#123524]" />
                </div>

                {/* Export Routes */}
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 1200 650"
                >

                  <path
                    d="M700 310 Q500 180 250 220"
                    stroke="#d8b15a"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="12 12"
                    className="animate-route"
                  />

                  <path
                    d="M700 315 Q650 170 580 160"
                    stroke="#d8b15a"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="12 12"
                    className="animate-route"
                  />

                  <path
                    d="M700 310 Q720 250 640 260"
                    stroke="#d8b15a"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="12 12"
                    className="animate-route"
                  />

                  <path
                    d="M700 310 Q920 380 980 480"
                    stroke="#d8b15a"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="12 12"
                    className="animate-route"
                  />

                </svg>

                {/* Floating Stats Card */}
                <div className="absolute bottom-8 left-8 rounded-[30px] bg-white/80 p-8 backdrop-blur-xl shadow-xl">

                  <h4 className="text-xl font-semibold text-[#123524]">
                    Real-Time Tracking
                  </h4>

                  <p className="mt-2 text-gray-500">
                    Visibility across all shipments worldwide.
                  </p>

                  <div className="mt-5 flex gap-8">

                    <div>
                      <div className="text-3xl font-bold text-[#123524]">
                        15+
                      </div>
                      <div className="text-sm text-gray-500">
                        Countries
                      </div>
                    </div>

                    <div>
                      <div className="text-3xl font-bold text-[#123524]">
                        500+
                      </div>
                      <div className="text-sm text-gray-500">
                        Shipments
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>
        </section>

        {/* MARKETS SECTION */}
        <section className="bg-[#f4f1ea] py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <p className="text-sm uppercase tracking-[4px] text-[#b18a2c]">
                Markets
              </p>

              <h2 className="mt-4 font-serif text-5xl text-[#183927]">
                Where Our Ingredients Shine
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Gourmet HORECA",
                  image: "/gourmet.png"
                },
                {
                  title: "Nutraceuticals",
                  image: "/nutri.png"
                },
                {
                  title: "Retail Brands",
                  image: "/retail.png"
                },
                {
                  title: "Cosmeceuticals",
                  image: "/cosmetic.png"
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-[25px]"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="h-[450px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="font-serif text-3xl">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* CONTACT SECTION */}
        <section className="bg-[#f4f1ea] py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="overflow-hidden rounded-[50px] bg-[#e8e1d5] p-12 lg:p-20">
              <div className="grid items-center gap-16 lg:grid-cols-2">
                <div>
                  <h2 className="font-serif text-5xl text-[#183927]">
                    Begin Your Heritage Journey
                  </h2>

                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
                    Whether you are a distributor, retailer,
                    manufacturer or food brand, BharatXAgro is
                    ready to serve your global sourcing needs.
                  </p>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <div className="rounded-full bg-white px-6 py-3 shadow">
                      export@bharatxagro.com
                    </div>

                    <div className="rounded-full bg-white px-6 py-3 shadow">
                      +91 9876543210
                    </div>
                  </div>
                </div>

                <div className="rounded-[35px] bg-white p-8 shadow-xl">
                  <form className="space-y-6">
                    <input
                      placeholder="Your Name"
                      className="w-full border-b border-gray-300 pb-3 outline-none"
                    />

                    <select className="w-full border-b border-gray-300 pb-3 outline-none">
                      <option>Distribution</option>
                      <option>Retail</option>
                      <option>Manufacturing</option>
                    </select>

                    <textarea
                      rows={4}
                      placeholder="Message"
                      className="w-full border-b border-gray-300 pb-3 outline-none"
                    />

                    <button className="w-full rounded-full bg-[#123524] py-4 text-white">
                      Send Inquiry
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
     </>
  );
}   