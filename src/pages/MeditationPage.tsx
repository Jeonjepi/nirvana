import React, { useEffect, useState, useRef } from 'react';
import Layout from '@/components/common/Layout';
import { PageType } from '@/types';
import { PAGE_SUBTITLE } from '@/utils/constant';
import NavigationButton from '@/components/common/NavigationButton';
import { cn } from '@/utils/cn';
import '@/styles/custom-fonts.css'; // 폰트 CSS 불러오기

// 글로벌 스타일을 적용하기 위한 함수
const applyGlobalStyles = () => {
  // 이미 존재하는 스타일 태그가 있는지 확인
  const existingStyle = document.getElementById('meditation-page-styles');
  if (existingStyle) return;

  // 새 스타일 태그 생성 및 추가
  const styleTag = document.createElement('style');
  styleTag.id = 'meditation-page-styles';
  styleTag.innerHTML = `
    html, body, #root {
      margin: 0;
      padding: 0;
      height: 100svh;
      width: 100%;
      overflow-x: hidden;
    }
    
    @keyframes float {
      0% { transform: translateY(0) }
      50% { transform: translateY(-10px) }
      100% { transform: translateY(0) }
    }
    
    .floating {
      animation: float 3s ease-in-out infinite;
    }
    
    .fade-out-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0;
      pointer-events: none;
      transition: opacity 1s ease-in-out;
      z-index: 9999;
    }
    
    .fade-out-overlay.active {
      opacity: 1;
      pointer-events: all;
    }
    
    /* 직접 Sam3KR 폰트 정의 */
    @font-face {
      font-family: 'Sam3KR';
      src: url('/assets/fonts/Sam3KRFont.woff2') format('woff2'),
           url('/assets/fonts/Sam3KRFont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    
    /* Sam3KR 폰트 클래스 */
    .font-sam3kr {
      font-family: 'Sam3KR', sans-serif !important;
    }
    
    /* 폰트 적용 헬퍼 클래스 */
    .wish-textarea::placeholder {
      font-family: 'Sam3KR', sans-serif !important;
      color: #666;
    }
    
    .wish-button {
      font-family: 'Sam3KR', sans-serif !important;
    }
  `;
  document.head.appendChild(styleTag);
};

