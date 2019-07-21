import React from 'react';

type TdDateProps = {
  date: string;
};

export function TdDate({ date }: TdDateProps) {
  const previousDate = new Date(date);
  const previousDateFormated =
    previousDate.getDate() +
    1 +
    '-' +
    previousDate.getMonth() +
    '-' +
    previousDate.getFullYear();
  return <td>{previousDateFormated}</td>;
}
