import React from "react";
import "./Portfolio.css";
import Projects from "../pages/Projects";
import projectWorks from "../File/Projects";

import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <motion.div
      className="portfolio"
      intial={{ width: 1 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
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
    </motion.div>
  );
};

export default Portfolio;
