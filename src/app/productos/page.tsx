
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/data/projects-data';
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
    <>
      <style jsx>{`
        .neon-frame::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 0.5rem; /* Asegúrate que coincida con el 'rounded-lg' de la tarjeta */
          padding: 2px; /* Grosor del "tubo" de neón */
          background: linear-gradient(45deg, var(--project-color), transparent);
          -webkit-mask: 
             linear-gradient(#fff 0 0) content-box, /* Agujero interior */
             linear-gradient(#fff 0 0); /* Forma exterior */
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
          box-shadow: 0 0 15px var(--project-color), 0 0 30px var(--project-color);
        }
        .group:hover .neon-frame::before {
          opacity: 1;
        }
      `}</style>
      <main>
        <section id="portfolio" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="flex flex-col gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {projectsData.map((project) => (
                <motion.div key={project.id} variants={itemVariants} style={{ '--project-color': project.color } as React.CSSProperties}>
                  <Link href={`/productos/${project.slug}`} className="block relative h-[60vh] w-full group overflow-hidden rounded-lg">
                      <Image 
                        src={project.imageUrl} 
                        alt={project.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" 
                        data-ai-hint={project.imageHint} 
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center neon-frame">
                          <div className="text-4xl md:text-6xl font-bold uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                              {project.title}
                          </div>
                      </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
