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
                  const end = (index + 1) / characters.length;
                  const x = useTransform(
                    scrollYProgress,
                    [start, end],
                    [0, -200]
                  );
                  const opacity = useTransform(
                    scrollYProgress,
                    [start, end],
                    [1, 0]
                  );

                  return (
                    <motion.h1
                      key={index}
                      style={{ x, opacity }}
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
