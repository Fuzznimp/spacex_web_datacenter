import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Fade } from 'react-bootstrap';

interface latestLaunchDate {
  data: object;
}

interface state {
  now: number;
  isOpen: boolean;
}

class Countdown extends Component<latestLaunchDate, state> {
  constructor(props) {
    super(props);
    this.state = {
      now: Math.floor(Date.now() / 1000),
      isOpen: false
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
    const launch = this.props.data['launches'][0];
    const latestLaunch = launch.launch_date_unix;
    const missionName = launch.mission_name;
    const rocketName = launch.rocket.rocket_name;
    const launchSiteName = launch.launch_site.site_name;
    const missionDetails = launch.details;
    const missionPatch = launch.links.mission_patch;

    const { isOpen, now } = this.state;

    const delta = Math.floor(latestLaunch - now);
    const seconds = delta % 60;
    const minutes = Math.floor(delta / 60) % 60;
    const hours = Math.floor(delta / 3600) % 24;
    const days = Math.floor(delta / 86400);
    return (
      <UpcomingLaunchStyle>
        <LaunchInfos>
          <CardStyle>
            <p>Mission Name</p>
            <h2>{missionName}</h2>
          </CardStyle>
          <CardStyle>
            <p>Rocket Name</p>
            <h2>{rocketName}</h2>
          </CardStyle>
          <CardStyle>
            <p>Launch Site Name</p>
            <h2>{launchSiteName}</h2>
          </CardStyle>
        </LaunchInfos>
        <CountdownStyle>
          <CardStyle>
            <p>{String(days).padStart(2, '0')}</p>
            <span>days</span>
          </CardStyle>
          <CardStyle>
            <p>{String(hours % 24).padStart(2, '0')}</p>
            <span>hours</span>
          </CardStyle>
          <CardStyle>
            <p>{String(minutes % 60).padStart(2, '0')}</p>
            <span>minutes</span>
          </CardStyle>
          <CardStyle>
            <p>{String(seconds % 60).padStart(2, '0')}</p>
            <span>seconds</span>
          </CardStyle>
        </CountdownStyle>
        <Button
          onClick={() => this.setState({ isOpen: !isOpen })}
          aria-controls="mission-info"
          aria-expanded={isOpen}>
          Details
        </Button>
        <Fade in={isOpen}>
          <CollapseInfo id="mission-info">
            {missionPatch && <img src={missionPatch} alt="Mission Patch" />}
            <div>{missionDetails}</div>
          </CollapseInfo>
        </Fade>
      </UpcomingLaunchStyle>
    );
  }
}

export default Countdown;

// Style
const CountdownStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  p {
    font-size: 10rem;
    margin: 0;
    @media (max-width: 1200px) {
      font-size: 10vh;
    }
    @media (max-width: 600px) {
      font-size: 3rem;
    }
  }
  @media (max-width: 1200px) {
    padding: 0 200px;
  }
`;

const CardStyle = styled.div`
  width: 300px;
  p {

  }
`;

const UpcomingLaunchStyle = styled.div`
  padding-top: 5%;
`;

const LaunchInfos = styled.div`
  display: flex;
  justify-content: center;
`;

const CollapseInfo = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 60%;
  display: flex;
  justify-content: space-between
`;
