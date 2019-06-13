import React from 'react';
import { Card } from 'react-bootstrap';

interface Props {
  data: object;
}

const RocketCard: React.FunctionComponent<Props> = props => {
  const { data }: { data: any } = props;
  console.log(data)
  return (
    <Card>
      <Card.Img variant="top" src={data.flickr_images[0]} />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
};

export default RocketCard;
