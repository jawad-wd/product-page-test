import React from 'react';
import { useTranslation } from 'react-i18next';

const megaMenuData = {
  columns: [
    {
      titleKey: 'megaMenu.topBrands',
      items: [
        { key: 'sunsetglideSurfboards', link: '#' },
        { key: 'enigmaFragrance', link: '#' },
        { key: 'drivelineDepot', link: '#' },
        { key: 'digitalHaven', link: '#' },
        { key: 'lenscrafted', link: '#' },
      ],
    },
    {
      titleKey: 'megaMenu.popularCategories',
      items: [
        { key: 'fashion', link: '#' },
        { key: 'fitgear', link: '#' },
        { key: 'lingerie', link: '#', badgeKey: 'megaMenu.hot' },
        { key: 'bag', link: '#' },
        { key: 'watch', link: '#' },
      ],
    },
    {
      titleKey: 'megaMenu.emailTemplate',
      items: [
        { key: 'welcome', link: '#' },
        { key: 'abandonment', link: '#' },
        { key: 'offerTemplate', link: '#' },
        { key: 'orderSuccess', link: '#' },
        { key: 'review', link: '#' },
      ],
    },
    {
      titleKey: 'megaMenu.emailTemplate',
      items: [
        { key: 'announcement', link: '#' },
        { key: 'flashSale', link: '#' },
        { key: 'blackFriday', link: '#' },
        { key: 'christmas', link: '#' },
        { key: 'cyberMonday', link: '#' },
      ],
    },
  ],
  banner: {
    brand: 'Multikart',
    subtitleKey: 'megaMenu.bannerSubtitle',
    buttonTextKey: 'megaMenu.bannerDemoBtn',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=300&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=300&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=300&auto=format&fit=crop',
    ],
    link: '#',
  },
};

export const MegaMenu: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="mega-menu-panel">
      {/* Top 4 Columns Links */}
      <div className="mega-menu-columns grid grid-cols-4 gap-6 mb-6">
        {megaMenuData.columns.map((col, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="mb-3">
              <h4 className="mega-menu-title">{t(col.titleKey)}</h4>
              <div className="mega-menu-underline"></div>
            </div>
            <ul className="space-y-2.5">
              {col.items.map((item) => (
                <li key={item.key} className="flex items-center gap-2">
                  <a href={item.link} className="mega-menu-link">
                    {t(`megaMenu.${item.key}`)}
                  </a>
                  {item.badgeKey && (
                    <span className="mega-menu-badge">{t(item.badgeKey)}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Promotion Banner Box */}
      <a href={megaMenuData.banner.link} className="mega-menu-banner-card group">
        <div className="flex flex-col justify-center items-start z-10">
          <span className="text-2xl font-black text-[#e45013] tracking-wide flex items-center gap-1">
            <span className="text-red-500 font-bold">m</span>{megaMenuData.banner.brand}
          </span>
          <p className="text-xs text-gray-700 font-semibold mt-1">
            {t(megaMenuData.banner.subtitleKey)}
          </p>
          <span className="mt-2 inline-block bg-[#e45013] text-white text-[11px] font-bold px-2.5 py-1 rounded">
            {t(megaMenuData.banner.buttonTextKey)}
          </span>
        </div>

        {/* Demo Thumbnails Preview */}
        <div className="flex items-center gap-2 z-10 overflow-hidden">
          {megaMenuData.banner.images.map((imgSrc, i) => (
            <div key={i} className="w-20 h-16 rounded overflow-hidden shadow-sm border border-gray-200">
              <img
                src={imgSrc}
                alt="Demo Preview"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </a>
    </div>
  );
};