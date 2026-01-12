import { Sparkles, Star, User, MapPin } from 'lucide-react';
import { Feature, Service, Testimonial, FAQItem, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#features' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: 'Expert Artistry',
    description: 'Years of professional experience in bridal, editorial, and event makeup to ensure you look your absolute best.',
    icon: Star,
  },
  {
    id: 2,
    title: 'Premium Products',
    description: 'We exclusively use high-end, luxury cosmetics for a flawless, long-lasting finish that photographs beautifully.',
    icon: Sparkles,
  },
  {
    id: 3,
    title: 'Personalized Looks',
    description: 'Every application is tailored to enhance your unique features, skin tone, and personal style.',
    icon: User,
  },
  {
    id: 4,
    title: 'On-Location Service',
    description: 'Relax while we bring the studio to you. Available for travel to homes, hotels, and venues worldwide.',
    icon: MapPin,
  },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    name: 'Bridal Radiance',
    price: '$350',
    description: 'Includes a detailed consultation, trial run, and wedding day application with luxury skin prep and lashes.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop',
    tag: 'Most Popular',
    duration: '2.5 Hours'
  },
  {
    id: 2,
    name: 'Special Event Glam',
    price: '$150',
    description: 'Full face application for galas, proms, or photoshoots. Long-wearing, water-resistant, and camera-ready.',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop',
    tag: 'Trending',
    duration: '1 Hour'
  },
  {
    id: 3,
    name: 'Makeup Masterclass',
    price: '$200',
    description: 'A 1-on-1 lesson to master your own face. Learn professional techniques, product knowledge, and day-to-night looks.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=2070&auto=format&fit=crop',
    duration: '90 Minutes'
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Emily Clarke',
    role: 'Bride',
    content: "KANT made me feel absolutely stunning on my wedding day. The makeup felt so light but lasted through tears and dancing!",
    image: 'https://picsum.photos/id/64/150/150',
  },
  {
    id: 2,
    name: 'Sophia Rossi',
    role: 'Model',
    content: "I've worked with many artists, but the attention to detail here is unmatched. My skin always looks flawless on camera.",
    image: 'https://picsum.photos/id/65/150/150',
  },
  {
    id: 3,
    name: 'Jessica Chen',
    role: 'Event Planner',
    content: "Professional, punctual, and incredibly talented. I recommend KANT to all my clients for their special events.",
    image: 'https://picsum.photos/id/342/150/150',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "Do you travel for weddings?",
    answer: "Yes! We specialize in on-location services. Travel fees apply for locations outside the metro area and for destination weddings.",
  },
  {
    id: 2,
    question: "How far in advance should I book?",
    answer: "For weddings, we recommend booking 6-12 months in advance. For other events, 4-6 weeks is usually sufficient.",
  },
  {
    id: 3,
    question: "Is a trial run included?",
    answer: "A trial run is included in our Bridal Radiance package. For other services, it can be added for an additional fee.",
  },
  {
    id: 4,
    question: "What brands of makeup do you use?",
    answer: "We use a curated kit featuring professional and luxury brands like Charlotte Tilbury, NARS, Dior, and MAC to ensure longevity and quality.",
  },
];