export type Language = 'ar' | 'en';

export interface BreadcrumbItem {
  labelKey: string;
  link: string;
}

export interface ColorOption {
  id: string;
  nameKey: string;
  code: string;
  image: string;
}

export interface ProductPrice {
  amount: number;
  originalAmount?: number;
  currencyKey: string;
}

export interface ProductRating {
  score: number;
  reviewsCount: number;
}

export interface Product {
  id: string;
  sku: string;
  titleKey: string;
  price: ProductPrice;
  rating: ProductRating;
  breadcrumbs: BreadcrumbItem[];
  colors: ColorOption[];
  images: string[];
  descriptionKey: string;
}