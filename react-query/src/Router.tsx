import { Routes, Route } from "react-router-dom";
import { Repos } from "./pages/Repos";
import { Repo } from "./pages/Repo";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<Repos />} />
			<Route path="/repos/*" element={<Repo />} />
		</Routes>
	);
}
