import React from 'react';
import { Card, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { HistoryCardButton } from './cardButton';
import { previousDate } from '../../utils/previousDate';

type HistoryCardProps = {
  data: any;
};

export function HistoryCard({ data }: HistoryCardProps) {
  const date = previousDate(data.event_date_utc);

  return (
    <HistoryCardStyle>
      <Col xs="auto">
        <Card bg="dark" text="white" style={{ width: '20rem', margin: '20px' }}>
          <Card.Header>{date}</Card.Header>
          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text style={{ textAlign: 'justify' }}>
              {data.details}
            </Card.Text>
            <BottomLinks>
              {Object.values(data.links)
                .filter(Boolean)
                .map((link: any, key) => (
                  <HistoryCardButton key={key} data={link} />
                ))}
            </BottomLinks>
          </Card.Body>
        </Card>
      </Col>
    </HistoryCardStyle>
  );
}

// Style
const HistoryCardStyle = styled.div`
  a {
    text-decoration: none;
  }
  small {
    color: white !important;
    font-size: 14px;
  }
`;

const BottomLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
