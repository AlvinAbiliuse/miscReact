import { useState } from "react";
import "./App.css";

function greeting() {
	return (
		<h1>&quot;I swear by my pretty floral bonnet, I will end you.&quot;</h1>
	);
}

let animals = ["Dog", "Cat", "Lion", "Cow", "Lizard"];

let animalList = animals.map((animal) => <li key={animal}>{animal}</li>);

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>Animals</h1>
			<ul>{animalList}</ul>
			{greeting()}
		</>
	);
}

export default App;
