import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <Navbar>
      <h1>SpaceX Data Center</h1>
      <NavbarLinks>
        <i className="fas fa-space-shuttle" />
        <Link to="/">Home</Link>
        <Link to="/Future">Future</Link>
        <Link to="/Past">Past</Link>
        <a
          href="https://www.spacex.com/webcast"
          target="_blank"
          rel="noopener noreferrer">
          Livestream
        </a>
        <Link to="/about">About</Link>
        <i className="fas fa-space-shuttle left" />
      </NavbarLinks>
    </Navbar>
  );
};

export default Header;

//Style
const Navbar = styled.div`
  padding-top: 50px;
  h1 {
    margin: 10px 0 !important;
    font-size: 5rem;
    letter-spacing: 8px;
  }
`;

const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    margin: 0 8px;
    color: white;
    text-decoration: none;
    font-size: 1.25rem;
    transition: 0.3s;
    &:hover {
      color: #007bff;
    }
  }
  .left {
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    unicode-bidi: bidi-override;
    direction: rtl;
  }
`;
