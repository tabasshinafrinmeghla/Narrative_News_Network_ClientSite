import React from 'react';
import Header from '../../Home/shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNave from '../../../../LeftNav/LeftNave';
import { Outlet } from 'react-router-dom';
import RightNav from '../../../../RightNav/RightNav';
import Footer from '../../Home/shared/Footer/Footer';

const News_Layout = () => {
  return (
    <div>
      <Header></Header>

      <Container>

        <Row>

          <Col lg={9}>
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

export default News_Layout;