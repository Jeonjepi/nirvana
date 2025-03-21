
/**
 * Application constants
 */

import { PageType } from "@/types";

// Page routes mapping
export const PAGE_ROUTES: Record<PageType, string> = {
  [PageType.HOME]: '/',
  [PageType.SERVER_INTRO]: '/server-intro',
  [PageType.SOCIAL]: '/social',
  [PageType.COMMUNITY]: '/community',
  [PageType.MEDITATION]: '/meditation',
  [PageType.TEACHINGS]: '/teachings',
  [PageType.PROFILE]: '/profile'
};

// Page titles
export const PAGE_TITLES: Record<PageType, string> = {
  [PageType.HOME]: '메인인트로',
  [PageType.SERVER_INTRO]: '서버인트로',
  [PageType.SOCIAL]: '소개페이지',
  [PageType.COMMUNITY]: '커뮤니티',
  [PageType.MEDITATION]: '명상',
  [PageType.TEACHINGS]: '가르침',
  [PageType.PROFILE]: '프로필'
};

// Common subtitle
export const PAGE_SUBTITLE = '하늘 패턴';

// Image categories
export enum ImageCategory {
  BUDDHIST = 'BUDDHIST',
  RANDOM = 'RANDOM',
  EMPTY = 'EMPTY'
}