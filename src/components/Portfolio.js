import React from "react";
import "../styles/App.css";
import { Typewriter } from "react-simple-typewriter";

const Portfolio = () => {
	return (
		<ul>
			<li className="headItem">
				<span className="terminalTitle">CorbinCampbell: </span>
				<Typewriter
					typeSpeed={15}
					words={["Helpful links to projects I've worked on"]}
					cursor={false}
				/>
			</li>
			<li>
				{" "}<a href="https://github.com/HankC138" target="blank">
					Github/HankC138
				</a>
			</li>
		</ul>
	);
};

export default Portfolio;
