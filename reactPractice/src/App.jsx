import { useState } from "react";
import "./App.css";

function Button({ btnStyle, click = "yes" }) {
	return (
		<button style={{ color: btnStyle }}>
			{click === "yes" ? "Click Me!" : "Don't Click Me!"}
		</button>
	);
}

export default function App() {
	return (
		<>
			<Button btnStyle="gray" />
			<Button click="no" btnStyle="red" />
			<Button btnStyle="blue" />
		</>
	);
}
