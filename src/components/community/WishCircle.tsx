import React, { useState } from 'react';

interface WishCircleProps {
  onClick: () => void;
}

const WishCircle: React.FC<WishCircleProps> = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  const handleClick = () => {
    setIsClicked(true);
    onClick();
  };
  
  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 배경 원 효과 */}
      <div className="absolute -inset-4 rounded-full bg-black bg-opacity-5 animate-pulse"></div>
      
      {/* 검은색 원 */}
      <div 
        className={`relative w-48 h-48 md:w-64 md:h-64 bg-black rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-all duration-500 
          ${isHovered ? 'transform scale-105 shadow-xl' : ''}
          ${isClicked ? 'transform scale-150 opacity-0' : ''}
        `}
        onClick={handleClick}
      >
        {/* 내부 텍스트 */}
        <div className="text-center z-10">
          <p className={`text-red-500 font-bold text-xl md:text-2xl transition-all duration-300 
            ${isHovered ? 'text-red-400 transform scale-110' : ''}
          `}>소원을</p>
          <p className={`text-red-500 font-bold text-xl md:text-2xl transition-all duration-300 
            ${isHovered ? 'text-red-400 transform scale-110' : ''}
          `}>빌기</p>
        </div>
      </div>
      
      {/* 호버 시 나타나는 효과 */}
      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full rounded-full bg-red-500 bg-opacity-10 animate-pulse"></div>
      )}
      
      {/* 클릭 시 나타나는 파동 효과 */}
      {isClicked && (
        <>
          <div className="absolute top-0 left-0 w-full h-full rounded-full bg-red-500 bg-opacity-30 animate-ping"></div>
          <div className="absolute top-0 left-0 w-full h-full rounded-full bg-white bg-opacity-20 animate-ping delay-75"></div>
        </>
      )}
    </div>
  );
};

export default WishCircle;