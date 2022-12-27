import React from "react";
import { Typewriter } from "react-simple-typewriter";

const CommandList = () => {
	return (
		<ul>
			<li>
				<Typewriter typeSpeed={15} words={["Home /home page"]} cursor={false} />
			</li>
			<br />
			<li>
				<Typewriter
					typeSpeed={15}
					words={["About /about Corbin Campbell page"]}
					cursor={false}
				/>
			</li>
			<br />
			<li>
				<Typewriter
					typeSpeed={15}
					words={["Portfolio /portfolio page"]}
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
