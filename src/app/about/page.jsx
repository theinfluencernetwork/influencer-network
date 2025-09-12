import About from "@/components/About";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const metadata = {
  title: "Influencer Network - Connect with Top Brands",
  description: "The ultimate influencer-network platform for collaborations, brand deals, and partnerships.",
  openGraph: {
    title: "Influencer Network",
    description: "Connect influencers with brands instantly.",
    url: `${SITE_URL}/about`,
    // images: ["/og-image.png"], // put your image in /public
  },
};
export default function AboutPage() {
  return (
    <div className="w-full min-h-screen">
      <About />
    </div>
  );
}
