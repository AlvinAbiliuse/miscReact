import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import SecondApp from "./SecondApp.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<SecondApp />
		<App />
	</StrictMode>
);
