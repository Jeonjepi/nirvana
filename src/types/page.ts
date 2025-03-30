export enum PageType {
    HOME = 1,
    SERVER_INTRO = 2,
    SOCIAL = 3,
    COMMUNITY = 4,
    MEDITATION = 5,
    TEACHINGS = 6,
    PROFILE = 7
  }
  
  export interface PageProps {
    title?: string;
    description?: string;
  }
  
  export interface AppContextType {
    currentPage: PageType;
    setCurrentPage: React.Dispatch<React.SetStateAction<PageType>>;
    selectedImages: number[];
    setSelectedImages: React.Dispatch<React.SetStateAction<number[]>>;
  }