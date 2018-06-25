import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

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

export default withModules(PageContent);

