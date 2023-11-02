import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Register from '../Register/Register';
// import { Form } from 'react-router-dom';

const Login = () => {
  return (
    <Container className='w-25 mx-auto'>
      <h2>Log In</h2>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email"
            name="email"
            placeholder="Enter email"
            required />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"
            name="password"
            placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log in
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Don't Have an Account?
          <Link to="/register"> go to Register</Link>
        </Form.Text>
        <br />
        <Form.Text className="text-success">
          Success
        </Form.Text>
        <br />
        <Form.Text className="text-danger">
          error
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;