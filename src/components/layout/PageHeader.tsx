import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

interface PageHeaderProps {
  title?: string;
  customName?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, customName }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  const formatSegment = (segment: string) => decodeURIComponent(segment).replace(/-/g, ' ').toUpperCase();
  const pageTitle = title || customName || (pathnames.length > 0 ? formatSegment(pathnames[pathnames.length - 1]) : t('navigation.home'));

  return (
    <div className="w-full bg-[#f8f8f8] py-9 text-center">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-2 text-2xl font-medium uppercase tracking-wide text-[#222222]">{pageTitle}</h2>
        <nav aria-label={t('pageHeader.breadcrumb')}>
          <ol className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#777777]">
            <li><Link to="/" className="transition-colors hover:text-[#fa6400]">{t('navigation.home')}</Link></li>
            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;
              const label = isLast && customName ? customName : formatSegment(value);

              return <React.Fragment key={to}><span className="text-gray-400">/</span><li>{isLast ? <span className="text-[#222222]">{label}</span> : <Link to={to} className="transition-colors hover:text-[#fa6400]">{label}</Link>}</li></React.Fragment>;
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};