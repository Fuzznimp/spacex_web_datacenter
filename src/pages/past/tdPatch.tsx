import React from 'react';
import styled from 'styled-components';

interface Props {
  data: object;
}

const TdPatch: React.FunctionComponent<Props> = props => {
  const { data }: { data: any } = props;
  return data! ? (
    <TdPatchStyle>
      <a href={data} target="_blank" rel="noopener noreferrer">
        <img src={data} alt="Mission Patch" />
      </a>
    </TdPatchStyle>
  ) : (
    <td>NONE</td>
  );
};

export default TdPatch;

// Style
const TdPatchStyle = styled.td`
  img {
    width: 30px;
  }
`;
