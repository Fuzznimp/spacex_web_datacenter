import React from 'react';
import styled from 'styled-components';

interface TdLandingProps {
  landingSuccess: boolean;
}

export function TdLanding({ landingSuccess }: TdLandingProps) {
  if (landingSuccess === null) {
    return (
      <TdLandingStyle>
        <p>NONE</p>
      </TdLandingStyle>
    );
  } else if (landingSuccess) {
    return (
      <TdLandingStyle>
        <p className="success-true">SUCCEEDED</p>
      </TdLandingStyle>
    );
  }
  return (
    <TdLandingStyle>
      <p className="success-false">FAILED</p>
    </TdLandingStyle>
  );
}

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
