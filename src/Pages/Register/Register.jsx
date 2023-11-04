import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { useState } from 'react';

const Register = () => {

  // const [error, setError] = useState;

  const { createUser } = useContext(AuthContext);

  const [accepted, setAccepted] = useState(false);


  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photo, email, password)




    createUser(email, password)
      .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch(error => {


        console.log(error)
      })


  }

  const handleAccepted = event => {
    setAccepted(event.target.checked)
  }

  return (
    <Container className='w-25 mx-auto'>
      <h2>Register Here</h2>

      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text"
            name="name"
            placeholder="your Name"
            required />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control type="text"
            name="photo"
            placeholder="Photo URL"
            required />

        </Form.Group>
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
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Conform Password</Form.Label>
          <Form.Control type="password"
            name="conform"
            placeholder="Conform Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleAccepted}
            type="checkbox"
            name="accept"
            label={<>Accept <Link to="/terms">Terms and Conditions</Link></>} />
        </Form.Group>
        <Button variant="primary"
          /**
           * terms and condition accepted korle submit button click korte parbe 
           * */
          disabled={!accepted} type="submit">
          Register
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Already have an Account
          <Link to="/login"> go to Log In</Link>
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

export default Register;