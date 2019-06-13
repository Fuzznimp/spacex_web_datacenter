import React, { Component } from 'react';
import styled from 'styled-components';
import { Fade } from 'react-bootstrap';

interface latestLaunchDate {
  data: object;
}

interface countdownState {
  now: number;
  isOpen: boolean;
}

class Countdown extends Component<latestLaunchDate, countdownState> {
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
          <InfoCardStyle>
            <p>Mission Name</p>
            <h2>{missionName}</h2>
          </InfoCardStyle>
          <InfoCardStyle>
            <p>Rocket Name</p>
            <h2>{rocketName}</h2>
          </InfoCardStyle>
          <InfoCardStyle>
            <p>Launch Site Name</p>
            <h2>{launchSiteName}</h2>
          </InfoCardStyle>
        </LaunchInfos>
        <CountdownStyle>
          <CountdownCardStyle>
            <p>{String(days).padStart(2, '0')}</p>
            <span>days</span>
          </CountdownCardStyle>
          <CountdownCardStyle>
            <p>{String(hours % 24).padStart(2, '0')}</p>
            <span>hours</span>
          </CountdownCardStyle>
          <CountdownCardStyle>
            <p>{String(minutes % 60).padStart(2, '0')}</p>
            <span>minutes</span>
          </CountdownCardStyle>
          <CountdownCardStyle>
            <p>{String(seconds % 60).padStart(2, '0')}</p>
            <span>seconds</span>
          </CountdownCardStyle>
        </CountdownStyle>
        <i
          onClick={() => this.setState({ isOpen: !isOpen })}
          aria-controls="mission-info"
          aria-expanded={isOpen}
          className="fas fa-meteor"
        />
        <Fade in={isOpen}>
          <CollapseInfo id="mission-info">
            {missionPatch && (
              <img
                src={missionPatch}
                alt="Mission Patch"
                className="patch-mission"
              />
            )}
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
    @media (max-width: 767px) {
      font-size: 3vh;
    }
  }
`;

const InfoCardStyle = styled.div`
  width: 200px;
  @media (max-width: 767px) {
    /* smartphone */
    width: 100px;

    p {
      font-size: 0.75rem;
    }
    h2 {
      font-size: 1.25rem;
    }
  }
`;

const CountdownCardStyle = styled.div`
  width: 300px;
  @media (max-width: 1200px) {
    /* smartphone */
    p {
      margin: 0 10px;
    }
  }
  @media (max-width: 767px) {
    /* smartphone */
    p {
      font-size: 2rem;
      margin: 0 10px;
    }
  }
`;

const UpcomingLaunchStyle = styled.div`
  padding-top: 5%;
  i {
    font-size: 50px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      color: #1E90FF;
    }
  }
  @media (max-width: 767px) {
    padding-top: 10%;
  }
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
  justify-content: space-between;
  .patch-mission {
    height: 130px;
    margin-right: 40px;
  }
`;
