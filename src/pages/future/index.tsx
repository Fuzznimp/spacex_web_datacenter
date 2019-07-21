import React from 'react';
import { Query } from 'react-apollo';
import upcomingLaunches from '../../graphql/queries/upcomingLaunches';
import { Spinner } from 'react-bootstrap';
import { FutureTable } from './table';

export function Future() {
  return (
    <div>
      <Query query={upcomingLaunches}>
        {({ loading, error, data }) => {
          if (loading) return <Spinner animation="grow" variant="light" />;
          if (error) return <span>`Error! ${error.message}`</span>;
          return <FutureTable data={data} />;
        }}
      </Query>
    </div>
  );
}
