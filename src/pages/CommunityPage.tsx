import React, { useState, useEffect } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { PageType } from '@/types';
import WishCircle from '@/components/community/WishCircle';
import { PAGE_SUBTITLE } from '@/utils/constant';
import Layout from '@/components/common/Layout';
import '@/styles/custom-fonts.css'; // 폰트 CSS 불러오기
import NavButton from '@/components/common/NavButton';

const CommunityPage: React.FC = () => {
  const { setCurrentPage } = useAppContext();
  const [showGuide, setShowGuide] = useState(true);

  // 5초 후에 가이드 텍스트 숨기기
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGuide(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  const goToNextPage = () => {
    // 클릭 효과를 위해 약간의 지연 후 페이지 이동
    setTimeout(() => {
      setCurrentPage(PageType.MEDITATION);
    }, 800);
  };

  // 별 생성 함수
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 50; i++) {
      const size = Math.random() * 0.3 + 0.1; // 0.1rem ~ 0.4rem
      stars.push(
        <div
          key={i}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{
            width: `${size}rem`,
            height: `${size}rem`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.8 + 0.2,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        />
      );
    }
    return stars;
  };

  return (
    <Layout
    pageNumber={PageType.COMMUNITY}
    pageTitle="소개페이지"
    pageSubtitle={PAGE_SUBTITLE}
  >
    <div 
      className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
      }}
    >
      {/* 별 배경 */}
      {renderStars()}
      
      <div className="flex flex-col sm:flex-row items-center justify-center z-10">
  
        
        {/* 원형 버튼 */}
        <WishCircle onClick={goToNextPage} />
      </div>
      
      {/* 하단 안내 텍스트 */}
      <div 
        className={`fixed bottom-8 text-center text-gray-300 transition-opacity duration-1000 px-4 z-10 ${
          showGuide ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="mb-2">소원을 빌기 위해 원을 클릭하세요</p>
        <p className="text-sm">명상의 세계로 들어가기</p>
        <div className="mt-16 flex justify-end w-full">
          <NavButton targetPage={PageType.MEDITATION} />
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default CommunityPage;