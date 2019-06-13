import React from 'react';
import { CardDeck, Row } from 'react-bootstrap';
import styled from 'styled-components';

import Card from './card';

interface Props {
  data: object;
}

const CardContainer: React.FunctionComponent<Props> = props => {
  const { data }: { data: any } = props;
  console.log(data.rockets);
  return (
    <CardDeckStyle>
      <CardDeck>
        <Row>
          {data.rockets.map(rocket => (
            <Card key={rocket.id} data={rocket} />
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
