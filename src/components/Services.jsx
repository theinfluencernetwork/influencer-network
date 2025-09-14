"use client";

import {
  Briefcase,
  Users,
  FileText,
  BarChart3,
  Layers,
  Handshake,
} from "lucide-react";

function ServiceCard({ title, desc, Icon }) {
  return (
    <div
      className="group relative flex flex-col items-center text-center 
                 rounded-2xl border border-gray-200 bg-white p-6 shadow-md 
                 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Icon */}
      <div
        className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 mb-4 
                   group-hover:bg-red-600 group-hover:text-white transition-colors duration-300"
      >
        <Icon size={24} />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-600">{desc}</p>

      {/* Hover border glow */}
      <div
        className="absolute inset-0 rounded-2xl border-2 border-transparent 
                      group-hover:border-red-500 transition-all duration-300 pointer-events-none"
      ></div>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      title: "Influencer Connect",
      desc: "Find influencers who truly fit your brand.",
      Icon: Users,
    },
    {
      title: "Campaign Planning",
      desc: "Ideas that work, results that last.",
      Icon: Briefcase,
    },
    {
      title: "Creative Content",
      desc: "Stories that people love to watch and share.",
      Icon: FileText,
    },
    {
      title: "End-to-End Handling",
      desc: "We manage everything from start to finish.",
      Icon: Layers,
    },
    {
      title: "Real-Time Results",
      desc: " Track reach, clicks, and ROI instantly.",
      Icon: BarChart3,
    },
    {
      title: "Stronger Bonds",
      desc: "Turn one campaign into lasting partnerships.",
      Icon: Handshake,
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold text-center">How We Help Brands Win</h2>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  );
}
