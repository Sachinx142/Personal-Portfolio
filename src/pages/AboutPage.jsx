import React from 'react'
import HeroSection from '../Components/Herosection'
import AboutSection from '../Components/About'
import TestimonialSection from '../Components/TestimonialSection'

const AboutPage = () => {
  return (
    <>
      <HeroSection 
          title="Welcome to My Website"
          subtitle="Explore the amazing world of technology with us."
          buttonText="Get Started"
          buttonLink="#services"
          bgImage="/assets/img/portfolio/about.jpg" 
          />
        <AboutSection/>
        <TestimonialSection/>
    </>
  )
}

export default AboutPage
