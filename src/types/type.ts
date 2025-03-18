export interface Position {
    x: number;
    y: number;
  }
  
  export interface DesktopIconProps {
    icon: React.ReactNode;
    label: string;
    to: string;
    position?: Position;
  }
  
  export interface WallpaperProps {
    children: React.ReactNode;
  }