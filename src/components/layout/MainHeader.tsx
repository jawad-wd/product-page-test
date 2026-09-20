import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, User, ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ProductMenu } from './menus/ProductMenu';
import { CollectionMenu } from './menus/CollectionMenu';
import { MegaMenu } from './menus/MegaMenu';
import logo from '../../assets/logo.png';

export const MainHeader: React.FC = () => {
  const { t } = useTranslation();
  const [activeProductMenu, setActiveProductMenu] = useState(false);
  const [activeCollection, setActiveCollection] = useState(false); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(false);

  const closeMenus = () => {
    setActiveProductMenu(false);
    setActiveCollection(false);
    setActiveMegaMenu(false);
  };

  return (
    <header className="main-header-root">
      <div className="main-header-container">
        <div className="main-header-row">

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isMobileMenuOpen ? t('actions.closeMenu') : t('actions.openMenu')}
            aria-expanded={isMobileMenuOpen}
            onClick={() => { 
              setIsMobileMenuOpen(!isMobileMenuOpen); 
              closeMenus(); 
            }}
            className="mobile-menu-trigger"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          {/* Logo */}
          <Link to="/" className="header-logo-link">
            <img 
              src={logo} 
              alt="Multikart Logo" 
              className="header-logo-img" 
            />
          </Link>

          {/* Desktop Navigation Items */}
          <nav className="nav-bar-desktop">
            <Link to="/" className="nav-link">
              {t('navigation.home')}
            </Link>

            {/* Collection Dropdown */}
            <div 
              className="nav-dropdown-wrapper"
              onMouseEnter={() => { setActiveCollection(true); setActiveProductMenu(false); }}
              onMouseLeave={() => setActiveCollection(false)}
            >
              <button type="button" className="nav-dropdown-btn">
                <span>{t('navigation.collection')}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeCollection ? 'rotate-180' : ''}`} />
              </button>

              {activeCollection && <CollectionMenu />}
            </div>

            {/* Product Dropdown */}
            <div 
              className="nav-dropdown-wrapper product-nav-dropdown-wrapper"
              onMouseEnter={() => { setActiveProductMenu(true); setActiveCollection(false); }}
              onMouseLeave={() => setActiveProductMenu(false)}
            >
              <button type="button" className="nav-dropdown-btn">
                <span>{t('navigation.product')}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeProductMenu ? 'rotate-180' : ''}`} />
              </button>

              {activeProductMenu && <ProductMenu />}
            </div>

            {/* Mega Menu Trigger */}
            <div 
              className="nav-dropdown-wrapper mega-nav-dropdown-wrapper"
              onMouseEnter={() => { 
                setActiveMegaMenu(true); 
                setActiveCollection(false); 
                setActiveProductMenu(false); 
              }}
              onMouseLeave={() => setActiveMegaMenu(false)}
            >
              <button type="button" className="nav-dropdown-btn">
                <span>{t('navigation.megaMenu')}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu ? 'rotate-180' : ''}`} />
              </button>

              {activeMegaMenu && <MegaMenu />}
            </div>

            <Link to="/shop" className="nav-link">{t('navigation.blogs')}</Link>
            <Link to="/account" className="nav-link">{t('navigation.pages')}</Link>
            <Link to="/account" className="nav-link">{t('navigation.seller')}</Link>
          </nav>

          {/* User Actions & Icons */}
          <div className="header-actions-wrapper">
            <Link to="/shop" aria-label={t('actions.search')} className="header-icon-btn">
              <Search className="w-5 h-5 lg:w-6 lg:h-6" />
            </Link>
            
            <button type="button" aria-label={t('actions.wishlist')} className="header-icon-btn">
              <Heart className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>

            {/* Cart Icon */}
            <Link to="/cart" aria-label={t('actions.cart')} className="header-icon-btn">
              <ShoppingBag className="w-5 h-5 lg:w-6 lg:h-6" />
              <span className="cart-badge">3</span>
            </Link>

            <Link to="/account" aria-label={t('actions.account')} className="header-icon-btn">
              <User className="w-5 h-5 lg:w-6 lg:h-6" />
            </Link>
          </div>

        </div>

        {/* Mobile Navigation Panel */}
        {isMobileMenuOpen && (
          <nav className="nav-bar-mobile">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="mobile-nav-link">
              {t('navigation.home')}
            </Link>
            
            {/* Mobile Collection */}
            <button 
              type="button" 
              onClick={() => { setActiveCollection(!activeCollection); setActiveProductMenu(false); }} 
              className="mobile-nav-btn"
            >
              <span>{t('navigation.collection')}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeCollection ? 'rotate-180' : ''}`} />
            </button>
            {activeCollection && <CollectionMenu />}

            <button 
              type="button" 
              onClick={() => { setActiveProductMenu(!activeProductMenu); setActiveCollection(false); }} 
              className="mobile-nav-btn text-orange-500 font-bold"
            >
              <span>{t('navigation.product')}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeProductMenu ? 'rotate-180' : ''}`} />
            </button>
            {activeProductMenu && <ProductMenu />}

            {/* Mobile Mega Menu */}
            <button
              type="button"
              onClick={() => {
                setActiveMegaMenu(!activeMegaMenu);
                setActiveCollection(false);
                setActiveProductMenu(false);
              }}
              className="mobile-nav-btn"
            >
              <span>{t('navigation.megaMenu')}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMegaMenu ? 'rotate-180' : ''}`} />
            </button>
            {activeMegaMenu && <MegaMenu />}

            <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="mobile-nav-link">{t('navigation.blogs')}</Link>
            <Link to="/account" onClick={() => setIsMobileMenuOpen(false)} className="mobile-nav-link">{t('navigation.pages')}</Link>
            <Link to="/account" onClick={() => setIsMobileMenuOpen(false)} className="mobile-nav-link">{t('navigation.seller')}</Link>
          </nav>
        )}
      </div>
    </header>
  );
};