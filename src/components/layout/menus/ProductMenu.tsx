import React from 'react';
import { useTranslation } from 'react-i18next';

const productMenuData = {
  column1: [
    {
      titleKey: 'productMenu.productPage',
      items: [
        { key: 'productThumbnail', link: '#' },
        { key: 'productImages', link: '#' },
        { key: 'productSlider', link: '#' },
        { key: 'productAccordion', link: '#' },
        { key: 'productSticky', link: '#' },
        { key: 'productVerticalTab', link: '#' },
      ],
    },
    {
      titleKey: 'productMenu.productFeatures',
      items: [
        { key: 'productSimple', link: '#' },
        { key: 'productClassified', link: '#' },
        { key: 'sizeChart', link: '#' },
        { key: 'deliveryReturn', link: '#' },
        { key: 'productReview', link: '#' },
        { key: 'askAnExpert', link: '#' },
      ],
    },
  ],
  column2: [
    {
      titleKey: 'productMenu.productPage',
      items: [
        { key: 'productSidebarLeft', link: '#' },
        { key: 'productSidebarRight', link: '#' },
        { key: 'productNoSidebar', link: '#' },
        { key: 'productColumnThumb', link: '#' },
        { key: 'productThumbnailImage', link: '#' },
      ],
    },
    {
      titleKey: 'productMenu.productFeatures',
      items: [
        { key: 'bundleCrossSale', link: '#' },
        { key: 'hotStockProgress', link: '#' },
        { key: 'outOfStock', link: '#' },
        { key: 'saleCountdown', link: '#' },
        { key: 'productZoom', link: '#' },
      ],
    },
  ],
  column3: [
    {
      titleKey: 'productMenu.productVariantsStyle',
      items: [
        { key: 'variantRectangle', link: '#' },
        { key: 'variantCircle', link: '#' },
        { key: 'variantImageSwatch', link: '#' },
        { key: 'variantColor', link: '#' },
        { key: 'variantRadioButton', link: '#' },
        { key: 'variantDropdown', link: '#' },
      ],
    },
    {
      titleKey: 'productMenu.productFeatures',
      items: [
        { key: 'stickyCheckout', link: '#' },
        { key: 'secureCheckout', link: '#' },
        { key: 'socialShare', link: '#' },
        { key: 'relatedProducts', link: '#' },
        { key: 'wishlistCompare', link: '#' },
      ],
    },
  ],
  banner: {
    brandName: 'Multikart',
    subtitleKey: 'productMenu.bannerSubtitle',
    imageSrc: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
    link: '#',
  },
};

export const ProductMenu: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="main-menu-panel menu-panel-upward menu-panel-width product-menu-panel">
      {/* 3 Navigation Columns Grid */}
      <div className="col-span-3 grid grid-cols-3 gap-6">
        
        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          {productMenuData.column1.map((section, idx) => (
            <div key={idx}>
              <div className="mb-3">
                <h4 className="product-menu-title">{t(section.titleKey)}</h4>
                <div className="product-menu-underline"></div>
              </div>
              <ul className="space-y-2.5">
                {section.items.map((item) => (
                  <li key={item.key}>
                    <a href={item.link} className="product-menu-link">
                      {t(`productMenu.${item.key}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-6">
          {productMenuData.column2.map((section, idx) => (
            <div key={idx}>
              <div className="mb-3">
                <h4 className="product-menu-title">{t(section.titleKey)}</h4>
                <div className="product-menu-underline"></div>
              </div>
              <ul className="space-y-2.5">
                {section.items.map((item) => (
                  <li key={item.key}>
                    <a href={item.link} className="product-menu-link">
                      {t(`productMenu.${item.key}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-6">
          {productMenuData.column3.map((section, idx) => (
            <div key={idx}>
              <div className="mb-3">
                <h4 className="product-menu-title">{t(section.titleKey)}</h4>
                <div className="product-menu-underline"></div>
              </div>
              <ul className="space-y-2.5">
                {section.items.map((item) => (
                  <li key={item.key}>
                    <a href={item.link} className="product-menu-link">
                      {t(`productMenu.${item.key}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Column 4: Promotional Banner Card */}
      <div className="col-span-1">
        <a href={productMenuData.banner.link} className="product-banner-card group">
          <img
            src={productMenuData.banner.imageSrc}
            alt="Product Promotional Banner"
            className="product-banner-img"
          />
          <div className="product-banner-overlay">
            <span className="product-banner-brand">{productMenuData.banner.brandName}</span>
            <p className="product-banner-text">{t(productMenuData.banner.subtitleKey)}</p>
          </div>
        </a>
      </div>
    </div>
  );
};