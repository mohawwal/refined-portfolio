import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faHouse,
  faEnvelopeOpen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

const Front = (props) => {
  const [menu, setMenu] = useState(false);

  const toggle = () => {
    setMenu(!menu);
  };

  return (
    <div className="nav">
      <div className="navHeader">
        <nav>
          <div className={`hamburger ${menu ? "active" : ""}`} onClick={toggle}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <motion.ul
            className="mobile-nav-list"
            style={{ display: menu ? "block" : "none" }}
            onClick={toggle}
            intial={{ opacity: 1 }}
            animate={{ opacity: 3 }}
            exit={{ opacity: 0 }}
          >
            <Link to="/">
              <li>HOME</li>
            </Link>

            <Link to="/ABOUT">
              <li>ABOUT</li>
            </Link>

            <Link to="/PORTFOLIO">
              <li>PORTFOLIO</li>
            </Link>

            <Link to="/CONTACT">
              <li>CONTACT</li>
            </Link>
          </motion.ul>

          {/* <div className="mode" onClick={props.toggleMode}>
            <div className="dark">
              <img src={props.darkMode} alt="" />
            </div>
          </div> */}
        </nav>
      </div>
      <div className="navHome">
        <div className="screen-nav home-screen">
          {" "}
          <Link to="/">
            <FontAwesomeIcon className="screen-icon" icon={faHouse} />
          </Link>
        </div>
        <div className="screen-nav profile-screen">
          <Link to="/ABOUT">
            <FontAwesomeIcon className="screen-icon" icon={faUser} />
          </Link>
        </div>
        <div className="screen-nav portfolio-screen">
          <Link to="/PORTFOLIO">
            <FontAwesomeIcon className="screen-icon" icon={faBriefcase} />
          </Link>
        </div>
        <div className="screen-nav contact-screen">
          <Link to="/CONTACT">
            <FontAwesomeIcon className="screen-icon" icon={faEnvelopeOpen} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Front;
