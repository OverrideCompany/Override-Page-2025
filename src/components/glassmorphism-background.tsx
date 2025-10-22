'use client';

export function GlassmorphismBackground() {
  return (
    <>
      <style jsx global>{`
        @keyframes gradient-animation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .glassmorphism-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(-45deg, #1e1b4b, #312e81, #4f46e5, #a5b4fc);
          background-size: 400% 400%;
          animation: gradient-animation 15s ease infinite;
          filter: blur(100px);
          transform: scale(1.1);
          z-index: -2;
        }
      `}</style>
      <div className="glassmorphism-bg"></div>
    </>
  );
}
