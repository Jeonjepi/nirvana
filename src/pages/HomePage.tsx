import React from 'react';
import Layout from '../components/common/Layout';
import NavButton from '../components/common/NavButton';
import IconMessage from '../components/home/IconMessage';
import { PageType } from '@/types';
import { PAGE_SUBTITLE } from '@/utils/constant';

const HomePage: React.FC = () => {
  // 이미지에 표시된 메시지
  const dolphinMessage = [
    "절대",
    "바이러스",
    "아닙니다.",
    "믿어",
    "주세요... 전",
    "돌고래입니",
    "다."
  ];

  return (
    <Layout
      pageNumber={PageType.HOME}
      pageTitle="메인인트로"
      pageSubtitle={PAGE_SUBTITLE}
    >
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <IconMessage 
          message={dolphinMessage} 
          icon="/assets/icons/windows.png" 
          alternateText="돌고래"
          width="80px" // 원하는 너비 값을 전달
        />
        
        <div className="mt-16 flex justify-end w-full">
          <NavButton targetPage={PageType.SERVER_INTRO} />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;