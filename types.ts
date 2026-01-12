import { LucideIcon } from 'lucide-react';

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Service {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  tag?: string;
  duration?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}