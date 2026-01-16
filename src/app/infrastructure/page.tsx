"use client";
import React, { useEffect } from "react";
import {
  Layers,
  Thermometer,
  Wind,
  Zap,
  Activity,
  Construction,
  ArrowDown,
  Cpu,
  Database,
  ShieldCheck,
  Microscope,
  FileText,
  Box,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { INFRASTRUCTURE_DATA } from "@/Constants";

export default function InfrastructurePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#020202] text-white pt-20 font-sans selection:bg-green-500/30">
      
      {/* 1. OPTIMIZED HERO SECTION */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202] z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?q=80&w=2500&auto=format&fit=crop"
            alt="Tube Infrastructure"
            className="w-full h-full object-cover opacity-10 scale-105"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 mb-6">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
            </span>
            <span className="text-green-500 font-tech tracking-[0.3em] text-[9px] uppercase">
              Phase 8.0 // Core-Infra
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-tech font-bold tracking-tight mb-6 leading-tight uppercase">
            The Vein of<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600">
              The Future
            </span>
          </h1>
          
          <div className="max-w-2xl mx-auto border-l border-green-500/40 pl-6 text-left">
            <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed">
              We are engineering the physical backbone of the 5th mode of transport. 
              Our vacuum-tight shells and optimized pylon networks are designed for Mach 1.0 speeds, 
              redefining the feasibility of civil-scale connectivity.
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="h-12 w-px bg-gradient-to-b from-green-500/50 to-transparent"></div>
        </div>
      </section>

      {/* 2. MISSION CONTROL DASHBOARD */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <h2 className="text-green-500 font-tech tracking-[0.2em] text-[10px] uppercase">Engineering Mandate</h2>
              <h3 className="text-3xl md:text-5xl font-tech font-bold leading-none uppercase italic">
                Feasible. Scalable.<br/>Economical.
              </h3>
              <p className="text-base text-neutral-400 leading-relaxed max-w-xl">
                The Infrastructure team focuses on the design and development of large-scale systems. 
                We operate at the nexus of <span className="text-white">Material Science</span> and 
                <span className="text-white"> Structural Engineering</span> to bridge the gap between 
                transonic speeds and commercial viability.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: 'Patents', val: '03', icon: FileText },
                { label: 'Papers', val: '02', icon: Microscope },
                { label: 'OPEX Reduc.', val: '46%', icon: Zap },
                { label: 'Vacuum', val: '0.001', icon: Wind },
              ].map((stat, i) => (
                <div key={i} className="p-5 rounded-xl bg-neutral-900/40 border border-white/5 group">
                  <stat.icon className="w-4 h-4 text-green-500 mb-3" />
                  <div className="text-2xl font-tech font-bold mb-0.5">{stat.val}</div>
                  <div className="text-[8px] uppercase tracking-[0.2em] text-neutral-500 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <h4 className="font-tech text-[9px] uppercase tracking-[0.3em] text-green-500 mb-6">Simulation Status</h4>
            <div className="space-y-5">
              {[
                { title: 'Structural Integrity', val: 98 },
                { title: 'Vacuum Retention', val: 94 },
                { title: 'Seismic Resilience', val: 89 },
                { title: 'Thermal Expansion', val: 92 }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-[9px] uppercase font-tech tracking-widest">
                    <span className="text-neutral-400">{item.title}</span>
                    <span className="text-green-500">{item.val}%</span>
                  </div>
                  <div className="h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-500/60 shadow-[0_0_8px_#22c55e]" 
                      style={{ width: `${item.val}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. TUBE ANATOMY VISUALIZATION */}
      <section className="py-24 px-6 bg-neutral-900/10 border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 flex justify-center order-2 lg:order-1">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-green-500/5 blur-3xl"></div>
              {/* Optimized Tube Cross Section UI */}
              <div className="absolute inset-0 rounded-full border border-white/10 flex items-center justify-center p-4">
                <div className="w-full h-full rounded-full border-[12px] border-neutral-800 flex items-center justify-center">
                  <div className="w-[85%] h-[85%] rounded-full bg-black border border-green-500/30 relative flex items-center justify-center overflow-hidden">
                    <div className="absolute bottom-12 w-2/3 h-0.5 bg-green-500 shadow-[0_0_15px_#22c55e]"></div>
                    <Activity className="w-6 h-6 text-green-500/20 animate-pulse" />
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-neutral-900 border border-white/10 rounded-full text-[8px] font-tech uppercase tracking-widest text-green-400">Pressure: 0.001 ATM</div>
            </div>
          </div>

          <div className="flex-1 space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-tech font-bold uppercase tracking-tight">Tube Anatomy</h2>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-lg font-light">
              Our vacuum tube creates a near-frictionless environment. By utilizing a 
              <span className="text-white"> 20mm reinforced substrate</span>, we maintain high-pressure 
              differentials while ensuring long-term structural fatigue resistance.
            </p>
            <div className="grid gap-3 pt-4">
              {[
                { title: 'Pylon Support', desc: 'Seismic Dampening Geometry', icon: Construction },
                { title: 'Aero-Gaskets', desc: 'Thermal Leakage Prevention', icon: ShieldCheck },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                  <item.icon size={18} className="text-green-500" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider">{item.title}</h4>
                    <p className="text-[11px] text-neutral-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE VS INTERFACE - REFINED GRID */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-green-500 font-tech tracking-[0.3em] text-[10px] uppercase">R&D Directives</span>
          <h2 className="text-3xl md:text-5xl font-tech font-bold mt-2 uppercase tracking-tight">Physical Systems</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-neutral-900/40 border border-white/5 rounded-2xl p-10 space-y-8">
            <h3 className="text-xl font-tech font-bold text-green-500 flex items-center gap-2">
              <Box size={16} /> CORE COMPONENTS
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-300">Thaiyyur Test Track</h4>
                <p className="text-[13px] text-neutral-500 leading-relaxed font-light">
                  Experimental site for validating structural configurations and thermal expansion behavior 
                  using full-scale field measurements.
                </p>
                <div className="inline-block px-2 py-1 bg-green-500/10 border border-green-500/20 rounded text-[9px] text-green-400 font-tech">
                  CONCRETE ARCHITECTURE: -46% CAPEX
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-300">Modular Track bed</h4>
                <p className="text-[13px] text-neutral-500 leading-relaxed font-light">
                  Maintaining alignment precision under dynamic loads through vibration isolation 
                  and fatigue-resistant mounting systems.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-10 flex flex-col justify-between">
            <div className="space-y-6">
               <h3 className="text-xl font-tech font-bold flex items-center gap-2">
                 <Wind size={16} /> INTERFACE
               </h3>
               <div className="space-y-5">
                 <div>
                    <h4 className="text-[10px] font-bold text-green-500 uppercase tracking-widest mb-1">Airlocks</h4>
                    <p className="text-xs text-neutral-500 leading-relaxed font-light">Segmented vacuum chambers reducing turnaround to 25 mins.</p>
                 </div>
                 <div className="opacity-40">
                    <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">Docking (Future)</h4>
                    <p className="text-[10px] text-neutral-600 leading-relaxed uppercase">Seamless freight boarding research.</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TECH STACK STRIP */}
      <section className="py-16 px-6 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {['ANSYS', 'ABAQUS', 'SOLIDWORKS', 'MATLAB', 'FUSION 360', 'AUTOCAD'].map((tool) => (
            <span key={tool} className="font-tech text-xs tracking-[0.3em] font-bold">{tool}</span>
          ))}
        </div>
      </section>

      {/* 6. COMPONENT CARDS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {INFRASTRUCTURE_DATA.map((item) => (
            <div
              key={item.id}
              className="group bg-neutral-900/20 border border-white/5 p-8 rounded-xl transition-all hover:bg-neutral-900/40"
            >
              <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center mb-6 text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all">
                {item.id === 1 && <Wind size={20} />}
                {item.id === 2 && <Thermometer size={20} />}
                {item.id === 3 && <Construction size={20} />}
                {item.id === 4 && <Zap size={20} />}
              </div>
              <h3 className="text-sm font-tech font-bold mb-3 uppercase tracking-wider">{item.title}</h3>
              <p className="text-neutral-500 text-[11px] leading-relaxed mb-6 line-clamp-3 font-light">
                {item.description}
              </p>
              <div className="pt-4 border-t border-white/5">
                <span className="text-green-400 font-tech text-xl font-bold">{item.stats}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FOOTER ACTION */}
      <section className="py-32 text-center relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-[100px] -z-10"></div>
         <h2 className="text-3xl md:text-5xl font-tech font-bold uppercase mb-8 tracking-tighter">Foundation for the future</h2>
         <button className="px-10 py-4 bg-white text-black font-tech text-[10px] uppercase tracking-[0.3em] hover:bg-green-500 transition-all rounded-full font-bold">
            Technical Documentation
         </button>
      </section>
    </div>
  );
}