import "../styles/App.css";
import Home from "./Home";
import React, { useState } from "react";
import Portfolio from "./Portfolio";
import CommandList from "./CommandList";
import AboutMe from "./AboutMe";
import NotFound from "./NotFound";
import { Route, Routes, useNavigate } from "react-router";

function App() {
	const [currentCommand, setCurrentCommand] = useState("");
	const [previousCommands, setPreviousCommands] = useState([]);
	const navigate = useNavigate();
	const commands = ["--help", "about", "portfolio", "home"];
	const handleSubmit = (event) => {
		event.preventDefault();
		const commandLowered = currentCommand.toLowerCase();
		console.log(previousCommands);
		setPreviousCommands(previousCommands.concat(commandLowered));
		console.log(previousCommands);
		if (commands.includes(commandLowered) === false) {
			navigate("/notfound");
		}
		if (commandLowered === "--help") {
			navigate("/help");
		}
		if (commandLowered === "about") {
			navigate("/about");
		}
		if (commandLowered === "portfolio") {
			navigate("/portfolio");
		}
		if (commandLowered === "home") {
			navigate("/home");
		}
		if (commandLowered === "clear") {
			setPreviousCommands([]);
			navigate("/");
		}
		setCurrentCommand("");
	};

	return (
		<div>
			<div>
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/help" element={<CommandList />} />
					<Route path="/notfound" element={<NotFound />} />
					<Route path="/about" element={<AboutMe />} />
					<Route path="/portfolio" element={<Portfolio />} />
				</Routes>
			</div>
			<div className="typeSpace">
				<ul className="previousCommands">
					{previousCommands.map((command, index) =>
						commands.includes(command) ? (
							<li className="valid" key={index}>
								{command}
							</li>
						) : (
							<li className="invalid" key={index}>
								{command}
							</li>
						)
					)}
				</ul>
				<form onSubmit={(event) => handleSubmit(event)}>
					<span className="terminalTitle"> &#10097; CorbinCampbell </span>
					<input
						className="typeSpace"
						autoFocus={true}
						value={currentCommand}
						onChange={(event) => setCurrentCommand(event.target.value)}
					></input>
				</form>
			</div>
		</div>
	);
}

export default App;
