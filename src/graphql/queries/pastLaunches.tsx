import { gql } from 'apollo-boost';

const pastLaunches = gql`
  {
    launches(range: past) {
      flight_number
      mission_name
      launch_date_utc
      details
      launch_success
      rocket {
        rocket_name
        first_stage {
          cores {
            land_success
          }
        }
      }
      launch_site {
        site_name
      }
      links {
        mission_patch_small
      }
    }
  }
`;

export default pastLaunches;
