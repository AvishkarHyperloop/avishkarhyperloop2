
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import TeamYearNavbar, { YearKey } from "./TeamYearNavbar";
import PreviousTeams from "./PreviousTeams";

/* ================= TEAM DATA ================= */

const TEAM_DATA = [
  {
    subsystem: "Business and SER",
    members: [
      { name: "THARUN RISHWANTH R M S", role: "Sub Head", photo: "/team/tharun.png" },
      { name: "Pandey Sachin Ajeet", role: "Sub Head", photo: "/team/Pandey.png" },
      { name: "Achutha Narayan R", role: "Team Member", photo: "/team/Achutha Narayan.png" },
      { name: "Adhithya S", role: "Team Member", photo: "" },
      { name: "Gaganram P M", role: "Team Member", photo: "" },
      { name: "Kajan D", role: "Team Member", photo: "" },
      { name: "Mahati", role: "Team Member", photo: "/team/mahati.png" },
      { name: "N Sree Varshini", role: "Team Member", photo: "/team/SreeVarshini.png" },
      { name: "NIRAJ", role: "Team Member", photo: "/team/Niraj.png" },
      { name: "Visaka M", role: "Team Member", photo: "/team/Visaka.png" },
    ],
  },
  {
    subsystem: "Electrical",
    members: [
      { name: "Kaushal", role: "Sub Head", photo: "/team/Kaushal.png" },
      { name: "Yasho Srikar", role: "Sub Head", photo: "" },
      { name: "Praveen Babu G", role: "Sub Head", photo: "/team/PraveenBabu.png" },
      { name: "Gautam D", role: "Sub Head", photo: "" },
      { name: "Nidharshana Krishnan C", role: "Sub Head", photo: "" },
      { name: "Abhay Gokhale", role: "Team Member", photo: "/team/Abhay.png" },
      { name: "Arjun", role: "Team Member", photo: "/team/Arjun.png" },
      { name: "B Pradyumnan", role: "Team Member", photo: "/team/Pradyumnan.png" },
      { name: "Dhruv Sawant", role: "Team Member", photo: "/team/Dhruv Rahul.png" },
      { name: "Fahd B", role: "Team Member", photo: "/team/Fahd B.png" },
      { name: "Keshauv Prakash", role: "Team Member", photo: "" },
      { name: "Shristy", role: "Team Member", photo: "/team/Shristy.png" },
    ],
  },
  {
    subsystem: "GUI",
    members: [
      { name: "Jayant Malvi", role: "Team Member", photo: "" },
      { name: "dhipak", role: "Team Member", photo: "/team/Dhipak.png" },
      { name: "Abhinav Madyastha", role: "Team Member", photo: "/team/Abhinav.png" },
    ],
  },
  {
    subsystem: "Infrastructure",
    members: [
      { name: "Bhupender Singh Bisht", role: "Team Member", photo: "/team/Bhupender.png" },
      { name: "Aarohi Vanjare", role: "Team Member", photo: "/team/Aarohi.png" },
      { name: "Juttuka Jayapaul", role: "Team Member", photo: "/team/Juttuka.png" },
      { name: "Sanvi Mittal", role: "Team Member", photo: "/team/Sanvi.png" },
      { name: "Dhairya Gandhi", role: "Team Member", photo: "/team/Dhairya.png" },
    ],
  },
  {
    subsystem: "Levitation",
    members: [
      { name: "Rahul", role: "Sub Head", photo: "" },
      { name: "Manas Pandit", role: "Sub Head", photo: "/team/Manas.png" },
      { name: "R.Abhi ram", role: "Team Member", photo: "/team/Abhiram.png" },
      { name: "Kaustubh Vibhandik", role: "Team Member", photo: "/team/Kaustubh.png" },
      { name: "Anant Jain", role: "Team Member", photo: "/team/Anant.png" },
      { name: "Sinchan", role: "Team Member", photo: "" },
    ],
  },
  {
    subsystem: "Mechanical",
    members: [
      { name: "Mohamed M", role: "Team Head", photo: "" },
      { name: "DIVYESH KUMAR NAGARAJ", role: "Sub Head", photo: "/team/Divyesh.png" },
      { name: "Shriansh Krishna Dasi", role: "Team Member", photo: "" },
      { name: "Suryanshu", role: "Team Member", photo: "/team/Suryanshu.png" },
      { name: "Tangde Shubham Bhagwat", role: "Team Member", photo: "/team/Tangde.png" },
      { name: "Sanapala Yaswanth", role: "Team Member", photo: "" },
      { name: "Shubhankar Kukade", role: "Team Member", photo: "/team/Shubhankar.png" },
      { name: "Neela Lohith", role: "Team Member", photo: "/team/Neela.png" },
    ],
  },
  {
    subsystem: "Propulsion",
    members: [
      { name: "Boobalan Mohan", role: "Team Head", photo: "" },
      { name: "Haritha", role: "Sub Head", photo: "" },
      { name: "Pranav", role: "Team Member", photo: "" },
      { name: "Kirthi Manjunath", role: "Team Member", photo: "" },
      { name: "Mangalpally Tejas", role: "Team Member", photo: "" },
    ],
  },
  {
    subsystem: "Thermal",
    members: [
      { name: "Umang Gupta", role: "Team Head", photo: "" },
      { name: "Ram Narayan", role: "Sub Head", photo: "" },
      { name: "Pranav Duvvuri", role: "Sub Head", photo: "" },
      { name: "Jaishankar Mishra", role: "Sub Head", photo: "" },
      { name: "Ashwath R", role: "Team Member", photo: "/team/Ashwath.png" },
      { name: "Sudhanva Bidarahalli", role: "Team Member", photo: "" },
      { name: "Murali Krishnan H", role: "Team Member", photo: "" },
      { name: "Navaneeth", role: "Team Member", photo: "/team/Navaneeth.png" },
      { name: "K A Thirukailash", role: "Team Member", photo: "" },
    ],
  },
];

