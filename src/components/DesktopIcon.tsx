import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../utils/cn';

export interface Position {
  x: number;
  y: number;
}

export interface DesktopIconProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  position?: Position;
  className?: string;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ 
  icon, 
  label, 
  to, 
  position,
  className 
}) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const navigate = useNavigate();
  
  const handleClick = (): void => {
    setIsSelected(true);
    navigate(to);
  };
  
  const iconStyle: React.CSSProperties = position ? {
    gridColumn: position.x.toString(),
    gridRow: position.y.toString()
  } : {};
  
  return (
    <div 
      className={cn(
        'flex flex-col items-center justify-center',
        'w-20 h-[100px] cursor-pointer p-2 rounded-md',
        'transition-colors duration-200',
        // Tailwind CSS 4의 새로운 캐스케이딩 변수 활용
        'hover:(bg-white/10)',
        isSelected && 'bg-white/20',
        className
      )}
      onClick={handleClick}
      style={iconStyle}
    >
      <div className="w-12 h-12 flex items-center justify-center mb-2">
        {icon}
      </div>
      <div className={cn(
        'text-white text-xs text-center break-words',
        'shadow-[0_1px_2px_rgba(0,0,0,0.5)]',
        'max-w-[80px] overflow-hidden',
        'line-clamp-2'
      )}>
        {label}
      </div>
    </div>
  );
};

export default DesktopIcon;