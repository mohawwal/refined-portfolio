import React from "react";

const LanguagesElement = ({ language }) => {
	return (
		<div className="about_img">
			<img
				src={language.image}
				alt={language.name + "icon"}
			/>
			<p>{language.name}</p>
		</div>
	);
};

export default LanguagesElement;
