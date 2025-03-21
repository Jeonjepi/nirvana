import React from 'react';
import { PageHeaderProps } from '@/types';

const PageHeader: React.FC<PageHeaderProps> = ({ 
  pageNumber, 
  pageTitle, 
  pageSubtitle 
}) => {
  return (
    <header className="page-header">
      <h1 className="page-title">{pageNumber}페이지 - {pageTitle}</h1>
      {pageSubtitle && <h2 className="page-subtitle">{pageSubtitle}</h2>}
    </header>
  );
};

export default PageHeader;