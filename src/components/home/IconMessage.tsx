import React, { useState } from 'react';

interface IconMessageProps {
  message: string[];
  icon: string;
  alternateText?: string;
  width?: string;
}

const IconMessage: React.FC<IconMessageProps> = ({ 
  message, 
  icon, 
  alternateText = "아이콘 메시지",
  width = "170px"
}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  
  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
    }
  };
  
  return (
    <div className="flex flex-col items-center">
      <div 
        className="relative cursor-pointer"
        onClick={handleClick}
        style={{ width }}
      >
        {/* 돌고래 이미지 영역 */}
        <div className="relative w-full h-20 flex justify-center items-center bg-transparent">
          <img 
            src={icon} 
            alt={alternateText}
            className="w-14 h-14 object-contain" 
          />
          <div className="absolute left-1 bottom-1">
            <img src="/assets/icons/expand.png" alt="확장" className="w-4 h-4" />
          </div>
        </div>
        
        {/* 텍스트 메시지 영역 - 처음에는 투명하고, 클릭하면 파란색 배경으로 변경 */}
        <div 
          className={`py-2 px-1 text-center transition-colors duration-200 
            ${isClicked ? 'bg-blue-600 text-white' : 'bg-transparent text-gray-800'}`}
        >
          {message.map((line, index) => (
            <p key={index} className="text-xs font-medium leading-tight">{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconMessage;