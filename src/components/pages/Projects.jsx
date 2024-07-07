import React from "react";
import "./pages style/Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

const Projects = (props) => {
	const portfolioItem = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	};

	const textVariants = {
		initial: {
			x: -500,
			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 1,
				staggerChildren: 0.1,
			},
		},
	};

	return (
		<motion.div
			className="projects"
			variants={portfolioItem}
		>
			<div className="portfolio-app">
				<motion.div
					className="project-link-icon"
					variants={textVariants}
					initial="hidden"
					animate="visible"
				>
					<a
						href={props.githubLink}
						rel="noreferrer"
						target="_blank"
					>
						<FontAwesomeIcon
							className="icon"
							icon={faGithub}
						/>
					</a>
					<a
						href={props.webLink}
						rel="noreferrer"
						target="_blank"
					>
						<FontAwesomeIcon
							className="icon"
							icon={faLink}
						/>
					</a>
				</motion.div>
				<div className="portfolio-content">
					<h4>{props.name}</h4>
					<p>{props.description}</p>
					<div className="portfolio-languages">
						<ul>
							{props.languages.map((language, index) => (
								<li key={index}>{language}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Projects;
