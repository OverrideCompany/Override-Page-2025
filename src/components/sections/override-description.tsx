'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projectsData } from '@/lib/projects-data';

const characters = [
  {
    letter: 'O',
    description:
      'Soluciones Optimizadas. Creamos software a medida que se integra perfectamente con tus operaciones.',
  },
  {
    letter: 'V',
    description:
      'Visión de Futuro. No solo codificamos, construimos la arquitectura tecnológica para tu éxito a largo plazo.',
  },
  {
    letter: 'E',
    description:
      'Experiencias Excepcionales. Diseñamos interfaces intuitivas y atractivas que enamoran a los usuarios.',
  },
  {
    letter: 'R',
    description:
      'Resultados Reales. Nuestro enfoque se centra en entregar productos que generen un impacto medible.',
  },
  {
    letter: 'R',
    description:
      'Rendimiento Robusto. Aplicaciones rápidas, seguras y escalables que crecen al ritmo de tu negocio.',
  },
  {
    letter: 'I',
    description:
      'Innovación Integrada. Implementamos las últimas tecnologías para darte una ventaja competitiva.',
  },
  {
    letter: 'D',
    description:
      'Desarrollo Ágil. Un proceso transparente y colaborativo que te mantiene en el centro del proyecto.',
  },
  {
    letter: 'E',
    description:
      'Evolución Constante. Ofrecemos soporte y mantenimiento para que tu software nunca se quede obsoleto.',
  },
];

const projectColor = projectsData[2].color; // Using a color from projects data

export function OverrideDescription() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section
      ref={targetRef}
      data-color={projectColor}
      className="relative min-h-[500vh] w-full"
    >
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <div className="flex w-full max-w-5xl mx-auto px-4 md:px-6">
          <div className="relative flex w-full items-center">
            <div className="w-1/2">
              {/* Left side: descriptions */}
              <div className="relative h-[180px] flex items-center">
                {characters.map((char, index) => {
                  const start = index / characters.length;
                  const end = (index + 1) / characters.length;
                  const opacity = useTransform(
                    scrollYProgress,
                    [start, (start + end) / 2, end],
                    [0, 1, 0]
                  );
                  const y = useTransform(
                    scrollYProgress,
                    [start, (start + end) / 2, end],
                    [20, 0, -20]
                  );
                  return (
                    <motion.div
                      key={index}
                      style={{ opacity, y }}
                      className="absolute left-0 w-full"
                    >
                      <p className="text-xl md:text-2xl text-foreground/80">
                        {char.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="w-1/2">
              {/* Right side: letters */}
              <div className="relative h-[180px] flex items-center justify-center font-bold">
                {characters.map((char, index) => {
                  const start = index / characters.length;
                  const end = (index + 1)_characters.length;

                  // Define la posición inicial de cada letra
                  const initialX = 0;

                  // La letra activa se queda en el centro, las anteriores se desplazan
                  const x = useTransform(scrollYProgress, (pos) => {
                    if (pos >= end) {
                      return -200; // Se mueve hacia la izquierda y desaparece
                    }
                    if (pos >= start) {
                        return initialX; // Permanece en el centro
                    }
                    return initialX; // Estado inicial
                  });

                  const opacity = useTransform(scrollYProgress, (pos) => {
                    if (pos >= end) {
                      return 0;
                    }
                    if (pos >= start) {
                      return 1;
                    }
                    return 0; // Oculto hasta que es su turno
                  });
                   
                  const display = useTransform(scrollYProgress, (pos) => {
                    const currentSegment = Math.floor(pos * characters.length);
                    return currentSegment === index ? 'block' : 'none';
                  });


                  return (
                    <motion.h1
                      key={index}
                      style={{
                        x,
                        opacity,
                        display
                      }}
                      className="text-8xl md:text-9xl lg:text-[180px] absolute"
                    >
                      {char.letter}
                    </motion.h1>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
