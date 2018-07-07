import i18next from 'i18next';

const loadLocales = () => {
  i18next.addResourceBundle('en', 'aykLayout', {
    metadata: {
      appName: 'BADR Archetype',
      displayName: 'Ayk Layout',
      description: 'Contains the header, footer and content layout, for Ayk',
    },
    home: {
      menuTitle: 'Ayk Layout',
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

  i18next.addResourceBundle('ar', 'aykLayout', {
    metadata: {
      appName: 'BADR Archetype',
      displayName: 'Ayk Layout',
      description: 'Contains the header, footer and content layout, for Ayk',
    },
    home: {
      menuTitle: 'Ayk Layout',
    },
    homeTitle: 'الصفحة الرئيسية',
    HeaderTrackOrders: 'تتبع طلبك',
    HeaderAccount: 'حسابي',
    HeaderSupport: 'الدعم الفنى',
    HeaderPrize: 'Daily Prize',

    HeaderSubMenuTrack: 'Tracks',
    HeaderSubMenuCountry: 'العملة',
    HeaderSubMenuLanguage: 'اللغة',

    HeaderProductItems: 'العربة فارغة',

    header: {
      allProducts: 'All Products',
      search: 'بحث',
    },
  }, true, true);

  i18next.loadNamespaces('aykLayout');
};

export default loadLocales;
