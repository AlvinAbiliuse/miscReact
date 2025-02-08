import { useState } from "react";
import "./App.css";

function Button() {
	return <button>Click Me</button>;
}

function Button2() {
	return <button>Don&apos;t Click Me!</button>;
}

function App() {
	return (
		<>
			<Button />
			<Button2 />
			<Button />
		</>
	);
}

export default App;
