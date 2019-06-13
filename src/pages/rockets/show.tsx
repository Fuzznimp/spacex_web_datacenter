import React from 'react';
import { Query } from 'react-apollo';
import { Card, Spinner } from 'react-bootstrap';
// import styled from 'styled-components';
import rockets from '../../graphql/queries/rockets';

interface Props {
  match: object;
}

const RocketShow: React.FunctionComponent<Props> = ({ match }) => {
  return (
    // <Card>
    <Query query={rockets}>
      {({ loading, error, data }) => {
        if (loading) return <Spinner animation="grow" variant="light" />;
        if (error) return <span>`Error! ${error.message}`</span>;
        return (
          <Card>
            <p>yo</p>
          </Card>
        );
      }}
    </Query>
  );
};

export default RocketShow;
