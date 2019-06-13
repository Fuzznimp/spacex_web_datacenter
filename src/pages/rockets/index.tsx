import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { Spinner } from 'react-bootstrap';

import rockets from '../../graphql/queries/rockets';
import CardContainer from './cardContainer';

const Rockets = () => {
  return (
    <HomepageStyle>
      <Query query={rockets}>
        {({ loading, error, data }) => {
          if (loading)
            return (
              <Spinner animation="border" variant="primary" error="error" />
            );
          if (error) return <span>`Error! ${error.message}`</span>;
          return <CardContainer data={data} />;
        }}
      </Query>
    </HomepageStyle>
  );
};

export default Rockets;

const HomepageStyle = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
`;
