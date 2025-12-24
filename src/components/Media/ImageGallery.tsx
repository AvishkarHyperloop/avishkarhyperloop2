import React from 'react';

import { Plus } from 'lucide-react';

const image1 = "/media/image1.jpg";
const image2 = "/media/image2.jpg";
const image3 = "/media/image3.jpg";
const image4 = "/media/image4.jpg";
const image5 = "/media/image5.jpeg";
const image6 = "/media/image6.jpg";
const image7 = "/media/image7.jpg";
const image8 = "/media/image8.jpg";
const image9 = "/media/image9.jpg";

const image11 = "/media/image11.jpg";
const image12 = "/media/image12.jpg";
const image13 = "/media/image13.jpg";
const image14 = "/media/image14.jpg";
const image15 = "/media/image15.jpg";
const image16 = "/media/image16.jpg";
const image17 = "/media/image17.jpeg";



const localImages = [
  { id: 1, src: image1, title: "HYPERLOOP PROTOTYPE", category: "ENGINEERING" },
  { id: 2, src: image2, title: "VACUUM CHAMBER", category: "TESTING" },
  { id: 3, src: image3, title: "MAGNETIC LEVITATION", category: "R&D" },
  { id: 4, src: image4, title: "CONTROL SYSTEMS", category: "OPERATIONS" },
  { id: 5, src: image5, title: "HYPERLOOP PROTOTYPE", category: "ENGINEERING" },
  { id: 6, src: image6, title: "VACUUM CHAMBER", category: "TESTING" },
  { id: 7, src: image7, title: "MAGNETIC LEVITATION", category: "R&D" },
  { id: 8, src: image8, title: "CONTROL SYSTEMS", category: "OPERATIONS" },
  { id: 9, src: image9, title: "HYPERLOOP PROTOTYPE", category: "ENGINEERING" },

  { id: 11, src: image11, title: "MAGNETIC LEVITATION", category: "R&D" },
  { id: 12, src: image12, title: "CONTROL SYSTEMS", category: "OPERATIONS" },
  { id: 13, src: image13, title: "HYPERLOOP PROTOTYPE", category: "ENGINEERING" },
  { id: 14, src: image14, title: "VACUUM CHAMBER", category: "TESTING" },
  { id: 15, src: image15, title: "MAGNETIC LEVITATION", category: "R&D" },
  { id: 16, src: image16, title: "CONTROL SYSTEMS", category: "OPERATIONS" },
  { id: 17, src: image17, title: "HYPERLOOP PROTOTYPE", category: "ENGINEERING" },
];

export default function ImageGallery() {
  return (
    <section id="gallery" className="w-full py-24 px-6 bg-[#050505] flex justify-center">
      <div className="max-w-[1600px] w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-2">
          <div>
            <span className="text-green-500 font-tech tracking-widest text-sm uppercase mb-2 block">Our World</span>
            <h2 className="text-4xl md:text-6xl font-tech font-bold text-white">LATEST CAPTURES</h2>
          </div>
          <p className="text-gray-400 max-w-sm text-right mt-4 md:mt-0 text-sm">
            Exploring the boundaries of physics and engineering through the lens of our research facility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-[300px] md:auto-rows-[400px]">
          {localImages.map((img, idx) => (
            <div
              key={img.id}
              className={`group relative overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 cursor-pointer
                ${idx === 0 ? 'lg:col-span-8' : ''}
                ${idx === 1 ? 'lg:col-span-4' : ''}
                ${idx === 2 ? 'lg:col-span-4' : ''}
                ${idx === 3 ? 'lg:col-span-8' : ''}
                ${idx === 4 ? 'lg:col-span-8' : ''}
                ${idx === 5 ? 'lg:col-span-4' : ''}
                ${idx === 6 ? 'lg:col-span-4' : ''}
                ${idx === 7 ? 'lg:col-span-8' : ''}
                ${idx === 8 ? 'lg:col-span-8' : ''}
                ${idx === 9 ? 'lg:col-span-4' : ''}
                ${idx === 10 ? 'lg:col-span-4' : ''}
                ${idx === 11 ? 'lg:col-span-8' : ''}
                ${idx === 12 ? 'lg:col-span-8' : ''}
                ${idx === 13 ? 'lg:col-span-4' : ''}
                ${idx === 14 ? 'lg:col-span-4' : ''}
                ${idx === 15 ? 'lg:col-span-8' : ''}
                ${idx === 16 ? 'lg:col-span-8' : ''}
                ${idx === 17 ? 'lg:col-span-4' : ''}
                ${idx === 18 ? 'lg:col-span-4' : ''}
          
              `}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div>
                  {/* <span className="text-green-400 text-xs font-tech tracking-wider uppercase">{img.category}</span> */}
                  {/* <h3 className="text-2xl md:text-3xl font-tech font-bold text-white mt-1">{img.title}</h3> */}
                </div>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};