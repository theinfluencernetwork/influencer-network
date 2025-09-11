
import InfluencerPage from '@/components/InfluencerPageClient'
import { SITE_URL } from '@/config/site';
import { categoryInfluencers } from '@/data/influencers'
// app/influencers/page.tsx
export const metadata = {
  title: "Top Indian Influencers – Collaborate with Brands",
  description:
    "Discover fashion, tech, fitness and lifestyle influencers. Collaborate with 100,000+ Indian creators.",
  openGraph: {
    title: "Top Indian Influencers",
    description: "Join 100,000+ creators and collaborate with your favorite brands.",
    url: `${SITE_URL}/influencers`,
    images: [
      { url: "/og-influencers.png", width: 1200, height: 630, alt: "Influencers Grid" }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourhandle",
    title: "Top Indian Influencers",
    description: "Collaborate with creators in fashion, fitness & tech.",
    images: ["/og-influencers.png"],
  },
};

export default function CreatorPage() {
  return (
    <>
      {/* Structured Data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: categoryInfluencers.map((inf, index) => ({
              "@type": "Person",
              position: index + 1,
              name: inf.name,
              url: inf.insta,
            })),
          }),
        }}
      />
      <InfluencerPage />
    </>
  );
}
