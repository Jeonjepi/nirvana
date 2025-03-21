import React from 'react';
import Layout from '@/components/common/Layout';
import NavButton from '@/components/common/NavButton';
import ImageGrid from '@/components/server/ImageGrid';
import { PageType } from '@/types';
import { PAGE_SUBTITLE } from '@/utils/constant';

const ServerIntroPage: React.FC = () => {
  return (
    <Layout
      pageNumber={PageType.SERVER_INTRO}
      pageTitle="서버인트로"
      pageSubtitle={PAGE_SUBTITLE}
    >
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center w-full justify-center">
          <ImageGrid />
        </div>
        
        <div className="flex justify-end w-full mt-8">
          <NavButton targetPage={PageType.SOCIAL} />
        </div>
      </div>
    </Layout>
  );
};

export default ServerIntroPage;