// app/campaigns/page.jsx

export const metadata = {
  title: "Campaigns | The Influencer Network",
  description:
    "Explore our brand campaigns and influencer collaborations with The Influencer Network.",
};

import Campaigns from "@/components/Campaigns";

export default function CampaignsPage() {
  return <Campaigns />;
}
