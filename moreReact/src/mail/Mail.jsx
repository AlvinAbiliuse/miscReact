import { useState } from "react";
import { initialLetters } from "./data.jsx";
import Letter from "./Letter.jsx";
import "./Mail.css";

export default function mail() {
	const [letters, setLetters] = useState(initialLetters);
	const [highlightedId, setHighlightedId] = useState(null);

	function handleHover(letter) {
		setHighlightedId(letter.id);
	}

	function handleStar(starred) {
		setLetters(
			letters.map((letter) => {
				if (letter.id === starred.id) {
					return {
						...letter,
						isStarred: !letter.isStarred,
					};
				} else {
					return letter;
				}
			})
		);
	}

	return (
		<>
			<h2>Inbox</h2>
			<ul>
				{letters.map((letter) => (
					<Letter
						key={letter.id}
						letter={letter}
						isHighlighted={letter.id === highlightedId}
						onHover={handleHover}
						onToggleStar={handleStar}
					/>
				))}
			</ul>
		</>
	);
}
