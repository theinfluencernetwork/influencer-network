"use client";

import Link from "next/link";
import LogosCarousel from "@/components/LogosCarousel";
import HeroPhone from "@/components/HeroPhone";
import CitiesGrid from "@/components/CitiesGrid";
import BrandCard from "@/components/BrandCard";
import Testimonial from "@/components/Testimonial";
import Services from "@/components/Services";
import InfluencerNetwork from "@/components/InfluencerNetwork";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const servicesRef = useRef(null);
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef(null);

  // Scroll to Services
  const handleScrollToServices = (e) => {
    e.preventDefault();
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <main className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-primary/5 to-white relative">
        <div className="mx-auto max-w-6xl min-h-[80vh] px-4 py-12 sm:py-20 flex flex-col gap-10 sm:flex-row sm:items-center">
          {/* Text content */}
          <div className="space-y-6 sm:w-1/2">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Amplify your <span className="text-red-600">Brand</span> through{" "}
              <span className="text-red-600">influencer</span>
              <br />
              Marketing
            </h1>
            <p className="text-muted text-base sm:text-lg">
              Collaborate with 100,000+ influencers and make your brand
              impossible to ignore.
            </p>
            <div className="flex gap-3 flex-wrap relative" ref={dropdownRef}>
              {/* Get Started Button with Options */}
              <button
                onClick={() => setShowOptions((prev) => !prev)}
                className="rounded bg-primary px-5 py-3 text-primary-foreground hover:opacity-90 relative transition-all duration-300"
              >
                Let’s Go
              </button>
              {showOptions && (
                <div
                  className="absolute top-full mt-3 left-0 bg-white border border-gray-200 
                  rounded-xl shadow-2xl z-20 w-56 overflow-hidden animate-fadeIn"
                >
                  <Link
                    href="/influencers"
                    className="group block px-5 py-3 text-gray-700 font-medium hover:bg-gradient-to-r hover:from-red-500 hover:to-black hover:text-white transition-all duration-300"
                    onClick={() => setShowOptions(false)}
                  >
                    <span className="mr-2 group-hover:hidden">👤</span>
                    <span className="mr-2 hidden group-hover:inline">👩</span>I
                    am a Creator
                  </Link>
                  <Link
                    href="/campaigns"
                    className="block px-5 py-3 text-gray-700 font-medium hover:bg-gradient-to-r hover:from-black hover:to-red-500 hover:text-white transition-all duration-300"
                    onClick={() => setShowOptions(false)}
                  >
                    🎯 I am a Brand
                  </Link>
                </div>
              )}

              {/* Our Services scroll button */}
              <button
                onClick={handleScrollToServices}
                className="rounded border border-border px-5 py-3 hover:bg-black/5 transition-all duration-300"
              >
                Our Services
              </button>
            </div>
          </div>

          {/* HeroPhone responsive */}
          <div className="flex justify-center sm:w-1/2">
            <HeroPhone phoneImage="/influencer-gif.webp" />
          </div>
        </div>

        {/* Full-width logos carousel */}
        <div className="w-full">
          <LogosCarousel />
        </div>
      </section>

      {/* Influencers by City */}
      <section className="w-full px-4 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold relative inline-block group cursor-pointer">
            Your City’s , <span className="text-red-600">Influencers</span> just
            a click away
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-black to-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
          </h2>
          <div className="mt-8">
            <CitiesGrid />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* Stats Section */}
      <section className="w-full bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            {/* Influencers */}
            <div className="flex flex-col items-center">
              <p className="text-4xl md:text-5xl font-extrabold text-red-500">
                100,000+
              </p>
              <p className="mt-1 text-lg font-semibold text-white">
                Influencers
              </p>
              <p className="mt-2 text-base text-gray-400">
                Across all platforms
              </p>
            </div>

            {/* Brand Collaborations */}
            <div className="flex flex-col items-center">
              <p className="text-4xl md:text-5xl font-extrabold text-red-500">
                500+
              </p>
              <p className="mt-1 text-lg font-semibold text-white">
                Brand Collaborations
              </p>
              <p className="mt-2 text-base text-gray-400">Across industries</p>
            </div>

            {/* Audience Reach */}
            <div className="flex flex-col items-center">
              <p className="text-4xl md:text-5xl font-extrabold text-red-500">
                50M+
              </p>
              <p className="mt-1 text-lg font-semibold text-white">
                Audience Reach
              </p>
              <p className="mt-2 text-base text-gray-400">Nationwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* About + Services */}
      <div ref={servicesRef}>
        <Services />
      </div>

      {/* Influencer Network Section */}
      <section className="w-full px-4 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <InfluencerNetwork />
        </div>
      </section>

      {/* Brands */}
      <section className="w-full px-4 pb-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold relative inline-block group cursor-pointer">
             <span className="text-red-600">Brands</span>  Who Believe in Us!
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-black to-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
          </h2>
          <div className="mt-6">
            <BrandCard />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full px-4 pt-2 pb-8 bg-white">
        <section className="w-full">
          <Testimonial />
        </section>
      </section>
    </main>
  );
}
