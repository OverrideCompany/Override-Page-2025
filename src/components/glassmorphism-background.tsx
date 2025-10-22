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
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 105%;
          height: 105%;
          background: linear-gradient(-45deg, #4f46e5, #7c3aed, #a855f7, #60a5fa);
          background-size: 400% 400%;
          animation: gradient-animation 15s ease infinite;
          filter: blur(150px);
          z-index: -1;
        }
      `}</style>
      <div className="glassmorphism-bg"></div>
    </>
  );
}
