import i18next from 'i18next';

import loadLocales from './locales/index';
import Home from './containers/Home';

const ModuleEntry = {
  name: 'aykCore',
  homePath: '/aykCore',
  displayName: 'ToBeLoaded',
  menuItemTitle: 'ToBeLoaded',
  loadModule: () => {
    loadLocales();
    ModuleEntry.displayName = i18next.t('aykCore:metadata.displayName');
    ModuleEntry.menuItemTitle = i18next.t('aykCore:home.menuTitle');
  },
  HomePage: Home,
};

export default ModuleEntry;
