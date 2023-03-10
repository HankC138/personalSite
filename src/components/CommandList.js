import React from "react";
import { Typewriter } from "react-simple-typewriter";

const CommandList = () => {
	return (
		<ul>
			<li>
			<span className="pageTerminalTitle">CorbinCampbell: </span>
				<Typewriter typeSpeed={15} words={["home /home page"]} cursor={false} />
			</li>
			<br />
			<li>
				<Typewriter
					typeSpeed={15}
					words={["about /about Corbin Campbell page"]}
					cursor={false}
				/>
			</li>
			<br />
			<li>
				<Typewriter
					typeSpeed={15}
					words={["portfolio /portfolio page"]}
					cursor={false}
				/>
			</li>
			<br />
			<li>
				<Typewriter
					typeSpeed={15}
					words={["github /redirect to github profile"]}
					cursor={false}
				/>
			</li>
			<br />
			<li>
				<Typewriter
					typeSpeed={15}
					words={["linkedin /redirect to linkedin profile"]}
					cursor={false}
				/>
			</li>
			<br />
			<li>
				<Typewriter
					typeSpeed={15}
					words={["clear /clear the console"]}
					cursor={false}
				/>
			</li>
			<br />
			<li>
				<Typewriter
					typeSpeed={15}
					words={["--help /list of commands"]}
					cursor={false}
				/>
			</li>
			<br />
		</ul>
	);
};

export default CommandList;
