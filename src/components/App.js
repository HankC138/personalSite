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
	const navigate = useNavigate();
	const handleSubmit = (event) => {
		const commands = ["--help", "about", "portfolio", "intro"];
		event.preventDefault();
		const commandLowered = currentCommand.toLowerCase();
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
