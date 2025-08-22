"use client"; // only if you’re using App Router (Next.js 13+)

import { useState } from "react";
import Link from "next/link";

const initialCities = [
  {
    name: "Delhi",
    influencers: "500+ Influencers",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    link: "/pages/delhi",
  },
  {
    name: "Mumbai",
    influencers: "1000+ Influencers",
    image:
      "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    link: "/pages/mumbai",
  },
  {
    name: "Bangalore",
    influencers: "800+ Influencers",
    image:
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    link: "/pages/bangalore",
  },
  {
    name: "Patna",
    influencers: "1500+ Influencers",
    image: "/images/cityview/biscoman.png",
    link: "/pages/patna",
  },
  {
    name: "Varanasi",
    influencers: "1500+ Influencers",
    image:
      "https://images.unsplash.com/photo-1561361058-c24cecae35ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    link: "/pages/varanasi",
  },
];

const moreCities = [
  {
    name: "Ahmedabad",
    influencers: "250+ Influencers",
    image:
      "https://images.unsplash.com/photo-1580667309332-1706b07f21e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    link: "/pages/ahmedabad",
  },
  {
    name: "Chennai",
    influencers: "300+ Influencers",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    link: "/pages/chennai",
  },
  {
    name: "Hyderabad",
    influencers: "350+ Influencers",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b8/Charminar_sumeet_photography_3.JPG",
    link: "/pages/hyderabad",
  },
  {
    name: "Jaipur",
    influencers: "200+ Influencers",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    link: "/pages/jaipur",
  },
  {
    name: "Kolkata",
    influencers: "400+ Influencers",
    image:
      "https://images.unsplash.com/photo-1558431382-27e303142255?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    link: "/pages/kolkata",
  },
  {
    name: "Lucknow",
    influencers: "500+ Influencers",
    image:
      "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    link: "/pages/lucknow",
  },
  {
    name: "Indore",
    influencers: "200+ Influencers",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Indore_Rajwada01.jpg/2560px-Indore_Rajwada01.jpg",
    link: "/pages/indore",
  },
];

export default function CitySearch() {
  const [showMore, setShowMore] = useState(false);

  const displayedCities = showMore
    ? [...initialCities, ...moreCities]
    : initialCities;

  return (
    <section id="city-search" className="py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Find Influencers in Your City</h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mt-2"></div>
        </div>

        {/* City Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {displayedCities.map((city, index) => (
            <Link
              href={city.link}
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer"
            >
              {/* Background image */}
              <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundImage: `url(${city.image})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300"></div>

              {/* Info */}
              <div className="relative z-10 p-4 flex flex-col justify-end h-full text-white">
                <h3 className="text-lg font-semibold">{city.name}</h3>
                <p className="text-sm">{city.influencers}</p>
              </div>
            </Link>
          ))}

          {/* View More Card */}
          {!showMore && (
            <button
              onClick={() => setShowMore(true)}
              className="flex flex-col justify-center items-center p-6 border-2 border-dashed border-gray-400 rounded-xl cursor-pointer hover:bg-gray-100 transition"
            >
              <i className="fas fa-plus-circle text-3xl text-gray-600 mb-2"></i>
              <h3 className="font-semibold">View More</h3>
              <p className="text-sm text-gray-500">Click to see all cities</p>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
