import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import { withModules } from '../../utils/modulesLoader';

function PageContent({ modules }) {
  return (
    <Switch>
      { modules.map(module => (
        <Route key={module.name} path={module.homePath} exact component={module.HomePage} />
      )) }
    </Switch>
  );
}

PageContent.propTypes = {
  modules: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withModules(PageContent);

