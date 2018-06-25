import i18next from 'i18next';

const loadLocales = () => {
  i18next.addResourceBundle('en', 'productsCore', {
    metadata: {
      name: 'productsCore',
      displayName: 'Products Core Module',
      description: 'This module is used to handle all common features related to product listing, like product lists, carousels, searching, details....etc',
    },
    home: {
      menuTitle: 'Products',
    },
  }, true, true);

  i18next.loadNamespaces('accountManagement');
};

export default loadLocales;
