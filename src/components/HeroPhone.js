import Image from "next/image";

export default function HeroPhone() {
  return (
    <div className="relative flex justify-center items-center md:justify-end">
      {/* Orbiting Balls */}
      <div className="absolute w-[260px] h-[500px] sm:w-[340px] sm:h-[600px] lg:w-[420px] lg:h-[680px] flex justify-center items-center z-0">
        
        {/* Orbit 1 */}
        <div className="absolute w-[200px] h-[400px] sm:w-[280px] sm:h-[520px] lg:w-[330px] lg:h-[610px] rounded-full animate-spin-slow">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-red-500"></div>
        </div>

        {/* Orbit 2 */}
        <div className="absolute w-[230px] h-[430px] sm:w-[300px] sm:h-[540px] lg:w-[360px] lg:h-[630px] rounded-full animate-spin-reverse">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-black"></div>
        </div>

        {/* Orbit 3 */}
        <div className="absolute w-[190px] h-[380px] sm:w-[260px] sm:h-[500px] lg:w-[310px] lg:h-[590px] rounded-full animate-spin-fast">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-red-600"></div>
        </div>

        {/* Orbit 4 */}
        <div className="absolute w-[210px] h-[410px] sm:w-[280px] sm:h-[520px] lg:w-[350px] lg:h-[620px] rounded-full animate-spin-mid">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-black"></div>
        </div>

        {/* Orbit 5 */}
        <div className="absolute w-[180px] h-[360px] sm:w-[240px] sm:h-[480px] lg:w-[300px] lg:h-[580px] rounded-full animate-spin-reverse-slow">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-red-500"></div>
        </div>

        {/* Orbit 6 */}
        <div className="absolute w-[200px] h-[400px] sm:w-[270px] sm:h-[500px] lg:w-[340px] lg:h-[600px] rounded-full animate-spin-faster">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-black"></div>
        </div>

        {/* Orbit 7 */}
        <div className="absolute w-[220px] h-[420px] sm:w-[300px] sm:h-[520px] lg:w-[370px] lg:h-[640px] rounded-full animate-spin-mid-slow">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-red-600"></div>
        </div>

        {/* Orbit 8 */}
        <div className="absolute w-[190px] h-[380px] sm:w-[260px] sm:h-[500px] lg:w-[320px] lg:h-[600px] rounded-full animate-spin-slower">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-black"></div>
        </div>

        {/* Orbit 9 */}
        <div className="absolute w-[170px] h-[340px] sm:w-[230px] sm:h-[460px] lg:w-[280px] lg:h-[560px] rounded-full animate-spin-reverse-fast">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-red-500"></div>
        </div>
      </div>

      {/* Phone Frame */}
      <div className="relative w-[200px] h-[420px] sm:w-[240px] sm:h-[500px] lg:w-[280px] lg:h-[560px] rounded-[2rem] shadow-2xl bg-black flex items-center justify-center z-10">
        <div className="relative w-[190px] h-[410px] sm:w-[230px] sm:h-[490px] lg:w-[270px] lg:h-[550px] rounded-[1.8rem] border-[4px] sm:border-[5px] lg:border-[6px] border-gray-900 overflow-hidden bg-black">
          {/* Influencer Ad GIF */}
          <Image
            src="/influencer3.webp"
            alt="Influencer Ad"
            fill
            className="object-cover"
            unoptimized
          />

          {/* iPhone notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 sm:w-20 sm:h-5 lg:w-24 lg:h-6 bg-black rounded-b-2xl z-10"></div>
        </div>
      </div>
    </div>
  );
}
