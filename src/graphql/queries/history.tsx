import { gql } from 'apollo-boost';

const history = gql`
  {
    history {
      id
      title
      event_date_utc
      flight_number
      details
      links {
        article
        reddit
        wikipedia
      }
    }
  }
`;

export default history;
