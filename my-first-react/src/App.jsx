import { useState } from "react";
import "./App.css";

function greeting() {
	return (
		<h1>&quot;I swear by my pretty floral bonnet, I will end you.&quot;</h1>
	);
}

function ListItem(props) {
	return <li>{props.animal}</li>;
}

function List(props) {
	return (
		<ul>
			{props.animals.map((animal) => {
				return animal.startsWith("L") ? <li key={animal}>{animal} </li> : null;
			})}
		</ul>
	);
}

function App() {
	const animals = ["Lions", "Cow", "Snake", "Lizard"];

	return (
		<>
			<h1>Animals</h1>
			<List animals={animals} />
			{greeting()}
		</>
	);
}

export default App;
