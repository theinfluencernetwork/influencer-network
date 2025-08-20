"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";
export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="sticky top-0 z-40 w-full border-b border-border bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
			<div className="mx-auto max-w-6xl px-4 py-3">
				<div className="flex items-center justify-between">
					<Link href="/" className="flex items-center gap-2">
						<Image src="/logo.svg" alt="Logo" width={120} height={40} />
					</Link>

					<nav className="hidden md:flex items-center gap-6 text-sm">
						<Link href="/about" className="hover:text-muted">About</Link>
						<Link href="/services" className="hover:text-muted">Services</Link>
						<Link href="/influencers" className="hover:text-muted">Influencers</Link>
						<Link href="/brands" className="hover:text-muted">Brands</Link>
						<Link href="/testimonials" className="hover:text-muted">Testimonials</Link>
						<Link href="/contact" className="rounded bg-primary px-3 py-1.5 text-primary-foreground hover:opacity-90">Contact</Link>
						<ThemeToggle />
					</nav>

					<button
						className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded border border-black/10"
						aria-label="Toggle menu"
						onClick={() => setIsOpen((v) => !v)}
					>
						<span className="i-heroicons-bars-3 text-xl">≡</span>
					</button>
				</div>

				{isOpen && (
					<div className="mt-3 flex flex-col gap-2 md:hidden">
						<Link href="/about" className="rounded px-2 py-2 hover:bg-black/5" onClick={() => setIsOpen(false)}>About</Link>
						<Link href="/services" className="rounded px-2 py-2 hover:bg-black/5" onClick={() => setIsOpen(false)}>Services</Link>
						<Link href="/influencers" className="rounded px-2 py-2 hover:bg-black/5" onClick={() => setIsOpen(false)}>Influencers</Link>
						<Link href="/brands" className="rounded px-2 py-2 hover:bg-black/5" onClick={() => setIsOpen(false)}>Brands</Link>
						<Link href="/testimonials" className="rounded px-2 py-2 hover:bg-black/5" onClick={() => setIsOpen(false)}>Testimonials</Link>
						<Link href="/contact" className="rounded bg-primary px-2 py-2 text-primary-foreground" onClick={() => setIsOpen(false)}>Contact</Link>
						<ThemeToggle />
					</div>
				)}
			</div>
		</header>
	);
}

