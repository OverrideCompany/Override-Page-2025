"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/types';
import { projectsData } from '@/lib/projects-data';

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main>
      <section id="portfolio" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">Nuestro Portafolio</h1>
            <p className="mt-4 max-w-2xl mx-auto text-foreground/80 text-lg">
              Un vistazo a las soluciones innovadoras que hemos entregado.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <Card key={project.id} className="overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-lg hover:-translate-y-2 bg-card" onClick={() => setSelectedProject(project)}>
                <div className="relative h-60 w-full">
                  <Image src={project.imageUrl} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={project.imageHint} />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold">Ver Proyecto</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <Dialog open={!!selectedProject} onOpenChange={(isOpen) => !isOpen && setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            {selectedProject && (
              <DialogHeader>
                <DialogTitle className="text-3xl">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-md pt-2">{selectedProject.description}</DialogDescription>
              </DialogHeader>
            )}
            {selectedProject && (
              <div className="grid gap-4 py-4">
                <div className="relative aspect-video w-full">
                  <Image src={selectedProject.imageUrl} alt={selectedProject.title} fill className="object-cover rounded-md" data-ai-hint={selectedProject.imageHint} />
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map(tech => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </section>
    </main>
  );
}
