import React from "react";
import "./Portfolio.css";
import Projects from "../pages/Projects";
import projectWorks from "../File/Projects";
import { motion } from "framer-motion";


const Portfolio = () => {

  const textVariants = {
    initial: {
      x: 500,
      opacity:0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1
      }
    },
    
  }

  const portfolioVariants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }



  return (
    <div className="portfolio" >
      <div className="head-text">
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          MY<span> PORTFOLIO</span>
        </motion.h1>
      </div>
      <motion.div 
        className="project-portfolio"
        variants={portfolioVariants}
        initial="hidden"
        animate="visible"
      >
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
      </motion.div>
    </div>
  );
};

export default Portfolio;
