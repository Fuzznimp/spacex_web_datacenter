import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import RoutesHistory from './utils/history';

import Header from './components/header';
import HeaderMobile from './components/headerMobile';
import Homepage from './pages/homepage/index';
import Future from './pages/future/index';
import Past from './pages/past/index';
import Rockets from './pages/rockets/index';
import RocketShow from './pages/rockets/show';
import History from './pages/history/index';
import About from './pages/about/index';

interface Props {}
interface State {
  isMobile: boolean;
}

class Routes extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false //This is where I am having problems
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener('resize', this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isMobile: window.innerWidth < 767 });
  }
  render() {
    const isMobile = this.state.isMobile;
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
}

export default Routes;
