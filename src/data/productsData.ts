export interface StoreProduct {
  id: string;
  nameKey: string;
  categoryKey: string;
  price: number;
  oldPrice?: number;
  image: string;
  gallery?: string[];
  variants?: ProductVariant[];
  badgeKey?: string;
  rating: number;
}

export interface ProductVariant {
  name: string;
  images: string[];
}

const gymCoordsImageFiles = import.meta.glob('../assets/ProductsImages/Gym Coords Set *.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const getFileName = (path: string) => path.split('/').pop() || path;

const gymCoordsImages = Object.entries(gymCoordsImageFiles).reduce<Record<string, string[]>>((groups, [path, image]) => {
  const match = getFileName(path).match(/^Gym Coords Set (Blue|Brown|Green) (\d+)\.jpg$/);
  if (!match) return groups;

  const [, color, order] = match;
  groups[color] ??= [];
  groups[color][Number(order) - 1] = image;
  return groups;
}, {});

const gymCoordsColorOrder = ['Brown', 'Blue', 'Green'];
const gymCoordsVariants: ProductVariant[] = gymCoordsColorOrder
  .filter((name) => gymCoordsImages[name])
  .map((name) => ({ name, images: gymCoordsImages[name] }));
const gymCoordsGallery = gymCoordsVariants[0]?.images ?? [];

export const storeProducts: StoreProduct[] = [
  {
    id: 'prod-002',
    nameKey: 'catalog.products.gymCoords.name',
    categoryKey: 'catalog.products.gymCoords.category',
    price: 15,
    image: gymCoordsGallery[0],
    gallery: gymCoordsGallery,
    variants: gymCoordsVariants,
    badgeKey: 'catalog.badges.bestSeller',
    rating: 0,
  },
  {
    id: 'dress-001',
    nameKey: 'catalog.products.satinDress.name',
    categoryKey: 'catalog.products.satinDress.category',
    price: 64,
    oldPrice: 80,
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=900&auto=format&fit=crop',
    badgeKey: 'catalog.badges.twentyOff',
    rating: 4.5,
  },
  {
    id: 'shoe-001',
    nameKey: 'catalog.products.sneakers.name',
    categoryKey: 'catalog.products.sneakers.category',
    price: 58,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop',
    rating: 4.8,
  },
  {
    id: 'bag-001',
    nameKey: 'catalog.products.shoulderBag.name',
    categoryKey: 'catalog.products.shoulderBag.category',
    price: 86,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900&auto=format&fit=crop',
    badgeKey: 'catalog.badges.new',
    rating: 4.6,
  },
];

export const formatPrice = (price: number) => `$${price.toFixed(2)}`;