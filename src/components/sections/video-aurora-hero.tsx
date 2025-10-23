
"use client";

import { projectsData } from "@/data/projects-data";

export function VideoAuroraHero() {
    const featuredProject = projectsData[0];
  
    return (
      <>
        <style jsx>{`
          @keyframes aurora-animation {
            0%, 100% {
              background-color: ${featuredProject.color}15;
            }
            50% {
              background-color: #3b82f615; /* blue-500 */
            }
          }
          .aurora-bg {
            animation: aurora-animation 10s infinite;
          }
        `}</style>
        <section 
          id="video-hero"
          className="relative w-full min-h-screen flex items-center justify-center"
        >
          <div className="container mx-auto px-4 md:px-6 z-10">
              <div className="relative w-full max-w-5xl mx-auto">
                  <div
                      className="aurora-bg absolute inset-[-50px] -z-10"
                      style={{
                          background: `radial-gradient(ellipse 80% 80% at 50% 50%, var(--aurora-color, ${featuredProject.color}15), transparent 60%)`,
                          filter: 'blur(30px)',
                          transition: 'background-color 2s ease-in-out'
                      }}
                  />
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl bg-black">
                      <iframe 
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=0&loop=1&playlist=dQw4w9WgXcQ"
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                      ></iframe>
                  </div>
              </div>
          </div>
        </section>
      </>
    );
  }
