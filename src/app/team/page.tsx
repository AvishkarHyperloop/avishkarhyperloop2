"use client";

import React, { useEffect } from "react";
// import pandey from "D:\WB2 drive\Avishkar_hyperloop\Dinex\avishkarhyperloop\public\team\IMG_20240818_161428 - Reddy K V S Abhiram Naidu me24b146.jpg"

const TEAM_DATA = [
  {
    subsystem: "Business and SER",
    members: [
        { name: "THARUN RISHWANTH R M S", role: "Sub Head" , photo:"/team/Tharun.png"}, 
      { name: "Pandey Sachin Ajeet", role: "Sub Head" , photo:"/team/pandey.png"},
      { name: "Achutha Narayan R", role: "Team Member" ,  photo:"/team/Achutha Narayan.png" },
      { name: "Adhithya S", role: "Team Member" ,  photo:"." },
      { name: "Gaganram P M", role: "Team Member", photo:"." },
      { name: "Kajan D", role: "Team Member" ,  photo:"." },
      { name: "Mahati", role: "Team Member" ,  photo:"/team/mahati.png" },
      { name: "N Sree Varshini", role: "Team Member" , photo:"/team/SreeVarshini.png" },
      { name: "NIRAJ", role: "Team Member" ,  photo:"/team/Niraj.png" },
      { name: "Visaka M", role: "Team Member" ,  photo:"/team/Visaka.png" }
    ]
  },

  {
    subsystem: "Electrical",
    members: [
        { name: "Kaushal", role: "Sub Head" ,  photo:"/team/Kaushal.png" },
        { name: "Yasho Srikar", role: "Sub Head" },
        { name: "Praveen Babu G", role: "Sub Head" ,  photo:"/team/PraveenBabu.png"},
        { name: "Gautam D", role: "Sub Head" },
        { name: "Nidharshana Krishnan C", role: "Sub Head" },
        { name: "Abhay Gokhale", role: "Team Member" ,  photo:"/team/abhay.png" },
        { name: "Arjun", role: "Team Member" ,  photo:"/team/Arjun.png" },
        { name: "B Pradyumnan", role: "Team Member" ,  photo:"/team/Pradyumnan.png"},
        { name: "Dhruv Sawant", role: "Team Member" ,  photo:"/team/Dhruv Rahul.png"},
        { name: "Fahd B", role: "Team Member" ,  photo:"/team/Fahd B.png" },
        { name: "Keshauv Prakash", role: "Team Member" },
        { name: "Shristy", role: "Team Member" ,  photo:"/team/Shristy.png" },
    ]
  },

  {
    subsystem: "GUI",
    members: [
      { name: "Jayant Malvi", role: "Team Member" },
      { name: "dhipak", role: "Team Member" ,  photo:"/team/Dhipak.png" },
      { name: "Abhinav Madyastha", role: "Team Member" ,  photo:"/team/Abhinav.png" }
    ]
  },

  {
    subsystem: "Infrastructure",
    members: [
      { name: "Bhupender Singh Bisht", role: "Team Member" ,  photo:"/team/bhupender.png" },
      { name: "Aarohi Vanjare", role: "Team Member",  photo:"/team/Aarohi.png"},
      { name: "Juttuka Jayapaul", role: "Team Member", photo:"/team/juttuka.png" },
      { name: "Sanvi Mittal", role: "Team Member" ,  photo:"/team/Sanvi.png"},
      { name: "Dhairya Gandhi", role: "Team Member" ,  photo:"/team/dhairya.png" }
    ]
  },

  {
    subsystem: "Levitation",
    members: [
      { name: "Rahul", role: "Sub Head" },
      { name: "Manas Pandit", role: "Sub Head" ,  photo:"/team/Manas.png" },
      { name: "R.Abhi ram", role: "Team Member" ,  photo:"/team/Abhiram.png" },
      { name: "Kaustubh Vibhandik", role: "Team Member" ,  photo:"/team/Kaustubh.png" },
      { name: "Anant Jain", role: "Team Member"  ,  photo:"/team/Anant.png"},
      { name: "Sinchan", role: "Team Member" }
    ]
  },

  {
    subsystem: "Mechanical",
    members: [
      { name: "Mohamed M", role: "Team Head" },
      { name: "DIVYESH KUMAR NAGARAJ", role: "Sub Head" ,  photo:"/team/Divyesh.png" },
      { name: "Shriansh Krishna Dasi", role: "Team Member" },
      { name: "Suryanshu", role: "Team Member" ,  photo:"/team/Suryanshu.png"},
      { name: "Tangde Shubham Bhagwat", role: "Team Member", photo:"/team/Tangde.png" },
      { name: "Sanapala Yaswanth", role: "Team Member" },
      { name: "Shubhankar Kukade", role: "Team Member" ,  photo:"/team/Shubhankar.png" },
      { name: "Neela Lohith", role: "Team Member" ,  photo:"/team/Neela.png"  }
    ]
  },

  {
    subsystem: "Propulsion",
    members: [
      { name: "Boobalan Mohan", role: "Team Head" ,  },
      { name: "Haritha", role: "Sub Head" },
      { name: "Pranav", role: "Team Member" },
      { name: "Kirthi Manjunath", role: "Team Member" },
      { name: "Mangalpally Tejas", role: "Team Member" }
    ]
  },

  {
    subsystem: "Thermal",
    members: [
      { name: "Umang Gupta", role: "Team Head" },
      { name: "Ram Narayan", role: "Sub Head" },
      { name: "Pranav Duvvuri", role: "Sub Head" },
      { name: "Jaishankar Mishra", role: "Sub Head" },
      { name: "Ashwath R", role: "Team Member"  ,  photo:"/team/Ashwath.png"},
      { name: "Sudhanva Bidarahalli", role: "Team Member" },
      { name: "Murali Krishnan H", role: "Team Member" },
      { name: "Navaneeth", role: "Team Member" ,  photo:"/team/Navaneeth.png" },
      { name: "K A Thirukailash", role: "Team Member" }
    ]
  }
];

export default function TeamPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white pt-24">

      {/* PAGE HEADER */}
      <section className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <span className="text-green-500 font-tech tracking-[0.5em] text-xs uppercase block mb-4">
          Our People
        </span>
        <h1 className="text-5xl md:text-7xl font-tech font-bold tracking-tight">
          THE TEAM
        </h1>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          A multidisciplinary group of engineers, designers, and strategists
          building the future of high-speed transportation.
        </p>
      </section>

      {/* SUBSYSTEM SECTIONS */}
      <div className="space-y-32 pb-32">

        {TEAM_DATA.map((group, idx) => (
          <section key={idx} className="max-w-7xl mx-auto px-6">

            {/* Subsystem Title */}
            <div className="mb-16">
              <h2 className="text-4xl md:text-6xl font-tech font-bold text-white tracking-tight">
                {group.subsystem.toUpperCase()}
              </h2>
              <div className="w-24 h-[2px] bg-green-500 mt-4" />
            </div>

            {/* Members Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {group.members.map((member, i) => (
                <div
                  key={i}
                  className="group bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-green-500/50 transition-all"
                >
                  {/* Photo */}
                  <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-black">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover  group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>

                  {/* Info */}
                  <h4 className="text-white font-tech font-bold text-sm">
                    {member.name}
                  </h4>
                  <p className="text-gray-400 text-xs mt-1 uppercase tracking-wide">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>

          </section>
        ))}

      </div>
    </div>
  );
}
