import {
	faGithub,
	faLinkedin,
	faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import ReCAPTCHA from "react-google-recaptcha";
import { sendMessage } from "../../action/contactAction";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, useContext } from "react";
import "./Contact.css";

import { Field, ErrorMessage, useFormik, FormikProvider } from "formik";
import * as Yup from "yup";

import { motion } from "framer-motion";
import AlertContext from "../alert/AlertContext";

const Contact = () => {
	const dispatch = useDispatch();

	const [, setAlert] = useContext(AlertContext);
	const showAlert = (message, type) => {
		setAlert({
			message,
			type,
		});
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

	const { error, loading, delivered } = useSelector(
		(state) => state.contact,
	);

	const No1 = Math.floor(Math.random() * 5) + 1;
	const No2 = Math.floor(Math.random() * 5) + 1;
	const totalNo = No1 + No2;

	const [isVerify, setIsVerify] = useState(false);

	const verifyFunc = (e) => {
		const inputVerifyNo = parseInt(e.target.value);

		if (totalNo === inputVerifyNo) {
			setIsVerify(true);
		} else {
			setIsVerify(false);
		}
	};

	useEffect(() => {
		if (error) {
			showAlert(error, "error");
		}

		if (delivered) {
			showAlert('Message Delivered', "success");
		}
	}, [delivered, error]);

	const initialValue = {
		name: "",
		email: "",
		subject: "",
		message: "",
	};

	const validationSchema = Yup.object().shape({
		name: Yup.string().min(2).max(20).required("Name is required"),
		email: Yup.string().email().required("Email is required"),
		subject: Yup.string().min(3).max(60).required("Subject is required"),
		message: Yup.string().min(3).required("Message is required"),
	});


	const onSubmit = async (values, { resetForm }) => {
		if(!isVerify) {
			setAlert('verification incomplete', 'error') 
			return
		}
		
		let formData = new FormData();

		formData.append("name", values.name);
		formData.append("email", values.email);
		formData.append("subject", values.subject);
		formData.append("message", values.message);

		dispatch(sendMessage(formData))
			.then(() => {
				resetForm();
				setIsVerify(false)
			})
			.catch((error) => {
				setAlert(error, "error");
			});
	};

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

						<div className="verifyHuman">
							<div>
								{!isVerify ? (
									<p className="verifyQst">
										{No1} + {No2} =
									</p>
								) : null}
							</div>
							<input
								type="number"
								onChange={verifyFunc}
								placeholder="Answer ?"
							/>
						</div>
						{isVerify ? (
							<p className="verifyText">Verified 👍</p>
							) : (
							<p className="verifyErrorMsg">Not Verified</p>
						)}

						<button
							type="submit"
							//disabled={!formik.isValid || !formik.dirty}
							className={
								!formik.isValid || !formik.dirty || !isVerify
									? "notMessage-btn"
									: "message-btn"
							}
						>
							{loading ? (
								<div className="loadingAnim">
									<ClipLoader
										color="black"
										loading={true}
										size={26}
									/>
								</div>
							) : (
								<div>GET IN TOUCH</div>
							)}
						</button>
					</form>
				</FormikProvider>
			</div>
		</div>
	);
};

export default Contact;
