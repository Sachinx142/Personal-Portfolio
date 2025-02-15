import React from "react";


const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 95 },
  { name: "Express.js", level: 90 },
  { name: "MongoDB", level: 70 }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="text-dark fw-bold display-4">My Skills</h2>
          <p className="text-muted">Here are some of the technologies I specialize in:</p>
          <hr className="w-50 mx-auto" />
        </div>
        <div className="row g-4">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card shadow border-0 h-100 p-4 text-center">
                <div className="card-body">
                  <h5 className="text-dark fw-bold mb-3">{skill.name}</h5>
                  <div className="progress" style={{ height: "12px" }}>
                    <div 
                      className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: `${skill.level}%` }}
                      aria-valuenow={skill.level}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {skill.level}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

