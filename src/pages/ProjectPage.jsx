import React from 'react'
import TestimonialSection from '../Components/TestimonialSection'
import ProjectsSection from '../Components/ProjectSection'
import HeroSection from '../Components/Herosection'

const ProjectPage = () => {
  return (
    <>
      <HeroSection
          title="Welcome to My Website"
          subtitle="Explore the amazing world of technology with us."
          buttonText="Get Started"
          buttonLink="#services"
           bgImage="/assets/img/portfolio/Projects.jpg"
          />
        <ProjectsSection/>
        <TestimonialSection/>
    </>
  )
}

export default ProjectPage
