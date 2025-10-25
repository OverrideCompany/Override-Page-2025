
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { projectsData } from '@/data/projects-data';
import { BrainCircuit } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

export function FeaturedProjectHero() {
  const featuredProject = projectsData[0];
  const { resolvedTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

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
                <BrainCircuit className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold pr-3 text-card-foreground">Override Health</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground">
              {featuredProject.shortDescription}
            </h1>
            <p className="max-w-xl text-lg text-foreground/80">
            La primera plataforma de gestión de pacientes impulsada por IA. Diseñada por y para profesionales de la salud, para que dediques tu tiempo a lo que importa: tus pacientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button 
                asChild 
                size="lg" 
                className={cn(
                  hasMounted && resolvedTheme === 'dark' 
                    ? 'bg-white text-black hover:bg-white/90' 
                    : 'bg-primary text-primary-foreground'
                )}
              >
                <Link href="/productos">Pruébelo ya gratis</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className={cn(
                  'bg-transparent',
                  hasMounted && resolvedTheme === 'dark' 
                    ? 'border-white text-white hover:bg-white hover:text-black' 
                    : 'border-foreground/50 hover:bg-foreground/10'
                )}
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
