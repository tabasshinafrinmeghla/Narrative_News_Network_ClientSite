import React from 'react';
import Header from '../Pages/Home/Home/shared/Header/Header';
import Footer from '../Pages/Home/Home/shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNave from '../LeftNav/LeftNave';
import RightNav from '../RightNav/RightNav';

import { Outlet } from 'react-router-dom';
import NavigationBar from '../Pages/Home/Home/shared/NavigationBar/NavigationBar';






const Main = () => {
  return (
    <div  >
      <Header></Header>

      <NavigationBar></NavigationBar>

      <Container >

        <Row>
          <Col lg={3}>
            <LeftNave></LeftNave>

          </Col>
          <Col lg={6}>
            <Outlet></Outlet>
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