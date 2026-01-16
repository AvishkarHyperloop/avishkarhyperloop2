"use client";

import React, { useEffect, useRef } from "react";
import PodShowcase from "./PodShowcase";
import {
  Cpu,
  Shield,
  Activity,
  Battery,
  Server,
  Radio,
  Database,
  Layers,
} from "lucide-react";

export default function Podpage() {
  // ✅ Properly typed refs
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      // Use direct transform to avoid style recalc for the whole document
      if (textRef.current) {
        const scrolled = window.scrollY;
        // Apply transform directly (0.15 factor from original)
        textRef.current.style.transform = `translate3d(${-scrolled * 0.15}px, 0, 0)`;
      }
    };

    // Use passive listener for performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const specs = [
    { icon: Cpu, label: "Avionics", value: "Triple Redundant", desc: "Fail-safe voting logic systems" },
    { icon: Battery, label: "Power", value: "Li-Po High Discharge", desc: "800V Architecture" },
    { icon: Shield, label: "Chassis", value: "Carbon Monocoque", desc: "Aero-grade composite" },
    { icon: Activity, label: "Telemetry", value: "Real-time 5GHz", desc: "1ms latency feedback" },
    { icon: Radio, label: "Comms", value: "Low Latency Mesh", desc: "Redundant link nodes" },
    { icon: Server, label: "Processing", value: "Edge AI Units", desc: "On-board vector compute" },
    { icon: Database, label: "Logging", value: "Blackbox Grade", desc: "Hardened flash storage" },
    { icon: Layers, label: "Braking", value: "Pneumatic Friction", desc: "Emergency fail-stop" },
  ];

  return (
    <main
      ref={containerRef}
      className="w-full bg-[#050505] text-white selection:bg-green-500/30 overflow-x-hidden"
    >
      {/* BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          ref={textRef}
          className="absolute top-24 left-0 text-[12rem] md:text-[16rem] font-bold text-white/[0.025] whitespace-nowrap select-none will-change-transform"
          style={{
            transform: "translate3d(0,0,0)",
          }}
        >
          AVISHKAR HYPERLOOP AVISHKAR HYPERLOOP
        </div>

        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_65%,transparent_100%)]" />
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 z-10">
        <div className="text-center max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-tech font-bold tracking-tighter mb-8 leading-none">
            THE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
              HANGAR
            </span>
          </h1>
        </div>
      </section>

      {/* POD SHOWCASE */}
      <section className="relative z-10 bg-black/40 backdrop-blur-xl border-y border-white/5">
        <PodShowcase />
      </section>

      {/* TICKER */}
      <div className="w-full bg-green-500 py-2 overflow-hidden whitespace-nowrap border-y border-black/10">
        <div className="flex w-max animate-ticker">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="px-10 text-black font-tech font-bold text-xs uppercase"
            >
              Pressure: 0.01 ATM • Velocity: Mach 0.8 Target • Battery: 98% • Link: Stable
            </span>
          ))}
        </div>
      </div>

      {/* SYSTEM SPECS */}
      <section className="py-32 px-6 md:px-12 lg:px-24 max-w-[1500px] mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {specs.map((spec, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 mb-6 rounded-lg bg-black border border-white/10 flex items-center justify-center text-gray-400">
                <spec.icon size={22} />
              </div>

              <span className="text-gray-500 text-[10px] font-tech tracking-widest uppercase block mb-1">
                {spec.label}
              </span>
              <h4 className="text-white font-tech font-bold text-lg mb-2">
                {spec.value}
              </h4>
              <p className="text-gray-500 text-xs leading-relaxed">
                {spec.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CSS */}
      <style jsx>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 40s linear infinite;
          will-change: transform;
        }
      `}</style>
    </main>
  );
}

