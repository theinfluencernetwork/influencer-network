export const metadata = { title: "Contact | The Influencer Network" };

export default function ContactPage() {
	return (
		<div className="mx-auto max-w-3xl px-4 py-16">
			<h1 className="text-3xl font-bold">Get In Touch</h1>
			<p className="mt-2 text-muted">Ready to elevate your brand? Tell us about your campaign.</p>
			<form className="mt-8 flex flex-col gap-4">
				<input className="rounded border border-border px-3 py-2" placeholder="Name" />
				<input className="rounded border border-border px-3 py-2" placeholder="Email" />
				<input className="rounded border border-border px-3 py-2" placeholder="Phone" />
				<input className="rounded border border-border px-3 py-2" placeholder="Company" />
				<textarea className="rounded border border-border px-3 py-2" rows={5} placeholder="Message" />
				<button className="rounded bg-primary px-4 py-2 text-primary-foreground w-max">Request a call back</button>
			</form>
			<div className="mt-8 text-sm text-muted space-y-1">
				<p>Email: info@influencernetwork.in</p>
				<p>Phone: +91 6209767269</p>
				<p>SpringSpace, 2nd Floor, Kanti Factory Rd, Kankarbagh, Patna, Bihar 800020</p>
			</div>
		</div>
	);
}

