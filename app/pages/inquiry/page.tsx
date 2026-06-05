"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  quantity: string;
  address: string;
  message: string;
}

interface InputFieldProps {
  label: string;
  name: keyof FormData;
  value: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  error?: string;
  placeholder?: string;
}

const products = [
  "Moringa Powder",
  "Onion Powder",
  "Makhana",
  "Dry Mushroom",
  "Fresh Mushroom",
];

export default function SampleInquiry() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit mobile number";
    }

    if (!formData.product) {
      newErrors.product = "Please select a product";
    }

    if (!formData.quantity.trim()) {
      newErrors.quantity = "Quantity is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("Sample Inquiry:", formData);

    setSuccess(true);

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      product: "",
      quantity: "",
      address: "",
      message: "",
    });

    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  };

  return (
    <section className="min-h-screen bg-[#f8fbf7] py-24 px-6">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <span className="uppercase tracking-[5px] text-[#1d5c3f] font-semibold">
            BharatXAgro
          </span>

          <h1 className="mt-4 text-5xl md:text-6xl font-bold text-[#123524]">
            Sample Inquiry
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600">
            Request samples of our premium agricultural products before
            finalizing your bulk order.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-[40px] bg-[#123524] p-10 text-white"
          >
            <h2 className="mb-8 text-3xl font-bold">
              Available Sample Products
            </h2>

            <div className="space-y-4">
              {products.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <h3 className="mb-4 text-xl font-semibold text-[#f2c572]">
                Why Request Samples?
              </h3>

              <ul className="space-y-3 text-white/80">
                <li>✓ Verify product quality</li>
                <li>✓ Check aroma, texture and freshness</li>
                <li>✓ Review packaging standards</li>
                <li>✓ Test before bulk procurement</li>
              </ul>
            </div>
          </motion.div>

          {/* Form */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="rounded-[40px] bg-white p-10 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-6">

              <InputField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />

              <InputField
                label="Company Name"
                name="company"
                value={formData.company}
                onChange={handleChange}
                error={errors.company}
              />

              <InputField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />

              <InputField
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
              />
            </div>

            <div className="mt-6">
              <label className="font-medium text-[#123524]">
                Product
              </label>

              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border p-4 outline-none focus:border-[#123524]"
              >
                <option value="">Select Product</option>

                {products.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              {errors.product && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.product}
                </p>
              )}
            </div>

            <div className="mt-6">
              <InputField
                label="Required Sample Quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                error={errors.quantity}
                placeholder="500g / 1kg"
              />
            </div>

            <div className="mt-6">
              <label className="font-medium text-[#123524]">
                Delivery Address
              </label>

              <textarea
                rows={4}
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border p-4 outline-none focus:border-[#123524]"
              />

              {errors.address && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.address}
                </p>
              )}
            </div>

            <div className="mt-6">
              <label className="font-medium text-[#123524]">
                Additional Notes
              </label>

              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border p-4 outline-none focus:border-[#123524]"
              />
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-xl bg-[#123524] py-4 font-semibold text-white transition-all hover:bg-[#0e281d]"
            >
              Submit Sample Inquiry
            </button>
          </motion.form>
        </div>
      </div>

      {/* Success Modal */}

      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          >
            <div className="max-w-md rounded-3xl bg-white p-10 text-center">
              <div className="mb-4 text-5xl">✅</div>

              <h3 className="text-3xl font-bold text-[#123524]">
                Inquiry Submitted
              </h3>

              <p className="mt-3 text-gray-600">
                Thank you for requesting samples. Our team will contact
                you shortly.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function InputField({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
}: InputFieldProps) {
  return (
    <div>
      <label className="font-medium text-[#123524]">
        {label}
      </label>

      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border p-4 outline-none focus:border-[#123524]"
      />

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}