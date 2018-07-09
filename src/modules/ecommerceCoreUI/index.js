import i18next from 'i18next';
import Modal from 'react-modal';

import loadLocales from './locales/index';
import Home from './containers/Home';


const ModuleEntry = {
  name: 'eCommerceCoreUI',
  homePath: '/eCommerceCoreUI',
  displayName: 'ToBeLoaded',
  menuItemTitle: 'ToBeLoaded',
  loadModule: () => {
    loadLocales();

    Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,0)';

    ModuleEntry.displayName = i18next.t('eCommerceCoreUI:metadata.displayName');
    ModuleEntry.menuItemTitle = i18next.t('eCommerceCoreUI:home.menuTitle');
  },
  HomePage: Home,
};

export default ModuleEntry;
