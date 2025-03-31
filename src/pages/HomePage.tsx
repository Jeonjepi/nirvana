import React from 'react';
import Layout from '@/components/common/Layout';
import ImageButton from '@/components/features/home/ImageButton';
import { useNavigation } from '@/hooks/useNavigation';
import { PageType } from '@/types';
import { PAGE_SUBTITLE } from '@/utils/constant';

const HomePage: React.FC = () => {
  const { goToPage } = useNavigation();
  
  const handleNavigate = () => {
    goToPage(PageType.SERVER_INTRO);
  };
  
  return (
    <Layout
      pageNumber={PageType.HOME}
      pageTitle="메인인트로"
      pageSubtitle={PAGE_SUBTITLE}
    >
      <div 
        className="flex flex-col items-center justify-center min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/images/background_1.png')" }}
      >
        <ImageButton 
          defaultImage="/assets/images/buddha_icon_default.png"
          variantImage="/assets/images/buddha_icon_variant.png"
          alt="클릭하여 다음 페이지로 이동"
          width="120px" // 원래 160px에서 120px로 변경했습니다
          onNavigate={handleNavigate}
          className="rounded-md overflow-hidden hover:shadow-xl transition-shadow"
        />
      </div>
    </Layout>
  );
};

export default HomePage;