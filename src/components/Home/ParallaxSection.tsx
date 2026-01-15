"use client";

import React, { useRef, useEffect, useState } from "react";
import { Play, ChevronRight, MapPin } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ParallaxSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Use framer-motion for performance-critical scroll tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Transform scroll progress to scale value
  // Maps 0->1 progress to 1->1.18 scale (matching original 1 + progress * 0.18)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);

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
        <motion.div
          className="absolute inset-0 w-full h-full will-change-transform"
          style={{
            scale,
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
        </motion.div>


      </div>
    </div>
  );
};
