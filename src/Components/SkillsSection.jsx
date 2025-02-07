import React from 'react';


export default function SkillsSection() {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 95 },
    { name: "Express.js", level: 90 },
    { name: "MongoDB", level: 70 }
  ];

  return (
    <>
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title text-center">My Skills</h2>
          <div className="row">
            {skills.map((skill) => (
              <div key={skill.name} className="col-md-6 col-lg-4">
                <div className="skill mb-4">
                  <h5>{skill.name}</h5>
                  <div className="progress">
                    <div 
                      className="progress-bar bg-primary"
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
