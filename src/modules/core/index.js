import loadLocales from './locales/index';
import Home from './containers/Home'

const ModuleEntry = {
  loadModule: (options) => {
    loadLocales();
  },
  HomePage: Home,
};

export default ModuleEntry;
