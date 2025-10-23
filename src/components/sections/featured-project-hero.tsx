
'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { projectsData } from '@/lib/projects-data';
import { Code } from 'lucide-react';

export function FeaturedProjectHero() {
  const featuredProject = projectsData[0];

  return (
    <section
      id="home"
      data-color={featuredProject.color}
      className="relative w-full min-h-screen flex items-center justify-center transition-colors duration-500 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 gap-12 items-center">
          <div className="flex flex-col space-y-6 text-center items-center">
            <div className="flex items-center gap-3 bg-card p-2 rounded-full">
              <div className="p-2 bg-background rounded-full">
                <Code className="h-6 w-6" style={{ color: featuredProject.color }} />
              </div>
              <span className="text-2xl font-bold pr-3 text-card-foreground">Override Pass</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white dark:text-foreground">
              {featuredProject.shortDescription}
            </h1>
            <p className="max-w-xl text-lg text-white/80 dark:text-foreground/80">
              {featuredProject.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
                <Link href="/productos">Pruébelo ya gratis</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
                <Link href="/contacto">Ver planes y precios</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
