"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const [formType, setFormType] = useState("brand");
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const formRef = useRef(null); // Add form ref

  useEffect(() => setMounted(true), []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formRef.current) return; // Ensure form exists

    const formData = new FormData(formRef.current);
    const payload = Object.fromEntries(formData.entries());
    payload.formType = formType;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        console.error("Server did not return JSON:", text);
        toast.error("Server error! Please try again.");
        return;
      }

      if (res.ok) {
        toast.success(`Message submitted successfully as ${formType}! 🎉`, {
          duration: 3000,
        });
        formRef.current.reset(); // Use ref to reset form
        setTimeout(() => router.push("/"), 2000);
      } else {
        toast.error("Error: " + (data?.error || "Unknown error"));
      }
    } catch (err) {
      console.error("❌ Submit failed:", err);
      toast.error("Network error! Please check your connection.");
    }
  }

  if (!mounted) return null; // Avoid SSR mismatch

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      {/* NEW Heading + Subheading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-10 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-red-600">
          Let’s Connect
        </h2>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          Want to take your brand to the next level with influencer marketing
          that truly works? Reach out today and let’s craft your perfect
          campaign.
        </p>
      </motion.div>

      {/* Title */}
      {/* <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-center">
          The Influencer Network Contact Page
        </h1>
        <p className="mt-2 text-center text-gray-500">
          Ready to elevate your brand? Tell us about your campaign.
        </p>
      </motion.div> */}

      {/* Card Section */}
      <div className="mt-12 grid md:grid-cols-2 gap-12 items-stretch">
        {/* Left Side */}
        <motion.div
          className="relative flex flex-col rounded-2xl shadow-xl p-6 bg-gradient-to-br from-red-400 via-gray-800 to-red-600 backdrop-blur-md text-white"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Tabs */}
          <div className="flex gap-4 mb-6">
            <button
              type="button"
              onClick={() => setFormType("brand")}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                formType === "brand"
                  ? "bg-white text-red-600 shadow-md"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              Brands
            </button>
            <button
              type="button"
              onClick={() => setFormType("creator")}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                formType === "creator"
                  ? "bg-white text-red-600 shadow-md"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              Creators
            </button>
          </div>

          {/* Animated Form Switch */}
          <AnimatePresence mode="wait">
            {formType === "brand" ? (
              <motion.form
                key="brand"
                ref={formRef} // attach ref here
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 flex-grow"
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <input name="brandName" placeholder="Brand Name" className={input} />
                <input name="website" placeholder="Website / App Link" className={input} />
                <input name="phone" placeholder="Phone Number" className={input} />
                <input name="email" placeholder="Email Address" className={input} />
                <textarea name="message" rows={4} placeholder="Message" className={input} />
                <button type="submit" className={btn}>
                  Submit as Brand
                </button>
              </motion.form>
            ) : (
              <motion.form
                key="creator"
                ref={formRef} // attach ref here too
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 flex-grow"
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <input name="fullName" placeholder="Full Name" className={input} />
                <input name="socialLink" placeholder="Social Media Link" className={input} />
                <input name="phone" placeholder="Phone Number" className={input} />
                <input name="email" placeholder="Email Address" className={input} />
                <button type="submit" className={btn}>
                  Get Sponsorship
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          {/* WhatsApp QR + Arrow */}
          <motion.div
            className="mt-6 flex items-center gap-4"
            whileHover={{ scale: 1.1, rotate: 2 }}
          >
            <Image
              src="/WhatsappQR.jpg"
              alt="WhatsApp QR"
              width={100}
              height={100}
              className="rounded-lg border shadow-md"
            />
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-green-400 font-medium"
            >
              ← Scan the QR to chat with us!
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="relative flex justify-center items-stretch"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-full max-w-[320px] aspect-[9/19] h-full">
            <Image
              src="/Contact.jpg"
              alt="Chat Preview"
              fill
              className="rounded-lg object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-sm text-gray-400 space-y-1">
        <p>Email: info@influencernetwork.in</p>
        <p>Email: collab@influencernetwork.in</p>
        <p>Phone: +91 6209767269</p>
        {/* <p>Sector 16C, Gaur City 2, Greater Noida, Uttar Pradesh 201318</p> */}
      </div>
    </div>
  );
}

const input =
  "rounded-lg border border-gray-300 bg-white/90 text-gray-900 px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 shadow-sm transition";
const btn =
  "rounded-lg bg-red-600 hover:bg-red-700 transition px-6 py-2.5 text-white font-semibold shadow-md hover:shadow-lg active:scale-95 w-max self-center";
