"use client";

import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const InfluencersNetwork = () => {
  const categories = [
    { 
      title: "Lifestyle", 
      count: "2,500+ influencers", 
      sub: "Authentic content on daily life, travel, and home." 
    },
    { 
      title: "Beauty", 
      count: "1,800+ influencers", 
      sub: "Experts showcasing products to engaged audiences." 
    },
    { 
      title: "Fashion", 
      count: "2,200+ influencers", 
      sub: "Trendsetters creating compelling fashion content." 
    },
    { 
      title: "Tech", 
      count: "1,000+ influencers", 
      sub: "Trusted voices delivering tech insights." 
    },
    { 
      title: "Food", 
      count: "1,500+ influencers", 
      sub: "Culinary creators producing engaging food content." 
    },
    { 
      title: "Fitness", 
      count: "1,000+ influencers", 
      sub: "Trainers and enthusiasts inspiring healthy habits." 
    },
  ];

  return (
    <section className="w-full px-6 py-12 bg-white text-center">
      {/* Title with hover underline */}
      <h2 className="relative inline-block text-3xl md:text-4xl font-extrabold text-black uppercase mb-10 group">
        Our <span className="text-red-600">Influencer</span> Network
        <span className="absolute left-1/2 -bottom-2 w-0 h-1 bg-red-600 rounded-full group-hover:w-full group-hover:left-0 transition-all duration-500"></span>
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categories.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-800 text-white rounded-xl p-8 shadow-lg hover:shadow-[0_8px_30px_rgba(255,0,0,0.7)] transform hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.count}</p>
            <p className="mt-3 text-gray-400 text-sm">{item.sub}</p>
          </div>
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-12 mt-12">
        <a
          href="https://www.instagram.com/theinfluencernetwork.in?igsh=cm9lczFvYWN3Zng0"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(255,0,0,0.7)] p-4 rounded-xl"
        >
          <FaInstagram className="text-4xl text-red-600 group-hover:scale-110 transition-transform duration-300" />
          <p className="font-semibold mt-2">Instagram</p>
        </a>

        <a
          href="https://www.linkedin.com/company/theinfluencernetworek/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(255,0,0,0.7)] p-4 rounded-xl"
        >
          <FaLinkedin className="text-4xl text-red-600 group-hover:scale-110 transition-transform duration-300" />
          <p className="font-semibold mt-2">LinkedIn</p>
        </a>

        {/* <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(255,0,0,0.7)] p-4 rounded-xl"
        >
          <FaTwitter className="text-4xl text-red-600 group-hover:scale-110 transition-transform duration-300" />
          <p className="font-semibold mt-2">Twitter</p>
        </a> */}
      </div>
    </section>
  );
};

export default InfluencersNetwork;
