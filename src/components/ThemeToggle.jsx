"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
		const initial = saved || "light";
		document.documentElement.setAttribute("data-theme", initial);
		setTheme(initial);
	}, []);

	function toggleTheme() {
		const next = theme === "light" ? "dark" : "light";
		document.documentElement.setAttribute("data-theme", next);
		localStorage.setItem("theme", next);
		setTheme(next);
	}

	return (
		<button
			aria-label="Toggle color theme"
			onClick={toggleTheme}
			className="inline-flex items-center gap-2 rounded border border-border px-3 py-1.5 text-sm hover:bg-black/5"
		>
			<span className="h-4 w-4 inline-block rounded-full"
				style={{ backgroundColor: theme === "light" ? "#fbbf24" : "#0ea5e9" }}
			/>
			{theme === "light" ? "Dark" : "Light"} mode
		</button>
	);
}

