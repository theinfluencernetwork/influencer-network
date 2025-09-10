"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "@/components/Marquee";
import LogosCarousel from "@/components/LogosCarousel";

const influencers = [
  {
    id: 101,
    name: "Avneet Kaur",
    followers: "30M",
    img: "/influencers/avneet.jpeg",
    insta: "https://www.instagram.com/avneetkaur_13/",
  },
  {
    id: 102,
    name: "Barkha Singh",
    followers: "3M",
    img: "/influencers/barksha.jpeg",
    insta: "https://www.instagram.com/barkhasingh0308/",
  },
  {
    id: 103,
    name: "Curly Tales",
    followers: "1.2M",
    img: "/influencers/curly.jpeg",
    insta: "https://www.instagram.com/curly.tales/",
  },
  {
    id: 104,
    name: "Ishita Pundeer",
    followers: "2M",
    img: "/influencers/isha.jpeg",
    insta: "https://www.instagram.com/its_me_isha39/",
  },
  {
    id: 105,
    name: "Adarsh Singh",
    followers: "500K",
    img: "/influencers/adarsh.jpeg",
    insta: "https://www.instagram.com/adarshuc/",
  },
  {
    id: 106,
    name: "CarryMinati",
    followers: "20M",
    img: "/influencers/carryminati.jpeg",
    insta: "https://www.instagram.com/carryminati/",
  },
  {
    id: 107,
    name: "Harsh Beniwal",
    followers: "10M",
    img: "/influencers/harsh.jpeg",
    insta: "https://www.instagram.com/harshbeniwal/",
  },
  {
    id: 108,
    name: "Abhishek Malhan",
    followers: "1M",
    img: "/influencers/abhishek.jpeg",
    insta: "https://www.instagram.com/fukra_insaan/",
  },
];

// ✅ Client-only wrapper to avoid hydration mismatch
function ClientOnly({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return children;
}

export default function InfluencerForm() {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(null);
  const [consent, setConsent] = useState(true); // ✅ instead of defaultChecked
  const formRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setMessage(null);
    const form = event.currentTarget;

    const data = {
      fullName: form.fullName.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim() || undefined,
      city: form.city.value.trim() || undefined,
      socialLink: form.socialLink.value.trim() || undefined,
      consent,
    };

    try {
      const res = await fetch("/api/influencers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Submission failed");
      setMessage(" Thanks! We received your application.");
      form.reset();
    } catch (e) {
      setMessage("❌ " + e.message);
    } finally {
      setSubmitting(false);
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-red-500 via-black to-gray-900 text-white py-20 px-6 md:px-12"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold tracking-tight group relative inline-block cursor-pointer">
            Join The Influencer Network <span className="inline-block">🚀</span>
          </h1>

          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Collaborate with top brands, grow your audience, and unlock endless
            opportunities as part of our influencer community.
          </p>
          <button
            onClick={scrollToForm}
            className="mt-8 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-red-600 hover:text-white transition transform hover:scale-105 shadow-lg"
          >
            Fill Form to Join
          </button>
        </div>
      </motion.section>

      {/* MARQUEE SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full py-10 bg-white"
      >
        <ClientOnly>
          <Marquee influencers={influencers} />
        </ClientOnly>
      </motion.div>

      {/* FORM + IMAGE SECTION */}
      <section
        ref={formRef}
        className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
      >
        {/* LEFT SIDE */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h2 className="text-4xl md:text-4xl font-extrabold leading-snug">
              <span className="block text-black text-center">Welcome To</span>
              <span className="block text-Black hover:text-red-600 transition duration-300 cursor-pointer">
                The Influencer Network
              </span>
              <span className="block text-black text-center">Family ❤️</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Let’s get into the beautiful world of influencers with{" "}
              <span className="font-semibold text-red-600">
                The Influencer Network
              </span>
              — where creators and brands unite to build magic together.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-[0_8px_30px_rgba(0,0,0,0.2),0_0_20px_rgba(255,0,0,0.2)] rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Influencer Application Form
            </h3>

            {message && (
              <p
                className={`mb-6 text-center text-sm font-medium ${
                  message.startsWith("✅") ? "text-green-600" : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="fullName"
                  placeholder="Full Name*"
                  required
                  className="border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email*"
                  required
                  className="border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
                <input
                  name="phone"
                  placeholder="Phone"
                  className="border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
                <input
                  name="city"
                  placeholder="City"
                  className="border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </div>

              <input
                name="socialLink"
                placeholder="Social Media Link"
                className="border border-gray-300 px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-red-500 focus:outline-none"
              />

              <label className="inline-flex items-center gap-2">
                <input
                  name="consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
                <span className="text-gray-700">
                  I agree to be contacted for collaborations
                </span>
              </label>

              <button
                disabled={submitting}
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-red-700 transition disabled:opacity-50"
              >
                {submitting ? "Submitting…" : "Submit Application"}
              </button>
            </form>
          </motion.div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <Image
              src="/Influencer-pic-2.jpg"
              alt="Influencer Collaboration Preview"
              width={400}
              height={400}
              loading="lazy"
              className="rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.25),0_0_25px_rgba(255,0,0,0.25)] object-cover transition-transform duration-500 hover:scale-110 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35),0_0_35px_rgba(255,0,0,0.35)]"
            />
          </div>
        </motion.div>
      </section>
      {/* ✅ HOW IT WORKS STEPS SECTION */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">
            See How It Works 🚀
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {/* Step 1 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-3xl shadow-lg">
                🤝
              </div>
              <h3 className="text-lg font-semibold text-gray-700">
                Browse Collaborations
              </h3>
              <p className="text-sm text-gray-500">
                Discover exciting opportunities from leading brands.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-100 text-red-600 text-3xl shadow-lg">
                👍
              </div>
              <h3 className="text-lg font-semibold text-gray-700">
                Accept Campaigns
              </h3>
              <p className="text-sm text-gray-500">
                Join brand campaigns tailored for your profile.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 text-3xl shadow-lg">
                🎁
              </div>
              <h3 className="text-lg font-semibold text-gray-700">
                Get Sponsored Products
              </h3>
              <p className="text-sm text-gray-500">
                Receive free products & exclusive brand perks.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-3xl shadow-lg">
                💰
              </div>
              <h3 className="text-lg font-semibold text-gray-700">
                Earn Secure Payments
              </h3>
              <p className="text-sm text-gray-500">
                Get paid on time for your collaborations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO CAROUSEL */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full">
          <ClientOnly>
            <LogosCarousel />
          </ClientOnly>
        </div>
      </motion.section>
    </div>
  );
}
