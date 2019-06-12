import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutContainer>
      <h2>Developed by Anthony Montaigne</h2>
      <GithubLink>
        <a
          href="https://github.com/Fuzznimp/spacex_web_datacenter"
          target="_blank">
          <i className="fab fa-github-square" />
        </a>
        <a
          href="https://www.linkedin.com/in/anthony-montaigne-abb210176/"
          target="_blank">
          <i className="fab fa-linkedin" />
        </a>
      </GithubLink>
    </AboutContainer>
  );
};

export default About;

// Style
const AboutContainer = styled.div`
  margin: 200px 0;
`;

const GithubLink = styled.div`
  display: flex;
  justify-content: center;
  font-size: 80px;
  a {
    text-decoration: none;
    color: white;
    margin: 0 30px;
    transition: 0.3s;
    &:hover {
      color: #007bff;
    }
  }
`;
