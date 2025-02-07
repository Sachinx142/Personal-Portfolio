import React from 'react'
import TestimonialSection from '../Components/TestimonialSection'
import HeroSection from '../Components/Herosection'

const ReviewsPage = () => {
  return (
    <>
            <HeroSection 
          title="Welcome to My Website"
          subtitle="Explore the amazing world of technology with us."
          buttonText="Get Started"
          buttonLink="#services"
         bgImage="/assets/img/portfolio/Testimonial.jpg"
          />
          <TestimonialSection/>
    </>
  )
}

export default ReviewsPage
