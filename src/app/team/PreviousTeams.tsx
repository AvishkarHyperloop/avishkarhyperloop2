"use client";

import TEAM_HISTORY from "./prevTeam";
import { YearKey } from "./TeamYearNavbar";

interface Props {
  year: YearKey;
}

export default function PreviousTeams({ year }: Props) {
  // PRESENT should never render previous teams
  if (year === "PRESENT") return null;

  const data = TEAM_HISTORY[year];
  if (!data) return null;

  return (
    <div className="max-w-7xl mx-auto px-6 pb-32">
      {/* YEAR TITLE */}
      {/* <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-tech font-bold">
          {year.replace("-", " - ")}
        </h2>
        <div className="w-24 h-[2px] bg-green-500 mx-auto mt-4" />
      </div> */}

      {/* SUBSYSTEMS */}
      <div className="space-y-24">
        {Object.entries(data).map(([subsystem, members]) => (
          <section key={subsystem}>
            <h3 className="text-3xl font-bold mb-6">{subsystem}</h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {members.map((name, i) => (
                <div
                  key={`${subsystem}-${i}`}
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3"
                >
                  {name}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
