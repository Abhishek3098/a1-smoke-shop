export type ProductCategory = 
  | 'all'
  | 'glass'
  | 'vapes'
  | 'cigars'
  | 'hookah'
  | 'accessories'
  | 'specialty';

export interface ProductItem {
  id: string;
  title: string;
  category: ProductCategory;
  description: string;
  icon: string;
  popularBrands: string[];
  featured?: boolean;
}

export interface CustomerReview {
  id: string;
  author: string;
  role: string;
  content: string;
  rating: number;
  initials: string;
  avatarColor: string;
}

export interface DaySchedule {
  day: string;
  open: string;
  close: string;
  openHour24: number;
  openMin: number;
  closeHour24: number;
  closeMin: number;
  isClosed?: boolean;
}

export interface StoreStatus {
  isOpen: boolean;
  isClosingSoon: boolean;
  message: string;
  nextChangeText: string;
  currentDayName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'products' | 'legal';
}