"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/image.png";
import { NAV_ITEMS } from "../Constants";

const orderedLabels = [
  "Home", "Media", "Pod", "Infrastructure", 
  "Team", "Subsystems", "Our Partners", "Contact Us",
];

/* ================= OPTIMIZED MOTION VARIANTS ================= */

const menuVariants: Variants = {
  open: {
    opacity: 1,
    scale: 1,
    display: "flex",
    transition: { 
      duration: 0.3, 
      ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for snappier feel
    },
  },
  closed: {
    opacity: 0,
    scale: 0.98, // Slight scale down is cheaper for Chrome than a heavy blur fade
    transitionEnd: { display: "none" },
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const containerVariants: Variants = {
  open: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
  closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
};

const itemVariants: Variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 10 },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = useMemo(
    () =>
      orderedLabels
        .map((label) => NAV_ITEMS.find((item) => item.label === label))
        .filter(Boolean) as { label: string; href: string }[],
    []
  );

  useEffect(() => {
    const onScroll = () => {
      // Use requestAnimationFrame for scroll performance
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 30);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  return (
    <div className="relative font-tech isolation-isolate">
      {/* ================= HEADER ================= */}
      <header
        className={`
          fixed top-0 left-0 w-full z-[100]
          flex items-center justify-between
          px-6 md:px-10 py-4
          transition-colors duration-300
          ${scrolled ? "bg-black/80" : "bg-transparent"}
        `}
      >
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src={logo}
            width={48}
            height={48}
            alt="Logo"
            className="object-contain rounded-md transition-transform duration-300 group-hover:scale-105"
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-xl md:text-2xl font-semibold tracking-[0.18em] text-white">
              AVISHKAR
            </span>
            <span className="text-[9px] md:text-[10px] tracking-[0.35em] text-white/50 group-hover:text-green-500 transition-colors">
              HYPERLOOP
            </span>
          </div>
        </Link>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen((prev) => !prev)}
          className={`
            w-12 h-12 rounded-md z-[110]
            border border-white/10
            flex items-center justify-center
            text-2xl transition-all duration-300
            ${open ? "bg-white text-black" : scrolled ? "bg-white/10 text-white" : "bg-white/5 text-green-400"}
          `}
        >
          {open ? "✕" : "☰"}
        </motion.button>
      </header>

      {/* ================= FULLSCREEN MENU ================= */}
      <motion.aside
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={menuVariants}
        // translateZ(0) triggers GPU acceleration
        style={{ transform: "translateZ(0)" }}
        className="fixed top-0 left-0 w-full h-full bg-black/95 z-[90] flex justify-center items-center will-change-transform"
      >
        <motion.div
          variants={containerVariants}
          className="flex flex-col gap-6 text-center"
        >
          {navItems.map((item) => (
            <motion.div key={item.label} variants={itemVariants}>
              <Link
                href={item.href}
                onClick={() => {
                  setActive(item.label);
                  setOpen(false);
                }}
                className={`
                  group uppercase tracking-[0.22em]
                  text-2xl sm:text-3xl md:text-4xl
                  transition-all duration-300 relative inline-block
                  ${active === item.label ? "text-white" : "text-green-400/80 hover:text-white"}
                `}
              >
                <span className="relative z-10">{item.label}</span>
                <span className={`
                  absolute left-1/2 -bottom-2 h-[2px] bg-green-500 
                  transition-all duration-500 -translate-x-1/2
                  ${active === item.label ? "w-full" : "w-0 group-hover:w-full"}
                `} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.aside>
    </div>
  );
}