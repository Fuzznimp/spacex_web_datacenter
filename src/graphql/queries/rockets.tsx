import { gql } from 'apollo-boost';

const rockets = gql`
  {
    rockets {
      id
      rocket_id
      rocket_name
      flickr_images
      description
    }
  }
`;

export default rockets;