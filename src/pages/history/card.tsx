import React from 'react';
import { Card, Col } from 'react-bootstrap';
import styled from 'styled-components';
import CardButton from './cardButton';

interface HistoryCardProps {
  data: any;
}

export function HistoryCard({ data }: HistoryCardProps) {
  const previousDate = new Date(data.event_date_utc);
  const date =
    previousDate.getDate() +
    1 +
    '-' +
    previousDate.getMonth() +
    '-' +
    previousDate.getFullYear();

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
                  <CardButton key={key} data={link} />
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
