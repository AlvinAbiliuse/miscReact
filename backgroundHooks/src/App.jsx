import React, { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

export default function App() {
	const [backgroundColor, setBackgroundColor] = useState(() => COLORS[0]);
	const [count, setCount] = useState(() => 0);

	const onButtonClick = (color) => () => {
		setBackgroundColor(color);
		setCount((n) => n + 1);
	};

	return (
		<div
			className="App"
			style={{
				backgroundColor,
			}}
		>
			<div className="btnContainer">
				{COLORS.map((color) => (
					<button
						type="button"
						key={color}
						onClick={onButtonClick(color)}
						className={backgroundColor === color ? "selected" : ""}
					>
						{color}
					</button>
				))}
			</div>
			<button className="count">Background change count: {count}</button>
		</div>
	);
}
