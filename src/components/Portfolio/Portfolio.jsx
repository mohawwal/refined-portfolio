import React from "react";
import "./Portfolio.css";
import Projects from "../pages/Projects";
import projectWorks from "../File/Projects";


const Portfolio = () => {
  return (
    <div className="portfolio" >
      <div className="head-text">
        <h1>
          MY<span> PORTFOLIO</span>
        </h1>
      </div>
      <div className="project-portfolio">
        {projectWorks.map((item, i) => {
          return (
            <Projects
              key={i}
              name={item.name}
              description={item.description}
              languages={item.languages}
              githubLink={item.githubLink}
              webLink={item.webLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
