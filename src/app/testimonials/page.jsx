export const metadata = { title: "Testimonials | The Influencer Network" };

export default function TestimonialsPage() {
	const testimonials = [
		{
			role: "Marketing Head",
			org: "Swiggy",
			quote:
				"Working with The Influencer Network has been a game-changer for our brand. Their zero agency fee model helped us execute high-impact campaigns.",
		},
		{
			role: "Brand Manager",
			org: "Unacademy",
			quote:
				"We partnered for a nationwide campaign, and the process was seamless. Their network ensured we reached the right audience.",
		},
		{
			role: "CMO",
			org: "Leading EdTech Brand",
			quote:
				"The Influencer Network stands out for transparency and efficiency. The campaign ROI exceeded expectations!",
		},
	];

	return (
		<div className="mx-auto max-w-6xl px-4 py-16">
			<h1 className="text-3xl font-bold">What Clients Say</h1>
			<div className="mt-8 flex flex-col gap-4 md:flex-row">
				{testimonials.map((t, i) => (
					<div key={i} className="md:w-1/3 rounded-xl border border-border p-5 bg-card">
						<p className="text-foreground/80">“{t.quote}”</p>
						<p className="mt-3 text-sm font-semibold">{t.role}</p>
						<p className="text-xs text-muted">{t.org}</p>
					</div>
				))}
			</div>
		</div>
	);
}

