"use client";

import { projectsData } from "@/lib/projects-data";
import { GlassmorphismBackground } from "@/components/glassmorphism-background";

export function VideoAuroraHero() {
    const videoId = "mbHQZB2iUwM";
    const projectColor = projectsData[1].color;
  
    return (
      <section 
        id="video-hero"
        data-color={projectColor}
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-transparent"
      >
        <GlassmorphismBackground />
        <div className="container mx-auto px-4 md:px-6 z-10">
          <div className="relative aspect-video w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-black/50 backdrop-blur-sm border border-white/10">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
    );
  }
