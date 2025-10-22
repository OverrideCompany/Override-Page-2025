
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/lib/projects-data';
import { motion } from 'framer-motion';

export default function PortfolioPage() {

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
          <motion.div 
            className="flex flex-col gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projectsData.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Link href={`/productos/${project.slug}`} className="block relative h-[60vh] w-full group overflow-hidden rounded-lg">
                    <Image 
                      src={project.imageUrl} 
                      alt={project.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" 
                      data-ai-hint={project.imageHint} 
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                        <div className="flex gap-2 md:gap-4">
                            {project.title.split('').map((char, index) => (
                                <span key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2 md:p-4 shadow-lg text-4xl md:text-6xl font-bold text-white uppercase">
                                    {char === ' ' ? '\u00A0' : char}
                                </span>
                            ))}
                        </div>
                    </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
