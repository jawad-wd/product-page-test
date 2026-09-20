import React from 'react';
import { Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { formatPrice, storeProducts } from '../data/productsData';
import { PageIntro } from './StoreUi';

export const CheckoutPage: React.FC = () => {
  const { t } = useTranslation();
  const product = storeProducts[0];
  const productName = t(product.nameKey);

  return (
    <>
      <PageIntro eyebrow={t('checkout.eyebrow')} title={t('checkout.title')} text={t('checkout.description')} />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
        <form className="space-y-10" onSubmit={(event) => event.preventDefault()}>
          <div><h2 className="mb-5 text-xl font-bold text-[#222]">{t('checkout.contact')}</h2><input required type="email" placeholder={t('checkout.email')} className="w-full border border-[#ddd] bg-white px-4 py-4 text-sm outline-none focus:border-orange-500" /></div>
          <div><h2 className="mb-5 text-xl font-bold text-[#222]">{t('checkout.shippingAddress')}</h2><div className="grid gap-4 sm:grid-cols-2"><input required placeholder={t('checkout.firstName')} className="border border-[#ddd] px-4 py-4 text-sm outline-none focus:border-orange-500" /><input required placeholder={t('checkout.lastName')} className="border border-[#ddd] px-4 py-4 text-sm outline-none focus:border-orange-500" /></div><input required placeholder={t('checkout.address')} className="mt-4 w-full border border-[#ddd] px-4 py-4 text-sm outline-none focus:border-orange-500" /><div className="mt-4 grid gap-4 sm:grid-cols-2"><input required placeholder={t('checkout.city')} className="border border-[#ddd] px-4 py-4 text-sm outline-none focus:border-orange-500" /><input required placeholder={t('checkout.postalCode')} className="border border-[#ddd] px-4 py-4 text-sm outline-none focus:border-orange-500" /></div></div>
          <button type="submit" className="w-full bg-orange-500 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-[#222]">{t('checkout.placeOrder')}</button>
        </form>
        <aside className="h-fit border border-[#eee] p-7"><h2 className="text-xl font-bold text-[#222]">{t('checkout.yourOrder')}</h2><div className="mt-6 flex gap-4 border-y border-[#eee] py-5"><img src={product.image} alt={productName} className="h-20 w-16 object-cover" /><div className="text-sm"><p className="font-bold">{productName}</p><p className="mt-2 text-[#777]">{t('checkout.quantityOne')}</p></div><strong className="ml-auto">{formatPrice(product.price)}</strong></div><div className="flex justify-between py-5 font-bold text-[#222]"><span>{t('cart.total')}</span><span>{formatPrice(product.price)}</span></div><p className="flex items-center gap-2 text-xs text-[#777]"><Lock size={14} className="text-orange-500" /> {t('checkout.securePayment')}</p><Link to="/cart" className="mt-5 block text-center text-xs font-bold text-[#777] hover:text-orange-500">{t('checkout.returnToBag')}</Link></aside>
      </section>
    </>
  );
};