import React from "react";

const projects = [
  { title: "Chat App", image: "/assets/img/project-1.png", description: "A real-time chat application with instant messaging and user authentication." },
  { title: "E-Commerce Platform", image: "/assets/img/project-2.png", description: "A fully functional e-commerce platform with product listings, cart, and checkout." },
  { title: "News App", image: "/assets/img/project-3.png", description: "A dynamic news application fetching real-time news from various sources." },
  { title: "Food Delivery App", image: "/assets/img/project-4.png", description: "An intuitive food delivery app with restaurant listings and order tracking." },
  { title: "CRUD App", image: "/assets/img/CRUD.png", description: "A simple CRUD application for managing data with Create, Read, Update, and Delete operations." },
  { title: "Blog App", image: "/assets/img/Blog-App.png", description: "A blogging platform where users can create, edit, and publish blog posts." },
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