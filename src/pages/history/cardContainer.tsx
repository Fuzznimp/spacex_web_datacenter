import React from 'react';
import { CardDeck, Row } from 'react-bootstrap';
import styled from 'styled-components';

import { HistoryCard } from './card';

interface HistoryCardContainerProps {
  data: any;
}

export function HistoryCardContainer({ data }: HistoryCardContainerProps) {
  return (
    <CardDeckStyle>
      <CardDeck>
        <Row>
          {data.history.map(event => (
            <HistoryCard key={event.id} data={event} />
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
