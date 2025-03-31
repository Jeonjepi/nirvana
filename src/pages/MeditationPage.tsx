import React, {  useEffect } from 'react';
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
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
  `;
  document.head.appendChild(styleTag);
};

const MeditationPage: React.FC = () => {
  // const { setCurrentPage } = useAppContext();
  // const [wishText, setWishText] = useState('');
  // const [isSubmitting, setIsSubmitting] = useState(false);
  
  // 컴포넌트가 마운트될 때 글로벌 스타일 적용
  useEffect(() => {
    applyGlobalStyles();
    
    return () => {
      const styleTag = document.getElementById('meditation-page-styles');
      if (styleTag) {
        document.head.removeChild(styleTag);
      }
    };
  }, []);
  
  // 소원 확인 처리
  // const handleConfirmWish = () => {
  //   if (wishText.trim()) {
  //     setIsSubmitting(true);
      
  //     // 소원 텍스트를 localStorage에 저장
  //     localStorage.setItem('userWish', wishText);
      
  //     // 소원 제출 완료 후 로딩 페이지로 이동 (잠시 지연 후)
  //     setTimeout(() => {
  //       setCurrentPage(PageType.LOADING);
  //     }, 500);
  //   } else {
  //     alert('소원을 입력해주세요.');
  //   }
  // };

  // 소원 취소 처리
  // const handleCancelWish = () => {
  //   setWishText('');
  // };
  
  return (
    <Layout
      pageNumber={PageType.MEDITATION}
      pageTitle="소원 빌기"
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
        {/* 상단부 - 부처님 로고 (세 개의 개별 에셋) */}
        <div className="w-full flex items-center justify-center mt-8">
          <div className="relative rounded-lg overflow-hidden" style={{ width: '90%', maxWidth: '400px' }}>
            {/* 배경 이미지 */}
            <div className="relative p-2 rounded-lg overflow-hidden w-full">
              {/* <img 
                src="/assets/images/cloud_background.png" 
                alt="Cloud Background" 
                className="w-full h-auto absolute inset-0 object-cover"
              />
               */}
              <div className="flex items-center justify-center relative z-10 py-2">
                {/* 왼쪽 촛불 */}
                <img 
                  src="/assets/images/candle.gif" 
                  alt="candle" 
                  className="h-15 w-auto mr-6" // 높이 증가 h-16 -> h-24, 여백 증가 mr-4 -> mr-6
                />
                
                {/* 부처님 이미지 */}
                <div className="relative">
                  <img 
                    src="/assets/images/buddhai.gif" 
                    alt="Buddha Logo" 
                    className="h-12 w-auto" // 높이 증가 h-24 -> h-32
                  />
                </div>
                
                {/* 오른쪽 촛불 */}
                <img 
                  src="/assets/images/candle.gif" 
                  alt="candle" 
                  className="h-15 w-auto ml-6" // 높이 증가 h-16 -> h-24, 여백 증가 ml-4 -> ml-6
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* 중간 여백 */}
        <div className="flex-grow"></div>
        
        {/* 중앙부 - 말풍선과 소원 입력 */}
        {/* <div className="flex flex-col items-center justify-center px-4 mb-4">
          <div className="relative">
            <img 
              src="/assets/images/말풍선.gif" 
              alt="Speech Bubble" 
              className="w-full max-w-md"
            />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
              <h2 className="text-xl font-bold text-black mb-2 font-sam3kr">어떤 소원을 빌까?</h2>
              
              <input
                type="text"
                value={wishText}
                onChange={(e) => setWishText(e.target.value)}
                placeholder="(예시 텍스트)"
                className={cn(
                  "w-full bg-white p-2 mb-4 text-black font-sam3kr rounded",
                  "border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300",
                  { "opacity-50": isSubmitting }
                )}
                disabled={isSubmitting}
              />
              
              <div className="flex flex-row gap-4 mt-2 w-full justify-center">
                <button 
                  className={cn(
                    "border-2 border-black rounded-lg px-6 py-1 font-sam3kr transition-colors",
                    "bg-yellow-100 hover:bg-yellow-200 active:bg-yellow-300",
                    { "opacity-50 cursor-not-allowed": isSubmitting }
                  )}
                  onClick={handleCancelWish}
                  disabled={isSubmitting}
                >
                  취소(X)
                </button>
                <button 
                  className={cn(
                    "border-2 border-black rounded-lg px-6 py-1 font-sam3kr transition-colors",
                    "bg-yellow-100 hover:bg-yellow-200 active:bg-yellow-300",
                    { "opacity-50 cursor-not-allowed": isSubmitting }
                  )}
                  onClick={handleConfirmWish}
                  disabled={isSubmitting}
                >
                  확인(O)
                </button>
              </div>
            </div>
          </div>
        </div> */}
        
        {/* 하단부 - 기도하는 손 */}
        <div className="w-full flex justify-center">
          <img 
            src="/assets/images/hand.gif" 
            alt="Praying Hands"
            className="w-40 h-auto object-contain" // 너비 증가 w-64 -> w-80
          />
        </div>

        {/* NEXT 버튼 - 재사용 가능한 컴포넌트로 리팩토링 */}
        <div className="absolute bottom-4 right-4 z-20">
          <NavigationButton 
            targetPage={PageType.LOADING}
            // disabled={isSubmitting} 
          />
        </div>
      </div>
    </Layout>
  );
};

export default MeditationPage;