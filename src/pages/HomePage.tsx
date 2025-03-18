import React from 'react';
import Wallpaper from '../components/Wallpaper';
import DesktopIcon from '../components/DesktopIcon';
import { SideIcon, FolderIcon } from '../components/Icons';

const HomePage: React.FC = () => {
  return (
    <div className="app-container">
      <Wallpaper>
        {/* Side 페이지로 이동하는 아이콘 */}
        <DesktopIcon 
          icon={<SideIcon />} 
          label="Side Page" 
          to="/side" 
          position={{ x: 1, y: 1 }} 
        />
        
        {/* 추가 아이콘들 (기능 없음, 장식용) */}
        <DesktopIcon 
          icon={<FolderIcon />} 
          label="Documents" 
          to="/" 
          position={{ x: 1, y: 2 }} 
        />
        
        <DesktopIcon 
          icon={<FolderIcon />} 
          label="Pictures" 
          to="/" 
          position={{ x: 1, y: 3 }} 
        />

        {/* Tailwind CSS 4의 특성을 활용한 아이콘 */}
        <DesktopIcon 
          icon={<FolderIcon className="text-yellow-300" />} 
          label="Music" 
          to="/" 
          position={{ x: 1, y: 4 }} 
          className="hover:(scale-105 bg-blue-500/10) transition-all"
        />
      </Wallpaper>
    </div>
  );
};

export default HomePage;