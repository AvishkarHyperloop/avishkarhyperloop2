import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { VideoItem } from '@/types';

interface VideoModalProps {
    video: VideoItem;
    onClose: () => void;
}

export function VideoModal({ video, onClose }: VideoModalProps) {
    // Lock body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-10 animate-in fade-in duration-300"
            onClick={onClose} // Close on backdrop click
        >
            <div
                className="relative w-full max-w-6xl aspect-video bg-black rounded-3xl border border-white/10 shadow-2xl"
                onClick={(e) => e.stopPropagation()} // Prevent close on video click
            >
                {/* Close Button - Beside the video details */}
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 md:-right-16 md:top-0 text-white/50 hover:text-green-500 transition-colors z-50 p-2"
                >
                    <X size={32} />
                </button>

                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-2xl md:rounded-3xl" // Added rounded corners to match container
                ></iframe>
            </div>
        </div>
    );
}
