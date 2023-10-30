import React from 'react';
import logo from '../../../../../Img/Narrative_logo_black_word_mark-01.svg';
import moment from 'moment';
import './Header.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";



const Header = () => {
  return (
    <Container>
      <div className='text-center'>
        <div>
          <img className='logoImg' src={logo} alt="" />
          <h6 className='text-secondary'>News</h6>
          <h1>Network</h1>
        </div>
        <div>
          <p><small className='text-secondary'>"Narrative News Network: Unveiling the Untold Stories That Matter."</small></p>

          <p>{moment().format("dddd, MMMM YYYY, h:mm a")}</p>
        </div>
      </div>
      <div className='d-flex m-2' >
        <Button variant="danger">Latest News</Button>
        <Marquee className='text-danger bg-light' speed={50}>
          India's Congress leader Sonia Gandhi has "strongly opposed" India's abstention on the voting on the recent UN resolution on the Israel-Hamas conflict and said that while her party unequivocally condemned Hamas' attacks, the tragedy is compounded with the Israeli state now focused on exacting revenge from a population that is largely as helpless as it is blameless.
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>

            </Nav>
            <Nav>
              <Nav.Link href="#deets">Profile</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button variant="secondary">Log in</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>

  );
};

export default Header;