"use client";
import React, { useEffect } from 'react';
import { ARTICLES } from '@/Constants';
import Link from 'next/link';
import { ArrowUpRight, Calendar } from 'lucide-react';
import MediaScale from '@/components/Media/MediaScale';
import VideoCarousel from '@/components/Media/VideoCarousel';

import ImageGallery from '@/components/Media/ImageGallery';
import PodShowcase from '@/components/Media/PodShowcase';
import { Download, FileText, Image, Youtube } from 'lucide-react';

export default function MediaPage() {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <div className="w-full min-h-screen bg-[#050505] pt-20">

         {/* Media Hero */}
         <section className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center overflow-hidden px-4">
            <div className="absolute inset-0 z-0">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-[#050505] to-[#050505]"></div>
            </div>

            <div className="relative z-10 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
               <span className="text-green-500 font-tech tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-xs uppercase block mb-3 md:mb-4">
                  Press & News
               </span>
               <h1 className="
                  text-[clamp(2.5rem,10vw,6rem)] md:text-[clamp(3.5rem,8vw,8rem)] 
                  leading-[0.9]
                  font-tech font-bold text-white tracking-tighter mb-4
                  drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)] text-glow
               ">
                  MEDIA CENTER
               </h1>
               <p className="text-gray-400 max-w-[90%] md:max-w-xl mx-auto font-light text-sm md:text-base leading-relaxed">
                  Explore our latest footage, press releases, and high-resolution assets.
               </p>
            </div>
         </section>

         {/* Featured Reel */}
         <MediaScale />

         {/* Video Archives */}
         <VideoCarousel />

         {/* Image Gallery */}
         <ImageGallery />

         {/* Pod Showcase 3D */}
         <PodShowcase />


         {/* Articles Section */}
         <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
               <div>
                  <h2 className="text-4xl font-tech font-bold text-white mb-2">MEDIA COVERAGE</h2>
                  <p className="text-gray-400 text-sm">Latest news and features from around the web.</p>
               </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
               {ARTICLES.map((article) => (
                  <Link
                     href={article.link}
                     key={article.id}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="group relative bg-[#0a0a0a] rounded-lg border border-white/5 hover:border-green-500/30 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]"
                  >
                     <div className="flex-1">
                        <div className="flex items-center gap-3 text-xs text-green-500 font-tech uppercase tracking-wider mb-2">
                           <span>{article.category}</span>
                           <span className="w-1 h-1 bg-green-500 rounded-full" />
                           <div className="flex items-center gap-1 text-gray-400">
                              <Calendar size={12} />
                              <span>{article.date}</span>
                           </div>
                        </div>
                        <h2 className="text-xl font-bold font-tech text-gray-100 group-hover:text-green-400 transition-colors">
                           {article.title}
                        </h2>
                     </div>

                     <div className="shrink-0">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-green-500 group-hover:text-black transition-all duration-300">
                           <ArrowUpRight size={20} className="transform group-hover:rotate-45 transition-transform duration-300" />
                        </div>
                     </div>
                  </Link>
               ))}
            </div>
         </section>

       


      </div>
   );
};
