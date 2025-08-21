import BrandCard from "@/components/BrandCard";

export const metadata = { title: "Brands | The Influencer Network" };

export default function BrandsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold relative inline-block group cursor-pointer text-center">
        Trusted By <span className="text-red-600">Brands</span>
        <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-black to-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
      </h1>

      <div className="mt-8">
        <BrandCard />
      </div>
    </div>
  );
}
