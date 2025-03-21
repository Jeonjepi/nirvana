import React, { useState } from 'react';

const BuddhaMessage: React.FC = () => {
  const [isTransformed, setIsTransformed] = useState<boolean>(false);

  const handleDoubleClick = () => {
    setIsTransformed(true);
  };

  return (
    <div className="flex flex-col items-center text-center w-20">
      <div 
        className={`relative cursor-pointer ${isTransformed ? 'bg-blue-500' : 'bg-transparent'}`}
        onDoubleClick={handleDoubleClick}
      >
        {/* 돌고래 이미지 */}
        <div className="relative w-32 h-32 mx-auto mb-4">
          <img 
            src="/assets/images/dolphin.png" 
            alt="Dolphin" 
            className="w-full h-full object-contain" 
          />
          <div className="absolute left-0 bottom-0 cursor-pointer transform scale-75">
            <img src="/assets/icons/expand.png" alt="Expand" className="w-6 h-6" />
          </div>
          <div className="absolute right-0 top-0 cursor-pointer">
            <img src="/assets/icons/cursor.png" alt="Cursor" className="w-6 h-6" />
          </div>
        </div>

        {/* 메시지 텍스트 */}
        <div className={`p-4 rounded-md ${isTransformed ? 'bg-blue-500 text-white' : 'bg-blue-600 text-white'}`}>
          <p className="text-base font-medium">절대</p>
          <p className="text-base font-medium">바이러스</p>
          <p className="text-base font-medium">아닙니다.</p>
          <p className="text-base font-medium">믿어</p>
          <p className="text-base font-medium">주세요... 전</p>
          <p className="text-base font-medium">부처 입니</p>
          <p className="text-base font-medium">다</p>
        </div>
      </div>
      
    </div>
  );
};

export default BuddhaMessage;