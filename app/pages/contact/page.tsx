"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Building2,
  Globe,
  ChevronDown,
  Clock,
  ExternalLink,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const offices = [
  {
    city: "New Delhi",
    country: "India",
    flag: "🇮🇳",
    role: "Global HQ",
    address: "Plot 14, Agro Park, Dwarka, New Delhi 110075",
    phone: "+91 98765 43210",
    email: "india@bharatxagro.com",
    hours: "Mon–Sat, 9 AM – 6 PM IST",
  },
  {
    city: "Dubai",
    country: "UAE",
    flag: "🇦🇪",
    role: "Middle East Hub",
    address: "JAFZA, Jebel Ali Free Zone, Dubai, UAE",
    phone: "+971 50 123 4567",
    email: "uae@bharatxagro.com",
    hours: "Sun–Thu, 9 AM – 5 PM GST",
  },
  {
    city: "Rotterdam",
    country: "Netherlands",
    flag: "🇳🇱",
    role: "Europe Office",
    address: "Waalhaven Z.Z. 18, 3089 JH Rotterdam",
    phone: "+31 10 456 7890",
    email: "europe@bharatxagro.com",
    hours: "Mon–Fri, 8 AM – 5 PM CET",
  },
  {
    city: "Singapore",
    country: "Singapore",
    flag: "🇸🇬",
    role: "APAC Office",
    address: "10 Collyer Quay, #10-01, Ocean Financial Centre",
    phone: "+65 6123 4567",
    email: "apac@bharatxagro.com",
    hours: "Mon–Fri, 9 AM – 6 PM SGT",
  },
];

const faqs = [
  {
    q: "What products does BharatXAgro export?",
    a: "We export premium agricultural commodities including basmati & non-basmati rice, wheat, spices (turmeric, chili, cumin), pulses, sugar, and organic produce to 60+ countries worldwide.",
  },
  {
    q: "What is the minimum order quantity for exports?",
    a: "MOQ varies by product — typically 1 FCL (20ft container ≈ 25 MT) for grains and spices. We accommodate smaller trial orders for new clients to build long-term relationships.",
  },
  {
    q: "Which quality certifications do you hold?",
    a: "BharatXAgro is certified by APEDA, FSSAI, ISO 9001:2015, HACCP, and holds organic certifications from USDA NOP and EU Organic. All shipments include phytosanitary certificates.",
  },
  {
    q: "How long does delivery typically take?",
    a: "Transit times depend on destination: 10–15 days to Middle East & Southeast Asia, 20–25 days to Europe, and 25–35 days to the Americas. We provide real-time shipment tracking.",
  },
  {
    q: "Do you offer custom packaging and private labeling?",
    a: "Yes. We offer full private-label services including custom packaging design, branded bags (jute, BOPP, vacuum), and multilingual labeling compliant with destination country regulations.",
  },
  {
    q: "How do I become a registered export partner?",
    a: "Fill out the contact form above or email us directly. Our partnerships team will schedule a consultation within 48 hours to understand your requirements and initiate onboarding.",
  },
];

