import { useState } from "react";
import "./App.css";

export default function App() {
	let [count, setCount] = useState(4);

	function decrement() {
		setCount((tt) => tt - 1);
	}

	function increment() {
		setCount((tt) => tt + 1);
	}

	return (
		<>
			<button onClick={decrement}>-</button>
			<p>{count}</p>
			<button onClick={increment}>+</button>
		</>
	);
}
