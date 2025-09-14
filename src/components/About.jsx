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
  { icon: <FaBullhorn />, number: "100,000+", label: "Influencers" },
  { icon: <FaHandshake />, number: "500+", label: "Brand Partnerships" },
  { icon: <FaChartLine />, number: "50M+", label: "Audience Reach" },
  { icon: <FaUsers />, number: "200+", label: "Campaigns Completed" },
];

const AboutUs = () => {
  return (
    <section className="w-full min-h-screen relative overflow-hidden bg-gradient-to-b from-white via-red-50 to-white py-20">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 px-2 sm:px-0">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
            About <span className="text-red-600">Us</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Every brand has a story worth sharing. The magic happens when the
            right influencer tells it in a way that makes people pause, relate,
            and respond. The Influencer Network believes that influence isn’t
            about numbers, it’s about trust, connection, and conversations that
            last. Our mission is to help brands and influencers collaborate in
            ways that feel authentic and make a real impact. From fashion and
            beauty to tech, food, travel, and lifestyle, our influencer
            community gives every idea the voice it deserves. We help brands
            move beyond ads and step into culture, where influence feels
            natural, not forced. Because when stories are told with the right
            voice, they don’t just reach people. They move them.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20 text-center">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-black text-white rounded-3xl shadow-2xl p-6 transform transition duration-500 relative overflow-hidden flex flex-col items-center justify-center hover:scale-105 hover:shadow-[0_10px_30px_rgba(255,255,255,0.4)]"
            >
              <div className="text-red-500 text-3xl mb-2 transition-colors duration-300 hover:text-white">
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold">{stat.number}</h3>
              <p className="mt-1 text-gray-300 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Influencer Marquee Section */}
        <div className="mb-16">
          <Marquee influencers={influencers} />
        </div>

        {/* Mission Section */}
        <Section title="Our Mission" icon={<FaLightbulb />}>
          We’re on a mission to turn influence into impact. By crafting
          authentic content with the right creators, we help brands spark
          conversations, build trust, and deliver results that matter. Every
          campaign is a mix of strategy, storytelling, and creativity, designed
          to connect brands with people on a deeper level. Our goal is simple:
          to transform marketing into meaningful digital experiences that
          inspire action, create loyalty, and fuel lasting growth.
        </Section>

        {/* Vision Section */}
        <Section title="Our Vision" icon={<FaRocket />} gradient>
          Our vision is to build India’s most trusted influencer network by
          bringing brands and creators closer through honesty, creativity, and
          collaboration. We see a future where every brand is represented by
          influencers who genuinely believe in what they share. By keeping
          campaigns real and meaningful, we want to create connections that
          inspire, engage, and last. And in doing so, we hope to redefine
          digital marketing as something people can truly relate to and trust.
        </Section>

        {/* Achievements Section */}
        <Section title="Our Achievements" icon={<FaAward />}>
          <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700 leading-relaxed">
            <li>
              Connected{" "}
              <span className="font-semibold">100,000+ influencers</span> with
              leading brands, giving creators a stage to showcase their
              creativity while driving real business impact.
            </li>
            <li>
              Successfully executed{" "}
              <span className="font-semibold">200+ campaigns</span> across
              multiple industries, reaching a global audience of
              <span className="font-semibold"> 50M+ people</span>.
            </li>
            <li>
              Established long-term collaborations with
              <span className="font-semibold"> 500+ brands</span> — from
              startups and SMEs to Fortune 500 companies, delivering consistent
              ROI.
            </li>
            <li>
              Earned recognition as a trusted, innovative, and results-driven
              platform that empowers creators and helps brands achieve digital
              success at scale.
            </li>
          </ul>
        </Section>

        {/* Closing Statement */}
        <div className="text-center max-w-4xl mx-auto mb-10 px-2 sm:px-0">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            <span className="font-semibold text-red-600">
              The Influencer Network
            </span>{" "}
            believes great stories build real connections. We bring together a
            team who live and breathe creativity with a community of influencers
            who know how to engage audiences where it matters most. By blending
            insight, strategy, and imagination, we help brands cut through the
            digital noise and create moments that feel genuine and memorable.
            Every brand has a voice, and we make sure yours is heard, felt, and
            remembered.
          </p>
        </div>
      </div>
    </section>
  );
};

//  Fixed Section Component
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
      {/* Changed from <p> to <div> to allow lists */}
      <div className="text-gray-700 text-base sm:text-lg md:text-xl max-w-4xl text-center leading-relaxed">
        {children}
      </div>
    </div>
  </div>
);

export default AboutUs;
