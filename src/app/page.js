import Link from "next/link";
import LogosCarousel from "@/components/LogosCarousel";
import Image from "next/image";
import CitySearch from "@/components/HomePageCities";
import HomePageServices from "@/components/HomePageServices";
import HomePageBrands from "@/components/HomePageBrand";

export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-b from-primary/5 to-white">
        <div className="mx-auto  max-w-6xl h-screen px-4 py-16 sm:py-24 flex flex-col gap-10 sm:flex-row sm:items-center">
          <div className="space-y-6 px-30">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
              Amplify Your Brand Through Influencer Marketing
            </h1>
            <p className="text-muted text-base sm:text-lg">
              Connect with over 10,000 influencers to reach millions of engaged followers.
            </p>
            <div className="flex gap-3">
              <Link href="/contact" className="rounded bg-primary px-5 py-3 text-primary-foreground hover:opacity-90">Get Started</Link>
              <Link href="/services" className="rounded border border-border px-5 py-3 hover:bg-black/5">Our Services</Link>
            </div>
          </div>
          {/* <div className="aspect-video rounded-lg border border-black/0 bg-[url('/hero-img.svg')] bg-center bg-no-repeat bg-contain" /> */}
						<Image src="/hero-img.svg" alt="Logo" width={260} height={150} />

        </div>
        <div className="mx-auto max-w-6xl px-4">
          <LogosCarousel />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <CitySearch />
      </section>

      <section id="about" className="py-12 px-40">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">About Us</h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mt-2"></div>
        </div>

        {/* About Content */}
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Text */}
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The Influencer Network is a premium marketing agency specializing in
              connecting brands with the perfect influencers to amplify their
              message. With years of experience and a curated network of over
              10,000 influencers across all platforms, we deliver campaigns that
              drive real results.
            </p>
            <p>
              Our team of marketing experts works closely with both brands and
              influencers to create authentic partnerships that resonate with
              audiences and deliver measurable ROI.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="stat bg-white shadow-md rounded-xl p-4">
              <h3 className="text-2xl font-bold text-red-600">10,000+</h3>
              <p className="text-gray-600">Influencers</p>
            </div>
            <div className="stat bg-white shadow-md rounded-xl p-4">
              <h3 className="text-2xl font-bold text-red-600">500+</h3>
              <p className="text-gray-600">Brand Partnerships</p>
            </div>
            <div className="stat bg-white shadow-md rounded-xl p-4">
              <h3 className="text-2xl font-bold text-red-600">50M+</h3>
              <p className="text-gray-600">Audience Reach</p>
            </div>
          </div>
        </div>
      </div>
      </section>

      <HomePageServices />
      

      <section id="influencers" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Influencer Network</h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mt-4"></div>
        </div>

        {/* Influencer Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { title: "Lifestyle", count: "2,500+ influencers" },
            { title: "Beauty", count: "1,800+ influencers" },
            { title: "Fashion", count: "2,200+ influencers" },
            { title: "Tech", count: "1,000+ influencers" },
            { title: "Food", count: "1,500+ influencers" },
            { title: "Fitness", count: "1,000+ influencers" },
          ].map((cat, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{cat.title}</h3>
              <p className="text-gray-600 mt-2">{cat.count}</p>
            </div>
          ))}
        </div>

        {/* Platform Stats */}
        <div className="flex justify-center gap-10">
          <div className="text-center">
            <i className="fab fa-instagram text-4xl text-pink-500"></i>
            <h4 className="mt-2 text-lg font-medium">Instagram</h4>
          </div>
          <div className="text-center">
            <i className="fab fa-youtube text-4xl text-red-600"></i>
            <h4 className="mt-2 text-lg font-medium">YouTube</h4>
          </div>
          <div className="text-center">
            <i className="fab fa-twitter text-4xl text-sky-500"></i>
            <h4 className="mt-2 text-lg font-medium">Twitter</h4>
          </div>
        </div>
      </div>
    </section>

      <HomePageBrands />

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <h2 className="text-2xl font-bold">Testimonials</h2>
        <div className="mt-6 flex flex-col gap-4 md:flex-row">
          {[
            [
              "Marketing Head",
              "Swiggy",
              "Working with The Influencer Network has been a game-changer for our brand. Their zero agency fee model helped us execute high-impact influencer campaigns at a fraction of the cost.",
            ],
            [
              "Brand Manager",
              "Unacademy",
              "We partnered for a nationwide campaign, and the process was seamless. Their vast network ensured we reached the right audience.",
            ],
            [
              "CMO",
              "Leading EdTech Brand",
              "The Influencer Network stands out for its transparency and efficiency. The campaign ROI exceeded our expectations!",
            ],
          ].map(([role, org, quote], i) => (
            <div key={i} className="md:w-1/3 rounded-xl border border-border p-5 bg-card">
              <p className="text-foreground/80">“{quote}”</p>
              <p className="mt-3 text-sm font-semibold">{role}</p>
              <p className="text-xs text-muted">{org}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
