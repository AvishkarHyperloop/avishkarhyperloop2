"use client";

import React, { useEffect, useState, useRef } from "react";
import { ChevronRight, Radio, Wind, Target } from "lucide-react";

export default function Hero() {
  const [style, setStyle] = useState({ opacity: 1, transform: "translateY(0px)" });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [telemetry, setTelemetry] = useState({ speed: 1210, gap: 15.2, pressure: 0.0012 });
  const ticking = useRef(false);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setStyle({
          opacity: Math.max(0, 1 - y / 800),
          transform: `translateY(${y * -0.15}px)`,
        });
        ticking.current = false;
      });
    };

    const onMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const animate = () => {
      setTelemetry({
        speed: 1210 + Math.sin(Date.now() / 1200) * 6,
        gap: 15 + Math.sin(Date.now() / 900) * 0.3,
        pressure: 0.0012 + Math.sin(Date.now() / 1500) * 0.00008,
      });
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#020202] overflow-hidden flex items-center font-tech">

      {/* ================= BEST LOOKING 3D GRID BACKGROUND ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none perspective-[1600px]">

        {/* FAR GRID */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)",
            backgroundSize: "140px 140px",
            transform: `
              translateZ(-900px)
              rotateX(80deg)
              translateY(${style.opacity * 90}px)
              scale(4.5)
            `,
            filter: "blur(1px)",
          }}
        />

        {/* MID GRID */}
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,197,94,0.85) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.85) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            transform: `
              translateZ(-450px)
              rotateX(70deg)
              translateY(${style.opacity * 60}px)
              scale(3.2)
            `,
          }}
        />

        {/* NEAR GRID */}
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,197,94,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            transform: `
              translateZ(-160px)
              rotateX(62deg)
              translateY(${style.opacity * 40}px)
              scale(2.4)
            `,
          }}
        />

        {/* LIGHT VOLUME */}
        <div
          className="absolute w-[1200px] h-[1200px] rounded-full blur-[180px]"
          style={{
            left: mousePos.x - 600,
            top: mousePos.y - 600,
            background: "rgba(34,197,94,0.08)",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      </div>

      {/* ================= RIGHT TELEMETRY ================= */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 space-y-12 hidden lg:block z-20">
        <div className="space-y-2 text-right">
          <p className="text-[10px] text-green-500/50 uppercase tracking-[0.3em]">Velocity</p>
          <p className="text-5xl font-extrabold text-white tabular-nums">
            {telemetry.speed.toFixed(0)}
            <span className="text-xl ml-2">KM/H</span>
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-end gap-4">
            <div className="text-right">
              <p className="text-[9px] text-green-500/50 uppercase">Mag_Lev Gap</p>
              <p className="text-sm text-white font-mono">{telemetry.gap.toFixed(2)} mm</p>
            </div>
            <Target size={20} className="text-green-500" />
          </div>

          <div className="flex items-center justify-end gap-4">
            <div className="text-right">
              <p className="text-[9px] text-green-500/50 uppercase">Vacuum_Pressure</p>
              <p className="text-sm text-white font-mono">{telemetry.pressure.toFixed(4)} bar</p>
            </div>
            <Wind size={20} className="text-green-500" />
          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 w-full max-w-7xl px-5 sm:px-10 lg:px-24">
        <div className="max-w-4xl space-y-8" style={style}>

          <div className="inline-flex items-center gap-4 bg-green-500/5 border border-green-500/20 px-4 py-1.5">
            <Radio size={12} className="text-green-500 animate-pulse" />
            <span className="text-green-400 uppercase tracking-[0.45em] text-[10px]">
              Engineering India's Future
            </span>
          </div>

          {/* ================= EXACT REQUESTED H1 ================= */}
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

          <p className="text-gray-400 font-light leading-relaxed text-lg max-w-xl border-l-2 border-green-500/50 pl-6">
            Avishkar Hyperloop is scaling the next generation of logistics.
            Reducing 24-hour freight cycles to under 60 minutes.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-10 py-5 bg-green-500 text-black font-bold tracking-[0.2em] text-xs uppercase hover:shadow-[0_0_40px_rgba(34,197,94,0.45)] transition-all">
              Launch Console <ChevronRight size={18} />
            </button>

            <button className="px-10 py-5 border border-white/20 text-white font-bold tracking-[0.2em] text-xs uppercase hover:bg-white/5 transition-colors">
              View Blueprints
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
