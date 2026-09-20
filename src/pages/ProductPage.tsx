import React, { useEffect, useState } from 'react';
import { 
  Heart, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Truck, 
  RotateCcw, 
  HelpCircle, 
  RefreshCw, 
  Share2, 
  ShoppingCart,
  Clock,
  MessageSquare,
  FileText
} from 'lucide-react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { storeProducts, formatPrice } from '../data/productsData';
import { productDescriptions, relatedProducts } from '../data/productPageData';
import { PageHeader } from '../components/layout/PageHeader';

type TabType = 'description' | 'review' | 'qna';

const ProductDetailsTabs: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<TabType>('description');

  return (
    <div className="mt-10 sm:mt-16 w-full border border-gray-200 bg-[#fbfbfb] rounded-sm">
      <div className="flex border-b border-gray-200 bg-gray-50/50 p-2 sm:p-3 gap-2 overflow-x-auto no-scrollbar whitespace-nowrap">
        <button
          type="button"
          onClick={() => setActiveTab('description')}
          className={`px-4 sm:px-8 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all border ${
            activeTab === 'description'
              ? 'border-[#fa6400] bg-white text-[#fa6400] shadow-sm'
              : 'border-gray-200 bg-white text-gray-700 hover:text-[#fa6400]'
          }`}
        >
          {t('productDetails.tabs.description')}
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('review')}
          className={`px-4 sm:px-8 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all border ${
            activeTab === 'review'
              ? 'border-[#fa6400] bg-white text-[#fa6400] shadow-sm'
              : 'border-gray-200 bg-white text-gray-700 hover:text-[#fa6400]'
          }`}
        >
          {t('productDetails.tabs.review')}
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('qna')}
          className={`px-4 sm:px-8 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all border ${
            activeTab === 'qna'
              ? 'border-[#fa6400] bg-white text-[#fa6400] shadow-sm'
              : 'border-gray-200 bg-white text-gray-700 hover:text-[#fa6400]'
          }`}
        >
          {t('productDetails.tabs.qna')}
        </button>
      </div>

      <div className="p-4 sm:p-6 bg-white text-xs leading-relaxed text-gray-500 space-y-4">
        {activeTab === 'description' && (
          <div className="space-y-4">
            {productDescriptions.gymCoords.map((paragraphKey) => (
              <p key={paragraphKey}>{t(paragraphKey)}</p>
            ))}
          </div>
        )}

        {activeTab === 'review' && (
          <div className="py-4 text-center text-gray-500">
            <MessageSquare className="mx-auto mb-2 text-gray-400" size={32} />
            <p className="font-semibold">{t('productDetails.reviewsEmpty')}</p>
            <p className="text-[11px] text-gray-400 mt-1">{t('productDetails.reviewFirst')}</p>
          </div>
        )}

        {activeTab === 'qna' && (
          <div className="py-4 text-center text-gray-500">
            <FileText className="mx-auto mb-2 text-gray-400" size={32} />
            <p className="font-semibold">{t('productDetails.questionTitle')}</p>
            <p className="text-[11px] text-gray-400 mt-1">{t('productDetails.questionText')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const RelatedProducts: React.FC = () => {
  const { t } = useTranslation();
  const relatedItems = relatedProducts;

  return (
    <div className="mt-10 sm:mt-14">
      <h2 className="text-xl sm:text-2xl font-bold text-[#222] mb-4 sm:mb-6">{t('productDetails.related')}</h2>
      
      <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {relatedItems.map((prod) => (
          <div key={prod.id} className="group relative border border-gray-200 bg-white p-2 sm:p-2.5 rounded-sm transition-all hover:shadow-md">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#f8f8f8]">
              {prod.badgeKey && (
                <div className="absolute top-2 -left-7 z-10 w-24 -rotate-45 bg-[#ea580c] py-0.5 text-center text-[9px] font-bold uppercase tracking-wider text-white shadow-sm">
                  {t(prod.badgeKey)}
                </div>
              )}

              <button 
                type="button" 
                aria-label={t('actions.addToWishlist')}
                className="absolute right-1.5 top-1.5 sm:right-2 sm:top-2 z-10 rounded-full bg-white/90 p-1.5 text-gray-600 hover:text-[#fa6400] shadow-sm"
              >
                <Heart size={13} />
              </button>

              <img 
                src={prod.image} 
                alt={t(prod.nameKey)}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105" 
              />

              <div className="absolute bottom-2 left-2 z-10 flex items-center gap-1 rounded bg-white/90 px-1.5 py-0.5 text-[10px] text-gray-700 shadow-sm">
                <Star size={10} className="fill-amber-400 text-amber-400" />
                <span className="font-semibold">{prod.rating}</span>
              </div>
            </div>

            {prod.swatches && (
              <div className="mt-2 flex gap-1 justify-start">
                {prod.swatches.map((swatch, idx) => (
                  <div key={idx} className="h-5 w-4 sm:h-6 sm:w-5 border border-gray-300 overflow-hidden">
                    <img src={swatch} alt="" className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
            )}

            <div className="mt-2 sm:mt-2.5">
              <h3 className="text-xs font-bold text-gray-800 truncate">{t(prod.nameKey)}</h3>
              <p className="text-[10px] sm:text-[11px] text-gray-400 truncate">{t(prod.categoryKey)}</p>
              
              <div className="mt-1 sm:mt-1.5 flex items-center gap-1 sm:gap-1.5 flex-wrap">
                <span className="text-xs font-bold text-gray-900">${prod.price.toFixed(2)}</span>
                {prod.oldPrice && (
                  <del className="text-[10px] text-gray-400">${prod.oldPrice.toFixed(2)}</del>
                )}
                {prod.discountKey && (
                  <span className="text-[9px] sm:text-[10px] font-bold text-[#ea580c]">{t(prod.discountKey)}</span>
                )}
              </div>

              {prod.limitedTimer && (
                <div className="mt-2 sm:mt-3 flex items-center gap-1 text-[9px] sm:text-[10px] font-semibold text-[#ea580c] pt-2 border-t border-dashed border-gray-100">
                  <Clock size={11} className="shrink-0" />
                  <span className="truncate">{t('productDetails.limitedOffer', { value: prod.limitedTimer })}</span>
                </div>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export const ProductPage: React.FC = () => {
  const { t } = useTranslation();
  const { productId } = useParams();
  const item = storeProducts.find((product) => product.id === productId) || storeProducts[0];

  const [quantity, setQuantity] = useState(1);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const selectedVariant = item.variants?.[selectedColorIndex];
  const thumbnails = selectedVariant?.images ?? item.gallery ?? [item.image];
  const [mainImage, setMainImage] = useState(thumbnails[0]);
  
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    setSelectedColorIndex(0);
  }, [productId]);

  useEffect(() => {
    setMainImage(thumbnails[0]);
  }, [selectedColorIndex, productId, selectedVariant?.name, item.image]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const colorOptions = item.variants ?? [];

  const changeImage = (direction: number) => {
    const currentIndex = thumbnails.indexOf(mainImage);
    const nextIndex = (currentIndex + direction + thumbnails.length) % thumbnails.length;
    setMainImage(thumbnails[nextIndex]);
  };

  return (
    <div className="bg-white pb-16 font-medium text-[#333]">
      <PageHeader title={t(item.nameKey)} customName={t(item.nameKey)} />

      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        
        {/* Product details */}
        <div className="grid grid-cols-1 gap-6 lg:gap-8 lg:grid-cols-12 items-start">

          {/* العمود الأول: معرض الصور */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#f9f9f9]">
              <span className="absolute left-3 top-3 z-10 bg-[#fff5f0] px-2.5 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#fa6400]">
                {t('productDetails.featured')}
              </span>
              
              <img 
                src={mainImage} 
                alt={t(item.nameKey)} 
                className="h-full w-full object-cover" 
              />

              <button 
                type="button" 
                aria-label={t('actions.previousImage')}
                onClick={() => changeImage(-1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-1 text-gray-700 hover:text-black hover:bg-white transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                type="button" 
                aria-label={t('actions.nextImage')}
                onClick={() => changeImage(1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-1 text-gray-700 hover:text-black hover:bg-white transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="mt-3 sm:mt-4 grid grid-cols-4 sm:grid-cols-3 gap-2 sm:gap-3">
              {thumbnails.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setMainImage(img)}
                  className={`aspect-square overflow-hidden bg-[#f9f9f9] border ${
                    mainImage === img ? 'border-[#fa6400]' : 'border-gray-200'
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* العمود الثاني: بيانات وخصائص المنتج */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-0">
            <p className="flex items-center gap-1.5 text-xs text-gray-500">
              <span className="text-[#fa6400]">🔥</span> {t('productDetails.sellingFast')}
            </p>

            <h1 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold text-[#222]">
              {selectedVariant ? `${t(item.nameKey)} (${selectedVariant.name})` : t(item.nameKey)}
            </h1>

            <div className="mt-2.5 sm:mt-3 flex items-center gap-2 text-xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="stroke-amber-400 fill-transparent" />
                ))}
              </div>
              <span className="text-gray-300">|</span>
              <a href="#reviews" className="text-[#fa6400] underline hover:no-underline">{t('productDetails.reviewCount')}</a>
            </div>

            <div className="mt-3 sm:mt-4">
              <div className="flex items-baseline gap-2">
                <span className="text-xs sm:text-sm font-semibold text-gray-500">{t('productDetails.mrp')}</span>
                <span className="text-xl sm:text-2xl font-bold text-[#fa6400]">{formatPrice(item.price)}</span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-gray-400">{t('productDetails.inclusive')}</span>
            </div>

            <div className="mt-4 sm:mt-6 flex items-center gap-4 sm:gap-6 border-b border-dashed border-gray-200 pb-4 sm:pb-6 text-xs text-gray-600">
              <button type="button" className="flex items-center gap-1.5 hover:text-[#fa6400]">
                <Truck size={15} /> {t('productDetails.deliveryReturn')}
              </button>
              <button type="button" className="flex items-center gap-1.5 hover:text-[#fa6400]">
                <HelpCircle size={15} /> {t('productDetails.askQuestion')}
              </button>
            </div>

            <div className="py-4 sm:py-6 border-b border-dashed border-gray-200">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-2 sm:mb-3">{t('productDetails.productInfo')}</h3>
              <div className="grid grid-cols-2 gap-y-2 text-xs text-gray-600">
                <div><span className="font-medium text-gray-800">• {t('productDetails.sku')}</span> SP18 (COPY)</div>
                <div><span className="font-medium text-gray-800">• {t('productDetails.unit')}</span> {t('productDetails.unitValue')}</div>
                <div><span className="font-medium text-gray-800">• {t('productDetails.weight')}</span> {t('productDetails.weightValue')}</div>
                <div><span className="font-medium text-gray-800">• {t('productDetails.stockStatus')}</span> {t('productDetails.inStock')}</div>
                <div className="col-span-2"><span className="font-medium text-gray-800">• {t('productDetails.quantityLeft')}</span> {t('productDetails.itemsLeft')}</div>
              </div>
            </div>

            <div className="py-4 sm:py-6 border-b border-dashed border-gray-200 space-y-2.5 sm:space-y-3 text-xs text-gray-600">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800">{t('productDetails.deliveryDetails')}</h3>
              <p className="flex items-start gap-2">
                <Truck size={16} className="shrink-0 text-gray-700 mt-0.5" />
                <span>{t('productDetails.deliveryEstimate')}</span>
              </p>
              <p className="flex items-start gap-2">
                <RotateCcw size={16} className="shrink-0 text-gray-700 mt-0.5" />
                <span>{t('productDetails.returns')}</span>
              </p>
            </div>

            <div className="pt-4 sm:pt-6 space-y-3 sm:space-y-4">
              <div className="relative border border-dashed border-gray-300 rounded p-3 text-center">
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-white px-2 text-[10px] font-semibold text-gray-500 whitespace-nowrap">
                  {t('productDetails.safeCheckout')}
                </span>
                <div className="flex justify-center items-center gap-2 mt-1 flex-wrap">
                  <span className="text-xs font-bold text-blue-900 italic">VISA</span>
                  <span className="text-xs font-bold text-blue-600 italic">PayPal</span>
                  <span className="text-xs font-bold text-gray-700">MasterCard</span>
                  <span className="text-xs font-bold text-blue-400">stripe</span>
                  <span className="text-xs font-bold text-blue-800">AMEX</span>
                </div>
              </div>

              <div className="relative border border-dashed border-gray-300 rounded p-3 text-center">
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-white px-2 text-[10px] font-semibold text-gray-500 whitespace-nowrap">
                  {t('productDetails.secureCheckout')}
                </span>
                <div className="flex justify-center items-center gap-3 mt-1 text-[10px] font-bold text-green-700">
                  <span>🔒 McAfee SECURE</span>
                  <span>🛡️ TRUSTe</span>
                </div>
              </div>
            </div>
          </div>

          {/* العمود الثالث: بطاقة تنفيذ الطلب */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start transition-all">
            <div className="border border-gray-200 rounded-none p-4 sm:p-6 bg-white text-center shadow-sm">
              
              <label className="block text-xs font-semibold text-gray-700 mb-2.5 sm:mb-3">{t('productDetails.colour')}</label>
              <div className="flex justify-center gap-2 sm:gap-2.5 mb-4 sm:mb-5 flex-wrap">
                {colorOptions.map((variant, idx) => (
                  <button
                    key={variant.name}
                    type="button"
                    onClick={() => {
                      setSelectedColorIndex(idx);
                      setMainImage(variant.images[0]);
                    }}
                    className={`w-10 h-12 sm:w-12 sm:h-14 border p-0.5 overflow-hidden rounded-none transition-all ${
                      selectedColorIndex === idx ? 'border-[#fa6400] ring-1 ring-[#fa6400]' : 'border-gray-200'
                    }`}
                  >
                    <img src={variant.images[0]} alt={`${t(item.nameKey)} ${variant.name}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-center border border-gray-200 rounded-none max-w-[140px] sm:max-w-[150px] mx-auto mb-5 sm:mb-6">
                <button 
                  type="button" 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 sm:px-3.5 py-1.5 sm:py-2 text-gray-500 hover:bg-gray-50 transition-colors"
                >
                  &lt;
                </button>
                <span className="px-3 sm:px-4 text-xs font-semibold">{quantity}</span>
                <button 
                  type="button" 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 sm:px-3.5 py-1.5 sm:py-2 text-gray-500 hover:bg-gray-50 transition-colors"
                >
                  &gt;
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-5">
                
                <button 
                  type="button" 
                  className="group relative overflow-hidden bg-[#f3a375] border border-[#f3a375] text-white text-[10px] sm:text-[12px] font-bold py-3 sm:py-3.5 px-1.5 sm:px-3 rounded-none uppercase tracking-wider whitespace-nowrap flex items-center justify-center gap-1.5 sm:gap-2 isolate cursor-pointer"
                >
                  <span className="product-cart-sheen" />
                  
                  <span className="relative z-10 flex items-center gap-1 sm:gap-1.5 text-white">
                    <ShoppingCart 
                      size={14} 
                      className="product-cart-icon" 
                    />
                    <span className="truncate">{t('productDetails.addToCart')}</span>
                  </span>
                </button>

                <button 
                  type="button" 
                  className="group relative overflow-hidden bg-[#f3a375] border border-[#f3a375] text-white text-[10px] sm:text-[12px] font-bold py-3 sm:py-3.5 px-1.5 sm:px-3 rounded-none uppercase tracking-wider whitespace-nowrap flex items-center justify-center transition-colors duration-300 isolate cursor-pointer"
                >
                  <span className="product-buy-sheen" />
                  
                  <span className="relative z-10 group-hover:text-[#f3a375] transition-colors duration-300 truncate">
                    {t('productDetails.buyNow')}
                  </span>
                </button>

              </div>

            <div className="pt-2 border-t border-gray-100">
  
  <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 text-xs text-gray-600">
    
    {/* 1. Add to Wishlist */}
    <button 
      type="button" 
      className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 hover:text-[#fa6400] focus:text-[#fa6400] transition-colors duration-200 cursor-pointer py-1"
    >
      <Heart size={14} className="shrink-0" />
      <span className="whitespace-nowrap">{t('actions.addToWishlist')}</span>
    </button>

    

    {/* 2. Compare */}
    <button 
      type="button" 
      className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 hover:text-[#fa6400] focus:text-[#fa6400] transition-colors duration-200 cursor-pointer py-1"
    >
      <RefreshCw size={13} className="shrink-0" />
      <span className="whitespace-nowrap">{t('productDetails.compare')}</span>
    </button>

   

    {/* 3. Share */}
    <button 
      type="button" 
      className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 hover:text-[#fa6400] focus:text-[#fa6400] transition-colors duration-200 cursor-pointer py-1"
    >
      <Share2 size={13} className="shrink-0" />
      <span className="whitespace-nowrap">{t('productDetails.share')}</span>
    </button>

  </div>
</div>

            </div>
          </div>

        </div>

        {/* Product details tabs */}
        <ProductDetailsTabs />

        {/* Related products */}
        <RelatedProducts />

      </div>

      {/* Sticky purchase bar */}
      <div 
        className={`fixed bottom-0 sm:bottom-6 left-0 sm:left-1/2 sm:-translate-x-1/2 z-50 w-full sm:w-[calc(100%-4rem)] sm:max-w-6xl bg-white border-t sm:border border-gray-200 sm:border-gray-100 shadow-2xl sm:shadow-xl rounded-none transition-all duration-300 ease-in-out ${
          showStickyBar ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        <div className="p-2.5 px-3 sm:p-3 sm:px-6">
          
          <div className="hidden md:grid grid-cols-3 items-center gap-4">
            
            <div className="flex items-center gap-4 justify-start">
              <img 
                src={mainImage} 
                alt={t(item.nameKey)}
                className="w-12 h-14 object-cover border border-gray-200 rounded-none shrink-0" 
              />
              <div className="space-y-0.5">
                <h4 className="text-sm font-normal text-gray-800 tracking-wide line-clamp-1">
                  {selectedVariant ? `${t(item.nameKey)} (${selectedVariant.name})` : t(item.nameKey)}
                </h4>
                <p className="text-xs font-semibold text-gray-500">
                  {formatPrice(item.price)}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              {colorOptions.length > 0 && (
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="font-normal text-gray-600">{t('productDetails.variants')}</span>
                  <select 
                    value={selectedColorIndex}
                    onChange={(e) => {
                      const idx = Number(e.target.value);
                      setSelectedColorIndex(idx);
                      setMainImage(colorOptions[idx].images[0]);
                    }}
                    className="border border-gray-200 bg-[#f9f9f9] rounded-none px-3 py-2 text-xs text-gray-700 focus:outline-none focus:border-gray-400 cursor-pointer"
                  >
                    {colorOptions.map((variant, idx) => (
                      <option key={variant.name} value={idx}>
                        {variant.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="flex items-center bg-[#f8f8f8] border border-gray-200 rounded-none text-xs">
                <button 
                  type="button" 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3.5 py-2 text-gray-500 hover:bg-gray-200 transition-colors"
                >
                  &lt;
                </button>
                <span className="px-5 font-normal text-gray-800 bg-[#f8f8f8] py-1.5">{quantity}</span>
                <button 
                  type="button" 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3.5 py-2 text-gray-500 hover:bg-gray-200 transition-colors"
                >
                  &gt;
                </button>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <button 
                type="button" 
                className="bg-[#f3a375] hover:bg-[#eb9260] text-white text-xs font-bold py-3 px-8 rounded-none transition-colors flex items-center justify-center gap-2 uppercase tracking-wider shrink-0 cursor-pointer"
              >
                <ShoppingCart size={15} /> {t('productDetails.addToCart')}
              </button>
            </div>

          </div>

          <div className="flex md:hidden items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <img 
                src={mainImage} 
                alt={t(item.nameKey)}
                className="w-10 h-11 object-cover border border-gray-200 shrink-0" 
              />
              <div className="min-w-0">
                <p className="text-xs font-bold text-gray-900 truncate">
                  {formatPrice(item.price)}
                </p>
                {colorOptions.length > 0 && (
                  <select 
                    value={selectedColorIndex}
                    onChange={(e) => {
                      const idx = Number(e.target.value);
                      setSelectedColorIndex(idx);
                      setMainImage(colorOptions[idx].images[0]);
                    }}
                    className="border border-gray-200 bg-[#f9f9f9] text-[10px] p-1 text-gray-700 max-w-[100px] truncate mt-0.5"
                  >
                    {colorOptions.map((variant, idx) => (
                      <option key={variant.name} value={idx}>
                        {variant.name}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>

            <button 
              type="button" 
              className="bg-[#f3a375] active:bg-[#eb9260] text-white text-xs font-bold py-2.5 px-4 rounded-none transition-colors flex items-center justify-center gap-1.5 uppercase tracking-wider shrink-0"
            >
              <ShoppingCart size={14} /> {t('productDetails.addToCart')}
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};