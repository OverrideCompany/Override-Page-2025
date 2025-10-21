'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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

const sectionColor = '#FFFFFF'; // Color blanco para las estrellas

export function OverrideDescription() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const wordOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const wordY = useTransform(scrollYProgress, [0, 0.05], [0, -20]);
  const contentOpacity = useTransform(scrollYProgress, [0.05, 0.1], [0, 1]);
  const navOpacity = useTransform(scrollYProgress, [0.1, 0.2, 0.9, 1], [0, 1, 1, 0]);

  const activeIndex = useTransform(scrollYProgress, (pos) => {
    // Map scroll progress (from 0.1 to 1.0) to character index
    return Math.floor((pos - 0.1) * characters.length / 0.9);
  });


  return (
    <section
      ref={targetRef}
      data-color={sectionColor}
      className="relative min-h-[500vh] w-full"
    >
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        
        <motion.div 
            style={{ opacity: wordOpacity, y: wordY }}
            className="absolute text-8xl md:text-9xl lg:text-[180px] font-bold"
        >
            OVERRIDE
        </motion.div>

        {/* Side Navigation */}
        <motion.nav 
          style={{ opacity: navOpacity }}
          className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-20"
        >
          <ul className="flex flex-col gap-3">
            {characters.map((char, index) => {
              const isActive = useTransform(activeIndex, (latest) => latest === index);
              const scale = useTransform(isActive, (latest) => latest ? 1 : 0.9);
              const letterOpacity = useTransform(isActive, (latest) => latest ? 1 : 0);
              const dotOpacity = useTransform(isActive, (latest) => latest ? 0 : 1);

              return (
                <motion.li key={index} style={{ scale }}>
                  <div className="relative w-12 h-12">
                    <div className="absolute w-12 h-12 bg-card/50 rounded-md shadow-md backdrop-blur-sm border border-white/10" style={{ transform: 'rotate(4deg)' }}></div>
                    <div className="absolute w-12 h-12 bg-card/70 rounded-md shadow-lg backdrop-blur-md border border-white/10 flex items-center justify-center font-bold text-xl">
                      <motion.span style={{ opacity: letterOpacity }} className="absolute">{char.letter}</motion.span>
                      <motion.span style={{ opacity: dotOpacity }} className="absolute text-3xl leading-none">·</motion.span>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </motion.nav>

        <motion.div style={{ opacity: contentOpacity }} className="flex w-full max-w-5xl mx-auto px-4 md:px-6">
          <div className="relative flex w-full items-center">
            
            {/* Left side: letters */}
            <div className="w-1/2">
              <div className="relative h-[180px] flex items-center justify-center font-bold">
                {characters.map((char, index) => {
                  const start = (index / characters.length) * 0.9 + 0.1;
                  const end = ((index + 1) / characters.length) * 0.9 + 0.1;
                  
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
                    <motion.h1
                      key={index}
                      style={{
                        opacity,
                        y,
                      }}
                      className="text-8xl md:text-9xl lg:text-[180px] absolute"
                    >
                      {char.letter}
                    </motion.h1>
                  );
                })}
              </div>
            </div>

            {/* Right side: descriptions */}
            <div className="w-1/2">
              <div className="relative h-[180px] flex items-center">
                {characters.map((char, index) => {
                  const start = (index / characters.length) * 0.9 + 0.1;
                  const end = ((index + 1) / characters.length) * 0.9 + 0.1;
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

          </div>
        </motion.div>
      </div>
    </section>
  );
}
