import React, { useState } from 'react';

const allProjects = [
  { id: 1, title: "Project One", description: "Description of Project One" },
  { id: 2, title: "Project Two", description: "Description of Project Two" },
  { id: 3, title: "Project Three", description: "Description of Project Three" },
  { id: 4, title: "Project Four", description: "Description of Project Four" },
  { id: 5, title: "Project Five", description: "Description of Project Five" },
  { id: 6, title: "Project Six", description: "Description of Project Six" },
];

function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' ? allProjects : allProjects.filter(p => p.id === Number(filter));

  return (
    <section className="projects">
      <h1>Select Works</h1>
      <div className="filters">
        {[1,2,3,4,5,6].map(num => (
          <button key={num} onClick={() => setFilter(num.toString())} className={filter === num.toString() ? 'active' : ''}>{num}</button>
        ))}
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All Projects</button>
      </div>
      <div className="project-list">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-item">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
