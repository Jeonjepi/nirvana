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
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .fade-in {
      opacity: 0;
      animation: fadeIn 0.8s forwards;
    }
  `;
    document.head.appendChild(styleTag);
};

const ResultPage: React.FC = () => {
    const { setCurrentPage } = useAppContext();

    // 애니메이션을 위한 상태들
    const [showFirstText, setShowFirstText] = useState(false);
    const [showSecondText, setShowSecondText] = useState(false);
    const [showButton, setShowButton] = useState(false);

    // 컴포넌트가 마운트될 때 글로벌 스타일 적용
    useEffect(() => {
        applyGlobalStyles();

        // 순차적 애니메이션을 위한 타이머 설정
        const firstTextTimer = setTimeout(() => {
            setShowFirstText(true);
        }, 500);

        const secondTextTimer = setTimeout(() => {
            setShowSecondText(true);
        }, 1500);

        const buttonTimer = setTimeout(() => {
            setShowButton(true);
        }, 2500);

        return () => {
            const styleTag = document.getElementById('result-page-styles');
            if (styleTag) {
                document.head.removeChild(styleTag);
            }

            // 타이머 정리
            clearTimeout(firstTextTimer);
            clearTimeout(secondTextTimer);
            clearTimeout(buttonTimer);
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

    // 엔딩 페이지로 이동하는 핸들러
    const handleGoToEnding = () => {
        setCurrentPage(PageType.ENDING);
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
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
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
                            <img
                                src="/assets/images/haetal_company_logo.png"
                                alt="해/달/견/과"
                                className="h-16 w-auto"
                            />

                            {/* 오른쪽 촛불 */}
                            <img
                                src="/assets/images/candle.gif"
                                alt="candle"
                                className="h-16 w-auto ml-4"
                            />
                        </div>
                    </div>
                </div>

                {/* 중앙부 - 순차적으로 나타나는 소원 결과 메시지 */}
                <div className="flex flex-col items-center justify-center mt-8 px-6 text-center">
                    {showFirstText && (
                        <p className="text-white text-l font-sam3kr mb-2 fade-in">
                            당신의 소원은 이미 이루어졌습니다.
                        </p>
                    )}

                    {showSecondText && (
                        <p className="text-white text-l font-sam3kr mb-2 fade-in">
                            다만 인연에 따라 만날 뿐...
                        </p>
                    )}

                    {showButton && (
                        <button
                            onClick={handleGoToEnding}
                            className="mt-8 text-white text-l font-sam3kr border border-white px-6 py-2 rounded-full fade-in"
                            style={{
                                background: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(4px)',
                                zIndex:100
                            }}
                        >
                            함께한 보살들 보러가기
                        </button>
                    )}
                </div>

                {/* 하단부 - 빛나는 손과 버튼들 */}
                <div className="w-full flex flex-col items-center mt-auto">
                    {/* 손과 배경 이미지 컨테이너 */}
                    <div className="relative" style={{ width: '250px', height: '200px', marginBottom: '50px' }}>
                        {/* 녹색 광선 배경 이미지 - 크기와 위치 조정 */}
                        <img
                            src="/assets/images/hand_background.png"
                            alt="background"
                            className="w-full h-auto"
                            style={{
                                position: 'absolute',
                                top: '-100px',  // 위로 조금 올림
                                left: 0,
                                transform: 'scale(1.5)' // 크기를 약간 줄임
                            }}
                        />

                        {/* 손 이미지 */}
                        <img
                            src="/assets/images/hand.png"
                            alt="Glowing Hands"
                            className="w-full h-auto"
                            style={{ position: 'absolute', top: 0, left: 0, zIndex: 20, transform: 'scale(1.2' }}
                        />
                    </div>

                     {/* 버튼 영역 - 손 이미지 아래 배치, 높은 z-index 적용 */}
  <div 
    className="flex justify-center space-x-4 w-full px-4 mb-8"
    style={{ position: 'relative', zIndex: 50 }} // 높은 z-index 값으로 설정
  >
    <button
      onClick={handleWishAgain}
      className="flex-1 max-w-40"
      style={{ position: 'relative', zIndex: 50 }} // 버튼 자체에도 z-index 적용
    >
      <img
        src="/assets/images/button.png"
        alt="소원 또 빌래?"
        className="w-full h-auto pulse-animation"
      />
    </button>

    <button
      onClick={handleGoHome}
      className="flex-1 max-w-40"
      style={{ position: 'relative', zIndex: 50 }} // 버튼 자체에도 z-index 적용
    >
      <img
        src="/assets/images/button_2.png"
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