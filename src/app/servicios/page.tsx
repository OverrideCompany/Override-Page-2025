
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '@/data/services-data';

export default function ServicesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <main className="min-h-screen flex items-center justify-center py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-3xl mx-auto space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="bg-card/50 backdrop-blur-lg border border-white/10 text-card-foreground rounded-xl shadow-lg p-6 flex items-center space-x-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-primary/50"
            >
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">{service.title}</h2>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
