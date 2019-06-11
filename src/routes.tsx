import React from 'react';
import { Router, Route } from 'react-router-dom';

import History from './utils/history';

import Header from './components/header';
import Homepage from './pages/homepage/index';
import Future from './pages/future/index';
import Past from './pages/past/index';
import About from './pages/about/index';

const Routes = () => {
  return (
    <div>
      <Router history={History}>
        <div>
          <Header />
          <Route path="/" exact component={Homepage} />
          <Route path="/future" component={Future} />
          <Route path="/past" component={Past} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    </div>
  );
};

export default Routes;
