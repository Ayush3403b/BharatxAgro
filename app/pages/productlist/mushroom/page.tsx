"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaDroplet } from "react-icons/fa6";
import { MdAir, MdSunny } from "react-icons/md";
import { FiPackage } from "react-icons/fi";
import { MdAcUnit } from "react-icons/md";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import ProductCTA from "@/components/pcta";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function MushroomHero() {
  return (
    <>
    <section className="relative min-h-[920px] overflow-hidden bg-[#fbf9f4]">

      {/* Background Image */}

      <div className="absolute inset-0 z-0">
        <Image
          src="/mushero.png"
          alt="Premium Mushrooms"
          fill
          priority
          className="object-cover opacity-90"
        />
      </div>

      {/* Soft Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#fbf9f4]/15 via-[#fbf9f4]/35 to-transparent z-[1]" />

      {/* Decorative Blur 

      <div className="absolute top-40 right-20 h-72 w-72 rounded-full bg-[#196c44]/10 blur-[120px]" />
      <div className="absolute bottom-20 left-20 h-96 w-96 rounded-full bg-[#edc073]/10 blur-[140px]" />*/}

      {/* Content */}

      <div className="relative z-10 mx-auto flex min-h-[920px] max-w-7xl items-center px-6 lg:px-20">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >

          {/* Badge */}

          <motion.span
            variants={fadeUp}
            className="
              mb-6
              inline-flex
              items-center
              rounded-full
              bg-[#a4f4c2]
              px-4
              py-1.5
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#22724a]
            "
          >
            Global Export Standard
          </motion.span>

          {/* Heading */}

          <motion.h1
            variants={fadeUp}
            className="
              mb-8
              max-w-4xl
              font-serif
              text-5xl
              leading-tight
              text-[#002b1a]
              md:text-7xl
            "
          >
            Grown for Perfection —
            <br />
            <span className="italic text-[#196c44]">
              Premium Mushrooms
            </span>
          </motion.h1>

          {/* Description */}

          <motion.p
            variants={fadeUp}
            className="
              mb-12
              max-w-2xl
              text-lg
              leading-relaxed
              text-[#414943]
            "
          >
            {`Bridging the gap between the world's finest organic fungi
            and global culinary excellence. Discover our curated
            selection of fresh and dried mushrooms, cultivated with
            scientific precision and ancestral care.`}
          </motion.p>

          {/* Buttons */}

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-5"
          >

            <a
              href="/inquiry"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#002b1a]
                px-10
                py-4
                text-sm
                font-semibold
                tracking-wide
                text-white
                shadow-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:scale-105
                hover:shadow-2xl
              "
            >
                Request Quote

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

            <a
              href="/brochure.pdf"
              className="
                rounded-full
                border
                border-[#002b1a]/10
                bg-white/40
                px-10
                py-4
                text-sm
                font-semibold
                text-[#002b1a]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:bg-white/70
                hover:shadow-xl
              "
            >
              Download Brochure
            </a>

          </motion.div>
        </motion.div>
      </div>
    </section>

<section className="bg-[#f5f3ee] py-12">
  <div className="mx-auto max-w-7xl px-6 lg:px-20">

    {/* Heading */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16 text-center"
    >
      <h2 className="mb-4 font-serif text-5xl text-[#002b1a]">
        Mastering the Ecosystem
      </h2>

      <p className="mx-auto max-w-xl text-[#414943]">
        Our mushrooms are cultivated in bio-secure,
        climate-controlled environments that mimic
        their natural forest habitats for maximum
        nutrient density.
      </p>
    </motion.div>

    {/* Bento Grid */}

    <div className="grid grid-cols-1 gap-8 md:grid-cols-12">

      {/* Climate Precision */}

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          group
          relative
          min-h-[420px]
          overflow-hidden
          rounded-[28px]
          md:col-span-8
        "
      >
        <img
          src="/mushbento.png"
          alt="Climate Precision"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#002b1a]/90 via-[#002b1a]/40 to-transparent" />

        <div className="absolute bottom-0 p-10 text-white">
          <h3 className="mb-2 font-serif text-3xl">
            Climate Precision
          </h3>

          <p className="max-w-lg text-white/80">
            Precision sensors monitor humidity,
            CO₂ and temperature every millisecond.
          </p>
        </div>
      </motion.div>

      {/* Zero Impact */}

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="
          rounded-[28px]
          bg-[#002b1a]
          p-10
          text-white
          md:col-span-4
          flex
          flex-col
          justify-center
        "
      >
        <div className="mb-6">
          <span className="material-symbols-outlined text-5xl text-[#edc073]">
            thermostat
          </span>
        </div>

        <h3 className="mb-4 font-serif text-3xl">
          Zero-Impact Lab
        </h3>

        <p className="text-white/70">
          Our facility operates on a closed-loop
          water system and solar energy, ensuring
          that luxury never costs the earth.
        </p>
      </motion.div>

      {/* Substrate Science */}

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="
          rounded-[28px]
          border
          border-[#196c44]/10
          bg-white/40
          backdrop-blur-xl
          p-8
          md:col-span-4
        "
      >
        <h4 className="mb-3 font-serif text-2xl text-[#196c44]">
          Substrate Science
        </h4>

        <p className="text-[#414943]">
          Using 100% organic, steam-sterilized
          agricultural waste to provide the richest
          nutrient base for every spore.
        </p>
      </motion.div>

      {/* Air Purity */}

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="
          overflow-hidden
          rounded-[28px]
          border
          border-[#196c44]/10
          bg-white/40
          backdrop-blur-xl
          md:col-span-8
          flex
          flex-col
          md:flex-row
        "
      >
        <div className="flex w-full flex-col justify-center p-10 md:w-1/2">
          <h4 className="mb-3 font-serif text-2xl text-[#002b1a]">
            Air Purity Grade
          </h4>

          <p className="text-[#414943]">
            HEPA-filtered environments ensure zero
            contaminants during the critical
            colonization stage.
          </p>
        </div>

        <div className="h-[280px] w-full md:h-auto md:w-1/2">
          <img
            src="/mushbento1.png"
            alt="Air Purity"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>

    </div>

  </div>
</section>

<section className="py-12">
  <div className="mx-auto flex max-w-7xl flex-col items-center gap-20 px-6 md:flex-row">

    {/* Image Side */}

    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full md:w-1/2"
    >
      <div className="relative">

        <img
          src="/mushpick.png"
          alt="Hand Picked Mushrooms"
          className="relative z-10 rounded-[28px] shadow-2xl"
        />

        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#edc073] opacity-30 blur-3xl" />

      </div>
    </motion.div>

    {/* Content Side */}

    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full md:w-1/2"
    >
      <h2 className="mb-8 font-serif text-5xl text-[#002b1a]">
        Hand-Picked Excellence
      </h2>

      <div className="space-y-8">

        {/* Item 1 */}

        <div className="flex gap-6">

          <div
            className="
              flex h-16 w-16 flex-shrink-0 items-center justify-center
              rounded-full bg-[#a4f4c2] text-[#196c44]
            "
          >
            <span className="material-symbols-outlined">
              verified
            </span>
          </div>

          <div>
            <h4 className="mb-2 font-serif text-2xl text-[#1b1c19]">
              Triple-Point Inspection
            </h4>

            <p className="text-[#414943]">
              Every mushroom undergoes visual,
              textural, and weight checks by our
              certified mycologists before leaving
              the farm.
            </p>
          </div>

        </div>

        {/* Item 2 */}

        <div className="flex gap-6">

          <div
            className="
              flex h-16 w-16 flex-shrink-0 items-center justify-center
              rounded-full bg-[#a4f4c2] text-[#196c44]
            "
          >
            <span className="material-symbols-outlined">
              eco
            </span>
          </div>

          <div>
            <h4 className="mb-2 font-serif text-2xl text-[#1b1c19]">
              Sustainable Harvesting
            </h4>

            <p className="text-[#414943]">
              We time our harvests to match natural
              diurnal cycles, ensuring peak flavor
              profile and maximum shelf stability.
            </p>
          </div>

        </div>

      </div>
    </motion.div>

  </div>
</section>

<section className="relative overflow-hidden bg-[#002b1a] py-32 text-white">

  {/* Background Pattern */}

<div className="absolute inset-0 opacity-[0.08]">

  <div className="flex justify-between px-10 pt-6">

    <span className="material-symbols-outlined text-[90px] text-white">
      <FaDroplet size={90} />
    </span>

    <span className="material-symbols-outlined text-[90px] text-white">
      <MdAir size={90} />
    </span>

    <span className="material-symbols-outlined text-[90px] text-white">
      <MdSunny size={90} />
    </span>

    <span className="material-symbols-outlined text-[90px] text-white">
      <FaDroplet size={90} />
    </span>

    <span className="material-symbols-outlined text-[90px] text-white">
      <MdAir size={90} />
    </span>

    <span className="material-symbols-outlined text-[90px] text-white">
      <MdSunny size={90} />
    </span>

  </div>

</div>

  <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-20">

    <div className="grid items-center gap-20 lg:grid-cols-2">

      {/* Left Content */}

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-8 font-serif text-5xl leading-tight text-white">
          Preserving the Essence:
          <br />
          <span className="text-[#edc073]">
            Dried Mushrooms
          </span>
        </h2>

        <p className="mb-12 text-lg leading-relaxed text-white/80">
          Our proprietary low-temperature dehydration
          process locks in 98% of nutritional value
          and enhances the deep umami characteristics
          of the fungi.
        </p>

        <div className="grid grid-cols-2 gap-8">

          <div>
            <span className="font-serif text-5xl text-[#edc073]">
              100%
            </span>

            <p className="mt-2 text-xs uppercase tracking-[4px] text-white/70">
              Additive Free
            </p>
          </div>

          <div>
            <span className="font-serif text-5xl text-[#edc073]">
              24M
            </span>

            <p className="mt-2 text-xs uppercase tracking-[4px] text-white/70">
              Shelf Life
            </p>
          </div>

        </div>
      </motion.div>

      {/* Right Layout */}

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-4"
      >

        {/* Left Column */}

        <div className="space-y-4 pt-12">

          <div className="group overflow-hidden rounded-[24px]">
            <img
              src="/mushimg1.png"
              alt="Dried Shiitake"
              className="
                h-64
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-110
              "
            />
          </div>

          <div
            className="
              rounded-[24px]
              border border-white/20
              bg-white/10
              p-6
              backdrop-blur-xl
            "
          >
            <p className="mb-1 text-sm text-[#edc073]">
              Dried Premium
            </p>

            <p className="font-semibold">
              Shiitake Selection
            </p>
          </div>

        </div>

        {/* Right Column */}

        <div className="space-y-4">

          <div
            className="
              rounded-[24px]
              border border-white/20
              bg-white/10
              p-6
              backdrop-blur-xl
            "
          >
            <p className="mb-1 text-sm text-[#edc073]">
              Gourmet Range
            </p>

            <p className="font-semibold">
              Oyster Crumbles
            </p>
          </div>

          <div className="group overflow-hidden rounded-[24px]">
            <img
              src="/mushimg2.png"
              alt="Oyster Mushroom"
              className="
                h-64
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-110
              "
            />
          </div>

        </div>

      </motion.div>

    </div>

  </div>

</section>

<section className="py-12">
  <div className="mx-auto max-w-7xl px-6">

    <div className="grid gap-8 md:grid-cols-3">

      {/* Card 1 */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        className="
          rounded-[28px]
          border border-[#123524]/10
          bg-white/40
          p-12
          backdrop-blur-xl
          shadow-sm
          transition-all
        "
      >
        <span
          className="material-symbols-outlined mb-6 block text-4xl text-[#196c44]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          <FiPackage size={32} />
        </span>

        <h3 className="mb-4 font-serif text-3xl text-[#002b1a]">
          Export Packaging
        </h3>

        <p className="leading-8 text-[#414943]">
          Modified Atmosphere Packaging (MAP)
          technology preserves freshness for up
          to 21 days for sea freight and 14 days
          for air freight.
        </p>
      </motion.div>

      {/* Card 2 */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1, delay: 0.05 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        className="
          rounded-[28px]
          border border-[#123524]/10
          bg-[#a4f4c2]/20
          p-12
          backdrop-blur-xl
          shadow-sm
          transition-all
        "
      >
        <span
          className="material-symbols-outlined mb-6 block text-4xl text-[#196c44]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          <MdAcUnit size={32} />
        </span>

        <h3 className="mb-4 font-serif text-3xl text-[#002b1a]">
          Cold Chain Logistics
        </h3>

        <p className="leading-8 text-[#414943]">
          Uninterrupted 2°C–4°C supply chain
          monitoring with real-time GPS and
          temperature tracking for global
          shipments.
        </p>
      </motion.div>

      {/* Card 3 */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1, delay: 0.05 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        className="
          rounded-[28px]
          border border-[#123524]/10
          bg-white/40
          p-12
          backdrop-blur-xl
          shadow-sm
          transition-all
        "
      >
        <span
          className="material-symbols-outlined mb-6 block text-4xl text-[#196c44]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          <BsGlobeCentralSouthAsia size={32} />
        </span>

        <h3 className="mb-4 font-serif text-3xl text-[#002b1a]">
          Global Reach
        </h3>

        <p className="leading-8 text-[#414943]">
          Strategic distribution hubs in Europe,
          North America and the Middle East ensure
          delivery within 48–72 hours of harvest.
        </p>
      </motion.div>

    </div>

  </div>
</section>

<ProductCTA
  title="Source Premium Moringa Powder"
  description="Export-grade moringa powder manufactured using advanced dehydration and micronized milling technology for global nutraceutical and food industries."
/>

    </>
  );
}