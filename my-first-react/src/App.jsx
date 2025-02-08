import { useState } from "react";
import "./App.css";

function greeting() {
	return (
		<h1>&quot;I swear by my pretty floral bonnet, I will end you.&quot;</h1>
	);
}

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>Test title</h1>
			<svg>
				<circle cx="150" cy="75" r="20" stroke="green" strokeWidth="2" />
			</svg>
			<form>
				<input type="text" />
			</form>
			{greeting()}
		</>
	);
}

export default App;
