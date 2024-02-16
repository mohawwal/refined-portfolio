import React from "react";
import "./Body.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Body(props) {
  return (
    <motion.div
      className="body"
      intial={{ width: 1 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <div className="bodyImage">
        <img src={props.profileImg} alt="" />
      </div>
      <div className="space image-space"></div>
      <div className="body-space">
        <div className="bodyText">
          <p className="bodyGreet">HI THERE 😉 </p>
          <h2>
            I'm <span className="bodyName">Anileleye Awwal</span>
          </h2>
          <p>
            I am a passionate frontend developer with expertise in CSS, React,
            Angular, JavaScript, TypeScript. Driven by a constant desire to
            learn, I am currently expanding my skills in various aspects of
            software engineering.
          </p>
        </div>
        <div className="body_button right-button">
          <Link to="/About">
            <button>Explore</button>
          </Link>
        </div>
      </div>
      <div className="space"></div>
    </motion.div>
  );
}
