import { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

let storage = window.localStorage;

if (storage.length == 0) {
	storage.setItem("data", JSON.stringify({ color: COLORS[0], count: 0 }));
}

let data = JSON.parse(storage["data"]);

console.log(data);

export default function App() {
	const [backgroundColor, setBackgroundColor] = useState(() => data.color);
	const [count, setCount] = useState(() => data.count);

	const onButtonClick = (color) => () => {
		data.color = color;
		data.count = data.count + 1;
		storage.data = JSON.stringify(data);
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
