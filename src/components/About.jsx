"use client";

import {
  FaInstagram,
  FaBullhorn,
  FaHandshake,
  FaChartLine,
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaAward,
} from "react-icons/fa";
import Marquee from "@/components/Marquee";
// Influencer Data
const influencers = [
  {
    name: "Avneet Kaur",
    followers: "30M",
    img: "influencers/avneet.jpeg",
    insta: "https://www.instagram.com/avneetkaur_13/",
  },
  {
    name: "Barkha Singh",
    followers: "3M",
    img: "influencers/barksha.jpeg",
    insta: "https://www.instagram.com/barkhasingh0308/",
  },
  {
    name: "Curly Tales",
    followers: "1.2M",
    img: "influencers/curly.jpeg",
    insta: "https://www.instagram.com/curly.tales/",
  },
  {
    name: "Ishita Pundeer",
    followers: "2M",
    img: "influencers/isha.jpeg",
    insta: "https://www.instagram.com/its_me_isha39/",
  },
  {
    name: "Adarsh Singh",
    followers: "500K",
    img: "influencers/adarsh.jpeg",
    insta: "https://www.instagram.com/adarshuc/",
  },
  {
    name: "CarryMinati",
    followers: "20M",
    img: "influencers/carryminati.jpeg",
    insta: "https://www.instagram.com/carryminati/",
  },
  {
    name: "Harsh Beniwal",
    followers: "10M",
    img: "influencers/harsh.jpeg",
    insta: "https://www.instagram.com/harshbeniwal/",
  },
  {
    name: "Abhishek Malhan",
    followers: "1M",
    img: "influencers/abhishek.jpeg",
    insta: "https://www.instagram.com/fukra_insaan/",
  },
];

// Stats / Achievements
const stats = [
  { icon: <FaBullhorn />, number: "10,000+", label: "Influencers" },
  { icon: <FaHandshake />, number: "500+", label: "Brand Partnerships" },
  { icon: <FaChartLine />, number: "50M+", label: "Audience Reach" },
  { icon: <FaUsers />, number: "200+", label: "Campaigns Completed" },
];

const AboutUs = () => {
  return (
    <section className="w-full min-h-screen relative overflow-hidden bg-gradient-to-b from-white via-red-50 to-white py-20">
      {/* Background Glowing Circles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-pink-300 rounded-full opacity-20 blur-3xl animate-floating"
            style={{
              width: `${20 + Math.random() * 50}px`,
              height: `${20 + Math.random() * 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${20 + Math.random() * 30}s`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 px-2 sm:px-0">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
            About <span className="text-red-600">Us</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold">The Influencer Network</span> is
            India's premier platform connecting brands with top-tier creators.
            We specialize in crafting campaigns that amplify brand presence,
            engage audiences authentically, and deliver measurable ROI.
            <br />
            From micro-influencers to mega creators, our curated network ensures
            the right voice for your brand across multiple niches, including
            lifestyle, entertainment, tech, and more.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20 text-center">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-2xl p-6 transform transition duration-500 relative overflow-hidden flex flex-col items-center justify-center hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="text-red-800 text-3xl mb-2 transition-colors duration-300 hover:text-black-600">
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {stat.number}
              </h3>
              <p className="mt-1 text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Influencer Marquee Section */}
        <div className="mb-16">
          <Marquee influencers={influencers} />
        </div>

        {/* Mission Section */}
        <Section title="Our Mission" icon={<FaLightbulb />}>
          Our mission is to empower brands with authentic influencer content
          that drives engagement, builds trust, and achieves measurable ROI. We
          create campaigns that are not just creative, but highly targeted and
          results-driven.
        </Section>

        {/* Vision Section */}
        <Section title="Our Vision" icon={<FaRocket />} gradient>
          To become India's most trusted influencer ecosystem by connecting
          brands with creators across all niches. We envision a world where
          every campaign is meaningful, every collaboration authentic, and every
          brand message amplified effectively.
        </Section>

        {/* Achievements Section */}
        <Section title="Our Achievements" icon={<FaAward />}>
          - Successfully connected over{" "}
          <span className="font-semibold">10,000 influencers</span> with brands.{" "}
          <br />- Completed more than{" "}
          <span className="font-semibold">200 campaigns</span> achieving{" "}
          <span className="font-semibold">50M+ audience reach</span>. <br />-
          Built long-term partnerships with over{" "}
          <span className="font-semibold">500 brands</span> across multiple
          sectors. <br />- Recognized as a trusted platform for delivering
          creative, measurable, and scalable influencer campaigns.
        </Section>

        {/* Closing Statement */}
        <div className="text-center max-w-4xl mx-auto mb-10 px-2 sm:px-0">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            With our dedicated team and robust influencer network,{" "}
            <span className="font-semibold text-red-600">
              The Influencer Network
            </span>{" "}
            continues to redefine how brands engage with audiences in the
            digital era. Partner with us to amplify your brand story with
            creativity, authenticity, and measurable impact.
          </p>
        </div>
      </div>
    </section>
  );
};

// Section Component
const Section = ({ title, gradient, children, icon }) => (
  <div
    className={`relative ${
      gradient ? "bg-gradient-to-r from-red-50 to-white" : "bg-white"
    } rounded-3xl p-8 sm:p-12 shadow-xl mb-16`}
  >
    <div className="flex flex-col items-center">
      {icon && (
        <div className="text-red-600 text-4xl sm:text-5xl mb-4">{icon}</div>
      )}
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 sm:mb-6">
        {title}
      </h3>
      <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-4xl text-center leading-relaxed">
        {children}
      </p>
    </div>
  </div>
);

export default AboutUs;
