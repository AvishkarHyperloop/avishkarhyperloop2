"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import { Gauge, Weight, Zap } from "lucide-react";
import { POD_MODELS } from "@/Constants";

// Lazy-load 3D only when needed
const PodModelCanvas = dynamic(() => import("./PodModel"), { ssr: false });

export default function PodShowcase() {
  return (
    <section className="bg-[#050505]">
      {POD_MODELS.map((pod, index) => (
        <PodSection key={pod.id} pod={pod} index={index} />
      ))}
    </section>
  );
}

function PodSection({ pod, index }: any) {
  const ref = useRef<HTMLDivElement>(null);
  // Entrance animation (runs once)
  const hasEntered = useInView(ref, { margin: "-20% 0px -20% 0px", once: true });
  // Performance optimization (pauses WebGL when off-screen)
  const isVisible = useInView(ref, { margin: "200px 0px 200px 0px" });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center px-6 md:px-16 border-b border-white/5 last:border-0 relative overflow-hidden"
    >
      <div className="relative w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center z-10">

        {/* INDEX BACKGROUND */}
        <div className="absolute top-1/2 -left-20 -translate-y-1/2 text-[20rem] font-bold text-white/[0.02] font-tech select-none pointer-events-none hidden lg:block">
          {index + 1}
        </div>

        {/* MODEL */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={hasEntered ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative aspect-[4/3] w-full rounded-none md:rounded-3xl overflow-hidden border-y md:border border-white/10 bg-black/50 shadow-2xl backdrop-blur-sm group"
        >
          {/* Subtle Glow */}
          <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Only load/render canvas if it has entered at least once to avoid hydration mismatch or pop-in, 
              but optimize frameloop with isVisible */}
          {pod.modelUrl ? (
            <PodModelCanvas url={pod.modelUrl} inView={isVisible} />
          ) : (
            <img
              src={pod.image || "/fallback-pod.jpg"}
              className="w-full h-full object-cover opacity-80"
              alt={pod.name}
            />
          )}

          {/* Model Controls Hint */}
          <div className="absolute bottom-4 right-6 text-[9px] text-white/30 uppercase tracking-widest font-tech opacity-0 group-hover:opacity-100 transition-opacity">
            Interactive 3D Model
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={hasEntered ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col gap-8 relative"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-px bg-green-500/50"></span>
              <p className="text-green-500 font-tech tracking-[0.3em] text-xs uppercase">
                Generation {index + 1}
              </p>
            </div>
            <h2 className="text-5xl md:text-7xl font-tech font-bold text-white leading-[0.9] tracking-tight uppercase">
              {pod.name}
            </h2>
          </div>

          <p className="text-neutral-400 text-sm md:text-base leading-loose max-w-xl font-light pl-2 border-l border-white/10">
            {pod.description}
          </p>

          <div className="grid grid-cols-2 gap-3 pt-4">
            <Spec title="Top Speed" icon={<Gauge size={16} />} value={pod.stats.maxSpeed} />
            <Spec title="Total Weight" icon={<Weight size={16} />} value={pod.stats.weight} />

            <div className="col-span-2 bg-white/[0.03] border border-white/10 p-5 rounded-xl backdrop-blur-md">
              <div className="flex items-center gap-3 text-neutral-500 mb-2">
                <Zap size={16} className="text-green-500/80" />
                <span className="text-[10px] md:text-xs font-tech tracking-[0.2em] uppercase">
                  Propulsion System
                </span>
              </div>
              <div className="flex justify-between items-end">
                <div className="text-xl md:text-2xl font-tech font-bold text-white uppercase tracking-tight">
                  {pod.stats.propulsion}
                </div>
                <div className="text-[9px] md:text-[10px] text-neutral-500 tracking-wider uppercase font-tech border px-2 py-0.5 rounded border-white/10">
                  {pod.stats.levitation}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}


/* ================= SPEC ================= */

function Spec({
  title,
  icon,
  value,
}: {
  title: string;
  icon: React.ReactNode;
  value: string;
}) {
  return (
    <div className="bg-white/[0.03] border border-white/10 p-5 rounded-xl backdrop-blur-md hover:bg-white/[0.05] transition-colors">
      <div className="flex items-center gap-3 text-neutral-500 mb-2">
        {icon}
        <span className="text-[10px] md:text-xs font-tech tracking-[0.2em] uppercase">
          {title}
        </span>
      </div>
      <div className="text-white font-tech font-bold text-lg md:text-2xl uppercase tracking-tight">
        {value}
      </div>
    </div>
  );
}

