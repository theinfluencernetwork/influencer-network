// app/influencers/InfluencerGrid.tsx
import Image from "next/image";

export default function InfluencerGrid({ influencers }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {influencers.map((inf) => 
      
      (
        <div
          key={inf.id}
          className="relative group w-full h-64 rounded-xl overflow-hidden shadow-lg"
        >
          {/* Optimized Image  but not working for Image tag only for img tag*/}
          <img
            src={inf.img}
            alt={`Instagram profile of ${inf.name}, ${inf.category} influencer`}
            width={300}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay with details */}
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4">
            <h3 className="font-bold text-lg text-white mb-1">{inf.name}</h3>
            <a
              href={inf.insta}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 text-sm mb-2 hover:underline"
            >
              @{inf.name.toLowerCase().replace(/\s+/g, "")}
            </a>
            <p className="text-sm text-gray-300">{inf.followers} Followers</p>
            <span className="text-xs mt-2 px-3 py-1 bg-red-500 text-black rounded-full font-semibold">
              #{inf.category}
            </span>
            <a
              href={inf.insta}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-red-500 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-400 transition"
            >
              View Insights
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
