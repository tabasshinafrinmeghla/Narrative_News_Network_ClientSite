import React from 'react';
import Header from '../Pages/Home/Home/shared/Header/Header';
import Footer from '../Pages/Home/Home/shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNave from '../LeftNav/LeftNave';
import RightNav from '../RightNav/RightNav';
import MainNav from '../MainNav/MainNav';

const Main = () => {
  return (
    <div>
      <Header></Header>

      <Container>

        <Row>
          <Col lg={3}>
            <LeftNave></LeftNave>

          </Col>
          <Col lg={6}>
            <h2>Main continue coming</h2>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>

    </div>
  );
};

export default Main;