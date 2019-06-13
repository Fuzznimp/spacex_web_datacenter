import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutContainer>
      <h2>Developed and maintained by</h2>
      <h2>Anthony Montaigne</h2>
      <MediaLinks>
        <a
          href="https://github.com/Fuzznimp/spacex_web_datacenter"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fab fa-github-square" />
        </a>
        <a
          href="https://www.linkedin.com/in/anthony-montaigne-abb210176/"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fab fa-linkedin" />
        </a>
      </MediaLinks>
      <h3>Special thanks to:</h3>
      <p>
        <a
          href="https://www.charlesomer.co.uk/"
          target="_blank"
          rel="noopener noreferrer">
          <strong>Charles Omer</strong>
        </a>
        for his
        <a
          href="https://spacexdata.herokuapp.com/graphql"
          target="_blank"
          rel="noopener noreferrer">
          <strong>GraphQL API</strong>
        </a>
      </p>
      <p>
        <a
          href="http://typodermicfonts.com/about/"
          target="_blank"
          rel="noopener noreferrer">
          <strong>Ray Larabie</strong>
        </a>
        for his awesome
        <a
          href="http://typodermicfonts.com/nasalization"
          target="_blank"
          rel="noopener noreferrer">
          <strong>FONT</strong>
        </a>
      </p>
      <p>and above all</p>
      <p>
        <strong>
          <a
            href="https://www.spacex.com/"
            target="_blank"
            rel="noopener noreferrer">
            <strong>SpaceX</strong>
          </a>
        </strong>
        for their amazing
        <a
          href="https://github.com/r-spacex/SpaceX-API"
          target="_blank"
          rel="noopener noreferrer">
          <strong>API</strong>
        </a>
      </p>
    </AboutContainer>
  );
};

export default About;

// Style
const AboutContainer = styled.div`
  margin: 100px 0;
  h3 {
    margin-bottom: 20px;
  }
  a {
    text-decoration: none;
    color: white;
    margin: 0 5px;
    transition: 0.3s;
    &:hover {
      color: #1e90ff;
    }
  }
  @media (max-width: 767px) {
    /* smartphone */
    margin: 30px;
  }
`;

const MediaLinks = styled.div`
  display: flex;
  justify-content: center;
  font-size: 80px;
  margin-bottom: 50px;
  a {
    text-decoration: none;
    color: white;
    margin: 0 30px;
    transition: 0.3s;
    &:hover {
      color: #1e90ff;
    }
  }
`;
