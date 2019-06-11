import React from 'react';
import Countdown from '../components/countdown';
import { Query } from 'react-apollo';
import upcomingLaunch from '../graphql/queries/upcomingLaunch';
import styled from 'styled-components';

const Homepage = () => {
  return (
    <HomepageStyle>
      <Query query={upcomingLaunch}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <span>`Error! ${error.message}`</span>;
          return <Countdown data={data} />;
        }}
      </Query>
    </HomepageStyle>
  );
};

export default Homepage;

const HomepageStyle = styled.div`
  margin: 0 auto;
`;
