export const metadata = { title: "Services | The Influencer Network" };

export default function ServicesPage() {
	const services = [
		"Influencer Matching",
		"Campaign Strategy",
		"Content Creation",
		"Campaign Management",
		"Performance Analytics",
		"Long-term Partnerships",
	];

	return (
		<div className="mx-auto max-w-5xl px-4 py-16">
			<h1 className="text-3xl font-bold">Our Services</h1>
			<div className="mt-8 flex flex-wrap gap-4">
				{services.map((s) => (
					<div key={s} className="w-full sm:w-[calc(50%-0.5rem)] rounded-lg border border-border p-5">
						<p className="font-semibold">{s}</p>
						<p className="text-sm text-muted mt-1">End-to-end support to maximize impact and ROI.</p>
					</div>
				))}
			</div>
		</div>
	);
}

