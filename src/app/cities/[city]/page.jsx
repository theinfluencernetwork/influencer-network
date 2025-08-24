// src/app/cities/[city]/page.jsx
import { citiesData } from "@/data/cities";

export default function CityPage({ params }) {
  // Unwrap params using React.use()
  const { city } = params;
  const cityKey = city?.toLowerCase();
  const data = citiesData[cityKey] || citiesData.kolkata; // fallback

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${data.hero.bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center w-full px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {data.hero.title}
          </h1>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto mb-6">
            {data.hero.subtitle}
          </p>
          <a
            href={data.hero.ctaLink}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded"
          >
            {data.hero.ctaText}
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-16">
        <div className="text-center mb-8">
                <h2 className="text-4xl font-extrabold"> {cityKey.toUpperCase() }  INFLUENCER LANDSCAPE</h2>
                <div className="w-16 h-1 bg-red-500 mx-auto mt-2"></div>
            </div>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {data.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded shadow hover:translate-y-[-5px] transition-transform"
            >
              <h3 className="text-3xl text-red-600 mb-2">{stat.value}</h3>
              <p className="text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">{data.overview.title}</h2>
            <p className="mb-4 text-gray-700">{data.overview.description}</p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              {data.overview.points.map((point, idx) => (
                <li key={idx} className="mb-2">
                  {point}
                </li>
              ))}
            </ul>
            <a
              href={data.overview.ctaLink}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded"
            >
              {data.overview.ctaText}
            </a>
          </div>
          <div className="rounded overflow-hidden shadow-lg">
            <img
              src={data.overview.image}
              alt={data.overview.title}
              className="w-full h-auto transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Influencers Section */}
      {data.influencers.length > 0 && (
        <section className="bg-gray-100 py-16" id="top-influencers">
            
          <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
                <h2 className="text-4xl font-extrabold">Top Influencers in {cityKey.charAt(0).toUpperCase() + cityKey.slice(1)}</h2>
                <div className="w-16 h-1 bg-red-500 mx-auto mt-2"></div>
            </div>
            {/* <h2 className="text-3xl font-bold mb-8 text-center">
            Top Influencers in {cityKey.charAt(0).toUpperCase() + cityKey.slice(1)}
            </h2> */}
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
              {data.influencers.map((inf, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-transform hover:-translate-y-1 flex flex-col"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-3 flex-shrink-0 border-2 border-white shadow">
                      <img
                        src={inf.img}
                        alt={inf.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{inf.name}</h3>
                      <span className="text-red-600 uppercase text-xs font-bold">
                        {inf.category}
                      </span>
                      <div className="text-gray-500 text-xs mt-1 flex items-center">
                        <i className="mr-1">📍</i>
                        {inf.location} • {inf.platform}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between bg-gray-100 rounded p-2 mb-3 text-center text-sm">
                    <div className="flex-1">
                      <h4 className="text-black">{inf.followers}</h4>
                      <p className="text-gray-500 text-xs">Followers</p>
                    </div>
                  </div>
                  <a
                    href={inf.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto bg-red-600 hover:bg-red-700 text-white text-center py-2 rounded"
                  >
                    View Profile
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {data.faqs.length > 0 && (
        <section className="py-16" id="city-faq">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">FAQs</h2>
            <div className="space-y-4">
              {data.faqs.map((faq, idx) => (
                <details key={idx} className="border rounded p-4 bg-white">
                  <summary className="font-semibold cursor-pointer">
                    {faq.question}
                  </summary>
                  <p className="mt-2 text-gray-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

    </main>
  );
}
