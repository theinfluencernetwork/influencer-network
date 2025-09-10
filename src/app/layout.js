import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast"; //  import Toaster

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Best Influencer Marketing Platform and Agency in India",
  description:
    "Connect with 10,000+ creators. Run end-to-end influencer campaigns with strategy, execution, and analytics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />

        {/* Add Toaster here for toast notifications */}
        <Toaster position="top-center" reverseOrder={false} />

        {children}
        <Footer />

        {/* Instagram Embed Script */}
        <Script
          src="https://www.instagram.com/embed.js"
          strategy="lazyOnload"
          async
        />
      </body>
    </html>
  );
}
