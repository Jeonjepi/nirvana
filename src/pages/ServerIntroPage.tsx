import React, { useState, useEffect } from 'react';
import Layout from '@/components/common/Layout';
import { PageType } from '@/types';
import { PAGE_SUBTITLE } from '@/utils/constant';
import { useAppContext } from '@/contexts/AppContext';
import { cn } from '@/utils/cn';
import '@/styles/custom-fonts.css';

// 글로벌 스타일을 적용하기 위한 함수
const applyGlobalStyles = () => {
  // 이미 존재하는 스타일 태그가 있는지 확인
  const existingStyle = document.getElementById('server-intro-page-styles');
  if (existingStyle) return;

  // 새 스타일 태그 생성 및 추가
  const styleTag = document.createElement('style');
  styleTag.id = 'server-intro-page-styles';
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

// 이미지 정보 배열
interface ImageItem {
  id: number;
  default: string;
  selected: string;
  containsBuddha: boolean;
}

const imageItems: ImageItem[] = [
  { id: 1, default: '/assets/images/button_1_default.png', selected: '/assets/images/button_1_variant.png', containsBuddha: true },
  { id: 2, default: '/assets/images/button_2_default.png', selected: '/assets/images/button_2_variant.png', containsBuddha: true },
  { id: 3, default: '/assets/images/button_3_default.png', selected: '/assets/images/button_3_variant.png', containsBuddha: true },
  { id: 4, default: '/assets/images/button_4_default.png', selected: '/assets/images/button_4_variant.png', containsBuddha: true },
  { id: 5, default: '/assets/images/button_5_default.png', selected: '/assets/images/button_5_variant.png', containsBuddha: true },
  { id: 6, default: '/assets/images/button_6_default.png', selected: '/assets/images/button_6_variant.png', containsBuddha: true },
  { id: 7, default: '/assets/images/button_7_default.png', selected: '/assets/images/button_7_variant.png', containsBuddha: true },
  { id: 8, default: '/assets/images/button_8_default.png', selected: '/assets/images/button_8_variant.png', containsBuddha: true },
  { id: 9, default: '/assets/images/button_9_default.png', selected: '/assets/images/button_9_variant.png', containsBuddha: true },
];

const ServerIntroPage: React.FC = () => {
  const { setCurrentPage } = useAppContext();
  const [selectedImages, setSelectedImages] = useState<number[]>([]);
  const [completed, setCompleted] = useState(false);

  // 컴포넌트가 마운트될 때 글로벌 스타일 적용
  useEffect(() => {
    applyGlobalStyles();
    
    return () => {
      const styleTag = document.getElementById('server-intro-page-styles');
      if (styleTag) {
        document.head.removeChild(styleTag);
      }
    };
  }, []);

  // 이미지 클릭 핸들러
  const handleImageClick = (id: number, containsBuddha: boolean) => {
    if (selectedImages.includes(id)) {
      // 이미 선택된 이미지면 선택 해제
      setSelectedImages(prev => prev.filter(imgId => imgId !== id));
    } else {
      // 선택되지 않은 이미지면 선택
      setSelectedImages(prev => [...prev, id]);
    }

    // 모든 부처 이미지를 정확히 선택했는지 확인
    const buddhaImages = imageItems.filter(img => img.containsBuddha).map(img => img.id);
    const allBuddhasSelected = buddhaImages.every(id => 
      id === id || selectedImages.includes(id)
    );
    const onlyBuddhasSelected = selectedImages.every(id => 
      buddhaImages.includes(id)
    );

    // 다음 페이지로 이동 조건 체크
    if (allBuddhasSelected && onlyBuddhasSelected && selectedImages.length === buddhaImages.length - 1) {
      setCompleted(true);
      setTimeout(() => {
        setCurrentPage(PageType.SOCIAL);
      }, 1500);
    }
  };

  return (
    <Layout
      pageNumber={PageType.SERVER_INTRO}
      pageTitle="부처 찾기"
      pageSubtitle={PAGE_SUBTITLE}
    >
      {/* 전체 컨테이너 - 하늘 배경 */}
      <div 
        className={cn(
          "relative flex flex-col items-center justify-between",
          "min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
        )}
        style={{ 
          backgroundImage: "url('/assets/images/background_1.png')",
          height: "100vh",
          width: "100vw",
          maxWidth: "100%",
        }}
      >
        {/* 상단 로고 이미지 */}
        <div className="w-full flex items-center justify-center mt-8">
          <img 
            src="/assets/images/company_logo.png" 
            alt="해탈컴퍼니108홀딩스" 
            className="h-24 w-auto"
          />
        </div>
        
        {/* 중앙부 - 윈도우 캡챠 */}
        <div className="flex flex-col items-center justify-center flex-grow w-full">
          <div className="relative px-4" style={{ width: '100%', maxWidth: '370px' }}>
            {/* 윈도우 프레임 이미지 */}
            <img 
              src="/assets/images/window_variant.png" 
              alt="Window Frame" 
              className="w-full h-auto"
            />
            
            {/* 9개 이미지 그리드 - 위치 미세 조정 */}
            <div 
              className="absolute" 
              style={{ 
                top: '32px',      // 윈도우 타이틀바 아래
                left: '15px',     // 왼쪽 여백
                right: '15px',    // 오른쪽 여백
                bottom: '32px',   // 하단 스크롤바 위
                width: 'calc(100% - 30px)',
                height: 'calc(100% - 64px)',
              }}
            >
              <div className="grid grid-cols-3 gap-0.5 h-full w-full">
                {imageItems.map((image) => (
                  <div
                    key={image.id}
                    className="flex items-center justify-center p-0.5"
                    onClick={() => handleImageClick(image.id, image.containsBuddha)}
                  >
                    <img
                      src={selectedImages.includes(image.id) ? image.selected : image.default}
                      alt={`Image ${image.id}`}
                      className="w-full h-full object-contain cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* 하단 부처님과 촛불 */}
        <div className="w-full flex items-center justify-center mb-8">
          <div className="flex items-end">
            <img 
              src="/assets/images/candle.gif" 
              alt="Left Candle" 
              className="h-16 w-auto mr-8"
            />
            <img 
              src="/assets/images/buddhai.gif" 
              alt="Buddha" 
              className="h-20 w-auto"
            />
            <img 
              src="/assets/images/candle.gif" 
              alt="Right Candle" 
              className="h-16 w-auto ml-8"
            />
          </div>
        </div>

        {/* 완료 메시지 */}
        {completed && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-4 rounded text-center">
              <p className="text-xl font-bold text-green-600 mb-2">정확히 부처를 찾으셨습니다!</p>
              <p>다음 페이지로 이동합니다...</p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ServerIntroPage;