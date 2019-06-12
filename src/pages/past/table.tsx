import styled from 'styled-components';
import { Table } from 'react-bootstrap';
import React from 'react';

import Td from './td';
import TdDate from './tdDate';
import TdPatch from './tdPatch';
import TdLanding from './tdLanding';
import TdLaunch from './tdLaunch';

interface Props {
  data: object;
}

const PastTable: React.FunctionComponent<Props> = props => {
  const { data }: { data: any } = props;

  return (
    <PastTableStyle>
      <h2>Past Missions</h2>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Patch</th>
            <th>
              <CountdownLegend>(UTC+0200)</CountdownLegend>
              Date
            </th>
            <th>Name</th>
            <th>Rocket</th>
            <th>Site</th>
            <th>Launch</th>
            <th>Landing</th>
          </tr>
        </thead>
        <tbody>
          {data.launches.map(launch => (
            <tr key={launch.flight_number}>
              <Td data={launch.flight_number} />
              <TdPatch data={launch.links.mission_patch_small} />
              <TdDate data={launch.launch_date_utc} />
              <Td data={launch.mission_name} />
              <Td data={launch.rocket.rocket_name} />
              <Td data={launch.launch_site.site_name} />
              <TdLaunch
                data={launch.launch_success}
              />
              <TdLanding
                data={launch.rocket.first_stage.cores[0].land_success}
              />
            </tr>
          ))}
        </tbody>
      </Table>
    </PastTableStyle>
  );
};

export default PastTable;

// Style
const PastTableStyle = styled.div`
  margin: 5% auto;
  width: 80%;
  table {
    overflow: hidden;
  }
  th,
  td {
    color: white;
    border-top: 0;
  }
  tbody {
    overflow: scroll;
    height: 40%;
  }
`;

const CountdownLegend = styled.p`
  margin-bottom: 0;
  font-size: 0.75rem;
`;
