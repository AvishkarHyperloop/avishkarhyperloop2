import React from "react";
import PodShowcase from "./PodShowcase";
import PodParallaxText from "./PodParallaxText";
import {
  Cpu,
  Shield,
  Activity,
  Battery,
  Server,
  Radio,
  Database,
  Layers,
  Zap,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pod Generations | Avishkar Hyperloop",
  description: "Explore the evolution of our hyperloop pods, from early prototypes to the latest high-speed vehicles.",
};

export default function PodPage() {
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
    <main className="w-full bg-[#050505] text-white selection:bg-green-500/30 overflow-x-hidden pt-20">
      <PodParallaxText />

      {/* HERO */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center px-6 z-10 pb-20">
        <div className="text-center max-w-5xl relative">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] -z-10"></div>
          <span className="inline-block px-3 py-1 mb-6 border border-green-500/20 bg-green-500/5 rounded-full text-[10px] font-tech tracking-[0.3em] uppercase text-green-500">
            Fleet Configuration
          </span>
          <h1 className="text-7xl md:text-9xl font-tech font-bold tracking-tighter mb-4 leading-none text-white">
            THE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-700">
              HANGAR
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-neutral-400 font-light text-sm md:text-base leading-relaxed">
            Our iterative design philosophy has led to 6 generations of award-winning pods.
            Engineered for speed, efficiency, and safety.
          </p>
        </div>
      </section>

      {/* POD SHOWCASE */}
      <section className="relative z-10 bg-black/40 backdrop-blur-sm border-y border-white/5">
        <PodShowcase />
      </section>

      {/* TICKER */}
      <div className="w-full bg-green-500 py-3 overflow-hidden whitespace-nowrap border-y border-black/10">
        <div className="flex w-max animate-ticker">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              <span className="text-black font-tech font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <Activity size={14} /> Pressure: 0.01 ATM
              </span>
              <span className="text-black font-tech font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <Zap size={14} /> Velocity: Mach 0.8 Target
              </span>
              <span className="text-black font-tech font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <Battery size={14} /> Battery: 98%
              </span>
              <span className="text-black font-tech font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <Radio size={14} /> Link: Stable
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* SYSTEM SPECS */}
      <section className="py-32 px-6 md:px-12 lg:px-24 max-w-[1500px] mx-auto relative z-10">
        <div className="mb-16 text-center">
          <span className="text-green-500 font-tech tracking-[0.3em] text-[10px] uppercase">Technical Specifications</span>
          <h2 className="text-3xl md:text-5xl font-tech font-bold mt-2 uppercase text-white">System Architecture</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {specs.map((spec, i) => (
            <div
              key={i}
              className="bg-neutral-900/30 border border-white/5 p-8 rounded-2xl hover:bg-neutral-900/50 hover:border-green-500/20 transition-all group"
            >
              <div className="w-12 h-12 mb-6 rounded-lg bg-neutral-950 border border-white/10 flex items-center justify-center text-neutral-500 group-hover:text-green-500 group-hover:border-green-500/30 transition-all">
                <spec.icon size={22} />
              </div>

              <span className="text-neutral-500 text-[10px] font-tech tracking-[0.2em] uppercase block mb-2">
                {spec.label}
              </span>
              <h4 className="text-white font-tech font-bold text-xl mb-3">
                {spec.value}
              </h4>
              <p className="text-neutral-400 text-xs leading-relaxed font-light font-sans opacity-80">
                {spec.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}


