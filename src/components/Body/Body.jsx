import React from "react";
import "./Body.css";
import { Link } from "react-router-dom";

export default function Body(props) {
  return (
    <div className="body">
      <div className="bodyImage">
        <img src={props.profileImg} alt="" />
      </div>
      <div className="space image-space"></div>
      <div className="body-space">
        <div className="bodyText">
          <p className="bodyGreet">HI THERE </p>
          <h2>
            I'm <span className="bodyName">Anileleye Awwal</span>
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
            sapiente dolor. Dolore quia neque tempora corporis quis laborum
            nesciunt nemo, nihil explicabo expedita, id voluptas unde, aliquid
            nulla quae amet? Lorem
          </p>
        </div>
        <div className="body_button right-button">
          <Link to="/About">
            <button>Explore</button>
          </Link>
        </div>
      </div>
      <div className="space"></div>
    </div>
  );
}
