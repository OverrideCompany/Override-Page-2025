import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 py-24 text-center md:px-6 lg:py-32">
        <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Crafting Digital Excellence
        </h1>
        <p className="mx-auto mt-6 max-w-[700px] text-lg text-foreground/80 md:text-xl">
          Override is a premier software development company that transforms your ideas into powerful, scalable, and user-friendly digital solutions.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Button asChild size="lg">
            <Link href="#portfolio">Our Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
