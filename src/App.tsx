import React from 'react';
import { ApolloProvider } from 'react-apollo';
import Particles from 'react-particles-js';

import client from './graphql/apollo/default';
import { Routes } from './routes';
import particlesParams from './lib/particlesParams';
import { consoleLogAscii } from './utils/consoleLogAscii';

import './App.css';

const App = () => {
  consoleLogAscii();
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Particles params={particlesParams} className="particles-bg" />
        <Routes />
      </ApolloProvider>
    </div>
  );
};

export default App;
