import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './Login.css'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {



  const { signIn } = useContext(AuthContext);
  const Navigate = useNavigate();
  const location = useLocation();
  console.log('login page location', location);

  const from = location.state?.from?.pathname || '/category/0';



  const handleLogIn = event => {

    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);




    signIn(email, password)
      .then(result => {
        const createdLogin = result.user;
        console.log(createdLogin);
        Navigate(from, { replace: true })
      })
      .catch(error => {
        console.log(error);
      })

  }


  return (
    <Container  className='w-25 mx-auto '  >

      

      <h2>Log In</h2>

      <Form onSubmit={handleLogIn}>
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
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
 <Form.Check type="checkbox" label="Check me out" />
</Form.Group> */}
        <Button variant="primary" type="submit">
          Log in
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Don't Have an Account?
          <Link to="/register"> go to Register</Link>
        </Form.Text>
        <br />
        {/* <Form.Text className="text-success">
 Success
</Form.Text>
<br />
<Form.Text className="text-danger">
 error
</Form.Text> */}
      </Form>

    </Container>
  );
};

export default Login;