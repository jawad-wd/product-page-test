import React from 'react';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { StoreProduct, formatPrice } from '../data/productsData';

export const SectionHeading: React.FC<{
  eyebrow: string;
  title: string;
  action?: string;
}> = ({ eyebrow, title, action }) => (
  <div className="mb-8 flex items-end justify-between gap-4">
    <div>
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-extrabold tracking-tight text-[#222] sm:text-4xl">
        {title}
      </h2>
    </div>
    {action && (
      <Link
        to="/shop"
        className="hidden border-b-2 border-orange-500 pb-1 text-sm font-bold text-[#222] transition-colors hover:text-orange-500 sm:block"
      >
        {action} <span aria-hidden="true">→</span>
      </Link>
    )}
  </div>
);

export const ProductCard: React.FC<{ product: StoreProduct }> = ({ product }) => {
  const { t } = useTranslation();
  return <article className="group relative">
    <div className="relative aspect-[4/5] overflow-hidden bg-[#f3f1ed]">
      {product.badgeKey && (
        <span className="absolute left-3 top-3 z-10 bg-[#222] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
          {t(product.badgeKey)}
        </span>
      )}

      <img
        src={product.image}
        alt={t(product.nameKey)}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute bottom-3 left-3 right-3 flex translate-y-3 justify-between opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <Link
          to={`/products/${product.id}`}
          className="flex flex-1 items-center justify-center gap-2 bg-white py-3 text-xs font-bold uppercase tracking-wider text-[#222] hover:bg-orange-500 hover:text-white"
        >
          {t('actions.viewProduct')} <ShoppingBag size={15} />
        </Link>
        <button
          type="button"
          aria-label={t('actions.addToWishlist')}
          className="ml-2 bg-white p-3 text-[#222] hover:text-orange-500"
        >
          <Heart size={16} />
        </button>
      </div>
    </div>

    <div className="pt-4">
      <div className="mb-2 flex items-center gap-1 text-amber-500">
        <Star size={13} fill="currentColor" />
        <span className="text-xs text-[#777]">{product.rating}</span>
      </div>

      <h3 className="font-bold text-[#222]">{t(product.nameKey)}</h3>

      <p className="mt-1 text-xs uppercase tracking-wider text-[#999]">
        {t(product.categoryKey)}
      </p>

      <div className="mt-3 flex items-center gap-2 text-sm font-bold">
        <span>{formatPrice(product.price)}</span>
        {product.oldPrice && (
          <del className="font-normal text-[#999]">
            {formatPrice(product.oldPrice)}
          </del>
        )}
      </div>
    </div>
  </article>;
};
export const PageIntro: React.FC<{
  eyebrow: string;
  title: string;
  text: string;
}> = ({ eyebrow, title, text }) => (
  <section className="bg-[#f7f5f1] px-4 py-14 text-center sm:py-20">
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
      {eyebrow}
    </p>
    <h1 className="text-4xl font-extrabold tracking-tight text-[#222] sm:text-6xl">
      {title}
    </h1>
    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#666]">
      {text}
    </p>
  </section>
);