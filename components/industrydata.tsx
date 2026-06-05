"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const products = [
  {
    slug: "moringa",
    category: "BEST SELLER",
    title: "Organic Moringa Leaf Powder (Premium Grade)",
    description:
      "Standardized to 3% Protein, cold-milled to preserve nutrients and antioxidants. Available in 25kg bulk kraft bags for nutraceutical manufacturing.",
    cert: "USDA Organic, EU Organic, GMP",
    shelfLife: "24 Months",
    image: "/moringa.png",
    href: "/products/moringa",
  },

  {
    slug: "makhana",
    category: "SNACKING",
    title: "Premium Export Makhana",
    description:
      "Large-sized fox nuts sourced directly from Bihar and processed according to international export standards.",
    cert: "APEDA, FSSAI",
    shelfLife: "18 Months",
    image: "/makhana.png",
    href: "/products/makhana",
  },

  {
    slug: "onion",
    category: "INGREDIENTS",
    title: "Red Onion Powder (Custom Mesh)",
    description:
      "Fine mesh onion powder ideal for seasoning blends, dehydrated soups and industrial food manufacturing.",
    cert: "ISO 22000",
    shelfLife: "24 Months",
    image: "/onion.png",
    href: "/products/onion-powder",
  },

  {
    slug: "mushroom",
    category: "GOURMET",
    title: "Premium Mushroom Collection",
    description:
      "Fresh and dehydrated mushroom products for food service industries and gourmet manufacturers.",
    cert: "GMP Certified",
    shelfLife: "12 Months",
    image: "/mushroom.png",
    href: "/products/mushrooms",
  },
];

export default function IndustrialFormulations() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % products.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const current = products[active];

  const sideProducts = useMemo(() => {
    return products.filter((_, index) => index !== active).slice(0, 2);
  }, [active]);
  return (
    <section className="bg-[#f7f4ee] py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-10 flex items-end justify-between"
        >
          <div>
            <span className="text-xs uppercase tracking-[4px] text-[#6f9f55]">
              Bulk Collections
            </span>

            <h2 className="mt-4 font-serif text-5xl text-[#123524] md:text-6xl">
              Industrial Formulations
            </h2>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={() =>
                setActive(
                  active === 0 ? products.length - 1 : active - 1
                )
              }
              className="rounded-full border border-[#123524]/20 p-4 transition hover:bg-[#123524] hover:text-white"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() =>
                setActive((active + 1) % products.length)
              }
              className="rounded-full border border-[#123524]/20 p-4 transition hover:bg-[#123524] hover:text-white"
            >
              <ChevronRight />
            </button>
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-12">

          {/* FEATURED CARD */}
         <Link
            href={current.href}
            className="group relative overflow-hidden rounded-[40px] md:col-span-8 min-h-[520px]"
            >
            {/* Background Image */}
            <AnimatePresence mode="wait">
                <motion.div
                key={current.image}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
                >
                <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    priority
                    className="object-cover transition duration-[3000ms] group-hover:scale-110"
                />

                {/* Premium Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

                {/* Luxury Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#123524]/30 via-transparent to-[#d8b15a]/20" />
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            <motion.div
                layout
                className="relative z-20 flex h-[520px] flex-col justify-between p-10 md:p-12"
            >
                <AnimatePresence mode="wait">
                <motion.div
                    key={current.slug}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Category */}
                    <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs tracking-[3px] text-white backdrop-blur-xl">
                    {current.category}
                    </span>

                    {/* Title */}
                    <h3 className="mt-8 max-w-3xl font-serif text-4xl text-white md:text-5xl lg:text-6xl">
                    {current.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                    {current.description}
                    </p>
                </motion.div>
                </AnimatePresence>

                {/* Bottom Content */}
                <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

                {/* Details */}
                <div className="grid grid-cols-2 gap-8">

                    <div>
                    <span className="block text-xs uppercase tracking-[2px] text-white/50">
                        Certifications
                    </span>

                    <p className="mt-2 font-medium text-white">
                        {current.cert}
                    </p>
                    </div>

                    <div>
                    <span className="block text-xs uppercase tracking-[2px] text-white/50">
                        Shelf Life
                    </span>

                    <p className="mt-2 font-medium text-white">
                        {current.shelfLife}
                    </p>
                    </div>

                </div>

                {/* CTA 
                <div>
                    <button className="group/btn rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm uppercase tracking-[3px] text-white backdrop-blur-xl transition-all duration-500 hover:bg-[#d8b15a] hover:text-black">

                    Request Technical Data Sheet

                    <span className="ml-2 inline-block transition-transform duration-300 group-hover/btn:translate-x-1">
                        →
                    </span>

                    </button>
                </div>*/}

                </div>

                {/* Progress Badge */}
                <div className="absolute right-8 top-8 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-xl">
                {(active + 1).toString().padStart(2, "0")} / 04
                </div>

                {/* Auto Rotate Indicator */}
                {/* <div className="absolute bottom-0 left-0 h-1 w-full overflow-hidden bg-white/10">
                <motion.div
                    key={active}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{
                    duration: 6,
                    ease: "linear",
                    }}
                    className="h-full bg-gradient-to-r from-[#d8b15a] via-white to-[#d8b15a]"
                />
                </div> */}
            </motion.div>
         </Link>

          {/* SIDE CARDS */}
          <div className="flex flex-col gap-8 md:col-span-4">

            {sideProducts.map((product) => (
              <Link
                key={product.slug}
                href={product.href}
                className="group flex-1"
              >
                <motion.div
                    whileHover={{ y: -10 }}
                    className="group relative h-full overflow-hidden rounded-[30px]"
                    >
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                    <div className="absolute bottom-0 p-8 text-white">

                        <span className="text-xs uppercase tracking-[3px] text-[#d8b15a]">
                        {product.category}
                        </span>

                        <h4 className="mt-3 text-2xl font-medium">
                        {product.title}
                        </h4>

                        <p className="mt-3 text-sm text-white/70">
                        {product.description.slice(0, 70)}...
                        </p>

                    </div>

                    <div className="absolute right-6 top-6 rounded-full bg-white/10 p-3 backdrop-blur-xl">
                        <ArrowUpRight className="text-white" size={18} />
                    </div>
                </motion.div>
              </Link>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}