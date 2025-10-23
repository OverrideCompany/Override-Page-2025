
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Project } from '@/lib/types';

function createSlug(title: string) {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}

export const projectsData: Project[] = [
    { 
      id: 'override-pass', 
      title: 'Override Pass', 
      slug: createSlug('Override Pass'),
      shortDescription: 'Tu llave maestra al ecosistema digital.',
      description: 'Override Pass es una solución de identidad digital unificada que ofrece acceso seguro y sin fricciones a toda nuestra suite de productos. Olvídate de múltiples contraseñas y gestiona tus servicios desde un solo lugar con la máxima seguridad.', 
      technologies: ['OAuth 2.0', 'Biometric Auth', 'Firebase', 'Next.js', 'Genkit AI'], 
      imageUrl: PlaceHolderImages.find(p => p.id === 'override-pass')?.imageUrl!, 
      imageHint: PlaceHolderImages.find(p => p.id === 'override-pass')?.imageHint!,
      color: '#2a8af6' // Azul vibrante
    },
  ];

