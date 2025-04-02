import React, { useEffect } from 'react';
import Layout from '@/components/common/Layout';
import { PageType } from '@/types';
import { PAGE_SUBTITLE } from '@/utils/constant';
import { useAppContext } from '@/contexts/AppContext';
import { cn } from '@/utils/cn';
import '@/styles/custom-fonts.css'; 

// 글로벌 스타일을 적용하기 위한 함수
const applyGlobalStyles = () => {
  // 이미 존재하는 스타일 태그가 있는지 확인
  const existingStyle = document.getElementById('ending-page-styles');
  if (existingStyle) return;

  // 새 스타일 태그 생성 및 추가
  const styleTag = document.createElement('style');
  styleTag.id = 'ending-page-styles';
  styleTag.innerHTML = `
    html, body, #root {
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
    
    @keyframes twinkle {
      0% { opacity: 0.4; }
      50% { opacity: 1; }
      100% { opacity: 0.4; }
    }
    
    .credits-item {
      transition: transform 0.3s ease;
    }
    
    .credits-item:hover {
      transform: scale(1.05);
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    }
    
    .heart-pulse {
      display: inline-block;
      animation: pulse 1.5s infinite;
    }
    
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.2); }
      100% { transform: scale(1); }
    }
  `;
  document.head.appendChild(styleTag);
};

const EndingPage: React.FC = () => {
  const { setCurrentPage } = useAppContext();

  // 컴포넌트가 마운트될 때 글로벌 스타일 적용
  useEffect(() => {
    applyGlobalStyles();

    return () => {
      const styleTag = document.getElementById('ending-page-styles');
      if (styleTag) {
        document.head.removeChild(styleTag);
      }
    };
  }, []);

  // 홈으로 돌아가기 버튼 핸들러
  const handleGoHome = () => {
    setCurrentPage(PageType.HOME);
  };

  // 크레딧 정보 배열
  const credits = [
    { id: '@PoachingB', url: 'https://twitter.com/PoachingB' },
    { id: '@qqqintheworld', url: 'https://twitter.com/qqqintheworld' },
    { id: '@DieDieDie_ary', url: 'https://twitter.com/DieDieDie_ary' },
    { id: '@eyelok313', url: 'https://twitter.com/eyelok313' },
    { id: '@noplasticsunday', url: 'https://twitter.com/noplasticsunday' }
  ];

  return (
    <Layout
      pageNumber={PageType.ENDING}
      pageTitle="크레딧"
      pageSubtitle={PAGE_SUBTITLE}
    >
      {/* 전체 컨테이너 - 우주 배경 */}
      <div
        className={cn(
          "relative flex flex-col items-center",
          "w-full bg-cover bg-center bg-no-repeat overflow-y-auto"
        )}
        style={{
          backgroundImage: "url('/assets/images/background_2.png')",
          minHeight: "100svh",
          width: "100%",
          maxWidth: "100%",
          backgroundColor: "#000", // 우주 배경 기본 색상
          paddingBottom: "calc(env(safe-area-inset-bottom) + 20px)", // 안전 영역 추가
        }}
      >
        {/* 상단부 - 함께한 보살들 텍스트 */}
        <div className="w-full flex justify-center py-10">
          <img
            src="/assets/images/with.gif"
            alt="함께한 보살들"
            className="max-w-xs w-full h-13"
          />
        </div>

        {/* 중앙부 - 크레딧 목록 */}
        <div className="flex flex-col items-center justify-center space-y-6 flex-grow py-8">
          {credits.map((credit, index) => (
            <React.Fragment key={credit.id}>
              <a 
                href={credit.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="credits-item text-white text-xl font-sam3kr hover:text-blue-300"
                style={{ 
                  textShadow: '0 0 5px rgba(255, 255, 255, 0.5)',
                  animation: `twinkle ${2 + index * 0.5}s infinite`
                }}
              >
                {credit.id}
              </a>
              
              {/* "그리고" 텍스트는 @eyelok313 다음에만 표시 */}
              {credit.id === '@eyelok313' && (
                <p className="text-white text-m font-sam3kr mt-2 mb-2">그리고</p>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* 보살 이미지 표시 */}
      
        {/* 하단부 - 홈으로 버튼 */}
        <div className="w-full flex justify-center py-8" style={{ 
          marginTop: 'auto',
          paddingBottom: 'env(safe-area-inset-bottom)'
        }}>
          <button
            onClick={handleGoHome}
            className="transition-transform hover:scale-105"
          >
            <img
              src="/assets/images/button_2.png" 
              alt="처음으로 돌아가기"
              className="w-48 h-auto"
            />
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default EndingPage;