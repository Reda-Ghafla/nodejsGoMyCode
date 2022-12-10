import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="container">
      <div className="logo">Logo</div>
      <div className="link">
        <ul className="list">
          <li className="item">
            <a href="/">Home</a>
          </li>
          <li className="item">
            <a href="/services">Our Services</a>
          </li>
          <li className="item">
            <a href="/contact">Contact us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
