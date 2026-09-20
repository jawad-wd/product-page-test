import { Product } from '../types/product';

export const productData: Product = {
  id: "Gym Coords Set",
  sku: "SKU-88302",
  titleKey: "product.title",
  price: {
    amount: 49.99,
    originalAmount: 75.00,
    currencyKey: "product.currency"
  },
  rating: {
    score: 4.7,
    reviewsCount: 86
  },
  breadcrumbs: [
    {
      labelKey: "product.breadcrumbs.home",
      link: "#"
    },
    {
      labelKey: "product.breadcrumbs.womenClothing",
      link: "#"
    },
    {
      labelKey: "product.breadcrumbs.sportswear",
      link: "#"
    }
  ],
  colors: [
    {
      id: "blue",
      nameKey: "product.colors.blue",
      code: "#1E40AF",
      image: "https://placeholder.com"
    },
    {
      id: "brown",
      nameKey: "product.colors.brown",
      code: "#78350F",
      image: "https://placeholder.com"
    },
    {
      id: "orange",
      nameKey: "product.colors.orange",
      code: "#EA580C",
      image: "https://placeholder.com"
    }
  ],
  images: [
    "https://placeholder.com",
    "https://placeholder.com",
    "https://placeholder.com"
  ],
  descriptionKey: "product.description"
};