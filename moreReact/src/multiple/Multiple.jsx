import { useState } from "react";
import { letters } from "./data.jsx";
import Letter from "./Letter.jsx";

export default function Multiple() {
	const [selectedId, setSelectedId] = useState([]);
	console.log(selectedId);

	// TODO: allow multiple selection
	const selectedCount = selectedId.length;

	function handleToggle(toggledId) {
		// TODO: allow multiple selection
		if (toggledId in selectedId) {
			setSelectedId(selectedId.filter((e) => e !== toggledId));
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
						isSelected={selectedId.length > 0 ? letter.id in selectedId : false}
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
