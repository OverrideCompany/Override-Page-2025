"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projectsData: Project[] = [
  { id: 'portfolio-1', title: 'Zenith CRM', description: 'A comprehensive CRM platform for sales teams, enhancing productivity and client management.', technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'], imageUrl: PlaceHolderImages.find(p => p.id === 'portfolio-1')?.imageUrl!, imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-1')?.imageHint! },
  { id: 'portfolio-2', title: 'FlowPay', description: 'A seamless mobile payment application for quick and secure transactions on the go.', technologies: ['React Native', 'Firebase', 'Stripe'], imageUrl: PlaceHolderImages.find(p => p.id === 'portfolio-2')?.imageUrl!, imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-2')?.imageHint! },
  { id: 'portfolio-3', title: 'Aura Fashion', description: 'An elegant e-commerce store for a high-end fashion brand, focusing on visual appeal and user experience.', technologies: ['Shopify', 'Liquid', 'GraphQL'], imageUrl: PlaceHolderImages.find(p => p.id === 'portfolio-3')?.imageUrl!, imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-3')?.imageHint! },
  { id: 'portfolio-4', title: 'InsightIQ', description: 'A powerful data analytics dashboard that provides actionable business intelligence from complex datasets.', technologies: ['React', 'D3.js', 'Node.js', 'AWS'], imageUrl: PlaceHolderImages.find(p => p.id === 'portfolio-4')?.imageUrl!, imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-4')?.imageHint! },
  { id: 'portfolio-5', title: 'Nexus SaaS', description: 'A collaborative project management tool designed to streamline workflows for remote teams.', technologies: ['Vue.js', 'Express', 'MongoDB'], imageUrl: PlaceHolderImages.find(p => p.id === 'portfolio-5')?.imageUrl!, imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-5')?.imageHint! },
  { id: 'portfolio-6', title: 'Innovate Corp', description: 'A sleek and modern corporate website to showcase the company\'s brand and services.', technologies: ['Gatsby', 'Contentful', 'Netlify'], imageUrl: PlaceHolderImages.find(p => p.id === 'portfolio-6')?.imageUrl!, imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-6')?.imageHint! },
];

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Our Portfolio</h2>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/80 text-lg">
            A glimpse into the innovative solutions we've delivered.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Card key={project.id} className="overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-lg hover:-translate-y-2" onClick={() => setSelectedProject(project)}>
              <div className="relative h-60 w-full">
                <Image src={project.imageUrl} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={project.imageHint} />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">View Project</p>
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
