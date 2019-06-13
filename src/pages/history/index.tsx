import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import history from '../../graphql/queries/history';
import { Spinner } from 'react-bootstrap';

import HistoryCardContainer from './cardContainer';

const History = () => {
  return (
    <HomepageStyle>
      <Query query={history}>
        {({ loading, error, data }) => {
          if (loading) return <Spinner animation="grow" variant="light" />;
          if (error) return <span>`Error! ${error.message}`</span>;
          return <HistoryCardContainer data={data} />;
        }}
      </Query>
    </HomepageStyle>
  );
};

export default History;

const HomepageStyle = styled.div`
  width: 100%;
  margin: 5% auto;
  padding: 0 15px;
  h2 {
    margin-bottom: 30px;
  }
`;
