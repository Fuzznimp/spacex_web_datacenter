import React, { Component } from 'react';
import styled from 'styled-components';

interface launchDate {
  data: number;
}

interface countdownState {
  now: number;
}

class Countdown extends Component<launchDate, countdownState> {
  constructor(props) {
    super(props);
    this.state = {
      now: Math.floor(Date.now() / 1000)
    };
  }
  interval = 0;

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    this.setState({ now: Math.floor(Date.now() / 1000) });
  };

  render() {
    const { data } = this.props;
    const { now } = this.state;
    const delta = Math.floor(data - now);
    const seconds = delta % 60;
    const minutes = Math.floor(delta / 60) % 60;
    const hours = Math.floor(delta / 3600) % 24;
    const days = Math.floor(delta / 86400);
    return (
      <CountdownStyle>
        <CardStyle>
          {delta < 0 ? (
            <p>TBD</p>
          ) : (
            <p>
              {String(days).padStart(2, '0')}:
              {String(hours % 24).padStart(2, '0')}:
              {String(minutes % 60).padStart(2, '0')}:
              {String(seconds % 60).padStart(2, '0')}
            </p>
          )}
        </CardStyle>
      </CountdownStyle>
    );
  }
}

export default Countdown;

// Style
const CountdownStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardStyle = styled.div`
  /* width: 300px; */
  p {
    color: white;
    margin-bottom: 0;
    padding: 12px;
  }
`;
