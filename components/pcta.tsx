"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ProductCTAProps {
  title: string;
  description: string;
  primaryText?: string;
  secondaryText?: string;
  primaryHref?: string;
  secondaryHref?: string;
}

export default function ProductCTA({
  title,
  description,
  primaryText = "Request Bulk Quote",
  secondaryText = "Become a Partner",
  primaryHref = "/pages/inquiry",
  secondaryHref = "/pages/contact",
}: ProductCTAProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">

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
          {title}
        </h2>

        {/* Description */}

        <p className="mb-12 text-lg leading-relaxed text-[#414943]">
          {description}
        </p>

        {/* Buttons */}

        <div className="flex flex-col justify-center gap-6 md:flex-row">

          <a
            href={primaryHref}
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
            {primaryText}
          </a>

          <a
            href={secondaryHref}
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
            {secondaryText}
          </a>

        </div>

      </motion.div>

    </section>
  );
}