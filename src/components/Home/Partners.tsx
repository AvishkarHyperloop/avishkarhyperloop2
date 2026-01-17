import { PARTNER_LOGOS } from '../../Constants';
import Image from "next/image";

export const Partners = () => {
  return (
    <section
      id="partners"
      className="w-full py-24 bg-black border-t border-white/10 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <span className="text-green-500 font-tech tracking-[0.5em] text-xs uppercase block mb-4">
          Supported By
        </span>
        <h2 className="text-4xl md:text-5xl font-tech font-bold text-white">
          OUR PARTNERS
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-24 py-12">
          {/* First set of logos */}
          {PARTNER_LOGOS.map((partner) => (
            <div
              key={partner.id}
              className="w-32 md:w-40 flex flex-col items-center justify-center space-y-2 opacity-80 hover:opacity-100 transition-all duration-500"
            >
              <div className="relative w-full h-16 md:h-20 flex items-center justify-center">
                <Image
                  src={partner.url}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 128px, 160px"
                />
              </div>
              <p className="text-xs md:text-sm text-gray-300">
                {partner.name}
              </p>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {PARTNER_LOGOS.map((partner) => (
            <div
              key={`dup-${partner.id}`}
              className="w-32 md:w-40 flex flex-col items-center justify-center space-y-2 opacity-80 hover:opacity-100 transition-all duration-500"
            >
              <div className="relative w-full h-16 md:h-20 flex items-center justify-center">
                <Image
                  src={partner.url}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 128px, 160px"
                />
              </div>
              <p className="text-xs md:text-sm text-gray-300">
                {partner.name}
              </p>
            </div>
          ))}
        </div>

        {/* Gradient fades for edges */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-black to-transparent z-10" />
      </div>

    </section>
  );
};
