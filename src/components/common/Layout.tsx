import React from 'react';
import PageHeader from './PageHeader';
import { LayoutProps } from '@/types';

const Layout: React.FC<LayoutProps> = ({ 
  children, 
}) => {
  return (
    <div className="page-container">
      <main className="w-full flex-1">
        {children}
      </main>
    </div>
  );
};

export default Layout;