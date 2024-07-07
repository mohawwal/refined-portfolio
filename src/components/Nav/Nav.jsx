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
import {motion} from "framer-motion"

const Front = (props) => {
	const [menu, setMenu] = useState(false);

	const [currentPage, setCurrentPage] = useState("home");

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

	const toggle = () => {
		setMenu(!menu);
	};

	const textVariants = {
        initial: {
            x: -500,
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
        scrollButton: {
            opacity: 0,
            y:10,
            transition: {
                duration: 2,
                repeat: Infinity
            }
        }
    }

	return (
		<div className="nav">
			<div className="navHeader">
				<nav>
					<div
						className={`hamburger ${menu ? "active" : ""}`}
						onClick={toggle}
					>
						<div></div>
						<div></div>
						<div></div>
					</div>
					<ul
						className="mobile-nav-list"
						style={{ display: menu ? "block" : "none" }}
						onClick={toggle}
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
					</ul>
				</nav>
			</div>

			<div className="navHome">
				<Link
					to="/"
					className={`screen-nav ${currentPage === 'home' ? 'screen-active' : ''}`}
          onClick={() => handlePageChange("home")}
				>
					<div>
						<FontAwesomeIcon
							className={`screen-icon}`}
							icon={faHouse}
						/>
					</div>
				</Link>
				<Link
					to="/ABOUT"
					className={`screen-nav ${currentPage === 'about' ? 'screen-active' : ''}`}
          onClick={() => handlePageChange("about")}
				>
					<div>
						<FontAwesomeIcon
							className={`screen-icon}`}
							icon={faUser}
						/>
					</div>
				</Link>
				<Link
					to="/PORTFOLIO"
					className={`screen-nav ${currentPage === 'portfolio' ? 'screen-active' : ''}`}
          onClick={() => handlePageChange("portfolio")}
				>
					<div>
						<FontAwesomeIcon
							className={`screen-icon}`}
							icon={faBriefcase}
						/>
					</div>
				</Link>
				<Link
					to="/CONTACT"
					className={`screen-nav ${currentPage === 'contact' ? 'screen-active' : ''}`}
          onClick={() => handlePageChange("contact")}
				>
					<div>
						<FontAwesomeIcon
							className={`screen-icon}`}
							icon={faEnvelopeOpen}
						/>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Front;
