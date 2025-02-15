import React from "react";


const skills = [
  { title: "HTML", description: "Building semantic and accessible layouts." },
  { title: "CSS", description: "Creating responsive and visually appealing designs." },
  { title: "JavaScript", description: "Making websites interactive and dynamic." },
  { title: "React", description: "Building reusable and scalable components." },
  { title: "Node.js", description: "Efficiently building server-side applications." },
  { title: "Express.js", description: "Designing RESTful APIs with simplicity and speed." },
  { title: "MongoDB", description: "Managing data with scalable NoSQL databases." },
  { title: "REST API", description: "Developing scalable and robust APIs for integration." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container text-center">
        {/* Section Title */}
        <div className="mb-5">
          <h2 className="display-4 fw-bold text-dark">About Me</h2>
          <p className="text-muted">Get to know me better</p>
          <hr className="w-25 mx-auto" />
        </div>

        <div className="row align-items-center">
          {/* About Image */}
          <div className="col-md-4 text-center">
            <img
              src="/assets/img/portfolio/about.jpg"
              alt="Portrait of a web developer"
              className="img-fluid rounded-circle shadow-lg mb-4"
              style={{ width: '250px', height: '250px', objectFit: 'cover' }}
            />
          </div>

          {/* About Text */}
          <div className="col-md-8 text-start">
            <p className="lead text-dark">
              I am a passionate web developer with experience in building
              responsive and user-friendly websites. My goal is to create
              seamless digital experiences that engage users and drive results.
            </p>
            <p className="text-muted">
              With expertise in both front-end and back-end technologies, I
              thrive on solving complex problems and delivering high-quality
              projects that exceed client expectations. I am always eager to
              learn new technologies and stay up-to-date with industry trends.
            </p>
            <a href="#contact" className="btn btn-primary mt-3">Contact Me</a>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-5">
          <h3 className="text-primary fw-bold mb-4">My Skills</h3>
          <div className="row g-4">
            {skills.map((skill, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card shadow-sm border-0 h-100">
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold text-dark">{skill.title}</h5>
                    <p className="card-text text-muted">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

