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
	if (!props.animals) {
		return <div>Loading...</div>;
	}

	if (props.animals.length === 0) {
		return <div>There are no animals in the list</div>;
	}

	return (
		<ul>
			{props.animals.map((animal) => {
				if (animal.length > 3) {
					return <li key={animal}>{animal} </li>;
				}
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
