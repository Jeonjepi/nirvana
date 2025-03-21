import { useCallback } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { PageType } from '@/types';

/**
 * Custom hook for page navigation
 */
export const useNavigation = () => {
  const { currentPage, setCurrentPage } = useAppContext();
  
  const goToPage = useCallback((pageNumber: PageType) => {
    setCurrentPage(pageNumber);
  }, [setCurrentPage]);
  
  const goToNextPage = useCallback(() => {
    setCurrentPage(prev => Math.min(prev + 1, PageType.PROFILE) as PageType);
  }, [setCurrentPage]);
  
  const goToPrevPage = useCallback(() => {
    setCurrentPage(prev => Math.max(prev - 1, PageType.HOME) as PageType);
  }, [setCurrentPage]);
  
  const goToFirstPage = useCallback(() => {
    setCurrentPage(PageType.HOME);
  }, [setCurrentPage]);
  
  const goToLastPage = useCallback(() => {
    setCurrentPage(PageType.PROFILE);
  }, [setCurrentPage]);
  
  return {
    currentPage,
    goToPage,
    goToNextPage,
    goToPrevPage,
    goToFirstPage,
    goToLastPage
  };
};

export default useNavigation;