// Added import for React to support React types
import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  content: string;
  avatar: string;
}

export interface PropertyEstimate {
  address: string;
  marketValue: number;
  estimatedSavings: number;
  protestLikelihood: 'High' | 'Medium' | 'Low';
}