
/**
 * Application constants
 */

import { PageType } from "@/types";

// Page routes mapping
export const PAGE_ROUTES: Record<PageType, string> = {
  [PageType.HOME]: '/',
  [PageType.SERVER_INTRO]: '/server-intro',
  [PageType.SOCIAL]: '/social',
  [PageType.MEDITATION]: '/meditation',
  [PageType.LOADING]: '/loading',
  [PageType.RESULT]: '/result',
  [PageType.ENDING]: '/ending',
};

// Page titles
export const PAGE_TITLES: Record<PageType, string> = {
  [PageType.HOME]: '메인인트로',
  [PageType.SERVER_INTRO]: '서버인트로',
  [PageType.SOCIAL]: '소개페이지',
  [PageType.MEDITATION]: '명상',
  [PageType.LOADING]: '로딩',
  [PageType.RESULT]: '결과',
  [PageType.ENDING]: '엔딩',
};

// Common subtitle
export const PAGE_SUBTITLE = '하늘 패턴';

// Image categories
export enum ImageCategory {
  BUDDHIST = 'BUDDHIST',
  RANDOM = 'RANDOM',
  EMPTY = 'EMPTY'
}