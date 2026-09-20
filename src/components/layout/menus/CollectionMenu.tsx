import React, { useState } from 'react';
import { Heart, Star, ShoppingBag, Search, RefreshCw } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { collectionMenuData, FeaturedCollectionProduct, ProductVariantOption } from '../../../data/navigationData';


export const CollectionMenu: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const { column1, column2, featuredProducts } = collectionMenuData;

  const [productImages, setProductImages] = useState<Record<string, string>>({});
  const [productSubtitles, setProductSubtitles] = useState<Record<string, string>>({});

  const handleVariantSelect = (productId: string, variant: ProductVariantOption) => {
    setProductImages((prev) => ({ ...prev, [productId]: variant.image }));
    setProductSubtitles((prev) => ({ ...prev, [productId]: variant.subtitleKey }));
  };

  return (
    <div className="main-menu-panel menu-panel-upward menu-panel-width absolute top-full ltr:left-0 rtl:right-0 bg-white border border-[#eeeeee] shadow-2xl rounded-b-xl p-6 grid grid-cols-4 gap-6 text-sm font-normal text-[#555555] transition-all duration-300 z-50">
      
      {/* Column 1 */}
      <div>
        <div className="mb-3">
          <h4 className="font-bold text-base text-[#222222] pb-1">
            {t(column1.titleKey)}
          </h4>
          <div className="h-0.5 bg-orange-500 w-1/5"></div>
        </div>
        <ul className="space-y-2.5">
          {column1.items.map((item) => (
            <li key={item.key}>
              <a href={item.link} className="hover:text-orange-500 transition-colors block">
                {t(`collectionMenu.${item.key}`)}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 2 */}
      <div>
        <div className="mb-3">
          <h4 className="font-bold text-base text-[#222222] pb-1">
            {t(column2.titleKey)}
          </h4>
          <div className="h-0.5 bg-orange-500 w-1/5"></div>
        </div>
        <ul className="space-y-2.5">
          {column2.items.map((item) => (
            <li key={item.key}>
              <a href={item.link} className="hover:text-orange-500 transition-colors block">
                {t(`collectionMenu.${item.key}`)}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3 & 4: Featured Product Cards */}
      {featuredProducts.map((product: FeaturedCollectionProduct) => {
        const currentImage = productImages[product.id] || product.defaultImage;
        const currentSubtitle = productSubtitles[product.id] || product.subtitleKey;

        return (
          <div key={product.id} className="bg-[#f8f8f8] p-3 rounded-md border border-[#eeeeee] flex flex-col justify-between relative group shadow-xs overflow-hidden">
            
            {product.isFeaturedBadge && (
              <div className={`absolute top-0 z-10 overflow-hidden w-20 h-20 pointer-events-none ${isRtl ? 'right-0' : 'left-0'}`}>
                <span className={`absolute top-3 bg-orange-500 text-white text-[9px] font-bold py-0.5 w-24 text-center uppercase shadow-sm ${
                  isRtl ? '-right-6 rotate-[45deg]' : '-left-6 rotate-[-45deg]'
                }`}>
                  {t('collectionMenu.featured')}
                </span>
              </div>
            )}

            <div className="relative overflow-hidden rounded bg-gray-100 mb-3 h-48 group/img">
              <img 
                src={currentImage} 
                alt={t(product.titleKey)}
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 ease-out" 
              />

              <div className={`absolute bottom-2 ${isRtl ? 'right-2' : 'left-2'} bg-white/70 backdrop-blur-xs px-1.5 py-0.5 rounded flex items-center gap-1 z-10`}>
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span className="text-gray-700 font-bold text-[10px]">{product.rating}</span>
              </div>

              <div className={`absolute top-2 ${isRtl ? 'left-2' : 'right-2'} flex flex-col gap-1.5 z-20`}>
                <button aria-label="Add to wishlist" className="p-1.5 bg-white/50 backdrop-blur-xs rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300 shadow-sm cursor-pointer">
                  <Heart className="w-3.5 h-3.5" />
                </button>

                <div className="flex flex-col gap-1.5 opacity-0 -translate-y-2 group-hover/img:opacity-100 group-hover/img:translate-y-0 max-h-0 group-hover/img:max-h-40 transition-all duration-500 ease-in-out overflow-hidden">
                  <button aria-label="Add to cart" className="p-1.5 bg-white/50 backdrop-blur-xs rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300 shadow-sm cursor-pointer">
                    <ShoppingBag className="w-3.5 h-3.5" />
                  </button>
                  <button aria-label="Quick search" className="p-1.5 bg-white/50 backdrop-blur-xs rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300 shadow-sm cursor-pointer">
                    <Search className="w-3.5 h-3.5" />
                  </button>
                  <button aria-label="Compare" className="p-1.5 bg-white/50 backdrop-blur-xs rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300 shadow-sm cursor-pointer">
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            <h5 className="font-bold text-[#222222] text-sm truncate">
              {t(product.titleKey)}
            </h5>
            
            <p className="text-gray-400 text-[11px] truncate mt-0.5 min-h-[16px]">
              {t(currentSubtitle)}
            </p>

            {product.variants && (
              <div className="flex items-center gap-1.5 my-2">
                {product.variants.map((variant, idx) => (
                  variant.colorHex ? (
                    <button
                      key={idx}
                      aria-label="Select color"
                      className="w-3.5 h-3.5 rounded-full border border-gray-300 transition-transform hover:scale-125 cursor-pointer focus:outline-none"
                      style={{ backgroundColor: variant.colorHex }}
                      onMouseEnter={() => handleVariantSelect(product.id, variant)}
                      onClick={() => handleVariantSelect(product.id, variant)}
                    />
                  ) : (
                    <img 
                      key={idx} 
                      src={variant.image} 
                      className="w-6 h-6 rounded object-cover border border-gray-200 cursor-pointer hover:border-orange-500 transition-colors" 
                      alt="thumbnail" 
                      onMouseEnter={() => handleVariantSelect(product.id, variant)}
                      onClick={() => handleVariantSelect(product.id, variant)}
                    />
                  )
                ))}
              </div>
            )}

            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm font-extrabold text-[#222222]">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="line-through text-gray-400 text-xs">${product.originalPrice.toFixed(2)}</span>
              )}
              {product.discountPercentage && (
                <span className="text-orange-500 font-bold text-[10px]">
                  {t('collectionMenu.off', { value: product.discountPercentage })}
                </span>
              )}
            </div>

<div className="mt-2 pt-2 border-t border-gray-100 text-[10px] text-orange-500 font-medium overflow-hidden group/bar cursor-pointer select-none">
  <div className="flex w-max transition-transform duration-300 group-hover/bar:animate-[marquee_2.5s_linear_infinite]">
    
    <div className="flex items-center gap-1 shrink-0 px-2">
      <span>&#9201;</span>
      <span>{t('collectionMenu.limitedTimeOffer')}</span>
    </div>

    <div className="flex items-center gap-1 shrink-0 px-2">
      <span>&#9201;</span>
      <span>{t('collectionMenu.limitedTimeOffer')}</span>
    </div>

  </div>
</div>

          </div>
        );
      })}

    </div>
  );
};