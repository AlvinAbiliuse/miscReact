import { useState } from "react";
import "./App.css";

function greeting() {
	return (
		<h1>&quot;I swear by my pretty floral bonnet, I will end you.&quot;</h1>
	);
}

function App() {
	const [count, setCount] = useState(0);

	return <>{greeting()}</>;
}

export default App;
