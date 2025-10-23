
'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { projectsData } from '@/data/projects-data';
import { Code } from 'lucide-react';
import { useTheme } from 'next-themes';

export function FeaturedProjectHero() {
  const featuredProject = projectsData[0];
  const { resolvedTheme } = useTheme();

  const isDarkMode = resolvedTheme === 'dark';

  return (
    <section
      id="home"
      data-color={featuredProject.color}
      className="relative w-full min-h-screen flex items-center justify-center transition-colors duration-500"
    >
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 gap-12 items-center">
          <div className="flex flex-col space-y-6 text-center items-center">
            <div className="flex items-center gap-3 bg-card p-2 rounded-full border">
              <div className="p-2 bg-primary rounded-full">
                <Code className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold pr-3 text-card-foreground">Override Pass</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground">
              {featuredProject.shortDescription}
            </h1>
            <p className="max-w-xl text-lg text-foreground/80">
              {featuredProject.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button 
                asChild 
                size="lg" 
                style={isDarkMode ? { backgroundColor: 'white', color: 'black' } : {}}
                className={!isDarkMode ? 'bg-primary text-primary-foreground' : ''}
              >
                <Link href="/productos">Pruébelo ya gratis</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                style={isDarkMode ? { borderColor: 'white', color: 'white' } : {}}
                className={!isDarkMode ? 'border-foreground/50 hover:bg-foreground/10' : 'bg-transparent hover:bg-white hover:text-black'}
              >
                <Link href="/contacto">Ver planes y precios</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
