"use client";
import React, { useEffect, useState } from "react";
import {
  Layers, Thermometer, Wind, Zap, Activity, Construction, 
  ArrowDown, Cpu, Database, ShieldCheck, Microscope, 
  FileText, Box, Maximize2, Globe, Beaker, Hexagon, HardHat
} from "lucide-react";
import { INFRASTRUCTURE_DATA } from "@/Constants";

export default function InfrastructurePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#020202] text-white pt-20 font-sans selection:bg-green-500/30 overflow-x-hidden">
      
      {/* 1. CINEMATIC HERO: THE "VEIN" INTERFACE */}
      <section className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202] z-10" />
          <img
            src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?q=80&w=2500&auto=format&fit=crop"
            alt="Tube Infrastructure"
            className="w-full h-full object-cover opacity-[0.08] scale-105"
          />
          {/* SVG Tech Grid Backdrop */}
          <div className="absolute inset-0 opacity-20" 
               style={{ backgroundImage: `radial-gradient(#22c55e 0.5px, transparent 0.5px)`, backgroundSize: '32px 32px' }}></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl px-6">
          <div className="flex flex-col items-center gap-4 mb-10">
            <div className={`px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/5 backdrop-blur-md transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="text-green-500 font-tech tracking-[0.4em] text-[10px] uppercase flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                Deployment Protocol // Sector 01-A
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-8xl font-tech font-bold tracking-tight mb-6 leading-tight uppercase">
            The Vein of<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600">
              The Future
            </span>
          </h1>
          
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-10 border-t border-white/10 pt-10 text-left">
            <p className="flex-1 text-neutral-400 font-light text-sm md:text-lg leading-relaxed italic">
              "Redefining global connectivity through vacuum-sealed corridors and 
              advanced pylon-shell integration."
            </p>
            <div className="grid grid-cols-2 gap-8 shrink-0">
               <div>
                  <div className="text-green-500 font-tech text-xl font-bold italic">0.001</div>
                  <div className="text-[9px] uppercase tracking-widest text-neutral-500">Target ATM</div>
               </div>
               <div>
                  <div className="text-white font-tech text-xl font-bold italic">MACH 1</div>
                  <div className="text-[9px] uppercase tracking-widest text-neutral-500">Cruise Velocity</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. RESEARCH DASHBOARD: "WHO WE ARE" BENTO */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative">
        <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-green-500/20" />
        
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-neutral-900/40 border border-white/5 rounded-3xl p-10 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                  <Hexagon size={120} className="text-green-500" />
               </div>
               <h2 className="text-green-500 font-tech tracking-[0.3em] text-[10px] uppercase mb-6">Team Mandate</h2>
               <h3 className="text-3xl md:text-5xl font-tech font-bold uppercase leading-none mb-6">
                 Intersection of <br/><span className="text-neutral-500 font-light italic underline decoration-green-500/50 underline-offset-8">Science & Civil Engineering</span>
               </h3>
               <p className="text-neutral-400 text-lg leading-relaxed font-light max-w-2xl mb-10">
                 The Infrastructure team focuses on the design, analysis, and development of large-scale 
                 structural systems. We operate at the nexus of construction engineering and material science 
                 to ensure Hyperloop isn't just fast—it’s commercially viable.
               </p>
               <div className="flex flex-wrap gap-4">
                  {['Conceptual Design', 'FEA Validation', 'Sealing Systems', 'Field Implementation'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[9px] font-tech uppercase text-neutral-400 tracking-widest">
                      {tag}
                    </span>
                  ))}
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex items-center justify-between group hover:bg-green-500/5 transition-all">
                  <div className="space-y-1">
                     <span className="text-green-500 font-tech text-3xl font-bold tracking-tighter">03</span>
                     <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Patents Filed</p>
                  </div>
                  <FileText className="text-neutral-700 group-hover:text-green-500/40 transition-colors" size={40} />
               </div>
               <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex items-center justify-between group hover:bg-green-500/5 transition-all">
                  <div className="space-y-1">
                     <span className="text-green-500 font-tech text-3xl font-bold tracking-tighter">02</span>
                     <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Research Papers</p>
                  </div>
                  <Microscope className="text-neutral-700 group-hover:text-green-500/40 transition-colors" size={40} />
               </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-green-500/5 border border-green-500/20 rounded-3xl p-10 flex flex-col justify-between">
            <div className="space-y-10">
               <div className="flex justify-between items-start">
                  <h4 className="font-tech text-xs uppercase tracking-[0.2em]">Efficiency Metric</h4>
                  <Beaker className="text-green-500" size={20} />
               </div>
               <div className="space-y-2">
                  <span className="text-6xl font-tech font-bold text-green-500 italic">-46%</span>
                  <p className="text-xs text-neutral-400 leading-relaxed tracking-wider uppercase">
                    Infrastructure Cost Reduction through Reinforced Concrete Tube Architectures
                  </p>
               </div>
            </div>
            <div className="pt-10 border-t border-green-500/10">
               <p className="text-[10px] text-neutral-500 font-mono leading-relaxed">
                  [SYSTEM STATUS]: Active R&D into low-cost sustainable urbanism. 
                  Focus: Madras-Bangalore Corridor.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ANATOMY SECTION: TECHNICAL SCHEMATIC */}
      <section className="py-32 px-6 bg-neutral-900/10 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-green-500/5 blur-[120px] rounded-full" />
            <div className="relative group p-10">
              {/* Technical SVG Ring Decoration */}
              <svg className="absolute inset-0 w-full h-full animate-[spin_60s_linear_infinite]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(34,197,94,0.1)" strokeWidth="0.5" strokeDasharray="4 4" />
              </svg>
              <div className="relative w-full aspect-square max-w-[400px] rounded-full border border-white/10 flex items-center justify-center p-6 bg-black/50 backdrop-blur-md">
                 <div className="w-full h-full rounded-full border-[14px] border-neutral-800 flex items-center justify-center relative">
                    <div className="w-[88%] h-[88%] rounded-full bg-black border border-green-500/40 flex items-center justify-center overflow-hidden">
                       <div className="absolute bottom-[28%] w-[70%] h-px bg-green-500/50 shadow-[0_0_20px_#22c55e]" />
                       <div className="absolute bottom-[28%] w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                       <Activity className="text-green-500/10 w-24 h-24" />
                    </div>
                 </div>
              </div>
              {/* Technical Labels */}
              <div className="absolute top-10 -right-4 bg-neutral-900 border border-white/10 px-3 py-1.5 rounded-md text-[8px] font-tech text-neutral-400 tracking-widest uppercase">
                20mm Steel Shell // ASTM-A36
              </div>
              <div className="absolute bottom-10 -left-4 bg-neutral-900 border border-white/10 px-3 py-1.5 rounded-md text-[8px] font-tech text-green-500 tracking-widest uppercase">
                Vacuum Retention: 99.9%
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-10 order-1 lg:order-2">
            <div>
              <h2 className="text-green-500 font-tech tracking-[0.4em] text-[10px] uppercase mb-4">Structural Profile</h2>
              <h3 className="text-4xl md:text-6xl font-tech font-bold uppercase tracking-tighter mb-6 leading-none">Tube Anatomy</h3>
              <p className="text-neutral-400 text-lg font-light leading-relaxed">
                The hyperloop tube is a high-precision vessel. By maintaining a pressure of 
                <span className="text-white"> 0.001 atm</span>, we eliminate aerodynamic drag, 
                enabling energy-efficient transonic travel across terrains.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Seal Integrity', val: 'Industrial Gasket Systems', icon: ShieldCheck },
                { title: 'Thermal Control', val: 'Advanced Expansion Joints', icon: Thermometer },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all group">
                  <div className="h-12 w-12 rounded-xl bg-green-500/5 border border-green-500/20 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-tech font-bold uppercase tracking-wider">{item.title}</h4>
                    <p className="text-[11px] text-neutral-500">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PHYSICAL ENGINEERING BENTO GRID */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
           <div className="space-y-4">
              <h2 className="text-green-500 font-tech tracking-[0.4em] text-[10px] uppercase">R&D Directives</h2>
              <h3 className="text-5xl font-tech font-bold uppercase tracking-tight leading-none">Core Operations</h3>
           </div>
           <p className="max-w-md text-neutral-500 text-sm leading-relaxed text-right italic font-light">
             Engineering the physical interfaces that support safe, repeatable, and scalable hyperloop operations.
           </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 group relative overflow-hidden bg-neutral-900/40 border border-white/5 rounded-[2.5rem] p-12 hover:border-green-500/30 transition-all">
             <div className="absolute top-0 right-0 p-10 opacity-5">
                <Construction className="text-green-500" size={120} />
             </div>
             <div className="relative z-10 space-y-12">
                <div className="flex items-center gap-3">
                   <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                   <h4 className="font-tech text-xl uppercase tracking-[0.2em] text-green-500">Thaiyyur Test Track</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                   <div className="space-y-4">
                      <h5 className="font-bold uppercase tracking-widest text-xs">Structural Validation</h5>
                      <p className="text-[13px] text-neutral-400 leading-relaxed font-light">
                        Our full-scale field measurements at the Thaiyyur test track validate structural configurations 
                        under dynamic loads and thermal expansion behaviors.
                      </p>
                   </div>
                   <div className="space-y-4">
                      <h5 className="font-bold uppercase tracking-widest text-xs">Foundation Interfaces</h5>
                      <p className="text-[13px] text-neutral-400 leading-relaxed font-light">
                        Designing high-tolerance alignments for track geometry that maintain micron-level precision 
                        during pod transit.
                      </p>
                   </div>
                </div>
                <div className="p-4 bg-green-500/5 rounded-xl border border-green-500/20 inline-flex items-center gap-4">
                   <Zap size={14} className="text-green-500" />
                   <span className="text-[10px] font-tech text-green-400 uppercase tracking-widest font-bold">Concrete Architecture Research: 46% Capex Reduction Active</span>
                </div>
             </div>
          </div>

          <div className="rounded-[2.5rem] bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-12 flex flex-col justify-between group hover:border-green-500/30 transition-all">
             <div className="space-y-8">
                <h4 className="font-tech text-xl uppercase tracking-[0.2em] text-white">Interface Systems</h4>
                <div className="space-y-8">
                   <div className="space-y-2">
                      <h5 className="text-[10px] font-tech text-green-500 uppercase tracking-widest">Airlocks & Gating</h5>
                      <p className="text-xs text-neutral-400 leading-relaxed font-light italic opacity-80">
                        Turnaround reduced to 25 mins using segmented vacuum chambers.
                      </p>
                   </div>
                   <div className="opacity-40">
                      <h5 className="text-[10px] font-tech text-neutral-600 uppercase tracking-widest">Docking (R&D)</h5>
                      <p className="text-[9px] text-neutral-700 leading-relaxed uppercase font-light">
                        Seamless freight transfer research.
                      </p>
                   </div>
                </div>
             </div>
             <div className="flex items-center gap-3">
                <Activity className="text-neutral-500 group-hover:text-green-500 transition-colors" size={16} />
                <span className="text-[9px] font-tech uppercase tracking-[0.3em] text-neutral-500">Live Environmental Sync</span>
             </div>
          </div>
        </div>
      </section>

      {/* 5. VALIDATION & TECH STACK STRIP */}
      <section className="py-24 px-6 bg-neutral-900/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-8">
              <div className="flex items-center gap-3 text-green-500">
                <Cpu size={20} />
                <h4 className="font-tech text-sm uppercase tracking-[0.4em]">Tech Stack</h4>
              </div>
              <h3 className="text-3xl md:text-5xl font-tech font-bold uppercase tracking-tighter leading-none">
                Simulation & <br/>Experiment Driven
              </h3>
              <p className="text-neutral-500 text-sm font-light leading-relaxed">
                 All designs are refined and validated using industry-standard engineering tools for 
                 structural response, vacuum stability, and fatigue life estimation.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                 {['ANSYS', 'Abaqus', 'SolidWorks', 'MATLAB', 'Fusion 360'].map(tool => (
                   <span key={tool} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[9px] font-tech uppercase text-neutral-300 tracking-[0.2em]">
                     {tool}
                   </span>
                 ))}
              </div>
           </div>
           
           <div className="space-y-4">
              <div className="p-8 rounded-3xl bg-neutral-900/40 border border-white/5 space-y-4">
                 <div className="flex items-center gap-4 text-green-500">
                    <Database size={24} />
                    <h5 className="font-bold uppercase tracking-widest text-xs">Sealing & Gasket Systems</h5>
                 </div>
                 <p className="text-xs text-neutral-500 leading-relaxed font-light">
                   Laboratory evaluation of candidate materials for compression set, leakage prevention, 
                   and reliability under repeated pressure cycling.
                 </p>
              </div>
              <div className="p-8 rounded-3xl bg-neutral-900/40 border border-white/5 flex justify-between items-center group">
                 <div className="space-y-2">
                    <div className="flex items-center gap-2 text-neutral-300">
                       <HardHat size={16} />
                       <h5 className="font-bold uppercase tracking-widest text-[10px]">Safety Compliance</h5>
                    </div>
                    <p className="text-[10px] text-neutral-600 uppercase font-mono tracking-widest italic">INTL_ENG_CODE_011</p>
                 </div>
                 <Globe className="text-neutral-800 group-hover:text-green-500/20 transition-all" size={40} />
              </div>
           </div>
        </div>
      </section>

      {/* 6. NETWORK SYSTEMS: SPECS GRID */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {INFRASTRUCTURE_DATA.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#0a0a0a] border border-white/5 p-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-neutral-900/40"
            >
              <div className="absolute top-0 right-0 p-6 font-tech text-[10px] text-gray-800 group-hover:text-green-500/20">SPEC_{item.id}</div>
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8 group-hover:bg-green-500 group-hover:text-black transition-all">
                {item.id === 1 && <Wind size={20} />}
                {item.id === 2 && <Thermometer size={20} />}
                {item.id === 3 && <Construction size={20} />}
                {item.id === 4 && <Zap size={20} />}
              </div>
              <h3 className="text-sm font-tech font-bold text-white mb-4 uppercase tracking-[0.2em]">
                {item.title}
              </h3>
              <p className="text-neutral-500 text-[10px] leading-relaxed mb-10 h-16 line-clamp-3 font-light">
                {item.description}
              </p>
              <div className="pt-6 border-t border-white/5">
                <span className="text-green-400 font-tech text-3xl font-bold tracking-tighter">
                  {item.stats}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. TERMINAL FOOTER ACTION */}


    </div>
  );
}