import { gql } from 'apollo-boost';

const upcomingLaunch = gql`
  {
    launches(range: upcoming) {
      flight_number
      mission_name
      launch_date_unix
      details
      rocket {
        rocket_name
      }
      launch_site {
        site_name
      }
      links {
        mission_patch
      }
    }
  }
`;

export default upcomingLaunch;
