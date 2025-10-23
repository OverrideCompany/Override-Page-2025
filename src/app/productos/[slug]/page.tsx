
"use client";

import { projectsData } from '@/data/projects-data';
import { notFound, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { QrCode, ShieldCheck, WifiOff, Building, Puzzle, BrainCircuit, Trophy, Rocket, UserCheck, Award, FlaskConical, type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { use } from 'react';

type ProductPageProps = {
  params: {
    slug: string;
  };
};

const iconMap: { [key: string]: LucideIcon } = {
    QrCode,
    ShieldCheck,
    WifiOff,
    Building,
    Puzzle,
    BrainCircuit,
    Trophy,
    Rocket,
    UserCheck,
    Award,
    FlaskConical
};

export default function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = use(params);
  const router = useRouter();
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
        {/* Hero Section */}
        <section 
            className="relative w-full h-[80vh] flex items-center justify-center text-center text-white"
            style={{ '--project-color': project.color } as React.CSSProperties}
        >
            <Image src={project.imageUrl} alt={project.title} fill className="object-cover -z-10" data-ai-hint={project.imageHint} />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="z-10 px-4">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.5)' }}>
                    {project.title}
                </h1>
            </div>
        </section>
        
        {/* Description Section */}
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight">Sobre el Producto</h2>
                </div>
                <motion.div 
                    className="relative"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* The timeline line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>

                    {/* Timeline items */}
                    <div className="space-y-16">
                        {project.features.map((feature, index) => {
                            const IconComponent = iconMap[feature.icon];
                            return (
                                <motion.div key={feature.title} className="relative flex items-center justify-center" variants={itemVariants}>
                                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left md:order-2'}`}>
                                        <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                                        <p className="text-foreground/80 leading-relaxed">{feature.description}</p>
                                    </div>
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-2 rounded-full border-2 border-primary">
                                        {IconComponent && <IconComponent className="h-8 w-8 text-primary" />}
                                    </div>
                                    <div className={`hidden md:block w-5/12 ${index % 2 === 0 ? 'order-2' : ''}`}></div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>


        {/* Technologies Section */}
        <section className="py-16 md:py-24">
             <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-12">Tecnologías Utilizadas</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Frontend */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">Frontend</h3>
                        <div className="flex flex-wrap gap-4 justify-center">
                        {project.technologies.frontend.map(tech => (
                            <Badge key={tech} variant="outline" className="text-md px-4 py-2 border-primary/50 text-primary">
                                {tech}
                            </Badge>
                        ))}
                        </div>
                    </div>
                    {/* Backend */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">Backend</h3>
                        <div className="flex flex-wrap gap-4 justify-center">
                        {project.technologies.backend.map(tech => (
                            <Badge key={tech} variant="outline" className="text-md px-4 py-2 border-primary/50 text-primary">
                                {tech}
                            </Badge>
                        ))}
                        </div>
                    </div>
                    {/* Cloud */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">Nube</h3>
                        <div className="flex flex-wrap gap-4 justify-center">
                        {project.technologies.cloud.map(tech => (
                            <Badge key={tech} variant="outline" className="text-md px-4 py-2 border-primary/50 text-primary">
                                {tech}
                            </Badge>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-6">¿Interesado en este producto?</h2>
                <Button asChild size="lg">
                    <Link href="/contacto">Contratar</Link>
                </Button>
            </div>
        </section>
    </main>
  );
}
