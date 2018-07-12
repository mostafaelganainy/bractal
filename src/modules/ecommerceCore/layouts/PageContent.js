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

const PageContent = ({ location }) => (
  <Switch location={removeModalPartFromLocation(location)}>
    <Route exact path="/" component={HomePage} />
  </Switch>
);

PageContent.propTypes = PropTypes.shape({
  location: PropTypes.shape({}).isRequired,
}).isRequired;

export default withModules(withRouter(PageContent));

