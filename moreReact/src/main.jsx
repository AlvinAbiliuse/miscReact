import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Mail from "./Mail.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Mail />
	</StrictMode>
);
