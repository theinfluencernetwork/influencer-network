"use client";
import Image from "next/image";

const logos = [
	{ src: "/companies/citykart.png", alt: "Citykart" },
	{ src: "/companies/pw.png", alt: "PW" },
	{ src: "/companies/swiggy.png", alt: "Swiggy" },
	{ src: "/companies/trends.png", alt: "Trends" },
	{ src: "/companies/godrej.png", alt: "godrej" },
	{ src: "/companies/decathlon.png", alt: "decathlon" },
	{ src: "/companies/cashify.png", alt: "cashify" },
	{ src: "/companies/zomato.png", alt: "zomato" },
	{ src: "/companies/unacademy.png", alt: "unacademy" },
	{ src: "/companies/cashify.png", alt: "cashify" },
];

export default function LogosCarousel() {
	return (
		<div className="relative  overflow-hidden py-6">
			<div className="flex animate-[scroll_30s_linear_infinite] gap-8 opacity-70 hover:opacity-100">
				{[...logos, ...logos, ...logos].map((logo, idx) => (
					<div key={idx} className="shrink-0">
						<Image src={logo.src} alt={logo.alt} width={120} height={32} />
					</div>
				))}
			</div>
			<style jsx>{`
				@keyframes scroll {
					0% { transform: translateX(0); }
					100% { transform: translateX(-50%); }
				}
			`}</style>
		</div>
	);
}

