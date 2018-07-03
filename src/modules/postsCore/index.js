import i18next from 'i18next';

import loadLocales from './locales/index';
import Home from './containers/Home';

const ModuleEntry = {
  name: 'postsCore',
  homePath: '/posts',
  displayName: 'ToBeLoaded',
  menuItemTitle: 'ToBeLoaded',
  loadModule: () => {
    loadLocales();
    ModuleEntry.displayName = i18next.t('postsCore:metadata.displayName');
    ModuleEntry.menuItemTitle = i18next.t('postsCore:home.menuTitle');
  },
  HomePage: Home,
};

export default ModuleEntry;
