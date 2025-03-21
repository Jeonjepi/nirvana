import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { NavButtonProps } from '@/types';

const NavButton: React.FC<NavButtonProps> = ({ text, targetPage }) => {
  const { setCurrentPage } = useAppContext();

  const handleClick = () => {
    setCurrentPage(targetPage);
  };

  return (
    <button 
      onClick={handleClick}
      className="nav-button"
    >
      {text || 'NEXT'}
    </button>
  );
};

export default NavButton;