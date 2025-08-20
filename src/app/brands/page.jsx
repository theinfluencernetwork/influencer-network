export const metadata = { title: "Brands | The Influencer Network" };

export default function BrandsPage() {
	const brands = ["PhysicsWallah", "V-Mart", "Cashify", "Decathlon", "Swiggy", "Zomato"];
	return (
		<div className="mx-auto max-w-6xl px-4 py-16">
			<h1 className="text-3xl font-bold">Trusted By Brands</h1>
			<div className="mt-8 flex flex-wrap gap-4 text-sm text-muted">
				{brands.map((b) => (
					<div key={b} className="w-1/2 sm:w-1/3 md:w-1/6 rounded border border-border p-3 text-center">{b}</div>
				))}
			</div>
		</div>
	);
}

