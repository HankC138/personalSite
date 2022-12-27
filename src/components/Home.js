import "../styles/App.css";
import { Typewriter } from "react-simple-typewriter";
import React from "react";
const Home = () => {
	return (
		<div className="App">
			<ul>
				<li className="headItem">
					<Typewriter
						words={[
							"Please enter a command for more information on Corbin Campbell",
						]}
						typeSpeed={15}
					/>
				</li>
				<br />
				<li>
					<Typewriter
						words={["--help for a list of commands"]}
						typeSpeed={15}
						cursor={false}
					/>
				</li>
				<br />
			</ul>
		</div>
	);
};

export default Home;
