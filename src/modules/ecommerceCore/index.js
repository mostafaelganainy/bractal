import i18next from 'i18next';

import loadLocales from './locales/index';
import Home from './containers/Home';

const ModuleEntry = {
  name: 'aykLayout',
  homePath: '/ayk-layout',
  displayName: 'ToBeLoaded',
  menuItemTitle: 'ToBeLoaded',
  loadModule: () => {
    loadLocales();
    ModuleEntry.displayName = i18next.t('aykLayout:metadata.displayName');
    ModuleEntry.menuItemTitle = i18next.t('aykLayout:home.menuTitle');
  },
  HomePage: Home,
};

export default ModuleEntry;
