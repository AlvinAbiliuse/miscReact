import { useState } from "react";
import "./App.css";

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

export default function App() {
	let [num, setNum] = useState(currentDate());

	setInterval(() => {
		setNum((num) => (num = currentDate()));
	}, 500);
	return (
		<>
			<p>{num}</p>
		</>
	);
}
