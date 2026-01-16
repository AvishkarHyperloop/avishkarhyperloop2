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
  const containerRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // RAF-throttled scroll handler (prevents Chrome main-thread saturation)
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        document.documentElement.style.setProperty("--scroll-y", `${scrolled}px`);
        rafRef.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
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
      {/* ================= BACKGROUND LAYER (GPU OPTIMIZED) ================= */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute top-24 left-0 text-[12rem] md:text-[16rem] font-bold text-white/[0.025] whitespace-nowrap select-none will-change-transform"
          style={{
            transform: "translate3d(calc(var(--scroll-y, 0) * -0.15px),0,0)",
          }}
        >
          AVISHKAR HYPERLOOP AVISHKAR HYPERLOOP
        </div>

        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_65%,transparent_100%)]" />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 z-10">
        <div className="absolute top-32 left-10 w-24 h-24 border-t-2 border-l-2 border-green-500/20" />
        <div className="absolute bottom-32 right-10 w-24 h-24 border-b-2 border-r-2 border-green-500/20" />

        <div className="text-center max-w-5xl">
          <div className="inline-flex items-center gap-3 px-4 py-1 border border-green-500/30 bg-green-900/10 rounded-full mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-50 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-green-400 font-tech tracking-[0.4em] text-[10px] uppercase">
              Terminal: HGR-05 // Authorization Confirmed
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-tech font-bold tracking-tighter mb-8 leading-none">
            THE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
              HANGAR
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-12 border-t border-white/10 pt-8">
            <div>
              <h3 className="text-green-500 font-tech text-xs uppercase tracking-widest mb-2">
                // Mission
              </h3>
              <p className="text-gray-400 text-sm">
                To design, build, and iterate the future of high-speed vacuum transportation.
              </p>
            </div>
            <div>
              <h3 className="text-green-500 font-tech text-xs uppercase tracking-widest mb-2">
                // Location
              </h3>
              <p className="text-gray-400 text-sm">
                IIT Madras, Center for Innovation. Engineering Bay 04.
              </p>
            </div>
            <div>
              <h3 className="text-green-500 font-tech text-xs uppercase tracking-widest mb-2">
                // Status
              </h3>
              <p className="text-gray-400 text-sm">
                Active Development. Prototypes undergoing vacuum testing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= POD SHOWCASE ================= */}
      <section className="relative z-10 bg-black/40 backdrop-blur-xl border-y border-white/5">
        <PodShowcase />
      </section>

      {/* ================= PERFORMANCE TICKER ================= */}
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

      {/* ================= ARCHITECTURE ================= */}
      <section className="py-32 px-6 md:px-12 lg:px-24 max-w-[1500px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="border-l-4 border-green-500 pl-6">
            <span className="text-green-500 font-tech tracking-[0.3em] text-sm uppercase block mb-2">
              Engineering Specs
            </span>
            <h2 className="text-5xl md:text-7xl font-tech font-bold text-white">
              SYSTEMS
              <br />
              INTEGRATION
            </h2>
          </div>
          <p className="max-w-md text-gray-400 text-sm leading-relaxed text-right">
            Every subsystem is built for the extreme conditions of a sub-atmospheric tube.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {specs.map((spec, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl transition-colors hover:bg-white/10 group relative"
            >
              <div className="w-12 h-12 mb-6 rounded-lg bg-black border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-green-400 group-hover:border-green-500/50 transition-colors">
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

      {/* ================= CSS ================= */}
      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-ticker {
          animation: ticker 40s linear infinite;
          will-change: transform;
        }
      `}</style>
    </main>
  );
}
