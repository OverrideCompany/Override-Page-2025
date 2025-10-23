
import { PlaceHolderImages } from '@/data/placeholder-images';
import { Service, serviceIcons } from '@/types';

export const servicesData: Service[] = [
  {
    icon: serviceIcons.Code,
    title: 'Desarrollo Web',
    description: 'Creamos aplicaciones y sitios web a medida, desde plataformas complejas hasta páginas institucionales. Nuestro enfoque se centra en la escalabilidad, el rendimiento y una experiencia de usuario impecable. Utilizamos las últimas tecnologías para construir soluciones robustas que impulsen tu negocio.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'service-web')?.imageUrl!,
    imageHint: PlaceHolderImages.find(p => p.id === 'service-web')?.imageHint!,
  },
  {
    icon: serviceIcons.Smartphone,
    title: 'Desarrollo Móvil',
    description: 'Desarrollamos aplicaciones móviles nativas y multiplataforma para iOS y Android. Desde la concepción de la idea hasta el lanzamiento en las tiendas de aplicaciones, creamos experiencias móviles intuitivas, rápidas y que conectan con tus usuarios dondequiera que estén.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'service-mobile')?.imageUrl!,
    imageHint: PlaceHolderImages.find(p => p.id === 'service-mobile')?.imageHint!,
  },
  {
    icon: serviceIcons.Palette,
    title: 'Diseño UI/UX',
    description: 'Diseñamos interfaces que no solo son estéticamente atractivas, sino también funcionales e intuitivas. Nuestro proceso de diseño se centra en el usuario, investigando, prototipando y probando para garantizar que cada interacción sea significativa y cada producto sea fácil de usar.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'service-uiux')?.imageUrl!,
    imageHint: PlaceHolderImages.find(p => p.id === 'service-uiux')?.imageHint!,
  },
  {
    icon: serviceIcons.Cloud,
    title: 'Soluciones en la Nube',
    description: 'Te ayudamos a migrar, construir y gestionar tu infraestructura en la nube. Diseñamos arquitecturas seguras, escalables y costo-eficientes en plataformas como Google Cloud y AWS, permitiéndote innovar más rápido y operar con mayor agilidad.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'service-cloud')?.imageUrl!,
    imageHint: PlaceHolderImages.find(p => p.id === 'service-cloud')?.imageHint!,
  },
  {
    icon: serviceIcons.BrainCircuit,
    title: 'Inteligencia Artificial',
    description: 'Integramos soluciones de Inteligencia Artificial para automatizar procesos, obtener insights valiosos de tus datos y crear productos más inteligentes. Desde chatbots y asistentes virtuales hasta modelos predictivos, llevamos el poder de la IA a tu empresa.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'service-ai')?.imageUrl!,
    imageHint: PlaceHolderImages.find(p => p.id === 'service-ai')?.imageHint!,
  }
];
