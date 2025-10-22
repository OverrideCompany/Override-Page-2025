"use client";

import { projectsData } from "@/lib/projects-data";
import { GlassmorphismBackground } from "@/components/glassmorphism-background";
import { Code } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export function VideoAuroraHero() {
    const videoId = "mbHQZB2iUwM";
    const featuredProject = projectsData[1];
  
    return (
      <section 
        id="video-hero"
        data-color={featuredProject.color}
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="container mx-auto px-4 md:px-6 z-10">
            <div className="flex flex-col items-center text-center gap-6 mb-8">
                <div className="flex items-center gap-3 bg-card p-2 rounded-full">
                    <div className="p-2 bg-background rounded-full">
                        <Code className="h-6 w-6" style={{ color: featuredProject.color }} />
                    </div>
                    <span className="text-2xl font-bold pr-3">{featuredProject.title}</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                    {featuredProject.shortDescription}
                </h2>
                <p className="max-w-xl text-lg text-foreground/80">
                    {featuredProject.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Button asChild size="lg" style={{ backgroundColor: featuredProject.color, color: '#000' }} className="hover:opacity-90">
                        <Link href="/portafolio">Pruébelo ya gratis</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <Link href="/contacto">Ver planes y precios</Link>
                    </Button>
                </div>
            </div>
            <div className="relative w-full max-w-5xl mx-auto">
                <GlassmorphismBackground />
                <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl bg-black/50 backdrop-blur-sm border border-white/10">
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
        </div>
      </section>
    );
  }
  