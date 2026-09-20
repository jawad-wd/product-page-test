import React, { useState } from 'react';
import { MapPin, Phone, Mail, ChevronsUp } from 'lucide-react';
import {
  FaCcAmex,
  FaCcMastercard,
  FaCcPaypal,
  FaCcStripe,
  FaCcVisa,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from 'react-icons/fa';

import { useTranslation } from 'react-i18next';
import logo from '../../assets/whiteLogo.png';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-root">
      {/* Main Footer Content */}
      <div className="footer-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 py-16">
          
          {/* Column 1: Brand Info & Contact */}
          <div className="space-y-4">
            <a href="#" className="inline-block">
              <img src={logo} alt="Multikart Logo" className="h-7 w-auto object-contain " />
            </a>
            <p className="footer-description">
              {t('footer.description')}
            </p>
            <div className="space-y-2.5 pt-1 text-[13px]">
              <div className="footer-contact-item">
                <MapPin className="w-4 h-4 shrink-0 text-[#999999]" />
                <span>{t('footer.address')}</span>
              </div>
              <div className="footer-contact-item">
                <Phone className="w-4 h-4 shrink-0 text-[#999999]" />
                <span>{t('footer.callUs')}: 123-456-7898</span>
              </div>
              <div className="footer-contact-item">
                <Mail className="w-4 h-4 shrink-0 text-[#999999]" />
                <span>{t('footer.emailUs')}: Support@Multikart.Com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Categories */}
          <div>
            <h4 className="footer-title">{t('footer.categories')}</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">{t('footer.catBaby')}</a></li>
              <li><a href="#" className="footer-link">{t('footer.catBag')}</a></li>
              <li><a href="#" className="footer-link">{t('footer.catBooks')}</a></li>
              <li><a href="#" className="footer-link">{t('footer.catChristmas')}</a></li>
              <li><a href="#" className="footer-link">{t('footer.catClassic')}</a></li>
              <li><a href="#" className="footer-link">{t('footer.catOptics')}</a></li>
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div>
            <h4 className="footer-title">{t('footer.usefulLinks')}</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">{t('navigation.home')}</a></li>
              <li><a href="#" className="footer-link">{t('navigation.collection')}</a></li>
              <li><a href="#" className="footer-link">{t('footer.aboutUs')}</a></li>
              <li><a href="#" className="footer-link">{t('navigation.blogs')}</a></li>
              <li><a href="#" className="footer-link">{t('footer.offers')}</a></li>
              <li><a href="#" className="footer-link">{t('actions.search')}</a></li>
            </ul>
          </div>

          {/* Column 4: Help Center */}
          <div>
            <h4 className="footer-title">{t('footer.helpCenter')}</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">{t('footer.myAccount')}</a></li>
              <li><a href="#" className="footer-link">{t('footer.myOrders')}</a></li>
              <li><a href="#" className="footer-link">{t('actions.wishlist')}</a></li>
              <li><a href="#" className="footer-link">{t('footer.faqs')}</a></li>
              <li><a href="#" className="footer-link">{t('navigation.contact')}</a></li>
            </ul>
          </div>

          {/* Column 5: Follow Us & Newsletter */}
          <div className="space-y-3">
            <h4 className="footer-title">{t('footer.followUs')}</h4>
            <p className="footer-description">
              {t('footer.newsletterText')}
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
              <input
                type="email"
                required
                placeholder={t('footer.emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="footer-input"
              />
              <button type="submit" className="footer-submit-btn">
                {t('footer.subscribe')}
              </button>
            </form>

            {/* Social Media Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a href="#" className="footer-social-btn" aria-label="Facebook">
                <FaFacebookF className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a href="#" className="footer-social-btn" aria-label="Twitter">
                <FaTwitter className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a href="#" className="footer-social-btn" aria-label="Instagram">
                <FaInstagram className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a href="#" className="footer-social-btn" aria-label="Pinterest">
                <FaPinterestP className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Sub Footer / Copyright & Payments */}
      <div className="sub-footer-root">
        <div className="footer-container flex flex-col md:flex-row items-center justify-between gap-4 py-5">
          <p className="text-[13px] text-[#999999] font-normal">
            {t('footer.copyright')}
          </p>

          <div className="payment-methods" aria-label="Payment methods">
            <FaCcVisa className="payment-icon payment-icon-visa" aria-label="Visa" />
            <FaCcPaypal className="payment-icon payment-icon-paypal" aria-label="PayPal" />
            <FaCcMastercard className="payment-icon payment-icon-mastercard" aria-label="Mastercard" />
            <FaCcStripe className="payment-icon payment-icon-stripe" aria-label="Stripe" />
            <FaCcAmex className="payment-icon payment-icon-amex" aria-label="American Express" />
          </div>
        </div>
      </div>

      {/* Back to Top Floating Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 bg-[#fa6400] hover:bg-[#e45013] text-white p-2.5 rounded-xs shadow-lg transition-colors cursor-pointer"
        aria-label="Back to Top"
      >
        <ChevronsUp className="w-5 h-5" />
      </button>
    </footer>
  );
};