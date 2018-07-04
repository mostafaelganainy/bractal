import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import AykHomePage from '~/modules/aykHome/containers/Home';

import { withModules } from '../../core/utils/modulesLoader';

const routes = [
  {
    path: '/',
    component: AykHomePage,
  },
];

const PageContent = () => (
  <Switch>
    { routes.map(route => (
      <Route
        key={route.path}
        exact={route.path === '/'}
        path={route.path}
        component={route.component}
      />
    )) }
  </Switch>
);

export default withModules(PageContent);

