import React from 'react';
import styled from 'styled-components';

interface Props {
  data: object;
}

const CardButton: React.FunctionComponent<Props> = props => {
  const { data }: { data: any } = props;

  const redditRegex = /reddit/g;
  const wikiRegex = /wikipedia/g;

  let fontawesome;

  if (data.match(redditRegex)) {
    fontawesome = <i className="fab fa-reddit-alien" />;
  } else if (data.match(wikiRegex)) {
    fontawesome = <i className="fab fa-wikipedia-w" />;
  } else {
    fontawesome = <i className="fas fa-rocket" />;
  }

  return (
    <FontawesomeStyle>
      <a href={data} target="_blank" rel="noopener noreferrer">
        {fontawesome}
      </a>
    </FontawesomeStyle>
  );
};

export default CardButton;

// Style
const FontawesomeStyle = styled.div`
  margin: 0 auto;
  a {
    color: white;
    text-decoration: none;
    font-size: 20px;
    .fa-reddit-alien {
      font-size: 23px;
    }
  }
`;
