
"use client";

import { projectsData } from '@/data/projects-data';
import { notFound, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, QrCode, ShieldCheck, WifiOff, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import { use } from 'react';

type ProductPageProps = {
  params: {
    slug: string;
  };
};

// Metadata generation needs to be outside the client component.
// We can't use generateMetadata in a client component.
// For this case, we can manually set the title in the component or fetch it if needed.
// However, to keep it simple, I will remove generateMetadata and add a document.title update in a useEffect.

const productFeatures = [
    {
        icon: QrCode,
        title: 'Simple y Rápido',
        description: 'Un sistema basado en una aplicación móvil tan sencilla que la única tarea del usuario es iniciar sesión para obtener un código QR dinámico que funciona como su llave de acceso.'
    },
    {
        icon: ShieldCheck,
        title: 'Ultra-Seguro',
        description: 'El corazón de nuestra plataforma es el encriptado STACK3. Este sistema propietario actualiza el código QR cada segundo, volviéndolo tan seguro que para vulnerarlo, se necesitaría viajar en el tiempo.'
    },
    {
        icon: WifiOff,
        title: 'Eficiencia Inigualable',
        description: 'Su eficiencia es inigualable: Override Pass funciona en la mayoría de los escenarios sin necesidad de una conexión a internet activa, garantizando el acceso en todo momento.'
    },
    {
        icon: Building,
        title: 'Versátil y Escalable',
        description: 'Hecho para cualquier área: escuelas, empresas, eventos masivos o complejos residenciales. Donde sea que se necesite controlar un acceso, Override Pass es la solución ideal.'
    }
];


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
        {/* Back Button */}
        <div className="absolute top-8 left-4 md:left-8 z-20">
            <Button onClick={() => router.back()} variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-background/50 shadow-lg backdrop-blur-xl border border-white/10 hover:bg-background/80">
                <ArrowLeft className="h-6 w-6" />
                <span className="sr-only">Volver</span>
            </Button>
        </div>

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
                        {productFeatures.map((feature, index) => (
                            <motion.div key={feature.title} className="relative flex items-center justify-center" variants={itemVariants}>
                                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left md:order-2'}`}>
                                    <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-foreground/80 leading-relaxed">{feature.description}</p>
                                </div>
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-2 rounded-full border-2 border-primary">
                                    <feature.icon className="h-8 w-8 text-primary" />
                                </div>
                                <div className={`hidden md:block w-5/12 ${index % 2 === 0 ? 'order-2' : ''}`}></div>
                            </motion.div>
                        ))}
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
