import { useState } from "react";
import { initialLetters } from "./data.jsx";
import Letter from "./Letter.jsx";
import "./App.css";

export default function mail() {
	const [letters, setLetters] = useState(initialLetters);
	const [highlightedLetter, setHighlightedLetter] = useState(null);

	function handleHover(letter) {
		setHighlightedLetter(letter);
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
						isHighlighted={letter === highlightedLetter}
						onHover={handleHover}
						onToggleStar={handleStar}
					/>
				))}
			</ul>
		</>
	);
}
