import React from 'react';
import { ArrowUpRight, Truck, ShieldCheck, RefreshCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { storeProducts } from '../data/productsData';
import { ProductCard, SectionHeading } from './StoreUi';

export const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const heroLines = t('home.heroTitle').split('<br />');

  return <>
    <section className="relative min-h-[560px] overflow-hidden bg-[#d9d1c6]">
      <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1800&auto=format&fit=crop" alt="New season collection" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />
      <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-20 lg:px-8"><div className="max-w-xl text-white"><p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-orange-300">{t('home.season')}</p><h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl">{heroLines.map((line, index) => <React.Fragment key={line}>{index > 0 && <br />}{line}</React.Fragment>)}</h1><p className="mt-6 max-w-md text-sm leading-7 text-white/80">{t('home.heroText')}</p><Link to="/shop" className="mt-8 inline-flex items-center gap-3 bg-orange-500 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-white hover:text-[#222]">{t('home.shopNewArrivals')} <ArrowUpRight size={18} /></Link></div></div>
    </section>
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><SectionHeading eyebrow={t('home.curated')} title={t('home.newArrivals')} action={t('home.shopAll')} /><div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-6">{storeProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div></section>
    <section className="border-y border-[#eee] bg-[#fbfaf8]"><div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-3 lg:px-8"><div className="flex gap-4"><Truck className="text-orange-500" /><div><h3 className="font-bold text-[#222]">{t('home.freeShipping')}</h3><p className="mt-1 text-xs text-[#777]">{t('home.freeShippingText')}</p></div></div><div className="flex gap-4"><ShieldCheck className="text-orange-500" /><div><h3 className="font-bold text-[#222]">{t('home.secureCheckout')}</h3><p className="mt-1 text-xs text-[#777]">{t('home.secureCheckoutText')}</p></div></div><div className="flex gap-4"><RefreshCcw className="text-orange-500" /><div><h3 className="font-bold text-[#222]">{t('home.easyReturns')}</h3><p className="mt-1 text-xs text-[#777]">{t('home.easyReturnsText')}</p></div></div></div></section>
  </>;
};