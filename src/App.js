import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate
} from "react-router-dom";

import NavbarTop from "./components/Layouts/NavbarTop";
import NavbarVertical from "./components/Layouts/NavbarVertical";

import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
	return (
		<Router>
			<NavbarTop />

			<Routes>
				<Route index path="/accueil" element={<Home />} />

				<Route path="/profil" element={<Navigate replace to="/" />} />
				<Route exact path="/profil/:id" element={<Profile />} />

				<Route path="*" element={<Navigate replace to="/accueil" />} />
			</Routes>

			<NavbarVertical />
		</Router>
	);
}

export default App;