
'use client';

import { useRef, useEffect, useContext } from 'react';
import { useScroll } from 'framer-motion';
import { FeaturedProjectHero } from '@/components/sections/featured-project-hero';
import { OverrideDescription } from '@/components/sections/override-description';
import { TrustedBy } from '@/components/sections/trusted-by';
import { VideoAuroraHero } from '@/components/sections/video-aurora-hero';
import { ScrollProgressContext } from '@/context/scroll-progress-context';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const { setScrollYProgress } = useContext(ScrollProgressContext);

  useEffect(() => {
    setScrollYProgress(scrollYProgress);
  }, [scrollYProgress, setScrollYProgress]);


  return (
    <main className="flex-1">
      <div ref={containerRef}>
        <FeaturedProjectHero />
        <VideoAuroraHero />
        <OverrideDescription />
      </div>
      <TrustedBy />
    </main>
  );
}
