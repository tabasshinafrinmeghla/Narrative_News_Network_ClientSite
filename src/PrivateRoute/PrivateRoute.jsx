import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ Children }) => {
  const { user } = useContext(AuthContext);

  const location = useLocation();
  console.log(location);




  if (user) {
    return Children;

  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;


};

export default PrivateRoute;


/**
 * check user is logged in or not 
 * if user is logged in , then allow them to visit the route
 * else redirect the user to the log in page 
 * set up the private router 
 * 
 * 
 * 
 * */ 