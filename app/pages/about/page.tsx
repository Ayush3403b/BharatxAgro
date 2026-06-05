"use client";

import Image from "next/image";
import { Leaf, Handshake, ShieldCheck, BadgeCheck, ClipboardCheck, FileCheck, Award } from "lucide-react";
import {
  Sprout,
  Globe2,
  ShipWheel,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const certifications = [
  { name: "APEDA", icon: BadgeCheck },
  { name: "FSSAI", icon: ShieldCheck },
  { name: "ISO 22000", icon: ClipboardCheck },
  { name: "HACCP", icon: FileCheck },
  { name: "GMP", icon: Award },
  { name: "USDA Organic", icon: Leaf },
];


export default function About() {

    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
    const timer = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 5);
    }, 2000);

    return () => clearInterval(timer);
    }, []);
  return (
    <main>
    <section className="relative min-h-[90vh] overflow-hidden pb-24">
        <Image
            src="/Abouthero.png"
            alt="BharatXAgro"
            fill
            className="object-cover"
        />

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">

            <div className="max-w-4xl">

            <span className="rounded-full bg-white/10 px-5 py-2 text-sm tracking-[4px] text-[#d8b15a] backdrop-blur-xl">
                ABOUT BHARATXAGRO
            </span>

            <h1 className="mt-8 font-serif text-6xl text-white md:text-8xl">
                Rooted In India.
                <br />
                Trusted Globally.
            </h1>

            <p className="mt-8 max-w-2xl text-xl text-white/80">
                Connecting global markets with premium agricultural products
                sourced from India’s most trusted farming communities.
            </p>

            </div>
        </div>

        {/* Soft Blur */}
        <div className="absolute bottom-0 left-0 z-10 h-40 w-full backdrop-blur-[3px]" />
        {/* Green Blend */}
        <div className="absolute bottom-0 left-0 z-20 h-56 w-full bg-gradient-to-b from-transparent via-[#123524]/20 to-[#123524]" />
        
        {/* Luxury Fade Into Next Section */}
        <div className="absolute bottom-0 left-0 z-20 h-64 w-full bg-gradient-to-b from-transparent via-[#123524]/40 to-[#123524]" />    
    </section>

    <section className="bg-[#123524] py-12 text-white">

        <div className="mx-auto max-w-7xl px-6">

            <div className="grid gap-12 md:grid-cols-4">

            {[
                ["50+", "Countries Served"],
                ["500+", "Successful Shipments"],
                ["100+", "Partner Farms"],
                ["15+", "Years Experience"],
            ].map(([value, label]) => (
                <div
                key={label}
                className="text-center"
                >

                <h2 className="text-6xl font-bold text-[#d8b15a]">
                    {value}
                </h2>

                <p className="mt-4 text-white/70">
                    {label}
                </p>

                </div>
            ))}

            </div>

        </div>

    </section>

    <section className="bg-[#f7f4ee] py-32">

        <div className="mx-auto max-w-7xl px-6">

            <div className="grid items-center gap-20 lg:grid-cols-2">

            <div>

                <span className="uppercase tracking-[4px] text-[#d8b15a]">
                Who We Are
                </span>

                <h2 className="mt-4 font-serif text-5xl text-[#123524]">
                Building Global Trust Through Agriculture
                </h2>

            </div>

            <div>

                <p className="text-lg leading-relaxed text-gray-600">
                BharatXAgro is a premium agricultural export company
                specializing in Moringa Powder, Makhana, Onion Powder,
                Fresh Mushrooms and Dry Mushrooms.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                We bridge Indian farmers and global markets through
                responsible sourcing, modern processing and world-class
                quality standards.
                </p>

            </div>

            </div>

        </div>

    </section>

    <section className="bg-[#123524] py-32 overflow-hidden text-white">
        <div className="mx-auto max-w-7xl px-6">

            {/* Heading */}
            <div className="mb-24 text-center">

            <span className="text-xs uppercase tracking-[5px] text-[#d8b15a]">
                Our Journey
            </span>

            <h2 className="mt-4 font-serif text-5xl md:text-6xl">
                The Harvest Journey
            </h2>

            </div>

            {/* Timeline */}
            <div className="relative">

            {/* Main Timeline Line */}
            <div className="absolute left-1/2 top-[40px] hidden h-[2px] w-[82%] -translate-x-1/2 overflow-hidden rounded-full bg-[#d8b15a]/15 lg:block">

                {/* Base Gradient */}
                <div className="h-full w-full bg-gradient-to-r from-[#d8b15a]/20 via-[#d8b15a]/50 to-[#d8b15a]/20" />

                {/* Travelling Light */}
                <div
                    className="absolute top-1/2 h-[10px] w-[120px] -translate-y-1/2 rounded-full"
                    style={{
                    background:
                        "radial-gradient(circle, rgba(216,177,90,1) 0%, rgba(216,177,90,0.6) 35%, transparent 80%)",
                    left: `${activeStep * 21}%`,
                    transition: "all 1.2s cubic-bezier(0.22,1,0.36,1)",
                    filter: "blur(4px)",
                    }}
                />

                </div>

            <div className="grid gap-12 lg:grid-cols-5">

                {[
                {
                    year: "2018",
                    title: "Agricultural Foundations",
                    desc: "Established trusted sourcing partnerships with farming communities across India's agricultural heartlands.",
                },

                {
                    year: "2020",
                    title: "Processing Excellence",
                    desc: "Introduced advanced processing and quality-control systems to deliver export-grade consistency.",
                },

                {
                    year: "2022",
                    title: "Global Expansion",
                    desc: "Successfully expanded shipments into international markets, serving buyers across multiple regions.",
                },

                {
                    year: "2024",
                    title: "Product Diversification",
                    desc: "Expanded our portfolio with Moringa Powder, Makhana, Onion Powder and Mushroom products.",
                },

                {
                    year: "2025",
                    title: "BharatXAgro Global",
                    desc: "Positioned BharatXAgro as a trusted agricultural export partner connecting India to global markets.",
                },
                ].map((item,index) => (
                <div
                    key={item.year}
                    className={`group relative text-center transition-all duration-700 hover:-translate-y-2 ${
                    activeStep === index
                        ? "scale-105"
                        : ""
                    }`}
                >
                    {/* Year Circle */}
                    <div
                    className={`mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border text-white transition-all duration-700
                    ${
                        activeStep === index
                        ? "border-[#d8b15a] bg-[#d8b15a] shadow-[0_0_40px_rgba(216,177,90,0.8)]"
                        : "border-[#d8b15a]/30 bg-[#1b4733]"
                    }`}
                    >
                    <span className="text-lg font-bold tracking-wide">
                        {item.year}
                    </span>

                    </div>

                    {/* Content */}
                    <h3
                    className={`text-2xl font-medium transition-all duration-700 ${
                        activeStep === index
                        ? "text-[#d8b15a]"
                        : "text-white"
                    }`}
                    >
                    {item.title}
                    </h3>

                    <p className="mt-4 leading-relaxed text-white/70">
                    {item.desc}
                    </p>

                </div>
                ))}

            </div>

            </div>

        </div>
    </section>

    <section className="bg-[#f7f4ee] py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">

            {/* Heading */}
            <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.1 }}
            className="mb-24 text-center"
            >
            <span className="text-xs uppercase tracking-[5px] text-[#d8b15a]">
                Commitments
            </span>

            <h2 className="mt-5 font-serif text-5xl text-[#123524] md:text-6xl">
                Principles That Guide Every Harvest
            </h2>
            </motion.div>

            {/* Cards */}
            <div className="grid gap-8 md:grid-cols-3">

            {/* Card 1 */}
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                duration: 0.1,
                ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                y: -12,
                }}
                className="group rounded-[30px] border border-white/50 bg-white/70 p-10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500"
            >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#123524]">

                <Leaf
                    size={28}
                    className="text-[#d8b15a]"
                />

                </div>

                <h3 className="text-2xl font-medium text-[#123524]">
                Soil Stewardship
                </h3>

                <p className="mt-5 leading-relaxed text-gray-600">
                We view the land as a living ecosystem. Through
                responsible farming practices and careful sourcing,
                we help preserve soil vitality for future generations.
                </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                duration: 0.1,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                y: -12,
                }}
                className="group rounded-[30px] border border-white/50 bg-white/70 p-10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500"
            >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#123524]">

                <Handshake
                    size={28}
                    className="text-[#d8b15a]"
                />

                </div>

                <h3 className="text-2xl font-medium text-[#123524]">
                Farmer Partnerships
                </h3>

                <p className="mt-5 leading-relaxed text-gray-600">
                We build long-term relationships with farming
                communities through fair practices, technical support
                and sustainable sourcing initiatives.
                </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                duration: 0.1,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                y: -12,
                }}
                className="group rounded-[30px] border border-white/50 bg-white/70 p-10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500"
            >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#123524]">

                <ShieldCheck
                    size={28}
                    className="text-[#d8b15a]"
                />

                </div>

                <h3 className="text-2xl font-medium text-[#123524]">
                Absolute Quality
                </h3>

                <p className="mt-5 leading-relaxed text-gray-600">
                Every batch undergoes rigorous quality checks,
                ensuring purity, consistency and compliance with
                international export standards.
                </p>
            </motion.div>

            </div>

        </div>
    </section>

    <section className="bg-[#f7f4ee] py-8 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">

            <div className="grid items-center gap-20 lg:grid-cols-2">

            {/* Image Side */}
            <div className="relative">

                {/* Decorative Border */}
                <div className="absolute -inset-5 rounded-[45px] border border-[#d8b15a]/20" />

                <div className="group relative overflow-hidden rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.08)]">

                <img
                    src="/founderimg.png"
                    alt="Founder"
                    className="h-[500px] w-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                />

                </div>

                {/* Floating Quote Card */}
                <div className="absolute -bottom-8 -right-4 z-20 max-w-[320px] rounded-[30px] border border-white/30 bg-white/70 p-8 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

                <p className="font-serif text-2xl leading-relaxed text-[#123524] italic">
                    {`"Quality is not a promise.
                    It's our daily discipline."`}
                </p>

                <div className="mt-4 h-[1px] w-16 bg-[#d8b15a]" />

                <p className="mt-4 text-sm uppercase tracking-[3px] text-[#d8b15a]">
                    BharatXAgro Leadership
                </p>

                </div>

            </div>

            {/* Content Side */}
            <div>

                <span className="text-xs uppercase tracking-[5px] text-[#d8b15a]">
                Founder Vision
                </span>

                <h2 className="mt-3 font-serif text-5xl leading-tight text-[#123524] md:text-6xl">
                The Vision Behind
                <br />
                BharatXAgro
                </h2>

                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                {`BharatXAgro was built on a simple belief —
                that India's agricultural excellence deserves a
                respected place in global markets.`}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                What started as a passion for quality sourcing has
                evolved into a trusted export network delivering
                premium Moringa Powder, Makhana, Onion Powder,
                Fresh Mushrooms and Dry Mushrooms to buyers
                around the world.
                </p>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Our focus remains unchanged: empowering farmers,
                maintaining international quality standards and
                building long-term relationships through trust,
                transparency and consistency.
                </p>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-3 gap-8">

                <div>
                    <h3 className="text-4xl font-bold text-[#123524]">
                    50+
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                    Countries Served
                    </p>
                </div>

                <div>
                    <h3 className="text-4xl font-bold text-[#123524]">
                    500+
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                    Shipments
                    </p>
                </div>

                <div>
                    <h3 className="text-4xl font-bold text-[#123524]">
                    100+
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                    Farm Partners
                    </p>
                </div>

                </div>

                {/* Button */}
                <div className="mt-6">

                <button className="group rounded-full bg-[#123524] px-8 py-4 text-white transition-all duration-500 hover:-translate-y-1 hover:bg-[#0d281c] hover:shadow-[0_20px_50px_rgba(18,53,36,0.2)]">

                    Our Commitment

                    <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                    </span>

                </button>

                </div>

            </div>

            </div>

        </div>
    </section>

    <section className="relative overflow-hidden bg-white py-32">

    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[radial-gradient(circle,#123524_1px,transparent_1px)] bg-[size:28px_28px]" />
    </div>

    <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-20 text-center">

        <span className="uppercase tracking-[5px] text-[#d8b15a]">
            Why Choose BharatXAgro
        </span>

        <h2 className="mt-4 font-serif text-5xl text-[#123524] md:text-6xl">
            The BharatXAgro
            <br />
            Advantage
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-500">
            {`Combining trusted sourcing, export expertise and uncompromising
            quality standards to deliver India's finest agricultural products
            worldwide.`}
        </p>

        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {[
            {
            icon: Sprout,
            number: "01",
            title: "Direct Farm Sourcing",
            desc: "Strong relationships with farming communities ensure consistent quality and complete traceability.",
            },

            {
            icon: Globe2,
            number: "02",
            title: "Global Export Expertise",
            desc: "Serving international buyers with streamlined logistics, compliance and documentation support.",
            },

            {
            icon: Leaf,
            number: "03",
            title: "Sustainable Practices",
            desc: "Ethical sourcing and responsible agricultural methods that benefit farmers and ecosystems.",
            },

            {
            icon: ShipWheel,
            number: "04",
            title: "Reliable Fulfillment",
            desc: "Efficient processing, packaging and shipping to ensure on-time deliveries worldwide.",
            },

        ].map((item) => {

            const Icon = item.icon;

            return (

            <div
                key={item.title}
                className="group relative overflow-hidden rounded-[32px] border border-[#123524]/10 bg-[#f7f4ee] p-8 transition-all duration-700 hover:-translate-y-3 hover:border-[#d8b15a]/30 hover:bg-white hover:shadow-[0_25px_70px_rgba(18,53,36,0.12)]"
            >

                {/* Glow */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#d8b15a]/10 blur-3xl opacity-0 transition-all duration-700 group-hover:opacity-100" />

                {/* Number */}
                <div className="absolute right-6 top-6 text-5xl font-bold text-[#123524]/25 transition-all duration-500 group-hover:text-[#d8b15a]/40">
                {item.number}
                </div>

                {/* Icon */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#123524] text-white transition-all duration-500 group-hover:scale-110 group-hover:bg-[#d8b15a] group-hover:text-[#123524]">

                <Icon size={30} />

                </div>

                {/* Content */}
                <div className="relative z-10 mt-8">

                <h3 className="text-2xl font-semibold text-[#123524]">
                    {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-gray-500">
                    {item.desc}
                </p>

                </div>

                {/* Footer */}
                <div className="relative z-10 mt-8 flex items-center gap-2 text-sm font-medium text-[#123524]">

                Learn More

                <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />

                </div>

            </div>

            );
        })}

        </div>

    </div>

    </section>

    <section className="bg-[#123524] py-32 overflow-hidden text-white">
        <div className="mx-auto max-w-7xl px-6">

            <div className="mb-20 text-center">

            <span className="text-xs uppercase tracking-[4px] text-[#d8b15a]">
                Our Values
            </span>

            <h2 className="mt-4 font-serif text-5xl md:text-6xl">
                Principles That Guide Us
            </h2>

            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {[
                {
                title: "Integrity",
                desc: "Building trust through honest business practices and transparent communication.",
                },
                {
                title: "Quality",
                desc: "Delivering consistent products that exceed international expectations.",
                },
                {
                title: "Sustainability",
                desc: "Supporting responsible farming and environmental stewardship.",
                },
                {
                title: "Innovation",
                desc: "Continuously improving processes and product excellence.",
                },
                {
                title: "Partnership",
                desc: "Creating long-term value for farmers, buyers and stakeholders.",
                },
                {
                title: "Transparency",
                desc: "Maintaining complete traceability across our supply chain.",
                },
            ].map((item) => (
                <div
                key={item.title}
                className="group rounded-[35px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#d8b15a]/40"
                >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#d8b15a]/10 text-[#d8b15a] text-2xl">
                    ✦
                </div>

                <h3 className="text-3xl font-medium">
                    {item.title}
                </h3>

                <p className="mt-4 text-white/70 leading-relaxed">
                    {item.desc}
                </p>

                </div>
            ))}

            </div>

        </div>
    </section>

    <section className="bg-[#f7f4ee] py-32">
    <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-20 text-center">

        <span className="uppercase tracking-[4px] text-[#d8b15a]">
            Export Ecosystem
        </span>

        <h2 className="mt-4 font-serif text-5xl text-[#123524] md:text-6xl">
            Built For Reliable
            <br />
            Global Supply Chains
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-500">
            From sourcing and processing to logistics and documentation,
            BharatXAgro ensures a seamless export experience for buyers
            worldwide.
        </p>

        </div>

        {/* Main Card */}
        <div className="overflow-hidden rounded-[40px] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)]">

        {/* Image */}
        <div className="relative">

            <img
            src="/global.png"
            alt="Supply Chain Network"
            className="h-[500px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#123524]/70 via-transparent to-transparent" />

            <div className="absolute bottom-10 left-10 max-w-xl text-white">

            <span className="rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[3px] backdrop-blur-md">
                End-To-End Operations
            </span>

            <h3 className="mt-5 font-serif text-4xl">
                Seamless Export Infrastructure
            </h3>

            <p className="mt-4 text-white/80">
                Integrated sourcing, quality assurance, documentation
                and logistics designed for global buyers.
            </p>

            </div>

        </div>

        {/* Stats */}
        <div className="grid gap-8 p-10 md:grid-cols-4">

            {[
            ["48 Hrs", "Documentation Support"],
            ["99.8%", "Order Accuracy"],
            ["24/7", "Client Assistance"],
            ["100%", "Traceability"],
            ].map(([value, label]) => (
            <div
                key={label}
                className="group text-center"
            >

                <h3 className="text-5xl font-bold text-[#123524] transition-all duration-500 group-hover:text-[#d8b15a]">
                {value}
                </h3>

                <p className="mt-3 text-gray-500">
                {label}
                </p>

            </div>
            ))}

        </div>

        </div>

    </div>
    </section>

    <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6">

            <div className="text-center mb-20">

            <span className="uppercase tracking-[4px] text-[#d8b15a]">
                Certifications
            </span>

            <h2 className="mt-4 font-serif text-5xl text-[#123524]">
                Quality Without Compromise
            </h2>

            </div>

            <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-6">

            {certifications.map(({ name, icon: Icon }) => (
                <div
                key={name}
                className="group rounded-[30px] bg-[#f7f4ee] p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(18,53,36,0.08)]"
                >

                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#123524]/10 transition-all duration-500 group-hover:bg-[#123524]">

                    <Icon
                    size={34}
                    className="text-[#123524] transition-all duration-500 group-hover:text-[#d8b15a]"
                    />

                </div>

                <h3 className="font-medium text-[#123524] transition-colors duration-500 group-hover:text-[#0d281c]">
                    {name}
                </h3>

                </div>
            ))}

            </div>

        </div>
    </section>

    <section className="bg-[#f7f4ee] py-32 overflow-hidden">
    <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-24 flex flex-col justify-between gap-10 md:flex-row md:items-end">

        <div className="max-w-2xl">

            <h2 className="font-serif text-5xl leading-tight text-[#123524] md:text-7xl">
            From Bihar to the
            <br />
            World.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[#123524]/70">
            Our logistical network spans continents, ensuring
            that the freshness of the Indian harvest arrives
            on your doorstep within days, not weeks.
            </p>

        </div>

        <a
            href="/Aboutmap.png"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-[#123524]/40 px-8 py-4 text-sm font-medium text-[#123524] transition-all duration-300 hover:bg-[#123524] hover:text-white"
        >
            View Global Map
        </a>

        </div>

        {/* Map Container */}
        <div className="relative overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

        {/* Background Map */}
        <img
            src="/Aboutmap.png"
            alt="Global Presence"
            className="h-[420px] w-full object-cover grayscale opacity-70"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Stats Cards */}
        <div className="absolute inset-0 flex items-center justify-center">

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

            {[
                ["15+", "Countries"],
                ["250+", "Retail Partners"],
                ["3k+", "Farmers"],
                ["24/7", "Support"],
            ].map(([value, label]) => (
                <div
                key={label}
                className="min-w-[130px] rounded-2xl border border-white/40 bg-white/40 p-8 text-center backdrop-blur-xl shadow-lg"
                >

                <h3 className="text-3xl font-serif text-[#123524]">
                    {value}
                </h3>

                <p className="mt-2 text-sm text-[#123524]/80">
                    {label}
                </p>

                </div>
            ))}

            </div>

        </div>

        </div>

    </div>
    </section>    

    <section className="relative overflow-hidden bg-[#f7f4ee] py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">

            <span className="uppercase tracking-[4px] text-[#d8b15a]">
            Partner With Us
            </span>

            <h2 className="mt-6 font-serif text-5xl text-[#123524] md:text-7xl">
            {`Let's Grow Together`}
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-600">
            {`Whether you're an importer, distributor, retailer
            or manufacturer, BharatXAgro is ready to deliver
            premium agricultural products tailored to your needs.`}
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-6">

            <button className="rounded-full bg-[#123524] px-10 py-4 text-white transition-all duration-300 hover:-translate-y-1">
                Request Catalog
            </button>

            <button className="rounded-full border border-[#123524] px-10 py-4 text-[#123524] transition-all duration-300 hover:bg-[#123524] hover:text-white">
                Contact Us
            </button>

            </div>

        </div>
    </section>
    </main>
  );
}