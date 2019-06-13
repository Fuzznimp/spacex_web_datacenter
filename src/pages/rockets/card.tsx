import React from 'react';
import { Card, Carousel, Col } from 'react-bootstrap';
import styled from 'styled-components';

interface Props {
  data: object;
}

const RocketCard: React.FunctionComponent<Props> = props => {
  const { data }: { data: any } = props;
  console.log(data);
  return (
    <Col xs="auto">
      <Card bg="dark" text="white" style={{ width: '18rem' }}>
        <Carousel>
          {data.flickr_images.map(image => (
            <Carousel.Item>
              <a href={image} target="_blank" rel="noopener noreferrer">
                <img
                  className="d-block w-100"
                  src={image}
                  alt="Rocket Picture"
                />
              </a>
            </Carousel.Item>
          ))}
        </Carousel>
        <Card.Body>
          <Card.Title>{data.rocket_name}</Card.Title>
          <Card.Text>{data.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Details</small>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default RocketCard;

// Style
const CardStyle = styled.div`
`;
