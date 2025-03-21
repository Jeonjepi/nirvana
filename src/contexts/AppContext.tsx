import React, { createContext, useState, useContext } from 'react';
import { AppContextType, PageType } from '@/types';

// Create context with an initial undefined value
const AppContext = createContext<AppContextType | undefined>(undefined);

// AppProvider props type
interface AppProviderProps {
  children: React.ReactNode;
}

// Provider component
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageType>(PageType.HOME);
  const [selectedImages, setSelectedImages] = useState<number[]>([]);

  const value: AppContextType = {
    currentPage,
    setCurrentPage,
    selectedImages,
    setSelectedImages,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook to use the context
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};