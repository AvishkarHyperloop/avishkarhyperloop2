"use client";

import React, { useEffect, useRef } from "react";
import { Radio, Wind, Target } from "lucide-react";
import dynamic from "next/dynamic";

// Lazy load tunnel (huge win)
const HyperloopTunnel = dynamic(() => import("./HyperloopTunnel"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const speedRef = useRef<HTMLSpanElement>(null);
  const gapRef = useRef<HTMLSpanElement>(null);
  const pressureRef = useRef<HTMLSpanElement>(null);

  const latestScroll = useRef(0);
  const latestMouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const rafRunning = useRef(false);
  const lastMouseUpdate = useRef(0);

  /* ================= MASTER RAF LOOP ================= */
  useEffect(() => {
    const updateFrame = () => {
      rafRunning.current = false;

      const y = latestScroll.current;
      if (y <= 900) {
        const opacity = Math.max(0, 1 - y / 800);
        const moveY = y * -0.15;

        document.documentElement.style.setProperty("--hero-opacity", opacity.toString());
        document.documentElement.style.setProperty("--hero-y", `${moveY}px`);
      }

      document.documentElement.style.setProperty("--mx", `${latestMouse.current.x}px`);
      document.documentElement.style.setProperty("--my", `${latestMouse.current.y}px`);
    };

    const requestFrame = () => {
      if (!rafRunning.current) {
        rafRunning.current = true;
        requestAnimationFrame(updateFrame);
      }
    };

    const onScroll = () => {
      latestScroll.current = window.scrollY;
      requestFrame();
    };

    const onMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastMouseUpdate.current < 33) return; // 30 FPS cap

      lastMouseUpdate.current = now;
      latestMouse.current = { x: e.clientX, y: e.clientY };
      requestFrame();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  /* ================= TELEMETRY ================= */
  useEffect(() => {
    const interval = setInterval(() => {
      const t = Date.now();

      if (speedRef.current)
        speedRef.current.textContent = (1210 + Math.sin(t / 1200) * 6).toFixed(0);

      if (gapRef.current)
        gapRef.current.textContent = (15 + Math.sin(t / 900) * 0.3).toFixed(2);

      if (pressureRef.current)
        pressureRef.current.textContent = (0.0012 + Math.sin(t / 1500) * 0.00008).toFixed(4);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#020202] overflow-hidden flex items-center font-tech">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_90%)]" />

        <HyperloopTunnel />

        {/* GPU-friendly light (no heavy blur) */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full pointer-events-none will-change-transform opacity-40"
          style={{
            transform: "translate(calc(var(--mx, 50vw) - 400px), calc(var(--my, 50vh) - 400px))",
            background: "radial-gradient(circle, rgba(34,197,94,0.25) 0%, rgba(34,197,94,0.05) 40%, transparent 70%)",
          }}
        />
      </div>

      {/* ================= TELEMETRY ================= */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 space-y-12 hidden lg:block z-20">
        <div className="space-y-2 text-right">
          <p className="text-[10px] text-green-500/50 uppercase tracking-[0.3em]">Velocity</p>
          <p className="text-5xl font-extrabold text-white tabular-nums">
            <span ref={speedRef}>1210</span>
            <span className="text-xl ml-2">KM/H</span>
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-end gap-4">
            <div className="text-right">
              <p className="text-[9px] text-green-500/50 uppercase">Mag_Lev Gap</p>
              <p className="text-sm text-white font-mono"><span ref={gapRef}>15.20</span> mm</p>
            </div>
            <Target size={20} className="text-green-500" />
          </div>

          <div className="flex items-center justify-end gap-4">
            <div className="text-right">
              <p className="text-[9px] text-green-500/50 uppercase">Vacuum_Pressure</p>
              <p className="text-sm text-white font-mono"><span ref={pressureRef}>0.0012</span> bar</p>
            </div>
            <Wind size={20} className="text-green-500" />
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 w-full max-w-7xl px-5 sm:px-10 lg:px-24">
        <div
          className="max-w-4xl space-y-8 will-change-transform"
          style={{
            opacity: "var(--hero-opacity, 1)",
            transform: "translate3d(0,var(--hero-y,0),0)",
          }}
        >
          <div className="inline-flex items-center gap-4 bg-green-500/5 border border-green-500/20 px-4 py-1.5">
            <Radio size={12} className="text-green-500 animate-pulse" />
            <span className="text-green-400 uppercase tracking-[0.45em] text-[10px]">
              Engineering India's Future
            </span>
          </div>

          <h1 className="font-tech font-extrabold text-white leading-[0.92] tracking-tight text-[clamp(2.6rem,12vw,8rem)]">
            HYPERLOOP
            <span className="block mt-2 font-light text-gray-200">
              FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-400 to-green-500">INDIA</span>
            </span>
          </h1>

          <p className="text-gray-400 font-light leading-relaxed text-lg max-w-xl border-l-2 border-green-500/50 pl-6">
            Avishkar Hyperloop is scaling the next generation of logistics. Reducing 24-hour freight cycles to under 60 minutes.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-10 py-5 bg-green-500 text-black font-bold tracking-[0.2em] text-xs uppercase hover:scale-105 transition-transform">
              Launch Console
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
