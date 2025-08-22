"use client";
import Image from "next/image";
import { useState } from "react";

const logos = [
  { src: "/companies/citykart.png", alt: "Citykart" },
  { src: "/companies/pw.png", alt: "PW" },
  { src: "/companies/swiggy.png", alt: "Swiggy" },
  { src: "/companies/trends.png", alt: "Trends" },
  { src: "/companies/godrej.png", alt: "Godrej" },
  { src: "/companies/decathlon.png", alt: "Decathlon" },
  { src: "/companies/cashify.png", alt: "Cashify" },
  { src: "/companies/zomato.png", alt: "Zomato" },
  { src: "/companies/unacademy.png", alt: "Unacademy" },
];

export default function LogosCarousel() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="carousel-wrapper">
      <div
        className="carousel"
        style={{
          animationDuration: isHovered ? "35s" : "20s", // smooth speed control
        }}
      >
        {[...logos, ...logos].map((logo, idx) => (
          <div
            key={idx}
            className="carousel-item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={160}
              height={65}
              className="logo-img"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .carousel-wrapper {
          width: 100%;
          overflow: hidden;
          padding: 20px 0;
          background: #fff;
          /* Removed the borders */
        }

        .carousel {
          display: flex;
          gap: 60px;
          width: max-content;
          animation: scroll var(--speed, 20s) linear infinite;
          transition: animation-duration 0.5s ease; /* smooth slowdown */
        }

        .carousel-item img {
          height: 65px; /* medium logo size */
          transition: transform 0.3s ease;
        }

        .carousel-item img:hover {
          transform: scale(1.2); /* pop effect */
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
