import React from "react";
import "./pages style/Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Projects = (props) => {
  return (
    <iv className="projects">
      <div className="portfolio-app">
        <div className="project-link-icon">
          <a href={props.githubLink} rel="noreferrer" target="_blank">
            <FontAwesomeIcon className="icon" icon={faGithub} />
          </a>
          <a href={props.webLink} rel="noreferrer" target="_blank">
            <FontAwesomeIcon className="icon" icon={faLink} />
          </a>
        </div>
        <div className="portfolio-content">
          <h4>{props.name}</h4>
          <p>{props.description}</p>
          <div className="portfolio-languages">
            <ul>
              {props.languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </iv>
  );
};

export default Projects;
