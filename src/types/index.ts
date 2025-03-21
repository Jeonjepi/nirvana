// Page types
export enum PageType {
  HOME = 1,
  SERVER_INTRO = 2,
  SOCIAL = 3,
  COMMUNITY = 4,
  MEDITATION = 5,
  TEACHINGS = 6,
  PROFILE = 7
}

// AppContext types
export interface AppContextType {
  currentPage: PageType;
  setCurrentPage: React.Dispatch<React.SetStateAction<PageType>>;
  selectedImages: number[];
  setSelectedImages: React.Dispatch<React.SetStateAction<number[]>>;
}

// Layout component props
export interface LayoutProps {
  children: React.ReactNode;
  pageNumber: PageType;
  pageTitle: string;
  pageSubtitle?: string;
}

// PageHeader component props
export interface PageHeaderProps {
  pageNumber: PageType;
  pageTitle: string;
  pageSubtitle?: string;
}

// NavButton component props
export interface NavButtonProps {
  text?: string;
  targetPage: PageType;
}

// Image types for grid
export interface ImageItem {
  id: number;
  src?: string;
  alt?: string;
  text?: string;
  empty?: boolean;
}

// Image selector props
export interface ImageSelectorProps {
  image: ImageItem;
}

// Button props
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

// IconButton props
export interface IconButtonProps extends ButtonProps {
  icon: React.ReactNode;
}