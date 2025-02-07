import React, { useEffect, useState } from "react";
import "../App.css";
import AboutSection from "../Components/About";
import SkillsSection from "../Components/SkillsSection";
import ProjectsSection from "../Components/ProjectSection";
import TestimonialSection from "../Components/TestimonialSection";
import ContactForm from "../Components/ContactForm";
const Home = () => {
  const texts = [
    "I Am Full-Stack Developer",
    "I Am Build Modern Web Applications.",
    "I'm a Creative Problem Solver.",
    "I Am Backend Developer",
    "I Am Frontend Developer",
    "I Am Mern Stack Developer",
  ];

  const [currentText, setcurrentText] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentString = texts[textIndex];
    let typingSpeed = isDeleting ? 50 : 150;

    if (!isDeleting && charIndex === currentString.length) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    const timeout = setTimeout(() => {
      setcurrentText(
        currentString.substring(0, charIndex + (isDeleting ? -1 : 1))
      );
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <>
      <div className="hero-section">
        <div className="hero-content">
          {/* Avatar Image */}
          <img
            src="/assets/img/portfolio/avatar.jpeg"
            alt="Avatar"
            className="avatar-image"
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
          {/* Hero Title */}
          <h1 className="hero-title">Welcome to My Portfolio</h1>

          {/* Dynamic Text */}
          <h2 className="hero-subtitle">{currentText}</h2>

          {/* Description */}
          <p className="hero-description">
            I specialize in designing and developing scalable, beautiful, and
            functional web solutions. Let's work together to bring your ideas to
            life!
          </p>

          {/* Call to Action */}
          <div className="cta-buttons mb-4">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline-light">
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialSection />
      <ContactForm />
    </>
  );
};

export default Home;
