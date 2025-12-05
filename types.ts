import React from 'react';

export type Language = 'ru' | 'ky';

export interface Car {
  id: string;
  name: string;
  price: number;
  image: string;
  features: string[];
  tag?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Requirement {
  id: string;
  text: string;
}