import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <Navbar>
      <h1>SpaceX Data Center</h1>
      <NavbarLinks>
        <i className="fas fa-space-shuttle" />
        <NavLink
          to="/"
          exact
          activeStyle={{
            color: '#1E90FF'
          }}>
          Home
        </NavLink>
        <NavLink
          to="/future"
          activeStyle={{
            color: '#1E90FF'
          }}>
          Future
        </NavLink>
        <NavLink
          to="/past"
          activeStyle={{
            color: '#1E90FF'
          }}>
          Past
        </NavLink>
        <a
          href="https://www.spacex.com/webcast"
          target="_blank"
          rel="noopener noreferrer">
          Livestream
        </a>
        <NavLink
          to="/rockets"
          activeStyle={{
            color: '#1E90FF'
          }}>
          Rockets
        </NavLink>
        <NavLink
          to="/history"
          activeStyle={{
            color: '#1E90FF'
          }}>
          History
        </NavLink>
        <NavLink
          to="/about"
          activeStyle={{
            color: '#1E90FF'
          }}>
          About
        </NavLink>
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
  overflow: scroll;
  a {
    margin: 0 8px;
    color: white;
    text-decoration: none;
    font-size: 1.25rem;
    transition: 0.3s;
    &:hover {
      color: ##1E90FF;
    }
  }
  .left {
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    unicode-bidi: bidi-override;
    direction: rtl;
  }
  @media (max-width: 967px) {
    padding: 0 50px;
  }
`;
