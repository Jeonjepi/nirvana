import React from 'react';
import { cn } from '../utils/cn';

interface WallpaperProps {
  children: React.ReactNode;
  className?: string;
}

const Wallpaper: React.FC<WallpaperProps> = ({ children, className }) => {
  return (
    <div 
      className={cn(
        'w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 bg-cover bg-center',
        'relative grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] grid-rows-[repeat(auto-fill,minmax(120px,1fr))]',
        'gap-5 p-5',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Wallpaper;