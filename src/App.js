import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import { I18n, Trans } from 'react-i18next';
import './styles/css/App.css';
// import ProductCard from './components/ProductCard/ProductCard';
import i18n from './i18n'; // initialized i18next instance using reactI18nextModule

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en',
    };
  }

  render() {
    return (
      <I18n>
        {
          (t, { i18n }) => (
            <Router>
              <div>
                <h1 lang={this.state.lang}>{t('appName')}</h1>
                <ul>
                  <li><Link to="/product">Card</Link></li>
                </ul>
                <button onClick={() => i18n.changeLanguage('ar')}>ar</button>
                <button onClick={() => i18n.changeLanguage('en')}>en</button>
                <Switch>
                  <Route path="/" exact component={() => (<h1><Trans i18nKey="hello" /></h1>)} />
                  <Route path="/product" exact component={() => (<h1>Sign UP</h1>)} />
                </Switch>
              </div>
            </Router>
          )
        }
      </I18n>
    );
  }
}


export default App;
