"use client";
import { motion } from "framer-motion";

const brands = [
  { name: "PhysicsWallah", logo: "/BrandGif/PW.jpg" },
  { name: "V-Mart", logo: "/BrandGif/Vmart.webp" },
  { name: "Cashify", logo: "/BrandGif/cashify.png" },
  { name: "Decathlon", logo: "/BrandGif/Decathalon.webp" },
  { name: "Swiggy", logo: "/BrandGif/Swiggy.png" },
  { name: "Zomato", logo: "/BrandGif/zomato.jpg" },
//   { name: "Amazon", logo: "/BrandGif/amazon.png" },
//   { name: "Flipkart", logo: "/BrandGif/flipkart.webp" },
//   { name: "BigBasket", logo: "/BrandGif/Bigbasket.jpg" },
];

export default function BrandCards() {
  return (
    <div className="relative px-4 py-10 flex flex-col items-center">
      {/* Desktop: Show all cards */}
      <div className="hidden lg:flex flex-wrap justify-center items-center w-full max-w-6xl gap-6">
        {brands.map((brand, idx) => (
          <motion.div
            key={brand.name}
            className="w-40 h-40 bg-white rounded-xl shadow-lg flex items-center justify-center p-5 cursor-pointer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(255,0,0,0.6), 0 0 25px rgba(0,0,0,0.5)",
            }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-24 h-24 object-contain"
            />
          </motion.div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="block lg:hidden w-full mt-8 overflow-x-hidden">
        <motion.div
          className="flex gap-4 w-max"
          drag="x"
          dragConstraints={{ left: -brands.length * 180 + 180, right: 0 }}
          dragElastic={0.2}
          whileTap={{ cursor: "grabbing" }}
        >
          {brands.map((brand, idx) => (
            <motion.div
              key={brand.name}
              className="min-w-[150px] h-40 bg-white rounded-xl shadow-lg flex items-center justify-center p-5 cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255,0,0,0.5), 0 0 20px rgba(0,0,0,0.4)",
              }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-24 h-24 object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
