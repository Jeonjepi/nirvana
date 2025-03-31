import React, { useEffect, useState, useRef } from 'react';
import Layout from '@/components/common/Layout';
import { PageType } from '@/types';
import { PAGE_SUBTITLE } from '@/utils/constant';
import { useAppContext } from '@/contexts/AppContext';
import '@/styles/custom-fonts.css'; // 폰트 CSS 불러오기

// 버블 컴포넌트 정의
interface Bubble {
  id: number;
  left: number;
  top: number;
  size: number;
  speed: number;
  delay: number;
}

const SocialPage: React.FC = () => {
  const { setCurrentPage } = useAppContext(); // AppContext에서 setCurrentPage 가져오기
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const nextButtonRef = useRef<HTMLImageElement>(null); // 이미지 요소에 대한 참조 생성

  // 페이지 로드 시 버블 생성
  useEffect(() => {
    const numberOfBubbles = 15; // 버블 개수
    const newBubbles: Bubble[] = [];

    for (let i = 0; i < numberOfBubbles; i++) {
      newBubbles.push({
        id: i,
        left: Math.random() * 100, // 화면의 랜덤한 x 위치 (%)
        top: Math.random() * 100, // 화면의 랜덤한 y 위치 (%)
        size: 40 + Math.random() * 60, // 버블 크기 (40px~100px)로 증가
        speed: 15 + Math.random() * 60, // 애니메이션 속도 (15s~40s)
        delay: Math.random() * 10, // 시작 딜레이 (0s~10s)
      });
    }

    setBubbles(newBubbles);
  }, []);

  // 이미지 src 변경 함수
  const changeButtonImage = (newSrc: string) => {
    if (nextButtonRef.current) {
      nextButtonRef.current.src = newSrc;
    }
  };

  return (
    <Layout
      pageNumber={PageType.SOCIAL}
      pageTitle="소개페이지"
      pageSubtitle={PAGE_SUBTITLE}
    >
      {/* 방법 1: @ts-ignore 사용하여 TypeScript 오류 무시 */}
      {/* @ts-ignore */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(5deg);
          }
          50% {
            transform: translateY(0) translateX(20px) rotate(0deg);
          }
          75% {
            transform: translateY(20px) translateX(10px) rotate(-5deg);
          }
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
        }
        
        /* 모바일 최적화 스타일 */
        html, body, #root {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow-x: hidden; /* 가로 스크롤만 방지 */
        }
        
        body {
          position: relative;
          background-color: #000; /* 배경색 설정 */
        }
      `}</style>

      <div 
        className="relative flex flex-col items-center min-h-screen w-full bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/assets/images/background_1.png')",
          padding: "0", 
          margin: "0",
          width: "100%", 
          minHeight: "100vh",
          overflowY: "auto" // 세로 스크롤 허용
        }}
      >
        {/* 떠다니는 버블들 */}
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="fixed pointer-events-none z-10"
            style={{
              left: `${bubble.left}%`,
              top: `${bubble.top}%`,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              animation: `float ${bubble.speed}s infinite ease-in-out ${bubble.delay}s`,
              opacity: 0.8, // 투명도 살짝 증가
            }}
          >
            <img
              src="/assets/images/bubble.png"
              alt="bubble"
              className="w-full h-full object-contain"
            />
          </div>
        ))}
        
        {/* 텍스트 영역 - 오른쪽 정렬 */}
        <div className="relative z-10 flex flex-col items-end justify-center px-5 py-12 w-full max-w-lg text-right text-red-600 font-sam3kr mt-12">
          <p className="mb-6 text-4xl sm:text-5xl">불기 3mm년...</p>
          
          <p className="mb-4 text-xl sm:text-2xl">
            북쪽나라 0과 1의 디지털 <br/>
            사바세계에도 화현하시니...
          </p>
          
          <p className="mb-4 text-xl sm:text-2xl">
            3~4년이 지나도 <br/>
            중생의 고통과 행복,, <br/>
            그리고 게임을을 <br/>
            탐한 욕망점음은 <br/>
            끝이지 않았고
          </p>
          
          <p className="mb-4 text-xl sm:text-2xl">
            24세기, 메타버스의 <br/>
            프로젝트와 함께 <br/>
            그 교량이 이어졌다.
          </p>
          
          <p className="mb-4 text-xl sm:text-2xl">
            디지털 사바세계에 <br/>
            화현하신 부처님.
          </p>
          
          <p className="mb-4 text-xl sm:text-2xl pb-16">
            우리 중생들은 <br/>
            무지님을 본다면 <br/>
            가장 먼저 무엇을 <br/>
            하고 싶을까?
          </p>
        </div>
        
        {/* NEXT 버튼 - 고정 위치 */}
        <div className="fixed bottom-4 right-4 z-20">
          <button 
            onClick={() => {
              // AppContext를 사용하여 다음 페이지로 이동
              setCurrentPage(PageType.MEDITATION);
            }}
            className="flex items-center justify-center"
            onMouseDown={() => changeButtonImage('/assets/images/next_button_2.png')}
            onMouseUp={() => changeButtonImage('/assets/images/next_button.png')}
            onMouseLeave={() => changeButtonImage('/assets/images/next_button.png')}
            onTouchStart={() => changeButtonImage('/assets/images/next_button_2.png')}
            onTouchEnd={() => changeButtonImage('/assets/images/next_button.png')}
          >
            <img 
              ref={nextButtonRef}
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

export default SocialPage;