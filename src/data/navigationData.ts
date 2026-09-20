export interface ProductVariantOption {
  colorHex?: string;
  image: string;
  subtitleKey: string;
}

export interface FeaturedCollectionProduct {
  id: string;
  titleKey: string;
  subtitleKey: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  rating: number;
  defaultImage: string;
  isFeaturedBadge?: boolean;
  variants?: ProductVariantOption[];
}

export const collectionMenuData = {
  column1: {
    titleKey: 'collectionMenu.collectionLayouts',
    items: [
      { key: 'leftSidebar', link: '#' },
      { key: 'rightSidebar', link: '#' },
      { key: 'noSidebar', link: '#' },
      { key: 'grid2', link: '#' },
      { key: 'grid3', link: '#' },
      { key: 'grid4', link: '#' },
      { key: 'list', link: '#' },
    ],
  },
  column2: {
    titleKey: 'collectionMenu.collectionLayouts',
    items: [
      { key: 'categorySlider', link: '#' },
      { key: 'categorySidebar', link: '#' },
      { key: 'topFilter', link: '#' },
      { key: 'sidebarPopup', link: '#' },
      { key: 'infiniteScroll', link: '#' },
    ],
  },
  featuredProducts: [
    {
      id: 'coll-feat-1',
      titleKey: 'collectionMenu.gymCoordsTitle',
      subtitleKey: 'collectionMenu.gymCoordsSubBrown',
      price: 15.00,
      rating: 0,
      defaultImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500',
      isFeaturedBadge: true,
      variants: [
        {
          image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500',
          subtitleKey: 'collectionMenu.gymCoordsSubBrown'
        },
        {
          image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500',
          subtitleKey: 'collectionMenu.gymCoordsSubYellow'
        },
        {
          image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500',
          subtitleKey: 'collectionMenu.gymCoordsSubBlack'
        }
      ]
    },
    {
      id: 'coll-feat-2',
      titleKey: 'collectionMenu.glamourDressTitle',
      subtitleKey: 'collectionMenu.glamourDressSubPurple',
      price: 15.20,
      originalPrice: 16.00,
      discountPercentage: 5,
      rating: 0,
      defaultImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500',
      isFeaturedBadge: false,
      variants: [
        { 
          colorHex: '#8B5CF6', 
          image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500',
          subtitleKey: 'collectionMenu.glamourDressSubPurple'
        },
        { 
          colorHex: '#10B981', 
          image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500',
          subtitleKey: 'collectionMenu.glamourDressSubGreen'
        },
        { 
          colorHex: '#B91C1C', 
          image: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=500',
          subtitleKey: 'collectionMenu.glamourDressSubRed'
        }
      ]
    },
  ] as FeaturedCollectionProduct[],
};