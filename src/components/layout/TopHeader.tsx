import React, { useState } from 'react';
import { Phone, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import saudiFlag from '../../assets/flag-saudi-arabia.svg';
import unitedStatesFlag from '../../assets/flag-united-states.svg';

export const TopHeader: React.FC = () => {
  const { lang, setLang } = useLanguage();
  const { t } = useTranslation();
  const [currency, setCurrency] = useState('USD');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCurrOpen, setIsCurrOpen] = useState(false);

  const selectedLanguage = lang === 'ar'
    ? { flag: saudiFlag, label: t('common.arabic') }
    : { flag: unitedStatesFlag, label: t('common.english') };

  const handleLangSelect = (selectedLang: 'ar' | 'en') => {
    setLang(selectedLang);
    setIsLangOpen(false);
  };

  return (
    <div className="top-header-root">
      <div className="top-header-container">
        
        {/* Contact Phone */}
        <div className="top-header-phone">
          <Phone className="w-3.5 h-3.5 text-orange-500" />
          <span>{t('topHeader.callUs')}</span>
        </div>

        {/* Language & Currency Controls */}
        <div className="top-header-controls">
          
          {/* Language Switcher */}
          <div className="top-header-dropdown-wrapper top-header-language-wrapper">
            <button
              type="button"
              onClick={() => {
                setIsLangOpen(!isLangOpen);
                setIsCurrOpen(false);
              }}
              className="top-header-dropdown-btn"
            >
              <img className="top-header-language-flag" src={selectedLanguage.flag} alt="" />
              <span className="top-header-language-name">{selectedLanguage.label}</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            {isLangOpen && (
              <div className="top-header-dropdown-menu w-28">
                <button
                  type="button"
                  onClick={() => handleLangSelect('en')}
                  className={`top-header-dropdown-item ${lang === 'en' ? 'top-header-dropdown-item-active' : ''}`}
                >
                  <img className="top-header-language-flag" src={unitedStatesFlag} alt="" />
                  <span className="top-header-language-name">{t('common.english')}</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleLangSelect('ar')}
                  className={`top-header-dropdown-item ${lang === 'ar' ? 'top-header-dropdown-item-active' : ''}`}
                >
                  <img className="top-header-language-flag" src={saudiFlag} alt="" />
                  <span className="top-header-language-name">{t('common.arabic')}</span>
                </button>
              </div>
            )}
          </div>

          {/* Currency Switcher */}
          <div className="top-header-dropdown-wrapper">
            <button
              type="button"
              onClick={() => {
                setIsCurrOpen(!isCurrOpen);
                setIsLangOpen(false);
              }}
              className="top-header-dropdown-btn"
            >
              <span>{currency}</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            {isCurrOpen && (
              <div className="top-header-dropdown-menu w-24">
                {['USD', 'EUR', 'AED'].map((curr) => (
                  <button
                    key={curr}
                    type="button"
                    onClick={() => {
                      setCurrency(curr);
                      setIsCurrOpen(false);
                    }}
                    className={`top-header-dropdown-item ${currency === curr ? 'top-header-dropdown-item-active' : ''}`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};