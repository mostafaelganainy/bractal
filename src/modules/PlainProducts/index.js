import i18next from 'i18next';

import loadLocales from './locales/index';
import Home from './containers/Home';
import ProductsCore from '../productsCore';

const ModuleEntry = {
  name: 'PlainProducts',
  homePath: '/new-products',
  displayName: 'ToBeLoaded',
  menuItemTitle: 'ToBeLoaded',
  loadModule: () => {
    loadLocales();
    ModuleEntry.displayName = i18next.t('PlainProducts:metadata.displayName');
    ModuleEntry.menuItemTitle = i18next.t('PlainProducts:home.menuTitle');
  },
  HomePage: Home,
  Dependencies: {
    ProductsCore,
  },
};

export default ModuleEntry;
