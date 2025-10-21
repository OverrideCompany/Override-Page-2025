"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projectsData: Project[] = [
  { id: 'portfolio-1', title: 'Zenith CRM', description: 'Una plataforma CRM integral para equipos de ventas, que mejora la productividad y la gestión de clientes.', technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'], imageUrl: PlaceHolderImages.find(p => p.id === 'portfolio-1')?.imageUrl!, imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-1')?.imageHint! },
  { id: 'portfolio-2', title: 'FlowPay', description: 'Una aplicación de pago móvil fluida para transacciones rápidas y seguras sobre la marcha.', technologies: ['React Native', 'Firebase', 'Stripe'], imageUrl: PlaceHolderImages.find(p => p.id === 'portfolio-2')?.imageUrl!, imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-2')?.imageHint! },
  { id: 'portfolio-3', title: 'Aura Fashion', description: 'Una elegante tienda de comercio electrónico para una marca de moda de alta gama, centrada en el atractivo visual y la experiencia del usuario.', technologies: ['Shopify', 'Liquid', 'GraphQL'], imageUrl: PlaceHolderImages.find(p => p.id === 'portfolio-3')?.imageUrl!, imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-3')?.imageHint! },
  { id: 'portfolio-4', title: 'InsightIQ', description: 'Un potente panel de análisis de datos que proporciona inteligencia empresarial procesable a partir de conjuntos de datos complejos.', technologies: ['React', 'D3.js', 'Node.js', 'AWS'], imageUrl: PlaceHolderImages.find(p => p.id === 'portfolio-4')?.imageUrl!, imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-4')?.imageHint! },
  { id: 'portfolio-5', title: 'Nexus SaaS', description: 'Una herramienta colaborativa de gestión de proyectos diseñada para agilizar los flujos de trabajo de equipos remotos.', technologies: ['Vue.js', 'Express', 'MongoDB'], imageUrl: PlaceHolderImages.find(p => p.id === 'portfolio-5')?.imageUrl!, imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-5')?.imageHint! },
  { id: 'portfolio-6', title: 'Innovate Corp', description: 'Un sitio web corporativo elegante y moderno para mostrar la marca y los servicios de la empresa.', technologies: ['Gatsby', 'Contentful', 'Netlify'], imageUrl: PlaceHolderImages.find(p => p.id === 'portfolio-6')?.imageUrl!, imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-6')?.imageHint! },
];

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Nuestro Portafolio</h2>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/80 text-lg">
            Un vistazo a las soluciones innovadoras que hemos entregado.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Card key={project.id} className="overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-lg hover:-translate-y-2" onClick={() => setSelectedProject(project)}>
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
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-md pt-2">{selectedProject.description}</DialogDescription>
              </DialogHeader>
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
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
