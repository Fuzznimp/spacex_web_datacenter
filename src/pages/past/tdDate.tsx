import React from 'react';

interface Props {
  data: object;
}

const TdDate: React.FunctionComponent<Props> = props => {
  const { data }: { data: any } = props;
  const previousDate = new Date(data);
  const date =
    previousDate.getDate() +
    1 +
    '-' +
    previousDate.getMonth() +
    '-' +
    previousDate.getFullYear();
  return <td>{date}</td>;
};

export default TdDate;
