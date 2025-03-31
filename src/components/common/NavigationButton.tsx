import React, { useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { PageType } from '@/types';
import { cn } from '@/utils/cn';

interface NavigationButtonProps {
  targetPage: PageType;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ 
  targetPage, 
  className = '',
  size = 'md',
  disabled = false
}) => {
  const { setCurrentPage } = useAppContext();
  const [isPressed, setIsPressed] = useState(false);
  
  // 기본 이미지와 누를 때 이미지 경로
  const defaultImage = '/assets/images/next_button.png';
  const pressedImage = '/assets/images/next_button_2.png';
  
  // 페이지 이동 처리
  const handleNavigate = () => {
    if (disabled) return;
    setCurrentPage(targetPage);
    // 필요한 경우 React Router로 직접 이동할 수도 있음
    // navigate(`/pages/${targetPage}`);
  };

  // 사이즈에 따른 이미지 너비 클래스
  const sizeClasses = {
    sm: 'w-16',
    md: 'w-24',
    lg: 'w-32'
  };
  
  return (
    <button 
      onClick={handleNavigate}
      className={cn(
        'flex items-center justify-center transition-opacity',
        { 'opacity-50 cursor-not-allowed': disabled },
        className
      )}
      onMouseDown={() => !disabled && setIsPressed(true)}
      onMouseUp={() => !disabled && setIsPressed(false)}
      onMouseLeave={() => !disabled && setIsPressed(false)}
      onTouchStart={() => !disabled && setIsPressed(true)}
      onTouchEnd={() => !disabled && setIsPressed(false)}
      disabled={disabled}
    >
      <img 
        src={isPressed ? pressedImage : defaultImage} 
        alt="NEXT" 
        className={cn('h-auto', sizeClasses[size])}
      />
    </button>
  );
};

export default NavigationButton;