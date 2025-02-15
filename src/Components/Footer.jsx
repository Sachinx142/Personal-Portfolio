import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/subscribe`, { email });
      setMessage(response.data.message);
      setEmail(""); // Clear input after success
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong, try again.");
    }
  };

  return (
    <>
      <footer className="footer text-light">
        <div className="container">
          <div className="row gy-5">
            {/* Brand Section */}
            <div className="col-lg-3 col-md-6">
              <h1 className="text-white fw-bold">My<span className="text-primary">Portfolio</span></h1>
              <p className="mt-4">A creative portfolio showcasing my skills, projects, and experience in web development, design, and more.</p>
              <div className="social-links mt-4">
                <Link to="#"><i className="fa fa-facebook"></i></Link>
                <Link to="#"><i className="fa fa-twitter"></i></Link>
                <Link to="#"><i className="fa fa-instagram"></i></Link>
                <Link to="#"><i className="fa fa-linkedin"></i></Link>
              </div>
            </div>

            {/* Contact Section */}
            <div className="col-lg-3 col-md-6">
              <h3 className="text-light">Contact Me</h3>
              <div className="mt-4">
                <p><i className="fa fa-map-marker-alt me-2"></i>123 Main Street, City, Country</p>
                <p><i className="fa fa-phone-alt me-2"></i>+1-234-567-890</p>
                <p><i className="fa fa-envelope me-2"></i>yourname@example.com</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-3 col-md-6">
              <h3 className="text-light">Quick Links</h3>
              <div className="mt-4 quick-links">
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/project">Projects</Link>
                <Link to="/testimonial">Testimonial</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="col-lg-3 col-md-6">
              <h3 className="text-light">Subscribe</h3>
              {message && <div className="alert alert-success">{message}</div>}
              {error && <div className="alert alert-danger">{error}</div>}
              <form className="newsletter-form mt-4" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Address" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <hr className="text-light mt-5 mb-4" />

        <div className="footer-bottom">
          <p>&copy; 2025 MyPortfolio. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
