import React from 'react';
import { Router, Route } from 'react-router-dom';

import RoutesHistory from './utils/history';

import Header from './components/header';
import HeaderMobile from './components/headerMobile';
import Homepage from './pages/homepage/index';
import Future from './pages/future/index';
import Past from './pages/past/index';
import Rockets from './pages/rockets/index';
import History from './pages/history/index';
import About from './pages/about/index';

const Routes = () => {
  return (
    <div>
      <Router history={RoutesHistory}>
        <div>
          <Header />
          <HeaderMobile />
          <Route path="/" exact component={Homepage} />
          <Route path="/future" component={Future} />
          <Route path="/past" component={Past} />
          <Route path="/rockets" component={Rockets} />
          <Route path="/history" component={History} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    </div>
  );
};

export default Routes;
