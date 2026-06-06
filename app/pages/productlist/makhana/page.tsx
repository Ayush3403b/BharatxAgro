"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, Leaf, Droplets, Users, Package, Boxes, QrCode } from "lucide-react";
import ProductCTA from "@/components/pcta";

 const reveal = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
        },
    },
 }; 

 const applications = [
  {
    title: "Snack Industry",
    description:
      "Ideal for roasting with various flavor coatings like Peri-Peri, Cream & Onion, or Truffle.",
  },
  {
    title: "Confectionery",
    description:
      "Used as a crunchy core for chocolate-coated balls and premium Indian sweets.",
  },
  {
    title: "Health Supplements",
    description:
      "Powdered for high-protein meal replacements and baby food formulations.",
  },
  {
    title: "Fine Dining",
    description:
      "Incorporated into soups, curries, and salads for a unique texture and flavor absorption.",
  },
];

export default function MakhanaHero() {
  return (
    <>
    <header className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24">

      {/* Floating Elements */}

      <div className="pointer-events-none absolute inset-0">

        {/* Left Floating */}

        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-10
            top-1/4
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            border
            border-white/40
            bg-white/40
            p-4
            shadow-xl
            backdrop-blur-md
          "
        >
          <Image
            src="/float1.png"
            alt="Makhana"
            width={100}
            height={100}
            className="rounded-full object-contain"
          />
        </motion.div>

        {/* Right Floating */}

        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-1/4
            right-20
            flex
            h-32
            w-32
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-white/30
            p-6
            shadow-xl
            backdrop-blur-md
          "
        >
          <Image
            src="/float.png"
            alt="Makhana"
            width={120}
            height={120}
            className="rounded-full object-contain"
          />
        </motion.div>

      </div>

      {/* Main Content */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true }}
        >

          {/* Badge */}

          <span
            className="
              mb-6
              inline-block
              rounded-full
              bg-[#a4f4c2]
              px-4
              py-1
              text-xs
              font-semibold
              uppercase
              tracking-[3px]
              text-[#22724a]
            "
          >
            Global Export Grade
          </span>

          {/* Heading */}

          <h1
            className="
              mb-8
              font-serif
              text-5xl
              leading-tight
              text-[#002b1a]
              md:text-7xl
            "
          >
            Premium Phool Makhana
            <br />

            <span className="italic text-[#4e3500]">
              Handpicked Quality
            </span>
          </h1>

          {/* Description */}

          <p
            className="
              mx-auto
              mb-10
              max-w-2xl
              text-lg
              leading-relaxed
              text-[#414943]
            "
          >
            Sourced from the pristine wetlands of India,
            our Fox Nuts undergo a meticulous 12-step
            grading process to ensure the highest popping
            ratio and nutrient density for global markets.
          </p>

          {/* Buttons */}

          <div className="flex flex-col justify-center gap-4 md:flex-row">

            <Link
              href="/pages/inquiry"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#002b1a]
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-xl
              "
            >
              Get Export Pricing
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/brochure"
              className="
                rounded-full
                border
                border-[#002b1a]/20
                bg-white/40
                px-8
                py-4
                font-semibold
                text-[#002b1a]
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-white/70
              "
            >
              View Product Catalog
            </Link>

          </div>

        </motion.div>

      </div>

      {/* Background Glow */}

      <div
        className="
          absolute
          -bottom-20
          -left-20
          h-96
          w-96
          rounded-full
          bg-[#edc073]/20
          blur-[100px]
        "
      />

    </header>

    <section className="mx-auto max-w-7xl px-6 py-[120px]">

      {/* Heading */}

      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="mb-4 font-serif text-5xl text-[#002b1a]">
          Nutritional Excellence
        </h2>

        <div className="h-1 w-24 bg-[#edc073]" />
      </motion.div>

      {/* Bento Grid */}

      <div className="grid gap-8 md:grid-cols-12">

        {/* Protein Card */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            md:col-span-4
            rounded-[32px]
            border
            border-white/30
            bg-white/40
            p-10
            backdrop-blur-xl
            shadow-[0_10px_30px_-10px_rgba(0,43,26,0.05)]
            transition-all
            duration-500
            hover:-translate-y-2
          "
        >
          <div className="flex h-full flex-col justify-between">

            <div>

              <Dumbbell
                size={42}
                className="mb-6 text-[#196c44]"
              />

              <h3 className="mb-4 font-serif text-3xl text-[#002b1a]">
                High Protein
              </h3>

              <p className="leading-relaxed text-[#414943]">
                Each serving provides essential plant-based
                amino acids, making it a favorite for the
                global fitness and vegan markets.
              </p>

            </div>

            <div className="mt-10">

              <span className="font-serif text-5xl text-[#196c44]">
                9.7g
              </span>

              <span className="ml-2 text-sm text-gray-500">
                per 100g
              </span>

            </div>

          </div>

        </motion.div>

        {/* Image Card */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="
            group
            relative
            min-h-[400px]
            overflow-hidden
            rounded-[32px]
            md:col-span-8
          "
        >
          <Image
            src="/mahero.png"
            alt="Nutrition"
            fill
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#002b1a]/85 via-[#002b1a]/30 to-transparent" />

          <div className="absolute bottom-0 p-10 text-white">

            <h3 className="mb-2 font-serif text-3xl">
              Gluten-Free & Low Glycemic
            </h3>

            <p className="max-w-xl text-white/80">
              The ultimate guilt-free snack for modern
              health-conscious consumers worldwide.
              Low in calories, yet high in satiety.
            </p>

          </div>

        </motion.div>

        {/* Mineral Card */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="
            md:col-span-7
            rounded-[32px]
            border
            border-white/30
            bg-white/40
            p-10
            backdrop-blur-xl
            shadow-[0_10px_30px_-10px_rgba(0,43,26,0.05)]
          "
        >
          <h3 className="mb-8 font-serif text-3xl text-[#002b1a]">
            Rich Mineral Profile
          </h3>

          <div className="grid grid-cols-2 gap-8">

            <div>
              <h4 className="mb-1 font-serif text-2xl text-[#4e3500]">
                Magnesium
              </h4>
              <p className="text-sm text-gray-600">
                Supports heart health and bone density.
              </p>
            </div>

            <div>
              <h4 className="mb-1 font-serif text-2xl text-[#4e3500]">
                Potassium
              </h4>
              <p className="text-sm text-gray-600">
                Regulates blood pressure naturally.
              </p>
            </div>

            <div>
              <h4 className="mb-1 font-serif text-2xl text-[#4e3500]">
                Phosphorus
              </h4>
              <p className="text-sm text-gray-600">
                Essential for cell repair and DNA health.
              </p>
            </div>

            <div>
              <h4 className="mb-1 font-serif text-2xl text-[#4e3500]">
                Calcium
              </h4>
              <p className="text-sm text-gray-600">
                Natural source for skeletal strengthening.
              </p>
            </div>

          </div>

        </motion.div>

        {/* Organic Card */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="
            md:col-span-5
            flex
            flex-col
            items-center
            justify-center
            rounded-[32px]
            bg-[#002b1a]
            p-10
            text-center
            text-white
          "
        >
          <div
            className="
              mb-6
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              border
              border-[#196c44]
            "
          >
            <Leaf size={38} />
          </div>

          <h3 className="mb-4 font-serif text-3xl">
            100% Organic Origin
          </h3>

          <p className="max-w-sm text-white/80">
            Grown without chemical pesticides in the
            mineral-rich sediment of freshwater ponds.
          </p>

        </motion.div>

      </div>

    </section>

    <section className="overflow-hidden bg-[#f0eee9] py-[120px]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2">

        {/* Image Side */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-2xl">

            <Image
              src="/masource.png"
              alt="Wetlands of Bihar"
              fill
              className="object-cover transition duration-1000 hover:scale-105"
            />

            <div className="absolute inset-0 bg-[#002b1a]/10 mix-blend-multiply" />
          </div>

          {/* Decorative Border */}

          <div className="absolute -right-6 -top-6 -z-10 h-full w-full rounded-[32px] border-2 border-[#edc073]" />
        </motion.div>

        {/* Content Side */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          viewport={{ once: true }}
        >
          <span className="mb-4 block text-sm font-semibold uppercase tracking-[4px] text-[#196c44]">
            Our Origin
          </span>

          <h2 className="mb-8 font-serif text-5xl leading-tight text-[#002b1a] md:text-6xl">
            Sourced from the
            <br />
            Wetlands of Bihar
          </h2>

          <p className="mb-10 text-lg leading-relaxed text-[#414943]">
            {`Over 90% of the world's Phool Makhana is cultivated
            in the unique aquatic ecosystem of Bihar, India.
            Our partners are traditional farming communities
            who have mastered the art of sustainable pond
            cultivation over generations.
          `}
          </p>

          {/* Features */}

          <div className="space-y-6">

            <div className="flex items-start gap-4">

              <div className="rounded-xl bg-[#a4f4c2] p-3">
                <Droplets
                  size={24}
                  className="text-[#196c44]"
                />
              </div>

              <div>
                <h4 className="mb-1 font-serif text-2xl text-[#002b1a]">
                  Freshwater Cultivation
                </h4>

                <p className="text-[#414943]">
                  Grown in stagnant, perennial water bodies
                  rich in natural organic matter.
                </p>
              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="rounded-xl bg-[#a4f4c2] p-3">
                <Users
                  size={24}
                  className="text-[#196c44]"
                />
              </div>

              <div>
                <h4 className="mb-1 font-serif text-2xl text-[#002b1a]">
                  Direct Farm Sourcing
                </h4>

                <p className="text-[#414943]">
                  Eliminating middlemen to ensure fair pricing
                  for farmers and superior export quality.
                </p>
              </div>

            </div>

          </div>

          {/* CTA */}

          <button
            className="
              mt-12
              flex
              items-center
              gap-2
              font-semibold
              text-[#002b1a]
              transition-all
              duration-300
              hover:gap-4
            "
          >
            Learn about our ESG commitment

            <ArrowRight size={18} />
          </button>

        </motion.div>

      </div>
    </section>

     <section className="mx-auto max-w-7xl px-6 py-[120px]">

      {/* Heading */}

      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <h2 className="mb-4 font-serif text-5xl text-[#002b1a] md:text-6xl">
          The Standard of Purity
        </h2>

        <p className="mx-auto max-w-2xl text-[#414943]">
          From seed harvesting to final grading, our
          proprietary processing units maintain
          pharmaceutical-grade cleanliness.
        </p>
      </motion.div>

      {/* Cards */}

      <div className="grid gap-8 md:grid-cols-3">

        {/* Card 1 */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="group"
        >
          <div className="relative mb-8 h-64 overflow-hidden rounded-[32px]">

            <Image
              src="/mapro1.png"
              alt="Manual Roasting"
              fill
              className="
                object-cover
                transition-transform
                duration-700
                group-hover:scale-110
              "
            />

          </div>

          <h3 className="mb-4 font-serif text-3xl text-[#002b1a]">
            Manual Roasting
          </h3>

          <p className="leading-relaxed text-[#414943]">
            Seeds are roasted at specific temperatures
            until they pop into “Phool” (flowers),
            preserving the structural integrity and
            natural crunch.
          </p>

        </motion.div>

        {/* Card 2 */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="group"
        >
          <div className="relative mb-8 h-64 overflow-hidden rounded-[32px]">

            <Image
              src="/mapro2.png"
              alt="Precision Cleaning"
              fill
              className="
                object-cover
                transition-transform
                duration-700
                group-hover:scale-110
              "
            />

          </div>

          <h3 className="mb-4 font-serif text-3xl text-[#002b1a]">
            Precision Cleaning
          </h3>

          <p className="leading-relaxed text-[#414943]">
            Triple-stage air-flow cleaning removes
            husk particles and impurities, ensuring
            a pristine white product ready for export.
          </p>

        </motion.div>

        {/* Card 3 */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="group"
        >
          <div className="relative mb-8 h-64 overflow-hidden rounded-[32px]">

            <Image
              src="/mapro3.png"
              alt="Size Grading"
              fill
              className="
                object-cover
                transition-transform
                duration-700
                group-hover:scale-110
              "
            />

          </div>

          <h3 className="mb-4 font-serif text-3xl text-[#002b1a]">
            Size Grading
          </h3>

          <p className="leading-relaxed text-[#414943]">
            Available in multiple grades including
            4+ Sut, 5+ Sut and premium Handpicked
            Jumbo variants tailored for specific
            industry requirements.
          </p>

        </motion.div>

      </div>

    </section>

     <section className="bg-[#002b1a] py-[120px] text-white">

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="mb-4 font-serif text-5xl md:text-6xl">
              Culinary Versatility
            </h2>

            <p className="text-lg text-white/80">
              From gourmet snacks to nutritious additives,
              Makhana is the versatile base of the future
              food industry.
            </p>
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <button
              className="
                rounded-full
                bg-[#edc073]
                px-8
                py-3
                font-medium
                text-[#271900]
                transition-all
                duration-300
                hover:bg-white
                hover:shadow-xl
              "
            >
              Download Application Guide
            </button>
          </motion.div>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {applications.map((item, index) => (
            <motion.div
              key={item.title}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              className="
                rounded-[28px]
                border
                border-white/10
                p-8
                transition-all
                duration-300
                hover:border-[#edc073]/40
                hover:bg-white/5
                hover:-translate-y-2
              "
            >
              <h3 className="mb-3 font-serif text-2xl">
                {item.title}
              </h3>

              <p className="leading-relaxed text-white/60">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>

    </section>

    <section className="relative mx-auto max-w-7xl overflow-hidden px-6 py-[120px]">

      <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">

        {/* Left Content */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <span className="mb-4 block text-sm font-semibold uppercase tracking-[4px] text-[#4e3500]">
            Built For Distance
          </span>

          <h2 className="mb-8 font-serif text-5xl leading-tight text-[#002b1a] md:text-6xl">
            Global Logistics &
            <br />
            Export Packaging
          </h2>

          <div className="space-y-8">

            {/* Card 1 */}

            <div
              className="
                flex
                items-center
                gap-6
                rounded-[28px]
                border
                border-white/30
                bg-white/40
                p-6
                backdrop-blur-xl
                shadow-[0_10px_30px_-10px_rgba(0,43,26,0.05)]
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-[#002b1a]
                  text-white
                "
              >
                <Package size={28} />
              </div>

              <div>
                <h4 className="mb-1 font-serif text-xl text-[#002b1a]">
                  Vacuum Packs
                </h4>

                <p className="text-sm text-[#414943]">
                  Prevents moisture absorption and
                  maintains crunch for up to 12 months.
                </p>
              </div>
            </div>

            {/* Card 2 */}

            <div
              className="
                flex
                items-center
                gap-6
                rounded-[28px]
                border
                border-white/30
                bg-white/40
                p-6
                backdrop-blur-xl
                shadow-[0_10px_30px_-10px_rgba(0,43,26,0.05)]
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-[#002b1a]
                  text-white
                "
              >
                <Boxes size={28} />
              </div>

              <div>
                <h4 className="mb-1 font-serif text-xl text-[#002b1a]">
                  5-Ply Corrugated Boxes
                </h4>

                <p className="text-sm text-[#414943]">
                  Extra-strength outer casing for
                  sea-freight protection and
                  stacking durability.
                </p>
              </div>
            </div>

            {/* Card 3 */}

            <div
              className="
                flex
                items-center
                gap-6
                rounded-[28px]
                border
                border-white/30
                bg-white/40
                p-6
                backdrop-blur-xl
                shadow-[0_10px_30px_-10px_rgba(0,43,26,0.05)]
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-[#002b1a]
                  text-white
                "
              >
                <QrCode size={28} />
              </div>

              <div>
                <h4 className="mb-1 font-serif text-xl text-[#002b1a]">
                  Blockchain Traceability
                </h4>

                <p className="text-sm text-[#414943]">
                  Every batch features QR-based
                  traceability back to the harvest
                  pond and processing date.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Right Image */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="order-1 lg:order-2"
        >
          <div className="relative">

            <Image
              src="/mapack.png"
              alt="Global Logistics Hub"
              width={900}
              height={900}
              className="
                rounded-[32px]
                shadow-2xl
                transition
                duration-1000
                hover:scale-[1.02]
              "
            />

            {/* Floating Label */}

            <div
              className="
                absolute
                -bottom-6
                left-8
                rounded-full
                bg-white/90
                px-6
                py-3
                text-sm
                font-medium
                text-[#002b1a]
                shadow-xl
                backdrop-blur-xl
              "
            >
              Export Ready Network
            </div>
            {/* Floating Stat Card */}

            <motion.div
            initial={{
                opacity: 0,
                y: 30,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.8,
                delay: 0.4,
            }}
            viewport={{ once: true }}
            className="
                absolute
                -bottom-10
                -right-10
                max-w-[220px]
                rounded-[28px]
                border
                border-white/30
                bg-white/40
                p-8
                shadow-[0_20px_50px_-12px_rgba(0,43,26,0.08)]
                backdrop-blur-xl
            "
            >
            <div className="mb-1 font-serif text-5xl leading-none text-[#196c44]">
                45+
            </div>

            <p className="text-sm font-semibold uppercase tracking-[2px] text-[#002b1a]">
                Countries Served Yearly
            </p>
            </motion.div>

          </div>
        </motion.div>
        

      </div>

    </section>

    <ProductCTA
        title="Ready for Global Distribution"
        description="Partner with BharatXAgro for premium export-grade Phool Makhana sourced directly from Bihar's wetlands and processed under international quality standards."
        primaryText="Request Bulk Quote"
        secondaryText="Become a Partner"
        primaryHref="/inquiry"
        secondaryHref="/inquiry"
    />

    </>
  );
}