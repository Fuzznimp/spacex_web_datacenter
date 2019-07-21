import React from 'react';

type TdProps = {
  data: object;
};

export function Td({ data }: TdProps) {
  return <td>{data}</td>;
}
