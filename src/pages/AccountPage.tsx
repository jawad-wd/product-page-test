import React from 'react';
import { UserRound } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PageIntro } from './StoreUi';

export const AccountPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageIntro eyebrow={t('account.eyebrow')} title={t('account.title')} text={t('account.description')} />
      <section className="mx-auto max-w-md px-4 py-14 sm:px-6">
        <div className="mb-8 flex justify-center"><div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f7f5f1] text-orange-500"><UserRound size={27} /></div></div>
        <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
          <input required type="email" placeholder={t('account.email')} className="w-full border border-[#ddd] px-4 py-4 text-sm outline-none focus:border-orange-500" />
          <input required type="password" placeholder={t('account.password')} className="w-full border border-[#ddd] px-4 py-4 text-sm outline-none focus:border-orange-500" />
          <button type="submit" className="w-full bg-[#222] py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-orange-500">{t('account.signIn')}</button>
        </form>
        <button type="button" className="mt-5 w-full text-center text-xs text-[#777] hover:text-orange-500">{t('account.forgotPassword')}</button>
      </section>
    </>
  );
};