import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/css/App.css';
import Layout from './modules/AykLayout/layouts/AykLayout';

const App = () => (
  <Router>
    <Layout />
  </Router>
);

export default App;
