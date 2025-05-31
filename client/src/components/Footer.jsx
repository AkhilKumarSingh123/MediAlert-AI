

import React from 'react';
import { Link } from 'react-router-dom';
import About from "./About.jsx";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-100 text-gray-700 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* About Section */}
          <div className="lg:col-span-1 md:col-span-2">
            <Link to="/" className="text-xl font-bold text-blue-700">
              Medical Alert AI
            </Link>
            <div className="mt-4 space-y-2 text-sm">
              <p>KNIT Sultanpur Aryabhatt Hostel</p>
              <p>Uttar Pradesh, Sultanpur 228118</p>
              <p className="mt-2"><strong>Phone:</strong> <span>9918231485</span></p>
              <p><strong>Email:</strong> <span>medialert-services@gmail.com</span></p>
            </div>
            <div className="flex space-x-4 mt-4 text-xl text-blue-700">
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Useful Links</h4>
            <ul className="space-y-1 text-sm">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="#">Terms of service</Link></li>
              <li><Link to="#">Privacy policy</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Our Services</h4>
            <ul className="space-y-1 text-sm">
              <li><Link to="#">Real-Time Health Monitoring</Link></li>
              <li><Link to="#">Smart Emergency Alerts</Link></li>
              <li><Link to="#">Medi Health Assistance</Link></li>
              <li><Link to="#">Seperate Dashboard</Link></li>
              <li><Link to="#">Customizable Service Packages</Link></li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Working Hours</h4>
            <ul className="space-y-1 text-sm">
              <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 10:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
              <li>Emergency: 24/7 Available</li>
              <li>Support Email: medialert-services@gmail.com</li>
            </ul>
          </div>

          {/* Free Section 1 */}
          <div>
            <h4 className="text-lg font-semibold mb-2">ITS FREE</h4>
            <ul className="space-y-1 text-sm">
              <li><Link to="#">Access to general health tips</Link></li>
              <li><Link to="#">Privacy-Focused & Secure</Link></li>
              <li><Link to="#">Patient profile & medical history</Link></li>
              <li><Link to="#">Doctor Consultation</Link></li>
              <li><Link to="#">Dashboard</Link></li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center mt-10 text-sm border-t border-gray-300 pt-4">
          <p>© <span>Copyright</span> <strong className="px-1">MediAlert AI</strong> All Rights Reserved</p>
          <div className="mt-1">
            Designed and developed by Akhil Kumar Singh, Sachin Mishra, and Sandip Singh.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
