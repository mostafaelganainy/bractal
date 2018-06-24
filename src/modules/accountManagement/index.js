import i18next from 'i18next';

import loadLocales from './locales/index';
import Home from './containers/Home';

const ModuleEntry = {
  loadModule: (options) => {
    loadLocales();
    ModuleEntry.menuItemTitle = i18next.t('accountManagement:home.menuTitle');
  },
  HomePage: Home,
  menuItemTitle: 'TO BE LOADED',
};

export default ModuleEntry;
