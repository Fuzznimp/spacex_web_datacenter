import React from 'react';
import { Router, Route } from 'react-router-dom';

import History from './utils/history';

import Header from './components/header';
import Homepage from './homepage/index';
import About from './about/index';

const Routes = () => {
  return (
    <div>
      <Router history={History}>
        <div>
          <Header />
          <Route path="/" exact component={Homepage} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    </div>
  );
};

export default Routes;
