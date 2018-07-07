import i18next from 'i18next';

const loadLocales = () => {
  i18next.addResourceBundle('en', 'ecommerceCoreUI', {
    metadata: {
      appName: 'BADR Archetype',
      displayName: 'ecommerceCoreUI',
      description: 'This module contains mostly the helpers for displaying items related to ecommerce, like product cards, cart, .....etc',
    },
    home: {
      menuTitle: 'eCommerceUI',
    },
    homeTitle: 'Home',
    HeaderTrackOrders: 'Track Your Orders',
    HeaderAccount: 'My Account',
    HeaderSupport: 'Technical Support',
    HeaderPrize: 'Daily Prize',
    submenu: {
      tracks: 'Tracks',
      currency: 'Currency',
      language: 'Language',
    },
    HeaderSubMenuTracks: 'Tracks',
    HeaderSubMenuCurrency: 'Currency',
    HeaderSubMenuLanguage: 'Language',

    HeaderProductItems: 'no items',

    header: {
      allProducts: 'All Products',
      search: 'Search',
    },
  }, true, true);

  i18next.loadNamespaces('ecommerceCoreUI');
};

export default loadLocales;
