import React from 'react';
import styled from 'styled-components';

type TdPatchProps = {
  patch: string;
};

export function TdPatch({ patch }: TdPatchProps) {
  return patch ? (
    <TdPatchStyle>
      <a href={patch} target="_blank" rel="noopener noreferrer">
        <img src={patch} alt="Mission Patch" />
      </a>
    </TdPatchStyle>
  ) : (
    <td>TBD</td>
  );
}

// Style
const TdPatchStyle = styled.td`
  img {
    width: 30px;
  }
`;
