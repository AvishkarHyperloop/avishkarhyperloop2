"use client";

import dynamic from "next/dynamic";

/* 🚨 Disable SSR for animated sections */
const Hero = dynamic(() => import("@/components/Home/Hero"), {
  ssr: false,
});

const TechnologyParallax = dynamic(
  () => import("@/components/Home/TechnologyParallax").then(m => m.TechnologyParallax),
  { ssr: false }
);

const ParallaxSection = dynamic(
  () => import("@/components/Home/ParallaxSection").then(m => m.ParallaxSection),
  { ssr: false }
);

const Partners = dynamic(
  () => import("@/components/Home/Partners").then(m => m.Partners),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>

      <section>
        <TechnologyParallax />
      </section>


      <section>
        <Partners />
      </section>
    </>
  );
}
