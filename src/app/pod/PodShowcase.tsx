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
  const inView = useInView(ref, { margin: "-20% 0px -20% 0px", once: true });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center px-6 md:px-16"
    >
      <div className="relative w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* INDEX */}
        <div className="absolute -top-10 left-0 text-[10px] md:text-xs text-gray-500 font-tech tracking-[0.4em] uppercase">
          POD {index + 1}
        </div>

        {/* MODEL */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-white/10 bg-black shadow-2xl"
        >
          {pod.modelUrl ? (
            <PodModelCanvas url={pod.modelUrl} />
          ) : (
            <img
              src={pod.image || "/fallback-pod.jpg"}
              className="w-full h-full object-cover"
              alt={pod.name}
            />
          )}
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col gap-6 md:gap-8"
        >
          <div>
            <p className="text-green-500 font-tech tracking-[0.4em] text-[10px] md:text-xs uppercase mb-1">
              Engineering Fleet
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-tech font-bold text-white leading-tight">
              {pod.name}
            </h2>
          </div>

          <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-xl">
            {pod.description}
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Spec title="Max Speed" icon={<Gauge size={18} />} value={pod.stats.maxSpeed} />
            <Spec title="Weight" icon={<Weight size={18} />} value={pod.stats.weight} />

            <div className="col-span-2 bg-white/5 border border-white/10 p-4 md:p-5 rounded-xl">
              <div className="flex items-center gap-3 text-gray-400 mb-2">
                <Zap size={18} />
                <span className="text-[10px] md:text-xs font-tech tracking-widest uppercase">
                  Propulsion
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-lg md:text-2xl font-tech font-bold text-white">
                  {pod.stats.propulsion}
                </div>
                <div className="text-[10px] md:text-xs text-gray-500 tracking-wide uppercase">
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
    <div className="bg-white/5 border border-white/10 p-4 md:p-5 rounded-xl">
      <div className="flex items-center gap-3 text-gray-400 mb-1">
        {icon}
        <span className="text-[10px] md:text-xs font-tech tracking-widest uppercase">
          {title}
        </span>
      </div>
      <div className="text-white font-tech font-bold text-lg md:text-2xl">
        {value}
      </div>
    </div>
  );
}
