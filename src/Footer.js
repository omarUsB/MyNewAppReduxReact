import React from 'react';
import "../src/bootstrap-5.3.2-dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer rounded bg-dark m-2 border border-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-light">
            <h4>About Us</h4>
            <p>App gestionne de stagiaire.</p>
          </div>
          <div className="col-md-3 text-light">
            <h4>Links</h4>
            <ul className="list-unstyled">
              <li><Link to={'/#/Home'}>Home<Link/></li>
              
              <Link to={'/contact'}>Contact</Link>
            </ul>
          </div>
          <div className="col-md-3 text-light">
            <h4>Contact Us</h4>
            <address>
              <p>Email: <a href="mailto:info@example.com">SCHOOL212@gmail.com</a></p>
              <p>Phone: +123 456 7890</p>
            </address>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="text-center text-light">
            <p>&copy; 2024 Your App. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
