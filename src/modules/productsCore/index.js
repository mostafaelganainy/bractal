import i18next from 'i18next';

import loadLocales from './locales/index';
import Home from './containers/Home';
import ProductCard from './components/productCard/ProductCard';

const ModuleEntry = {
  name: 'productsCore',
  homePath: '/products',
  displayName: 'ToBeLoaded',
  menuItemTitle: 'ToBeLoaded',
  loadModule: () => {
    loadLocales();
    ModuleEntry.displayName = i18next.t('productsCore:metadata.displayName');
    ModuleEntry.menuItemTitle = i18next.t('productsCore:home.menuTitle');
  },
  HomePage: Home,
  Components: {
    ProductCard,
  },
};

export default ModuleEntry;
