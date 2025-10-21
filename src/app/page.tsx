import { FeaturedProjectHero } from '@/components/sections/featured-project-hero';
import { VideoAuroraHero } from '@/components/sections/video-aurora-hero';

export default function Home() {
  return (
    <main className="flex-1">
      <FeaturedProjectHero />
      <VideoAuroraHero />
    </main>
  );
}
