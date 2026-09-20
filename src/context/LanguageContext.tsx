import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import i18n from '../i18n';
import { Language } from '../types/product';

interface LanguageContextType {
  lang: Language;
  dir: 'rtl' | 'ltr';
  toggleLanguage: () => void;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setCurrentLang] = useState<Language>(i18n.language as Language);
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [lang, dir]);

  const setLang = (nextLang: Language) => {
    setCurrentLang(nextLang);
    void i18n.changeLanguage(nextLang);
  };

  const toggleLanguage = () => {
    setLang(lang === 'ar' ? 'en' : 'ar');
  };

  return (
    <LanguageContext.Provider value={{ lang, dir, toggleLanguage, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};