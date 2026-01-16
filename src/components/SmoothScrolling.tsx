"use client";
import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScrolling({ children }: { children: ReactNode }) {
    const rafId = useRef<number | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            rafId.current = requestAnimationFrame(raf);
        }

        // Only run RAF if tab is active
        const handleVisibilityChange = () => {
            if (document.hidden) {
                if (rafId.current) cancelAnimationFrame(rafId.current);
            } else {
                rafId.current = requestAnimationFrame(raf);
            }
        };

        rafId.current = requestAnimationFrame(raf);
        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            lenis.destroy();
            if (rafId.current) cancelAnimationFrame(rafId.current);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    return <>{children}</>;
}
