import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
    return (
      <Navbar>
        <h1>SpaceX Data Center</h1>
        <NavBtn onClick={this.handleShow}>
          <i className="fas fa-space-shuttle" />
          <p>Navigation</p>
          <i className="fas fa-space-shuttle left" />
        </NavBtn>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          {...this.props}
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
                onClick={this.handleClose}
                activeStyle={{
                  color: '#1E90FF'
                }}>
                Home
              </NavLink>
              <NavLink
                to="/Future"
                onClick={this.handleClose}
                activeStyle={{
                  color: '#1E90FF'
                }}>
                Future
              </NavLink>
              <NavLink
                to="/Past"
                onClick={this.handleClose}
                activeStyle={{
                  color: '#1E90FF'
                }}>
                Past
              </NavLink>
              <a
                href="https://www.spacex.com/webcast"
                target="_blank"
                rel="noopener noreferrer"
                onClick={this.handleClose}>
                Livestream
              </a>
              <NavLink
                to="/rockets"
                onClick={this.handleClose}
                activeStyle={{
                  color: '#1E90FF'
                }}>
                Rockets
              </NavLink>
              <NavLink
                to="/history"
                onClick={this.handleClose}
                activeStyle={{
                  color: '#1E90FF'
                }}>
                History
              </NavLink>
              <NavLink
                to="/about"
                onClick={this.handleClose}
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
}

export default HeaderMobile;

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
