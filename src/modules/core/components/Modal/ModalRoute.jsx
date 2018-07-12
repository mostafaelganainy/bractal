import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import {
  extractModalPartFromLocation,
  makeModalPath,
} from '../../utils/modalHelpers';

const ModalRoute = ({ path, component, location }) => (
  <Switch location={extractModalPartFromLocation(location)}>
    <Route
      path={makeModalPath(path)}
      component={component}
    />
  </Switch>
);

ModalRoute.propTypes = PropTypes.shape({
  path: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
  location: PropTypes.shape({}).isRequired,
}).isRequired;

export default withRouter(ModalRoute);
