import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Contact.css";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      intial={{ opacity: 1 }}
      animate={{ opacity: 3 }}
      exit={{ opacity: 0 }}
    >
      <div className="head-text">
        <h1>
          GET IN <span>TOUCH</span>
        </h1>
      </div>
      <div className="contact">
        <div className="contact-message">
          <h2>LET'S DISCUSS!</h2>
          <p className="cont-msg">
            Get in touch with me to discuss new projects or creative ideas. I'm
            open to exploring opportunities and collaborating on your visions.
          </p>
          <div className="social-contact">
            <div className="social-media">
              <div>
                <FontAwesomeIcon className="media-icon" icon={faEnvelope} />
              </div>
              <div className="media">
                <p className="command-text">MAIL ME</p>{" "}
                <p>aanileleye@gmail.com</p>
              </div>
            </div>
            <div className="social-media">
              <div>
                <FontAwesomeIcon className="media-icon" icon={faPhone} />
              </div>
              <div className="media">
                <p className="command-text">CALL ME</p> <p>+234 815 912 4775</p>
              </div>
            </div>
            <div className="social-media-icons">
              <FontAwesomeIcon className="icon" icon={faXTwitter} />
              <FontAwesomeIcon className="icon" icon={faLinkedin} />
              <FontAwesomeIcon className="icon" icon={faGithub} />
            </div>
          </div>
        </div>
        <div className="contact-details">
          <div className="details-input">
            <div className="input-text">
              <p>Your Name</p>
              <input type="text" placeholder="How do i address?" />
            </div>
            <div className="input-text">
              <p>Your Email</p>{" "}
              <input
                type="email"
                placeholder="How can i get in touch with you?"
              />
            </div>
            <div className="input-text">
              <p>Subject</p>
              <input type="text" placeholder="What are we discussing about?" />
            </div>
          </div>
          <div className="message-text">
            <p>Your Message</p>{" "}
            <textarea placeholder="Kindly provide more information about what you'd like me to help you with. Thanks."></textarea>
          </div>
          <button className="message-btn">GET IN TOUCH</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
