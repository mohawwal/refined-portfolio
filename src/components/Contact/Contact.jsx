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

const Contact = () => {
  return (
    <div>
      <div className="head-text">
        <h1>
          GET IN <span>TOUCH</span>
        </h1>
      </div>
      <div className="contact">
        <div className="contact-message">
          <h2>LET'S DISCUSS!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            a reprehenderit quas odit asperiores veniam
          </p>
          <div className="social-contact">
            <div className="social-media">
              <FontAwesomeIcon className="media-icon" icon={faEnvelope} />
              <div className="media">
                <p className="command-text">MAIL ME</p>{" "}
                <p>aanileleye@gmail.com</p>
              </div>
            </div>
            <div className="social-media">
              <FontAwesomeIcon className="media-icon" icon={faPhone} />
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
    </div>
  );
};

export default Contact;
