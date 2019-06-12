import React from 'react';

interface Props {
  data: object;
}

const Td: React.FunctionComponent<Props> = props => {
  const { data }: { data: any } = props;
  return <td>{data}</td>;
};

export default Td;