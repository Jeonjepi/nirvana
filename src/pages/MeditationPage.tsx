import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { PageType } from '@/types';

const MeditationPage: React.FC = () => {
  const { setCurrentPage } = useAppContext();

  const goToNextPage = () => {
    setCurrentPage(PageType.TEACHINGS);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* 브라우저 헤더 */}
      <div className="bg-blue-500 text-white flex items-center justify-between px-2 py-1">
        <div className="font-bold">HETAL COMPANY</div>
        <div className="flex">
          <button className="mx-1 bg-gray-200 text-black px-1">-</button>
          <button className="mx-1 bg-gray-200 text-black px-1">□</button>
          <button className="mx-1 bg-gray-200 text-black px-1">×</button>
        </div>
      </div>
      
      {/* 툴바 */}
      <div className="bg-gray-200 flex items-center px-2 py-1 text-xs border-b border-gray-400">
        <div className="mr-4">File</div>
        <div className="mr-4">Edit</div>
        <div className="mr-4">View</div>
        <div className="mr-4">Go</div>
        <div className="mr-4">Communicator</div>
        <div>Help</div>
      </div>
      
      {/* 북마크 & 주소창 */}
      <div className="flex flex-col bg-gray-200 text-xs border-b border-gray-400">
        <div className="flex px-2 py-1">
          <div className="mr-4">Bookmarks</div>
          <div>Locations</div>
        </div>
        <div className="flex px-2 py-1 items-center">
          <div className="bg-white border border-gray-400 flex-grow px-2">http://www.HetalCompany.com</div>
        </div>
      </div>
      
      {/* 메인 콘텐츠 */}
      <div className="flex-grow relative overflow-hidden">
        {/* 배경 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600 via-blue-400 to-green-400"></div>
        
        {/* 부처님 배경 이미지 */}
        <div className="absolute inset-0 opacity-40">
          <img 
            src="/assets/images/buddha-statue.png" 
            alt="부처님 배경" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        
        {/* 왼쪽 아이콘 바 */}
        <div className="absolute left-4 top-20 flex flex-col space-y-2">
          <div className="w-12 h-12 bg-blue-300 border-2 border-white flex items-center justify-center">
            <span className="text-red-500 text-xl">♥</span>
          </div>
          <div className="w-12 h-12 bg-yellow-300 border-2 border-white flex items-center justify-center">
            <span className="text-green-500 text-xl">☺</span>
          </div>
          <div className="w-12 h-12 bg-pink-300 border-2 border-white flex items-center justify-center">
            <span className="text-purple-500 text-xl">✿</span>
          </div>
        </div>

        
        {/* 별 이미지들 */}
        {[1, 2, 3, 4, 5].map((_, index) => (
          <div 
            key={index}
            className="absolute w-5 h-5 text-white animate-pulse"
            style={{
              top: `${20 + (index * 15)}%`,
              left: `${10 + (index * 18)}%`,
              animationDelay: `${index * 0.3}s`
            }}
          >
            ★
          </div>
        ))}
        
        {/* 어서오세요 텍스트 */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 font-bold text-2xl text-gray-900 z-10">
          어서오세요
        </div>
        
        {/* 중앙 메시지 상자 */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 bg-opacity-60 py-3 px-12 text-center">
          <p className="text-lg font-bold">이루고 싶은 소원을 적으세요</p>
        </div>
        
        {/* 빌기 버튼 */}
        <div 
          className="absolute bottom-32 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={goToNextPage}
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 via-yellow-400 to-pink-500 flex items-center justify-center">
            <p className="font-bold text-lg">빌기</p>
          </div>
        </div>
    
      </div>
      
      {/* 윈도우 시작바 */}
      <div className="bg-blue-500 px-2 py-1 flex items-center">
        <button className="bg-green-500 text-white font-bold px-4 py-1 flex items-center">
          <span className="mr-1">⊞</span> START
        </button>
      </div>
    </div>
  );
};

export default MeditationPage;