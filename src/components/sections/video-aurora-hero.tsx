"use client";

export function VideoAuroraHero() {
    // Video ID from the YouTube URL (e.g., https://www.youtube.com/watch?v=dQw4w9WgXcQ)
    const videoId = "X_hMZYK-s2I";
  
    return (
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Fondo de Aurora */}
        <div className="absolute inset-0 z-0 opacity-50">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/50 via-purple-500/50 to-pink-500/50 animate-aurora-1"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/50 via-cyan-500/50 to-blue-500/50 animate-aurora-2"></div>
        </div>
        
        {/* Contenedor del video */}
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
        
        <style jsx>{`
          @keyframes aurora {
            0% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(20px, -20px) rotate(5deg); }
            50% { transform: translate(0, 0) rotate(0deg); }
            75% { transform: translate(-20px, 20px) rotate(-5deg); }
            100% { transform: translate(0, 0) rotate(0deg); }
          }
          .animate-aurora-1 {
            animation: aurora 20s ease-in-out infinite;
          }
          .animate-aurora-2 {
            animation: aurora 25s ease-in-out infinite reverse;
          }
        `}</style>
      </section>
    );
  }