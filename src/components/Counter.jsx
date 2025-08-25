"use client";
import { useEffect, useState } from "react";

export default function Counter({ value, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const numeric = parseInt(value.replace(/[^0-9]/g, ""), 10); // extract number
    let start = 0;
    const increment = numeric / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= numeric) {
        setCount(numeric);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  // keep suffix/prefix (like "+", "k")
  const suffix = value.replace(/[0-9,]/g, "");
  
  return <span>{count.toLocaleString()}{suffix}</span>;
}
