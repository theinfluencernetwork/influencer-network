import Link from "next/link";
import LogosCarousel from "@/components/LogosCarousel";
import Image from "next/image";

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
        <h2 className="text-2xl font-bold">Find Influencers in Your City</h2>
        <div className="mt-8 flex flex-wrap gap-4">
          {[
            ["Delhi", "500+"],
            ["Mumbai", "1000+"],
            ["Bangalore", "800+"],
            ["Patna", "1500+"],
            ["Varanasi", "1500+"],
            ["Ahmedabad", "250+"],
            ["Chennai", "300+"],
            ["Hyderabad", "350+"],
            ["Jaipur", "200+"],
            ["Kolkata", "400+"],
            ["Lucknow", "500+"],
            ["Indore", "200+"],
          ].map(([city, count]) => (
            <div key={city} className="w-1/2 sm:w-1/3 md:w-1/4 rounded-lg border border-border p-4">
              <p className="text-sm text-muted">{city}</p>
              <p className="text-xl font-semibold">{count} Influencers</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/influencers" className="text-sm text-black underline">View More</Link>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 flex flex-col gap-10 sm:flex-row">
          <div className="sm:flex-1">
            <p className="text-3xl font-extrabold">10,000+</p>
            <p className="text-white/70">Influencers</p>
          </div>
          <div className="sm:flex-1">
            <p className="text-3xl font-extrabold">500+</p>
            <p className="text-white/70">Brand Partnerships</p>
          </div>
          <div className="sm:flex-1">
            <p className="text-3xl font-extrabold">50M+</p>
            <p className="text-white/70">Audience Reach</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 flex flex-col gap-10 md:flex-row">
        <div className="space-y-4 md:w-1/2">
          <h2 className="text-2xl font-bold">About Us</h2>
          <p className="text-muted">
            The Influencer Network is a premium marketing agency specializing in connecting brands with the perfect influencers to amplify their message.
          </p>
          <Link href="/about" className="text-sm underline">Learn more</Link>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Our Services</h3>
          <ul className="flex flex-col gap-2 text-foreground">
            <li>Influencer Matching</li>
            <li>Campaign Strategy</li>
            <li>Content Creation</li>
            <li>Campaign Management</li>
            <li>Performance Analytics</li>
            <li>Long-term Partnerships</li>
          </ul>
          <Link href="/services" className="text-sm underline">Explore services</Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl font-bold">Trusted By Brands</h2>
        <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted">
          {["PhysicsWallah", "V-Mart", "Cashify", "Decathlon", "Swiggy", "Zomato"].map((b) => (
            <div key={b} className="w-1/2 sm:w-1/3 md:w-1/6 rounded border border-border p-3 text-center">{b}</div>
          ))}
        </div>
      </section>

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
