"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LogosCarousel from "@/components/LogosCarousel";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

// Format numbers as K / M
const formatNumber = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "K";
  return num;
};

const caseStudies = [
  {
    title: "Vmart Festive Sale",
    brandLogo: "/brand/vmart.jpeg",
    approach: "Tier-2/3 lifestyle creators | Reels + Stories",
    results: "3M+ organic video views, +15% festive store footfall",
    metrics: [
      { name: "Views", value: 3000000 },
      { name: "Reach", value: 1500000 },
      { name: "Engagement", value: 400000 },
    ],
  },
  {
    title: "Citykart Electronics Campaign",
    brandLogo: "/brand/citykart.png",
    approach: "300+ Tier-2 creators, festive shopping reels",
    results: "+25% conversions, high engagement on discounts",
    metrics: [
      { name: "Views", value: 2500000 },
      { name: "Reach", value: 1800000 },
      { name: "Engagement", value: 600000 },
    ],
  },
  {
    title: "Aditya Vision Awareness",
    brandLogo: "/brand/aditya-vision.jpeg",
    approach: "Cultural + innovative storytelling, 50% admission offer",
    results: "High parent engagement, spike in inquiries",
    metrics: [
      { name: "Views", value: 2000000 },
      { name: "Reach", value: 1200000 },
      { name: "Engagement", value: 300000 },
    ],
  },
  {
    title: "PW Gurukulam Launch",
    brandLogo: "/companies/PW.jpg",
    approach: "Cultural + innovative storytelling",
    results: "High parent engagement, spike in admission inquiries",
    metrics: [
      { name: "Views", value: 2000000 },
      { name: "Reach", value: 1200000 },
      { name: "Engagement", value: 300000 },
    ],
  },
  {
    title: "Unacademy Student Growth",
    brandLogo: "/companies/unacademy.png",
    approach: "800+ Pan-India creators, student-focused content",
    results: "10M+ reach, increased trial signups",
    metrics: [
      { name: "Views", value: 10000000 },
      { name: "Reach", value: 7000000 },
      { name: "Engagement", value: 2000000 },
    ],
  },
  {
    title: "Cashify Refurbished Phones Awareness",
    brandLogo: "/brand/cashify.png",
    approach: "Tier-2 city creators, relatable storytelling",
    results: "20–30% uplift in transactions, more walk-ins",
    metrics: [
      { name: "Views", value: 1500000 },
      { name: "Reach", value: 1000000 },
      { name: "Engagement", value: 250000 },
    ],
  },
];

const campaignImages = [
  "/Campaigns/camp1.jpg",
  "/Campaigns/camp2.jpg",
  "/Campaigns/camp3.jpg",
  "/Campaigns/camp4.jpg",
  "/Campaigns/camp5.jpg",
  "/Campaigns/camp6.jpg",
];

export default function Campaigns() {
  const [campaignPositions, setCampaignPositions] = useState([]);

  useEffect(() => {
    const positions = campaignImages.map(() => ({
      rotation: Math.random() * 8 - 4,
      offsetX: Math.random() * 10 - 5,
      offsetY: Math.random() * 10 - 5,
    }));
    setCampaignPositions(positions);
  }, []);

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-red-600 via-black to-gray-900 text-white py-16 sm:py-20 px-4 sm:px-6 md:px-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
        >
          Brand Campaigns with The Influencer Network
        </motion.h1>
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-gray-200">
          Collaborating with global brands, empowering influencers, and
          delivering impactful campaigns that drive reach, engagement, and real
          business growth.
        </p>
      </section>

      {/* BRAND CAROUSEL */}
      <section className="py-8 sm:py-10 bg-white">
        <LogosCarousel />
      </section>

      {/* HIGHLIGHTS */}
      <motion.section
        className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12 text-gray-800">
          Why Our Campaigns Work?
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {[
            {
              emoji: "✅",
              title: "Authentic Collaborations",
              desc: "We connect brands with influencers whose values align with the campaign, ensuring organic and credible content that resonates with audiences.",
            },
            {
              emoji: "🎯",
              title: "Data-Driven Campaigns",
              desc: "Every strategy is based on analytics and insights. We track metrics like reach, engagement, and conversions to optimize performance and ROI.",
            },
            {
              emoji: "📈",
              title: "Creator Growth",
              desc: "Our campaigns empower influencers to expand their audience, improve engagement, and build credibility, creating a mutually beneficial ecosystem.",
            },
            {
              emoji: "💡",
              title: "Engaging Storytelling",
              desc: "We craft content that is creative, relatable, and tailored to Tier-1 to Tier-3 audiences, driving higher retention and stronger brand recall.",
            },
            {
              emoji: "⚡",
              title: "Rapid Execution",
              desc: "Our workflow is efficient and scalable, ensuring campaigns launch on time, adapt to market trends, and achieve measurable results quickly.",
            },
            {
              emoji: "💼",
              title: "Brand-Influencer Synergy",
              desc: "By understanding both brand goals and influencer strengths, we create campaigns that maximize impact, reach, and authenticity.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex items-start gap-3 sm:gap-4"
            >
              <span className="text-red-600 text-xl sm:text-2xl mt-1">{item.emoji}</span>
              <p className="text-gray-700 text-sm sm:text-base">
                <strong>{item.title}:</strong> {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CAMPAIGN GALLERY */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 bg-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Campaign Gallery
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {campaignImages.map((img, idx) => {
            const pos = campaignPositions[idx] || { rotation: 0, offsetX: 0, offsetY: 0 };
            const delay = idx * 0.15;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20, x: 0, rotate: pos.rotation }}
                whileInView={{
                  opacity: 1,
                  y: pos.offsetY,
                  x: pos.offsetX,
                  rotate: pos.rotation,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay }}
                className="relative border-2 sm:border-4 border-gray-200 rounded-lg overflow-hidden shadow-md sm:shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105 w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52"
              >
                <Image
                  src={img}
                  alt={`Campaign ${idx + 1}`}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 rounded-full shadow-inner"></span>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 md:px-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Explore Some of Our Campaigns Case Studies
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg p-4 transition transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-2">
                {study.brandLogo && (
                  <Image
                    src={study.brandLogo}
                    alt={study.title}
                    width={50}
                    height={50}
                    className="object-contain mr-3 rounded-md"
                  />
                )}
                <h3 className="text-md sm:text-base font-semibold text-red-600 hover:underline transition">
                  {study.title}
                </h3>
              </div>

              <p className="text-gray-700 mb-1 text-sm sm:text-base">
                <strong>Approach:</strong> {study.approach}
              </p>
              <p className="text-gray-800 mb-3 text-sm sm:text-base">
                <strong>Results:</strong> {study.results}
              </p>

              <div className="h-40 sm:h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={study.metrics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={formatNumber} />
                    <Tooltip formatter={(value) => formatNumber(value)} />
                    <Bar dataKey="value" fill="#660000" radius={[5, 5, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
