"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    brand: "PhysicsWallah",
    logo: "/BrandGif/PW.jpg",
    quote:
      "The Influencer Network helped us connect with authentic educators who truly resonated with our students. It boosted our brand credibility massively.",
    name: "Team PW",
  },
  {
    brand: "Swiggy",
    logo: "/BrandGif/Swiggy.png",
    quote:
      "Amazing platform! We collaborated with local influencers seamlessly. Campaigns were smooth and ROI was beyond expectations.",
    name: "Marketing Head, Swiggy",
  },
  {
    brand: "Zomato",
    logo: "/BrandGif/zomato.jpg",
    quote:
      "The Influencer Network made it effortless to find food bloggers and content creators. Engagement shot up like never before!",
    name: "Growth Team, Zomato",
  },
  {
    brand: "Cashify",
    logo: "/BrandGif/cashify.png",
    quote:
      "A game changer for brand collaborations! We reached niche audiences that aligned perfectly with our business.",
    name: "Cashify Team",
  },
  {
    brand: "Decathlon",
    logo: "/BrandGif/Decathalon.webp",
    quote:
      "Super smooth influencer onboarding and collaborations. Campaign success rate was beyond expectations!",
    name: "Decathlon India",
  },
];

export default function Testimonials() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const loopTestimonials = [...testimonials, ...testimonials]; // duplicate for seamless scroll

  return (
    <div className="w-full py-20 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
          What Brands Say About{" "}
          <span className="text-red-600">The Influencer Network</span>
        </h2>

        {/* Continuous scrolling testimonial cards */}
        <motion.div
          className="flex gap-6 cursor-pointer"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {loopTestimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-4 w-60 h-60 sm:w-64 sm:h-64 lg:w-64 lg:h-64 flex-shrink-0 flex flex-col items-center justify-center hover:shadow-[0_0_30px_rgba(255,0,0,0.6),0_0_20px_rgba(0,0,0,0.6)] transition-all duration-500"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={testimonial.logo}
                alt={testimonial.brand}
                className="w-16 h-16 object-cover rounded-full shadow-md mb-4"
              />
              <p className="text-sm italic leading-relaxed text-center text-gray-700">
                "{testimonial.quote}"
              </p>
              <h4 className="mt-4 text-md font-semibold text-gray-900">
                {testimonial.brand}
              </h4>
              <span className="text-xs text-gray-500">{testimonial.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
