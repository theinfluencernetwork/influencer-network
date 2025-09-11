"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import Marquee from "@/components/Marquee";
import Link from "next/link";
import { influencers , reels , frames , categoryInfluencers} from "@/data/influencers";
import InfluencerGrid from "./influencersGrid";

const categories = [
  "All",
  ...new Set(categoryInfluencers.map((inf) => inf.category)),
];

export default function InfluencerPage() {
  const [selectedReel, setSelectedReel] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Fashion");

  // Filter influencers by category
  const filteredInfluencers =
    selectedCategory === "All"
      ? categoryInfluencers
      : categoryInfluencers.filter((inf) => inf.category === selectedCategory);

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen bg-gradient-to-br from-red-100 via-white to-black/10 py-10 px-6 flex flex-col md:flex-row items-center justify-center md:justify-around md:gap-10">
        {/* Left Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left space-y-6 max-w-lg"
        >
          <h1 className="text-5xl font-bold text-gray-900 leading-snug">
            Collaborate with your <br /> favourite{" "}
            <span className="text-red-600">Brands</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Join <span className="text-red-600">100,000+</span> Indian Creators
          </p>

          <Link href="/forms/influencer">
            <button className="mt-10 px-6 py-3 bg-red-600 text-white rounded-xl shadow-md hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
              Join as Influencer
            </button>
          </Link>
        </motion.div>

        {/* Right Influencer Frames */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10 md:mt-0"
        >
          {frames.map((img, i) => {
            const rotations = [
              "rotate-2",
              "-rotate-3",
              "rotate-6",
              "-rotate-6",
              "rotate-1",
              "-rotate-2",
            ];
            const rotation = rotations[i % rotations.length];
            return (
              //  FIXED: unique key using img + index
              <motion.img
                whileHover={{ scale: 1.08, rotate: 0 }}
                key={img + i}
                src={img}
                alt="Influencer"
                className={`rounded-xl shadow-xl object-cover w-32 h-32 md:w-40 md:h-40 border-4 border-white ${rotation}`}
              />
            );
          })}
        </motion.div>
      </section>

      {/*  Add Marquee right below Hero */}
      <div className="w-full py-10 bg-white">
        <Marquee influencers={influencers} />
      </div>

      {/* Our Work Section */}
      <section className="max-w-7xl mx-auto py-20 px-6 bg-white">
        <div className="flex justify-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 relative inline-block
            after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-red-600 after:left-0 after:-bottom-2 
            after:transition-all after:duration-300 hover:after:w-full"
          >
            Our Work – <span className="text-red-600">Influencer's</span> Reels
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {reels.map((reel) => (
            <motion.div
              key={reel.id}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer rounded-xl overflow-hidden shadow-xl"
              onClick={() => setSelectedReel(reel)}
            >
              {/* Thumbnail Image */}
              <img
                src={reel.thumbnail}
                alt={reel.brand}
                className="object-cover w-full h-72"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition">
                <FaPlay className="text-white text-4xl mb-2" />
                <span className="bg-white text-gray-900 px-3 py-1 rounded-md text-sm font-semibold">
                  {reel.brand}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Modal */}
      {selectedReel && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedReel(null)} // close when clicking outside
        >
          <div
            className="relative bg-black rounded-lg shadow-2xl max-w-md w-full aspect-[9/16] overflow-hidden"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-3 z-10 text-white text-2xl hover:text-red-500"
              onClick={() => setSelectedReel(null)}
            >
              &times;
            </button>

            {/* Local Video Player */}
            <video
              src={selectedReel.videoUrl}
              poster={selectedReel.thumbnail}
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* CATEGORY FILTER + INFLUENCERS GRID */}
      <section className="max-w-7xl mx-auto py-10">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories
            .filter((cat) => cat !== "All") // hide "All" button
            .map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  selectedCategory === cat
                    ? "bg-yellow-500 text-black shadow-md"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
        </div>

        {/* Heading */}
        <h2 className="text-center text-3xl font-bold mb-8">
          {selectedCategory} <span className="text-red-500">Influencers</span>
        </h2>

        {/* Influencers Grid */}
        <InfluencerGrid influencers={filteredInfluencers} />
      </section>
    </div>
  );
}
