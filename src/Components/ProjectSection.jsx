import React from 'react';


const projects = [
  {
    title: 'Project 1',
    image: '/assets/img/project-1.png',
    description: 'Description of Project 1.',
  },
  {
    title: 'Project 2',
    image: '/assets/img/project-2.png',
    description: 'Description of Project 2.',
  },
  {
    title: 'Project 3',
    image: '/assets/img/project-3.png',
    description: 'Description of Project 3.',
  },
  {
    title: 'Project 4',
    image: '/assets/img/project-4.png',
    description: 'Description of Project 4.',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title text-center text-primary my-3">My Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-6 col-sm-12 col-12 mb-2" key={index}>
              <div className="card h-100">
                <img src={project.image} height={200} alt={project.title} className="card-img-top" />
                <div className="card-body">
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-text">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
