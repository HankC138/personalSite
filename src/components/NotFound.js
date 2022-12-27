import React from "react";
import { Typewriter } from "react-simple-typewriter";
export const NotFound = () => {
	return (
		<div>
			<ul>
				<li className="headItem">
					<span className="terminalTitle">CorbinCampbell: </span>
					<Typewriter
						typeSpeed={15}
						words={["Invalid Command"]}
						cursor={false}
					/>
				</li>
				<br />
				<li>
					<Typewriter
						typeSpeed={15}
						words={["Type --help for a list of commands"]}
					/>
				</li>
				<br />
			</ul>
		</div>
	);
};
export default NotFound;
