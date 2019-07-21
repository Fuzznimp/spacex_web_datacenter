import React from 'react';
import Countdown from '../../components/countdown';
import { Query } from 'react-apollo';
import upcomingLaunch from '../../graphql/queries/upcomingLaunch';
import styled from 'styled-components';
import { Spinner } from 'react-bootstrap';

export function Homepage() {
  return (
    <HomepageStyle>
      <Query query={upcomingLaunch}>
        {({ loading, error, data }) => {
          if (loading) return <Spinner animation="grow" variant="light" />;
          if (error) return <span>`Error! ${error.message}`</span>;
          return <Countdown data={data} />;
        }}
      </Query>
    </HomepageStyle>
  );
}

const HomepageStyle = styled.div`
  margin: 0 auto;
`;
