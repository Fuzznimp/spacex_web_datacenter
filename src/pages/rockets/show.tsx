import React from 'react';
import { Query } from 'react-apollo';
import { Card, Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import rockets from '../../graphql/queries/rockets';

interface Props {
  match: object;
}

const RocketShow: React.FunctionComponent<Props> = ({ match }) => {
  return (
    // <Card>
      <Query query={rockets}>
        {({ loading, error, data }) => {
          if (loading)
            return (
              <Spinner animation="border" variant="primary" error="error" />
            );
          if (error) return <span>`Error! ${error.message}`</span>;
          return (
            <img
              src="https://www.talkesport.com/wp-content/uploads/dr-disrespect-hacked.jpg"
              alt="Doc"
              style={{ height: '576px', width: '1024px' }}
            />
          );
        }}
      </Query>
    // </Card>
  );
};

export default RocketShow;

const CardStyle = styled.div``;
