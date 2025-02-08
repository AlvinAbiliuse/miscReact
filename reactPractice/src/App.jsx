import { useState } from "react";
import "./App.css";

function Button(click) {
	return (
		<button>{click.click === "yes" ? "Click Me!" : "Don't Click Me!"}</button>
	);
}

function App() {
	return (
		<>
			<Button click="yes" />
			<Button click="no" />
			<Button click="yes" />
		</>
	);
}

export default App;
