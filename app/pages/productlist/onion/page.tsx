"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import {
  Timer,
  Gauge,
  Factory,
  UtensilsCrossed,
  Soup,
  Sandwich,
} from "lucide-react";
import Link from "next/link";

const applications = [
  {
    icon: UtensilsCrossed,
    title: "Seasonings & Rubs",
    description:
      "The base for premium BBQ rubs and international spice blends.",
  },
  {
    icon: Soup,
    title: "Soups & Sauces",
    description:
      "Instant dispersion for smooth textures in dehydrated soups.",
  },
  {
    icon: Sandwich,
    title: "Processed Foods",
    description:
      "Flavor fortification for meat products and snack coatings.",
  },
];

const benefits = [
  {
    icon: Timer,
    title: "Shelf Stability",
    description:
      "Low moisture content (under 4%) ensures a 24-month shelf life without loss of potency or aromatic depth.",
  },
  {
    icon: Gauge,
    title: "Flavor Intensity",
    description:
      "Concentrated flavor profile—1kg of powder replaces 10kg of fresh onions, reducing storage volume by 90%.",
  },
  {
    icon: Factory,
    title: "Uniform Granularity",
    description:
      "Precision milled for instant solubility and even distribution in dry spice mixes and liquid emulsions.",
  },
];


export default function OnionHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  const leftX = useTransform(mouseX, [0, 1920], [-20, 20]);
  const leftY = useTransform(mouseY, [0, 1080], [-20, 20]);

  const rightX = useTransform(mouseX, [0, 1920], [20, -20]);
  const rightY = useTransform(mouseY, [0, 1080], [20, -20]);

  return (
    <>
      {/* Floating Decorations */}
      <div className="pointer-events-none inset-0 z-0 overflow-hidden">

        <motion.div
          style={{
            x: leftX,
            y: leftY,
          }}
          className="absolute -left-10 top-[15%] h-48 w-48 opacity-20"
        >
          <Image
            src="/Oring1.png"
            alt=""
            width={300}
            height={300}
            className="h-full w-full rotate-12 object-contain"
          />
        </motion.div>

        <motion.div
          style={{
            x: rightX,
            y: rightY,
          }}
          className="absolute -right-12 bottom-[20%] h-64 w-64 opacity-15"
        >
          <Image
            src="/Oring2.png"
            alt=""
            width={400}
            height={400}
            className="h-full w-full -rotate-45 object-contain"
          />
        </motion.div>

      </div>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid min-h-[820px] max-w-7xl items-center gap-12 px-6 py-32 lg:grid-cols-2">

        {/* Left */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
          }}
        >

          <div className="mb-6 inline-block rounded-full bg-[#a4f4c2] px-4 py-1.5 text-xs font-semibold tracking-[2px] text-[#22724a]">
            PREMIUM EXPORT GRADE
          </div>

          <h1 className="mb-6 font-serif text-6xl leading-tight text-[#002b1a] lg:text-7xl">

            Pure Essence of
            <br />

            Dehydrated{" "}

            <span className="italic text-[#196c44]">
              Onion Powder
            </span>

          </h1>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-[#414943]">

            High-potency industrial seasoning crafted through
            precision dehydration. Retaining 100% aromatic
            profile with superior shelf stability for global
            food manufacturing.

          </p>

          <div className="flex flex-wrap gap-4">

            <button className="rounded-full bg-[#002b1a] px-10 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105">

              Download Technical Specs

            </button>

            <Link href="/pages/inquiry" >
              <button className="rounded-full border border-[#717973] px-10 py-4 font-semibold text-[#002b1a] transition-colors duration-300 hover:bg-[#e4e2dd]">

                Bulk Pricing

              </button>
            </Link>  

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 0.2,
          }}
          className="relative"
        >

          {/* Glow */}

          <div className="absolute -bottom-10 -left-10 z-10 h-40 w-40 rounded-full bg-[#ffdeaa] opacity-30 blur-3xl" />

          {/* Glass Card */}

          <div
            className="
            relative z-20 rotate-3 rounded-[32px]
            border border-white/20
            bg-white/40
            p-4
            backdrop-blur-[20px]
            shadow-[0_30px_60px_rgba(0,0,0,0.12)]
          "
          >

            <Image
              src="/onhero.png"
              alt="Onion Powder"
              width={900}
              height={700}
              className="h-[500px] w-full rounded-[24px] object-cover"
              priority
            />

          </div>

        </motion.div>

      </section>

      <section className="bg-[#f5f3ee] py-32">

        <div className="mx-auto max-w-7xl px-6">

            {/* Heading */}

            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
            >

            <h2 className="mb-4 font-serif text-5xl text-[#002b1a]">
                Unrivaled Industrial Efficacy
            </h2>

            <p className="mx-auto max-w-2xl text-gray-500">
                Our onion powder is engineered for the rigorous
                demands of large-scale food production, ensuring
                consistency in every batch.
            </p>

            </motion.div>

            {/* Cards */}

            <div className="grid gap-8 md:grid-cols-3">

            {benefits.map((item, index) => {
                const Icon = item.icon;

                return (
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
                    whileHover={{
                    y: -8,
                    }}
                    className="
                    group
                    rounded-[32px]
                    border
                    border-white/20
                    bg-white/40
                    p-10
                    backdrop-blur-[20px]
                    transition-all
                    duration-500
                    hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]
                    "
                >

                    {/* Icon */}

                    <Icon
                    size={52}
                    className="
                        mb-6
                        text-[#196c44]
                        transition-transform
                        duration-500
                        group-hover:scale-110
                    "
                    />

                    {/* Title */}

                    <h3 className="mb-4 font-serif text-3xl text-[#002b1a]">
                    {item.title}
                    </h3>

                    {/* Description */}

                    <p className="leading-relaxed text-[#414943]">
                    {item.description}
                    </p>

                </motion.div>
                );
            })}

            </div>

        </div>

      </section>

      <section className="mx-auto max-w-7xl px-6 py-32">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center font-serif text-5xl text-[#002b1a]"
        >
          Multi-Stage Dehydration Protocol
        </motion.h2>

        {/* Bento Grid */}

        <div className="grid h-auto gap-6 md:h-[600px] md:grid-cols-4">

          {/* Card 01 */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[28px] bg-white/40 backdrop-blur-xl md:col-span-2 md:row-span-2"
          >

            <Image
              src="/products/onion/farm.jpg"
              alt="Ethical Sourcing"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#002b1a]/85 via-[#002b1a]/30 to-transparent" />

            <div className="absolute bottom-0 p-10 text-white">

              <h4 className="mb-2 font-serif text-3xl">
                01. Ethical Sourcing
              </h4>

              <p className="max-w-md text-white/80">
                Hand-selected white and red onions from
                GAP-certified farms in Maharashtra.
              </p>

            </div>

          </motion.div>

          {/* Card 02 */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[28px] bg-white/40 backdrop-blur-xl md:col-span-2"
          >

            <Image
              src="/products/onion/washing.jpg"
              alt="Triple Wash"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#002b1a]/85 via-[#002b1a]/30 to-transparent" />

            <div className="absolute bottom-0 p-8 text-white">

              <h4 className="mb-2 font-serif text-2xl">
                02. Triple-Wash Cycle
              </h4>

              <p className="text-white/80">
                Ozone-treated water purification removes
                all surface impurities.
              </p>

            </div>

          </motion.div>

          {/* Card 03 */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="rounded-[28px] bg-[#002b1a] p-8"
          >

            <div className="flex h-full flex-col items-center justify-center text-center">

              <h4 className="mb-4 font-serif text-2xl text-[#edc073]">
                03. Dehydration
              </h4>

              <p className="text-sm leading-relaxed text-white/70">
                Continuous belt drying at controlled
                temperatures to preserve sulfur compounds.
              </p>

            </div>

          </motion.div>

          {/* Card 04 */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[28px] bg-white/40 backdrop-blur-xl"
          >

            <Image
              src="/products/onion/laboratory.jpg"
              alt="Quality Labs"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#002b1a]/70 to-transparent" />

            <div className="absolute bottom-0 p-6">

              <h4 className="font-semibold text-white">
                04. Quality Labs
              </h4>

            </div>

          </motion.div>

        </div>

      </section>

      <section className="bg-[#002b1a] py-32 text-white">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-20 lg:grid-cols-2">

            {/* Left Content */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >

              <h2 className="mb-10 font-serif text-5xl">
                Integrated Food Solutions
              </h2>

              <div className="space-y-8">

                {applications.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: index * 0.15,
                        duration: 0.6,
                      }}
                      viewport={{ once: true }}
                      className="flex gap-4"
                    >

                      <Icon
                        size={28}
                        className="mt-1 text-[#edc073]"
                      />

                      <div>

                        <h4 className="font-serif text-2xl">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-white/70">
                          {item.description}
                        </p>

                      </div>

                    </motion.div>
                  );
                })}

              </div>

            </motion.div>

            {/* Right Mosaic Grid */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >

              {/* Column 1 */}

              <div className="space-y-4">

                <div className="group h-48 overflow-hidden rounded-[24px]">
                  <Image
                    src="/onuse1.png"
                    alt="Seasonings"
                    width={600}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="group h-64 overflow-hidden rounded-[24px]">
                  <Image
                    src="/onuse2.png"
                    alt="Soups"
                    width={600}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

              </div>

              {/* Column 2 */}

              <div className="space-y-4 pt-12">

                <div className="group h-64 overflow-hidden rounded-[24px]">
                  <Image
                    src="/onuse3.png"
                    alt="Spice Blends"
                    width={600}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="group h-48 overflow-hidden rounded-[24px]">
                  <Image
                    src="/onuse4.png"
                    alt="Packaging"
                    width={600}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      <section className="mx-auto max-w-7xl px-6 py-32">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="
            rounded-[36px]
            border
            border-white/20
            bg-white/40
            p-12
            backdrop-blur-[20px]
            md:p-20
          "
        >

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Left Content */}

            <div>

              <h2 className="mb-6 font-serif text-5xl leading-tight text-[#002b1a]">
                Moisture-Proof
                <br />
                Industrial Packaging
              </h2>

              <p className="mb-10 text-lg leading-relaxed text-[#414943]">
                Our exports are secured in triple-layered,
                heat-sealed HDPE bags with aluminum foil
                liners to guarantee zero moisture ingress
                during maritime transit.
              </p>

              {/* Stats */}

              <div className="grid grid-cols-2 gap-8">

                <div>

                  <p className="mb-2 text-sm font-semibold uppercase tracking-[2px] text-[#196c44]">
                    Standard Unit
                  </p>

                  <p className="font-serif text-2xl text-[#002b1a]">
                    25kg Poly Bags
                  </p>

                </div>

                <div>

                  <p className="mb-2 text-sm font-semibold uppercase tracking-[2px] text-[#196c44]">
                    Bulk Unit
                  </p>

                  <p className="font-serif text-2xl text-[#002b1a]">
                    500kg Jumbo Bags
                  </p>

                </div>

              </div>

            </div>

            {/* Right Image */}

            <div>

              <div className="relative">

                {/* Glow */}

                <div className="absolute inset-0 rounded-full bg-[#002b1a]/5 blur-3xl" />

                {/* Image */}

                <motion.div
                  whileHover={{
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="relative z-10 overflow-hidden rounded-[28px] shadow-2xl"
                >

                  <Image
                    src="/onpack.png"
                    alt="Industrial Packaging"
                    width={900}
                    height={700}
                    className="
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-105
                    "
                  />

                </motion.div>

              </div>

            </div>

          </div>

        </motion.div>

      </section>

      <section className="mx-auto max-w-7xl px-6 py-32">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >

          {/* Heading */}

          <h2 className="mb-8 font-serif text-5xl leading-tight text-[#002b1a] md:text-6xl">
            Ready for
            <br />
            Global Distribution
          </h2>

          {/* Description */}

          <p className="mb-12 text-lg leading-relaxed text-[#414943]">
            {`Partner with India's leading agricultural exporter
            for consistent, high-purity onion powder solutions
            tailored to food manufacturers, distributors and
            global ingredient suppliers.`}
          </p>

          {/* Buttons */}

          <div className="flex flex-col justify-center gap-6 md:flex-row">

            {/* Bulk Quote */}

            <a
              href="/inquiry"
              className="
                rounded-full
                bg-[#edc073]
                px-12
                py-5
                font-semibold
                text-[#271900]
                shadow-lg
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-xl
              "
            >
              Request Bulk Quote
            </a>

            {/* Partner */}

            <a
              href="/inquiry"
              className="
                rounded-full
                bg-[#002b1a]
                px-12
                py-5
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-xl
              "
            >
              Become a Partner
            </a>

          </div>

        </motion.div>

      </section>     
    </>
  );
}