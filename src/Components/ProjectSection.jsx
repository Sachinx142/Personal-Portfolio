import React from "react";

const projects = [
  { title: "Project 1", image: "/assets/img/project-1.png", description: "Description of Project 1." },
  { title: "Project 2", image: "/assets/img/project-2.png", description: "Description of Project 2." },
  { title: "Project 3", image: "/assets/img/project-3.png", description: "Description of Project 3." },
  { title: "Project 4", image: "/assets/img/project-4.png", description: "Description of Project 4." },
  { title: "Project 5", image: "/assets/img/CRUD.png", description: "Description of Project 5." }
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="text-dark fw-bold display-4">My Projects</h2>
          <p className="text-muted">Some of the projects I have worked on:</p>
          <hr className="w-50 mx-auto" />
        </div>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card shadow border-0 h-100">
                <img src={project.image} className="card-img-top" alt={project.title} style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body text-center">
                  <h5 className="card-title text-dark fw-bold">{project.title}</h5>
                  <p className="card-text text-muted">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection