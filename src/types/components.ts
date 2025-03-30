import React from 'react';
import { PageType } from './page';

export interface BaseComponentProps {
  className?: string;
  testId?: string;
}

export interface WithChildrenProps extends BaseComponentProps {
  children: React.ReactNode;
}

export interface IconProps extends BaseComponentProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export interface LayoutProps extends WithChildrenProps {
  pageNumber: PageType;
  pageTitle: string;
  pageSubtitle?: string;
}

export interface PageHeaderProps {
  pageNumber: PageType;
  pageTitle: string;
  pageSubtitle?: string;
}

export interface NavButtonProps extends BaseComponentProps {
  text?: string;
  targetPage: PageType;
  id?: string;
}

export interface ButtonProps extends WithChildrenProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  disabled?: boolean;
}

export interface ImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  loading?: 'lazy' | 'eager';
  className?: string;
  testId?: string;
}

export interface CandleProps extends BaseComponentProps {
  glowIntensity?: 'low' | 'normal' | 'high';
  animationDelay?: string;
}

export interface IconMessageProps extends BaseComponentProps {
  message: string[];
  icon: string;
  alternateText?: string;
  width?: string;
  onClick?: () => void;
}

export interface ImageButtonProps {
  defaultImage: string;
  variantImage: string;
  alt?: string;
  width?: string;
  height?: string;
  delay?: number;
  onNavigate: () => void;
  className?: string;
  testId?: string;
}