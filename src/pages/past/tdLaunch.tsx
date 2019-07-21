import React from 'react';
import styled from 'styled-components';

type TdLaunchProps = {
  launchSuccess: boolean;
};

export function TdLaunch({ launchSuccess }: TdLaunchProps) {
  if (launchSuccess === null) {
    return (
      <TdLaunchStyle>
        <p>NONE</p>
      </TdLaunchStyle>
    );
  } else if (launchSuccess) {
    return (
      <TdLaunchStyle>
        <p className="success-true">SUCCEEDED</p>
      </TdLaunchStyle>
    );
  }
  return (
    <TdLaunchStyle>
      <p className="success-false">FAILED</p>
    </TdLaunchStyle>
  );
}

export default TdLaunch;

// Style
const TdLaunchStyle = styled.td`
  color: white;
  .success-true {
    color: green;
  }
  .success-false {
    color: red;
  }
`;
