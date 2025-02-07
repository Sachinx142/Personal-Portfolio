import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">PortFolio</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav justify-content-center me-auto mb-2 mb-lg-0 w-100">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/project">Projects</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/testimonial">Testimonial</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

      
    </>
  )
}
