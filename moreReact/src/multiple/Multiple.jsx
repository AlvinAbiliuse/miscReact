import { useState } from "react";
import { letters } from "./data.jsx";
import Letter from "./Letter.jsx";

export default function Multiple() {
	const [selectedId, setSelectedId] = useState([]);
	console.log(selectedId);

	const selectedCount = selectedId.length;

	function handleToggle(toggledId) {
		if (selectedId.includes(toggledId)) {
			setSelectedId((list) => list.filter((e) => e !== toggledId));
		} else {
			setSelectedId([...selectedId, toggledId]);
		}
	}

	return (
		<>
			<h2>Inbox</h2>
			<ul>
				{letters.map((letter) => (
					<Letter
						key={letter.id}
						letter={letter}
						isSelected={selectedId.includes(letter.id)}
						onToggle={handleToggle}
					/>
				))}
				<hr />
				<p>
					<b>You selected {selectedCount} letters</b>
				</p>
			</ul>
		</>
	);
}
