
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/data/projects-data';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ProductsPage() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      <section id="products" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">Nuestros Productos</h1>
            <p className="mt-6 max-w-3xl mx-auto text-foreground/80 text-xl">
              Explora las soluciones innovadoras que hemos diseñado para resolver problemas complejos y potenciar el crecimiento.
            </p>
          </div>
          <motion.div 
            className="flex flex-col gap-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projectsData.map((project, index) => (
              <motion.div key={project.id} variants={itemVariants}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className={`relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl group ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <Link href={`/productos/${project.slug}`}>
                      <Image 
                        src={project.imageUrl} 
                        alt={project.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" 
                        data-ai-hint={project.imageHint} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    </Link>
                  </div>
                  <div className={`text-center lg:text-left ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{project.title}</h2>
                    <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <Button asChild size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
                      <Link href={`/productos/${project.slug}`}>
                        Conocer más
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
