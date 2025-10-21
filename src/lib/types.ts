import type { ElementType } from 'react';

export type Service = {
  icon: ElementType;
  title: string;
  description: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  imageHint: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  imageHint: string;
};
