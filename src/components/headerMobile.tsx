import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

interface HeaderMobileProps {}

interface HeaderMobileState {
  show: boolean;
}

class HeaderMobile extends Component<HeaderMobileProps, HeaderMobileState> {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const modalBody = {
      backgroundColor: "black",
    }
    return (
      <Navbar>
        <h1>SpaceX Data Center</h1>
        <NavBtn onClick={this.handleShow}>
          <i className="fas fa-space-shuttle" />
          <p>Navigation</p>
          <i className="fas fa-space-shuttle left" />
        </NavBtn>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Body style={modalBody}>
            <NavbarLinks>
              <Link to="/">Home</Link>
              <Link to="/Future">Future</Link>
              <Link to="/Past">Past</Link>
              <a
                href="https://www.spacex.com/webcast"
                target="_blank"
                rel="noopener noreferrer">
                Livestream
              </a>
              <Link to="/rockets">Rockets</Link>
              <Link to="/history">History</Link>
              <Link to="/about">About</Link>
            </NavbarLinks>
          </Modal.Body>
        </Modal>
      </Navbar>
    );
  }
}

export default HeaderMobile;

//Style
const Navbar = styled.div`
  padding-top: 50px;
  h1 {
    margin: 10px 0 !important;
    font-size: 5rem;
    letter-spacing: 8px;
  }
  @media (max-width: 767px) {
    /* smartphone */
    h1 {
      font-size: 3rem;
      letter-spacing: 5px;
    }
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
    &:hover {
      color: #007bff;
    }
  }
`;
