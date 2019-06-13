import React from 'react';
import { CardDeck, Row } from 'react-bootstrap';
import styled from 'styled-components';

import Card from './card';

interface Props {
  data: object;
}

const CardContainer: React.FunctionComponent<Props> = props => {
  const { data }: { data: any } = props;
  return (
    <CardDeckStyle>
      <CardDeck>
        <Row>
          {data.history.map(event => (
            <Card key={event.id} data={event} />
          ))}
        </Row>
      </CardDeck>
    </CardDeckStyle>
  );
};

export default CardContainer;

const CardDeckStyle = styled.div`
  .card-deck {
    flex-direction: column;
    margin: 0px;
  }
  .row {
    justify-content: center;
  }
`;
