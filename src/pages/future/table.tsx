import styled from 'styled-components';
import { Table } from 'react-bootstrap';
import React from 'react';

import Td from './td';
import TdDate from './tdDate';
import TdPatch from './tdPatch';

interface Props {
  data: object;
}

const FutureTable: React.FunctionComponent<Props> = props => {
  console.log(props);
  const { data }: { data: any } = props;

  return (
    <FutureTableStyle>
      <h2>Future Missions</h2>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>
              <CountdownLegend>(days:hours:mins:secs)</CountdownLegend>
              Countdown
            </th>
            <th>
              <CountdownLegend>(UTC+0200)</CountdownLegend>
              Date/Time
            </th>
            <th>Name</th>
            <th>Rocket</th>
            <th>Site</th>
            <th>Patch</th>
          </tr>
        </thead>
        <tbody>
          {data.launches.map(launch => (
            <tr key={launch.flight_number}>
              <Td data={launch.flight_number} />
              <Td data={launch.flight_number} />
              <TdDate data={launch.launch_date_utc} />
              <Td data={launch.mission_name} />
              <Td data={launch.rocket.rocket_name} />
              <Td data={launch.launch_site.site_name} />
              <TdPatch data={launch.links.mission_patch_small} />
            </tr>
          ))}
        </tbody>
      </Table>
    </FutureTableStyle>
  );
};

export default FutureTable;

// Style
const FutureTableStyle = styled.div`
  margin: 5% auto;
  width: 80%;
  th,
  td {
    color: white;
  }
`;

const CountdownLegend = styled.p`
  margin-bottom: 0;
  font-size: 0.75rem;
`;
