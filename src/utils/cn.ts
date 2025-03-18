import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Tailwind CSS 4와 함께 사용할 수 있는 유틸리티 함수
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}