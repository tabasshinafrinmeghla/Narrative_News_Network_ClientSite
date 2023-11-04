import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
  return (
    <div>
      <h2>Terms and Conditions</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, inventore! Fuga ipsum quaerat fugit dignissimos voluptas esse ad quibusdam nostrum.</p>
      <p>go back to <Link to="/register">Register</Link></p>
    </div>
  );
};

export default TermsAndCondition;