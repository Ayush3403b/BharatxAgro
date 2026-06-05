// "use client";
// import { useState, ChangeEvent, FormEvent } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// interface FormData {
//   name: string;
//   company: string;
//   email: string;
//   phone: string;
//   product: string;
//   quantity: string;
//   address: string;
//   message: string;
// }

// interface InputFieldProps {
//   label: string;
//   name: keyof FormData;
//   value: string;
//   onChange: (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => void;
//   error?: string;
//   placeholder?: string;
// }

// const products = [
//   "Moringa Powder",
//   "Onion Powder",
//   "Makhana",
//   "Dry Mushroom",
//   "Fresh Mushroom",
// ];

// export default function SampleInquiry() {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     company: "",
//     email: "",
//     phone: "",
//     product: "",
//     quantity: "",
//     address: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState<Partial<FormData>>({});
//   const [success, setSuccess] = useState(false);

//   const validate = () => {
//     const newErrors: Partial<FormData> = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     }

//     if (!formData.company.trim()) {
//       newErrors.company = "Company name is required";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (
//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
//     ) {
//       newErrors.email = "Invalid email address";
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
//       newErrors.phone = "Enter valid 10 digit mobile number";
//     }

//     if (!formData.product) {
//       newErrors.product = "Please select a product";
//     }

//     if (!formData.quantity.trim()) {
//       newErrors.quantity = "Quantity is required";
//     }

