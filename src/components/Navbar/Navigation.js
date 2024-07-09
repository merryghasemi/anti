import React from 'react'

import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './Navigation.css';
import logo from './../../assets/Images/logo.png';

function Navigation() {
  return (
    <>
    
    <Container>
    <div className='row navigation'>

<div className='col-10'>
<nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid">
    <a className="navbar-brand text-warning logo" href="#"><img  src={logo}/></a>
    <button className="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/blog">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/search">Page2</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/compare">Compare</Link>
        </li>
     

      </ul>
    </div>
  </div>
</nav>
</div>

<div className='col-2 login '>

  <a>Login</a>
  <a className='btn text-white'>Sign Up </a>
</div>

    </div>
    </Container>
    
    </>
  )
}

export default Navigation;