import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
       <footer class="footer text-light">
    <div class="container">
      <div class="row gy-5">
        {/* <!-- Brand Section --> */}
        <div class="col-lg-3 col-md-6">
          <h1 class="text-white fw-bold d-block">My<span class="text-primary">Portfolio</span></h1>
          <p class="mt-4">A creative portfolio showcasing my skills, projects, and experience in web development, design, and more.</p>
          <div class="social-links mt-4">
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-facebook"></i>
            </Link>
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-twitter"></i>
            </Link>
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-instagram"></i>
            </Link>
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-linkedin"></i>
            </Link>
          </div>
        </div>

        {/* <!-- Contact Section --> */}
        <div class="col-lg-3 col-md-6">
          <h3 class="text-light">Contact Me</h3>
          <div class="mt-4">
            <p><i class="fa fa-map-marker-alt me-2"></i>123 Main Street, City, Country</p>
            <p><i class="fa fa-phone-alt me-2"></i>+1-234-567-890</p>
            <p><i class="fa fa-envelope me-2"></i>yourname@example.com</p>
          </div>
        </div>

        {/* <!-- Quick Links Section --> */}
        <div class="col-lg-3 col-md-6">
          <h3 class="text-light">Quick Links</h3>
          <div class="mt-4 quick-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/project">Projects</Link>
            <Link to="/testimonial">Testimonial</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/* <!-- Newsletter Section --> */}
        <div class="col-lg-3 col-md-6">
          <h3 class="text-light">Subscribe</h3>
          <form class="newsletter-form mt-4">
            <input type="email" name="email" placeholder="Email Address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>

    <hr class="text-light mt-5 mb-4" />

    <div class="footer-bottom">
      <p>&copy; 2025 MyPortfolio. All rights reserved.</p>
    </div>
  </footer>
    </>
  )
}

export default Footer
