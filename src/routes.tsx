import React, { useState, useEffect } from 'react';
import { Router, Route } from 'react-router-dom';

import RoutesHistory from './utils/history';

import { Header } from './components/header';
import { HeaderMobile } from './components/headerMobile';
import { Homepage } from './pages/homepage/index';
import { Future } from './pages/future/index';
import Past from './pages/past/index';
import { Rockets } from './pages/rockets/index';
import RocketShow from './pages/rockets/show';
import { History } from './pages/history/index';
import { About } from './pages/about/index';

export function Routes() {
  const [isMobile, setIsMobile] = useState(true);
  const [windowWidth, setWindowWidth] = useState(1280);

  const setWindowWidthEventListener = event =>
    setWindowWidth(event.currentTarget.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', setWindowWidthEventListener);
    setIsMobile(windowWidth < 767);
    return function removeEventListener() {
      window.removeEventListener('resize', setWindowWidthEventListener);
    };
  }, [windowWidth]);

  return (
    <div>
      <Router history={RoutesHistory}>
        <div>
          {isMobile ? <HeaderMobile /> : <Header />}
          <Route path="/" exact component={Homepage} />
          <Route path="/future" component={Future} />
          <Route path="/past" component={Past} />
          <Route path="/rockets" exact component={Rockets} />
          <Route path="/rockets/:id" component={RocketShow} />
          <Route path="/history" component={History} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    </div>
  );
}
