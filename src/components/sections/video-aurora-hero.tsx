
"use client";

import { projectsData } from "@/data/projects-data";
import { Logo } from "../global/logo";

export function VideoAuroraHero() {
    const featuredProject = projectsData[0];
  
    return (
      <section 
        id="video-hero"
        data-color={featuredProject.color}
        className="relative w-full min-h-screen flex items-center justify-center"
      >
        <div className="container mx-auto px-4 md:px-6 z-10">
            <div className="relative w-full max-w-5xl mx-auto">
                <div
                    className="absolute inset-[-50px] -z-10"
                    style={{
                        background: `radial-gradient(ellipse 80% 80% at 50% 50%, ${featuredProject.color}15, transparent 60%)`,
                        filter: 'blur(30px)'
                    }}
                />
                <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl bg-black flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                        <Logo />
                        <span className="text-2xl font-bold text-white">Override Pass</span>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
  }

