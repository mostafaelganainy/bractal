import React, { Component } from 'react';
import {  
  Route,
  Switch,
} from 'react-router-dom';

import Home from '../../containers/Home'
import AccountManagement from '../../../../modules/accountManagement'


export default class PageContent extends Component {
  state = { activeItem: 'home' };

  render() {

    return (      
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/account" exact component={AccountManagement.Home} />
      </Switch>      
    )
  }
};

