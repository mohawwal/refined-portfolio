import React from "react";
import "./About.css";
import angular from "../File/Image/angular-icon.png";
import javascript from "../File/Image/javascript-programming-language-icon.png";
import typescript from "../File/Image/typescript-programming-language-icon.png";
import react from "../File/Image/react-js-icon.png";
import firebase from "../File/Image/google-firebase-icon.png";
import nodejs from "../File/Image/node-js-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

const About = (props) => {
  return (
    <motion.div
      className="about"
      intial={{ opacity: 1 }}
      animate={{ opacity: 3 }}
      exit={{ opacity: 0 }}
    >
      <div className="head-text">
        <h1>
          ABOUT <span>ME</span>
        </h1>
      </div>
      <div className="aboutImages">
        <img src={props.profileImg} alt="" />
      </div>
      <div className="aboutDetails">
        <p>
          I am a dedicated <span>Frontend developer</span> proficient in
          <span> React, Angular, TypeScript, </span> and <span>JavaScript</span>
          . I am deeply passionate about crafting exceptional web experiences
          and continuously expanding my skill set in software engineering. With
          a strong work ethic and unwavering commitment, I thrive in
          collaborative environments where I can contribute my creativity and
          expertise to drive projects forward. My goal is to leverage my skills
          to create innovative and user-friendly digital solutions that make a
          lasting impact.
        </p>
      </div>
      <div className="about-btn">
        <button>VIEW MY RESUME</button>
      </div>
      <div className="about_lang">
        <div className="lang">
          <div className="about_img">
            <img src={react} alt="" />
            <p>REACT</p>
          </div>
          <div className="about_img">
            <img src={javascript} alt="" />
            <p>JAVASCRIPT</p>
          </div>
          <div className="about_img">
            <img src={angular} alt="" />
            <p>ANGULAR</p>
          </div>
          <div className="about_img">
            <img src={typescript} alt="" />
            <p>TYPESCRIPT</p>
          </div>
          <div className="about_img">
            <img src={firebase} alt="" />
            <p>FIREBASE</p>
          </div>
          <div className="about_img">
            <img src={nodejs} alt="" />
            <p>NODE JS</p>
          </div>
        </div>
      </div>
      <div className="work">
        <h2>WORK EXPERIENCE</h2>
        <div className="work-details">
          <div className="work-list">
            <div className="work-icon">
              <FontAwesomeIcon
                className="work-screen-icon"
                icon={faBriefcase}
              />
            </div>
            <div className="work-line"></div>
          </div>
          <div className="work-experience">
            <div className="date">
              <p>JANUARY 2023 - MARCH 2024</p>
            </div>
            <div className="experience-details">
              <div className="experience-head-text">
                <h1>Toshies NFT -</h1>
                <span> FRONTEND ENGINEER [REMOTE]</span>
              </div>
              <p>
                I collaborated with a peer on Twitter to build a React-based
                website for the Toshies NFT project. The objective was to
                qualify for the project's whitelist by creating an informative
                platform that highlighted project details, founder information,
                and the upcoming mint date.
              </p>
            </div>
            <div className="experience-list">
              <ul>
                <li>
                  👉🏼
                  <p>
                    Developed a responsive and user-friendly website using
                    React, Javascript and CSS to effectively present essential
                    project information.
                  </p>
                </li>
                <li>
                  👉🏼
                  <p>
                    Collaborated remotely with a fellow developer, utilizing Git
                    for version control to ensure efficient code management and
                    collaboration.{" "}
                  </p>
                </li>
                <li>
                  👉🏼
                  <p>
                    Successfully contributed to the project's achievement of
                    whitelist qualification through the completion of the
                    website.{" "}
                  </p>
                </li>
                <li>
                  👉🏼
                  <p>
                    Demonstrated strong communication skills by coordinating
                    design and functionality decisions with the project partner.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="aboutDetails"></div>
    </motion.div>
  );
};

export default About;
