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
    `}</style>
      <div className="fixed inset-0 -z-10 transition-bg">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'var(--aurora), var(--aurora)',
            '--aurora': 'conic-gradient(from 180deg at 50% 70%, #2a8af6, #a855f7, #e92a67, #f7b733, #2a8af6)',
            backgroundSize: '200% 100%',
            backgroundPosition: '50% 50%',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(40px) brightness(1.5)',
            opacity: 0.4,
            animation: 'aurora 20s linear infinite',
          }}
        />
      </div>
    </>
  );
}
