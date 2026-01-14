"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Terminal, Shield, Zap, Cpu, Activity, Network, Database, Lock, Radio, Sparkles } from "lucide-react";

/* ================= DATA (All Sponsors Preserved) ================= */

const PARTNERS = [
  {
    version: "8.0",
    sponsors: [
      { name: "IITMAA", role: "Scalability Partner", logo: "/partners/IITMAA.png" },
      { name: "TE Connectivity", role: "Partner", logo: "/partners/polamcote-logo2.png" },
      { name: "Arcelor Mittal", role: "Materials Partner", logo: "/partners/Arcelormittal-logo.svg.png" },
      { name: "Indian Railways", role: "Materials Partner", logo: "/partners/IndianRailways.png" },
      { name: "Wabtec", role: "Software Sponsor", logo: "/partners/wabtec.png" },
      { name: "Harting", role: "Systems Sponsor", logo: "/partners/Harting.png.png" },
      { name: "Ansys", role: "Software Sponsor", logo: "/partners/ansys.png" },
      { name: "Vector", role: "CAN / Ethernet Tools Sponsor", logo: "/partners/vector.png" },
      { name: "Swagelok", role: "Silver Sponsor · Pneumatics", logo: "/partners/swagelok.png" },
      { name: "Aditya Birla", role: "Silver Sponsor", logo: "/partners/Hindalco.png" },
      { name: "Composites Tomorrow", role: "Silver Sponsor", logo: "/partners/CompositesTomorrow.png" },
    ],
  },
  {
    version: "6.0",
    sponsors: [
      { name: "Tube Investments of India", role: "Scalability Partner", logo: "/partners/tube-investments.svg" },
      { name: "L&T Heavy Civil Infrastructure", role: "Partner", logo: "/partners/images.jpeg" },
      { name: "Arcelor Mittal", role: "Materials Partner", logo: "/partners/Arcelormittal-logo.svg.png" },
      { name: "Ansys", role: "Software Sponsor", logo: "/partners/ansys.png" },
      { name: "Altium", role: "Systems Sponsor", logo: "/partners/altium.png" },
      { name: "Vector", role: "CAN / Ethernet Tools Sponsor", logo: "/partners/vector.png" },
    ],
  },
  {
    version: "5.0",
    sponsors: [
      { name: "Tube Investments of India", role: "Scalability Partner", logo: "/partners/tube-investments.svg" },
      { name: "L&T Heavy Civil Infrastructure", role: "Partner", logo: "/partners/images.jpeg" },
      { name: "Arcelor Mittal", role: "Materials Partner", logo: "/partners/Arcelormittal-logo.svg.png" },
      { name: "Ansys", role: "Software Sponsor", logo: "/partners/ansys.png" },
      { name: "Altium", role: "Systems Sponsor", logo: "/partners/altium.png" },
      { name: "Vector", role: "CAN / Ethernet Tools Sponsor", logo: "/partners/vector.png" },
    ],
  },
  {
    version: "4.0",
    sponsors: [
      { name: "Deloitte", role: "Title Sponsor", logo: "/partners/379251LOGO.jpg" },
      { name: "Comsol", role: "Gold Sponsor", logo: "/partners/Comsol.png" },
      { name: "Ansys", role: "Silver Sponsor · Simulation", logo: "/partners/ansys.png" },
      { name: "Swagelok", role: "Silver Sponsor · Pneumatics", logo: "/partners/swagelok.png" },
      { name: "Arus MR Tech", role: "Supporting · Suspension", logo: "/partners/arus.png" },
      { name: "Benewake", role: "Supporting · Sensing", logo: "/partners/benewake-logo.png" },
    ],
  },
  {
    version: "3.0",
    sponsors: [
      { name: "Deloitte", role: "Title Sponsor", logo: "/partners/379251LOGO.jpg" },
      { name: "Comsol", role: "Gold Sponsor", logo: "/partners/Comsol.png" },
      { name: "Ansys", role: "Silver Sponsor · Simulation", logo: "/partners/ansys.png" },
      { name: "Swagelok", role: "Silver Sponsor · Pneumatics", logo: "/partners/swagelok.png" },
      { name: "Arus MR Tech", role: "Supporting · Suspension", logo: "/partners/arus.png" },
      { name: "Benewake", role: "Supporting · Sensing", logo: "/partners/benewake.png" },
    ],
  },
  {
    version: "2.0",
    sponsors: [
      { name: "Tube Investments of India", role: "Title Sponsor", logo: "/partners/tube-investments.svg" },
      { name: "Hexaware", role: "Platinum Sponsor", logo: "/partners/hexaware.png" },
      { name: "SMC", role: "Platinum Sponsor", logo: "/partners/smc.png" },
      { name: "Comsol", role: "Gold Sponsor", logo: "/partners/Comsol.png" },
      { name: "Sparton", role: "Silver Sponsor", logo: "/partners/sparton.png" },
      { name: "Hasura", role: "Silver Sponsor", logo: "/partners/Hasura.png" },
      { name: "Rupee Circle", role: "Silver Sponsor", logo: "/partners/RupeeCircle.png" },
      { name: "Olympia", role: "Silver Sponsor", logo: "/partners/Olympia.jpg" },
      { name: "Mouser", role: "Silver Sponsor", logo: "/partners/mouser.png" },
      { name: "Melasta", role: "Silver Sponsor", logo: "/partners/Melasta.png" },
      { name: "Autodesk", role: "Silver Sponsor", logo: "/partners/autodesk.png" },
      { name: "Parker", role: "Supporting Sponsor", logo: "/partners/Parker.png" },
      { name: "Albright International", role: "Supporting Sponsor", logo: "/partners/albright.png" },
      { name: "Ketto", role: "Supporting Sponsor", logo: "/partners/ketto.png" },
      { name: "Fab Heads", role: "Supporting Sponsor", logo: "/partners/Fabheads.png" },
      { name: "MGM Controllers", role: "Supporting Sponsor", logo: "/partners/mgm.png" },
      { name: "Inverion", role: "Supporting Sponsor", logo: "/partners/Inverion.png" },
      { name: "Compatech", role: "Supporting Sponsor", logo: "/partners/compacTech.png" },
    ],
  },
];

