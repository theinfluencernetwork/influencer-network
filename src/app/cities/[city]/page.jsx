"use client";

import Counter from "@/components/counter";
import { citiesData } from "@/data/cities";
import { motion } from "framer-motion";

export default function CityPage({ params }) {
  const { city } = params;
  const cityKey = city?.toLowerCase();
  const data = citiesData[cityKey] || citiesData.kolkata; // fallback

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        className="relative min-h-[60vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${data.hero.bgImage})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          className="relative z-10 text-center w-full px-4"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {data.hero.title}
          </h1>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto mb-6">
            {data.hero.subtitle}
          </p>
          <motion.a
            href={data.hero.ctaLink}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {data.hero.ctaText}
          </motion.a>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-16">
        <div className="text-center mb-8">
          <motion.h2
            className="text-4xl font-extrabold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {cityKey.toUpperCase()} INFLUENCER LANDSCAPE
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-red-500 mx-auto mt-2"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          ></motion.div>
        </div>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center ">
          {data.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded shadow hover:translate-y-[-5px] transition-transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
            <h3 className="text-3xl text-red-600 mb-2 font-extrabold">
              <Counter value={stat.value} className="text-3xl text-red-600" />
            </h3>
              <p className="text-gray-700 font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold mb-4">{data.overview.title}</h2>
            <p className="mb-4 text-gray-700">{data.overview.description}</p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              {data.overview.points.map((point, idx) => (
                <motion.li
                  key={idx}
                  className="mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
            <motion.a
              href={data.overview.ctaLink}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {data.overview.ctaText}
            </motion.a>
          </motion.div>
          <motion.div
            className="rounded overflow-hidden shadow-lg"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={data.overview.image}
              alt={data.overview.title}
              className="w-full h-auto transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </div>
      </section>

      {/* Influencers Section */}
      {data.influencers.length > 0 && (
        <section className="bg-gray-100 py-16" id="top-influencers">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8">
              <motion.h2
                className="text-4xl font-extrabold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Top Influencers in{" "}
                {cityKey.charAt(0).toUpperCase() + cityKey.slice(1)}
              </motion.h2>
              <motion.div
                className="w-16 h-1 bg-red-500 mx-auto mt-2"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              ></motion.div>
            </div>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
              {data.influencers.map((inf, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-transform hover:-translate-y-1 flex flex-col"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
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
                  <motion.a
                    href={inf.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto bg-red-600 hover:bg-red-700 text-white text-center py-2 rounded"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Profile
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {data.faqs.length > 0 && (
        <section className="py-16" id="city-faq">
          <div className="max-w-3xl mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold mb-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              FAQs
            </motion.h2>
            <div className="space-y-4">
              {data.faqs.map((faq, idx) => (
                <motion.details
                  key={idx}
                  className="border rounded p-4 bg-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <summary className="font-semibold cursor-pointer">
                    {faq.question}
                  </summary>
                  <p className="mt-2 text-gray-700">{faq.answer}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
