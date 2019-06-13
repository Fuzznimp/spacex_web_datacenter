import React from 'react';
import { CardDeck } from 'react-bootstrap';

import Card from './card';

interface Props {
  data: object;
}

const CardContainer: React.FunctionComponent<Props> = props => {
  const { data }: { data: any } = props;
  console.log(data.rockets);
  return (
    <CardDeck>
      {data.rockets.map(rocket => (
        <Card key={rocket.id} data={rocket} />
      ))}
    </CardDeck>
  );
};

export default CardContainer;
