"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User, Mail, Building, Briefcase, Send,
  Linkedin, Instagram, Twitter, Youtube, Facebook, Globe, Terminal
} from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "", email: "", organization: "", role: "",
    queryType: "General Inquiry", message: ""
  });

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("loading");
    
    // Fallback: If your API isn't set up, this opens the mail client
    const subject = `[SIGNAL] ${form.queryType.toUpperCase()} | ${form.name}`;
    const mailBody = `NAME: ${form.name}\nEMAIL: ${form.email}\nORG: ${form.organization}\n\nMESSAGE:\n${form.message}`;
    window.location.href = `mailto:avishkarhyperloop@smail.iitm.ac.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;
    
    setStatus("success");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#f0f0f0] font-sans selection:bg-green-500/30 overflow-x-hidden relative">
      
      {/* --- 3D HUD BACKGROUND LAYER --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#080808] to-green-950/10" />
        <div 
          className="absolute inset-0 opacity-20" 
          style={{ 
            backgroundImage: `linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)`, 
            backgroundSize: '60px 60px',
            transform: 'perspective(1000px) rotateX(60deg) translateY(-100px)',
          }} 
        />
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -1000], opacity: [0, 1, 0] }}
              transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear" }}
              className="absolute w-[2px] h-[2px] bg-green-500 rounded-full"
              style={{ left: `${Math.random() * 100}%`, top: '100%' }}
            />
          ))}
        </div>
      </div>

      <motion.main 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20"
      >
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <motion.div 
                initial={{ width: 0 }} animate={{ width: "3rem" }}
                className="h-1 bg-green-500 mb-6" 
              />
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none uppercase italic">
                GET IN <span className="text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]">TOUCH</span>
              </h1>
              <p className="mt-8 text-gray-400 text-lg leading-relaxed max-w-md">
                Route your signal directly to the <span className="text-white font-semibold">Avishkar Hyperloop</span> core engineering team. 
                Whether for sponsorship, research, or media, our nodes are open.
              </p>
            </div>

            {/* SOCIAL CARDS */}
            <div className="grid grid-cols-5 gap-4 pt-4">
              <SocialIcon href="https://www.linkedin.com/company/avishkar-hyperloop/" Icon={Linkedin} />
              <SocialIcon href="https://www.instagram.com/avishkar_hyperloop/" Icon={Instagram} />
              <SocialIcon href="https://twitter.com/avishkar_iitm" Icon={Twitter} />
              <SocialIcon href="https://www.youtube.com/@avishkarhyperloop" Icon={Youtube} />
              <SocialIcon href="https://www.facebook.com/avishkarhyperloop/" Icon={Facebook} />
            </div>

            <div className="p-6 rounded-2xl border border-green-500/20 bg-green-500/5 hidden lg:block">
              <p className="text-xs font-mono text-green-500 uppercase tracking-[0.3em] mb-2">Location Node</p>
              <p className="text-bold  text-gray-300">Email: avishkarhyperloop@smail.iitm.ac.in</p>
              <p className="text-sm text-gray-300">Sudha and Shankar Innovation Hub, IIT Madras, Chennai - 600036</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl space-y-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Terminal size={40} />
              </div>

              <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
                <Field icon={<User size={20}/>} label="Full Name" name="name" placeholder="E.g. Elon Musk" onChange={handleChange} />
                <Field icon={<Mail size={20}/>} label="Email Address" name="email" placeholder="name@domain.com" onChange={handleChange} />
                <Field icon={<Building size={20}/>} label="Organization" name="organization" placeholder="Institute / Company" onChange={handleChange} />
                <Field icon={<Briefcase size={20}/>} label="Role" name="role" placeholder="Designation" onChange={handleChange} />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-mono text-green-500 uppercase tracking-widest">Query Classification</label>
                <select
                  name="queryType"
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-green-500 transition-all appearance-none cursor-pointer"
                >
                  <option className="bg-[#0a0a0a]">General Inquiry</option>
                  <option className="bg-[#0a0a0a]">Sponsorship</option>
                  <option className="bg-[#0a0a0a]">Media / Press</option>
                  <option className="bg-[#0a0a0a]">Research Collaboration</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-mono text-green-500 uppercase tracking-widest">Message Payload</label>
                <textarea
                  name="message"
                  onChange={handleChange}
                  rows={4}
                  placeholder="Initiate transmission content..."
                  className="w-full bg-black/40 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-green-500 transition-all resize-none placeholder:text-white/10"
                  required
                />
              </div>

              <motion.button
                disabled={status === "loading"}
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(34,197,94,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-green-500 text-black font-black text-sm uppercase tracking-[0.4em] rounded-xl flex items-center justify-center gap-4 transition-all"
              >
                <Send size={20} />
                {status === "loading" ? "Transmitting..." : "Send Message"}
              </motion.button>

              <AnimatePresence>
                {status === "success" && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-500 text-center font-mono text-xs uppercase tracking-widest">Message Delivered Successfully</motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </motion.main>
    </div>
  );
}

function Field({ icon, label, ...props }: any) {
  return (
    <div className="flex flex-col gap-3 group">
      <label className="text-xs font-mono text-green-500/60 uppercase tracking-widest group-focus-within:text-green-400 transition-colors">
        {label}
      </label>
      <div className="flex items-center gap-4 border-b border-white/10 pb-3 group-focus-within:border-green-500 transition-all">
        <span className="text-green-500">{icon}</span>
        <input
          {...props}
          required
          className="bg-transparent w-full outline-none text-lg text-white placeholder:text-white/5"
        />
      </div>
    </div>
  );
}

function SocialIcon({ href, Icon }: any) {
  return (
    <motion.a 
      href={href} target="_blank"
      whileHover={{ y: -5, color: "#22c55e" }}
      className="w-full aspect-square border border-white/10 rounded-xl flex items-center justify-center bg-white/[0.03] hover:border-green-500/50 transition-colors"
    >
      <Icon size={20} />
    </motion.a>
  );
}