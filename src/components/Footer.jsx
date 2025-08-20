import Link from "next/link";

export default function Footer() {
	return (
		<footer className="mt-24 border-t border-border">
			<div className="mx-auto max-w-6xl px-4 py-10 flex flex-col gap-8 sm:flex-row">
				<div className="space-y-3 sm:w-1/3">
					<div className="flex items-center gap-2">
						<span className="inline-block h-8 w-8 rounded bg-primary text-primary-foreground text-center leading-8 font-bold">IN</span>
						<span className="text-sm font-semibold">The Influencer Network</span>
					</div>
					<p className="text-sm text-muted">Amplify your brand through strategic influencer marketing.</p>
				</div>
				<nav className="text-sm space-y-2 sm:w-1/3">
					<p className="font-semibold">Company</p>
					<div className="flex flex-col gap-1">
						<Link href="/about" className="hover:underline">About</Link>
						<Link href="/services" className="hover:underline">Services</Link>
						<Link href="/influencers" className="hover:underline">Influencers</Link>
						<Link href="/brands" className="hover:underline">Brands</Link>
						<Link href="/testimonials" className="hover:underline">Testimonials</Link>
						<Link href="/contact" className="hover:underline">Contact</Link>
					</div>
				</nav>
				<div className="text-sm space-y-2 text-muted sm:w-1/3">
					<p className="font-semibold">Contact</p>
					<p>Email: info@influencernetwork.in</p>
					<p>Phone: +91 6209767269</p>
					<p>Patna, Bihar 800020</p>
				</div>
			</div>
			<div className="border-t border-border py-4 text-center text-xs text-muted">
				© 2025 The Influencer Network. All Rights Reserved.
			</div>
		</footer>
	);
}

