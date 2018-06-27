import i18next from 'i18next';

const loadLocales = () => {
  i18next.addResourceBundle('en', 'PlainProducts', {
    metadata: {
      name: 'PlainProducts',
      displayName: 'Plain Products Module',
      description: 'Just a plain list of products',
    },
    home: {
      menuTitle: 'New Products',
    },
  }, true, true);

  i18next.loadNamespaces('PlainProducts');
};

export default loadLocales;
