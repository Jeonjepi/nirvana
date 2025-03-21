import React from 'react';
import Layout from '@/components/common/Layout';
import NavButton from '@/components/common/NavButton';
import MessageDisplay from '@/components/social/MessageDisplay';
import { PageType } from '@/types';
import CloudBackground from '@/components/social/CloudBackgroud';
import { PAGE_SUBTITLE } from '@/utils/constant';
import '@/styles/custom-fonts.css'; // 커스텀 폰트 CSS 불러오기

const SocialPage: React.FC = () => {
  return (
    <Layout
      pageNumber={PageType.SOCIAL}
      pageTitle="소개페이지"
      pageSubtitle={PAGE_SUBTITLE}
    >
       <div className="flex flex-col items-center gap-8 font-sam3kr">
        <div className="flex w-full justify-between">
          {/* Left side - Cloud background with Chinese message */}
          <div className="w-1/2 pr-4">
            <CloudBackground />
          </div>
          
          {/* Right side - Korean message content */}
          <div className="w-1/2 flex flex-col text-right">
            <MessageDisplay />
          </div>
        </div>
        
        <div className="flex justify-end w-full mt-8">
          <NavButton targetPage={PageType.COMMUNITY} text="NEXT" />
        </div>
      </div>
    </Layout>
  );
};

export default SocialPage;