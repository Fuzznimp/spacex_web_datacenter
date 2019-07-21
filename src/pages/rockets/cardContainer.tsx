import React from 'react';
import { CardDeck, Row } from 'react-bootstrap';
import styled from 'styled-components';

import { RocketCard } from './card';

type RocketCardContainerProps = {
  data: any;
};

export function RocketCardContainer({ data }: RocketCardContainerProps) {
  return (
    <CardDeckStyle>
      <CardDeck>
        <Row>
          {data.rockets.map(rocket => (
            <RocketCard key={rocket.id} data={rocket} />
          ))}
        </Row>
      </CardDeck>
    </CardDeckStyle>
  );
}

const CardDeckStyle = styled.div`
  .card-deck {
    flex-direction: column;
    margin: 0px;
  }
  .row {
    justify-content: center;
  }
`;
