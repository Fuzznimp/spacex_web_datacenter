import React from 'react';
import { previousDate } from '../../utils/previousDate';

type TdDateProps = {
  date: string;
};

export function TdDate({ date }: TdDateProps) {
  const previousDateFormated = previousDate(date);
  return <td>{previousDateFormated}</td>;
}
