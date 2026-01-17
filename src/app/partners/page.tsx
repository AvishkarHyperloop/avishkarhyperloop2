import React from "react";
import { PartnersBackground } from "./PartnersBackground";
import { PartnersHero } from "./PartnersHero";
import { PartnersList } from "./PartnersList";
import { PartnersFooter } from "./PartnersFooter";

export default function PartnersPage() {
  return (
    <div className="relative bg-[#010101] text-white overflow-hidden selection:bg-green-500 selection:text-black min-h-screen">
      <PartnersBackground />
      <PartnersHero />
      <PartnersList />
      <PartnersFooter />
    </div>
  );
}