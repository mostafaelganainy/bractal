/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';

import { ThemeProvider } from 'styled-components';
import UserInfoProvider from '~/modules/core/utils/accessManagementHelpers/UserInfoProvider';
import ModalTrackerProvider from '~/modules/core/utils/modalHelpers/ModalTrackerProvider';

import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import Theme from './Theme';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import i18nextLoader from './i18n'; // initialized i18next instance
import ModulesLoader from './modules/core/utils/modulesLoader';
import RelayInitializer from './modules/core/utils/relayHelpers/RelayInitializer';
import modulesConfig from './modulesConfig';

let i18next = null;

const renderApp = (modules, environment) => {
  ReactDOM.render(
    <Router>
      <RelayInitializer.Context.Provider value={environment}>
        <ModulesLoader.Context.Provider value={modules} >
          <I18nextProvider i18n={i18next}>
            <ThemeProvider theme={Theme}>
              <UserInfoProvider>
                <ModalTrackerProvider>
                  <App />
                </ModalTrackerProvider>
              </UserInfoProvider>
            </ThemeProvider>
          </I18nextProvider>
        </ModulesLoader.Context.Provider>
      </RelayInitializer.Context.Provider>
    </Router>,
    document.getElementById('root'),
  );
  registerServiceWorker();
};

i18next = i18nextLoader.load((err) => {
  if (err) return console.error(err);
  // const environment = RelayInitializer.init('https://eu1.prisma.sh/mostafa-elganainy-2630c3/demo_3/dev');
  const environment = RelayInitializer.init('http://ayk-test.badrit.com/graphql');
  /* 'http://localhost:4000',
  {
    Authorization: '',
  },
  */
  const modules = ModulesLoader.loadModules(modulesConfig);
  renderApp(modules, environment);
  return null;
});
