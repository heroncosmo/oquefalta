import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  price?: string;
  popular?: boolean;
}

export interface Testimonial {
  text: string;
  author: string;
  location: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum AdviceStatus {
  Idle,
  Loading,
  Success,
  Error
}