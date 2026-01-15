"use client";

export type YearKey =
  | "PRESENT"
  | "2018-2019"
  | "2019-2020"
  | "2020-2021"
  | "2021-2022"
  | "2022-2023"
  | "2023-2024";

interface Props {
  activeYear: YearKey;
  setActiveYear: (year: YearKey) => void;
}

const YEARS: { key: YearKey; label: string }[] = [
  { key: "PRESENT", label: "PRESENT TEAM" },
  { key: "2023-2024", label: "2023 - 2024" },
  { key: "2022-2023", label: "2022 - 2023" },
  { key: "2021-2022", label: "2021 - 2022" },
  { key: "2020-2021", label: "2020 - 2021" },
  { key: "2019-2020", label: "2019 - 2020" },
  { key: "2018-2019", label: "2018 - 2019" },
];

export default function TeamYearNavbar({ activeYear, setActiveYear }: Props) {
  return (
    <div className="relativetop-24 z-20 bg-[#050505]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-6">

        {/* YEAR HEADING */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-tech tracking-[0.3em] text-white">
            {activeYear === "PRESENT"
              ? "PRESENT TEAM"
              : activeYear.replace("-", " - ")}
          </h2>

          <div className="w-20 h-[2px] bg-green-500 mx-auto mt-4" />
        </div>

        {/* YEAR BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3">
          {YEARS.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveYear(key)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeYear === key
                  ? "bg-green-500 text-black"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-green-500/40"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
