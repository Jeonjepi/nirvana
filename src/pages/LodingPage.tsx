import React, { useEffect, useState } from 'react';
import Layout from '@/components/common/Layout';
import { PageType } from '@/types';
import { PAGE_SUBTITLE } from '@/utils/constant';
import { useAppContext } from '@/contexts/AppContext';
import '@/styles/custom-fonts.css'; // 폰트 CSS 불러오기

const LoadingPage: React.FC = () => {
  const { setCurrentPage } = useAppContext(); // AppContext에서 setCurrentPage 가져오기
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  // 로딩 진행 효과 (자동으로 다음 페이지로 이동)
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + 1;
        if (newProgress >= 100) {
          clearInterval(interval);
          // 로딩 완료 후 다음 페이지로 이동 (약간의 지연 후)
          setTimeout(() => {
            setCurrentPage(PageType.RESULT); // 다음 페이지로 이동
          }, 1000);
          return 100;
        }
        return newProgress;
      });
    }, 100); // 총 로딩 시간: 약 10초

    return () => clearInterval(interval);
  }, [setCurrentPage]);
  
  return (
    <Layout
      pageNumber={PageType.LOADING}
      pageTitle="로딩"
      pageSubtitle={PAGE_SUBTITLE}
    >
      {/* 전체 컨테이너 - 우주 배경 */}
      <div 
        className="relative flex flex-col items-center justify-center min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ 
          backgroundImage: "url('/assets/images/background_2.png')",
          height: "100vh",
          width: "100vw",
          maxWidth: "100%",
          backgroundColor: "#000", // 우주 배경 기본 색상
        }}
      >
        <div className="flex flex-col items-center justify-center h-full w-full">
          {/* 촛불 GIF */}
          <div className="mb-6">
            <img 
              src="/assets/images/candles.gif" 
              alt="Candles" 
              className="w-80 h-auto"
            />
          </div>
          
          {/* LOADING... 텍스트 (무지개 색상) */}
          <div className="mb-6">
            <img 
              src="/assets/images/load_1.png" 
              alt="LOADING..." 
              className="w-60 h-auto"
            />
          </div>
          
          {/* 불보살님께 소원이 가는중... 텍스트 */}
          <div className="mb-4">
            <img 
              src="/assets/images/load_2.png" 
              alt="불보살님께 소원이 가는중..." 
              className="w-64 h-auto"
            />
          </div>
          
          {/* 일체 중생들을 두루두루 살피는 중... 텍스트 */}
          <div>
            <img 
              src="/assets/images/load_3.png" 
              alt="일체 중생들을 두루두루 살피는 중..." 
              className="w-64 h-auto"
            />
          </div>
          
          {/* 로딩 진행률 표시 (시각적으로만, 개발 중에 확인용) */}
          <div className="hidden">
            <p className="text-white">로딩 진행률: {loadingProgress}%</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoadingPage;