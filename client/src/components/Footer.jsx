
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-gray-700 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Always 2 columns on mobile, 3 on sm, 5 on lg */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">

          {/* About Section */}
          <div className="col-span-2 sm:col-span-1">
            <Link to="/" className="text-xl font-bold text-green-400 block mb-3">
              Medical Alert AI
            </Link>
            <p className="text-sm text-white break-words">Gorakhpur</p>
            <p className="text-sm break-words text-white">Uttar Pradesh</p>
            <p className="text-sm mt-2 text-white"><strong className="text-green-400">Phone:</strong> 9219739903</p>
            <p className="text-sm text-white"><strong className="text-green-400">Email:</strong> medialert.service@gmail.com</p>
            <div className="flex space-x-3 mt-3 text-lg text-green-500">
              <a href="#"><i className="bi bi-twitter-x" /></a>
              <a href="#"><i className="bi bi-facebook" /></a>
              <a href="#"><i className="bi bi-instagram" /></a>
              <a href="#"><i className="bi bi-linkedin" /></a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-green-400 text-base font-semibold mb-2">Useful Links</h4>
            <ul className="text-white space-y-1 text-sm break-words">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="#">Terms of service</Link></li>
              <li><Link to="#">Privacy policy</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-green-400 text-base font-semibold mb-2">Our Services</h4>
            <ul className="text-white space-y-1 text-sm break-words">
              <li><Link to="#">Real-Time Monitoring</Link></li>
              <li><Link to="#">Emergency Alerts</Link></li>
              <li><Link to="#">Health Assistance</Link></li>
              <li><Link to="#">Doctor Dashboard</Link></li>
              <li><Link to="#">Service Packages</Link></li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-green-400 text-base font-semibold mb-2">Working Hours</h4>
            <ul className="space-y-1 text-sm text-white break-words">
              <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 10:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
              <li>Emergency: 24/7</li>
              <li>Email: medialert.service@gmail.com</li>
            </ul>
          </div>

          {/* Free Access */}
          <div>
            <h4 className="text-base text-green-400 font-semibold mb-2">It's Free</h4>
            <ul className="text-white space-y-1 text-sm break-words">
              <li><Link to="#">Health Tips</Link></li>
              <li><Link to="#">Secure & Private</Link></li>
              <li><Link to="#">Profile Management</Link></li>
              <li><Link to="#">Doctor Consultation</Link></li>
              <li><Link to="#">User Dashboard</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-green-400 text-center mt-10 text-sm border-t border-gray-300 pt-4">
          <p>© {new Date().getFullYear()} <strong className="px-1">MediAlert AI</strong> | All Rights Reserved</p>
          <p className="mt-1">Designed by Akhil Kumar Singh, Sachin Mishra, and Sandip Singh</p>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
