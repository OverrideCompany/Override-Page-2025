'use client';

export function AuroraBackground() {
  return (
    <>
    <style jsx global>{`
      @keyframes aurora {
        from {
          background-position: 50% 50%, 50% 50%;
        }
        to {
          background-position: 350% 50%, 350% 50%;
        }
      }
      .aurora-bg {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -10;
        --aurora: conic-gradient(
          from 180deg at 50% 70%,
          #2a8af6,
          #a855f7,
          #e92a67,
          #f7b733,
          #2a8af6
        );
        background-image: var(--aurora), var(--aurora);
        background-size: 200% 100%;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        filter: blur(40px) brightness(1.5);
        opacity: 0.4;
        animation: aurora 20s linear infinite;
      }
    `}</style>
      <div className="relative flex flex-col h-[100vh] items-center justify-center bg-background transition-bg">
        <div className="aurora-bg"></div>
      </div>
    </>
  );
}
