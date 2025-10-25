
import { PlaceHolderImages } from '@/data/placeholder-images';
import { Project } from '@/types';


function createSlug(title: string) {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}

export const projectsData: Project[] = [
    { 
      id: 'override-health', 
      title: 'Override Health', 
      slug: createSlug('Override Health'),
      shortDescription: 'Dedica tiempo a tus pacientes, no a la gestión.',
      description: 'Override Health es la primera plataforma de gestión clínica impulsada por Inteligencia Artificial, diseñada por y para profesionales de la salud en México. Nuestra filosofía es simple: el valioso tiempo del profesional debe dedicarse al paciente, no a las tareas administrativas. La plataforma automatiza y optimiza la gestión para que puedas centrarte en lo que realmente importa.',
      technologies: {
        frontend: ['Kotlin Multiplataforma', 'Compose Multiplataforma', 'Kotlin'],
        backend: ['Python', 'Ktor', 'Eva AI', 'Docker'],
        cloud: ['Google Cloud', 'Supabase', 'Vercel']
      }, 
      features: [
        {
            icon: 'BrainCircuit',
            title: 'Gestión con IA',
            description: 'La primera plataforma de gestión clínica en México que utiliza Inteligencia Artificial para automatizar y optimizar tareas administrativas.'
        },
        {
            icon: 'UserCheck',
            title: 'Enfoque en el Paciente',
            description: 'Diseñada para que los profesionales de la salud dediquen su tiempo a lo que más importa: la atención y el bienestar de sus pacientes.'
        },
        {
            icon: 'Award',
            title: 'Reconocimiento y Premios',
            description: 'Anteriormente conocido como Lyra, este proyecto ha sido galardonado en múltiples concursos de innovación por su enfoque revolucionario.'
        },
        {
            icon: 'FlaskConical',
            title: 'Diseño por Profesionales',
            description: 'Creada por y para profesionales de la salud en México, asegurando que la plataforma responda a las necesidades reales del sector.'
        }
      ],
      imageUrl: PlaceHolderImages.find(p => p.id === 'override-health')?.imageUrl!,
      imageHint: PlaceHolderImages.find(p => p.id === 'override-health')?.imageHint!,
      color: '#22c55e' // Verde
    },
    { 
      id: 'override-pass', 
      title: 'Override Pass', 
      slug: createSlug('Override Pass'),
      shortDescription: 'Control de Acceso. Simple, Rápido y Ultra-Seguro.',
      description: 'Un sistema de acceso con QR dinámico, ultra-seguro y que funciona incluso sin internet. La solución ideal para empresas, escuelas y residenciales.', 
      technologies: {
        frontend: ['Kotlin Multiplataforma', 'Compose Multiplataforma', 'Kotlin'],
        backend: ['Ktor', 'Python', 'Docker', 'Stack3'],
        cloud: ['Firebase', 'Google Cloud']
      },
      features: [
        {
          icon: 'QrCode',
          title: 'Simple y Rápido',
          description: 'Un sistema basado en una aplicación móvil tan sencilla que la única tarea del usuario es iniciar sesión para obtener un código QR dinámico que funciona como su llave de acceso.'
        },
        {
          icon: 'ShieldCheck',
          title: 'Ultra-Seguro',
          description: 'El corazón de nuestra plataforma es el encriptado STACK3. Este sistema propietario actualiza el código QR cada segundo, volviéndolo tan seguro que para vulnerarlo, se necesitaría viajar en el tiempo.'
        },
        {
          icon: 'WifiOff',
          title: 'Eficiencia Inigualable',
          description: 'Su eficiencia es inigualable: Override Pass funciona en la mayoría de los escenarios sin necesidad de una conexión a internet activa, garantizando el acceso en todo momento.'
        },
        {
          icon: 'Building',
          title: 'Versátil y Escalable',
          description: 'Hecho para cualquier área: escuelas, empresas, eventos masivos o complejos residenciales. Donde sea que se necesite controlar un acceso, Override Pass es la solución ideal.'
        }
      ], 
      imageUrl: PlaceHolderImages.find(p => p.id === 'override-pass')?.imageUrl!, 
      imageHint: PlaceHolderImages.find(p => p.id === 'override-pass')?.imageHint!,
      color: '#8b5cf6' // Violeta
    },
    { 
      id: 'override-mindstack', 
      title: 'Override Mindstack', 
      slug: createSlug('Override Mindstack'),
      shortDescription: 'Más que un Concurso de Programación.',
      description: 'Override Mindstack es el concurso de programación más desafiante de México. Con una fascinante temática espacial, los concursantes no se enfrentan a múltiples problemas pequeños, sino a un solo y colosal problema NP-HARD: el "Problema Quimera". Rompemos el molde tradicional, permitiendo (y alentando) el uso de cualquier herramienta disponible, incluyendo las últimas tecnologías de Inteligencia Artificial.', 
      technologies: {
        frontend: ['React', 'Typescript'],
        backend: ['Python', 'Docker'],
        cloud: ['Supabase', 'Vercel', 'Render']
      }, 
      features: [
        {
            icon: 'Puzzle',
            title: 'Desafío NP-HARD',
            description: 'Los concursantes se enfrentan a un único y complejo problema "Quimera", poniendo a prueba su ingenio y habilidades de resolución de problemas al máximo.'
        },
        {
            icon: 'BrainCircuit',
            title: 'IA Permitida',
            description: 'Fuimos pioneros en México al permitir el uso de herramientas de Inteligencia Artificial, fomentando la innovación y el uso de tecnologías de vanguardia.'
        },
        {
            icon: 'Trophy',
            title: 'Competencia de Élite',
            description: 'Reunimos a los mejores estudiantes de programación para una competencia intensa y prestigiosa con un solo ganador.'
        },
        {
            icon: 'Rocket',
            title: 'Temática Espacial',
            description: 'Una fascinante narrativa con temática espacial que añade una capa de inmersión y emoción al desafío de programación.'
        }
      ],
      imageUrl: PlaceHolderImages.find(p => p.id === 'override-mindstack')?.imageUrl!,
      imageHint: PlaceHolderImages.find(p => p.id === 'override-mindstack')?.imageHint!,
      color: '#0ea5e9' // Azul Cielo
    },
  ];
