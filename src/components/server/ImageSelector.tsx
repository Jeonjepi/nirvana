import React, { useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { ImageSelectorProps } from '@/types';

const ImageSelector: React.FC<ImageSelectorProps> = ({ image }) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const { selectedImages, setSelectedImages } = useAppContext();
  
  // If it's an empty grid cell
  if (image.empty) {
    return <div className="w-full h-20 bg-white"></div>;
  }
  
  // If it's a cell with only text
  if (image.text) {
    return (
      <div className="w-full h-20 bg-pink-200 flex items-center justify-center text-center p-1">
        <span className="text-xs font-medium">{image.text}</span>
      </div>
    );
  }
  
  // For actual images
  const handleSelect = (): void => {
    setIsSelected(!isSelected);
    
    if (!isSelected) {
      setSelectedImages([...selectedImages, image.id]);
    } else {
      setSelectedImages(selectedImages.filter(id => id !== image.id));
    }
  };
  
  return (
    <div 
      className={`w-full h-20 bg-white relative overflow-hidden cursor-pointer ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
      onClick={handleSelect}
    >
      <img 
        src={image.src} 
        alt={image.alt} 
        className="w-full h-full object-cover"
      />
      {isSelected && (
        <div className="absolute top-1 right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-3 h-3">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ImageSelector;