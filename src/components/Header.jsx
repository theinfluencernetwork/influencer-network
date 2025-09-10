"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Styled nav links
  const navLinks = [
    {
      href: "/influencers", // updated path
      label: (
        <>
          {/* Emoji toggle effect */}
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full text-lg mr-1 shadow-md transition-transform duration-300 hover:scale-110 relative">
            <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-100 hover:opacity-0">
              🧔🏻
            </span>
            <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100">
              👩🏻‍🦳
            </span>
          </span>
          For Creators
        </>
      ),
    },
    {
      href: "/campaigns",
      label: (
        <>
          <span className="mr-1">💼</span>
          Our Campaigns!
        </>
      ),
    },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-white shadow-md">
      <div className="mx-auto max-w-6xl px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Logo" width={180} height={70} />
          </Link>

          {/* Desktop Nav + Theme Toggle */}
          <div className="hidden md:flex items-center gap-10">
            <nav className="flex items-center gap-8 text-base font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-gray-700 hover:text-black transition-colors
                    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                    after:bg-gradient-to-r after:from-black after:to-red-500
                    after:opacity-0 hover:after:opacity-100
                    after:transition-all after:duration-500 hover:after:w-full flex items-center"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded border border-black/10"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((v) => !v)}
          >
            <span className="i-heroicons-bars-3 text-2xl">≡</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-4 flex flex-col gap-3 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded px-2 py-2 text-base font-medium hover:bg-black/5 relative text-gray-700 hover:text-black
                  after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0
                  after:bg-gradient-to-r after:from-black after:to-red-500
                  after:opacity-0 hover:after:opacity-100
                  after:transition-all after:duration-500 hover:after:w-full flex items-center"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {/* <ThemeToggle /> */}
          </div>
        )}
      </div>
    </header>
  );
}
