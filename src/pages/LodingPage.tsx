import React, { useEffect, useState } from 'react';
import Layout from '@/components/common/Layout';
import { PageType } from '@/types';
import { PAGE_SUBTITLE } from '@/utils/constant';
import { useAppContext } from '@/contexts/AppContext';
import { cn } from '@/utils/cn';
import '@/styles/custom-fonts.css'; // 폰트 CSS 불러오기

// 글로벌 스타일을 적용하기 위한 함수
const applyGlobalStyles = () => {
  // 이미 존재하는 스타일 태그가 있는지 확인
  const existingStyle = document.getElementById('loading-page-styles');
  if (existingStyle) return;

  // 새 스타일 태그 생성 및 추가
  const styleTag = document.createElement('style');
  styleTag.id = 'loading-page-styles';
  styleTag.innerHTML = `
    html, body, #root {
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    .fade-in {
      animation: fadeIn 0.5s ease-in-out forwards;
    }
  `;
  document.head.appendChild(styleTag);
};

const LoadingPage: React.FC = () => {
  const { setCurrentPage } = useAppContext(); // AppContext에서 setCurrentPage 가져오기
  const [step, setStep] = useState(0);
  
  // 컴포넌트가 마운트될 때 글로벌 스타일 적용
  useEffect(() => {
    applyGlobalStyles();
    
    return () => {
      const styleTag = document.getElementById('loading-page-styles');
      if (styleTag) {
        document.head.removeChild(styleTag);
      }
    };
  }, []);
  
// LoadingPage.tsx의 마지막 단계 처리 부분 수정
useEffect(() => {
  const timer = setTimeout(() => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // 콘솔에 로그 추가
      console.log("이동 시도: RESULT 페이지");
      
      // 1. AppContext 업데이트
      setCurrentPage(PageType.RESULT);
      
      // 2. 타임아웃 추가 (AppContext 처리 시간 확보)
      setTimeout(() => {
        // 3. 직접 라우팅 백업 방법
        if (typeof window !== 'undefined') {
          // window.location.pathname을 로그로 출력하여 현재 경로 확인
          console.log("현재 경로:", window.location.pathname);
          
          // 경로가 여전히 /loading이면 수동으로 이동
          if (window.location.pathname.includes('/loading')) {
            console.log("수동 라우팅으로 이동");
            window.location.href = '/result';
          }
        }
      }, 500); // AppContext가 업데이트된 후 확인하기 위한 짧은 대기 시간
    }
  }, 2000);
  
  return () => clearTimeout(timer);
}, [step, setCurrentPage]);
  
  return (
    <Layout
      pageNumber={PageType.LOADING}
      pageTitle="로딩"
      pageSubtitle={PAGE_SUBTITLE}
    >
      {/* 전체 컨테이너 - 우주 배경 */}
      <div 
        className={cn(
          "relative flex flex-col items-center justify-center",
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
          <div 
            className={cn(
              "mb-6 transition-opacity duration-500",
              { "opacity-0": step < 1, "fade-in": step >= 1 }
            )}
          >
            <img 
              src="/assets/images/load_1.png" 
              alt="LOADING..." 
              className="w-60 h-auto"
            />
          </div>
          
          {/* 불보살님께 소원이 가는중... 텍스트 */}
          <div 
            className={cn(
              "mb-4 transition-opacity duration-500",
              { "opacity-0": step < 2, "fade-in": step >= 2 }
            )}
          >
            <img 
              src="/assets/images/load_2.png" 
              alt="불보살님께 소원이 가는중..." 
              className="w-64 h-auto"
            />
          </div>
          
          {/* 일체 중생들을 두루두루 살피는 중... 텍스트 */}
          <div 
            className={cn(
              "transition-opacity duration-500",
              { "opacity-0": step < 3, "fade-in": step >= 3 }
            )}
          >
            <img 
              src="/assets/images/load_3.png" 
              alt="일체 중생들을 두루두루 살피는 중..." 
              className="w-64 h-auto"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoadingPage;