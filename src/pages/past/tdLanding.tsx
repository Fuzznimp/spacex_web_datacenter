import React from 'react';
import styled from 'styled-components';

interface Props {
  data: object;
}

const TdLanding: React.FunctionComponent<Props> = props => {
  const { data }: { data: any } = props;

  if (data === null) {
    return (
      <TdLandingStyle>
        <p>NONE</p>
      </TdLandingStyle>
    );
  } else if (data === true) {
    return (
      <TdLandingStyle>
        <p className="success-true">SUCESSED</p>
      </TdLandingStyle>
    );
  }
  return (
    <TdLandingStyle>
      <p className="success-false">FAILED</p>
    </TdLandingStyle>
  );
};

export default TdLanding;

// Style
const TdLandingStyle = styled.td`
  color: white;
  .success-true {
    color: green;
  }
  .success-false {
    color: red;
  }
`;
