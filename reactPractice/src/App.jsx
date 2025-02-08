import { useState } from "react";
import "./App.css";

function Button({ handleClick, btnStyle, click = "yes" }) {
	return (
		<button onClick={handleClick} style={{ color: btnStyle }}>
			{click === "yes" ? "Click Me!" : "Don't Click Me!"}
		</button>
	);
}

export default function App() {
	const urls = [
		"https://www.google.com",
		"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		"https://images.unsplash.com/photo-1578070181910-f1e514afdd08?q=80&w=933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	];

	return (
		<>
			<Button
				btnStyle="gray"
				handleClick={() => {
					window.location.href = urls[0];
				}}
			/>
			<Button
				click="no"
				btnStyle="red"
				handleClick={() => {
					window.location.href = urls[1];
				}}
			/>
			<Button
				btnStyle="blue"
				handleClick={() => {
					window.location.href = urls[2];
				}}
			/>
		</>
	);
}
