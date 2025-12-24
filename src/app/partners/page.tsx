// "use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// /* ======================================================
//    DATA
// ====================================================== */

// type Sponsor = {
//   name: string;
//   role: string;
//   logo: string;
// };

// type Edition = {
//   version: string;
//   sponsors: Sponsor[];
// };

// const PARTNERS: Edition[] = [
//  {
//     version: "2.0",
//     sponsors: [
//       { name: "Tube Investments of India", role: "Title Sponsor", logo: "/partners/tube-investments.svg" },
//       { name: "Hexaware", role: "Platinum Sponsor", logo: "/partners/hexaware.png" },
//       { name: "SMC", role: "Platinum Sponsor", logo: "/partners/smc.png" },
//       { name: "Comsol", role: "Gold Sponsor", logo: "/partners/Comsol.png" },
//       { name: "Sparton", role: "Silver Sponsor", logo: "/partners/sparton.png" },
//       { name: "Hasura", role: "Silver Sponsor", logo: "/partners/Hasura.png" },
//       { name: "Rupee Circle", role: "Silver Sponsor", logo: "/partners/RupeeCircle.png" },
//       { name: "Olympia", role: "Silver Sponsor", logo: "/partners/Olympia.jpg" },
//       { name: "Mouser", role: "Silver Sponsor", logo: "/partners/mouser.png" },
//       { name: "Melasta", role: "Silver Sponsor", logo: "/partners/Melasta.png" },
//       { name: "Autodesk", role: "Silver Sponsor", logo: "/partners/autodesk.png" },
//       { name: "Parker", role: "Supporting Sponsor", logo: "/partners/Parker.png" },
//       { name: "Albright International", role: "Supporting Sponsor", logo: "/partners/albright.png" },
//       { name: "Ketto", role: "Supporting Sponsor", logo: "/partners/ketto.png" },
//       { name: "Fab Heads", role: "Supporting Sponsor", logo: "/partners/Fabheads.png" },
//       { name: "MGM Controllers", role: "Supporting Sponsor", logo: "/partners/mgm.png" },
//       { name: "Inverion", role: "Supporting Sponsor", logo: "/partners/Inverion.png" },
//       { name: "Compatech", role: "Supporting Sponsor", logo: "/partners/compacTech.png" },
//     ],
//   },
//   {
//     version: "3.0",
//     sponsors: [
//       { name: "Deloitte", role: "Title Sponsor", logo: "/partners/379251LOGO.jpg" },
//     //   { name: "Cosmol", role: "Gold Sponsor", logo: "/partners/cosmol.png" },
//       { name: "Comsol", role: "Gold Sponsor", logo: "/partners/Comsol.png" },

//       { name: "Ansys", role: "Silver Sponsor · Simulation", logo: "/partners/ANSYS_logo.png" },
//       { name: "Swagelok", role: "Silver Sponsor · Pneumatics", logo: "/partners/swagelok.png" },
//       { name: "Arus MR Tech", role: "Supporting · Suspension", logo: "/partners/arus.png" },
//       { name: "Benewake", role: "Supporting · Sensing", logo: "/partners/benewake.png" },
//     ],
//   },
//   {
//     version: "4.0",
//     sponsors: [
//       { name: "Deloitte", role: "Title Sponsor", logo: "/partners/379251LOGO.jpg" },
//     //   { name: "Cosmol", role: "Gold Sponsor", logo: "/partners/cosmol.png" },
//       { name: "Comsol", role: "Gold Sponsor", logo: "/partners/Comsol.png" },

