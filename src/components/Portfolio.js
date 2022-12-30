import React from "react";
import "../styles/App.css";
import { Typewriter } from "react-simple-typewriter";

const Portfolio = () => {
	return (
		<ul>
			<ul className="headItem">
				<span className="terminalTitle">CorbinCampbell: </span>
				<Typewriter
					typeSpeed={15}
					words={["Helpful links to projects I've worked on"]}
					cursor={false}
				/>
				<li>example project</li>
				<li>example project</li>
			</ul>
		</ul>
	);
};

export default Portfolio;