//     if (!formData.address.trim()) {
//       newErrors.address = "Address is required";
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     setErrors((prev) => ({
//       ...prev,
//       [name]: "",
//     }));
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!validate()) return;

//     console.log("Sample Inquiry:", formData);

//     setSuccess(true);

//     setFormData({
//       name: "",
//       company: "",
//       email: "",
//       phone: "",
//       product: "",
//       quantity: "",
//       address: "",
//       message: "",
//     });

//     setTimeout(() => {
//       setSuccess(false);
//     }, 4000);
//   };

//   return (
//     <section className="min-h-screen bg-[#f8fbf7] py-24 px-6">
//       <div className="mx-auto max-w-7xl">

//         {/* Heading */}

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-16 text-center"
//         >
//           <span className="uppercase tracking-[5px] text-[#1d5c3f] font-semibold">
//             BharatXAgro
//           </span>

//           <h1 className="mt-4 text-5xl md:text-6xl font-bold text-[#123524]">
//             Sample Inquiry
//           </h1>

//           <p className="mt-6 max-w-2xl mx-auto text-gray-600">
//             Request samples of our premium agricultural products before
//             finalizing your bulk order.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-10">

//           {/* Left Content */}

//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="rounded-[40px] bg-[#123524] p-10 text-white"
//           >
//             <h2 className="mb-8 text-3xl font-bold">
//               Available Sample Products
//             </h2>

//             <div className="space-y-4">
//               {products.map((item) => (
//                 <div
//                   key={item}
//                   className="rounded-2xl border border-white/10 bg-white/5 p-4"
//                 >
//                   {item}
//                 </div>
//               ))}
//             </div>

//             <div className="mt-10 border-t border-white/10 pt-8">
//               <h3 className="mb-4 text-xl font-semibold text-[#f2c572]">
//                 Why Request Samples?
//               </h3>

//               <ul className="space-y-3 text-white/80">
//                 <li>✓ Verify product quality</li>
//                 <li>✓ Check aroma, texture and freshness</li>
//                 <li>✓ Review packaging standards</li>
//                 <li>✓ Test before bulk procurement</li>
//               </ul>
//             </div>
//           </motion.div>

//           {/* Form */}

//           <motion.form
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             onSubmit={handleSubmit}
//             className="rounded-[40px] bg-white p-10 shadow-xl"
//           >
//             <div className="grid md:grid-cols-2 gap-6">

//               <InputField
//                 label="Full Name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 error={errors.name}
//               />

//               <InputField
//                 label="Company Name"
//                 name="company"
//                 value={formData.company}
//                 onChange={handleChange}
//                 error={errors.company}
//               />

//               <InputField
//                 label="Email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 error={errors.email}
//               />

//               <InputField
//                 label="Phone Number"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 error={errors.phone}
//               />
//             </div>

//             <div className="mt-6">
//               <label className="font-medium text-[#123524]">
//                 Product
//               </label>

//               <select
//                 name="product"
//                 value={formData.product}
//                 onChange={handleChange}
//                 className="mt-2 w-full rounded-xl border p-4 outline-none focus:border-[#123524]"
//               >
//                 <option value="">Select Product</option>

//                 {products.map((item) => (
//                   <option key={item} value={item}>
//                     {item}
//                   </option>
//                 ))}
//               </select>

//               {errors.product && (
//                 <p className="mt-1 text-sm text-red-500">
//                   {errors.product}
//                 </p>
//               )}
//             </div>

//             <div className="mt-6">
//               <InputField
//                 label="Required Sample Quantity"
//                 name="quantity"
//                 value={formData.quantity}
//                 onChange={handleChange}
//                 error={errors.quantity}
//                 placeholder="500g / 1kg"
//               />
//             </div>

//             <div className="mt-6">
//               <label className="font-medium text-[#123524]">
//                 Delivery Address
//               </label>

//               <textarea
//                 rows={4}
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 className="mt-2 w-full rounded-xl border p-4 outline-none focus:border-[#123524]"
//               />

//               {errors.address && (
//                 <p className="mt-1 text-sm text-red-500">
//                   {errors.address}
//                 </p>
//               )}
//             </div>

//             <div className="mt-6">
//               <label className="font-medium text-[#123524]">
//                 Additional Notes
//               </label>

//               <textarea
//                 rows={4}
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="mt-2 w-full rounded-xl border p-4 outline-none focus:border-[#123524]"
//               />
//             </div>

//             <button
//               type="submit"
//               className="mt-8 w-full rounded-xl bg-[#123524] py-4 font-semibold text-white transition-all hover:bg-[#0e281d]"
//             >
//               Submit Sample Inquiry
//             </button>
//           </motion.form>
//         </div>
//       </div>

//       {/* Success Modal */}

//       <AnimatePresence>
//         {success && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
//           >
//             <div className="max-w-md rounded-3xl bg-white p-10 text-center">
//               <div className="mb-4 text-5xl">✅</div>

//               <h3 className="text-3xl font-bold text-[#123524]">
//                 Inquiry Submitted
//               </h3>

//               <p className="mt-3 text-gray-600">
//                 Thank you for requesting samples. Our team will contact
//                 you shortly.
//               </p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

// function InputField({
//   label,
//   name,
//   value,
//   onChange,
//   error,
//   placeholder,
// }: InputFieldProps) {
//   return (
//     <div>
//       <label className="font-medium text-[#123524]">
//         {label}
//       </label>

//       <input
//         type="text"
//         name={name}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         className="mt-2 w-full rounded-xl border p-4 outline-none focus:border-[#123524]"
//       />

//       {error && (
//         <p className="mt-1 text-sm text-red-500">
//           {error}
//         </p>
//       )}
//     </div>
//   );
// }

"use client";
import { useState, ChangeEvent, FormEvent, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";

/* ─── Types ───────────────────────────────────────────────── */
interface FormData {
  name: string; company: string; email: string; phone: string;
  product: string; quantity: string; address: string; message: string;
}
interface InputFieldProps {
  label: string; name: keyof FormData; value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  error?: string; placeholder?: string; type?: string;
}

/* ─── Data ────────────────────────────────────────────────── */
const products = [
  { name: "Moringa Powder",   icon: "🌿", note: "Rich in antioxidants" },
  { name: "Onion Powder",     icon: "🧅", note: "Dehydrated, fine grind" },
  { name: "Makhana",          icon: "⚪", note: "Lotus seeds, fox nuts" },
  { name: "Dry Mushroom",     icon: "🍄", note: "Sun-dried, preserved" },
  { name: "Fresh Mushroom",   icon: "🍄", note: "Farm-fresh, chilled" },
];

const whyReasons = [
  { icon: "✦", title: "Quality Assurance",   desc: "Physically examine texture, aroma, and visual grade before committing." },
  { icon: "✦", title: "Packaging Review",    desc: "Evaluate moisture-lock packaging and labeling compliance firsthand." },
  { icon: "✦", title: "Lab Testing Ready",   desc: "Samples are pre-certified — ready for your in-house lab analysis." },
  { icon: "✦", title: "Zero Risk Procurement", desc: "Eliminate sourcing risk. Approve before bulk purchase." },
];

const processSteps = [
  { num: "01", title: "Submit Request",    desc: "Fill out the inquiry form with your product and quantity requirements." },
  { num: "02", title: "Confirmation",      desc: "Our export team reviews and confirms sample availability within 24 hrs." },
  { num: "03", title: "Sample Dispatch",   desc: "Carefully packed samples are dispatched to your address globally." },
  { num: "04", title: "Feedback & Order",  desc: "Share your feedback. Proceed to bulk order at confirmed pricing." },
];

const trustBadges = [
  { label: "Countries Exported", value: "28+" },
  { label: "Metric Tons Shipped", value: "500+" },
  { label: "Satisfied Clients",  value: "120+" },
  { label: "Years of Excellence", value: "5+" },
];

/* ─── Animation Variants ──────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] as const } }),
};
const fadeLeft  = { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25,1,0.5,1] as const } } };
const fadeRight = { hidden: { opacity: 0, x:  40 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25,1,0.5,1] as const } } };

/* ─── Sub-components ──────────────────────────────────────── */
function InputField({ label, name, value, onChange, error, placeholder, type = "text" }: InputFieldProps) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative">
      <label className="inp-label block mb-2 text-xs tracking-[0.14em] uppercase font-medium"
        style={{ color: focused ? "#c9a84c" : "rgba(18,53,36,0.55)", transition: "color 0.3s" }}>
        {label}
      </label>
      <div className="relative">
        <input
          type={type} name={name} value={value} onChange={onChange}
          placeholder={placeholder}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          className="inp-field w-full bg-transparent px-0 py-3 text-sm text-[#123524] placeholder:text-[#123524]/25 outline-none border-b-[1.5px] transition-all duration-300"
          style={{ borderBottomColor: error ? "#e05858" : focused ? "#c9a84c" : "rgba(18,53,36,0.15)" }}
        />
        <span className="absolute bottom-0 left-0 h-[1.5px] bg-[#c9a84c] transition-all duration-400"
          style={{ width: focused ? "100%" : "0%" }} />
      </div>
      <AnimatePresence>
        {error && (
          <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="mt-1.5 text-xs" style={{ color: "#e05858" }}>{error}</motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function ScrollReveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} className={className}
      initial="hidden" animate={inView ? "show" : "hidden"}
      custom={delay} variants={fadeUp}>
      {children}
    </motion.div>
  );
}

/* ─── Main Page ───────────────────────────────────────────── */
export default function SampleInquiry() {
  const [formData, setFormData] = useState<FormData>({
    name: "", company: "", email: "", phone: "",
    product: "", quantity: "", address: "", message: "",
  });
  const [errors, setErrors]   = useState<Partial<FormData>>({});
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY    = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!formData.name.trim())    e.name    = "Full name is required";
    if (!formData.company.trim()) e.company = "Company name is required";
    if (!formData.email.trim())   e.email   = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) e.email = "Invalid email address";
    if (!formData.phone.trim())   e.phone   = "Phone is required";
    else if (!/^[6-9]\d{9}$/.test(formData.phone)) e.phone = "Enter valid 10-digit mobile number";
    if (!formData.product)        e.product  = "Please select a product";
    if (!formData.quantity.trim()) e.quantity = "Quantity is required";
    if (!formData.address.trim()) e.address  = "Delivery address is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(p => ({ ...p, [name]: value }));
    setErrors(p => ({ ...p, [name]: "" }));
    if (name === "product") setSelectedProduct(value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1400));
    setSubmitting(false);
    setSuccess(true);
    setFormData({ name:"",company:"",email:"",phone:"",product:"",quantity:"",address:"",message:"" });
    setSelectedProduct(null);
    setTimeout(() => setSuccess(false), 5000);
  };

  const [referenceId] = useState(
    () => `BXA-${Math.random().toString(36).slice(2, 8).toUpperCase()}`
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        .inq-page { font-family: 'DM Sans', sans-serif; }
        .display  { font-family: 'Cormorant Garamond', serif; }

        /* Subtle grain */
        .grain::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 1;
        }

        /* Custom select */
        .prem-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23c9a84c' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0 center;
        }

        /* Product card */
        .prod-card {
          transition: all 0.3s cubic-bezier(0.25,1,0.5,1);
          cursor: pointer;
        }
        .prod-card:hover, .prod-card.active {
          background: rgba(201,168,76,0.08) !important;
          border-color: rgba(201,168,76,0.5) !important;
          transform: translateX(6px);
        }

        /* Process step */
        .step-line { position: relative; }
        .step-line::before {
          content: ''; position: absolute;
          left: 19px; top: 48px; bottom: -24px; width: 1px;
          background: linear-gradient(to bottom, rgba(201,168,76,0.3), transparent);
        }
        .step-line:last-child::before { display: none; }

        /* Submit button shimmer */
        .submit-btn { position: relative; overflow: hidden; }
        .submit-btn::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }
        .submit-btn:hover::after { transform: translateX(100%); }

        /* Stat counter */
        @keyframes count-up { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }

        /* Hero particles */
        @keyframes drift1 { 0%,100%{transform:translate(0,0) rotate(0deg)} 33%{transform:translate(14px,-20px) rotate(8deg)} 66%{transform:translate(-8px,-12px) rotate(-5deg)} }
        @keyframes drift2 { 0%,100%{transform:translate(0,0) rotate(0deg)} 33%{transform:translate(-16px,-18px) rotate(-7deg)} 66%{transform:translate(10px,-8px) rotate(4deg)} }
        @keyframes drift3 { 0%,100%{transform:translate(0,0) rotate(0deg)} 50%{transform:translate(12px,-24px) rotate(10deg)} }
        .dp1 { animation: drift1 14s ease-in-out infinite; }
        .dp2 { animation: drift2 17s ease-in-out infinite 2s; }
        .dp3 { animation: drift3 12s ease-in-out infinite 5s; }
        .dp4 { animation: drift1 20s ease-in-out infinite 3s; }
        .dp5 { animation: drift2 15s ease-in-out infinite 7s; }

        @keyframes shimmer-line {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .gold-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,76,0.6) 50%, transparent);
          background-size: 200% auto;
          animation: shimmer-line 4s linear infinite;
        }
      `}</style>

      <main className="inq-page">

        {/* ══════════════════════════════════════
            HERO SECTION
        ══════════════════════════════════════ */}
        <section
          ref={heroRef}
          className="grain relative flex min-h-[88vh] flex-col items-center justify-center overflow-hidden"
          style={{ background: "linear-gradient(155deg, #071a12 0%, #0d2b1e 50%, #0a2318 100%)" }}
        >
          {/* Radial glow */}
          <div className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse 70% 55% at 50% 90%, rgba(201,168,76,0.09) 0%, transparent 70%)" }} />

          {/* Floating product emojis */}
          {[
            { cls: "dp1", label: "🌿", style: { top: "18%", left: "8%",  fontSize: "2rem",  opacity: 0.18 } },
            { cls: "dp2", label: "⚪", style: { top: "30%", right: "9%", fontSize: "1.8rem", opacity: 0.15 } },
            { cls: "dp3", label: "🍄", style: { top: "65%", left: "14%", fontSize: "2.2rem", opacity: 0.14 } },
            { cls: "dp4", label: "🧅", style: { top: "20%", right: "22%",fontSize: "1.6rem", opacity: 0.12 } },
            { cls: "dp5", label: "🌿", style: { top: "70%", right: "7%", fontSize: "2rem",  opacity: 0.13 } },
          ].map((p, i) => (
            <div key={i} className={`pointer-events-none absolute ${p.cls}`} style={p.style}>{p.label}</div>
          ))}

          {/* Decorative lines */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 right-0" style={{ height: "1px", background: "rgba(201,168,76,0.15)" }} />
            <div className="absolute bottom-0 left-0 right-0" style={{ height: "1px", background: "rgba(201,168,76,0.15)" }} />
            <div className="absolute top-0 bottom-0 left-[12%]" style={{ width: "1px", background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.08), transparent)" }} />
            <div className="absolute top-0 bottom-0 right-[12%]" style={{ width: "1px", background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.08), transparent)" }} />
          </div>

          <motion.div style={{ y: heroY, opacity: heroOpacity }}
            className="relative z-10 flex flex-col items-center px-6 text-center">

            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.35em" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="display mb-6 text-xs uppercase"
              style={{ color: "rgba(201,168,76,0.65)", fontStyle: "italic" }}>
              BharatXAgro · Premium Exports
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25,1,0.5,1] }}
              className="display text-white"
              style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.01em" }}>
              Request a<br />
              <span style={{ fontStyle: "italic", color: "#c9a84c" }}>Sample</span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="my-8 h-[1px] w-24 origin-left"
              style={{ background: "linear-gradient(to right, #c9a84c, transparent)" }} />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="max-w-lg text-base font-light leading-relaxed"
              style={{ color: "rgba(255,255,255,0.5)" }}>
              {`Experience the quality of India's finest agricultural produce
              before committing to bulk procurement.`}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-10 flex items-center gap-3">
              <a href="#inquiry-form"
                className="submit-btn rounded-full px-8 py-3.5 text-sm font-medium tracking-[0.12em] uppercase transition-all duration-300 hover:-translate-y-1"
                style={{ background: "#c9a84c", color: "#0d1f16", letterSpacing: "0.1em" }}>
                Begin Inquiry
              </a>
              <a href="#why-samples"
                className="rounded-full px-8 py-3.5 text-sm tracking-[0.1em] uppercase transition-all duration-300 hover:-translate-y-1"
                style={{ border: "1px solid rgba(201,168,76,0.3)", color: "rgba(255,255,255,0.6)", background: "transparent" }}>
                Learn More
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll indicator 
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "rgba(255,255,255,0.25)" }}>Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}
              className="w-[1px] h-8"
              style={{ background: "linear-gradient(to bottom, rgba(201,168,76,0.5), transparent)" }} />
          </motion.div>*/}
        </section>

        {/* ══════════════════════════════════════
            TRUST STATS BAR
        ══════════════════════════════════════ */}
        <section style={{ background: "#0d2b1e" }}>
          <div className="gold-line" />
          <div className="mx-auto max-w-6xl px-8 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {trustBadges.map((b, i) => (
                <ScrollReveal key={b.label} delay={i * 0.08} className="text-center">
                  <p className="display text-4xl font-light" style={{ color: "#c9a84c" }}>{b.value}</p>
                  <p className="mt-1 text-xs tracking-[0.14em] uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>{b.label}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
          <div className="gold-line" />
        </section>

        {/* ══════════════════════════════════════
            WHY REQUEST SAMPLES
        ══════════════════════════════════════ */}
        <section id="why-samples" className="py-28 px-6"
          style={{ background: "linear-gradient(180deg, #faf8f3 0%, #f4f0e6 100%)" }}>
          <div className="mx-auto max-w-6xl">
            <ScrollReveal className="mb-16 text-center">
              <p className="display mb-3 text-xs tracking-[0.3em] uppercase italic" style={{ color: "rgba(18,53,36,0.4)" }}>
                Why Choose Samples
              </p>
              <h2 className="display text-[#123524]"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)", fontWeight: 300, lineHeight: 1.1 }}>
                Zero-risk procurement,<br /><span style={{ fontStyle: "italic", color: "#c9a84c" }}>100% confidence.</span>
              </h2>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyReasons.map((r, i) => (
                <ScrollReveal key={r.title} delay={i * 0.1}>
                  <div className="group rounded-2xl p-7 h-full transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_60px_-12px_rgba(18,53,36,0.15)]"
                    style={{ background: "white", border: "1px solid rgba(18,53,36,0.06)" }}>
                    <div className="mb-5 text-lg font-light" style={{ color: "#c9a84c" }}>{r.icon}</div>
                    <h3 className="display mb-3 text-xl font-medium" style={{ color: "#123524" }}>{r.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(18,53,36,0.55)" }}>{r.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            AVAILABLE PRODUCTS SHOWCASE
        ══════════════════════════════════════ */}
        <section className="py-28 px-6 grain relative overflow-hidden"
          style={{ background: "#123524" }}>
          <div className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)" }} />

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <p className="display mb-4 text-xs tracking-[0.3em] uppercase italic" style={{ color: "rgba(201,168,76,0.5)" }}>
                  Our Collection
                </p>
                <h2 className="display text-white mb-6"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", fontWeight: 300, lineHeight: 1.1 }}>
                  Curated for the<br /><span style={{ fontStyle: "italic", color: "#c9a84c" }}>{`world's finest tables`}.</span>
                </h2>
                <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Each product is sourced from certified farms across India,
                  processed under ISO 22000 standards, and tested before dispatch.
                </p>
                <div className="flex gap-4 flex-wrap">
                  {["APEDA Certified", "FSSAI Licensed", "ISO 22000"].map(c => (
                    <span key={c} className="rounded-full px-4 py-1.5 text-xs tracking-[0.1em] uppercase"
                      style={{ border: "1px solid rgba(201,168,76,0.25)", color: "rgba(201,168,76,0.65)" }}>{c}</span>
                  ))}
                </div>
              </ScrollReveal>

              <div className="space-y-3">
                {products.map((p, i) => (
                  <ScrollReveal key={p.name} delay={i * 0.08}>
                    <div
                      className="prod-card flex items-center gap-4 rounded-xl p-4"
                      style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
                      onClick={() => setSelectedProduct(selectedProduct === p.name ? null : p.name)}
                    >
                      <span className="text-2xl">{p.icon}</span>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white">{p.name}</p>
                        <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{p.note}</p>
                      </div>
                      <div className="text-xs tracking-[0.1em] uppercase px-3 py-1 rounded-full"
                        style={{ background: "rgba(201,168,76,0.1)", color: "#c9a84c" }}>
                        Sample Available
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            PROCESS STEPS
        ══════════════════════════════════════ */}
        <section className="py-28 px-6" style={{ background: "#faf8f3" }}>
          <div className="mx-auto max-w-5xl">
            <ScrollReveal className="mb-16 text-center">
              <p className="display mb-3 text-xs tracking-[0.3em] uppercase italic" style={{ color: "rgba(18,53,36,0.4)" }}>
                How It Works
              </p>
              <h2 className="display text-[#123524]"
                style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", fontWeight: 300, lineHeight: 1.1 }}>
                Simple. Transparent.<br /><span style={{ fontStyle: "italic", color: "#c9a84c" }}>Assured.</span>
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-4 gap-0">
              {processSteps.map((s, i) => (
                <ScrollReveal key={s.num} delay={i * 0.12} className="step-line px-6 first:pl-0 last:pr-0">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0 text-sm font-light"
                      style={{ background: "rgba(201,168,76,0.12)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.2)", fontFamily: "Cormorant Garamond, serif" }}>
                      {s.num}
                    </div>
                    {i < 3 && <div className="flex-1 h-[1px] hidden md:block"
                      style={{ background: "linear-gradient(to right, rgba(201,168,76,0.3), transparent)" }} />}
                  </div>
                  <h3 className="display text-lg font-medium mb-2" style={{ color: "#123524" }}>{s.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(18,53,36,0.5)" }}>{s.desc}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            INQUIRY FORM
        ══════════════════════════════════════ */}
        <section id="inquiry-form" className="py-28 px-6"
          style={{ background: "linear-gradient(160deg, #f4f0e6 0%, #faf8f3 100%)" }}>
          <div className="mx-auto max-w-6xl">

            <ScrollReveal className="mb-16 text-center">
              <p className="display mb-3 text-xs tracking-[0.3em] uppercase italic" style={{ color: "rgba(18,53,36,0.4)" }}>
                Get Started
              </p>
              <h2 className="display text-[#123524]"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)", fontWeight: 300, lineHeight: 1.1 }}>
                Request Your <span style={{ fontStyle: "italic", color: "#c9a84c" }}>Sample</span>
              </h2>
            </ScrollReveal>

            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 items-start">

              {/* ── Left Panel ── */}
              <motion.div
                initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
                variants={fadeLeft}
                className="grain relative overflow-hidden rounded-3xl p-10 text-white"
                style={{ background: "linear-gradient(145deg, #0d2b1e, #123524)" }}>

                <div className="pointer-events-none absolute top-0 right-0 w-48 h-48"
                  style={{ background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)" }} />

                <p className="display mb-2 text-xs tracking-[0.25em] uppercase italic"
                  style={{ color: "rgba(201,168,76,0.5)" }}>Sample Catalogue</p>
                <h3 className="display mb-8 text-3xl font-light" style={{ color: "white" }}>
                  Available<br /><span style={{ fontStyle: "italic", color: "#c9a84c" }}>Products</span>
                </h3>

                <div className="space-y-3">
                  {products.map((p) => (
                    <div key={p.name}
                      className="prod-card flex items-center gap-3 rounded-xl p-3.5"
                      style={{
                        border: `1px solid ${selectedProduct === p.name ? "rgba(201,168,76,0.45)" : "rgba(255,255,255,0.07)"}`,
                        background: selectedProduct === p.name ? "rgba(201,168,76,0.08)" : "rgba(255,255,255,0.03)",
                      }}
                      onClick={() => {
                        setSelectedProduct(p.name);
                        setFormData(prev => ({ ...prev, product: p.name }));
                        setErrors(prev => ({ ...prev, product: "" }));
                      }}
                    >
                      <span>{p.icon}</span>
                      <span className="text-sm font-light text-white/80">{p.name}</span>
                      {selectedProduct === p.name && (
                        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}
                          className="ml-auto w-1.5 h-1.5 rounded-full" style={{ background: "#c9a84c" }} />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  <p className="display text-xs tracking-[0.2em] uppercase mb-4"
                    style={{ color: "rgba(201,168,76,0.5)", fontStyle: "italic" }}>Contact Direct</p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                    exports@bharatxagro.com<br />
                    Export Tower, New Delhi, India<br />
                    Response within 24 hours
                  </p>
                </div>
              </motion.div>

              {/* ── Form ── */}
              <motion.form
                initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
                variants={fadeRight}
                onSubmit={handleSubmit}
                className="rounded-3xl p-10"
                style={{ background: "white", boxShadow: "0 24px 80px -16px rgba(18,53,36,0.1), 0 0 0 1px rgba(18,53,36,0.04)" }}>

                <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
                  <InputField label="Full Name"    name="name"    value={formData.name}    onChange={handleChange} error={errors.name} />
                  <InputField label="Company Name" name="company" value={formData.company} onChange={handleChange} error={errors.company} />
                  <InputField label="Email Address" name="email"  value={formData.email}   onChange={handleChange} error={errors.email} type="email" />
                  <InputField label="Phone Number"  name="phone"  value={formData.phone}   onChange={handleChange} error={errors.phone} placeholder="+91 XXXXX XXXXX" />
                </div>

                {/* Product select */}
                <div className="mt-8">
                  <label className="block mb-2 text-xs tracking-[0.14em] uppercase font-medium"
                    style={{ color: "rgba(18,53,36,0.55)" }}>Product</label>
                  <select
                    name="product" value={formData.product} onChange={handleChange}
                    className="prem-select w-full bg-transparent py-3 text-sm text-[#123524] outline-none border-b-[1.5px] pr-6 transition-colors duration-300"
                    style={{ borderBottomColor: errors.product ? "#e05858" : "rgba(18,53,36,0.15)" }}>
                    <option value="">Select a product…</option>
                    {products.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
                  </select>
                  <AnimatePresence>
                    {errors.product && (
                      <motion.p initial={{ opacity:0, y:-4 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }}
                        className="mt-1.5 text-xs" style={{ color: "#e05858" }}>{errors.product}</motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mt-8">
                  <InputField label="Sample Quantity" name="quantity" value={formData.quantity}
                    onChange={handleChange} error={errors.quantity} placeholder="e.g. 500g / 1kg" />
                </div>

                {/* Address */}
                <div className="mt-8">
                  <label className="block mb-2 text-xs tracking-[0.14em] uppercase font-medium"
                    style={{ color: "rgba(18,53,36,0.55)" }}>Delivery Address</label>
                  <textarea rows={3} name="address" value={formData.address} onChange={handleChange}
                    className="w-full bg-transparent py-3 text-sm text-[#123524] placeholder:text-[#123524]/25 outline-none border-b-[1.5px] resize-none transition-colors duration-300"
                    style={{ borderBottomColor: errors.address ? "#e05858" : "rgba(18,53,36,0.15)" }} />
                  <AnimatePresence>
                    {errors.address && (
                      <motion.p initial={{ opacity:0, y:-4 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }}
                        className="mt-1.5 text-xs" style={{ color: "#e05858" }}>{errors.address}</motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Notes */}
                <div className="mt-8">
                  <label className="block mb-2 text-xs tracking-[0.14em] uppercase font-medium"
                    style={{ color: "rgba(18,53,36,0.55)" }}>Additional Notes <span style={{ color: "rgba(18,53,36,0.3)" }}>(optional)</span></label>
                  <textarea rows={3} name="message" value={formData.message} onChange={handleChange}
                    className="w-full bg-transparent py-3 text-sm text-[#123524] placeholder:text-[#123524]/25 outline-none border-b-[1.5px] resize-none"
                    style={{ borderBottomColor: "rgba(18,53,36,0.15)" }} />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="submit-btn mt-10 w-full rounded-full py-4 text-sm font-medium tracking-[0.14em] uppercase transition-all duration-400"
                  style={{
                    background: submitting ? "rgba(18,53,36,0.4)" : "#123524",
                    color: submitting ? "rgba(255,255,255,0.5)" : "#c9a84c",
                    letterSpacing: "0.12em",
                    boxShadow: submitting ? "none" : "0 8px 32px -8px rgba(18,53,36,0.45)",
                  }}>
                  {submitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="30" strokeDashoffset="10" />
                      </svg>
                      Processing…
                    </span>
                  ) : "Submit Sample Inquiry →"}
                </motion.button>

                <p className="mt-4 text-center text-xs" style={{ color: "rgba(18,53,36,0.3)" }}>
                  Our team responds within 24 business hours.
                </p>
              </motion.form>
            </div>
          </div>
        </section>

      </main>

      {/* ══════════════════════════════════════
          SUCCESS MODAL
      ══════════════════════════════════════ */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-6"
            style={{ background: "rgba(7,26,18,0.75)", backdropFilter: "blur(8px)" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1,    y: 0  }}
              exit={{   opacity: 0, scale: 0.9,   y: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="max-w-md w-full rounded-3xl p-12 text-center relative overflow-hidden"
              style={{ background: "white", boxShadow: "0 40px 100px -20px rgba(0,0,0,0.4)" }}>

              {/* Gold top stripe */}
              <div className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: "linear-gradient(to right, transparent, #c9a84c, transparent)" }} />

              <motion.div
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.1 }}
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
                style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M5 14l7 7 11-11" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>

              <h3 className="display mb-3 text-3xl font-light" style={{ color: "#123524" }}>
                Inquiry <span style={{ fontStyle: "italic", color: "#c9a84c" }}>Submitted</span>
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(18,53,36,0.55)" }}>
                Thank you for requesting samples. Our export team will review your inquiry and reach out within 24 hours.
              </p>
              <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(18,53,36,0.06)" }}>
                <p className="text-xs tracking-[0.1em]">
                  Reference ID: {referenceId}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}