import {
	faGithub,
	faLinkedin,
	faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { useEffect } from "react";

import loadingCar from "../File/Image/Moving car.gif";
import loadingBall from "../File/Image/loading.gif";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Contact.css";

import { Field, ErrorMessage, useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
//import ReCAPTCHA from "react-google-recaptcha";

import axios from "axios";
import { motion } from "framer-motion";

const Contact = () => {
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

	// const [isRecapChecked, setRecapChecked] = useState(false);

	// const onChange = () => {
	// 	console.log("ReCAPTCHA clicked");
	// 	setRecapChecked(true);
	// };

	const [isHuman, setIsHuman] = useState(null);
	const [humanLoading, setHumanLoading] = useState(false);

	const [sentLoading, setSentLoading] = useState(false);

	const handleVerifyChange = (e) => {
		const userInput = e.target.value.trim();

		setHumanLoading(true);
		setTimeout(() => {
			if (userInput === "4") {
				setIsHuman(true);
			} else {
				setIsHuman(false);
			}
			setHumanLoading(false);
		}, 1000);
	};

	const initialValue = {
		name: "",
		email: "",
		subject: "",
		message: "",
	};

	const validationSchema = Yup.object().shape({
		name: Yup.string().min(2).max(20).required("Name is required"),
		email: Yup.string().email().required("Email is required"),
		subject: Yup.string().min(3).max(30).required("Subject is required"),
		message: Yup.string().min(3).required("Message is required"),
	});

	const [success, setSuccess] = useState(null);

	const onSubmit = async (values) => {
		const { ...data } = values;

		setSentLoading(true);

		try {
			const response = await axios.post(
				`https://refined-portfolio-api.onrender.com/mail`,
				data,
			);
			if (response && response.data) {
				setSuccess(response.data.message);
				console.log("mail button clicked");
			}
		} catch (err) {
			if (err && err.response) console.log("Error: ", err);
		} finally {
			setSentLoading(false);
		}
	};

	useEffect(() => {
		if (success !== null) {
			alert(success);
			setSuccess(null);
		}
	}, [success]);

	const formik = useFormik({
		initialValues: initialValue,
		validationSchema: validationSchema,
		validateOnBlur: true,
		onSubmit,
	});

	return (
		<div className="contactInfo">
			<div className="head-text">
				<motion.h1
					variants={textVariants}
					initial="initial"
					animate="animate"
				>
					GET IN <span>TOUCH</span>
				</motion.h1>
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
								<FontAwesomeIcon
									className="media-icon"
									icon={faEnvelope}
								/>
							</div>
							<div className="media">
								<a
									href="mailto:email@example.com"
									target="_blank"
									rel="noreferrer"
								>
									<p className="command-text">MAIL ME</p>
									<p>aanileleye@gmail.com</p>
								</a>
							</div>
						</div>
						<div className="social-media">
							<div>
								<FontAwesomeIcon
									className="media-icon"
									icon={faPhone}
								/>
							</div>
							<div className="media">
								<p className="command-text">CALL ME</p> <p>+234 815 912 4775</p>
							</div>
						</div>
						<div className="social-media-icons">
							<a
								href="https://twitter.com/_mohawwal"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon
									className="icon"
									icon={faXTwitter}
								/>
							</a>
							<a
								href="https://www.linkedin.com/in/anileleye-awwal-878556145/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon
									className="icon"
									icon={faLinkedin}
								/>
							</a>
							<a
								href="https://github.com/mohawwal"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon
									className="icon"
									icon={faGithub}
								/>
							</a>
						</div>
					</div>
				</div>

				<FormikProvider value={formik}>
					<form
						onSubmit={formik.handleSubmit}
						className="contact-details"
					>
						<div className="details-input">
							<div className="input-text">
								<p>Your Name</p>
								<div className="input-textField">
									<Field
										className="fieldInput"
										type="text"
										placeholder="How do i address?"
										name="name"
										value={formik.values.name}
										onChange={formik.handleChange}
									/>
									<ErrorMessage
										name="name"
										component="div"
										className="errorMsg"
									/>
								</div>
							</div>
							<div className="input-text">
								<p>Your Email</p>{" "}
								<div className="input-textField">
									<Field
										className="fieldInput"
										type="email"
										placeholder="How can i get in touch with you?"
										name="email"
										value={formik.values.email}
										onChange={formik.handleChange}
									/>
									<ErrorMessage
										name="email"
										component="div"
										className="errorMsg"
									/>
								</div>
							</div>
							<div className="input-text">
								<p>Subject</p>
								<div className="input-textField">
									<Field
										className="fieldInput"
										type="text"
										placeholder="What are we discussing about?"
										name="subject"
										value={formik.values.subject}
										onChange={formik.handleChange}
									/>
									<ErrorMessage
										name="subject"
										component="div"
										className="errorMsg"
									/>
								</div>
							</div>
						</div>
						<div className="message-text">
							<p>Your Message</p>{" "}
							<Field
								as="textarea"
								className="textarea"
								placeholder="Kindly provide more information about what you'd like me to help you with. Thanks."
								name="message"
								value={formik.values.message}
								onChange={formik.handleChange}
							/>
							<ErrorMessage
								name="message"
								component="div"
								className="errorMsg"
							/>
						</div>

						{/* <div className="recap">
							<ReCAPTCHA
								sitekey={process.env.REACT_APP_SITE_KEY}
								onChange={onChange}
							/>
						</div> */}

						<div className="verify">
							<div>VERIFY IF YOU ARE HUMAN</div>
							<div className="human">
								<input
									className="humanText"
									type="text"
									placeholder="2 + 2"
									onChange={handleVerifyChange}
								/>
								<div className="loadingGif">
									{humanLoading ? (
										<div>
											<img
												src={loadingCar}
												alt=""
											/>
										</div>
									) : (
										""
									)}
								</div>
							</div>
							<div>
								{isHuman ? (
									<div className="humanError">VERIFIED!</div>
								) : (
									<div className="errorMsg">
										What does a robot have for me ?
									</div>
								)}
							</div>
						</div>

						<button
							type="submit"
							// disabled={!isRecapChecked}
							disabled={!isHuman}
							className="message-btn"
						>
							{success ? success : "GET IN TOUCH"}
						</button>
					</form>
				</FormikProvider>
			</div>
			
		</div>
	);
};

export default Contact;
