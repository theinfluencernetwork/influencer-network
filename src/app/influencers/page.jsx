export const metadata = { title: "Influencers | The Influencer Network" };

export default function InfluencersPage() {
	const categories = [
		["Lifestyle", 2500],
		["Beauty", 1800],
		["Fashion", 2200],
		["Tech", 1000],
		["Food", 1500],
		["Fitness", 1000],
	];

	return (
		<div className="mx-auto max-w-6xl px-4 py-16">
			<h1 className="text-3xl font-bold">Our Influencer Network</h1>
			<div className="mt-8 flex flex-wrap gap-4">
				{categories.map(([name, count]) => (
					<div key={name} className="w-1/2 sm:w-1/3 md:w-1/6 rounded-lg border border-border p-4 text-center">
						<p className="font-semibold">{name}</p>
						<p className="text-sm text-muted">{count}+ influencers</p>
					</div>
				))}
			</div>
		</div>
	);
}

