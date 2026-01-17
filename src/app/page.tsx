
import { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import { TechnologyParallax } from "@/components/Home/TechnologyParallax";
import { ParallaxSection } from "@/components/Home/ParallaxSection";
import { Partners } from "@/components/Home/Partners";

export const metadata: Metadata = {
  title: "Avishkar Hyperloop | IIT Madras",
  description: "Pioneering the future of hyperloop transportation in India. Avishkar Hyperloop is engineering a sustainable, ultra-high-speed future for global connectivity.",
};

export default function Page() {
  return (
    <>
      <section>
        <Hero />
      </section>

      <section>
        <TechnologyParallax />
      </section>

      <section>
        <ParallaxSection />
      </section>

      <section>
        <Partners />
      </section>
    </>
  );
}
