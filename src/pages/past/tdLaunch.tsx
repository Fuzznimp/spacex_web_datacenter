import React from 'react';
import styled from 'styled-components';

interface Props {
  data: object;
}

const TdLaunch: React.FunctionComponent<Props> = props => {
  const { data }: { data: any } = props;

  if (data === null) {
    return (
      <TdLaunchStyle>
        <p>NONE</p>
      </TdLaunchStyle>
    );
  } else if (data === true) {
    return (
      <TdLaunchStyle>
        <p className="success-true">SUCESSED</p>
      </TdLaunchStyle>
    );
  }
  return (
    <TdLaunchStyle>
      <p className="success-false">FAILED</p>
    </TdLaunchStyle>
  );
};

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
