"use client";

import React, { useRef, useEffect, useState } from "react";
import { Play, ChevronRight, MapPin } from "lucide-react";

export const ParallaxSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height - windowHeight || 1;

      let scrollProgress = -rect.top / totalHeight;
      scrollProgress = Math.max(0, Math.min(1, scrollProgress));

      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const BG_IMAGES = [
    "/media/image8.JPG",
    "/media/image5.jpeg",
    "/media/image1.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % BG_IMAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={sectionRef} className="relative h-[220vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background with zoom */}
        <div
          className="absolute inset-0 w-full h-full will-change-transform"
          style={{
            transform: `scale(${1 + progress * 0.18})`,
          }}
        >
          {BG_IMAGES.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Background ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-[#051a05]/80 via-transparent to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 opacity-90" />
        </div>

  
      </div>
    </div>
  );
};
