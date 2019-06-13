import { gql } from 'apollo-boost';

const rockets = gql`
  {
    rockets {
      id
      rocket_name
      flickr_images
      active
      stages
      boosters
      cost_per_launch
      success_rate_pct
      first_flight
      height {
        meters
      }
      diameter {
        meters
      }
      mass {
        kg
      }
      payload_weights {
        id
        name
        kg
      }
      first_stage {
        reusable
        engines
        fuel_amount_tons
        thrust_sea_level {
          kN
        }
        thrust_vacuum {
          kN
        }
      }
      second_stage {
        engines
        fuel_amount_tons
        thrust {
          kN
        }
      }
      engines {
        number
        type
        version
        layout
        propellant_1
        propellant_2
        thrust_sea_level {
          kN
        }
        thrust_vacuum {
          kN
        }
      }
      landing_legs {
        number
        material
      }
    }
  }
`;

export default rockets;
