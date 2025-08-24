import { Briefcase, Users, FileText, BarChart3, Layers, Handshake } from "lucide-react";

export const metadata = { 
  title: "Services | The Influencer Network" 
};

export default function ServicesPage() {
  const services = [
    {
      title: "Influencer Matching",
      desc: "We connect your brand with the perfect influencers that align with your values and target audience.",
      icon: Users,
    },
    {
      title: "Campaign Strategy",
      desc: "Our experts develop comprehensive strategies to maximize the impact of your influencer marketing campaigns.",
      icon: Briefcase,
    },
    {
      title: "Content Creation",
      desc: "We help craft compelling content guidelines that ensure authentic brand representation.",
      icon: FileText,
    },
    {
      title: "Campaign Management",
      desc: "From initial outreach to final reporting, we manage the entire campaign process for seamless execution.",
      icon: Layers,
    },
    {
      title: "Performance Analytics",
      desc: "Get detailed reports and insights on your campaign performance with actionable recommendations.",
      icon: BarChart3,
    },
    {
      title: "Long-term Partnerships",
      desc: "Develop ongoing relationships with influencers who become authentic ambassadors for your brand.",
      icon: Handshake,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-bold text-center">Our Services</h1>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, desc, icon: Icon }) => (
          <div
            key={title}
            className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-md 
                       transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 mb-4 
                            group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
              <Icon size={24} />
            </div>

            {/* Heading */}
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

            {/* Description */}
            <p className="mt-2 text-sm text-gray-600">{desc}</p>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-red-500 transition-all duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
