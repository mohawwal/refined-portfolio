import React from "react";
import { motion } from "framer-motion";

const LanguagesElement = ({ language, itemVariants }) => {
	return (
		<motion.div variants={itemVariants} className="about_img">
			<img
				src={language.image}
				alt={language.name + "icon"}
			/>
			<p>{language.name}</p>
		</motion.div>
	);
};

export default LanguagesElement;
