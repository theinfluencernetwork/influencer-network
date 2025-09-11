// app/influencers/ReelGrid.tsx (server component)
import Image from "next/image";

export default function ReelGrid({ reels }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
      {reels.map((reel) => (
        <Image
          key={reel.id}
          src={reel.thumbnail}
          alt={`${reel.brand} Reel`}
          width={400}
          height={600}
          className="object-cover w-full h-72"
        />
      ))}
    </div>
  );
}
