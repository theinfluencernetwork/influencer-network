import { FaUserFriends, FaChartLine, FaBullhorn, FaTasks, FaChartPie, FaHandshake } from "react-icons/fa";

const services = [
  { icon: FaUserFriends, title: "Influencer Matching", desc: "We connect your brand with the perfect influencers that align with your values and target audience." },
  { icon: FaChartLine, title: "Campaign Strategy", desc: "Our experts develop comprehensive strategies to maximize the impact of your influencer marketing campaigns." },
  { icon: FaBullhorn, title: "Content Creation", desc: "We help craft compelling content guidelines that ensure authentic brand representation." },
  { icon: FaTasks, title: "Campaign Management", desc: "From initial outreach to final reporting, we manage the entire campaign process for seamless execution." },
  { icon: FaChartPie, title: "Performance Analytics", desc: "Get detailed reports and insights on your campaign performance with actionable recommendations." },
  { icon: FaHandshake, title: "Long-term Partnerships", desc: "Develop ongoing relationships with influencers who become authentic ambassadors for your brand." },
];

export default function HomePageServices() {
  return (
    <section id="services" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Our Services</h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mt-2"></div>
        </div>

        {/* Grid of Cards */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <Icon className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
