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
         <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-[#050505] to-[#050505]"></div>
            </div>

            <div className="relative z-10 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
               <span className="text-green-500 font-tech tracking-[0.5em] text-xs uppercase block mb-4">Press & News</span>
               <h1 className="text-6xl md:text-9xl font-tech font-bold text-white tracking-tighter mb-4">
                  MEDIA CENTER
               </h1>
               <p className="text-gray-400 max-w-xl mx-auto font-light">
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

         {/* Press Resources */}
         <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
               <div>
                  <h2 className="text-4xl font-tech font-bold text-white mb-2">PRESS RESOURCES</h2>
                  <p className="text-gray-400 text-sm">Official assets for media coverage and publications.</p>
               </div>
               <button className="mt-6 md:mt-0 px-6 py-3 bg-white text-black font-bold font-tech hover:bg-green-500 transition-colors flex items-center gap-2">
                  DOWNLOAD ALL ASSETS <Download size={18} />
               </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {/* Press Kit */}
               <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-green-500/50 transition-all group cursor-pointer">
                  <FileText size={40} className="text-gray-400 group-hover:text-green-500 transition-colors mb-6" />
                  <h3 className="text-xl font-bold font-tech text-white mb-2">Official Press Kit 2024</h3>
                  <p className="text-gray-500 text-xs mb-6">PDF Presentation • 12.4 MB</p>
                  <span className="text-green-500 text-xs font-tech tracking-widest uppercase flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                     Download PDF <Download size={12} />
                  </span>
               </div>

               {/* Brand Assets */}
               <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-green-500/50 transition-all group cursor-pointer">
                  <Image size={40} className="text-gray-400 group-hover:text-green-500 transition-colors mb-6" />
                  <h3 className="text-xl font-bold font-tech text-white mb-2">Brand Assets & Logos</h3>
                  <p className="text-gray-500 text-xs mb-6">SVG, PNG, AI • 45 MB</p>
                  <span className="text-green-500 text-xs font-tech tracking-widest uppercase flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                     Download Pack <Download size={12} />
                  </span>
               </div>

               {/* Social Media */}
               <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-green-500/50 transition-all group cursor-pointer">
                  <Youtube size={40} className="text-gray-400 group-hover:text-green-500 transition-colors mb-6" />
                  <h3 className="text-xl font-bold font-tech text-white mb-2">B-Roll Footage</h3>
                  <p className="text-gray-500 text-xs mb-6">4K Raw Clips • 2.1 GB</p>
                  <span className="text-green-500 text-xs font-tech tracking-widest uppercase flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                     Access Library <Download size={12} />
                  </span>
               </div>
            </div>
         </section>


      </div>
   );
};
