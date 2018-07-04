import i18next from 'i18next';

const loadLocales = () => {
  i18next.addResourceBundle('en', 'aykCore', {
    metadata: {
      name: 'aykCore',
      displayName: 'Ayk Core Module',
      description: 'This module includes all the cross-cutting infrastructure for the Ayk Project',
    },
    home: {
      menuTitle: 'Ayk Core',
    },
  }, true, true);

  i18next.loadNamespaces('aykCore');
};

export default loadLocales;
