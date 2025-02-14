import { useState } from "react";

export default function App() {
	let [first, setFirst] = useState("");
	let [second, setSecond] = useState("");
	function changeFirst(e) {
		setFirst(e.target.value);
	}
	function changeSecond(e) {
		setSecond(e.target.value);
	}
	return (
		<>
			<h1>{first + " " + second}</h1>
			<input value={first} onChange={changeFirst} />
			<input value={second} onChange={changeSecond} />
		</>
	);
}
