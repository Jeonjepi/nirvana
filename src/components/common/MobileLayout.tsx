import React, { ReactNode } from 'react';
import { PageType } from '@/types';

interface LayoutProps {
  children: ReactNode;
  pageNumber: PageType;
  pageTitle?: string;
  pageSubtitle?: string;
}

const MobileLayout: React.FC<LayoutProps> = ({
  children,
}) => {
  return (
    <div className="mobile-container-wrapper">
      <div className="mobile-content-container">
        {children}
      </div>
    </div>
  );
};

export default MobileLayout;