/* ─────────────────────────────────────────────
   HELPERS / SMALL COMPONENTS
───────────────────────────────────────────── */
function FloatingInput({
  label,
  type = "text",
  value,
  onChange,
  error,
  multiline = false,
  rows = 4,
  maxLength,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  error: boolean;
  multiline?: boolean;
  rows?: number;
  maxLength?: number;
}) {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value.length > 0;

  const shake = {
    x: [0, -8, 8, -6, 6, -4, 4, 0],
    transition: { duration: 0.4 },
  };

  const borderClass = error
    ? "border-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.12)]"
    : focused
    ? "border-[#1a7a47] shadow-[0_0_0_3px_rgba(26,122,71,0.12)]"
    : "border-white/30";

  const sharedClass = `w-full bg-white/5 backdrop-blur-sm border rounded-2xl px-5 pt-7 pb-3 text-white placeholder-transparent outline-none transition-all duration-300 text-sm resize-none ${borderClass}`;

  return (
    <motion.div animate={error ? shake : {}} className="relative">
      <label
        className={`pointer-events-none absolute left-5 transition-all duration-200 text-white/50
          ${lifted ? "top-2 text-[11px] font-medium tracking-wider uppercase text-[#7ecf9d]" : "top-5 text-sm"}`}
      >
        {label}
      </label>

      {multiline ? (
        <textarea
          rows={rows}
          value={value}
          maxLength={maxLength}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange(e.target.value)}
          className={sharedClass}
        />
      ) : (
        <input
          type={type}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange(e.target.value)}
          className={sharedClass}
        />
      )}

      {maxLength && (
        <div className="mt-1.5 text-right text-xs text-white/30">
          <span className={value.length > maxLength * 0.9 ? "text-[#7ecf9d]" : ""}>
            {value.length}
          </span>
          /{maxLength}
        </div>
      )}
    </motion.div>
  );
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="border-b border-[#1e4530] last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="pr-8 font-medium text-white/90 text-[15px]">{q}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 text-[#7ecf9d]"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm text-white/55 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [activeOffice, setActiveOffice] = useState(0);

  const heroRef = useRef(null);
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true });

  const set = (k: string) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  const validate = () => {
    const e: Record<string, boolean> = {};
    if (!/^[A-Za-z ]{3,}$/.test(form.name)) e.name = true;
    if (!/^[0-9]{10,15}$/.test(form.phone)) e.phone = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = true;
    if (form.address.trim().length < 10) e.address = true;
    if (form.message.trim().length < 20) e.message = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    console.log(form);
  };

  return (
    <main className="bg-[#0b1f14] font-[var(--font-body)]">
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-center overflow-hidden"
      >
        <Image
          src="/contact-hero.jpg"
          alt="Contact BharatXAgro"
          fill
          priority
          className="object-cover scale-105"
        />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-[#0b1f14]/60 to-[#123524]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f14] via-transparent to-transparent" />

        {/* Decorative grain */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-left gap-2 rounded-full border border-[#d8b15a]/30 bg-[#d8b15a]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[5px] text-[#d8b15a]">
              <Globe size={12} /> Contact Us
            </span>

            <h1 className="mt-8 font-serif text-6xl leading-[1.05] text-white md:text-8xl lg:text-[100px]">
              {`Let's Cultivate`}
              <br />
              <span className="text-[#7ecf9d]">Excellence</span>
              <br />
              Together
            </h1>

            <p className="mt-8 max-w-xl text-lg text-white/65 leading-relaxed">
              Connect with BharatXAgro for premium agricultural exports,
              strategic partnerships, and farm-to-world solutions.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-full bg-[#1a7a47] px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-[#15623a] hover:shadow-[0_0_40px_rgba(26,122,71,0.4)]"
              >
                Send Inquiry <Send size={15} />
              </a>
              <a
                href={`https://wa.me/919876543210?text=${encodeURIComponent("Hi BharatXAgro, I'd like to discuss an export inquiry.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
              >
                <MessageCircle size={15} className="text-[#25D366]" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator 
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-white/30" size={28} />
        </motion.div>*/}
      </section>

      {/* ── CONTACT CARDS ── */}
      <section className="relative z-10 -mt-12 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                icon: <Mail size={20} />,
                label: "Email",
                value: "exports@bharatxagro.com",
                href: "mailto:exports@bharatxagro.com",
              },
              {
                icon: <Phone size={20} />,
                label: "Phone",
                value: "+91 98765 43210",
                href: "tel:+919876543210",
              },
              {
                icon: <MessageCircle size={20} />,
                label: "WhatsApp",
                value: "Chat Instantly",
                href: `https://wa.me/919876543210`,
                highlight: true,
              },
            ].map((card, i) => (
              <motion.a
                key={i}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className={`flex items-center gap-4 rounded-2xl border p-5 backdrop-blur-xl transition-all
                  ${card.highlight
                    ? "border-[#25D366]/30 bg-[#25D366]/10 hover:border-[#25D366]/50"
                    : "border-white/10 bg-white/5 hover:border-white/20"
                  }`}
              >
                <span className={`rounded-xl p-2.5 ${card.highlight ? "bg-[#25D366]/20 text-[#25D366]" : "bg-white/10 text-[#7ecf9d]"}`}>
                  {card.icon}
                </span>
                <div>
                  <p className="text-xs text-white/40">{card.label}</p>
                  <p className="mt-0.5 text-sm font-medium text-white">{card.value}</p>
                </div>
                <ExternalLink size={14} className="ml-auto text-white/20" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── GLASSMORPHISM FORM + INFO ── */}
      <section id="contact-form" className="py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">

            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs uppercase tracking-[5px] text-[#d8b15a]">
                Get In Touch
              </span>
              <h2 className="mt-5 font-serif text-5xl text-white leading-tight">
                Connect With
                <br />
                <span className="text-[#7ecf9d]">BharatXAgro</span>
              </h2>
              <p className="mt-5 text-white/50 text-sm leading-relaxed max-w-sm">
                {`Whether you're a distributor, importer, or institutional buyer —
                our export team responds within 24 hours.`}
              </p>

              <div className="mt-12 space-y-6">
                {[
                  { icon: <Mail size={18} />, label: "Email", value: "exports@bharatxagro.com" },
                  { icon: <Phone size={18} />, label: "Phone", value: "+91 98765 43210" },
                  { icon: <MapPin size={18} />, label: "HQ", value: "New Delhi, India" },
                  { icon: <Clock size={18} />, label: "Hours", value: "Mon–Sat, 9 AM – 6 PM IST" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-white/8 text-[#7ecf9d]">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-xs text-white/35 uppercase tracking-wider">{item.label}</p>
                      <p className="mt-0.5 text-sm text-white/80">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <motion.a
                href={`https://wa.me/919876543210?text=${encodeURIComponent("Hi! I'm interested in BharatXAgro's export products.")}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="mt-12 flex items-center gap-4 rounded-2xl border border-[#25D366]/25 bg-[#25D366]/8 p-5 transition-all hover:border-[#25D366]/40 hover:bg-[#25D366]/12"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366]/20">
                  <MessageCircle size={22} className="text-[#25D366]" />
                </span>
                <div>
                  <p className="font-medium text-white text-sm">Chat on WhatsApp</p>
                  <p className="text-xs text-white/45 mt-0.5">Typical reply within 1 hour</p>
                </div>
                <ExternalLink size={15} className="ml-auto text-white/30" />
              </motion.a>
            </motion.div>

            {/* Right: Glassmorphism Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: 30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <form
                onSubmit={handleSubmit}
                className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_40px_80px_rgba(0,0,0,0.4)] md:p-10"
              >
                {/* Glass shimmer top bar */}
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <h3 className="font-serif text-2xl text-white mb-8">Send an Inquiry</h3>

                <div className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FloatingInput label="Full Name" value={form.name} onChange={set("name")} error={!!errors.name} />
                    <FloatingInput label="Contact Number" type="tel" value={form.phone} onChange={set("phone")} error={!!errors.phone} />
                  </div>

                  <FloatingInput label="Email Address" type="email" value={form.email} onChange={set("email")} error={!!errors.email} />

                  <FloatingInput label="Business Address" value={form.address} onChange={set("address")} error={!!errors.address} multiline rows={3} />

                  <FloatingInput
                    label="Tell us about your requirements..."
                    value={form.message}
                    onChange={set("message")}
                    error={!!errors.message}
                    multiline
                    rows={5}
                    maxLength={500}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-7 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#1a7a47] py-4 text-sm font-medium text-white transition-all hover:bg-[#15623a] hover:shadow-[0_20px_50px_rgba(26,122,71,0.35)]"
                >
                  Submit Inquiry
                  <Send size={15} className="transition-transform group-hover:translate-x-1" />
                </motion.button>

                {/* Validation error hint */}
                {Object.keys(errors).length > 0 && !submitted && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-3 text-center text-xs text-red-400"
                  >
                    Please fix the highlighted fields above.
                  </motion.p>
                )}

                {/* Success state */}
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.85, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="mt-6 rounded-2xl border border-[#7ecf9d]/25 bg-[#7ecf9d]/10 p-5 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
                        className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#7ecf9d]/20"
                      >
                        <span className="text-xl">✓</span>
                      </motion.div>
                      <h4 className="font-medium text-[#7ecf9d]">Inquiry Submitted!</h4>
                      <p className="mt-1 text-xs text-white/50">Our export team will contact you within 24 hours.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── GLOBAL OFFICES ── */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <span className="text-xs uppercase tracking-[5px] text-[#d8b15a]">Worldwide</span>
            <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl">
              Our Global Offices
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-white/45">
              Strategically placed across key trade corridors to serve you locally with global scale.
            </p>
          </motion.div>

          {/* Office tabs */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {offices.map((o, i) => (
              <button
                key={i}
                onClick={() => setActiveOffice(i)}
                className={`rounded-full px-5 py-2 text-sm transition-all
                  ${activeOffice === i
                    ? "bg-[#1a7a47] text-white shadow-[0_0_20px_rgba(26,122,71,0.4)]"
                    : "border border-white/10 text-white/50 hover:border-white/25 hover:text-white/80"
                  }`}
              >
                {o.flag} {o.city}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeOffice}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl border border-white/10 bg-white/4 p-8 backdrop-blur-sm"
            >
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{offices[activeOffice].flag}</span>
                  <div>
                    <p className="text-xs text-[#d8b15a] uppercase tracking-widest">{offices[activeOffice].role}</p>
                    <h3 className="mt-1 font-serif text-xl text-white">{offices[activeOffice].city}</h3>
                    <p className="text-sm text-white/40">{offices[activeOffice].country}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[#7ecf9d]" />
                  <p className="text-sm text-white/60 leading-relaxed">{offices[activeOffice].address}</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <Phone size={14} className="text-[#7ecf9d]" />
                    {offices[activeOffice].phone}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <Mail size={14} className="text-[#7ecf9d]" />
                    {offices[activeOffice].email}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Clock size={14} className="text-[#7ecf9d]" />
                  {offices[activeOffice].hours}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* All offices grid below */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {offices.map((o, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setActiveOffice(i)}
                className={`cursor-pointer rounded-2xl border p-5 transition-all
                  ${activeOffice === i
                    ? "border-[#1a7a47]/50 bg-[#1a7a47]/10"
                    : "border-white/8 bg-white/3 hover:border-white/15"
                  }`}
              >
                <span className="text-2xl">{o.flag}</span>
                <h4 className="mt-2 font-medium text-white text-sm">{o.city}</h4>
                <p className="text-xs text-white/40 mt-0.5">{o.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE MAP SECTION ── */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 flex items-end justify-between"
          >
            <div>
              <span className="text-xs uppercase tracking-[5px] text-[#d8b15a]">Export Reach</span>
              <h2 className="mt-3 font-serif text-4xl text-white">Where We Ship</h2>
            </div>
            <p className="hidden text-sm text-white/40 sm:block">60+ countries across 6 continents</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl border border-white/10"
          >
            {/* Embed OpenStreetMap via iframe */}
            <iframe
              title="BharatXAgro Global Offices"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-20%2C-10%2C140%2C65&amp;layer=mapnik&amp;marker=28.6139%2C77.2090"
              className="h-[420px] w-full"
              style={{ filter: "invert(90%) hue-rotate(170deg) brightness(0.75) saturate(0.7)" }}
              loading="lazy"
            />
            {/* Map overlay pins */}
            <div className="absolute inset-0 pointer-events-none">
              {offices.map((o, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                  className="absolute"
                  style={{
                    // Approximate visual positions on the cropped map
                    left: ["46%", "57%", "41%", "76%"][i],
                    top: ["28%", "35%", "20%", "45%"][i],
                  }}
                >
                  <div className="relative">
                    <div className="absolute -inset-2 animate-ping rounded-full bg-[#1a7a47]/30" />
                    <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-[#1a7a47] text-[10px] shadow-lg">
                      {o.flag}
                    </div>
                    <div className="mt-1.5 whitespace-nowrap rounded-full bg-black/70 px-2 py-0.5 text-[10px] text-white/80 backdrop-blur-sm">
                      {o.city}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Bottom gradient blend */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0b1f14] to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <span className="text-xs uppercase tracking-[5px] text-[#d8b15a]">FAQ</span>
            <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl">
              Common Questions
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-white/45">
              Everything you need to know about exporting with BharatXAgro.
            </p>
          </motion.div>

          <div className="rounded-3xl border border-white/8 bg-white/3 px-6 py-2 backdrop-blur-sm md:px-10">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <p className="text-sm text-white/40">
              Still have questions?{" "}
              <a href="#contact-form" className="text-[#7ecf9d] hover:underline">
                Send us a message
              </a>{" "}
              or{" "}
              <a
                href={`https://wa.me/919876543210`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:underline"
              >
                chat on WhatsApp
              </a>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Building2 size={32} className="mx-auto mb-5 text-[#7ecf9d]" />
            <h2 className="font-serif text-3xl text-white md:text-4xl">
              Ready to Start Exporting?
            </h2>
            <p className="mt-4 text-sm text-white/45">
              Join 200+ global importers who trust BharatXAgro for consistent quality and timely delivery.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-full bg-[#1a7a47] px-7 py-3 text-sm text-white transition-all hover:bg-[#15623a]"
              >
                <Send size={14} /> Send Inquiry
              </a>
              <a
                href={`https://wa.me/919876543210`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-7 py-3 text-sm text-white transition-all hover:bg-[#25D366]/20"
              >
                <MessageCircle size={14} className="text-[#25D366]" /> WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}