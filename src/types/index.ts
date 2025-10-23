
import type { ElementType } from 'react';

/**
 * Defines the structure for a service offered by the company.
 */
export type Service = {
  icon: ElementType;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

/**
 * Defines the structure for a project in the portfolio.
 */
export type Project = {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  technologies: {
    frontend: string[];
    backend: string[];
    cloud: string[];
  };
  imageUrl: string;
  imageHint: string;
  color: string;
};

/**
 * Defines the structure for a team member.
 */
export type TeamMember = {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  imageHint: string;
};

/**
 * Defines the structure for a placeholder image.
 */
export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};
