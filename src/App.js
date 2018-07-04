import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/css/App.css';

// import Layout from './modules/core/layouts/simple/Layout';

// import Layout from './modules/AykLayout/layouts/AykLayout';
// import Layout from './modules/BADRLibLayout/layouts/Layout';
import Layout from './modules/AykLayoutAdvanced/layouts/Layout';

const App = () => (
  <Router>
    <Layout />
  </Router>
);

export default App;
