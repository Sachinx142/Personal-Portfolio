import React from "react";


const testimonials = [
  {
    name: "John Doe",
    feedback: "This portfolio is amazing! The design is sleek and the projects are impressive.",
    position: "CEO, Company A"
  },
  {
    name: "Jane Smith",
    feedback: "I had a great experience working with this developer. Highly recommend!",
    position: "Project Manager, Company B"
  },
  {
    name: "Alice Johnson",
    feedback: "Professional and dedicated. The projects showcased here are top-notch.",
    position: "Designer, Company C"
  }
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="testimonial-section bg-light mt-3 mb-3">
      <div className="container">
        <h2 className="section-title text-center text-primary">Testimonials</h2>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow border-0" style={{ backgroundColor: "#f8f9fa" }}>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <p className="testimonial-feedback text-center text-dark">"{testimonial.feedback}"</p>
                  <h5 className="testimonial-name mt-3 text-primary">{testimonial.name}</h5>
                  <p className="testimonial-position mt-2 text-secondary">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

// Package.json dependencies
// {
//   "dependencies": {
//     "react": "^18.2.0",
//     "bootstrap": "^5.3.0"
//   }
// }
