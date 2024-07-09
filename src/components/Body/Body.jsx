import React from "react";
import "./Body.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Body(props) {
	const sliderVariants = {
		initial: {
			x: 0,
		},
		animate: {
			x: "-220%",
			transition: {
				repeat: Infinity,
				repeatType: "mirror",
				duration: 20,
			},
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
		scrollButton: {
			opacity: 1,
			y: 10,
			transition: {
				duration: 1,
			},
		},
	};

	return (
		<div className="body">
			<div className="bodyImage">
				<motion.img
         variants={textVariants} animate="scrollButton"
					src={props.profileImg}
					alt=""
				/>
			</div>
			<div className="space image-space"></div>
			<motion.div
				className="body-space"
				variants={textVariants}
				initial="initial"
				animate="animate"
			>
				<div className="bodyText">
					<p className="bodyGreet">HI THERE 😉 </p>
					<motion.h2 variants={textVariants}>
						I'm <span className="bodyName">Anileleye Awwal</span>
					</motion.h2>
					<motion.p variants={textVariants}>
						I am a passionate frontend developer with expertise in CSS, React,
						Angular, JavaScript, TypeScript. Driven by a constant desire to
						learn, I am currently expanding my skills in various aspects of
						software engineering.
					</motion.p>
				</div>
				<div className="body_button right-button">
					<Link to="/About">
						<button className="textBlack">Explore</button>
					</Link>
				</div>
			</motion.div>
			<motion.div
				className="sd slidingTextContainer"
				variants={sliderVariants}
				initial="initial"
				animate="animate"
			>
				SOFTWARE DEVELOPER
			</motion.div>
		</div>
	);
}
