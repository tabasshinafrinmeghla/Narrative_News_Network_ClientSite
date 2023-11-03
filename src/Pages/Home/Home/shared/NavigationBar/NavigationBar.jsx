import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../Providers/AuthProviders';

const NavigationBar = () => {

  const { user ,logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(result => {
        const logOutUser = user.result
        console.log(logOutUser);
      })
      .catch(error => {
        console.log(error)
      })
  }


  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to={"/category/0"}>Home</Link>
              <Link to={"/about"}>About</Link>
              <Link to={"/Career"}>Career</Link>


            </Nav>
            <Nav>

              {
                user &&

                <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
              }


              {user ?
                <Button onClick={handleLogout} variant="secondary">Log Out</Button>
                :
                <Link to='/login'>
                  <Button variant="secondary">Log in</Button>
                </Link>
              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </Container>
  );
};

export default NavigationBar;