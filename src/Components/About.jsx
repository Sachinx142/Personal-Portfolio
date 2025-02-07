import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="about-section py-5 bg-light">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-4">
          <h2 className="section-title display-4 fw-bold">About Me</h2>
          <p className="text-muted">Get to know me better</p>
        </div>

        <div className="row align-items-center">
          {/* About Image */}
          <div className="col-lg-4 mb-4 mb-lg-0 text-center">
            <img
              src="/assets/img/portfolio/about.jpg"
              alt="Avatar of a web developer"
              className="img-fluid rounded-circle shadow"
              style={{ width: '200px', height: '200px' }}
            />
          </div>

          {/* About Text */}
          <div className="col-lg-8">
            <p className="about-bio lead text-muted">
              I am a passionate web developer with experience in building
              responsive and user-friendly websites. My goal is to create
              seamless digital experiences that engage users and drive results.
            </p>
            <p className="about-bio text-muted">
              With a background in both front-end and back-end technologies, I
              thrive on solving complex problems and delivering high-quality
              projects that exceed client expectations.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills mt-5">
          <h3 className="skills-title text-center mb-4 text-primary">My Skills</h3>
          <div className="row g-4">
            {/* HTML */}
            <div className="col-md-6 col-lg-3">
              <div className="card shadow-sm border-0">
                <div className="card-body text-center">
                  <h5 className="card-title">HTML</h5>
                  <p className="card-text text-muted">Building semantic and accessible layouts.</p>
                </div>
              </div>
            </div>
            {/* CSS */}
            <div className="col-md-6 col-lg-3">
              <div className="card shadow-sm border-0">
                <div className="card-body text-center">
                  <h5 className="card-title">CSS</h5>
                  <p className="card-text text-muted">Creating responsive and visually appealing designs.</p>
                </div>
              </div>
            </div>
            {/* JavaScript */}
            <div className="col-md-6 col-lg-3">
              <div className="card shadow-sm border-0">
                <div className="card-body text-center">
                  <h5 className="card-title">JavaScript</h5>
                  <p className="card-text text-muted">Making websites interactive and dynamic.</p>
                </div>
              </div>
            </div>
            {/* React */}
            <div className="col-md-6 col-lg-3">
              <div className="card shadow-sm border-0">
                <div className="card-body text-center">
                  <h5 className="card-title">React</h5>
                  <p className="card-text text-muted">Building reusable and scalable components.</p>
                </div>
              </div>
            </div>
            {/* Node.js */}
            <div className="col-md-6 col-lg-3">
              <div className="card shadow-sm border-0">
                <div className="card-body text-center">
                  <h5 className="card-title">Node.js</h5>
                  <p className="card-text text-muted">Efficiently building server-side applications.</p>
                </div>
              </div>
            </div>
            {/* Express.js */}
            <div className="col-md-6 col-lg-3">
              <div className="card shadow-sm border-0">
                <div className="card-body text-center">
                  <h5 className="card-title">Express.js</h5>
                  <p className="card-text text-muted">Designing RESTful APIs with simplicity and speed.</p>
                </div>
              </div>
            </div>
            {/* MongoDB */}
            <div className="col-md-6 col-lg-3">
              <div className="card shadow-sm border-0">
                <div className="card-body text-center">
                  <h5 className="card-title">MongoDB</h5>
                  <p className="card-text text-muted">Managing data with scalable NoSQL databases.</p>
                </div>
              </div>
            </div>
            {/* REST API */}
            <div className="col-md-6 col-lg-3">
              <div className="card shadow-sm border-0">
                <div className="card-body text-center">
                  <h5 className="card-title">REST API</h5>
                  <p className="card-text text-muted">Developing scalable and robust APIs for integration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
