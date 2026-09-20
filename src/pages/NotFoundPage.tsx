import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PageIntro } from './StoreUi';

export const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageIntro eyebrow={t('notFound.eyebrow')} title={t('notFound.title')} text={t('notFound.description')} />
      <div className="px-4 py-14 text-center"><Link to="/shop" className="inline-block bg-orange-500 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-[#222]">{t('notFound.explore')}</Link></div>
    </>
  );
};