const MeditationPage: React.FC = () => {
  const [wishText, setWishText] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const navigationRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  // 컴포넌트가 마운트될 때 글로벌 스타일 적용
  useEffect(() => {
    applyGlobalStyles();
    
    // 폰트 로딩 후 적용을 위해 약간의 지연 추가
    const fontLoadTimeout = setTimeout(() => {
      if (textareaRef.current) {
        // 폰트 강제 적용을 위한 리플로우 트리거
        textareaRef.current.style.display = 'none';
        setTimeout(() => {
          if (textareaRef.current) {
            textareaRef.current.style.display = 'block';
          }
        }, 10);
      }
    }, 100);
    
    return () => {
      const styleTag = document.getElementById('meditation-page-styles');
      if (styleTag) {
        document.head.removeChild(styleTag);
      }
      clearTimeout(fontLoadTimeout);
    };
  }, []);
  
  // 텍스트 입력 핸들러
  const handleWishChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setWishText(e.target.value);
  };
  
  // 입력 완료 후 다음 페이지로 이동
  const handleSubmitWish = () => {
    if (wishText.trim().length > 0) {
      // 로컬 스토리지에 소원 저장 (필요시)
      localStorage.setItem('userWish', wishText.trim());
      
      // 페이드 아웃 효과 시작
      setIsFadingOut(true);
      
      // 일정 시간 후 다음 페이지로 이동
      setTimeout(() => {
        if (navigationRef.current) {
          const navButton = navigationRef.current.querySelector('button') || 
                            navigationRef.current.querySelector('a') ||
                            navigationRef.current;
          
          if (navButton && typeof navButton.click === 'function') {
            navButton.click();
          }
        }
      }, 1000); // 1초 후 다음 페이지로 이동 (페이드 효과 시간과 맞춤)
    }
  };
  
  // 취소 버튼 핸들러
  const handleCancel = () => {
    setWishText('');
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };
  
  // 확인 버튼 핸들러
  const handleConfirm = () => {
    handleSubmitWish();
  };
  
  return (
    <Layout
      pageNumber={PageType.MEDITATION}
      pageTitle="소원 빌기"
      pageSubtitle={PAGE_SUBTITLE}
    >
      {/* 페이드 아웃 오버레이 */}
      <div className={`fade-out-overlay ${isFadingOut ? 'active' : ''}`}></div>
      
      {/* 전체 컨테이너 - 우주 배경 */}
      <div 
        className={cn(
          "relative flex flex-col items-center justify-between",
          "min-h-screen w-full bg-cover bg-center bg-no-repeat"
        )}
        style={{ 
          backgroundImage: "url('/assets/images/background_2.png')",
          minHeight: "100svh", // svh 사용
          width: "100%",
          maxWidth: "100%",
          backgroundColor: "#000", // 우주 배경 기본 색상
          overflowY: "auto", // 스크롤 가능하게 설정
          paddingBottom: "calc(env(safe-area-inset-bottom) + 100px)" // 하단 여백 추가
        }}
      >
        {/* 상단부 - 부처님 로고 (세 개의 개별 에셋) */}
        <div className="w-full flex items-center justify-center mt-8">
          <div className="relative rounded-lg overflow-hidden" style={{ width: '90%', maxWidth: '400px' }}>
            {/* 배경 이미지 */}
            <div className="relative p-2 rounded-lg overflow-hidden w-full">
              <div className="flex items-center justify-center relative z-10 py-2">
                {/* 왼쪽 촛불 */}
                <img 
                  src="/assets/images/candle.gif" 
                  alt="candle" 
                  className="h-15 w-auto mr-6"
                />
                
                {/* 부처님 이미지 */}
                <div className="relative">
                  <img 
                    src="/assets/images/buddhai.gif" 
                    alt="Buddha Logo" 
                    className="h-12 w-auto"
                  />
                </div>
                
                {/* 오른쪽 촛불 */}
                <img 
                  src="/assets/images/candle.gif" 
                  alt="candle" 
                  className="h-15 w-auto ml-6"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* 중간 영역 - 말풍선과 손 이미지, 직접 스타일링 */}
        <div className="flex-1 flex flex-col items-center justify-center w-full" style={{ marginTop: '30px' }}>
          {/* 말풍선 영역 - 직접 스타일링으로 구현 */}
          <div style={{
            position: 'relative',
            width: '240px',
            height: '180px',
            marginBottom: '20px',
          }}>
            {/* 말풍선 이미지 */}
            <img 
              src="/assets/images/speak.png" 
              alt="Speech Bubble"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            />

            {/* 텍스트 입력 영역 - 폰트 적용 */}
            <textarea
              ref={textareaRef}
              value={wishText}
              onChange={handleWishChange}
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
              placeholder="소원을 입력하세요..."
              maxLength={100}
              className="font-sam3kr wish-textarea"
              style={{
                position: 'absolute',
                top: '35%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '70%',
                height: '60px',
                border: 'none',
                background: 'transparent',
                resize: 'none',
                textAlign: 'center',
                color: '#333',
                zIndex: 10,
                fontSize: '14px',
                outline: 'none',
              }}
            />

            {/* 버튼 컨테이너 */}
            <div style={{
              position: 'absolute',
              bottom: '25%',
              left: 0,
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              zIndex: 10,
            }}>
              {/* 취소 버튼 - 폰트 적용 */}
              <button
                onClick={handleCancel}
                className="font-sam3kr wish-button"
                style={{
                  padding: '5px 12px',
                  borderRadius: '12px',
                  backgroundColor: '#fff8c4',
                  color: '#8b7d00',
                  border: '1px solid #ffe066',
                  fontSize: '12px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                }}
              >
                취소
              </button>

              {/* 확인 버튼 - 폰트 적용 */}
              <button
                onClick={handleConfirm}
                className="font-sam3kr wish-button"
                style={{
                  padding: '5px 12px',
                  borderRadius: '12px',
                  backgroundColor: '#ffeb3b',
                  color: '#755500',
                  border: '1px solid #ffd600',
                  fontSize: '12px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                }}
                disabled={isFadingOut}
              >
                확인
              </button>
            </div>
          </div>
          
          {/* 손 이미지 */}
          <div className="flex justify-center w-full">
            <img 
              src="/assets/images/hand.gif" 
              alt="Praying Hands"
              className={`w-20 h-auto object-contain ${!isInputFocused ? 'floating' : ''}`}
            />
          </div>
        </div>

        {/* 하단 네비게이션 버튼 - 숨겨두고 참조만 사용 */}
        <div className="w-full flex justify-end p-4 mb-10 opacity-0 absolute" style={{ bottom: 0, right: 0, pointerEvents: 'none' }} ref={navigationRef}>
          <NavigationButton 
            targetPage={PageType.RESULT}
          />
        </div>
      </div>
    </Layout>
  );
};

export default MeditationPage;