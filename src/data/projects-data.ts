
import { PlaceHolderImages } from '@/data/placeholder-images';
import { Project } from '@/types';


function createSlug(title: string) {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}

export const projectsData: Project[] = [
    { 
      id: 'override-pass', 
      title: 'Override Pass', 
      slug: createSlug('Override Pass'),
      shortDescription: 'Control de Acceso. Simple, Rápido y Ultra-Seguro.',
      description: 'Override Pass redefine el control de accesos. Es un sistema basado en una aplicación móvil tan sencilla que la única tarea del usuario es iniciar sesión. Al instante, obtiene un código QR dinámico que funciona como su llave de acceso.\n\nEl corazón de nuestra plataforma es el encriptado STACK3. Este sistema propietario actualiza el código QR cada segundo, volviéndolo tan seguro que para vulnerarlo, se necesitaría viajar en el tiempo. Es seguridad de nivel superior, diseñada para el mundo real.\n\nSu eficiencia es inigualable: Override Pass funciona en la mayoría de los escenarios sin necesidad de una conexión a internet activa.\n\nEstá hecho para cualquier área: escuelas, empresas, eventos masivos o complejos residenciales. Donde sea que se necesite controlar un acceso, Override Pass es la solución ideal.\n\nSencillez, Rapidez y Seguridad.', 
      technologies: {
        frontend: ['Kotlin Multiplataforma', 'Compose Multiplataforma', 'Kotlin'],
        backend: ['Ktor', 'Python', 'Docker', 'Stack3'],
        cloud: ['Firebase', 'Google Cloud']
      }, 
      imageUrl: PlaceHolderImages.find(p => p.id === 'override-pass')?.imageUrl!, 
      imageHint: PlaceHolderImages.find(p => p.id === 'override-pass')?.imageHint!,
      color: '#8b5cf6' // Violeta
    },
    { 
      id: 'override-mindstack', 
      title: 'Override Mindstack', 
      slug: createSlug('Override Mindstack'),
      shortDescription: 'Más que un Concurso de Programación.',
      description: 'Override Mindstack es el concurso de programación más desafiante de México. Con una fascinante temática espacial, los concursantes no se enfrentan a múltiples problemas pequeños, sino a un solo y colosal problema NP-HARD: el "Problema Quimera".\n\nRompemos el molde tradicional. Override Mindstack fue el primer concurso de programación en México en permitir (y alentar) el uso de cualquier herramienta disponible, incluyendo las últimas tecnologías de Inteligencia Artificial.\n\nLa edición inaugural se disputó en 2025 en el TEC de Uruapan, donde más de 30 estudiantes pusieron a prueba sus límites, culminando con un único ganador.\n\nEn 2026, la saga continúa, expandiéndose con un nuevo concurso enfocado, esta vez, en la innovación.\n\nOverride Mindstack es más que un simple concurso de programación.', 
      technologies: {
        frontend: ['Next.js', 'React', 'TypeScript'],
        backend: ['Node.js', 'Genkit AI', 'Docker'],
        cloud: ['Google Cloud', 'Firebase']
      }, 
      imageUrl: PlaceHolderImages.find(p => p.id === 'override-mindstack')?.imageUrl!,
      imageHint: PlaceHolderImages.find(p => p.id === 'override-mindstack')?.imageHint!,
      color: '#0ea5e9' // Azul Cielo
    },
    { 
      id: 'override-nutrition', 
      title: 'Override Nutrition', 
      slug: createSlug('Override Nutrition'),
      shortDescription: 'Dedica tiempo a tus pacientes, no a la gestión.',
      description: 'Override Nutrition es la primera plataforma de gestión clínica impulsada por Inteligencia Artificial, diseñada y pensada exclusivamente por y para los profesionales de la salud en México.\n\nNuestra filosofía es simple: el valioso tiempo del profesional debe dedicarse al paciente, no a las tareas administrativas. La plataforma automatiza y optimiza la gestión para que puedas centrarte en lo que realmente importa.\n\nAnteriormente conocido como Lyra, este proyecto ha sido múltiplemente galardonado en concursos de innovación y reconocido por su enfoque centrado en el especialista.\n\nActualmente, Override Nutrition se encuentra en su fase final de desarrollo. Espéralo pronto: el futuro de la gestión en salud llega este 2026.',
      technologies: {
        frontend: ['React Native', 'TypeScript', 'Expo'],
        backend: ['Node.js', 'Genkit AI', 'PostgreSQL'],
        cloud: ['Google Cloud', 'Firebase']
      }, 
      imageUrl: PlaceHolderImages.find(p => p.id === 'override-nutrition')?.imageUrl!,
      imageHint: PlaceHolderImages.find(p => p.id === 'override-nutrition')?.imageHint!,
      color: '#22c55e' // Verde
    },
  ];
