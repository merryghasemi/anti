import React from 'react'

import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation() {
  return (
    <>
    
    <div className='row bg-dark'>

<div className='col-10'>
<nav className="navbar navbar-expand-lg bg-dark ">
  <div className="container-fluid">
    <a className="navbar-brand text-warning" href="#">Test Project</a>
    <button className="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/blog">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>

<div className='col-2 login '>

  <a>Login</a>
  <a className='btn'>Sign Up </a>
</div>

    </div>
    
    </>
  )
}

export default Navigation;