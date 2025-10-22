
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Project } from '@/lib/types';

function createSlug(title: string) {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}

export const projectsData: Project[] = [
    { 
      id: 'portfolio-1', 
      title: 'Zenith CRM', 
      slug: createSlug('Zenith CRM'),
      shortDescription: 'Su agente inteligente de CRM',
      description: 'Una plataforma CRM integral para equipos de ventas, que mejora la productividad y la gestión de clientes. Con automatización inteligente y análisis predictivo, Zenith te ayuda a cerrar más tratos y a construir relaciones más fuertes con tus clientes.', 
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Genkit AI'], 
      imageUrl: PlaceHolderImages.find(p => p.id === 'portfolio-1')?.imageUrl!, 
      imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-1')?.imageHint!,
      color: '#34d399' // Verde
    },
    { 
      id: 'portfolio-2', 
      title: 'FlowPay', 
      slug: createSlug('FlowPay'),
      shortDescription: 'Pagos móviles sin fricción',
      description: 'Una aplicación de pago móvil fluida para transacciones rápidas y seguras sobre la marcha. FlowPay se integra con tus bancos y tarjetas para ofrecer una experiencia de pago unificada y sin complicaciones.', 
      technologies: ['React Native', 'Firebase', 'Stripe', 'Biometric Auth'], 
      imageUrl: PlaceHolderImages.find(p => p.id === 'portfolio-2')?.imageUrl!, 
      imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-2')?.imageHint!,
      color: '#60a5fa' // Azul
    },
    { 
      id: 'portfolio-3', 
      title: 'Aura Fashion', 
      slug: createSlug('Aura Fashion'),
      shortDescription: 'La moda se encuentra con el futuro',
      description: 'Una elegante tienda de comercio electrónico para una marca de moda de alta gama, centrada en el atractivo visual y la experiencia del usuario. Incluye pruebas virtuales y recomendaciones personalizadas por IA.', 
      technologies: ['Shopify', 'Liquid', 'GraphQL', 'AR.js'], 
      imageUrl: PlaceHolderImages.find(p => p.id === 'portfolio-3')?.imageUrl!, 
      imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-3')?.imageHint!,
      color: '#f472b6' // Rosa
    },
    { 
      id: 'portfolio-4', 
      title: 'InsightIQ', 
      slug: createSlug('InsightIQ'),
      shortDescription: 'Inteligencia de negocio accionable',
      description: 'Un potente panel de análisis de datos que proporciona inteligencia empresarial procesable a partir de conjuntos de datos complejos. Visualiza tus KPIs clave y descubre tendencias ocultas con facilidad.', 
      technologies: ['React', 'D3.js', 'Node.js', 'AWS', 'Snowflake'], 
      imageUrl: PlaceHolderImages.find(p => p.id === 'portfolio-4')?.imageUrl!, 
      imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-4')?.imageHint!,
      color: '#fbbf24' // Ámbar
    },
    { 
      id: 'portfolio-5', 
      title: 'Nexus SaaS', 
      slug: createSlug('Nexus SaaS'),
      shortDescription: 'Colaboración para equipos remotos',
      description: 'Una herramienta colaborativa de gestión de proyectos diseñada para agilizar los flujos de trabajo de equipos remotos. Incluye tableros Kanban, chat integrado y seguimiento del tiempo.', 
      technologies: ['Vue.js', 'Express', 'MongoDB', 'WebSockets'], 
      imageUrl: PlaceHolderImages.find(p => p.id === 'portfolio-5')?.imageUrl!, 
      imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-5')?.imageHint!,
      color: '#c084fc' // Púrpura
    },
    { 
      id: 'portfolio-6', 
      title: 'Innovate Corp', 
      slug: createSlug('Innovate Corp'),
      shortDescription: 'Muestre su marca al mundo',
      description: 'Un sitio web corporativo elegante y moderno para mostrar la marca y los servicios de la empresa. Optimizado para la velocidad y el SEO, construido sobre un CMS sin cabeza para una fácil gestión de contenido.', 
      technologies: ['Gatsby', 'Contentful', 'Netlify', 'GraphQL'], 
      imageUrl: PlaceHolderImages.find(p => p.id === 'portfolio-6')?.imageUrl!, 
      imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-6')?.imageHint!,
      color: '#93c5fd' // Azul claro
    },
  ];
