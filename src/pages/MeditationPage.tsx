import React, { useState } from 'react';
import Layout from '@/components/common/Layout';
import { PageType } from '@/types';
import { PAGE_SUBTITLE } from '@/utils/constant';
import { useAppContext } from '@/contexts/AppContext';
import '@/styles/custom-fonts.css'; // 폰트 CSS 불러오기

const MeditationPage: React.FC = () => {
  const { setCurrentPage } = useAppContext(); // AppContext에서 setCurrentPage 가져오기
  const [wishText, setWishText] = useState(''); // 소원 텍스트 상태 관리
  
  return (
    <Layout
      pageNumber={PageType.MEDITATION}
      pageTitle="소원 빌기"
      pageSubtitle={PAGE_SUBTITLE}
    >
      {/* 아이폰 16 대응을 위한 스타일 */}
      <style jsx global>{`
        html, body, #root {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
      `}</style>

      {/* 전체 컨테이너 - 우주 배경 */}
      <div 
        className="relative flex flex-col items-center justify-between min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
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
          <div className="relative rounded-lg overflow-hidden" style={{ width: '80%', maxWidth: '360px' }}>
            {/* 배경 이미지 */}
            <div className="relative bg-blue-300 p-2 rounded-lg overflow-hidden w-full">
              <img 
                src="/assets/images/cloud_background.png" 
                alt="Cloud Background" 
                className="w-full h-auto absolute inset-0 object-cover"
              />
              
              <div className="flex items-center justify-center relative z-10 py-2">
                {/* 왼쪽 촛불 */}
                <img 
                  src="/assets/images/candle.png" 
                  alt="candle" 
                  className="h-16 w-auto mr-4"
                />
                
                {/* 부처님 이미지 */}
                <div className="relative">
                  <img 
                    src="/assets/images/buddha_logo.png" 
                    alt="Buddha Logo" 
                    className="h-24 w-auto"
                  />
                  {/* 빛나는 효과 (선택적) */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                    <img 
                      src="/assets/images/light_effect.png" 
                      alt="Light" 
                      className="h-8 w-auto opacity-80"
                    />
                  </div>
                </div>
                
                {/* 오른쪽 촛불 */}
                <img 
                  src="/assets/images/candle.png" 
                  alt="candle" 
                  className="h-16 w-auto ml-4"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* 중간 여백 */}
        <div className="flex-grow"></div>
        
        {/* 중앙부 - 말풍선과 소원 입력 */}
        <div className="flex flex-col items-center justify-center px-4 mb-4">
          <div className="relative">
            {/* 말풍선 이미지 */}
            <img 
              src="/assets/images/말풍선.gif" 
              alt="Speech Bubble" 
              className="w-full max-w-md"
            />
            
            {/* 말풍선 내용 */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
              <h2 className="text-xl font-bold text-black mb-2 font-sam3kr">어떤 소원을 빌까?</h2>
              
              {/* 텍스트 입력 영역 */}
              <input
                type="text"
                value={wishText}
                onChange={(e) => setWishText(e.target.value)}
                placeholder="(예시 텍스트)"
                className="w-full bg-white p-2 mb-4 text-black font-sam3kr rounded border border-gray-300 focus:outline-none"
              />
              
              {/* 소원 버튼들 */}
              <div className="flex flex-row gap-4 mt-2 w-full justify-center">
                <button 
                  className="border-2 border-black rounded-lg px-6 py-1 bg-yellow-100 hover:bg-yellow-200 font-sam3kr"
                  onClick={() => setWishText('')}
                >
                  취소(X)
                </button>
                <button 
                  className="border-2 border-black rounded-lg px-6 py-1 bg-yellow-100 hover:bg-yellow-200 font-sam3kr"
                  onClick={() => {
                    // 소원 확인 처리
                    alert(`소원 "${wishText}"이(가) 등록되었습니다.`);
                    setWishText('');
                  }}
                >
                  확인(O)
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* 하단부 - 기도하는 손 */}
        <div className="w-full flex justify-center mb-8">
          <img 
            src="/assets/images/hand.gif" 
            alt="Praying Hands"
            className="w-48 h-auto object-contain" 
          />
        </div>

        {/* NEXT 버튼 - 필요한 경우 */}
        <div className="absolute bottom-4 right-4 z-20">
          <button 
            onClick={() => {
              // AppContext를 사용하여 다음 페이지로 이동
              setCurrentPage(PageType.LOADING);
            }}
            className="flex items-center justify-center"
            onMouseDown={(e) => {
              // 마우스 클릭 시 이미지 변경
              e.currentTarget.querySelector('img').src = '/assets/images/next_button_2.png';
            }}
            onMouseUp={(e) => {
              // 마우스 클릭 해제 시 이미지 원복
              e.currentTarget.querySelector('img').src = '/assets/images/next_button.png';
            }}
            onMouseLeave={(e) => {
              // 마우스가 버튼 영역을 벗어날 때 이미지 원복
              e.currentTarget.querySelector('img').src = '/assets/images/next_button.png';
            }}
            onTouchStart={(e) => {
              // 터치 시작 시 이미지 변경 (모바일 대응)
              e.currentTarget.querySelector('img').src = '/assets/images/next_button_2.png';
            }}
            onTouchEnd={(e) => {
              // 터치 종료 시 이미지 원복 (모바일 대응)
              e.currentTarget.querySelector('img').src = '/assets/images/next_button.png';
            }}
          >
            <img 
              src="/assets/images/next_button.png" 
              alt="NEXT" 
              className="w-24 h-auto"
            />
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default MeditationPage;