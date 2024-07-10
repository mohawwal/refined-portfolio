import React from "react";
import "./About.css";
import { useRef } from "react";
import LanguagesData from "../File/languages";
import LanguagesElement from "./languages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const About = (props) => {
	const constraintsRef = useRef(null);

	const textVariants = {
		initial: {
			x: 500,
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
		<div className="about">
			<div className="head-text">
				<motion.h1
					variants={textVariants}
					initial="initial"
					animate="animate"
				>
					ABOUT <span>ME</span>
				</motion.h1>
			</div>
			<motion.div
				ref={constraintsRef}
				className="container aboutImages"
			>
				<motion.img
					drag dragConstraints={constraintsRef}
					className="item"
					src={props.profileImg}
					alt=""
				/>
			</motion.div>
			<motion.div
				className="aboutDetails"
				variants={textVariants}
				initial="initial"
				animate="animate"
			>
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
			</motion.div>
			<motion.div
				className="about-btn"
				variants={textVariants}
				initial="initial"
				animate="animate"
			>
				<button>VIEW MY RESUME</button>
			</motion.div>

			<div className="about_lang">
				<div className="lang-step">
					{LanguagesData.map((language) => {
						return (
							<div
								className="lang"
								key={language.id}
							>
								<LanguagesElement language={language} />
							</div>
						);
					})}
				</div>
			</div>

			<div className="work">
				<motion.h2
					variants={textVariants}
					initial="initial"
					animate="animate"
				>
					WORK EXPERIENCE
				</motion.h2>
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
								<motion.h1
									variants={textVariants}
									initial="initial"
									animate="animate"
								>
									Toshies NFT -
								</motion.h1>
								<span> FRONTEND ENGINEER [REMOTE]</span>
							</div>
							<motion.p
								variants={textVariants}
								initial="initial"
								animate="animate"
							>
								I collaborated with a peer on Twitter to build a React-based
								website for the Toshies NFT project. The objective was to
								qualify for the project's whitelist by creating an informative
								platform that highlighted project details, founder information,
								and the upcoming mint date.
							</motion.p>
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
		</div>
	);
};

export default About;
