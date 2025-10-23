
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
      imageUrl: 'https://ffvlhfaiswqbzayfivno.supabase.co/storage/v1/object/sign/Images/OverridePass.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2YzODg1Yy04ZDgyLTQyNzgtYjM4MC1iNGYwNWU4MGI5NTgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvT3ZlcnJpZGVQYXNzLmpwZyIsImlhdCI6MTc2MTE4MzcyMCwiZXhwIjoxNzkyNzE5NzIwfQ.UmCT-uNNdKwaDnveJFRhu5HncPTWXpqOpRlm-5rukJk', 
      imageHint: PlaceHolderImages.find(p => p.id === 'override-pass')?.imageHint!,
      color: '#8b5cf6' // Violeta
    },
  ];





