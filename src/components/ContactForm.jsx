"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// ✅ Always render motion.div (no hydration mismatch)
function SafeMotionDiv({ children, ...props }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Only enable motion props if mounted
  const motionProps = mounted
    ? props
    : { initial: false, animate: false, whileHover: false, whileTap: false };

  return <motion.div {...motionProps}>{children}</motion.div>;
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      {/* Title */}
      <SafeMotionDiv
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-center">
          The Influencer Network Contact Page
        </h1>
        <p className="mt-2 text-center text-muted">
          Ready to elevate your brand? Tell us about your campaign.
        </p>
      </SafeMotionDiv>

      {/* Card Section */}
      <div className="mt-12 grid md:grid-cols-2 gap-12 items-stretch">
        {/* Contact Form with red-black blurred background */}
        <SafeMotionDiv
          className="relative flex flex-col rounded-2xl shadow-xl p-6 
          bg-gradient-to-br from-red-400 via-gray-800 to-red-600
          backdrop-blur-md text-white"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{
            scale: 1.03,
            rotate: -1.5,
            boxShadow: "0px 12px 30px rgba(0,0,0,0.25)",
          }}
        >
          <form className="flex flex-col gap-4 flex-grow">
            <input
              className="rounded border border-gray-400/40 bg-white/10 text-white px-3 py-2 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Name"
            />
            <input
              className="rounded border border-gray-400/40 bg-white/10 text-white px-3 py-2 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Email"
            />
            <input
              className="rounded border border-gray-400/40 bg-white/10 text-white px-3 py-2 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Phone"
            />
            <input
              className="rounded border border-gray-400/40 bg-white/10 text-white px-3 py-2 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Company"
            />
            <textarea
              className="rounded border border-gray-400/40 bg-white/10 text-white px-3 py-2 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
              rows={5}
              placeholder="Message"
            />
            <button className="rounded bg-red-600 hover:bg-red-700 transition px-4 py-2 text-white font-semibold w-max">
              Request a call back
            </button>
          </form>

          {/* WhatsApp QR + Arrow */}
          <div className="mt-6 flex items-center gap-4">
            <SafeMotionDiv
              whileHover={{
                scale: 1.1,
                rotate: 2,
                boxShadow:
                  "0px 10px 25px rgba(255,0,0,0.6), 0px 0px 15px rgba(0,0,0,0.8)",
              }}
            >
              <Image
                src="/WhatsappQR.jpg"
                alt="WhatsApp QR"
                width={100}
                height={100}
                className="rounded-lg border shadow-md"
                priority
              />
            </SafeMotionDiv>
            <SafeMotionDiv
              initial={{ x: 0 }}
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-green-400 font-medium"
            >
              ← Scan the QR to chat with us!
            </SafeMotionDiv>
          </div>
        </SafeMotionDiv>

        {/* Phone Image (keeps aspect ratio like a real phone) */}
        <SafeMotionDiv
          className="relative flex justify-center items-stretch"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{
            scale: 1.05,
            rotate: 1,
            boxShadow: "0px 12px 30px rgba(0,0,0,0.25)",
          }}
        >
          <div className="w-full max-w-[320px] aspect-[9/19] h-full">
            <Image
              src="/Contact.jpg" // replace with your own image
              alt="Chat Preview"
              fill
              className="rounded-lg object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </SafeMotionDiv>
      </div>

      {/* Footer Info */}
      <div className="mt-12 text-center text-sm text-muted space-y-1">
        <p>Email: info@influencernetwork.in</p>
        <p>Phone: +91 6209767269</p>
        <p>
          SpringSpace, 2nd Floor, Kanti Factory Rd, Kankarbagh, Patna, Bihar
          800020
        </p>
      </div>
    </div>
  );
}
