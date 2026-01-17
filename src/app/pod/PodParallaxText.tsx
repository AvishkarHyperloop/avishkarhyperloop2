"use client";

import React, { useEffect, useRef } from "react";

export default function PodParallaxText() {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (textRef.current) {
                const scrolled = window.scrollY;
                textRef.current.style.transform = `translate3d(${-scrolled * 0.15}px, 0, 0)`;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <div
                ref={textRef}
                className="absolute top-32 left-0 text-[12rem] md:text-[16rem] font-bold text-white/[0.02] whitespace-nowrap select-none will-change-transform font-tech"
                style={{
                    transform: "translate3d(0,0,0)",
                }}
            >
                AVISHKAR HYPERLOOP AVISHKAR HYPERLOOP
            </div>

            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_65%,transparent_100%)]" />
        </div>
    );
}
