import React, { useState } from 'react';

export interface ImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  loading?: 'lazy' | 'eager';
  className?: string;
  testId?: string;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  className = '',
  testId,
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  const handleLoad = () => {
    setIsLoaded(true);
  };
  
  const handleError = () => {
    setHasError(true);
  };
  
  return (
    <div 
      className={`relative ${className}`}
      style={{ 
        width: width || 'auto', 
        height: height || 'auto'
      }}
      data-testid={testId}
    >
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
      )}
      
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${hasError ? 'hidden' : ''}`}
        {...rest}
      />
      
      {hasError && (
        <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-500">
          <span>이미지 로드 실패</span>
        </div>
      )}
    </div>
  );
};

export default Image;