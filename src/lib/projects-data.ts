import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Project } from '@/lib/types';

export const projectsData: Project[] = [
    { 
      id: 'portfolio-1', 
      title: 'Zenith CRM', 
      shortDescription: 'Su agente inteligente de CRM',
      description: 'Una plataforma CRM integral para equipos de ventas, que mejora la productividad y la gestión de clientes.', 
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'], 
      imageUrl: PlaceHolderImages.find(p => p.id === 'portfolio-1')?.imageUrl!, 
      imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-1')?.imageHint!,
      color: '#34d399' // Verde
    },
    { 
      id: 'portfolio-2', 
      title: 'FlowPay', 
      shortDescription: 'Pagos móviles sin fricción',
      description: 'Una aplicación de pago móvil fluida para transacciones rápidas y seguras sobre la marcha.', 
      technologies: ['React Native', 'Firebase', 'Stripe'], 
      imageUrl: PlaceHolderImages.find(p => p.id === 'portfolio-2')?.imageUrl!, 
      imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-2')?.imageHint!,
      color: '#60a5fa' // Azul
    },
    { 
      id: 'portfolio-3', 
      title: 'Aura Fashion', 
      shortDescription: 'La moda se encuentra con el futuro',
      description: 'Una elegante tienda de comercio electrónico para una marca de moda de alta gama, centrada en el atractivo visual y la experiencia del usuario.', 
      technologies: ['Shopify', 'Liquid', 'GraphQL'], 
      imageUrl: PlaceHolderImages.find(p => p.id === 'portfolio-3')?.imageUrl!, 
      imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-3')?.imageHint!,
      color: '#f472b6' // Rosa
    },
    { 
      id: 'portfolio-4', 
      title: 'InsightIQ', 
      shortDescription: 'Inteligencia de negocio accionable',
      description: 'Un potente panel de análisis de datos que proporciona inteligencia empresarial procesable a partir de conjuntos de datos complejos.', 
      technologies: ['React', 'D3.js', 'Node.js', 'AWS'], 
      imageUrl: PlaceHolderImages.find(p => p.id === 'portfolio-4')?.imageUrl!, 
      imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-4')?.imageHint!,
      color: '#fbbf24' // Ámbar
    },
    { 
      id: 'portfolio-5', 
      title: 'Nexus SaaS', 
      shortDescription: 'Colaboración para equipos remotos',
      description: 'Una herramienta colaborativa de gestión de proyectos diseñada para agilizar los flujos de trabajo de equipos remotos.', 
      technologies: ['Vue.js', 'Express', 'MongoDB'], 
      imageUrl: PlaceHolderImages.find(p => p.id === 'portfolio-5')?.imageUrl!, 
      imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-5')?.imageHint!,
      color: '#c084fc' // Púrpura
    },
    { 
      id: 'portfolio-6', 
      title: 'Innovate Corp', 
      shortDescription: 'Muestre su marca al mundo',
      description: 'Un sitio web corporativo elegante y moderno para mostrar la marca y los servicios de la empresa.', 
      technologies: ['Gatsby', 'Contentful', 'Netlify'], 
      imageUrl: PlaceHolderImages.find(p => p.id === 'portfolio-6')?.imageUrl!, 
      imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-6')?.imageHint!,
      color: '#93c5fd' // Azul claro
    },
  ];
  