import { useState } from "react";
import "./App.css";

function Button(props) {
	return (
		<button style={{ color: props.btnStyle }}>
			{props.click === "yes" ? "Click Me!" : "Don't Click Me!"}
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
