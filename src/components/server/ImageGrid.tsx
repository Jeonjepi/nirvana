import React from 'react';
import ImageSelector from './ImageSelector';
import { ImageItem } from '@/types';

const ImageGrid: React.FC = () => {
  // Mock data for the image grid
  const gridImages: ImageItem[] = [
    { id: 1, src: '/assets/images/test1.png', alt: 'Colorful Dog' },
    { id: 2, src: '/assets/images/test2.png', alt: 'Lotus Flower' },
    { id: 3, src: '/assets/images/test3.png', alt: 'Buddha with Love' },
    { id: 4, src: '/assets/images/test4.png', alt: 'Cat' },
    { id: 5, src: '/assets/images/test5.png', alt: 'Bird' },
    { id: 6, src: '/assets/images/test6.png', alt: 'Flower' },
    { id: 7, src: '/assets/images/test7.png', alt: 'Leaf' },
    { id: 8, src: '/assets/images/test8.png', alt: 'Bee' },
    { id: 9, src: '/assets/images/test9.png', alt: 'Rose' },
  ];

  return (
    <div className="w-64 border border-gray-300 rounded shadow-sm">
      <div className="bg-blue-500 text-white text-xs py-1 px-2 flex justify-between items-center">
        <span>이미지를 모두 선택하세요</span>
        <div className="flex space-x-1">
          <button className="w-3 h-3 bg-gray-200 rounded-sm" aria-label="minimize"></button>
          <button className="w-3 h-3 bg-gray-200 rounded-sm" aria-label="maximize"></button>
          <button className="w-3 h-3 bg-gray-200 rounded-sm" aria-label="close">×</button>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-1 p-1 bg-gray-100">
        {gridImages.map((image) => (
          <ImageSelector key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;