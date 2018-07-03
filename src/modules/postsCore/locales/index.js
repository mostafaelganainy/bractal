import i18next from 'i18next';

const loadLocales = () => {
  i18next.addResourceBundle('en', 'postsCore', {
    metadata: {
      name: 'postsCore',
      displayName: 'Posts Core Module',
      description: 'Our lovely module',
    },
    home: {
      menuTitle: 'Posts',
    },
  }, true, true);

  i18next.loadNamespaces('postsCore');
};

export default loadLocales;
