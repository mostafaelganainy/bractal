import i18next from 'i18next';

const loadLocales = () => {
  i18next.addResourceBundle('en', 'accountManagement', {
    metadata: {
      name: 'accountManagement',
      displayName: 'Account Management Module',
      description: 'This module is used to handle all common features related to managing users, like signup, signin, manage profile....etc',
    },
    home: {
      menuTitle: 'Account',
      howToUse: {
        title: 'Usage',
        description: 'In the above menu, every link opens the entry page for each extension.',
      },
    },
  }, true, true);

  i18next.loadNamespaces('accountManagement');
};

export default loadLocales;
