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
import { faHandPointRight } from "@fortawesome/free-regular-svg-icons";

const About = (props) => {
  return (
    <div className="about">
      <div className="head-text">
        <h1>
          ABOUT <span>ME</span>
        </h1>
      </div>
      <div className="aboutDetails">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nemo
          quam, aliquam voluptas atque dolorum asperiores consequuntur,
          voluptatem, consequatur officiis architecto iste odit suscipit et
          perspiciatis laboriosam cupiditate doloremque modi. Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Rerum aliquid ducimus
          architecto cumque laudantium eligendi ipsa aspernatur quibusdam!
          Quidem deleniti ea iusto distinctio aspernatur rem veniam harum ut
          nisi architecto! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Sapiente eveniet earum quasi, ab aspernatur esse ex quo quis,
          non corporis architecto vitae,
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
              <p>AUGUST 2023 - NOVEMBER 2024</p>
            </div>
            <div className="experience-details">
              <div className="experience-head-text">
                <h1>BODEMAN -</h1>
                <span> FRONTEND ENGINEER [REMOTE]</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis recusandae pariatur doloribus inventore
                necessitatibus magnam aperiam error, fuga voluptatibus possimus
                reiciendis quis incidunt quisquam dolor earum quod beatae
                molestias eaque.
              </p>
            </div>
            <div className="experience-list">
              <ul>
                <li>
                  <FontAwesomeIcon icon={faHandPointRight} />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faHandPointRight} />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faHandPointRight} />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faHandPointRight} />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="aboutDetails"></div>
    </div>
  );
};

export default About;
