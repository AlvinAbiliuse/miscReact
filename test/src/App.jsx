import { useState } from "react";
import "./App.css";

export default function App() {
	let [count, setCount] = useState(4);
	console.log(count);
	return (
		<>
			<button>-</button>
			<p>{count}</p>
			<button>+</button>
		</>
	);
}
