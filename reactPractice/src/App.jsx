import { useState } from "react";
import "./App.css";

function Button({ btnStyle, click }) {
	return (
		<button style={{ color: btnStyle }}>
			{click === "yes" ? "Click Me!" : "Don't Click Me!"}
		</button>
	);
}

export default function App() {
	return (
		<>
			<Button click="yes" btnStyle="gray" />
			<Button click="no" btnStyle="red" />
			<Button click="yes" btnStyle="blue" />
		</>
	);
}
