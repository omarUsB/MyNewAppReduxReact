import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-3 mt-6 border-t border-info">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-2">About Us</h4>
            <p>App gestionne de stagiaire.</p>
          </div>
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-2">Links</h4>
            <ul className="list-none">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-2">Contact Us</h4>
            <address>
              <p>Email: <a href="mailto:info@example.com">SCHOOL212@gmail.com</a></p>
              <p>Phone: +123 456 7890</p>
            </address>
          </div>
        </div>
      </div>
      <div className="border-t border-info mt-2 pt-2 text-center">
        <p>&copy; 2024 Your App. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
