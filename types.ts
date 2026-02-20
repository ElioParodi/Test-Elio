import { ComponentType } from 'react';

export interface ChecklistItem {
  id: string;
  text: string;
  category: 'keyword' | 'content' | 'structure' | 'meta' | 'technical';
  value: number;
  icon: ComponentType<{ size?: number | string; className?: string; strokeWidth?: number }>;
  // Nuovi campi per i non esperti
  whatIsIt: string;
  purpose: string;
  howToCheck: string;
}

export interface ChecklistState {
  [key: string]: boolean;
}
