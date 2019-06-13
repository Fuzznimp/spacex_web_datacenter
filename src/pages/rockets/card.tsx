import React from 'react';
import { Card, Carousel, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  data: object;
}

const RocketCard: React.FunctionComponent<Props> = props => {
  const { data }: { data: any } = props;
  console.log(data);
  return (
    <Col xs="auto">
      <Card
        bg="dark"
        text="white"
        style={{ width: '20rem', borderRadius: '5px', margin: '20px' }}>
        <Carousel>
          {data.flickr_images.map(image => (
            <Carousel.Item>
              <a href={image} target="_blank" rel="noopener noreferrer">
                <img
                  className="d-block w-100"
                  src={image}
                  alt="Rocket Picture"
                  style={{
                    height: '200px',
                    borderTopRightRadius: '5px',
                    borderTopLeftRadius: '5px'
                  }}
                />
              </a>
            </Carousel.Item>
          ))}
        </Carousel>
        <Card.Body>
          <Card.Title>{data.rocket_name}</Card.Title>
          <Card.Text style={{ textAlign: 'justify' }}>
            {data.description}
          </Card.Text>
        </Card.Body>
        <CardFooterStyle>
          <Link to={`/rockets/${data.rocket_id}`}>
            <Card.Footer>
              <small className="text-muted">Details</small>
            </Card.Footer>
          </Link>
        </CardFooterStyle>
      </Card>
    </Col>
  );
};

export default RocketCard;

// Style
const CardFooterStyle = styled.div`
  a {
    text-decoration: none;
  }
  small {
    color: white !important;
    font-size: 14px;
  }
`;