//       { name: "Ansys", role: "Silver Sponsor · Simulation", logo: "/partners/ansys.png" },
//       { name: "Swagelok", role: "Silver Sponsor · Pneumatics", logo: "/partners/swagelok.png" },
//       { name: "Arus MR Tech", role: "Supporting · Suspension", logo: "/partners/arus.png" },
//       { name: "Benewake", role: "Supporting · Sensing", logo: "/partners/benewake-logo.png" },
//     ],
//   },
//   {
//     version: "5.0",
//     sponsors: [
//       { name: "Tube Investments of India", role: "Scalability Partner", logo: "/partners/tube-investments.svg" },
//       { name: "L&T Heavy Civil Infrastructure", role: "Partner", logo: "/partners/images.jpeg" },
//       { name: "Arcelor Mittal", role: "Materials Partner", logo: "/partners/Arcelormittal-logo.svg.png" },
//       { name: "Ansys", role: "Software Sponsor", logo: "/partners/ansys.png" },
//       { name: "Altium", role: "Systems Sponsor", logo: "/partners/altium.png" },
//       { name: "Vector", role: "CAN / Ethernet Tools Sponsor", logo: "/partners/vector.png" },
//     ],
//   },
//   {
//     version: "6.0",
//     sponsors: [
//       { name: "Tube Investments of India", role: "Scalability Partner", logo: "/partners/tube-investments.svg" },
//       { name: "L&T Heavy Civil Infrastructure", role: "Partner", logo: "/partners/images.jpeg" },
//       { name: "Arcelor Mittal", role: "Materials Partner", logo: "/partners/arcelor.png" },
//       { name: "Ansys", role: "Software Sponsor", logo: "/partners/ansys.png" },
//       { name: "Altium", role: "Systems Sponsor", logo: "/partners/altium.png" },
//       { name: "Vector", role: "CAN / Ethernet Tools Sponsor", logo: "/partners/vector.png" },
//     ],
//   },
// ];

// /* ======================================================
//    PAGE
// ====================================================== */

// export default function PartnersPage() {
//   const sectionsRef = useRef<HTMLDivElement[]>([]);

//   useEffect(() => {
//     sectionsRef.current.forEach((section) => {
//       gsap.fromTo(
//         section,
//         { opacity: 0, y: 120 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1.2,
//           ease: "power4.out",
//           scrollTrigger: {
//             trigger: section,
//             start: "top 80%",
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <div className="bg-[#050505] text-white font-tech overflow-hidden">

//       {/* HERO — SAME SCALE AS INFRA */}
//       <section className="relative h-[75vh] flex items-center justify-center text-center px-6">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.08),transparent_65%)]" />

//         <div className="relative z-10 max-w-5xl">
//           <span className="text-green-500 tracking-[0.5em] text-xs uppercase block mb-6">
//             Industry Collaboration
//           </span>

//           <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tight leading-none">
//             PARTNERS
//           </h1>

//           <p className="mt-8 text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
//             Strategic organizations that enabled infrastructure, simulation,
//             materials, and system validation across Hyperloop generations.
//           </p>
//         </div>
//       </section>

//       {/* EDITIONS */}
//       <div className="space-y-48 pb-40">
//         {PARTNERS.map((edition, idx) => (
//           <section
//             key={edition.version}
//             ref={(el) => {
//               if (el) sectionsRef.current[idx] = el;
//             }}
//             className="max-w-7xl mx-auto px-6"
//           >
//             {/* VERSION HEADER */}
//             <div className="mb-20">
//               <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
//                 VERSION {edition.version}
//               </h2>
//               <div className="w-40 h-[2px] bg-green-500 mt-6" />
//             </div>

//             {/* SPONSORS — ENGINEERING STRIP */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//               {edition.sponsors.map((sponsor) => (
//                 <div
//                   key={sponsor.name}
//                   className="flex items-center gap-10 p-8 border border-white/10 bg-white/[0.03]"
//                 >
//                   {/* LOGO PLATE — FIX FOR BLACK LOGOS */}
//                   <div className="relative w-40 h-20 bg-gray-100 rounded-md flex items-center justify-center">
//                     <Image
//                       src={sponsor.logo}
//                       alt={sponsor.name}
//                       fill
//                       className="object-contain p-3"
//                     />
//                   </div>

//                   {/* TEXT */}
//                   <div>
//                     <h3 className="text-2xl font-bold">
//                       {sponsor.name}
//                     </h3>
//                     <p className="text-sm tracking-widest uppercase text-green-400 mt-1">
//                       {sponsor.role}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Sponsor = {
  name: string;
  role: string;
  logo: string;
};

type Edition = {
  version: string;
  sponsors: Sponsor[];
};

