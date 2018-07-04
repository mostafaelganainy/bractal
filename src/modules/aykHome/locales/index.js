import i18next from 'i18next';

const loadLocales = () => {
  i18next.addResourceBundle('en', 'aykHome', {
    metadata: {
      name: 'aykHome',
      displayName: 'Ayk Home Module',
      description: 'AykHome is the best module you could ever find and I LOVE it !',
    },
    home: {
      menuTitle: 'Ayk Home',
    },
  }, true, true);

  i18next.loadNamespaces('aykHome');
};

export default loadLocales;
