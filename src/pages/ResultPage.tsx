import React, { useEffect } from 'react';
import Layout from '@/components/common/Layout';
import { PageType } from '@/types';
import { PAGE_SUBTITLE } from '@/utils/constant';
import { useAppContext } from '@/contexts/AppContext';
import { cn } from '@/utils/cn';
import '@/styles/custom-fonts.css'; // 폰트 CSS 불러오기

// 글로벌 스타일을 적용하기 위한 함수
const applyGlobalStyles = () => {
  // 이미 존재하는 스타일 태그가 있는지 확인
  const existingStyle = document.getElementById('result-page-styles');
  if (existingStyle) return;

  // 새 스타일 태그 생성 및 추가
  const styleTag = document.createElement('style');
  styleTag.id = 'result-page-styles';
  styleTag.innerHTML = `
    html, body, #root {
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
    
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    .pulse-animation {
      animation: pulse 2s infinite ease-in-out;
    }
  `;
  document.head.appendChild(styleTag);
};

const ResultPage: React.FC = () => {
  const { setCurrentPage } = useAppContext();
  const wishText = localStorage.getItem('userWish') || '소원';
  
  // 컴포넌트가 마운트될 때 글로벌 스타일 적용
  useEffect(() => {
    applyGlobalStyles();
    
    return () => {
      const styleTag = document.getElementById('result-page-styles');
      if (styleTag) {
        document.head.removeChild(styleTag);
      }
    };
  }, []);
  
  // 소원 다시 빌기 버튼 핸들러
  const handleWishAgain = () => {
    setCurrentPage(PageType.MEDITATION);
  };
  
  // 홈으로 돌아가기 버튼 핸들러
  const handleGoHome = () => {
    setCurrentPage(PageType.HOME);
  };
  
  return (
    <Layout
      pageNumber={PageType.RESULT}
      pageTitle="소원 결과"
      pageSubtitle={PAGE_SUBTITLE}
    >
      {/* 전체 컨테이너 - 우주 배경 */}
      <div 
        className={cn(
          "relative flex flex-col items-center justify-between",
          "min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
        )}
        style={{ 
          backgroundImage: "url('/assets/images/background_2.png')",
          height: "100vh",
          width: "100vw",
          maxWidth: "100%",
          backgroundColor: "#000", // 우주 배경 기본 색상
        }}
      >
        {/* 상단부 - 해/달/견/과 로고 */}
        <div className="w-full flex items-center justify-center mt-8">
          <div className="relative" style={{ width: '80%', maxWidth: '360px' }}>
            <div className="flex items-center justify-center">
              {/* 왼쪽 촛불 */}
              <img 
                src="/assets/images/candle.gif" 
                alt="candle" 
                className="h-16 w-auto mr-4"
              />
              
              {/* 해/달/견/과 타이틀 */}
              <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 p-3 rounded-lg border-2 border-white">
                <img 
                  src="/assets/images/heatalcompany_logo_2.png" 
                  alt="해/달/견/과" 
                  className="h-8 w-auto"
                />
              </div>
              
              {/* 오른쪽 촛불 */}
              <img 
                src="/assets/images/candle.gif" 
                alt="candle" 
                className="h-16 w-auto ml-4"
              />
            </div>
          </div>
        </div>
        
        {/* 중앙부 - 소원 결과 메시지 */}
        <div className="flex flex-col items-center justify-center mt-4 px-6 text-center">
          <p className="text-white text-xl font-sam3kr mb-2">당신의 소원은 이미 이루어졌습니다.</p>
        </div>
        
        {/* 하단부 - 빛나는 손과 버튼들 */}
        <div className="w-full flex flex-col items-center mb-8">
          {/* 빛나는 손 이미지 */}
          <div className="relative mb-8">
            <img 
              src="/assets/images/glowing_hands.png" 
              alt="Glowing Hands"
              className="w-80 h-auto"
            />
          </div>
          
          {/* 버튼 영역 */}
          <div className="flex justify-center space-x-4 w-full px-4">
            <button 
              onClick={handleWishAgain}
              className="flex-1 max-w-40"
            >
              <img 
                src="/assets/images/wish_again_button.png" 
                alt="소원 또 빌래?"
                className="w-full h-auto pulse-animation"
              />
            </button>
            
            <button 
              onClick={handleGoHome}
              className="flex-1 max-w-40"
            >
              <img 
                src="/assets/images/home_button.png" 
                alt="처음으로 돌아가기"
                className="w-full h-auto"
              />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResultPage;