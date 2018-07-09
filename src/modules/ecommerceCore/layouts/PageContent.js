import React from 'react';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  removeModalPartFromLocation,
} from '~/modules/core/utils/modalHelpers';

import HomePage from '../containers/Home';

import { withModules } from '../../core/utils/modulesLoader';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/path5',
    component: () => <h1> Hello</h1>,
  },
];

const PageContent = ({ location }) => (
  <Switch location={removeModalPartFromLocation(location)}>
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

PageContent.propTypes = PropTypes.shape({
  location: PropTypes.shape({}).isRequired,
}).isRequired;

export default withModules(withRouter(PageContent));

