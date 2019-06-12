import React from 'react';
import styled from 'styled-components';

interface Props {
  data: object;
}

const TdPatch: React.FunctionComponent<Props> = props => {
  const { data }: { data: any } = props;
  return data! ? (
    <TdPatchStyle>
      <img src={data} alt="Mission Patch" />
    </TdPatchStyle>
  ) : (
    <td>TBD</td>
  );
};

export default TdPatch;

// Style
const TdPatchStyle = styled.td`
  img {
    width: 30px;
  }
`;
