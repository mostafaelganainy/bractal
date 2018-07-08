import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from '../containers/Home';

import { withModules } from '../../core/utils/modulesLoader';

const routes = [
  {
    path: '/',
    component: HomePage,
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

