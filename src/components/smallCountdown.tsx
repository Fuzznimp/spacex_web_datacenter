import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export function SmallCountdown(props: any) {
  const [dateNow, setDateNow] = useState(Math.floor(Date.now() / 1000));
  let interval = 0;
  console.log(typeof props);
  const futureDate = props.futureDate;

  function tick() {
    setDateNow(Math.floor(Date.now() / 1000));
  }

  useEffect(() => {
    interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const delta = Math.floor(futureDate - dateNow);
  const seconds = delta % 60;
  const minutes = Math.floor(delta / 60) % 60;
  const hours = Math.floor(delta / 3600) % 24;
  const days = Math.floor(delta / 86400);

  return (
    <CountdownStyle>
      {delta < 0 ? (
        <p>TBD</p>
      ) : (
        <p>
          {String(days).padStart(2, '0')}:{String(hours % 24).padStart(2, '0')}:
          {String(minutes % 60).padStart(2, '0')}:
          {String(seconds % 60).padStart(2, '0')}
        </p>
      )}
    </CountdownStyle>
  );
}

// Style
const CountdownStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: white;
    margin-bottom: 0;
    padding: 12px;
  }
`;
