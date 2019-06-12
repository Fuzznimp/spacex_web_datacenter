import React from 'react';
import { Query } from 'react-apollo';
import PastLaunches from '../../graphql/queries/pastLaunches';
import { Spinner } from 'react-bootstrap';
import PastTable from './table';

const Past = () => {
  return (
    <div>
      <Query query={PastLaunches}>
        {({ loading, error, data }) => {
          if (loading)
            return (
              <Spinner animation="border" variant="primary" error="error" />
            );
          if (error) return <span>`Error! ${error.message}`</span>;
          return <PastTable data={data} />;
        }}
      </Query>
    </div>
  );
};

export default Past;
