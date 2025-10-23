
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { projectsData } from '@/data/projects-data';
import { motion } from 'framer-motion';

export default function TrabajosPage() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <main>
      <section id="portfolio" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">Nuestros Trabajos</h1>
            <p className="mt-4 max-w-2xl mx-auto text-foreground/80 text-lg">
              Un vistazo a las soluciones innovadoras que hemos entregado.
            </p>
          </div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projectsData.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Link href={`/productos/${project.slug}`}>
                  <Card className="overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-lg hover:-translate-y-2 bg-card h-full flex flex-col">
                    <div className="relative h-60 w-full">
                      <Image src={project.imageUrl} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={project.imageHint} />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-lg font-semibold">Ver Producto</p>
                      </div>
                    </div>
                    <CardContent className="p-4 flex-grow flex flex-col">
                      <h3 className="font-semibold text-lg">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 flex-grow">{project.shortDescription}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
