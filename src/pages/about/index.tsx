import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <div>
      <h2>Hello</h2>
      <GithubLink>
        <a href="https://github.com/Fuzznimp/spacex_web_datacenter">
          <i className="fab fa-github" />
          RADAR, LE FILS DU COUTELAS
        </a>
      </GithubLink>
    </div>
  );
};

export default About;

// Style
const GithubLink = styled.div`
  font-size: 100px;
  a {
    text-decoration: none;
    color: white;
    transition: 0.3s;
    &:hover {
      color: #007bff;
    }
  }
`;