/* ================= ANIMATED MATRIX BACKGROUND COMPONENT ================= */
const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const charArray = chars.split("");
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(2, 2, 2, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#22c55e";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillStyle = `rgba(34, 197, 94, ${Math.random() * 0.5 + 0.1})`;
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 opacity-20 pointer-events-none z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

/* ================= PARTNER CARD COMPONENT ================= */
const PartnerCard = ({ sponsor, index }: { sponsor: typeof PARTNERS[0]["sponsors"][0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] border border-white/5 rounded-xl p-6 h-full transition-all duration-700 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] overflow-hidden backdrop-blur-sm">
        {/* Animated Border Glow */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/20 via-transparent to-green-500/20 blur-xl" />
          <div className="absolute inset-[1px] rounded-xl bg-gradient-to-br from-green-500/10 to-transparent" />
        </div>

        {/* Scan Line Effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          initial={{ y: "-100%" }}
          animate={isHovered ? { y: "100%" } : { y: "-100%" }}
          transition={{ duration: 1.5, ease: "linear" }}
        >
          <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-green-500 to-transparent" />
        </motion.div>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-green-500/0 group-hover:border-green-500/50 transition-all duration-500 rounded-tl-xl" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-green-500/0 group-hover:border-green-500/50 transition-all duration-500 rounded-br-xl" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Logo Section */}
          <div className="relative mb-4">
            <div className="relative w-full h-20 bg-white/5 rounded-lg flex items-center justify-center p-3 group-hover:bg-white/10 transition-all duration-500 backdrop-blur-sm border border-white/10 group-hover:border-green-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                fill
                className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <motion.div
              className="absolute -top-1.5 -right-1.5 opacity-0 group-hover:opacity-100"
              animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Terminal size={14} className="text-green-500" />
            </motion.div>
          </div>

          {/* Text Section */}
          <div className="flex-1 flex flex-col justify-end">
            <h3 className="text-base font-bold group-hover:text-green-400 transition-colors duration-300 uppercase tracking-tight mb-1.5 font-tech">
              {sponsor.name}
            </h3>
            <div className="flex items-center gap-2">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-green-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-[8px] font-mono tracking-[0.15em] uppercase text-white/50 group-hover:text-green-400/70 transition-colors">
                {sponsor.role}
              </p>
            </div>
          </div>

          {/* Holographic Overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-green-500/5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ================= MAIN PAGE COMPONENT ================= */
export default function PartnersPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacityParallax = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="relative bg-[#010101] text-white overflow-hidden selection:bg-green-500 selection:text-black min-h-screen">
      
      {/* ================= ADVANCED BACKGROUND SYSTEM ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Matrix Background */}
        <MatrixBackground />

        {/* Animated Grid System */}
        <motion.div 
          style={{ y: yParallax }}
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-60"
        />

        {/* Perspective Grid Overlay */}
        <motion.div 
          style={{ y: yParallax }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:40px_40px] [perspective:2000px] [rotateX:60deg] origin-top opacity-30"
        />

        {/* Animated Scan Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[2px] h-32 bg-gradient-to-b from-transparent via-green-500 to-transparent"
              initial={{ 
                x: `${(i * 12.5) % 100}%`,
                y: "-10%",
              }}
              animate={{
                y: "110%",
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.8,
              }}
              style={{
                opacity: 0.3,
              }}
            />
          ))}
        </div>

        {/* Dynamic Radial Glows */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-green-500/8 blur-[200px] rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 blur-[150px] rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* ================= HUD INTERFACE ELEMENTS ================= */}
      <div className="fixed top-6 left-6 z-50 hidden xl:block">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col gap-2 font-mono text-[8px] text-green-500/60 uppercase tracking-[0.15em]"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 bg-black/40 border border-green-500/20 rounded backdrop-blur-sm">
            <Activity size={10} className="text-green-500 animate-pulse" />
            <span>System: <span className="text-green-400">ONLINE</span></span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-black/40 border border-green-500/20 rounded backdrop-blur-sm">
            <Shield size={10} className="text-green-500" />
            <span>Link: <span className="text-green-400">SECURED</span></span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-black/40 border border-green-500/20 rounded backdrop-blur-sm">
            <Network size={10} className="text-green-500" />
            <span>Network: <span className="text-green-400">ACTIVE</span></span>
          </div>
        </motion.div>
      </div>

      <div className="fixed bottom-6 right-6 z-50 hidden xl:block">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col items-end gap-1.5 font-mono text-[8px] text-white/30 uppercase tracking-[0.1em]"
        >
          <div className="px-3 py-1.5 bg-black/40 border border-white/10 rounded backdrop-blur-sm">
            <p>COORD_X: <span className="text-green-400">44.02.12</span></p>
          </div>
          <div className="px-3 py-1.5 bg-black/40 border border-white/10 rounded backdrop-blur-sm">
            <p>REGISTRY_ID: <span className="text-green-400">AV_8.0_HQ</span></p>
          </div>
          <div className="px-3 py-1.5 bg-black/40 border border-white/10 rounded backdrop-blur-sm">
            <p>STATUS: <span className="text-green-400">OPERATIONAL</span></p>
          </div>
        </motion.div>
      </div>

      {/* ================= PROGRESS INDICATOR ================= */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-green-600 via-green-400 to-green-600 z-50 origin-left shadow-[0_0_10px_rgba(34,197,94,0.5)]"
        style={{ scaleX }}
      />

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-6 z-10">
        <motion.div
          style={{ opacity: opacityParallax }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-7xl text-center relative z-10"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 border border-green-500/30 bg-gradient-to-r from-green-500/10 to-green-500/5 rounded-full mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(34,197,94,0.2)]"
          >
            <Sparkles size={12} className="text-green-400 animate-pulse" />
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-green-300 font-bold">
              Strategic Engineering Alliance Network
            </span>
            <Lock size={10} className="text-green-500/50" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-black tracking-tighter leading-[0.9] text-[clamp(3.5rem,12vw,9rem)] text-white uppercase font-tech mb-6 flex items-center justify-center gap-3 flex-wrap"
          >
            <span className="relative inline-flex items-center gap-2">
              PART
           
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-300 animate-gradient">
              NERS
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-8 max-w-2xl mx-auto text-gray-300 text-sm md:text-base font-light leading-relaxed px-6 relative"
          >
            <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-green-500/50 via-green-500/30 to-transparent" />
            <span className="pl-8 block">
              Collaborating with global pioneers in simulation, infrastructure, 
              and hardware validation to build India&apos;s first operational Hyperloop system.
            </span>
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            {[
              { label: "Active Partners", value: "50+" },
              { label: "Global Network", value: "15+" },
              { label: "Years Active", value: "8+" },
            ].map((stat, idx) => (
              <div key={idx} className="px-4 py-2 bg-black/40 border border-green-500/20 rounded-lg backdrop-blur-sm">
                <div className="text-green-400 font-mono text-[9px] tracking-widest uppercase">{stat.label}</div>
                <div className="text-lg font-bold text-white mt-0.5">{stat.value}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ================= PARTNERS BY VERSION ================= */}
      <div className="relative z-10 space-y-32 pb-32">
        {PARTNERS.map((edition, idx) => (
          <motion.section
            key={edition.version}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 1 }}
            className="max-w-7xl mx-auto px-6"
          >
            {/* Version Header */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16 flex flex-col md:flex-row items-start md:items-center gap-6"
            >
              <div className="flex flex-col">
                <motion.span
                  className="font-mono text-green-500/70 text-[10px] mb-2 tracking-[0.2em] uppercase"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Generation Cycle 0{PARTNERS.length - idx}
                </motion.span>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase font-tech relative">
                  <span className="relative">
                    V{edition.version}
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-green-500 via-green-400 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </span>
                </h2>
              </div>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-green-500/50 via-green-500/20 to-transparent hidden md:block" />
              <motion.div
                initial={{ rotate: 0 }}
                whileInView={{ rotate: 360 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.5 }}
                className="hidden md:block"
              >
                <Cpu className="text-white/10" size={40} />
              </motion.div>
            </motion.div>

            {/* Partners Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {edition.sponsors.map((sponsor, sponsorIdx) => (
                <PartnerCard
                  key={`${edition.version}-${sponsor.name}`}
                  sponsor={sponsor}
                  index={sponsorIdx}
                />
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      {/* ================= CALL TO ACTION FOOTER ================= */}
      <footer className="relative z-10 py-32 border-t border-white/10 bg-gradient-to-b from-transparent via-black/20 to-black/40">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center space-y-6"
          >
            <div className="inline-block px-4 py-1.5 border border-green-500/30 bg-green-500/5 rounded-full mb-3">
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-green-400">
                Next Generation Partnership
              </span>
            </div>

            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter font-tech">
              <span className="text-white">Join the</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                Alliance
              </span>
            </h3>

            <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Building the 5th mode of transport requires a multidisciplinary ecosystem. 
              Connect with Avishkar Hyperloop for technical or strategic partnerships.
            </p>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34,197,94,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-12 py-4 bg-gradient-to-r from-green-500 to-green-600 text-black font-bold uppercase text-xs tracking-[0.15em] rounded-lg hover:from-green-400 hover:to-green-500 transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.3)] font-tech"
            >
              Inquire for v9.0
            </motion.button>
          </motion.div>

          {/* Footer Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/50">
              Avishkar Hyperloop · IIT Madras
            </p>
            <div className="flex gap-6 font-mono text-[8px] uppercase tracking-widest text-white/40">
              <span className="hover:text-green-400 transition-colors cursor-pointer">Propulsion</span>
              <span className="hover:text-green-400 transition-colors cursor-pointer">Levitation</span>
              <span className="hover:text-green-400 transition-colors cursor-pointer">Infrastructure</span>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* ================= GLOBAL STYLES ================= */}
      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}