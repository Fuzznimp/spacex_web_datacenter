import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

export function HeaderMobile(props) {
  const [showModal, setShowModal] = useState(false);

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleShowModal() {
    setShowModal(true);
  }

  return (
    <Navbar>
      <h1>SpaceX Data Center</h1>
      <NavBtn onClick={handleShowModal}>
        <i className="fas fa-space-shuttle" />
        <p>Navigation</p>
        <i className="fas fa-space-shuttle left" />
      </NavBtn>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Body
          style={{
            backgroundColor: 'black'
          }}>
          <NavbarLinks>
            <NavLink
              to="/"
              exact
              onClick={handleCloseModal}
              activeStyle={{
                color: '#1E90FF'
              }}>
              Home
            </NavLink>
            <NavLink
              to="/future"
              onClick={handleCloseModal}
              activeStyle={{
                color: '#1E90FF'
              }}>
              Future
            </NavLink>
            <NavLink
              to="/past"
              onClick={handleCloseModal}
              activeStyle={{
                color: '#1E90FF'
              }}>
              Past
            </NavLink>
            <a
              href="https://www.spacex.com/webcast"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCloseModal}>
              Livestream
            </a>
            <NavLink
              to="/rockets"
              onClick={handleCloseModal}
              activeStyle={{
                color: '#1E90FF'
              }}>
              Rockets
            </NavLink>
            <NavLink
              to="/history"
              onClick={handleCloseModal}
              activeStyle={{
                color: '#1E90FF'
              }}>
              History
            </NavLink>
            <NavLink
              to="/about"
              onClick={handleCloseModal}
              activeStyle={{
                color: '#1E90FF'
              }}>
              About
            </NavLink>
          </NavbarLinks>
        </Modal.Body>
      </Modal>
    </Navbar>
  );
}

//Style
const Navbar = styled.div`
  padding-top: 10px;
  h1 {
    font-size: 3rem;
    letter-spacing: 5px;
  }
`;

const NavBtn = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  p {
    margin: 0 10px;
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
`;

const NavbarLinks = styled.div`
  text-align: center;
  a {
    display: block;
    margin: 8px 0;
    color: white;
    text-decoration: none;
    font-size: 1.25rem;
    transition: 0.3s;
  }
`;
