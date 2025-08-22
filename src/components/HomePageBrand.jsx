import Image from "next/image";

export default function HomePageBrands() {
  const brands = [
    { src: "/brand/pw.png", alt: "PhysicsWallah" },
    { src: "/brand/vmart.jpeg", alt: "V-Mart" },
    { src: "/brand/cashify.png", alt: "Cashify" },
    { src: "/brand/decathlon.png", alt: "Decathlon" },
    { src: "/brand/swiggy.jpg", alt: "Swiggy" },
    { src: "/brand/zomato.png", alt: "Zomato" },
  ];

  return (
    <section id="brands" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Trusted By Brands</h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mt-4"></div>
        </div>

        {/* Brand Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="flex justify-center items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
