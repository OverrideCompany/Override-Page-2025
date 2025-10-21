import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { ServicesSection } from '@/components/sections/services';
import { PortfolioSection } from '@/components/sections/portfolio';
import { AboutSection } from '@/components/sections/about';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
