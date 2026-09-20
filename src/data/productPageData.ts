export interface RelatedProduct {
  id: string;
  nameKey: string;
  categoryKey: string;
  badgeKey?: string;
  price: number;
  oldPrice?: number;
  discountKey?: string;
  rating: number;
  image: string;
  limitedTimer?: number;
  swatches?: string[];
}

export const productDescriptions = {
  gymCoords: [
    'productDetails.description.first',
    'productDetails.description.second',
    'productDetails.description.third',
  ],
};

export const relatedProducts: RelatedProduct[] = [
  {
    id: 'rel-1',
    nameKey: 'relatedProducts.items.enduraFit',
    categoryKey: 'relatedProducts.categories.greySportSet',
    badgeKey: 'relatedProducts.badges.trending',
    price: 12.6,
    oldPrice: 14,
    discountKey: 'relatedProducts.discounts.ten',
    rating: 0,
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=500&auto=format&fit=crop',
    limitedTimer: 10,
  },
  {
    id: 'rel-2',
    nameKey: 'relatedProducts.items.fittedCoords',
    categoryKey: 'relatedProducts.categories.sportsWear',
    badgeKey: 'relatedProducts.badges.trending',
    price: 13.5,
    oldPrice: 15,
    discountKey: 'relatedProducts.discounts.ten',
    rating: 0,
    image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=500&auto=format&fit=crop',
    limitedTimer: 59,
    swatches: [
      'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=100&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=100&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=100&auto=format&fit=crop',
    ],
  },
  {
    id: 'rel-3',
    nameKey: 'relatedProducts.items.thriveAthletica',
    categoryKey: 'relatedProducts.categories.athleisureSet',
    badgeKey: 'relatedProducts.badges.trending',
    price: 17.1,
    oldPrice: 18,
    discountKey: 'relatedProducts.discounts.five',
    rating: 0,
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&auto=format&fit=crop',
    limitedTimer: 59,
  },
  {
    id: 'rel-4',
    nameKey: 'relatedProducts.items.sportSet',
    categoryKey: 'relatedProducts.categories.enduraFit',
    badgeKey: 'relatedProducts.badges.featured',
    price: 9,
    oldPrice: 10,
    discountKey: 'relatedProducts.discounts.ten',
    rating: 0,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop',
    limitedTimer: 10,
    swatches: [
      'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=100&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=100&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=100&auto=format&fit=crop',
    ],
  },
  {
    id: 'rel-5',
    nameKey: 'relatedProducts.items.enduraFit',
    categoryKey: 'relatedProducts.categories.greyGymSuit',
    price: 9.5,
    oldPrice: 10,
    discountKey: 'relatedProducts.discounts.five',
    rating: 0,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop',
    limitedTimer: 59,
  },
];