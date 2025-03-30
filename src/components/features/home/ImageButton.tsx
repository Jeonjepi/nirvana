import React, { useState } from 'react';
import Image from '@/components/ui/Image';

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

const ImageButton: React.FC<ImageButtonProps> = ({
  defaultImage,
  variantImage,
  alt = "이미지 버튼",
  width = "auto",
  height = "auto",
  delay = 1000,
  onNavigate,
  className = '',
  testId
}) => {
  const [isClicked, setIsClicked] = useState(false);
  
  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      
      // 이미지 변경 후 지정된 시간(delay) 이후에 네비게이션 실행
      setTimeout(() => {
        onNavigate();
      }, delay);
    }
  };
  
  return (
    <div
      className={`relative cursor-pointer ${className}`}
      onClick={handleClick}
      data-testid={testId}
      role="button"
      aria-label={alt}
      style={{ 
        width,
        height,
        transition: 'transform 0.3s ease'
      }}
    >
      <Image
        src={isClicked ? variantImage : defaultImage}
        alt={alt}
        className={`w-full h-full transition-opacity duration-300 ${isClicked ? 'transform scale-105' : ''}`}
      />
    </div>
  );
};

export default ImageButton;