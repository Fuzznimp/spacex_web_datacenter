import styled from 'styled-components';
import { Table } from 'react-bootstrap';
import React from 'react';

import { Td } from '../../components/table/td';
import { TdDate } from '../../components/table/tdDate';
import { TdPatch } from '../../components/table/tdPatch';
import { SmallCountdown } from '../../components/smallCountdown';

type FutureTableProps = {
  data: object;
};

export function FutureTable({ data }: FutureTableProps) {
  const launches = data['launches'];

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
          {launches.map(launch => (
            <TableTr key={launch.flight_number}>
              <Td data={launch.flight_number} />
              <SmallCountdown futureDate={launch.launch_date_unix} />
              <TdDate date={launch.launch_date_utc} />
              <Td data={launch.mission_name} />
              <Td data={launch.rocket.rocket_name} />
              <Td data={launch.launch_site.site_name} />
              <TdPatch patch={launch.links.mission_patch_small} />
            </TableTr>
          ))}
        </tbody>
      </Table>
    </FutureTableStyle>
  );
}

// Style
const FutureTableStyle = styled.div`
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

const TableTr = styled.tr`
  background-color: rgba(40, 40, 40, 0);

  transition: background-color 1;
  &:hover {
    background-color: rgba(40, 40, 40, 0.6);
    -webkit-transition: background-color 200ms linear;
    -ms-transition: background-color 200ms linear;
    transition: background-color 200ms linear;
  }
`;

const CountdownLegend = styled.p`
  margin-bottom: 0;
  font-size: 0.75rem;
`;
