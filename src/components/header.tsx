import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <Navbar>
      <h1>SpaceX Data Center</h1>
      <NavbarLinks>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </NavbarLinks>
    </Navbar>
  );
};

export default Header;

//Style
const Navbar = styled.div`
  padding-top: 16px;
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
      color: #118943;
    }
  }
`;
