import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './Routes/Routes';
import { RouterProvider } from 'react-router-dom';
import AuthProviders from './Providers/AuthProviders';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProviders><RouterProvider router={router}></RouterProvider></AuthProviders>


  </React.StrictMode>,
)
