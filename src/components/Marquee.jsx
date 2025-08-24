"use client";

import { FaInstagram } from "react-icons/fa";

// Marquee Component
const Marquee = ({ influencers }) => {
  return (
    <div className="relative overflow-hidden h-36 sm:h-40 w-full group">
      {/* Top line (left to right) */}
      <div className="absolute top-0 left-0 flex whitespace-nowrap animate-marquee-left group-hover:animate-marquee-left-slow">
        {[...Array(2)].map((_, i) =>
          influencers.map((inf, idx) => (
            <InfluencerCard key={`top-${idx}-${i}`} info={inf} />
          ))
        )}
      </div>

      {/* Bottom line (right to left) */}
      <div className="absolute bottom-0 left-0 flex whitespace-nowrap animate-marquee-right group-hover:animate-marquee-right-slow">
        {[...Array(2)].map((_, i) =>
          influencers.map((inf, idx) => (
            <InfluencerCard key={`bottom-${idx}-${i}`} info={inf} />
          ))
        )}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes marquee-left { 0% { transform: translateX(-100%); } 100% { transform: translateX(0%); } }
        @keyframes marquee-right { 0% { transform: translateX(0%); } 100% { transform: translateX(-100%); } }
        .animate-marquee-left { animation: marquee-left 40s linear infinite; }
        .animate-marquee-right { animation: marquee-right 40s linear infinite; }
        .animate-marquee-left-slow { animation: marquee-left 80s linear infinite; }
        .animate-marquee-right-slow { animation: marquee-right 80s linear infinite; }
      `}</style>
    </div>
  );
};

// Influencer Card inside marquee
const InfluencerCard = ({ info }) => (
  <a
    href={info.insta}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center bg-white rounded-2xl shadow-md p-3 mr-4 sm:mr-6 w-44 sm:w-56 flex-shrink-0 hover:scale-105 transition duration-500"
  >
    <img src={info.img} alt={info.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3" />
    <div>
      <h4 className="text-sm font-semibold text-gray-900">{info.name}</h4>
      <div className="flex items-center gap-2 text-xs text-gray-600">
        <FaInstagram className="text-pink-500" /> {info.followers}
      </div>
    </div>
  </a>
);

export default Marquee;
