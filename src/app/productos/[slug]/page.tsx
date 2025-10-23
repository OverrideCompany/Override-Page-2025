
import { projectsData } from '@/data/projects-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProductPageProps) {
    const project = projectsData.find((p) => p.slug === params.slug);
    if (!project) {
        return {
            title: 'Producto no encontrado'
        }
    }
    return {
        title: `${project.title} | Override`,
        description: project.description,
    }
}


export default function ProductPage({ params }: ProductPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
        {/* Back Button */}
        <div className="absolute top-8 left-4 md:left-8 z-20">
            <Button asChild variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-background/50 shadow-lg backdrop-blur-xl border border-white/10 hover:bg-background/80">
                <Link href="/productos">
                    <ArrowLeft className="h-6 w-6" />
                    <span className="sr-only">Volver a Productos</span>
                </Link>
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
            <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-6">Sobre el Producto</h2>
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                    {project.description}
                </p>
            </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 md:py-24">
             <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                <h3 className="text-3xl font-bold tracking-tight mb-8">Tecnologías Utilizadas</h3>
                <div className="flex flex-wrap gap-4 justify-center">
                {project.technologies.map(tech => (
                    <Badge key={tech} variant="outline" className="text-md px-4 py-2 border-primary/50 text-primary">
                        {tech}
                    </Badge>
                ))}
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-6">¿Interesado?</h2>
                <Button size="lg" className="text-lg px-8 py-6" style={{ backgroundColor: 'var(--project-color)', color: '#000' }}>
                    Solicitar una Demo
                </Button>
            </div>
        </section>
    </main>
  );
}
