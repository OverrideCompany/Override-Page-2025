
import { projectsData } from '@/lib/projects-data';
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
        <section 
            className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-32 md:pb-24"
            style={{ '--project-color': project.color } as React.CSSProperties}
        >
            <div className="absolute inset-0 w-full h-full" style={{ backgroundColor: 'var(--project-color)', opacity: 0.1 }}></div>
            
            <div className="container mx-auto px-4 md:px-6 z-10">
                <div className="absolute top-8 left-4 md:left-8">
                    <Button asChild variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-background/50 shadow-lg backdrop-blur-xl border border-white/10">
                        <Link href="/productos">
                            <ArrowLeft className="h-6 w-6" />
                            <span className="sr-only">Volver a Productos</span>
                        </Link>
                    </Button>
                </div>

                <div className="bg-card/50 backdrop-blur-lg border border-white/10 text-card-foreground rounded-xl shadow-2xl overflow-hidden">
                    <div className="grid md:grid-cols-2 items-start">
                        <div className="relative aspect-video md:aspect-square w-full h-full">
                        <Image src={project.imageUrl} alt={project.title} fill className="object-cover" data-ai-hint={project.imageHint} />
                        </div>
                        <div className="p-8 md:p-12 flex flex-col h-full">
                            <Badge variant="secondary" className="w-fit mb-4" style={{ backgroundColor: 'var(--project-color)', color: '#000' }}>
                                Producto Destacado
                            </Badge>
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">{project.title}</h1>
                            <p className="mt-4 text-lg text-foreground/80 flex-grow">
                                {project.description}
                            </p>
                            <div className="mt-8">
                                <h3 className="text-xl font-semibold mb-4">Tecnologías Utilizadas</h3>
                                <div className="flex flex-wrap gap-3">
                                {project.technologies.map(tech => (
                                    <Badge key={tech} variant="outline" className="text-sm">{tech}</Badge>
                                ))}
                                </div>
                            </div>
                            <div className="mt-auto pt-8">
                                <Button size="lg" className="w-full" style={{ backgroundColor: 'var(--project-color)', color: '#000' }}>
                                    Solicitar una Demo
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  );
}
