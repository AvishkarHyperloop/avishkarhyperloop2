"use client";

import React, { useEffect, useState, useRef } from "react";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  const [style, setStyle] = useState({
    opacity: 1,
    transform: "translateY(0px)",
  });

  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const y = window.scrollY;

        // Softer parallax on mobile
        const isMobile = window.innerWidth < 640;
        const translateFactor = isMobile ? 0.1 : 0.18;
        const fadeFactor = isMobile ? 800 : 600;

        setStyle({
          opacity: Math.max(0, 1 - y / fadeFactor),
          transform: `translateY(${y * -translateFactor}px)`,
        });

        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_35%,rgba(34,197,94,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 w-full max-w-7xl px-5 sm:px-10 lg:px-24">
        <div
          className="
            max-w-3xl
            space-y-6 sm:space-y-8
          "
          style={style}
        >
          {/* Eyebrow */}
          <div className="space-y-3">
            <span
              className="
                block
                text-green-400 font-tech uppercase
                tracking-[0.45em]
                text-[10px] sm:text-xs
                opacity-90
              "
            >
              Building the Fifth Mode of Transport
            </span>
            <div className="w-14 sm:w-20 h-[1px] bg-green-500/80 shadow-[0_0_18px_rgba(34,197,94,0.9)]" />
          </div>

          {/* ================= HEADLINE ================= */}
          <h1
            className="
              font-tech font-extrabold text-white
              leading-[0.95]
              tracking-tight

              text-[clamp(3.2rem,11vw,9rem)]
              sm:text-[clamp(4.5rem,9vw,9rem)]
            "
          >
            HYPERLOOP
            <br />
            <span className="font-light text-gray-200 block mt-1 sm:mt-2">
              FOR{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-400 to-green-500">
                INDIA
              </span>
            </span>
          </h1>

          {/* ================= DESCRIPTION ================= */}
          <p
            className="
              text-gray-300 font-light
              leading-relaxed

              text-[clamp(1rem,4vw,1.15rem)]
              max-w-xl
            "
          >
            Avishkar Hyperloop is engineering a sustainable,
            ultra-high-speed transportation system — designed
            for scalability, efficiency, and India’s future
            mobility needs.
          </p>

          {/* ================= CTA ================= */}
          <div className="pt-3 sm:pt-6">
            <button
              className="
                group inline-flex items-center gap-3
                px-8 py-4 sm:px-10 sm:py-5
                border border-green-500/60
                bg-green-500/10
                text-white font-tech font-bold
                tracking-[0.22em] text-[11px] sm:text-sm

                transition-all duration-500
                hover:bg-green-500 hover:text-black
                hover:shadow-[0_0_70px_rgba(34,197,94,0.5)]
              "
            >
              DISCOVER THE POD
              <ChevronRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </button>
          </div>
        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-24 opacity-60">
        <div className="w-[1px] h-12 sm:h-16 bg-gradient-to-b from-green-500 to-transparent animate-bounce" />
      </div>
    </section>
  );
}