/* ================= HELPERS ================= */

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

/* ================= PAGE ================= */

export default function TeamPage() {
  const [activeYear, setActiveYear] = useState<YearKey>("PRESENT");
  const data = useMemo(() => TEAM_DATA, []);
  

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white pt-24 font-tech">
      {/* ================= HEADER ================= */}
      <section className="max-w-7xl mx-auto px-6 mb-28 text-center">
        <span className="text-green-500 tracking-[0.6em] text-xs uppercase block mb-6">
          Our People
        </span>
        <h1 className="text-6xl md:text-9xl font-medium tracking-tight">
          THE TEAM
        </h1>
        <p className="mt-8 text-gray-400 max-w-3xl mx-auto text-lg font-light">
          Engineers, designers, and strategists working across disciplines to
          build the future of high-speed transportation.
        </p>
      </section>

      <TeamYearNavbar activeYear={activeYear} setActiveYear={setActiveYear} />

      {/* ================= TEAM CONTENT ================= */}
      {activeYear === "PRESENT" ? (
        <div className="space-y-32 pb-40">
          {data.map((group, idx) => (
            <section key={idx} className="max-w-7xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-5xl md:text-7xl font-light tracking-wide">
                  {group.subsystem.toUpperCase()}
                </h2>
                <div className="w-32 h-[1px] bg-green-500 mt-6" />
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
                {group.members.map((member, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-green-500/50 transition-all"
                  >
                    <div className="aspect-square rounded-xl overflow-hidden mb-5 bg-black flex items-center justify-center">
                      {member.photo ? (
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-24 h-24 rounded-full border border-green-500/40 flex items-center justify-center text-2xl font-light text-green-400 bg-black/60">
                          {getInitials(member.name)}
                        </div>
                      )}
                    </div>

                    <h4 className="font-light text-sm tracking-wide">
                      {member.name}
                    </h4>
                    <p className="text-gray-400 text-xs mt-1">
                      {member.role}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <PreviousTeams year={activeYear} />
      )}

      {/* ================= TEAM ANALYTICS ================= */}
      {activeYear === "PRESENT" && (
  <section className="max-w-7xl mx-auto px-6 pb-56">
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="mb-32 text-center"
    >
      <span className="text-green-500 tracking-[0.6em] text-xs uppercase block mb-6">
        Data Overview
      </span>
      <h2 className="text-6xl md:text-8xl font-light tracking-tight">
        TEAM ANALYTICS
      </h2>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
      {[
        ["TOTAL PARTICIPANTS", "55"],
        ["B.TECH", "42"],
        ["M.TECH", "3"],
        ["DUAL DEGREE", "6"],
        ["M.S", "1"],
        ["BS + M.TECH", "1"],
        ["MALE", "45 (81.8%)"],
        ["FEMALE", "10 (18.2%)"],
        ["M : F RATIO", "4.5 : 1"],
        ["1st YEAR", "3"],
        ["2nd YEAR", "27"],
        ["3rd YEAR", "16"],
        ["4th YEAR", "4"],
        ["NA / UNSPECIFIED", "5"],
        ["TEAM MEMBERS", "41"],
        ["SUB HEADS", "10"],
        ["TEAM HEADS", "3"],
        ["OTHER / NA", "1"],
        ["ELECTRICAL", "13"],
        ["MECHANICAL", "8"],
        ["BUSINESS & SER", "8"],
        ["THERMAL", "7"],
        ["LEVITATION", "5"],
        ["PROPULSION", "4"],
        ["INFRASTRUCTURE", "4"],
        ["GUI", "3"],
      ].map(([label, value], i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.04 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-10"
        >
          <div className="text-5xl font-light text-green-400 mb-3">
            {value}
          </div>
          <div className="text-xs tracking-[0.35em] text-gray-400">
            {label}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
)}

    </div>
  );
}
