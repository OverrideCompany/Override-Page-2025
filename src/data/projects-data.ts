
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
      shortDescription: 'Tu llave maestra al ecosistema digital.',
      description: 'Override Pass es una solución de identidad digital unificada que ofrece acceso seguro y sin fricciones a toda nuestra suite de productos. Olvídate de múltiples contraseñas y gestiona tus servicios desde un solo lugar con la máxima seguridad.', 
      technologies: ['OAuth 2.0', 'Biometric Auth', 'Firebase', 'Next.js', 'Genkit AI'], 
      imageUrl: 'https://ffvlhfaiswqbzayfivno.supabase.co/storage/v1/object/sign/Images/OverridePass.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2YzODg1Yy04ZDgyLTQyNzgtYjM4MC1iNGYwNWU4MGI5NTgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvT3ZlcnJpZGVQYXNzLmpwZyIsImlhdCI6MTc2MTE4MzcyMCwiZXhwIjoxNzkyNzE5NzIwfQ.UmCT-uNNdKwaDnveJFRhu5HncPTWXpqOpRlm-5rukJk', 
      imageHint: PlaceHolderImages.find(p => p.id === 'override-pass')?.imageHint!,
      color: '#8b5cf6' // Violeta
    },
  ];

