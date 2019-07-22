import React from 'react';
import styled from 'styled-components';

type TdProps = {
  data: object;
};

export function Td({ data }: TdProps) {
  return <TdStyle>{data}</TdStyle>;
}

const TdStyle = styled.td`
  padding-top: 15px;
`;