const PARTNERS: Edition[] = [
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
  {
    version: "3.0",
    sponsors: [
      { name: "Deloitte", role: "Title Sponsor", logo: "/partners/379251LOGO.jpg" },
      { name: "Comsol", role: "Gold Sponsor", logo: "/partners/Comsol.png" },
      { name: "Ansys", role: "Silver Sponsor · Simulation", logo: "/partners/ANSYS_logo.png" },
      { name: "Swagelok", role: "Silver Sponsor · Pneumatics", logo: "/partners/swagelok.png" },
      { name: "Arus MR Tech", role: "Supporting · Suspension", logo: "/partners/arus.png" },
      { name: "Benewake", role: "Supporting · Sensing", logo: "/partners/benewake.png" },
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
    version: "6.0",
    sponsors: [
      { name: "Tube Investments of India", role: "Scalability Partner", logo: "/partners/tube-investments.svg" },
      { name: "L&T Heavy Civil Infrastructure", role: "Partner", logo: "/partners/images.jpeg" },
      { name: "Arcelor Mittal", role: "Materials Partner", logo: "/partners/arcelor.png" },
      { name: "Ansys", role: "Software Sponsor", logo: "/partners/ansys.png" },
      { name: "Altium", role: "Systems Sponsor", logo: "/partners/altium.png" },
      { name: "Vector", role: "CAN / Ethernet Tools Sponsor", logo: "/partners/vector.png" },
    ],
  },
];

const getRoleBadge = (role: string) => {
  if (role.includes("Title") || role.includes("Scalability")) return "bg-green-500/10 text-green-400 border-green-500/30";
  if (role.includes("Platinum") || role.includes("Gold")) return "bg-yellow-500/10 text-yellow-400 border-yellow-500/30";
  if (role.includes("Silver")) return "bg-blue-500/10 text-blue-400 border-blue-500/30";
  if (role.includes("Supporting")) return "bg-purple-500/10 text-purple-400 border-purple-500/30";
  return "bg-gray-500/10 text-gray-400 border-gray-500/30";
};

export default function PartnersPage() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const versionRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    // Version headers animation
    versionRefs.current.forEach((el, idx) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.9, y: 50 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      }
    });

    // Cards stagger animation
    sectionsRef.current.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section.querySelectorAll(".partner-card"),
          { 
            opacity: 0, 
            y: 60,
            scale: 0.95 
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="bg-[#050505] text-white font-tech overflow-hidden min-h-screen">
      {/* Hero Section - Professional Corporate Style */}
      <section className="relative h-[70vh] flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-black/50 to-[#050505]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.06),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.04),transparent_50%)]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <span className="inline-block px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-green-400 font-mono text-sm tracking-[0.3em] uppercase mb-6">
            Industry Partnerships
          </span>
          
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tight leading-none mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            PARTNERS
            <br />
            {/* <span className="bg-gradient-to-r from-green-400 to-emerald-400">PARTNERS</span> */}
          </h1>
          
          <p className="text-gray-300 font-light text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Industry leaders enabling cutting-edge infrastructure, simulation software, 
            advanced materials, and system validation across all Hyperloop generations.
          </p>
        </div>
      </section>

      {/* Editions Grid */}
      <div className="space-y-32 py-24 pb-40">
        {PARTNERS.map((edition, idx) => (
          <section
            key={edition.version}
            ref={(el) => {
              if (el) sectionsRef.current[idx] = el as HTMLDivElement;
            }}
            className="max-w-7xl mx-auto px-6"
          >
            {/* Edition Header */}
            <div className="text-center mb-24">
              <div 
                ref={(el) => {
                  if (el) versionRefs.current[idx] = el;
                }}
                className="inline-block px-8 py-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl backdrop-blur-sm mb-8"
              >
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-r from-green-400 via-white to-emerald-400 bg-clip-text text-transparent">
                  Edition {edition.version}
                </h2>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full" />
            </div>

            {/* Sponsors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {edition.sponsors.map((sponsor, sIdx) => (
                <div
                  key={`${edition.version}-${sponsor.name}`}
                  className="group partner-card bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 hover:bg-white/10 rounded-3xl p-8 h-[200px] flex items-center gap-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-green-500/10"
                >
                  {/* Logo Container */}
                  <div className="relative flex-shrink-0 w-24 h-20 bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center overflow-hidden group-hover:bg-white/20 transition-all duration-500">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      className="object-contain p-3 drop-shadow-md group-hover:drop-shadow-lg transition-shadow"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-green-400 transition-colors tracking-tight leading-tight mb-3">
                      {sponsor.name}
                    </h3>
                    
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider font-semibold border ${getRoleBadge(sponsor.role)}`}>
                      <div className="w-2 h-2 rounded-full bg-current" />
                      {sponsor.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Stats Footer */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
            5+ Editions
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Years of trusted industry collaboration powering Hyperloop innovation at IIT Madras
          </p>
        </div>
      </section>
    </div>
  );
}
