import { gql } from 'apollo-boost';

const launch = gql`
  {
    launches {
      flight_number
      launch_date_unix
      launch_date_utc
      launch_date_local
      details
    }
  }
`;

export default launch;
