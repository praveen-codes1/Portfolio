import React from "react";
import "./Projects.css";

const projects = [
  {
    name: "Carpooling Web",
    link: "https://github.com/praveen-codes1/NammaCarpool",
  },
  {
    name: "ClassInSight",
    link: "https://github.com/praveen-codes1/AttenFence",
  },
  {
    name: "Ride ETA Predictor",
    link: "https://github.com/praveen-codes1/28JupiterJupyter",
  },
  {
    name: "Data Cleaning and Analytics",
    link: "https://public.tableau.com/views/Jupiter_Jupyter/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  },
];

const Projects = () => (
  <div className="projects-bg">
    <div className="projects-title" id="prj">PROJECTS</div>
    <div className="projects-list">
      {projects.map((proj, idx) => (
        <a
          key={proj.name}
          href={proj.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-pill-link"
        >
          <div className="project-pill">{proj.name}</div>
        </a>
      ))}
      {/* Render 3 empty pills for visual balance */}
      {[...Array(3)].map((_, idx) => (
        <div className="project-pill project-pill-empty" key={`empty-${idx}`}></div>
      ))}
    </div>
  </div>
);

export default Projects;
