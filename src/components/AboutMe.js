import React from "react";

const AboutMe = () => {
	return (
		<div>
			<ul>
				<li className="contentItem">
					{" "}
					I started down the path of becoming a web developer in 2022 when I
					enrolled at Fullstack Academy.
					<ul className="languages">
						Languages
						<li>Javascript</li>
						<li>React</li>
						<li>SQL</li>
						<li>CSS</li>
					</ul>
				</li>
				<li className="contentItem">
					{" "}
					You can find out more about me and what I'm currently up to on my{" "}
					<a href="https://linkedin.com/in/corbin-campbell" target="blank">
						LinkedIn
					</a>
				</li>
			</ul>
		</div>
	);
};

export default AboutMe;
