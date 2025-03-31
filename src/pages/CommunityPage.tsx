import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { PageType } from '@/types';

const CommunityPage: React.FC = () => {
  const { setCurrentPage } = useAppContext();
  // const [wishText, setWishText] = useState<string>('');

  const goToNextPage = () => {
    setCurrentPage(PageType.MEDITATION);
  };

  return (
    <div 
      className="flex flex-col items-center justify-between min-h-screen py-8 px-4 relative"
      style={{
        backgroundImage: "url('/assets/images/night-sky-background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* 별들 효과 */}
      {Array.from({ length: 30 }).map((_, index) => (
        <div
          key={index}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.7 + 0.3,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 2}s`
          }}
        ></div>
      ))}

      {/* 상단 섹션: 헤더와 촛불 */}
      <div className="flex items-center mb-8">
        <img 
          src="/assets/images/candle.png" 
          alt="촛불" 
          className="w-8 h-auto mx-4"
        />
        <div 
          className="text-xl font-bold text-white px-6 py-2 rounded-md"
          style={{
            backgroundImage: "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
          }}
        >
          ★ 해달/컴/퍼/니 ★
        </div>
        <img 
          src="/assets/images/candle.png" 
          alt="촛불" 
          className="w-8 h-auto mx-4"
        />
      </div>

      {/* 중간 섹션: 여러 개의 촛불 */}
      <div className="flex justify-center mb-8">
        {Array.from({ length: 15 }).map((_, index) => (
          <img 
            key={index}
            src="/assets/images/candle.png" 
            alt="촛불" 
            className="w-6 h-auto mx-0.5"
          />
        ))}
      </div>

      {/* 소원 입력 필드 */}
      <div className="w-full max-w-lg bg-white py-3 px-4 rounded-md text-center mb-8">
        <p className="text-gray-800">이루고 싶은 소원을 작성하세요</p>
      </div>

      {/* 소원빌기 버튼 */}
      <div 
        className="mb-16 cursor-pointer transform hover:scale-105 transition-transform" 
        onClick={goToNextPage}
      >
        <div className="bg-red-500 text-white font-bold px-8 py-4 rounded-full text-xl">
          소원빌기
        </div>
      </div>

      {/* 하단 부처님 섹션 */}
      <div className="relative flex flex-col items-center">
        <div className="bg-yellow-100 rounded-full px-6 py-2 mb-4 text-sm text-center">
          마음에 집중하여 당신의 소원을 빌어보세요
        </div>
        <div className="flex items-end">
          <img 
            src="/assets/images/candle.png" 
            alt="촛불" 
            className="w-6 h-auto mx-4"
          />
          <div className="flex flex-col items-center">
            <img 
              src="/assets/images/buddha.png" 
              alt="부처님" 
              className="w-20 h-auto"
            />
            <img 
              src="/assets/images/lotus.png" 
              alt="연꽃" 
              className="w-24 h-auto -mt-2"
            />
          </div>
          <img 
            src="/assets/images/candle.png" 
            alt="촛불" 
            className="w-6 h-auto mx-4"
          />
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;