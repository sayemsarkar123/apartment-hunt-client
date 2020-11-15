import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
  <Link className="navbar-brand" to="#"><img style={{maxWidth: '100px'}} src="https://i.ibb.co/PNhb7Yd/Logo.png" alt=""/></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link font-weight-bold text-dark" to="#">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item ml-4">
        <Link className="nav-link font-weight-bold text-dark" to="#">About</Link>
      </li>
      <li className="nav-item ml-4">
        <Link className="nav-link font-weight-bold text-dark" to="/dashboard">Service</Link>
      </li>
      <li className="nav-item ml-4">
        <Link className="nav-link font-weight-bold text-dark" to="#">Concerns</Link>
      </li>
      <li className="nav-item ml-4">
        <Link className="nav-link font-weight-bold text-dark" to="#">Event</Link>
      </li>
      <li className="nav-item ml-4">
        <Link className="nav-link font-weight-bold text-dark" to="#">Contact</Link>
      </li>
      <li className="nav-item ml-4">
        <button style={{background: '#275a53'}} className="btn px-3 text-white">Login</button>
      </li>
    </ul>
  </div>
</nav>
    </div>
  );
};

export default Header;