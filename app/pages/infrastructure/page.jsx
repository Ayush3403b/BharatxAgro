"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sprout, Ship, FlaskConical, Factory, Package, Beaker,
    Warehouse, Sun, Recycle, Globe,
    Truck, Leaf, ArrowRight, Download,
    FileText,
 } from "lucide-react";
export default function Infrastructure() {
  return (
    <main>
    {/* Hero Section */}        
    <section className="relative h-screen overflow-hidden">

      <Image
        src="/InfraHero.png"
        alt="Infrastructure"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#123524]/50 via-black/20 to-[#f7f4ee]" />

      {/* Floating Particles */}
    <div className="absolute inset-0 overflow-hidden">
      {[1, 2, 3, 4, 5].map((item) => (
        <motion.div
          key={item}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6 + item,
            repeat: Infinity,
          }}
          className="absolute rounded-full bg-[#6f9f55]/10 blur-3xl"
          style={{
            width: 200,
            height: 200,
            left: `${item * 15}%`,
            top: `${item * 10}%`,
          }}
        />
      ))}
    </div>

      <div className="relative z-10 flex h-full items-center justify-center px-6">

        <div className="max-w-5xl text-center">

          <span className="mb-6 block text-xs uppercase tracking-[6px] text-[#d8b15a]">
            Industrial Excellence
          </span>

          <h1 className="font-serif text-6xl leading-tight text-white md:text-8xl">
            Where Tradition Meets
            <br />
            Precision Engineering
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-white/80">
            Our state-of-the-art processing ecosystem spans
            advanced infrastructure designed for purity,
            traceability and export excellence.
          </p>

        </div>

      </div>

    </section>

    {/* Production Clusters */}
    <section className="bg-[#f7f4ee] py-12">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-20 flex items-start justify-between">

          <div>

            <span className="text-xs uppercase tracking-[4px] text-[#d8b15a]">
              Production Ecosystem
            </span>

            <h2 className="mt-4 font-serif text-5xl text-[#123524]">
              Advanced Production Clusters
            </h2>

            <p className="mt-6 max-w-2xl text-gray-500">
              Every stage of our process is isolated, monitored and
              engineered to maintain export-grade quality standards.
            </p>

          </div>

        </div>

        {/* Bento Grid */}
        <div className="grid gap-6 lg:grid-cols-12">

          {/* Large Card */}
          <div className="group relative overflow-hidden rounded-[28px] lg:col-span-7">

            <Image
              src="/dehy.png"
              alt="Dehydration"
              width={1200}
              height={800}
              className="h-[330px] w-full object-cover transition duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-8 left-8">

              <span className="text-xs uppercase tracking-[3px] text-[#d8b15a]">
                Unit 01
              </span>

              <h3 className="mt-2 font-serif text-3xl text-white">
                Atmospheric Dehydration
              </h3>

              <p className="mt-3 max-w-md text-white/80">
                Low-temperature dehydration preserving nutritional
                value and natural characteristics.
              </p>

            </div>

          </div>

          {/* Right Top */}
          <div className="group relative overflow-hidden rounded-[28px] lg:col-span-5">

            <Image
              src="/milling.png"
              alt="Milling"
              width={800}
              height={800}
              className="h-[330px] w-full object-cover transition duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-8 left-8">

              <span className="text-xs uppercase tracking-[3px] text-[#d8b15a]">
                Unit 02
              </span>

              <h3 className="mt-2 font-serif text-2xl text-white">
                Micronized Milling
              </h3>

              <p className="mt-3 text-sm text-white/80">
                Uniform particle sizing for export-grade consistency.
              </p>

            </div>

          </div>

          {/* Bottom Left Small */}
          <div className="relative h-[400px] overflow-hidden rounded-[28px] lg:col-span-3">

            <Image
              src="/R&D.png"
              alt="Phytochemical R&D"
              width={1200}
              height={1600}
              className="h-full w-full object-cover transition duration-1000 hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#123524]/90 via-[#123524]/60 to-transparent" />

            <div className="absolute inset-0 z-10 flex flex-col justify-end p-10 text-white">

              <Beaker
                size={32}
                className="text-[#d8b15a]"
              />

              <span className="mt-8 block text-xs uppercase tracking-[3px] text-[#d8b15a]">
                Unit 03
              </span>

              <h3 className="mt-2 font-serif text-2xl">
                Phytochemical R&D
              </h3>

              <p className="mt-4 text-white/80">
                Continuous testing for purity and compound
                concentration in our in-house laboratory.
              </p>

            </div>

          </div>

          {/* Bottom Right Large */}
          <div className="group relative overflow-hidden rounded-[28px] lg:col-span-9">

            <Image
              src="/packaging.png"
              alt="Packaging"
              width={1400}
              height={800}
              className="h-[400px] w-full object-cover transition duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-8 left-8">

              <span className="text-xs uppercase tracking-[3px] text-[#d8b15a]">
                Unit 04
              </span>

              <h3 className="mt-2 font-serif text-3xl text-white">
                Modified Atmosphere Packaging
              </h3>

              <p className="mt-3 max-w-lg text-white/80">
                Nitrogen-flushed packaging systems designed
                to maximize freshness and extend shelf life.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

      {/* <section className="bg-[#f7f4ee] py-32">

        <div className="mx-auto max-w-7xl px-6">

          {/* Heading 
          <div className="mb-20 flex items-end justify-between">

            <div>

              <span className="text-xs uppercase tracking-[5px] text-[#d8b15a]">
                Production Ecosystem
              </span>

              <h2 className="mt-4 font-serif text-5xl text-[#123524] md:text-6xl">
                Advanced Production
                <br />
                Clusters
              </h2>

            </div>

            <p className="hidden max-w-md text-gray-500 lg:block">
              Every stage of our process is isolated, monitored and
              engineered to preserve nutritional integrity and
              export-grade quality.
            </p>

          </div>

          {/* Bento Grid 
          <div className="grid gap-6 lg:grid-cols-12">

            {/* Card 1 
            <div className="group relative overflow-hidden rounded-[30px] lg:col-span-8">

              <Image
                src="/infra-unit1.jpg"
                alt="Dehydration Facility"
                width={1200}
                height={800}
                className="h-[340px] w-full object-cover transition duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 text-white">

                <span className="text-xs tracking-[3px] text-[#d8b15a]">
                  UNIT 01
                </span>

                <h3 className="mt-3 font-serif text-3xl">
                  Atmospheric Dehydration
                </h3>

                <p className="mt-3 max-w-lg text-white/70">
                  Low-temperature drying systems that preserve
                  nutrient density and natural flavor profiles.
                </p>

              </div>

            </div>

            {/* Card 2 *
            <div className="group relative overflow-hidden rounded-[30px] lg:col-span-4">

              <Image
                src="/infra-unit2.jpg"
                alt="Micronized Milling"
                width={800}
                height={800}
                className="h-[340px] w-full object-cover transition duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 text-white">

                <span className="text-xs tracking-[3px] text-[#d8b15a]">
                  UNIT 02
                </span>

                <h3 className="mt-2 font-serif text-2xl">
                  Micronized Milling
                </h3>

                <p className="mt-2 text-sm text-white/70">
                  Precision grinding technology delivering
                  uniform particle distribution.
                </p>

              </div>

            </div>

            {/* Card 3 *
            <div className="rounded-[30px] bg-[#efe6d2] p-8 lg:col-span-4">

              <span className="text-xs tracking-[3px] text-[#123524]/60">
                UNIT 03
              </span>

              <h3 className="mt-6 font-serif text-3xl text-[#123524]">
                Phytochemical R&amp;D
              </h3>

              <p className="mt-4 text-gray-600">
                Continuous testing for purity and compound
                concentration across every production batch.
              </p>

              <div className="mt-10 text-[#123524]/30">
                ⚗
              </div>

            </div>

            {/* Card 4 *
            <div className="group relative overflow-hidden rounded-[30px] lg:col-span-8">

              <Image
                src="/infra-unit4.jpg"
                alt="Packaging Unit"
                width={1200}
                height={800}
                className="h-[340px] w-full object-cover transition duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 text-white">

                <span className="text-xs tracking-[3px] text-[#d8b15a]">
                  UNIT 04
                </span>

                <h3 className="mt-3 font-serif text-3xl">
                  Modified Atmosphere Packaging
                </h3>

                <p className="mt-3 max-w-lg text-white/70">
                  Nitrogen-flushed packaging systems maintaining
                  freshness during international transit.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section> */}

      {/* Lifecycle Timeline */}
      <section className="relative overflow-hidden bg-[#123524] py-12 text-white">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(216,177,90,0.08),transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl px-6">

          {/* Heading */}
          <div className="mb-8 text-center">

            <span className="text-xs uppercase tracking-[5px] text-[#d8b15a]">
              Traceable Pathway
            </span>

            <h2 className="mt-4 font-serif text-5xl md:text-6xl">
              The Lifecycle of Excellence
            </h2>

          </div>

          {/* Timeline */}
          <div className="relative">

            {/* Center Line */}
            <div className="absolute left-1/2 top-12 hidden h-[1px] w-[85%] -translate-x-1/2 bg-[#d8b15a]/20 lg:block">

              <div className="h-full w-full bg-gradient-to-r from-transparent via-[#d8b15a] to-transparent" />

            </div>

            <div className="grid gap-10 lg:grid-cols-4">

              {[
                {
                  icon: Sprout,
                  title: "Direct Harvest",
                  desc: "Sourced within hours of harvest, preserving nutrient density and freshness.",
                },
                {
                  icon: Factory,
                  title: "Multi-Phase QC",
                  desc: "Every batch undergoes strict quality inspections before processing.",
                },
                {
                  icon: FlaskConical,
                  title: "Bespoke Processing",
                  desc: "Advanced milling and controlled drying techniques preserve integrity.",
                },
                {
                  icon: Ship,
                  title: "Global Dispatch",
                  desc: "Export-ready logistics network serving buyers across international markets.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group relative text-center"
                  >

                    {/* Icon Circle */}
                    <div className="relative z-20 mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-[#d8b15a]/30 bg-[#f7f4ee] transition-all duration-700 group-hover:scale-110 group-hover:bg-[#d8b15a]">

                      <Icon
                        size={30}
                        className="text-[#123524]"
                      />

                    </div>

                    {/* Number 
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-2 rounded-full bg-[#d8b15a] px-3 py-1 text-xs font-bold text-[#123524] shadow-lg">
                      0{index + 1}
                    </div>*/}

                    {/* Content */}
                    <h3 className="font-serif text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-relaxed text-white/70">
                      {item.desc}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </section>

      {/* Logistics & Storage */}
      <section className="bg-[#f7f4ee] py-32 overflow-hidden">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-20 lg:grid-cols-2">

            {/* Image Side */}
            <div className="relative">

              {/* Background Frame */}
              <div className="absolute -left-8 -top-8 h-[85%] w-[45%] bg-[#e8dfcd]" />

              {/* Main Image */}
              <div className="group relative overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)]">

                <Image
                  src="/Coldstorage.png"
                  alt="Cold Storage Facility"
                  width={800}
                  height={1000}
                  className="h-[650px] w-full object-cover grayscale transition duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                />

                {/* Floating Card */}
                <div className="absolute bottom-8 left-1/2 w-[80%] -translate-x-1/2 rounded-[25px] bg-white/80 p-6 text-center backdrop-blur-xl shadow-xl">

                  <h3 className="font-serif text-2xl text-[#123524]">
                    Cold Storage Cluster
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    Maintained at controlled temperatures ensuring
                    freshness and quality throughout storage and export.
                  </p>

                </div>

              </div>

            </div>

            {/* Content Side */}
            <div>

              <span className="text-xs uppercase tracking-[5px] text-[#d8b15a]">
                Logistics Network
              </span>

              <h2 className="mt-4 font-serif text-5xl text-[#123524] md:text-6xl">
                From Farm
                <br />
                To Global Ports
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-gray-600">
                Every shipment is supported by a highly coordinated
                logistics ecosystem that guarantees freshness,
                traceability and export compliance.
              </p>

              {/* Features */}
              <div className="mt-12 space-y-10">

                <div className="flex gap-5 group">

                  <div className="flex h-14 w-17 items-center justify-center rounded-full bg-[#123524]/10 group-hover:bg-[#d8b15a]">
                    <Warehouse
                      size={24}
                      className="text-[#123524]"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-[#123524]">
                      Climate Controlled Storage
                    </h3>

                    <p className="mt-2 text-gray-600">
                      Dedicated warehouse infrastructure designed
                      to preserve product quality and shelf life.
                    </p>
                  </div>

                </div>

                <div className="flex gap-5 group">

                  <div className="flex h-14 w-17 items-center justify-center rounded-full bg-[#123524]/10 group-hover:bg-[#d8b15a]">
                    <Truck
                      size={24}
                      className="text-[#123524]"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-[#123524]">
                      Smart Transportation
                    </h3>

                    <p className="mt-2 text-gray-600">
                      Coordinated transport solutions ensuring
                      seamless movement from facility to port.
                    </p>
                  </div>

                </div>

                <div className="flex gap-5 group ">

                  <div className="flex h-14 w-17 items-center justify-center rounded-full bg-[#123524]/10 group-hover:bg-[#d8b15a]">
                    <FileText
                      size={24}
                      className="text-[#123524]"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-[#123524]">
                      Export Documentation
                    </h3>

                    <p className="mt-2 text-gray-600">
                      Complete export documentation and compliance
                      support for international trade operations.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Infrastructure Metrics */}
      <section className="relative overflow-hidden bg-[#123524] py-14 text-white">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(216,177,90,0.08),transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl px-6">

          {/* Heading */}
          <div className="mb-20 text-center">

            <span className="text-xs uppercase tracking-[5px] text-[#d8b15a]">
              Infrastructure Metrics
            </span>

            <h2 className="mt-4 font-serif text-5xl md:text-6xl">
              Scale Meets Precision
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
              Our facilities are designed to support global demand while
              maintaining the highest standards of quality, sustainability
              and operational efficiency.
            </p>

          </div>

          {/* Stats Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: Factory,
                value: "5000+",
                label: "Metric Tons / Year",
              },
              {
                icon: Sun,
                value: "100%",
                label: "Renewable Energy Integration",
              },
              {
                icon: Recycle,
                value: "0%",
                label: "Waste To Landfill Goal",
              },
              {
                icon: Globe,
                value: "42+",
                label: "Export Destinations",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="group rounded-[30px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#d8b15a]/30"
                >

                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#d8b15a]/10 transition-all duration-500 group-hover:bg-[#d8b15a]">

                    <Icon
                      size={28}
                      className="text-[#d8b15a] transition-all duration-500 group-hover:text-[#123524]"
                    />

                  </div>

                  <h3 className="font-serif text-5xl text-[#d8b15a]">
                    {item.value}
                  </h3>

                  <p className="mt-4 leading-relaxed text-white/70">
                    {item.label}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/*Ecological Mandate*/}
      <section className="relative overflow-hidden bg-[#f7f4ee] py-12">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-20 lg:grid-cols-2">

            {/* Content */}
            <div>

              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#123524]/10">

                <Leaf
                  size={36}
                  className="text-[#123524]"
                />

              </div>

              <span className="text-xs uppercase tracking-[5px] text-[#d8b15a]">
                Sustainability First
              </span>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#123524] md:text-7xl">
                The Ecological
                <br />
                Mandate
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-600">
                Infrastructure is more than machinery and buildings.
                It is our responsibility to create systems that
                preserve resources, support farming communities
                and reduce environmental impact at every stage
                of production.
              </p>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
                From renewable energy integration to responsible
                sourcing and waste reduction initiatives,
                BharatXAgro is committed to building a future
                where growth and sustainability move together.
              </p>

              {/* CTA Buttons */}
              <div className="mt-12 flex flex-wrap gap-5">

                <button className="group flex items-center gap-3 rounded-full bg-[#123524] px-8 py-4 text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(18,53,36,0.2)]">

                  Request Facility Tour

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </button>

                <button className="group flex items-center gap-3 rounded-full border border-[#123524]/20 bg-white px-8 py-4 text-[#123524] transition-all duration-500 hover:border-[#123524] hover:bg-[#123524] hover:text-white">

                  Download Profile

                  <Download size={18} />

                </button>

              </div>

            </div>

            {/* Image */}
            <div className="relative">

              {/* Background Accent */}
              <div className="absolute -right-8 -top-8 h-full w-full rounded-[40px] bg-[#d8b15a]/10" />

              <div className="group relative overflow-hidden rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.1)]">

                <Image
                  src="/Eco.png"
                  alt="Ecological Mandate"
                  width={900}
                  height={1100}
                  className="h-[700px] w-full object-cover transition duration-1000 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#123524]/60 via-transparent to-transparent" />

                {/* Floating Card */}
                <div className="absolute bottom-8 left-8 rounded-[25px] border border-white/20 bg-white/10 p-6 backdrop-blur-xl">

                  <h3 className="font-serif text-3xl text-white">
                    100%
                  </h3>

                  <p className="mt-2 text-sm text-white/80">
                    Sustainability Focused
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Facility Gallery */}
      <section className="bg-white py-12">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-20 text-center">

            <span className="text-xs uppercase tracking-[5px] text-[#d8b15a]">
              Facility Gallery
            </span>

            <h2 className="mt-4 font-serif text-5xl text-[#123524] md:text-6xl">
              A Closer Look
              <br />
              Inside BharatXAgro
            </h2>

          </div>

          <div className="grid gap-6 lg:grid-cols-12">

            <div className="overflow-hidden rounded-[30px] lg:col-span-8">
              <Image
                src="/Fimg1.png"
                alt=""
                width={1200}
                height={800}
                className="h-[450px] w-full object-cover transition duration-1000 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-[30px] lg:col-span-4">
              <Image
                src="/Fimg2.png"
                alt=""
                width={800}
                height={800}
                className="h-[450px] w-full object-cover transition duration-1000 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-[30px] lg:col-span-4">
              <Image
                src="/Fimg3.png"
                alt=""
                width={800}
                height={800}
                className="h-[300px] w-full object-cover transition duration-1000 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-[30px] lg:col-span-4">
              <Image
                src="/Fimg4.png"
                alt=""
                width={800}
                height={800}
                className="h-[300px] w-full object-cover transition duration-1000 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-[30px] lg:col-span-4">
              <Image
                src="/Fimg5.png"
                alt=""
                width={800}
                height={800}
                className="h-[300px] w-full object-cover transition duration-1000 hover:scale-105"
              />
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}