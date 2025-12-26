import React, { useRef, useEffect, useState } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';

export default function MediaScale() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [scale, setScale] = useState(0.85);
  const [borderRadius, setBorderRadius] = useState(24);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far the element is from the center of the screen
      const distanceFromCenter = (rect.top + rect.height / 2 - windowHeight / 2) / (windowHeight / 2);

      // Increased min scale from 0.7 to 0.85 for more width
      const newScale = Math.max(0.85, Math.min(1.0, 1.0 - Math.abs(distanceFromCenter) * 0.3));
      const newRadius = Math.max(0, Math.min(24, Math.abs(distanceFromCenter) * 100));

      setScale(newScale);
      setBorderRadius(newRadius);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMute = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      const action = isMuted ? 'unMute' : 'mute';
      iframeRef.current.contentWindow.postMessage(JSON.stringify({
        'event': 'command',
        'func': action,
        'args': []
      }), '*');
      setIsMuted(!isMuted);
    }
  };

  return (
    <section ref={containerRef} className="w-full h-[50vh] md:h-[80vh] flex items-center justify-center overflow-hidden py-6 md:py-10 bg-[#050505]">
      <div
        className="relative overflow-hidden transition-transform duration-100 ease-out shadow-2xl"
        style={{
          width: '100%',
          height: '100%',
          transform: `scale(${scale})`,
          borderRadius: `${borderRadius}px`
        }}
      >
        {/* Video/Image Placeholder */}
        <div className="absolute inset-0 bg-neutral-900 pointer-events-none">
          <iframe
            ref={iframeRef}
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/a5cy-iby1rc?autoplay=1&mute=1&loop=1&playlist=a5cy-iby1rc&controls=0&showinfo=0&rel=0&enablejsapi=1"
            title="Hyperloop Reel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full h-full object-cover opacity-80"
          ></iframe>
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none mix-blend-overlay">
          <h2 className="mt-8 text-[12vw] md:text-8xl font-tech font-bold text-white tracking-widest uppercase opacity-40">
            AVISHKAR
          </h2>
        </div>

        {/* Controls */}
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-50">
          <button
            onClick={toggleMute}
            className="w-10 h-10 md:w-12 md:h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-green-500 hover:border-green-400 hover:text-black transition-all duration-300 group"
          >
            {isMuted ? (
              <VolumeX className="text-white group-hover:text-black" size={16} />
            ) : (
              <Volume2 className="text-white group-hover:text-black" size={16} />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};