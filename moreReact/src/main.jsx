import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Mail from "./mail/Mail.jsx";
import Multiple from "./multiple/Multiple.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<div class="container">
			<Multiple />
		</div>
		<div class="container">
			<Mail />
		</div>
	</StrictMode>
);
