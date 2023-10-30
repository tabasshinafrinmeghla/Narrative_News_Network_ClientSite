import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle, FaFacebookF, FaLinkedinIn, FaSkype, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../Img/bg.png'

const RightNav = () => {
  return (
    <>
      <div>
        <h4 className='m-3'>LogIn with</h4>
        <Button className='m-2'
          variant="outline-primary"><FaGoogle /> Log in with Google</Button>
        <Button className='m-2' variant="outline-secondary"><FaGithub /> Log in with Github</Button>
      </div>
      <div>
        <h3>Find Us On </h3>
        <ListGroup>
          <ListGroup.Item><FaFacebookF></FaFacebookF> Facebook</ListGroup.Item>
          <ListGroup.Item><FaLinkedinIn></FaLinkedinIn> linkedIn</ListGroup.Item>
          <ListGroup.Item><FaSkype></FaSkype> Skype </ListGroup.Item>
          <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
          <ListGroup.Item><FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img className='my-2 py-2' src={bg} alt="" />
        <div>
          <h1>hello</h1>
        </div>
      </div>
    </>

  );
};

export default RightNav;