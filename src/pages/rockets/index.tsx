import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { Spinner } from 'react-bootstrap';

import rockets from '../../graphql/queries/rockets';
import { RocketCardContainer } from './cardContainer';

export function Rockets() {
  return (
    <HomepageStyle>
      <h2>Rockets</h2>
      <Query query={rockets}>
        {({ loading, error, data }) => {
          if (loading) return <Spinner animation="grow" variant="light" />;
          if (error) return <span>`Error! ${error.message}`</span>;
          return <RocketCardContainer data={data} />;
        }}
      </Query>
    </HomepageStyle>
  );
}

const HomepageStyle = styled.div`
  width: 100%;
  margin: 5% auto;
  padding: 0 15px;
  h2 {
    margin-bottom: 30px;
  }
`;
