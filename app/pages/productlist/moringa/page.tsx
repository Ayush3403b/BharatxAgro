"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Leaf } from "lucide-react";
import { useEffect } from "react";
import {
  Dumbbell,
  Eye,
  Heart,
  ShieldCheck,
  BadgeCheck,
  FlaskConical,
  FileCheck,
  Award,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import ProductCTA from "@/components/pcta";

export default function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const packaging = [
    {
      title: "Retail-Ready Packs",
      description:
        "100g, 250g, 500g Stand-up resealable pouches with private labeling options.",
      image: "/mopack1.png",
    },
    {
      title: "Industrial Bulk",
      description:
        "20kg & 25kg HDPE lined kraft paper bags with export-grade protection.",
      image: "/mopack2.png",
    },
  ];

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const steps = [
    {
      number: "01",
      title: "Sun-Drenched Harvest",
      description:
        "Hand-picked leaves harvested at peak potency during the cool dawn hours.",
    },
    {
      number: "02",
      title: "Triple-Stage Wash",
      description:
        "Purified water wash and ozone treatment to ensure zero contaminants.",
    },
    {
      number: "03",
      title: "Cold Dehydration",
      description:
        "Shadow-dried at controlled low temperatures to preserve enzymes and color.",
    },
    {
      number: "04",
      title: "Ultra-Fine Milling",
      description:
        "200-mesh triple milling for a silky texture that dissolves instantly.",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((window.innerWidth - e.clientX) / 40);
      mouseY.set((window.innerHeight - e.clientY) / 40);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const leaf1X = useTransform(mouseX, (v) => v * 0.5);
  const leaf1Y = useTransform(mouseY, (v) => v * 0.5);

  const leaf2X = useTransform(mouseX, (v) => -v * 0.7);
  const leaf2Y = useTransform(mouseY, (v) => -v * 0.7);

  return (
    <main>
    <section className="relative min-h-screen overflow-hidden bg-[#fbf9f4]">

      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#123524]/5 to-transparent" />

      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block rounded-full bg-[#dff5e7] px-4 py-1 text-xs font-medium uppercase tracking-[3px] text-[#22724a]"
          >
            Premium Export Grade
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 font-serif text-5xl leading-tight text-[#123524] md:text-7xl"
          >
            Organic Moringa
            <br />
            Oleifera Powder
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-gray-500"
          >
            {`The world's most nutrient-dense superfood,
            sustainably harvested from mineral-rich farms
            and processed using advanced export-grade
            technology.`}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >

            <Link href="/pages/inquiry">
              <button className="rounded-full bg-[#f1cb83] px-8 py-4 font-medium text-[#123524] shadow-xl transition-all duration-500 hover:-translate-y-1 hover:scale-105">
                Request Moringa Export Quote
              </button>
            </Link>

            <button className="rounded-full border border-[#123524] px-8 py-4 font-medium text-[#123524] transition-all duration-500 hover:bg-[#123524] hover:text-white">
              Download Specifications
            </button>

          </motion.div>

        </motion.div>

        {/* RIGHT IMAGE */}

        <div className="relative flex items-center justify-center">

          {/* Floating Leaf Top */}

          <motion.div
            style={{
              x: leaf1X,
              y: leaf1Y,
            }}
            className="absolute -right-5 top-0 z-20"
          >
            <Leaf
              size={70}
              className="rotate-12 text-[#123524]"
            />
          </motion.div>

          {/* Floating Leaf Bottom */}

          <motion.div
            style={{
              x: leaf2X,
              y: leaf2Y,
            }}
            className="absolute -left-6 bottom-10 z-20"
          >
            <Leaf
              size={50}
              className="-rotate-45 text-[#2f8d5c]"
            />
          </motion.div>

          {/* Outer Circle */}

          <motion.div
            animate={{
              scale: [1, 1.04, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            className="flex aspect-square w-full max-w-[520px] items-center justify-center rounded-full bg-[#123524]/8"
          >

            {/* Inner Circle */}

            <motion.div
              initial={{
                scale: 0.85,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
              }}
              className="h-[85%] w-[85%] overflow-hidden rounded-full shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
            >
              <Image
                src="/moringa.png"
                alt="Moringa Powder"
                width={700}
                height={700}
                className="h-full w-full object-cover"
                priority
              />
            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
        <section className="bg-[#f5f3ee] py-32">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >

          <h2 className="font-serif text-5xl text-[#123524]">
            The Nutritional Powerhouse
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Beyond organic. Our Moringa powder maintains
            the highest bioavailability through a specialized
            cold-milling process.
          </p>

        </motion.div>

        {/* Bento Grid */}

        <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-4 md:grid-rows-2 md:h-[600px]">

          {/* Large Card */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
            }}
            className="group rounded-[32px] border border-white/40 bg-white/50 p-10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,43,26,0.06)] md:col-span-2 md:row-span-2 flex flex-col justify-between"
          >

            <div>

              <Dumbbell
                size={42}
                className="text-[#22724a]"
              />

              <h3 className="mt-8 font-serif text-3xl text-[#123524]">
                High Protein Content
              </h3>

              <p className="mt-4 text-gray-500">
                Contains all 9 essential amino acids,
                making it a complete plant-based protein
                source for global nutraceutical brands.
              </p>

            </div>

            <div className="border-t border-[#123524]/10 pt-6">

              <span className="text-2xl font-semibold text-[#123524]">
                25% Protein By Weight
              </span>

            </div>

          </motion.div>

          {/* Vitamin A */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.1,
              delay: 0.05,
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="rounded-[32px] border border-white/40 bg-white/50 p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,43,26,0.06)]"
          >

            <Eye
              size={34}
              className="text-[#22724a]"
            />

            <h4 className="mt-5 font-serif text-2xl text-[#123524]">
              Vitamin A
            </h4>

            <p className="mt-3 text-gray-500">
              10x more than Carrots.
            </p>

          </motion.div>

          {/* Iron */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.1,
              delay: 0.05,
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="rounded-[32px] border border-white/40 bg-white/50 p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,43,26,0.06)]"
          >

            <Heart
              size={34}
              className="text-[#22724a]"
            />

            <h4 className="mt-5 font-serif text-2xl text-[#123524]">
              Iron Content
            </h4>

            <p className="mt-3 text-gray-500">
              25x more than Spinach.
            </p>

          </motion.div>

          {/* Antioxidant */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.1,
              delay: 0.05,
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="rounded-[32px] border border-white/40 bg-white/50 p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,43,26,0.06)] md:col-span-2"
          >

            <div className="flex items-center gap-8">

              <div className="flex-1">

                <h4 className="font-serif text-2xl text-[#123524]">
                  Antioxidant Rich
                </h4>

                <p className="mt-3 text-gray-500">
                  Packed with Quercetin and Chlorogenic
                  acid to combat oxidative stress.
                </p>

              </div>

              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#123524]">

                <ShieldCheck
                  size={38}
                  className="text-white"
                />

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
    <section className="bg-[#fbf9f4] py-32">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-24 text-center font-serif text-5xl text-[#123524]"
        >
          From Leaf to Powder: Our Journey
        </motion.h2>

        <div className="relative">

          {/* Connector Line */}

          <div className="absolute left-0 top-10 hidden h-[2px] w-full bg-[#bdeed0] md:block" />

          {/* Steps */}

          <div className="relative grid gap-12 md:grid-cols-4">

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="group flex flex-col items-center text-center"
              >

                {/* Circle */}

                <motion.div
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#123524] bg-white shadow-xl"
                >
                  <span className="font-serif text-xl text-[#123524]">
                    {step.number}
                  </span>
                </motion.div>

                {/* Title */}

                <h3 className="mt-6 font-serif text-2xl text-[#123524]">
                  {step.title}
                </h3>

                {/* Description */}

                <p className="mt-4 max-w-[240px] text-sm leading-relaxed text-gray-500">
                  {step.description}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
    <section className="bg-[#002b1a] py-32 text-white">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h2 className="font-serif text-5xl leading-tight">
              Uncompromising
              <br />
              Export Standards
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-white/80">
              Every batch undergoes rigorous testing in
              ISO-certified laboratories. We provide full
              traceability from the specific farm lot to
              your warehouse.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">

              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6"
              >
                <BadgeCheck
                  size={30}
                  className="mb-4 text-[#edc073]"
                />

                <p className="font-medium">
                  Moisture Content
                </p>

                <p className="mt-2 font-serif text-3xl">
                  &lt; 7.0%
                </p>

              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6"
              >
                <FlaskConical
                  size={30}
                  className="mb-4 text-[#edc073]"
                />

                <p className="font-medium">
                  Total Plate Count
                </p>

                <p className="mt-2 font-serif text-3xl">
                  &lt; 10,000
                </p>

              </motion.div>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[36px] border border-white/20 bg-white/10 p-10 backdrop-blur-xl"
          >

            <h3 className="mb-10 font-serif text-2xl text-[#edc073]">
              Global Certifications
            </h3>

            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">

              {[
                {
                  icon: ShieldCheck,
                  title: "USDA Organic",
                },
                {
                  icon: Award,
                  title: "EU Organic",
                },
                {
                  icon: FileCheck,
                  title: "FSSC 22000",
                },
                {
                  icon: BadgeCheck,
                  title: "HALAL & KOSHER",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                      <Icon size={22} />
                    </div>

                    <span>
                      {item.title}
                    </span>

                  </motion.div>
                );
              })}

            </div>

            <button className="mt-12 w-full rounded-full border border-white/30 py-4 transition-all duration-500 hover:bg-white hover:text-[#002b1a]">
              Request Lab COA
            </button>

          </motion.div>

        </div>

      </div>

    </section>
    <section className="overflow-hidden bg-white py-32">

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mb-16 flex items-end justify-between">

          <div className="max-w-xl">

            <h2 className="font-serif text-5xl text-[#123524]">
              Export-Ready Packaging
            </h2>

            <p className="mt-4 text-gray-500">
              Scalable solutions for retail-ready distribution
              or industrial-scale bulk fulfillment.
            </p>

          </div>

          {/* <div className="hidden gap-4 md:flex">

            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[#123524]/20 transition-all duration-300 hover:bg-[#123524] hover:text-white">
              <ArrowLeft size={18} />
            </button>

            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[#123524]/20 transition-all duration-300 hover:bg-[#123524] hover:text-white">
              <ArrowRight size={18} />
            </button>

          </div> */}

        </div>

        {/* Grid */}

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Packaging Cards */}

          {packaging.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >

              <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-[32px]">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay 

                <div className="absolute inset-0 flex items-center justify-center bg-[#123524]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                  <span className="rounded-full bg-white px-6 py-2 font-medium text-[#123524]">
                    View Specs
                  </span>

                </div>*/}

              </div>

              <h3 className="font-serif text-2xl text-[#123524]">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-500">
                {item.description}
              </p>

            </motion.div>
          ))}

          {/* Logistics Card */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[32px] bg-[#123524]/5 p-10"
          >

            <h3 className="font-serif text-2xl text-[#123524]">
              Logistics & Supply
            </h3>

            <ul className="mt-8 space-y-5">

              {[
                "Capacity: 50 MT per month",
                "Lead Time: 15–21 days from PO",
                "Shipping: 20ft & 40ft FCL or LCL",
                "Ports: Mumbai (JNPT), Chennai",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-1 text-[#22724a]"
                  />

                  <span className="text-gray-700">
                    {item}
                  </span>
                </li>
              ))}

            </ul>

            {/* <button className="group mt-10 flex items-center gap-2 font-semibold text-[#22724a]">

              Full Logistics Guide

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />

            </button> */}

          </motion.div>

        </div>

      </div>

    </section>
    <ProductCTA
      title="Source Premium Moringa Powder"
      description="Export-grade moringa powder manufactured using advanced dehydration and micronized milling technology for global nutraceutical and food industries."
    />

    </main>

  );
}