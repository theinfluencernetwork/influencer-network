"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  PhoneCall,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white mt-24 border-t border-red-600">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-center sm:text-left">
        
        {/* Left Section - Logo Text & Tagline */}
        <div className="space-y-4">
          <div className="font-extrabold text-3xl leading-tight tracking-wide">
            <span className="block text-white">THE</span>
            <span className="block text-white mt-1">INFLUENCER NETWORK</span>
          </div>
          <p className="text-sm text-gray-300 max-w-xs mx-auto sm:mx-0">
            Amplify your brand through strategic influencer marketing.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <nav className="space-y-3">
          <p className="font-semibold text-red-400">Quick Links</p>
          <div className="flex flex-col gap-2">
            <Link href="/about" className="hover:text-red-400 transition">About</Link>
            <Link href="/services" className="hover:text-red-400 transition">Services</Link>
            <Link href="/influencers" className="hover:text-red-400 transition">Influencers</Link>
            <Link href="/brands" className="hover:text-red-400 transition">Brands</Link>
            <Link href="/contact" className="hover:text-red-400 transition">Contact</Link>
          </div>
        </nav>

        {/* Right Section - Contact & Social */}
        <div className="space-y-4">
          <p className="font-semibold text-red-400">Contact</p>
          <div className="flex justify-center sm:justify-start items-center gap-2">
            <Phone size={18} className="text-red-400" />
            <span>+91 6209767269</span>
          </div>
          <div className="flex justify-center sm:justify-start items-center gap-2">
            <Mail size={18} className="text-red-400" />
            <a href="mailto:support@influencernetwork.in" className="hover:text-red-400 transition">
              support@influencernetwork.in
            </a>
          </div>
          <div className="flex justify-center sm:justify-start items-center gap-2">
            <Mail size={18} className="text-red-400" />
            <a href="mailto:collab@influencernetwork.in" className="hover:text-red-400 transition">
              collab@influencernetwork.in
            </a>
          </div>
          <div className="flex justify-center sm:justify-start items-center gap-2">
            <MapPin size={18} className="text-red-400" />
            <span>
              Sector 16C, Gaur City 2, Greater Noida, Uttar Pradesh 201318
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center sm:justify-start gap-4 mt-4">
            <a href="https://www.facebook.com/profile.php?id=61574455124778" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Twitter size={20} />
            </a>
            <a href="https://www.instagram.com/theinfluencernetwork.in?igsh=cm9lczFvYWN3Zng0" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/company/theinfluencernetworek/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <Link
        href="/contact"
        className="fixed bottom-6 right-6 flex items-center justify-center w-20 h-20 rounded-full bg-red-600 shadow-lg z-50 group"
      >
        <PhoneCall size={32} className="text-white animate-ring z-10" />
        <div className="absolute w-28 h-28 flex items-center justify-center">
          <p className="animate-spin-slow text-[11px] text-gray-300 tracking-[3px]">
            • CONTACT NOW • CONTACT NOW • CONTACT NOW •
          </p>
        </div>
        <span className="absolute inset-0 rounded-full border-4 border-red-400 opacity-60 animate-ping"></span>
      </Link>

      {/* Bottom Strip */}
      <div className="border-t border-red-600 py-4 text-center text-xs text-gray-400">
        © 2025 The Influencer Network. All Rights Reserved.
      </div>

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-bounce-slow { animation: float 3s ease-in-out infinite; }

        @keyframes ring {
          0% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(-10deg) scale(1.1); }
          50% { transform: rotate(10deg) scale(1.1); }
          75% { transform: rotate(-10deg) scale(1.05); }
          100% { transform: rotate(0deg) scale(1); }
        }
        .animate-ring { animation: ring 1.5s infinite ease-in-out; }
        .animate-spin-slow { animation: spin 12s linear infinite; }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 9999px;
          border: 1px solid #f87171;
          color: white;
          transition: all 0.3s ease-in-out;
        }
        .social-icon:hover {
          background: linear-gradient(to bottom right, #dc2626, #000);
          transform: translateY(-4px) scale(1.25) rotate(5deg);
          box-shadow: 0 0 20px rgba(255, 0, 0, 0.6);
        }
      `}</style>
    </footer>
  );
}
