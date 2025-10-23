
'use client';
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

// --- Type Definitions ---
type ShapeType = 'star' | 'black-hole' | 'nova';

type Shape = {
  id: number;
  x: number; // horizontal position (vw)
  y: number; // vertical position (vh)
  size: number; // size of the shape (px)
  opacity: number;
  type: ShapeType; // 'star', 'black-hole', or 'nova'
  animationDelay: string; // for staggered animations
  isExploding: boolean; // flag for nova effect
};

// --- Constants ---
const NUM_SHAPES = 250; // Total number of shapes
const EVENT_INTERVAL_MS = 5000; // Time between random events (nova, black hole)

/**
 * A component that renders a dynamic, animated starfield background.
 * It adapts to the current theme (light/dark) and includes random events
 * like novas and black holes for visual interest.
 */
export function FloatingShapes() {
  const { resolvedTheme } = useTheme();
  const [shapes, setShapes] = useState<Shape[]>([]);
  const scrollYRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasMounted, setHasMounted] = useState(false);

  // Colors are determined by the current theme.
  const starColor = resolvedTheme === 'dark' ? '#FFFFFF' : '#000000';
  const holeColor = resolvedTheme === 'dark' ? '#FFFFFF' : '#000000';
  const novaColor = resolvedTheme === 'dark' ? '#FFFFFF' : '#000000';
  const holeBgColor = resolvedTheme === 'dark' ? '#000000' : '#FFFFFF';

  // Ensure component only renders on the client to avoid hydration issues.
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // --- Effects ---

  // Initialize shapes and set up scroll/event listeners
  useEffect(() => {
    if(!hasMounted) return;
    // Parallax effect on scroll
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
      if (containerRef.current) {
        // Use CSS variable for performance
        containerRef.current.style.setProperty('--scroll-y', `${scrollYRef.current}px`);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Create the initial set of stars
    const newShapes = Array.from({ length: NUM_SHAPES }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 200, // Spread over a larger vertical area
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.7 + 0.3,
      type: 'star' as ShapeType,
      animationDelay: `${Math.random() * 5}s`,
      isExploding: false,
    }));
    setShapes(newShapes);

    // Periodically trigger random events (nova or black hole)
    const eventInterval = setInterval(() => {
      setShapes(prevShapes => {
        const shapesCopy = [...prevShapes];
        const randomIndex = Math.floor(Math.random() * shapesCopy.length);
        const randomEvent = Math.random();

        // Reset any existing special event to a normal star
        const currentlySpecialIndex = shapesCopy.findIndex(s => s.type !== 'star' || s.isExploding);
        if (currentlySpecialIndex !== -1) {
          shapesCopy[currentlySpecialIndex].type = 'star';
          shapesCopy[currentlySpecialIndex].isExploding = false;
        }

        // Trigger a new event
        if (randomEvent < 0.1) { // 10% chance for a black hole
          shapesCopy[randomIndex].type = 'black-hole';
        } else if (randomEvent < 0.2) { // 10% chance for a nova
          shapesCopy[randomIndex].isExploding = true;
        }
        
        return shapesCopy;
      });
    }, EVENT_INTERVAL_MS);

    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(eventInterval);
    };
  }, [hasMounted]);

  // Memoize the rendered shapes to prevent re-rendering on every parent component update.
  const memoizedShapes = useMemo(() => {
    return shapes.map((shape) => {
        const isStar = shape.type === 'star' && !shape.isExploding;
        return (
            <div
                key={shape.id}
                className={cn(
                  "absolute rounded-full transition-all duration-1000 ease-in-out",
                  shape.type === 'black-hole' && 'black-hole',
                  shape.isExploding && 'nova-explosion'
                )}
                style={{
                    left: `${shape.x}vw`,
                    top: `${shape.y}vh`,
                    width: isStar ? `${shape.size}px` : (shape.type === 'black-hole' ? '20px' : '1px'),
                    height: isStar ? `${shape.size}px` : (shape.type === 'black-hole' ? '20px' : '1px'),
                    backgroundColor: isStar ? starColor : 'transparent',
                    opacity: shape.opacity,
                    // Apply parallax effect via CSS variable for performance
                    transform: `translateY(calc(var(--scroll-y, 0) * -0.5px))`,
                    '--nova-color': novaColor,
                    '--hole-color': holeColor,
                    '--hole-bg-color': holeBgColor,
                    animationDelay: shape.animationDelay,
                    willChange: 'transform, background-color, opacity, width, height' // Hint to browser
                } as React.CSSProperties}
            />
        );
    });
  }, [shapes, starColor, novaColor, holeColor, holeBgColor]);

  // Don't render anything until mounted on the client
  if (!hasMounted) {
    return null;
  }

  return (
    <>
    {/* Global styles for the animations. Scoped to this component. */}
    <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes nova {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(20); opacity: 0; }
        }
        .black-hole {
          border-radius: 50%;
          border: 2px solid var(--hole-color);
          animation: spin 4s linear infinite;
          background-color: var(--hole-bg-color) !important;
        }
        .nova-explosion {
          border-radius: 50%;
          box-shadow: 0 0 10px var(--nova-color), 0 0 20px var(--nova-color);
          animation: nova 1.5s ease-out forwards;
          background-color: var(--nova-color) !important;
        }
    `}</style>
    <div
      ref={containerRef}
      className={cn(
          "fixed inset-0 w-full h-full -z-10 transition-opacity duration-500",
          resolvedTheme === 'dark' ? 'opacity-100' : 'opacity-0'
      )}
    >
      <div
        className="w-full h-full"
        style={{ willChange: 'transform' }} // Performance hint
      >
        {memoizedShapes}
      </div>
    </div>
    </>
  );
}
