import React from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PageIntro, ProductCard } from './StoreUi';
import { storeProducts } from '../data/productsData';

export const ShopPage: React.FC = () => {
  const { t } = useTranslation();
  return <><PageIntro eyebrow={t('shop.eyebrow')} title={t('shop.title')} text={t('shop.description')} /><section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"><div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#eee] pb-5"><p className="text-sm text-[#777]">{t('shop.productsCount', { count: storeProducts.length * 6 })}</p><div className="flex gap-3"><button type="button" className="flex items-center gap-2 border border-[#ddd] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#222]"><SlidersHorizontal size={15} /> {t('shop.filters')}</button><select aria-label={t('shop.title')} className="border border-[#ddd] bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#222]"><option>{t('shop.featured')}</option><option>{t('shop.priceLow')}</option><option>{t('shop.priceHigh')}</option></select></div></div><div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">{storeProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div></section></>;
};