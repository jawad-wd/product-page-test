import React from 'react';
import { ArrowLeft, Minus, Plus, Trash2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { formatPrice, storeProducts } from '../data/productsData';
import { PageIntro } from './StoreUi';

export const CartPage: React.FC = () => {
  const { t } = useTranslation();
  const product = storeProducts[0];
  const productName = t(product.nameKey);

  return (
    <>
      <PageIntro eyebrow={t('cart.eyebrow')} title={t('cart.title')} text={t('cart.description')} />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
        <div>
          <div className="hidden border-b border-[#eee] pb-3 text-xs font-bold uppercase tracking-wider text-[#999] sm:grid sm:grid-cols-[1fr_120px_120px]">
            <span>{t('cart.product')}</span><span>{t('cart.quantity')}</span><span className="text-right">{t('cart.total')}</span>
          </div>
          <div className="flex gap-4 border-b border-[#eee] py-6 sm:grid sm:grid-cols-[1fr_120px_120px] sm:items-center">
            <div className="flex gap-4">
              <img src={product.image} alt={productName} className="h-28 w-24 object-cover" />
              <div>
                <p className="text-xs uppercase tracking-wider text-[#999]">{t(product.categoryKey)}</p>
                <h2 className="mt-2 font-bold text-[#222]">{productName}</h2>
                <p className="mt-2 text-sm">{t('cart.size')}</p>
                <button type="button" className="mt-3 flex items-center gap-1 text-xs text-[#999] hover:text-red-500"><Trash2 size={13} /> {t('cart.remove')}</button>
              </div>
            </div>
            <div className="flex h-9 items-center border border-[#ddd]"><button type="button" aria-label={t('actions.decreaseQuantity')} className="p-2"><Minus size={13} /></button><span className="w-6 text-center text-xs">1</span><button type="button" aria-label={t('actions.increaseQuantity')} className="p-2"><Plus size={13} /></button></div>
            <strong className="ml-auto text-sm">{formatPrice(product.price)}</strong>
          </div>
          <Link to="/shop" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#222] hover:text-orange-500"><ArrowLeft size={16} /> {t('cart.continue')}</Link>
        </div>
        <aside className="h-fit bg-[#f7f5f1] p-7">
          <h2 className="text-xl font-bold text-[#222]">{t('cart.summary')}</h2>
          <div className="mt-7 space-y-4 border-b border-[#ddd] pb-6 text-sm"><div className="flex justify-between"><span>{t('cart.subtotal')}</span><strong>{formatPrice(product.price)}</strong></div><div className="flex justify-between"><span>{t('cart.shipping')}</span><span>{t('cart.shipping')}</span></div></div>
          <div className="flex justify-between py-6 text-lg font-bold text-[#222]"><span>{t('cart.total')}</span><span>{formatPrice(product.price)}</span></div>
          <Link to="/checkout" className="block bg-orange-500 py-4 text-center text-sm font-bold uppercase tracking-wider text-white hover:bg-[#222]">{t('cart.checkout')}</Link>
        </aside>
      </section>
    </>
  );
};