'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { projectsData } from '@/lib/projects-data';
import { Code } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FeaturedProjectHero() {
  const [dotColor, setDotColor] = useState(projectsData[0].color);

  const handleSlideChange = (index: number) => {
    setDotColor(projectsData[index].color);
  };

  return (
    <section
      className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center dotted-bg transition-colors duration-500"
      style={{ '--dot-color': dotColor } as React.CSSProperties}
    >
      <div className="container mx-auto px-4 md:px-6">
        <Carousel
          opts={{ loop: true }}
          onSlideChange={handleSlideChange}
          className="w-full"
        >
          <CarouselContent>
            {projectsData.map((project, index) => (
              <CarouselItem key={index}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12 md:py-24">
                  <div className="flex flex-col space-y-6 text-center md:text-left items-center md:items-start">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-foreground/10 rounded-md">
                        <Code className="h-6 w-6" style={{ color: project.color }} />
                      </div>
                      <span className="text-2xl font-bold">{project.title}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                      {project.shortDescription}
                    </h1>
                    <p className="max-w-xl text-lg text-foreground/80">
                      {project.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                      <Button asChild size="lg" style={{ backgroundColor: project.color, color: '#000' }} className="hover:opacity-90">
                        <Link href="/portafolio">Pruébelo ya gratis</Link>
                      </Button>
                      <Button asChild variant="outline" size="lg">
                        <Link href="/contacto">Ver planes y precios</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                      data-ai-hint={project.imageHint}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground" />
        </Carousel>
      </div>
    </section>
  );
}
