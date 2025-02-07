import React from 'react';

const HeroSection = ({ title, subtitle, buttonText, buttonLink, bgImage }) => {
  return (
    <section 
      className="hero bg-dark text-white d-flex align-items-center justify-content-center text-center"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' ,height:550}}
    >
      <div className="container">
        <h1 className="display-3 fw-bold text-dark">{title}</h1>
        <p className="lead text-dark">{subtitle}</p>
        <a href={buttonLink} className="btn btn-primary btn-lg mt-3">{buttonText}</a>
      </div>
    </section>
  );
};

export default HeroSection;
