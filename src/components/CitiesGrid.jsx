"use client";
import { useState } from "react";

import { useRouter } from 'next/navigation';
const cities = [
  { name: "Delhi", influencers: "500+", img: "/Cities/Delhi.jpg" },
  { name: "Mumbai", influencers: "1000+", img: "/Cities/Mumbai.jpg" },
  { name: "Bengaluru", influencers: "800+", img: "/Cities/Banglore.jpg" },
  { name: "Patna", influencers: "1500+", img: "/Cities/Patna.jpg" },
  { name: "Varanasi", influencers: "1500+", img: "/Cities/Varanasi.jpg" },
  { name: "Hyderabad", influencers: "1200+", img: "/Cities/Hyderabad.jpg" },
  // { name: "Chennai", influencers: "900+", img: "/Cities/Chennai.jpg" },
  { name: "Kolkata", influencers: "1100+", img: "/Cities/Kolkata.jpg" },
  { name: "Lucknow", influencers: "700+", img: "/Cities/Lucknow.jpg" },
  { name: "Jaipur", influencers: "850+", img: "/Cities/Jaipur.jpg" },
  // { name: "Ahmedabad", influencers: "600+", img: "/Cities/Ahmedabad.jpg" },
  // { name: "Chandigarh", influencers: "500+", img: "/Cities/Chandigarh.jpg" },
  { name: "Pune", influencers: "750+", img: "/Cities/Pune.jpg" },
  { name: "Indore", influencers: "550+", img: "/Cities/Indore.jpg" },
  { name: "Bhopal", influencers: "500+", img: "/Cities/Bhopal.jpeg" },
  // { name: "Guwahati", influencers: "450+", img: "/Cities/Guwahati.jpg" },
  // { name: "Amritsar", influencers: "650+", img: "/Cities/Amritsar.jpg" },
  { name: "Surat", influencers: "600+", img: "/Cities/Surat.jpg" },
  { name: "Nagpur", influencers: "500+", img: "/Cities/Nagpur.jpg" },
  { name: "Kanpur", influencers: "480+", img: "/Cities/Kanpur.jpg" },
  // { name: "Agra", influencers: "900+", img: "/Cities/Agra.jpg" },
  // { name: "Mysore", influencers: "400+", img: "/Cities/Mysore.jpg" },
];

export default function CitiesGrid() {
  const router = useRouter();
  const batchSize = 5; // 5 cities per view on desktop
  const [desktopIndex, setDesktopIndex] = useState(0);

  const handleDesktopNext = () => {
    const nextIndex = desktopIndex + batchSize;
    if (nextIndex >= cities.length) {
      setDesktopIndex(0);
    } else {
      setDesktopIndex(nextIndex);
    }
  };

  const currentBatch = cities.slice(desktopIndex, desktopIndex + batchSize);
  const isLastBatch = desktopIndex + batchSize >= cities.length;

  return (
    <div className="px-4 py-10">
      {/* Mobile: Horizontal scroll cards */}
      <div className="block lg:hidden overflow-x-auto py-4">
        <div className="flex space-x-4 px-2">
          {cities.map((city, index) => (
            <div
              key={index}
              className="min-w-[250px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg bg-white cursor-pointer hover:scale-105 transition-transform duration-300 relative"
              onClick={() => router.push(`/cities/${city.name}`)}
            >
              <img
                src={city.img}
                alt={city.name}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white text-xl font-bold">{city.name}</h3>
                <p className="text-gray-200 text-sm">
                  {city.influencers} Influencers
                </p>
              </div>  
            </div>
                     ))}
        </div>
      </div>

      {/* Desktop / Tablet: grid with view more / view less */}
      <div className="hidden lg:grid grid-cols-3 gap-6">
        {currentBatch.map((city, index) => (
          <div
            key={index}
            className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg group transform transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(139,0,0,0.7),0_0_15px_rgba(0,0,0,0.6)] bg-white"
            onClick={() => router.push(`/cities/${city.name}`)}
          >
            <img
              src={city.img}
              alt={city.name}
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-bold">{city.name}</h3>
              <p className="text-gray-200 text-sm">
                {city.influencers} Influencers
              </p>
            </div>
          </div>
        ))}

        {/* View More / View Less card */}
        <div
          onClick={handleDesktopNext}
          className="flex flex-col items-center justify-center bg-gray-100 rounded-xl shadow-md cursor-pointer hover:scale-105 hover:shadow-[0_0_25px_rgba(139,0,0,0.7),0_0_15px_rgba(0,0,0,0.6)] transition duration-300 h-56"
        >
          <span className="text-4xl text-red-600 font-bold">
            {isLastBatch ? "−" : "+"}
          </span>
          <p className="text-lg font-semibold">
            {isLastBatch ? "View Less" : "View More"}
          </p>
          <p className="text-sm text-gray-600 text-center">
            {isLastBatch
              ? "Click to go back to first cities"
              : "Click to see next cities"}
          </p>
        </div>
      </div>
    </div>
  );
}
