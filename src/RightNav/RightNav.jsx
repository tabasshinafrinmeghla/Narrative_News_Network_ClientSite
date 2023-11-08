import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle, FaFacebookF, FaLinkedinIn, FaSkype, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../Img/bg.png';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../Firebase/Firebase.config';


const RightNav = () => {


  const auth = getAuth(app);
  const GoogleProvider = new GoogleAuthProvider();

  const provider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    // console.log("Sign in with google")

    signInWithPopup(auth, GoogleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.log('error', error.message);
      })
  }
  // const handleGithubSignIn = () = {
  //   signInWithPopup(auth, provider)
  //   .then(result => {
  //     const user = result.user;
  //     console.log(user);
  //   })
  //     .catch(error => {
  //       console.log('error', error.message);
  //     })

  //   }
  const handleGithubSignIn = () => {
    // console.log("sign in with Github ");
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.log("error", error.message);
      })
  }


  return (
    <>
      <div>
        <h4 className='m-3'>LogIn with</h4>
        <Button onClick={handleGoogleSignIn} className='m-2'
          variant="outline-primary"><FaGoogle /> Log in with Google</Button>
        <Button onClick={handleGithubSignIn} className='m-2' variant="outline-secondary"><FaGithub /> Log in with Github</Button>
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



      </div>



    </>

  );
};

export default RightNav;
