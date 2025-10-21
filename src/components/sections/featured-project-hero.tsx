'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { projectsData } from '@/lib/projects-data';
import { Code } from 'lucide-react';

export function FeaturedProjectHero() {
  const featuredProject = projectsData[0];

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center dotted-bg transition-colors duration-500"
      style={{ '--dot-color': featuredProject.color } as React.CSSProperties}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12 md:py-24">
          <div className="flex flex-col space-y-6 text-center md:text-left items-center md:items-start">
            <div className="flex items-center gap-3 bg-card p-2 rounded-full">
              <div className="p-2 bg-background rounded-full">
                <Code className="h-6 w-6" style={{ color: featuredProject.color }} />
              </div>
              <span className="text-2xl font-bold pr-3">{featuredProject.title}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              {featuredProject.shortDescription}
            </h1>
            <p className="max-w-xl text-lg text-foreground/80">
              {featuredProject.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button asChild size="lg" style={{ backgroundColor: featuredProject.color, color: '#000' }} className="hover:opacity-90">
                <Link href="/portafolio">Pruébelo ya gratis</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contacto">Ver planes y precios</Link>
              </Button>
            </div>
          </div>
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={featuredProject.imageUrl}
              alt={featuredProject.title}
              fill
              className="object-cover"
              data-ai-hint={featuredProject.imageHint}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
