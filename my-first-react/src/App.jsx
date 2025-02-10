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

function currentDate() {
	let d = new Date();
	let hours, minutes, seconds;
	if (d.getHours() < 10) {
		hours = "0" + d.getHours();
	} else hours = d.getHours();

	if (d.getMinutes() < 10) {
		minutes = "0" + d.getMinutes();
	} else minutes = d.getMinutes();

	if (d.getSeconds() < 10) {
		seconds = "0" + d.getSeconds();
	} else seconds = d.getSeconds();

	return `${hours}:${minutes}:${seconds}`;
}

function App({ n }) {
	let [num, setNum] = useState(currentDate());

	const animals = ["Lions", "Cow", "Snake", "Lizard"];
	setInterval(() => {
		setNum((newNum) => (newNum = currentDate()));
	}, 500);
	return (
		<>
			<p>{num}</p>
		</>
	);
}

export default App;
