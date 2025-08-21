import Link from "next/link";
import LogosCarousel from "@/components/LogosCarousel";
import HeroPhone from "@/components/HeroPhone";
import CitiesGrid from "@/components/CitiesGrid";
import BrandCard from "@/components/BrandCard";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      {/*  Hero Section */}
      <section className="w-full bg-gradient-to-b from-primary/5 to-white">
        <div className="mx-auto max-w-6xl min-h-[80vh] px-4 py-12 sm:py-20 flex flex-col gap-10 sm:flex-row sm:items-center">
          {/* Text content */}
          <div className="space-y-6 sm:w-1/2">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Amplify your <span className="text-red-600">Brand</span> through{" "}
              <span className="text-red-600">influencer</span>
              <br />
              Marketing
            </h1>
            <p className="text-muted text-base sm:text-lg">
              Connect with over 10,000 influencers to reach millions of engaged
              followers.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/contact"
                className="rounded bg-primary px-5 py-3 text-primary-foreground hover:opacity-90"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="rounded border border-border px-5 py-3 hover:bg-black/5"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/*  HeroPhone responsive */}
          <div className="flex justify-center sm:w-1/2">
            <HeroPhone />
          </div>
        </div>

        {/*  Full-width logos carousel */}
        <div className="w-full">
          <LogosCarousel />
        </div>
      </section>

      {/* Influencers by City */}
      <section className="w-full px-4 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold relative inline-block group cursor-pointer">
            FIND <span className="text-red-600">INFLUENCERS</span> IN YOUR CITY
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-black to-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
          </h2>
          <div className="mt-8">
            <CitiesGrid /> {/* Drop-in reusable component */}
          </div>
        </div>
      </section>

      {/*  Stats Section (full width black bar) */}
      <section className="w-full bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          <div>
            <p className="text-3xl font-extrabold">10,000+</p>
            <p className="text-white/70">Influencers</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold">500+</p>
            <p className="text-white/70">Brand Partnerships</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold">50M+</p>
            <p className="text-white/70">Audience Reach</p>
          </div>
        </div>
      </section>

      {/*  About + Services */}
      <section className="w-full px-4 py-16">
        <div className="mx-auto max-w-6xl flex flex-col gap-10 md:flex-row">
          <div className="space-y-4 md:w-1/2">
            <h2 className="text-2xl font-bold">About Us</h2>
            <p className="text-muted">
              The Influencer Network is a premium marketing agency specializing
              in connecting brands with the perfect influencers to amplify their
              message.
            </p>
            <Link href="/about" className="text-sm underline">
              Learn more
            </Link>
          </div>
          <div className="space-y-4 md:w-1/2">
            <h3 className="text-xl font-semibold">Our Services</h3>
            <ul className="flex flex-col gap-2 text-foreground">
              <li>Influencer Matching</li>
              <li>Campaign Strategy</li>
              <li>Content Creation</li>
              <li>Campaign Management</li>
              <li>Performance Analytics</li>
              <li>Long-term Partnerships</li>
            </ul>
            <Link href="/services" className="text-sm underline">
              Explore services
            </Link>
          </div>
        </div>
      </section>

      {/*  Brands */}
      <section className="w-full px-4 pb-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold relative inline-block group cursor-pointer">
            TRUSTED BY <span className="text-red-600">BRANDS</span>
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-black to-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
          </h2>
          <div className="mt-6">
            <BrandCard /> 
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full px-4 py-16 bg-white">
        <section className="w-full">
          <Testimonial /> 
        </section>
      </section>
    </main>
  );
}
