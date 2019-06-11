import React from 'react';
import { ApolloProvider } from 'react-apollo';

import client from './graphql/apollo/default';
import Routes from './routes';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    </div>
  );
};

export default App;
