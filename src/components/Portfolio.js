import React from "react";
import "../styles/App.css";
import { Typewriter } from "react-simple-typewriter";

const Portfolio = () => {
	return (
		<ul>
			<li>
				{" "}
				<span className="pageTerminalTitle">CorbinCampbell: </span>
				<Typewriter
					typeSpeed={15}
					words={["Helpful links to projects I've worked on"]}
					cursor={false}
				/>
			</li>
			<li>{" "}example project</li>
			<li>{" "}example project</li>
		</ul>
	);
};

export default Portfolio;
