
'use client';

import { FeaturedProjectHero } from '@/components/sections/featured-project-hero';
import { OverrideDescription } from '@/components/sections/override-description';
import { TrustedBy } from '@/components/sections/trusted-by';
import { VideoAuroraHero } from '@/components/sections/video-aurora-hero';

export default function Home() {
  return (
    <main className="flex-1">
      <FeaturedProjectHero />
      <VideoAuroraHero />
      <OverrideDescription />
      <TrustedBy />
    </main>
  );
}
